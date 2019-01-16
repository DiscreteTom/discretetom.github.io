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


# Chapter3 Processes

>a process is a program in execution.

进程包括：
- program counter
- stack
- data section

## Process Control Block(PCB)

![3-2](img/3-2.png)

每个进程在操作系统中表示为一个进程控制块PCB

使用PCB保存进程数据实现进程切换：

![3-3](img/3-3.png)

## 进程状态与状态转移

- new
- running
- waiting - for some event(e.g. memory access or device access)
- ready
- terminated


状态转移：
![3-1](img/3-1.png)

进程不在运行的时候处于两种waiting queue中：
- IO request queue(s) - 即处于waiting状态
- ready queue - 即处于ready状态

ready queue中的进程都已经就绪，等待CPU分配时间片。

queue可以使用PCB链表实现

## 调度

- long-term scheduler(or job scheduler) - 选择进程进入ready queue（变为ready状态
  - 慢，几秒或几分钟一次
  - 控制degree of multiprogramming
- short-term scheduler(or CPU scheduler) - 从ready queue选择进程运行（变为running状态
  - 快，毫秒级

进程可以被分为：
- IO-bound process
  - 大部分时间IO
- CPU-bound process
  - 大部分时间使用CPU

## interprocess communication(IPC)

- independent process
  - 不和其他进程交流
- cooperating process
  - 和其他进程交流

两种方式：
- shared memory
  - share some variables
  - 操作系统负责提供共享内存
  - 用户负责设计与提供通信
- message passing
  - establish a communication
  - use send(message) and receive(message)
  - 操作系统负责设计与提供通信

这两种方式可以在一个操作系统中共存

CS模型通信可以使用：
- socket
  - an endpoint for communication
  - a connection is between a pair of sockets
- remote procedure calls(RPCs)
  - an RPC occurs when a process(or thread) calls a procedure on a remote application
- Java's remote method invoation(RMI)
  - Java's version of RPCs
  - allows a thread to invoke a method on a remote object

RPC和RMI的最大区别：
- RPC: data are passed to a remote procedure in the form of an ordinary data structure
- RMI: allows object to be passed in remote method calls


觉得有用？欢迎[打赏](../../../donate.md)

:)

[返回主页](../../../index.md)