---
title: 在TypeScript中巧妙使用泛型实现禁用方法
description: Never!
---

## 背景

之所以研究这个，是因为在 Builder 模式下，我们可能希望某些函数只能被调用一次，或者存在调用的顺序，比如：

```ts
class Builder<T1 = never, T2 = never> {
  actions: ((t1: T1, t2: T2) => void)[];

  constructor() {
    this.actions = [];
  }

  withType1<NewT1>() {
    return this as Builder<NewT1, T2>;
  }

  withType2<NewT2>() {
    return this as Builder<T1, NewT2>;
  }

  add(action: (t1: T1, t2: T2) => void) {
    this.actions.push(action);
    return this;
  }
}
```

对于以上 Builder，我们希望先调用`withType1`和`withType2`设置泛型的类型，然后再调用`add`，这样就可以保证`add`的参数类型是正确的。

```ts
const builder = new Builder()
  .withType1<number>()
  .withType2<string>()
  .add((t1, t2) => {
    // t1: number
    // t2: string
  });
```

但是这个 Builder 并不限制我们修改泛型的类型，或者在调用`add`之后再调用`withType1`和`withType2`，这样就会导致类型错误：

```ts
const builder = new Builder()
  .add((t1, t2) => {
    // t1: never
    // t2: never
  })
  .withType1<number>()
  .withType1<string>(); // override type1
```

通常我们可能会把 Builder 改为一系列的状态机类，从而避免这个情况：

```ts
class EntryBuilder {
  withType1<NewT1>() {
    return new BuilderWithType1<NewT1>();
  }
  withType2<NewT2>() {
    return new BuilderWithType2<NewT2>();
  }
}
class BuilderWithType1<T1> {
  withType2<NewT2>() {
    return new FinalBuilder<T1, NewT2>();
  }
}
class BuilderWithType2<T2> {
  withType1<NewT1>() {
    return new FinalBuilder<NewT1, T2>();
  }
}
class Builder<T1, T2> { ... }
```

但是如果类型参数太多，就需要创建非常多的状态类，可扩展性较差，并且难以命名

## 使用泛型解决

可以把类型参数作为 Flag 来标记某些函数是否已经被调用

```ts
// 添加 ActionAdded 用来标记是否已经添加过 action
class Builder<T1 = never, T2 = never, ActionAdded = false> {
  actions: ((t1: T1, t2: T2) => void)[];

  constructor() {
    this.actions = [];
  }

  withType1<
    NewT1 extends
      ActionAdded extends false // 确保Action没有被添加过
      ? [T1] extends [never] // 确保T1没有被定义过
        ? unknown // 满足以上两个条件，NewT1 extends unknown，所以可以是任意类型
        : never // T1已经被定义过，禁止重复定义，所以 NewT1 extends never
      : never // Action已经被添加过，禁止修改T1类型，所以 NewT1 extends never
  >() {
    return this as Builder<NewT1, T2>;
  }

  // 其他函数同理
  ...
}
```

> 为什么是`[T1] extends [never]` 而不是 `T1 extends never`? https://github.com/microsoft/TypeScript/issues/31751

经过以上操作，重复调用`withType1`或者在调用`add`之后再调用`withType1`都会导致类型错误

以上的例子是应用在了函数的类型参数上，同理也可以应用在函数函数和返回值上，比如：

```ts
// 应用在类型参数上
function f<T extends ...>(){}

// 应用在参数上
function f(p: T extends ...){}

// 应用在返回值上
function f(): T extends ...{}
```

## 优缺点分析

- 优点
  - 代码量少，一个类就能解决所有问题
  - 可扩展性强，不会因为类型参数过多而产生过多的中间类
- 缺点
  - 报错意义不明。报错通常是【无法被赋值给 never】，而不是【已经被定义过】，这可能会让人迷惑
  - 如果要写一些 wrapper 函数，类型声明比较麻烦

Wrapper 函数举例：

```ts
function setBuilderType1<
  T1,
  T2,
  ActionAdded,
  NewT1 extends ActionAdded extends false
    ? [T1] extends [never]
      ? unknown
      : never
    : never
>(builder: Builder<T1, T2, ActionAdded>);
```

为了缓解这个问题，可以定义一些新类型

```ts
type Condition<ActionAdded, T1> = ActionAdded extends false
  ? [T1] extends [never]
    ? unknown
    : never
  : never;
```
