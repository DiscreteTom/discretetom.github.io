# OS 目录

- [Chapter1 Introduction](Chapter1.md)
- [Chapter2 OS structures](Chapter2.md)
- [Chapter3 Processes](Chapter3.md)
- [Chapter4 Threads](Chapter4.md)
- [Chapter5 CPU Scheduling](Chapter5.md)
- [Chapter6 Process Synchronization](Chapter6.md)
- [Chapter7 Deadlocks](Chapter7.md)
- [Chapter8 Memory Management](Chapter8.md)
- [Chapter9 virtual memory](Chapter9.md)
- [Chapter10 File-System Interface](Chapter10.md)
- [Chapter11 File System Implementation](Chapter11.md)
- [Chapter12 Mass-Storage Structure](Chapter12.md)


# Chapter2 OS structures

## 操作系统提供的服务

- 系统调用system call（最底层），使程序能够使用系统发出请求
- command interpreter(or shell)使用户只用输入指令而不是写代码就能使用系统功能

system call必须提供最基础的硬件功能，包括process comtrol, file, device manipulation

稍高层次的系统程序通过使用system call来实现功能

system services可以被分为如下几类：
- program control
- status requests
- IO requests

## virtual machine

![2-1](img/2-1.png)


觉得有用？欢迎[打赏](../../../donate.md)

:)

[返回主页](../../../index.md)