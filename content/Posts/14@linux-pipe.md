---
date: 2019-05-26
title: Linux下在程序内实现管道
description: '文件描述符的复制、输入输出重定向、命令参数'
tags:
  - linux
---

## 建议前置知识

- `exec()`函数族（下文用到了`execlp()`
- 文件描述符表与`dup2()`函数
- 管道的效果，以及`pipe()`函数
- `fork()`函数

## 实现重定向

因为exec仅重置用户数据段而**不重置系统数据段**，所以文件描述符都会得到保留

只要在原程序中使用`dup2`编辑标准文件描述符，然后再执行exec就可以实现重定向

如，从data.txt输入数据输出到result.txt：

```cpp
fd = open("data.txt", O_RDONLY);
dup(fd, 0); // data.txt => stdin
close(fd);
fd = open("result.txt", O_WRONLY | O_CREATE);
dup(fd, 1); // stdout => result.txt
close(fd);
exec(...);
```

其中`close(fd)`并不会真正关闭文件的连接，因为标准文件描述符还打开着这些文件

## 实现管道

思想：
1. 原进程初始化管道文件描述符，并fork出两个子进程。
2. 子进程继承了管道文件描述符，使用管道文件描述符修改标准文件描述符实现重定向
3. 子进程调用exec，启动管道两侧需要执行的程序
4. 父进程负责监视两个子进程的结束，防止父进程执行结束后孤儿进程的产生

示例：[我的linux作业题](https://github.com/DiscreteTom/linux-homework/tree/master/4)

## exec注意事项

以`execl`为例。`execl`的第一个参数是目标程序名，后面的参数是目标程序的参数

所以`execl`的第二个参数是目标程序的第一个参数，理论上也是目标程序名，基本上是一个没有用的参数

所以`execl`的第二个参数**通常**可以**传入任意字符串**，并**通常**会**被目标程序忽略**（除非目标程序需要输出目标程序名什么的