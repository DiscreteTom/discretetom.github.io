---
title: DT0开发笔记
description: 年轻人的第一个编程语言
---

## 背景

因为在开发 retsac，所以需要一个编程语言作为测试。最好是一个 **_最小_** 的编程语言，这样也便于教学和演示，以及日后的扩展

因为 LLVM 在 TypeScript 的生态里面似乎没有什么官方提供的 binding 库，所以使用 WASM 作为编译目标，使用 binaryen.js 生成 WASM

## 符号表和变量声明

## 循环

WASM 和汇编语言类似，没有结构化的循环语句，而是通过跳转/条件跳转的方式来实现

所以对于循环，我们需要划分好几个基本块出来。我们以 TypeScript 为例：

```ts
while (condition) {
  statement1;
}
statement2;
```

可以被拆分为：

```
block0: {
  if !condition goto block2
}
block1: {
  statement1;
  if condition goto block1
}
block2: {
  statement2;
}
```

所以一个 while 语句实现起来还是挺麻烦的。其实 do-while 语句更简单一些：

```ts
do {
  statement1;
} while (condition);
statement2;
```

就可以拆分为：

```
block1: {
  statement1;
  if condition goto block1;
}
block2: {
  statement2;
}
```

另外，WASM 里面可以通过`br`实现类似`goto`的效果。如果`br`应用在`loop`上，会跳转到`loop`块的起始位置。如果`br`应用在`block`上，会跳转到`block`块的末尾，这是`loop/block`的一个很重要的区别

## 垃圾回收与内存管理

WASM 自身不需要/不提供垃圾回收，因为它根本无法动态申请内存，只能提供一块连续、可修改的内存。所以内存管理需要由 WASM 的调用者或外部环境提供

WASM 程序在写好的时候，就已经知道了它需要多大的内存空间。这里指的是 WASM 沙箱里面的内存空间。runtime 可以在沙箱外面进行内存管理，然后共享给 WASM 沙箱内部进行逻辑操作

资料：

https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Memory
https://github.com/WebAssembly/gc/blob/master/proposals/gc/Overview.md
https://radu-matei.com/blog/practical-guide-to-wasm-memory/
