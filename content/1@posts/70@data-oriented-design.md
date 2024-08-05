---
title: 什么是面向数据设计（Data-Oriented Design）
description: 集中处理数据从而平摊边际成本
---

## 前言

本文是观看[此视频](https://www.youtube.com/watch?v=rX0ItVEVjHc)的笔记

## 原则

- The purpose of all programs, and all parts of those programs, is to transform data from one form to another.
  - 所有程序都是在进行数据的转换
- If you don't understand the data you don't understand the problem.
  - Conversely, understand the problem by understanding the data.
  - 理解数据才能理解问题
- Different problems require different solutions.
  - If you have different data, you have a different problem.
  - 不同的数据类型代表着不同的问题，需要不同的解决方案
- If you don't understand the cost of solving the problem, you don't understand the problem.
  - If you don't understand the hardware, you can't reason about the cost of solving the problem.
  - 了解硬件平台，才能理解解决问题的代价，才能理解问题
- Everything is a data problem. Including usability, maintenance, debug-ability, etc. Everything.
  - They are not code problem. They are data problem.
  - 一切问题都是面向数据的，而非面向代码的
- Solving problems you probably don't have creates more problems you definitely do.
  - 不要没苦硬吃，不要给自己增加问题
- Latency and throughput are only the same in sequential systems.
  - 在一个串行系统内，延迟和吞吐其实是一个东西的不同方面
- Where there is one, there are many. Try looking on the time axis.
  - 先解决有共性的、经常出现的问题
- The more context you have, the better you can make the solution. Don't throw away data you need.
  - 不要丢失任何有用的信息

## 打破已有的认知

- Software is the platform?
  - Hardware is the platform!
  - 不同的硬件平台上面的数据表示方式不同，所以针对问题的解法也会不同（比如基于向量的并行化，GPU，量子计算，元胞自动机等）
  - 虽然编程语言可能实现了一些跨平台抽象，但是拒绝这个抽象可能可以实现更好的性能
- Code should be designed around model of the world? (e.g. OOP)
  - 很多时候进行抽象是一种错误的做法，因为可能会强行从不同事物中找到共同点，反而是不利于效率的，并且可能让问题复杂化
- Code is more important than data?
  - 与其关注代码，更应该关注数据，毕竟所有代码的最终目的就是转换数据
  - 程序员的工作不是写代码！而是如何解决【与数据转换相关的】问题，代码只是工具
  - 只写直接的、有价值的代码，比如使用一种有意义的方式转换数据
  - 理解数据才能理解问题，所以不存在一个完美的抽象方案
  - 有时候抽象是为了解决未来的问题，但是很多时候它只是增加了复杂度。未来可能会有未来的新问题（新平台和数据格式）和解决方法
- Solve for the most common case first, not the most generic.

## 例子

### Dictionary

比如实现一个 dictionary 或者 k/v 存储

按照传统面向代码的思路，k/v 应该保存在一起作为一个 pair/tuple

但是 k/v 存储是通过 k 来查询的，在通过 k 进行查询的过程中 v 是没有意义的。CPU 很可能会把（多个） k/v pair load 进来，然后丢弃 v 只检查 k，这样会浪费内存带宽和 CPU cache

DOD 的思路下，k/v 应该分开存储，k 里面存一个 v 的 index，查到 index 之后再查 v，这样带宽浪费就会少很多，CPU cache 命中率也会更高

```rs
// OOP
type Dictionary<K, V> = Vec<(K,V)>;

// DOD
type Dictionary<K, V> = (Vec<(K, usize)>, Vec<V>);
```

一个不好的算法可能导致 L2 cache miss 消耗的时间是实际运算时间的 10 倍以上

### Bools in Structs

在 struct 里面保存 bool 类型的变量需要考虑内存对齐的问题

### 使用不可变变量避免无效读取

在 C++等没有 Rust 里面可变性概念的语言中，有时候编译器为了确认一个值（特别是成员变量），会进行反复的读取

```cpp
class S { bool b; };

int S::f(int count) {
  int value = 0;
  for (int i = 0; i < count; i++) {
    // 编译器为了避免在其他地方this.b被修改，会反复读取this.b
    if (this.b) value++;
  }
  return value;
}
```

更好的做法：缓存一下

```cpp
int S::f(int count) {
  int value = 0;
  bool b = this.b; // 对于局部变量，编译器通常可以判断它的可变性，从而避免反复读取
  for (int i = 0; i < count; i++) {
    if (b) value++;
  }
  return value;
}
```

### 循环条件提升

把循环里面的判断尽可能提前到循环外面，这样可以避免循环内重复判断

```cpp
int S::f(int count) {
  int value = 0;
  bool b = this.b;
  if (b) {
    for (int i = 0; i < count; i++) {
      value++;
    }
  }
  return value;
}
```

### Decision Table

以游戏引擎为例，假设本来要在每一帧计算一个数，最简单的做法是每一帧都计算

但是考虑到 CPU 缓存和上下文切换，我们可以一次性计算很多帧，保存结果，在未来的帧里面调用这些结果，而不是每一帧都计算一次

### 使用更小的 struct

避免无用的字段被读取到 cache 中

### 避免过度抽象

就像 Unity3D 里面的 GameObject/Object 一样，很多类都依赖它，但是其实不同类的数据是不同的，放在一起只是符合逻辑，但是并不高效

这也会导致更大的 struct 和更低效的 read/write/cache

### 一个函数干一件事情

尽可能避免在一个函数里面 if/switch/pattern matching，尽可能拆分成多个函数，这样每个函数都可以批处理数据
