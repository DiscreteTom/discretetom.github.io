# Chapter12 Mass-Storage Structure

## Disk Scheduling磁盘调度

要访问多个地址的时候磁盘应该按照什么顺序去访问

### FCFS

![12-1](img/12-1.png)

### SSTF: shortest-seek-time-first

类似于SJF，会导致饥饿

![12-2](img/12-2.png)

### SCAN

也叫电梯算法elevator algorithm

单向运动至**尾部**，减少磁臂反复换向运动

![12-3](img/12-3.png)

### C-SCAN

假设磁盘是环形结构，首尾相接

![12-4](img/12-4.png)

### LOOK

是C-SCAN的变形。单向运动至**最后一个文件请求**，然后返回第一个文件请求。假设磁盘是环形结构，首尾相接

![12-5](img/12-5.png)