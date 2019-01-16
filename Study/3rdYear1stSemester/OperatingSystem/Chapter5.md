# Chapter5 CPU Scheduling

CPU调度 - 从ready queue中取出进程并执行

目的 - 让CPU一直忙

## 调度策略

- nonpreemptive剥夺、抢占 - 停止正在执行的进程
- preemptive非剥夺、非抢占 - 不停止正在执行的进程

- FCFS(first-come, first-served)先来先服务
  - 先来先服务，按顺序执行。非剥夺
- SJF(Shortest-job-first)最短工作优先
  - 是**最优的调度算法**，拥有最短的平均等待时间
  - 难点：不易估算job的长度
  - 是优先级调度算法(priority scheduling)的特例，把剩余时间作为优先级
  - 可能发生饥饿starvation
  - 防止饥饿的策略：aging（优先级随时间改变，等待时间越长优先级越高
  - 可以分为剥夺和非剥夺的：
    - 非剥夺 - 略
    - 剥夺 - 如果新的进程的CPU burst长度小于当前**正在运行**的进程的剩余时间则抢占之。也被称为SRTF(Shortest-Remaining-Time-First)
- RR(Round-robin)时间片轮转算法
  - 常用于分时系统
  - 把时间分为q个相等的时槽(slot/time units/time quantum)
  - 每个进程最多工作q个时间，超时了就被放置在ready queue的末尾
  - 难点在于选择时槽长度，常为10-100ms
  - 一定是剥夺的
- multilevel queue
  - 是上面一些算法的结合

SJF估算CPU burst length:使用历史数据估算。
- 令t(n)为第n次CPU burst的长度
- 令τ(n)为估计第n次CPU burst的长度
- 令参数α为[0, 1]的数，反映了历史数据的重要性
  - α=0表示历史数据完全不重要，仅猜测
  - α=1表示猜测数据完全不重要，仅参考历史数据
- 则τ(n+1)=αt(n) + (1-α)τ(n)
- 即下一次的估算值等于上一次估算值和实际值的加权平均

## 评估

- CPU利用率(CPU utilization) = 使用CPU的时间/总时间
- Throughput吞吐量 = 完成的进程数目/总时间
- Turnaround time周转时间 = 某个进程从开始到结束的总时长（包括等待
- Waiting time等待时间 = 从进程第一次放入ready queue开始到进程执行完毕中间等待的时间
  - Average waiting time = 所有进程等待时间/进程数
- Response timme响应时间 = 从进程第一次放入ready queue开始到进程被第一次run之前等待的时间

## 甘特图表示法

![5-1](img/5-1.png)

上面用矩形表示时间长短，下边标注时间点