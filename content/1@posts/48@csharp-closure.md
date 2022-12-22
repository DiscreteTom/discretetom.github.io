---
title: C# 闭包会如何处理值类型的变量
description: 省流：会自动把值类型变量装箱为引用类型
tags:
  - Gaming / 游戏
  - Unity3D
---

## 前言

上一篇博客中，我们介绍了使用 `ComposableBehaviour` 来简化代码，并使代码逻辑更加清晰

```cs
// 传统写法
public class A : MonoBehaviour {
  // 业务逻辑A
  int a;

  // 业务逻辑B
  int b;

  void Start() {
    // 业务逻辑A
    this.a = 1;

    // 业务逻辑B
    this.b = 1;
  }

  void Update() {
    // 业务逻辑A
    ...

    // 业务逻辑B
    ...
  }
}

// 使用ComposableBehaviour
public class B : ComposableBehaviour {
  void Start() {
    // 业务逻辑A
    var a = 1;
    this.OnUpdate.AddListener(() => { ... });

    // 业务逻辑B
    var b = 1;
    this.OnUpdate.AddListener(() => { ... });
  }
}
```

那么问题来了，如果我使用 `ComposableBehaviour` ，定义了一个值类型的局部变量，并且同时被两个或以上的 lambda 函数引用，会发生什么？

```cs
public class B : ComposableBehaviour {
  void Start() {
    int a = 1; // 值类型的变量
    this.OnNextUpdate.AddListener(() => { a++; }); // 第一次被引用
    this.OnNextUpdate.AddListener(() => { print(a); }); // 第二次被引用
  }
}
```

## 如果是 Rust 语言

Rust 语言对 lambda 捕获上下文的情况有着比较清晰的行为定义，简单来说：

- 如果变量是值类型，则仅复制值
- 如果变量是引用类型，则默认会把变量所有权 move 到 lambda 函数中

如果 C# 使用同样的逻辑，仅复制值，那么两次函数调用就会导致出现两个 int 变量，我们 print 的结果就是 1 而不是 2

*假设*真是这样，我们就需要通过【装箱/Boxing】，把值类型变成引用类型：

```cs
public class Box<T> {
  public T value;
}

public class B : ComposableBehaviour {
  void Start() {
    Box<int> a = new Box<int>(){ value = 1 }; // **引用**类型的变量
    this.OnNextUpdate.AddListener(() => { a.value++; }); // 第一次被引用
    this.OnNextUpdate.AddListener(() => { print(a.value); }); // 第二次被引用
  }
}
```

这样，即使两个 lambda 函数会复制 a，也会得到引用，访问的`a.value`仍然是同一个值

## C# 会怎么做

经过测试，C# 似乎会自动帮我们装箱，把值类型变为引用类型

不过，[巨硬自己的 C# 文档](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions#capture-of-outer-variables-and-variable-scope-in-lambda-expressions)并没有详细解释这一行为

为了解释这一行为，我们可以看下 C# 会把上面的代码编译成什么结果。对此，我找到了一个工具网站：[SharpLab](https://sharplab.io/)，它可以查看 C# 编译出来的 IR

不过，对于这次的案例，不至于查看 IR，直接查看 Debug 模式的代码，就可以看出来 C# 的内部处理逻辑

测试代码：

```cs
using System;
public class C {
    public (Func<int>, Action) M() {
        var a = 1;

        var f1 = () => a = 2;
        var f2 = () => Console.WriteLine(a);

        return (f1,f2);
    }
}
```

编译后的部分 Debug 代码：

```cs
public class C
{
    [CompilerGenerated]
    private sealed class <>c__DisplayClass0_0
    {
        public int a;

        internal int <M>b__0()
        {
            return a = 2;
        }

        internal void <M>b__1()
        {
            Console.WriteLine(a);
        }
    }

    [return: System.Runtime.CompilerServices.Nullable(new byte[] { 0, 1, 1 })]
    public ValueTuple<Func<int>, Action> M()
    {
        <>c__DisplayClass0_0 <>c__DisplayClass0_ = new <>c__DisplayClass0_0();
        <>c__DisplayClass0_.a = 1;
        Func<int> item = new Func<int>(<>c__DisplayClass0_.<M>b__0);
        Action item2 = new Action(<>c__DisplayClass0_.<M>b__1);
        return new ValueTuple<Func<int>, Action>(item, item2);
    }
}
```

可以看到，C# 其实会帮我们创建一个内部类，然后把局部变量 a 变成一个成员变量。两个函数访问 a 的时候，会访问相同的成员变量，从而实现访问同一个变量的效果

简言之：C# 帮我们实现了类似装箱的效果，把值类型变为引用类型

思考题：如果只有一个 lambda 函数引用了局部变量，结论是否一样？如果没有 lambda 函数引用这个局部变量，结论是否一样？诸位可以自行在 SharpLab 试下（笑）
