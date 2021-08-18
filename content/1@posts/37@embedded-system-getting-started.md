---
title: 嵌入式系统入门笔记
description: 一些概念和代码示例
tags:
  - Embedded System / 嵌入式系统
---

## 写在前面

本文是观看[本视频](https://www.bilibili.com/video/BV18g4y1z7pZ)时的笔记。

## 概念

- MCU
  - Micro Controller Unit，微控制器
  - 是一个完整的计算机系统，单个芯片上包含处理器、存储器、IO模块
  - 也被称为单片机
- ARM处理器的分类（从V7开始）
  - A系列：Application Processor
    - 高频，高性能，合理功耗
    - 应用：手机
  - R系列：Real-time Controller
    - 实时响应，合理性能，较低功耗
    - 应用：飞机、无人机
  - M系列：Micro-controller
    - 一般性能，最低成本，极低功耗
    - 应用：单片机
- GPIO：General-Purpose Input/Output
- EVB：开发板，Evaluation board
  - 厂商为了让用户了解芯片，会把一个芯片所支持的所有外设放到一个大板子上，用来测试芯片
- Startup Board，最小系统板
  - 一个麻雀虽小五脏俱全的板子
  - 只保留了EVB上最核心的部分
- BDM / JTAG / SWD: Debugger的标准/通信协议
  - 用来和芯片里面的调试模块通信
  - SWD是新的趋势，比JTAG速度快，引脚少（2根），适合引脚比较少的单片机
  - USBDM通过BDM接口和SWD接口支持不同类型芯片的调试
  - OpenSDA：目前常用的开发工具，V2开始开源
- ARM架构中的中断
  - 其他架构的芯片在编写中断函数的时候可能需要单独使用一些关键字，而ARM架构芯片直接写正常的C语言函数即可
  - 这个函数无法被主程序调用，也没有参数或返回值

> 大部分基础知识是计算机组成原理的知识，可以看下之前的笔记

## 示例：用GPIO控制灯

```c++
// 以下的常量是在芯片的头文件里面定义的寄存器地址
// 这些变量都是`volatile`的变量，因为会在程序之外被修改，必需每次都读它真实的值，不能被编译器优化
int main(){
  SIM_SCGC5 = SIM_SCGC5 | (1 << 12); // 启动模块的时钟，激活模块

  // 设置每个引脚的功能
  PORTD_PCR0 = 0x0100;
  // ...
  PORTD_PCR7 = 0x0100;

  GPIOD_PDDR |= 0xFF; // 方向为输出
  GPIOD_PDOR &= ~0xFF; // 所有8个引脚都输出0

  while (true) {
    delay_ms(1000); // 等待1秒
    GPIOD_PDOR = ~GPIOD_PDOR; // 所有8个引脚输出1，实现闪烁。但是此操作不是最优的，因为剩下24个位也翻转了
  }
}
```

可以看到控制硬件通常就是在向指定的地址写入不同的值。重点就是如何**高效且正确**地读取/写入值

## 抖动与去抖动

- 轮询模式下，信号的持续时间必需超过一个时钟周期才能确保被检测到，否则会被漏掉
- 去抖动
  - 硬件方案
    - 使用RC电路，使电流无法快速跳变
  - 软件方案
    - 延迟10ms再读，如果状态相同则视为状态稳定

## 一些位操作的例子

嵌入式开发需要大量的位操作

```c++
#define BIT_0_MASK 0b00000001
#define BIT_1_MASK 0b00000010
#define BIT_2_MASK 0b00000100
#define H_4_MASK 0b11110000
#define L_4_MASK 0b00001111

// set a bit
a |= BIT_0_MASK;
// clear a bit
a &= ~BIT_0_MASK;

// extract low 4 bits
b = a & L_4_MASK;
// extract high 4 bits
b = (a & H_4_MASK) >> 4;

// is a bit set?
if ((a & BIT_0_MASK) != 0) ...
// is a bit clear?
if ((a & BIT_0_MASK) == 0) ...
```

