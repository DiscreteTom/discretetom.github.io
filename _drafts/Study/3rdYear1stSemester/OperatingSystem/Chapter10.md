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


# Chapter10 File-System Interface

文件的信息保存在FCB(File Control Block)中，存档在目录下

文件操作是系统调用

## Access Methods

### Sequential Access

based on the tape model of files

顺序存储，文件操作：
- read next
- write next
- reset

### Direct Access(random access)

based on the disk-access model

文件由若干大小固定的logical records or blocks组成

给出一个相对于文件头的index(block number)即可随机访问

### Index-based access

保存一个index file

![10-1](img/10-1.png)

如果文件超级大，可能使用多级索引

## Directory Structure

One disk can besplit into one or more partitions, aka, minidisk or volumes. See them as virtual disk.

每个盘都会有一个目录区directory保存盘里面的文件信息FCB（包括文件入口指针、文件名等

![10-2](img/10-2.png)


觉得有用？欢迎[打赏](../../../donate.md)

:)

[返回主页](../../../index.md)