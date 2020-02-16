---
date: 2019-07-29
title: '重装系统(Windows 10)遇到的一些问题'
description: 'FAT32 & NTFS, MBR & GPT, BIOS & UEFI, diskpart'
tags:
  - windows
---

>没有什么问题是重装系统不能解决的。
>
>如果有，那就是重装系统出问题了

## 初始问题与解决方案

刚开始，按照装系统正常流程，用rufus制作FAT32文件系统的windows10系统U盘（现在windows已经提供了自家的系统盘制作工具，可以不用rufus），进BIOS选HDD启动，把原系统盘的所有分区都格式化并选为新的系统盘，下一步

出现问题：Windows检测到EFI系统分区格式化为NTFS，将EFI系统分区格式化为FAT32，然后重新启动安装。

解决方案：如果所有盘的所有分区都是FAT32了仍然出现上述问题，原因可能是**装系统的时候固态硬盘和机械硬盘不能共存**。拆机把机械硬盘拔了就能把系统装在固态上面了。

## 因为作死而产生的新问题

由于对文件系统、分区技术等的不了解，在尝试把分区格式化为FAT32的时候翻车导致磁盘有MBR分区表，使得windows无法安装在目标盘上，且不能在windows10安装程序上把它格式化。

![](./_img/20190729-1.jpg)

![](./_img/20190729-2.jpg)

所以就~~被迫~~花时间了解了一下什么是FAT32/NTFS，什么是MBR/GPT，什么是BIOS/UEFI，以及装windows的时候应该如何选择文件系统。下面是一些结论性的东西，如果要看详细讲解，可以查阅本篇博客的[参考文档](#参考)

## 结论

### 一些名词

- POST - Power On Self Test, 上电自检
- BIOS - Basic Input Output System
- UEFI/EFI - Unified Extensible Firmware Interface, 统一可扩展固件接口
- MBR - Master Boot Record, 主分区引导记录
- GPT/GUID - Globally Unique Identifier Partition Table
- FAT - File Allocation Tables, 文件分配表
- NTFS - New Technology File System
- ESP - EFI System Partition, EFI系统分区

### UEFI与BIOS

- UEFI是BIOS的替代方案，通常也被称为UEFI BIOS。比较新的电脑通常都是UEFI BIOS
- UEFI BIOS比传统BIOS占用空间更大，功能更强，比如BIOS不认识分区表，UEFI认识分区表

### MBR与GPT

- MBR与GPT是管理磁盘地址空间的技术，是硬盘分区方案。硬盘分区技术介于硬件和文件系统之间。
- MBR最大只能管理约2T的空间，即将被淘汰。GPT可管理的地址空间近乎无限
- GPT是UEFI规范的一部分
- GPT兼容MBR
- 在EFI系统上，windows只能装到GPT分区的盘上。在传统BIOS模式下windows只能装到MBR盘上

### FAT与NTFS

- FAT与NTFS是文件系统(file system)（差不多都是微软亲儿子
- FAT大小被限定，且健壮性差。通常不建议电脑硬盘使用，可以用在优盘、SD卡等可移动设备上（因为在这些设备上使用了其他技术消除上述缺陷
- 因为大小被限定，所以FAT从最开始的FAT8一直随着硬盘的扩容而升级，一直到了FAT32都是大小被限定的。为了解决大小被限定的问题，出现了exFAT。exFAT通常视为不被包含于FAT
- 因为大小被限定，所以现在的硬盘通常都使用NTFS作为文件系统
- UEFI模式的windows系统盘需要UEFI系统分区，即ESP。ESP必须使用FAT32格式，大小300M足矣。而windows系统的分区仍然使用NTFS

## 使用diskpart解决上述新问题

### 在windows安装程序中进入控制台

在如下界面可以看到左下角有一个**修复计算机**的按钮，在里面可以找到打开cmd的选项

![](./_img/20190729-3.png)

### diskpart概述与基本命令

diskpart是从windows 2000及以后的windows操作系统自带的命令行界面磁盘分区设置程序。可以使用它设置硬盘分区方案、设置文件系统、设置分区等操作。

可以使用`list`命令查看如下信息：
- `list disk`查看磁盘信息（可以查看分区方案是否为GPT
- `list partition`或`list par`查看分区信息
- `list volume`或`list vol`查看卷信息

可以使用`select`或`sel`命令选择工作环境：`sel disk/par/vol 数字`

选中磁盘后，可以使用`convert`命令设置分区方案为MBR或GPT：`convert mbr/gpt`。不出意外当然都是设置为GPT啦

使用命令`clean`以清除磁盘内的分区和卷。

选中磁盘后可以使用命令`create`创建分区，如`create partition/par primary`创建主分区，`create partition/par efi size=300`创建大小为300M的EFI分区

选中分区后可以使用`format`或`for`命令格式化当前分区，如`for quick fs=ntfs/fat32`，其中quick表示快速格式化

### 问题的解决

显然上述新的问题的产生原因就是把盘的分区方案设置为了MBR。

1. 首先使用`convert`命令转换为GPT分区方案（也可以先`clean`一下盘，记得备份数据
2. 为了装系统，我们需要一个FAT32文件系统的ESP。使用命令`create par efi size=300`创建分区
3. 使用`select`命令选中新建的分区为上下文
4. 为了把分区设置为EFI分区，需要给它设置一个ID：`set id="C12A7328-F81F-11D2-BA4B-00A0C93EC93B"`
5. (选做)设置ID后，使用`assign`命令给分区分配一个盘符以便访问。如果命令`assign`没有任何参数，系统会自动分配一个空闲的盘符，即卷
6. 使用`select`选中目标卷，使用`format`命令格式化为FAT32格式（使用快速格式化即可
7. 现在已经有系统分区了，使用`create par primary`命令把剩下的空间全部设置为主分区
8. 把主分区格式化为`NTFS`格式

最后，如果装机的时候电脑上同时有固态硬盘和机械硬盘，想把电脑装在固态上，记得拔掉机械硬盘。

## 参考

- [MBR与GPT](https://zhuanlan.zhihu.com/p/26098509)
- [FAT文件系统与UEFI](https://zhuanlan.zhihu.com/p/25992179)
- [科普贴：BIOS和UEFI的启动项](https://zhuanlan.zhihu.com/p/31365115)
- [重装系统 U盘安装 提示Windows检测到EFI系统分区格式化为NIFS，将EFI系统分区格式化为FAT32，然后重新启动安装](https://blog.csdn.net/Waitfou/article/details/79018010)