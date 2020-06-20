---
title: Linux Basic (part 5)
description: 磁盘分区、格式化、挂载、配额、LVM
tags:
  - linux
  - ops
---

## 前言

本文是观看[此视频](https://www.bilibili.com/video/bv1ut411a7ro)时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。

本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差

本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识

有些内容与[大学的笔记](/academic/LinuxProgrammingEnvironment/)重复，建议先看大学的笔记

## 文件系统管理

### 基础知识

硬盘每个扇区的大小为512B。是磁盘的最小存储单位。0磁道0扇区通常是启动引导程序

- 机械硬盘
  - 机械结构，容易坏
  - 需要旋转产热，目前技术基本达到速度上限
  - 技术成熟成本低
- 固态硬盘
  - 直接用芯片存储数据，速度快，目前IO性能受限于接口而不是存储

> 所以通常PC会用小一点的固态硬盘装系统，大一点的机械硬盘存储数据

接口类型（建议自行搜索接口图片）：
- IDE(Integrated Drive Electronics，集成电子驱动器，并口)，也叫ATA或PATA硬盘。理论速度133MB/s，基本淘汰，有些光驱可能会用IDE口
- SCSI(Small Computer System Interface，小型计算机系统接口)，曾经广泛用于服务器。范围广、多任务、大带宽、CPU占用低、热插拔，理论速度320MB/s。基本淘汰
- SATA(Serial ATA，串口)，更高的传输速度，更强的纠错能力。SATA三代理论传输速度600MB/s。**是目前的主流**，不论PC还是服务器
- 苹果电脑使用PCI-E接口，理论速度2000MB/s

早期建议服务器上把能用的磁盘空间都给根，但是这会导致数据查询速度变慢，系统性能下降。现在建议根分区够用就行，比如分配300G，剩下的空间单独设置数据分区然后挂载，比如`/www`分区

### 分区的内容

每个分区包含下列信息：
- super block
  - 记录整个文件系统的信息
  - 包括block和inode的总量、已经使用量、未使用量，block与inode的大小，文件系统挂载时间，最近一次写入时间，最近一次磁盘检验时间等
  - 使用`dumpe2fs -h <partition>`可以查看分区信息
- data block(简称block)
  - 实际保存数据的块
  - 大小在格式化的时候确定。通常为1/2/4KB
- inode
  - 用来记录文件权限、所有者、所属组、大小、修改时间、数据块编号
  - 每个文件一个inode（包括目录文件）

每个分区有一个super block，剩余空间被分为多个块组(block group)，每个块组都有一个inode区域和data block区域。查看块组：`dumpe2fs <partition>`

### Linux常见文件系统

- ext，Linux中最早的文件系统，在性能和兼容性上有很多缺陷，已淘汰
- ext2，RHEL7.2之前默认文件系统都是ext2，最大支持16TB分区和2TB的单个文件
- ext3，添加了日志功能，以便在系统突然停止时提高文件系统的可靠性。16TB分区2TB文件
- **ext4**（目前最常用），增强了性能、伸缩性、可靠性。最大支持1EB文件系统和16TB的单个文件，无限数量子目录。是CentOS 6.x的默认文件系统
- xfs，最早针对IRIX操作系统开发，是高性能日志型文件系统，有崩溃一致性。是64位操作系统，后来开源并移植到Linux。目前CentOS 7.x把XFS+LVM作为默认的文件系统。官方表示XFS对大文件的读写性能较好
- swap，用于swap分区的文件系统（类似于windows中的虚拟内存）。通常位内存的2倍，但是不要超过2GB。是Linux必备分区
- NFS，网络文件系统(Network FS)
- iso9660，光盘的标准文件系统。Linux使用光盘时需要支持iso9660
- fat，即windows下的fat16文件系统，在linux中识别为fat
- vfat，即windows下的fat32文件系统，在linux中识别为fat32。最大32GB分区和4GB单个文件
- NTFS，目前Windows下的主流文件系统。Linux默认不识别。比fat32更安全，更快，最大2TB分区，64GB单个文件
- ufs，是Sun公司的操作系统Solaris和SunOS使用的文件系统
- proc，是Linux种基于内存的虚拟文件系统，用来管理内存存储目录`/proc`
- sysfs，和proc一样是基于内存的虚拟文件系统。用来管理目录`/sysfs`
- tmpfs，也是基于内存的虚拟文件系统，也可以使用swap分区

### 基本硬盘管理命令

> `ls -l`得到的目录大小是目录文件的大小。目录文件仅保存了文件名

- `df`用来统计分区使用率。得到的剩余空间是准确的
  - `-a`显示特殊文件系统，比如`/proc`。因为是挂载在内存种所以磁盘占用是0
  - `-h`输出不使用KB，而是易读的单位
  - `-T`查看文件系统类型
- `du [options] [path]`统计文件大小。得到的文件大小是准确的
  - `-a`显示每个子文件的磁盘占用（默认只统计每个子目录的磁盘占用）
  - `-h`人性化输出
  - `-s`(sum)统计总占用量而不列出子目录和子文件的占用量
- `fsck -y <partition>`文件系统修复命令。开机时自动执行，不需要手动执行
- `dumpe2fs <partition>`显示磁盘状态
  - `-h`仅显示磁盘的super block的信息
- `stat <path>`查看文件inode信息，比如修改日期
- `file <path>`判断文件类型
- `type <command>`判断命令类型（内部命令/外部命令）
- `fdisk`手工分区。只能处理使用MBR分区表的磁盘
  - `fdisk -l`查看系统所有硬盘与分区
  - `fdisk <device>`进行磁盘分区
    - 常用命令
      - `m`查看帮助
      - `p`查看所有分区
      - `l`查看已知文件系统类型的ID号
        - 标准分区ID是`83`(Linux)
        - swap分区ID是`82`(Linux swap)
        - LVM分区ID是`8e`(Linux LVM)
        - 扩展分区ID是`5`(Extended)
      - `t`改变一个分区的文件系统ID
      - `n`创建分区
        - 步骤
          - 选择主分区/扩展分区/逻辑分区
          - 设置分区号（建议从小到大）
          - 选择起始柱面（分区的单位为磁盘柱面）
          - 选择结束柱面或直接指定分区大小（指定大小时，会计算空间最接近的柱面）
            - 可以直接指定柱面号，比如`100`
            - 可以指定相对于起始柱面的柱面号，比如`+100`
            - 指定空间大小：`+100G`。记得带单位(K/M/G)
      - `d`删除分区
      - `q`不保存退出
      - `w`保存退出
        - 有时候会提示：设备正忙，需要重启系统。比如分区之后没有重启，然后进行第二次分区
- `parted <device>`，用来对使用GTP分区表的磁盘进行分区并格式化。只能格式化为ext2文件系统，不过可以使用其他工具修改文件系统
  - `help`获取帮助
  - `print [devices|free|list,all|NUMBER]`显示分区表、活动设备、空闲空间、所有分区
    - 如果输出的分区表类型为`msdos`则表示分区表是MBR分区表
    - 输出内容：
      - 分区号
      - 起始字节
      - 终止字节
      - 大小
      - 分区类型
      - 文件系统
      - 标签
  - `mklabel gpt|msdos`修改分区表类型。`msdos`表示MBR分区表。**会清空磁盘内容**
  - `mkpart`创建分区。gpt的分区不需要区分主分区/扩展分区/逻辑分区
  - `mkfs`创建文件系统
  - `resize`调整分区大小。**一定要先卸载分区**。有风险不建议使用，用LVM更好一些
  - `rm`删除分区。**一定要先卸载分区**
- `mkfs [-t <fs-type>] <partition>`创建文件系统。但是不能指定块大小
- `mke2fs [options] <partition>`格式化分区
  - `-t <fs-type>`指定文件系统，如ext2/ext3/ext4
  - `-b <bytes>`指定block大小
  - `-i <bytes>`指定多少字节分配一个inode
  - `-j`建立带有ext3日志功能的文件系统
  - `-L <label>`设置卷标

使用`df`得到的剩余空间的准确的，使用`du`得到的（总）文件大小是准确的。但是实际使用中会发现`df`得到的已使用空间大于`du`得到的已使用空间。原因是存在一些系统临时文件占用了空间，可能需要重启才能释放空间。重启服务器可以解决此问题。

> 可以使用`lsof | grep deleted`查看被删除的文件，然后手动kill进程来释放空间。不建议使用，存在风险。**计划之内的重启比意料之外的宕机好得多**

Linux默认不支持动态调整分区大小。Windows中有一些工具可以直接修改分区表来调整分区大小，但是存在崩溃风险。Linux可以通过使用LVM实现动态分区

### fstab文件

用来管理哪些分区会被自动挂载。如果启动系统的时候有些分区没有被找到，则会启动失败，所以不要自动挂载移动存储设备

文件内容：
- 设备文件名或`UUID=<UUID>`（目前推荐UUID）
  - 可以使用`dumpe2fs <partition>`或`ls -l /dev/disk/by-uuid`查看UUID
- 挂载点
- 文件系统
- 挂载选项
  - `defaults`表示默认
- 是否可以被备份
  - 0表示不备份。建议用在虚拟分区
  - 1表示每天备份。推荐
  - 2表示不定期备份
- 是否使用`fsck`检测磁盘
  - 0表示不检测。建议用在虚拟分区
  - 1表示启动时检测。建议用在根分区
  - 2表示启动后检测。建议用在根以外的所有分区

如果是云服务器上这个文件写错导致开不了机，把盘拔了挂载到其他云服务器上修改即可

### 管理swap分区

> 可以使用命令`free`查看内存信息，参数`-h`表示人性化显示。里面可以看到swap分区的空间。
> 
> `buffers`用来加速硬盘写入速度，`cached`用来加速硬盘的读取速度。由系统调度并自动调整大小。`-/+ buffers/cache`意为除去`buffers`和`cached`之后数据占用的内存和剩余空间

如果swap空间太小，可以手动增加空间

1. 使用`fdisk <device>`进入目标设备
2. 使用`t`命令修改分区ID
3. 把分区的Hex code设置为82
4. 使用`mkswap <partition>`格式化分区为swap文件系统
5. 使用`swapon <partition>`添加swap分区（临时生效。如果要永久生效，需要修改`/etc/fstab`，挂载点为`swap`，文件系统为`swap`，选项为`defaults`，备份和检测都是`0`）

### RAID

能够配置的软RAID在实际生产中通常不会使用。直接使用硬件实现RAID

### 磁盘配额

限制普通用户/组在某个分区能够使用的空间（防止磁盘空间耗尽）或文件个数（防止inode耗尽）。通常结合其他功能，比如FTP、WEB。

- 软限制(soft limit, aka quota)：到达极限时给出提示
- 硬限制(hard limit, aka limit)：到达极限时拒绝请求
- 宽限时间：到达软限制之后如果超过了宽限时间，会把软限制升级为硬限制。默认7天

软限制和硬限制可以结合使用，比如设置90M的软限制，100M的硬限制

> 实际上组配额很少用。组配额不是平均分配到用户，而是先到先得

前置条件：
1. 检查内核是否支持磁盘配额：`grep QUOTA /boot/config-2.6.32-279.e16.i686`，如果`CONFIG_QUOTA=y`则内核支持磁盘配额（默认是支持的）
2. 检查是否安装了磁盘配额工具：`rpm -qa | grep quota`

- 使分区支持配额：需要在`mount`的时候使用`usrquota`/`grpquota`选项。如果需要永久生效需要改`/etc/fstab`，比如把选项设置为`defaults,usrquota,grpquota`
- 建立磁盘配额配置文件：`quotacheck [options] [partition]`。需要关闭SELinux，否则会报错
  - `-a`扫描`/etc/mtab`文件中所有启动磁盘配额功能的分区。使用此选项时命令中不需要加入分区名
  - `-c`忽略原有配置文件，重新扫描并生成配置文件
  - `-u`创建用户配额配置文件，即`/disk/aquota.user`
  - `-g`创建组配额配置文件，即`/disk/aquota.group`
  - `-v`详细输出
  - `-m`强制以读写的方式扫描文件系统。通常用于扫描根分区，因为根分区正在被系统使用，所以需要强制读写
  - `-f`强制扫描文件系统，并写入新的配置文件。通常用于扫描新添加的硬盘分区
  - `quotacheck -avug`自动生成配置文件
- 设置配额：`edquota [options] [user|group]`
  - `-u <username>`指定用户
  - `-g <group>`指定组
  - `-t`设定宽限时间
  - `-p`复制配额限制。`edquota -p <old-user> -u <new-user>`
  - 进入编辑模式后，**不要**修改`blocks`和`inodes`，这两个值是已经占用的值，系统自动生成
  - 文件大小的默认单位为KB
  - 其实编辑的就是`aquota.user`/`aquota.group`文件，只不过这两个文件是二进制文件，不能直接用文本编辑器打开
- 启动配额：`quotaon [options] [partition]`
  - `-a`根据`/etc/mtab`文件启动所有配额分区。使用此选项时命令中不需要加入分区名
  - `-u`启动用户配额
  - `-g`启动组配额
  - `-v`详细输出
- 关闭配额：`quotaoff [options] [partition]`
  - `-a`根据`/etc/mtab`关闭所有配额分区。使用此选项时命令中不需要加入分区名
  - `-u`/`-g`关闭用户/组配额
- 按用户/组查询配额：`quota [options] [user|group]`
  - `-u <username>`/`-g <group>`查看用户/组配额
  - `-v`详细输出
  - `-s`使用易读单位
- 按分区查询配额：`requota [options] [partition]`
  - `-a`根据`/etc/mtab`文件查询配额。使用此选项时命令中不需要加入分区名
  - `-u`/`-g`查询用户/组配额
  - `-v`详细输出
  - `-s`使用易读输出
- 非交互模式设置配额：`setquota -u <user> <block-quota> <block-limit> <inode-quota> <inode-limit> <partition>`

> - 查看SELinux是否开启：`getenforce`
> - 开启/关闭SELinux：`setenforce 1|0`。关闭后，状态变为`permissive`危险操作只会警告而不会禁止
> - 手动修改：`/etc/selinux/config`。可以把SELinux设置为`disabled`，但是需要重启系统

> 测试：`dd if=/dev/zero of=/disk/testfile bs=1M count=60`
> - `dd`命令用来实现磁盘对拷
> - `if=/dev/zero`指定源文件为全0文件（二进制），目标文件为`of=/disk/testfile`
> - `bs=1M`每次复制1M
> - `count=60`复制60次

### LVM

> Logic Volume Manager

#### 概念

用来实现安全地动态扩容分区（第三方软件工具都是由风险的）

**实际生产环境应该使用LVM而不是之前讲的基本分区**（主分区/扩展分区/逻辑分区）

概念：
- 物理卷(Physical Volume, PV)，真正的物理硬盘或分区
- 卷组(Volume Group, VG)，多个物理卷的组合。相当于逻辑硬盘(Logical Disk)。可以动态扩容
- 逻辑卷(Logical Volume, LV)，是逻辑硬盘中的分区，可以动态扩容。需要格式化和挂载才能使用
- 物理扩展(Physical Extend, PE)，逻辑卷中空间的最小单元，默认4MB（不是data block size。具体数据块大小是格式化卷的时候确定的）
  - fdisk是按照柱面划分卷，最小单位是柱面

> 理论上支持数据缩减，但是不建议使用，可能数据丢失

#### 建立LVM

宏观步骤：
1. 把物理硬盘划分为物理分区（可选）
2. 把物理分区设置为物理卷。也可以把整块硬盘建立为物理卷
3. 把物理卷整合为卷组。可以把新的物理分区加入卷组实现扩容，也可以从卷组中删除物理分区。卷组会成为`/dev`下的文件夹
4. 把卷组划分为逻辑卷。逻辑卷会成为`/dev/<vg-name>`文件夹下的设备文件
5. 格式化、挂载

相关命令：
- `fdisk`把分区的文件系统ID设置为LVM的ID：`8e`
- `pvcreate <device|partition>`把设备或卷设置为物理卷
- `pvscan`查看系统中的物理卷
- `pvdisplay`查看详细物理卷信息
- `pvremove <device|partition>`删除物理卷
- `vgcreate [options] <vg-name> <pv-name>`创建卷组。可以指定多个物理卷。`pv-name`就是物理卷的设备名
  - `-s <pe-size>`指定PE的大小。默认4MB
- `vgscan`查看系统中是否由卷组
- `vgdisplay`查看卷组详细状态
- `vgextend <vg-name> <pv-name>`卷组扩容
- `vgreduce <vg-name> <pv-name>`卷组缩容（不建议使用）
- `vgremove <vg-name>`删除卷组
- `lvcreate [options] <vg-name>`创建逻辑卷
  - `-L <size>`指定容量，单位可以是M/G/T
  - `-l <count>`指定PE个数来创建卷。通常不会用
  - `-n <lv-name>`指定逻辑卷名
- `lvscan`/`lvdisplay`查看逻辑卷/详细信息
- `lvresize [options] <lv-name>`调整逻辑卷大小。安全，不会导致文件丢失
  - `-L <size>`设置逻辑卷大小。可以直接指定数字，也可以使用`+/-`表示增量，单位为M/G/T
  - `-l <count>`按照PE个数设置大小。通常不会用
- `resize2fs [options] [device] [size]`虽然设备大小调整了，但是可能没有挂载上。**逻辑卷不用重新挂载就可以调整容量**
  - `-f`强制调整
  - 如果不指定`size`，则会使用整个分区

坑：boot分区只能放在标准分区中，不能放在LVM中，否则系统无法正常启动
