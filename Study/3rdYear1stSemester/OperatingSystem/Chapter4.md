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


# Chapter4 Threads

线程：
- user-level threads
  - 对系统透明，对用户可见
  - 创建更快，更易管理
- kernel-level threads
  - 对用户透明，对系统可见

用户线程和核心线程的对应模型：
- many-to-one
  - many user threads maps to a single kernel thread
- one-to-one
- many-to-many


觉得有用？欢迎[打赏](../../../donate.md)

:)

[返回主页](../../../index.md)