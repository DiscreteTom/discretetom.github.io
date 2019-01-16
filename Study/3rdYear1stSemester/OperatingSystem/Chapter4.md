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