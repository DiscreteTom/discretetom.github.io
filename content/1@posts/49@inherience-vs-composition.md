---
title: 如何使用组合代替继承
description: 以 typescript 为例
---

## 前言

很多人都在说建议使用组合代替继承。本文不分析二者的优缺点。

具体如何实现呢？

## 父类作为容器

- 对外暴露的接口/类型是一致的（都是父类）
  - 对外部来说，子类是不可知的
- 父类内部逻辑是可变的，由子类决定内部逻辑
- 可以用来替换面向对象里面的 virtual/abstract 等需要由子类实现逻辑的场景
  - 也可以配合函数指针使用
- 【子类】类似于【父类】的【插件】

```ts
interface IChild {
  foo(): number;
}

class Parent {
  child: IChild;

  constructor(child: IChild) {
    this.child = child;
  }

  bar() {
    // 不同的子类会影响父类的内部逻辑
    return this.child.foo();
  }
}

class ChildA {
  foo() {
    return 1;
  }
}

class ChildB {
  foo() {
    return 2;
  }
}

// 对外暴露的都是父类
const parents: Parent[] = [new Parent(new ChildA()), new Parent(new ChildB())];
```

## 子类作为容器

- 不同子类可以有不同功能
- 经常需要实现代理，即访问子类时直接访问父类
  - 也可以直接把父类变为 public，当然这有风险
- 可以用来替换面向对象里面的 extends，也就是继承
- 【子类】类似于【父类】的【包装】

```ts
class Parent {
  foo() {
    return 1;
  }
}

class ChildA {
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
  }

  foo() {
    // 代理父类的功能
    return this.parent.foo();
  }
}
```
