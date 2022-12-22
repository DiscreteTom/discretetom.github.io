---
title: 游戏客户端架构设计思路
description: 统一入口、MVC、分层等
tags:
  - Gaming / 游戏
  - Unity3D
---

## 前言

最近学习了不少游戏客户端架构相关的东西，包括[此视频](https://www.bilibili.com/video/BV1JB4y1S7hk)，[此视频](https://www.bilibili.com/video/BV1vg411g7Fn)和[此视频](https://www.bilibili.com/video/BV1Wi4y157cE)

不同大佬的核心目标都是一样的：构建高内聚、低耦合的游戏客户端代码，使大型项目的开发更加可控，提高业务逻辑的可扩展性等。

但是不同大佬的实现方式是不一样的，使用的工具也不一样。

我想基于我自己的需求和场景，结合各位大佬的设计思路，提出自己的客户端架构设计哲学。所以就有了本文。所以核心目标都是一样的，只是代码规范/实现规范不同。

以下便是我提出的设计规范，欢迎讨论。

## 架构图

![Architecture](./_img/47-1.png)

## 操作流

### 程序初始化

虽然 App 是 Scene 中唯一顶层 GameObject，但是 Unity3D 中的 Start 函数调用顺序是随机的。为了确保 Core 可以被 App 创建，然后再被其他 Controller 调用，需要在 App 的 Awake 函数中初始化 Core，其他 Controller 可以在 Start 函数中访问 Core

### 业务逻辑与表现的分离，团队合作

业务逻辑基本都在 Core 里面进行。Controller 通过 Command 触发业务逻辑，Core 通过 Event 通知 Controller 更新视图

这样，在团队分工合作中，可以由程序员 A 编写 Command/Events，由程序员 B 实现 View/Controller。只要接口（也就是 Command/Events）被定义好即可

### 解耦

- Controller 之间也是互相不可知的，只能通过 Command / Event 进行交互
- App 也不知道 Controller 的存在，只能通过 Command / Event 进行操作
- App / Controller 都知道 Core 的存在，都只和 Core 交互

## APP

示例：

```cs
public class Core {
  EventBus eBus;
  CommandBus cBus;
  Config config;
  ...
}

public class App : MonoBehaviour {
  public Core core;

  void Awake() {
    // init core
    this.core = new Core();
  }
}
```

## Core

### 禁止单例

单例的坏处：

- 单例可以被全局访问，无法规范化访问控制，导致引用关系复杂
- 单例只能创建一个。当我们需要扩展功能的时候（比如：单个玩家变为两个玩家），可能要大改

原则：

- 除非你特别确定，否则不要在任何地方使用单例、静态类
- 使用可以被实例化的类（可以被 new 出来的类），替代单例
- 使用上文的 APP，在程序入口处创建这些对象，保存在 Core 里面

### ScriptableObject

直接在 Scene 里面通过 MonoBehaviour 中的 public 变量，或 SerializeField 变量，实现修改变量或拖拽绑定，本身就是不稳定，并且难以查询和管理的。多人编辑同一个 Scene 也难以实现版本控制

所以，这些需要在编辑器修改的变量，建议创建 ScriptableObject，以文件的形式保存这些数据（就像保存了一个 JSON 文件，但是可以在编辑器里面修改），同时这些数据还可以被多次引用

当这些数据需要被使用时，也不要通过拖拽绑定。可以使用 Addressables 等资源管理插件，在代码里面获取资源。Code is Law，代码里面的才是最持久的

因为 ScriptableObject 自身是模块化的，不会随着 Scene 改变，可以进行细粒度的版本控制，所以可以在 ScriptableObject 里面进行拖拽绑定

初始化时需要的数据，可以在 APP 的 Start 里面进行获取

示例：

```cs
public class App : MonoBehaviour {
  Core core;

  void Awake() {
    // construct core
    this.core = new Core();
    // sync fetch
    this.core.Config = Addressables.LoadAssetAsync<Config>("Assets/Config.asset").WaitForCompletion();
  }
}
```

### 响应式

有时我们可能希望观察 Model 中的数据变化，从而修改视图

可以实现一个简单的 Watch 类

```cs
public class Watch<T> {
  T value;
  UnityEvent<T, T> onChange;

  public Watch(T value) {
    this.value = value;
    this.onChange = new UnityEvent<T, T>();
  }

  public T Value {
    get => this.value;
    set {
      var old = this.value;
      this.value = value;
      this.onChange.Invoke(value, old);
    }
  }

  public void AddListener(UnityAction<T, T> f) => this.onChange.AddListener(f);
  public void RemoveListener(UnityAction<T, T> f) => this.onChange.RemoveListener(f);
}
```

这样就可以创建响应式 Model

```cs
public class Model {
  public Watch<int> Score { get; private set; }

  public Model() {
    this.Score = new Watch<int>(0);
  }
}
```

赋值和监听：

```cs
public class SomeController : MonoBehaviour {
  void Start() {
    var core = GameObject.Find("App").GetComponent<App>().core;

    // assignment
    core.model.Score.Value = 1;

    // watch for changes
    core.model.Score.AddListener((value, old) => { Debug.Log(value); })
  }
}
```

如果不想自己实现 Watch，可以直接使用[这里的代码片段](https://github.com/DiscreteTom/unity3d-utils/tree/main/General/Watch)

### 事件/消息

可以在 Core 中保存一个全局使用的 EventBus。当然，也不能是单例/静态类

示例：

```cs
// sample events
public class Events {
  public UnityEvent<int> SomeEvent = new UnityEvent<int>();
}

public class App : MonoBehaviour {
  void Awake() {
    this.core.Events = new Events(); // create event bus
  }
}

public class SomeController : MonoBehaviour {
  void Start() {
    var core = GameObject.Find("App").GetComponent<App>().core;

    // watch events
    core.Events.SomeEvent.AddListener(() => { ... });

    // trigger events
    core.Events.SomeEvent.Invoke();
  }
}
```

如果不想自己实现 EventBus，可以直接使用[这里的代码片段](https://github.com/DiscreteTom/unity3d-utils/tree/main/General/EventBus)

## Controllers

### 原则

- Controller 可以通过 App 获得 Core
- Controller 之间是互相无法感知的，需要通过 Core 进行 Controller 之间的交互

上面已经有一些 Controller 的示例了。如果要更好得结合 App 和 Controller，可以参考我实现的 [Framework 库](https://github.com/DiscreteTom/unity3d-utils/tree/main/General/Framework)

### 获取 Core

因为 Core 是 App 创建的，所以 Controller 需要额外的操作才能获取到 Core

在上面的例子中，我们使用`GameObject.Find("App").GetComponent<App>().core`的方式获取 core。如果确保 App 是 Scene 里面的根元素，也可以使用`transform.root.GetComponent<App>().core`等方式获取 Core

因为业务逻辑会频繁使用 Core，所以建议在 `Start` 函数中获取 Core 并保存为成员变量（除非使用下文提到的 Composable 思路）

### Composable

我实现的 [Framework 库](https://github.com/DiscreteTom/unity3d-utils/tree/main/General/Framework)中，Controller 继承了 `ComposableBehaviour`

`ComposableBehaviour` 的功能是提供了 `OnUpdate` 等函数，并禁用了 `Update` 函数，所以所有业务逻辑都可以在 `Start` 函数中实现

```cs
// 传统写法
public class A : MonoBehaviour {
  void Start() {
    ...
  }

  void Update() {
    ...
  }
}

// 使用ComposableBehaviour
public class B : ComposableBehaviour {
  void Start() {
    ...

    this.OnUpdate.AddListener(() => { ... });
  }
}
```

之所以这么设计，是受到前端框架 vue 3.x 的影响，尝试把业务逻辑相近的变量和函数写到物理距离更近的位置:

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

可以看到，使用 ComposableBehaviour，可以使业务逻辑更加紧凑，而不是分散在多个函数中。同时，通过闭包捕获上下文的变量，可以减少成员变量的使用，减少代码量
