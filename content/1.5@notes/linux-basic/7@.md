---
title: Linux Basic (part 7)
description: 启动引导、修复系统、运行级别、服务管理等
---

## 前言

本文是观看[此视频](https://www.bilibili.com/video/bv1ut411a7ro)时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。

本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差

本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识

有些内容与[大学的笔记](/academic/LinuxProgrammingEnvironment/)重复，建议先看大学的笔记

## 启动引导与修复

### 运行级别

0. 关机
1. 单用户模式，用于系统修复
2. 不完全的命令模式，不包含NFS服务
3. 正常的命令模式
4. 系统保留
5. 图形模式
6. 重启

相关命令：
- `runlevel`查看运行级别，输出上一次运行级别和当前运行级别。如果上一次运行级别是`N`则表示没有上一次的运行记录
- `init <level>`切换级别
  - `init 0`关机。不建议使用
  - `init 6`重启。不建议使用

相关文件：
- `/etc/inittab`配置系统默认运行级别
- `/etc/rc.d/rc.local`系统启动之后，所有用户登录之前，执行此文件
  - 可以用来启动服务

### 启动引导程序GRUB

> Boot Loader

早期Linux使用Lilo作为引导程序，现在使用GRUB

相关文件：
- `/boot/grub/grub.conf`配置文件
  - 包含了所有系统通用的启动配置和每个不同的系统的单独配置
  - 软链接
    - `/boot/grub/menu.lst`
    - `/etc/grub.conf`
- `/boot/grub/splash.xpm.gz`splash界面，通常不用改

GRUB中的设备文件名：`(hdx,y)`，其中`x`表示第几块SCSI硬盘，`y`表示分区号。`x`/`y`都从0开始计数（设备文件名通常从1开始计数）

`/boot/grub/grub.conf`的内容：
- 全局配置
  - `default=0`默认启动第一个系统
  - `timeout=5`5秒之后自动启动
    - 0表示直接进入系统
    - -1表示永久等待
  - `password --md5 <md5-code>`加密GRUB
    - 即使有人可以操控本机，也要输入密码才能使用GRUB。但是不影响系统启动
    - 这个配置必须放在`timeout`和`splashimage`之间。可选
    - 使用`grub-md5-crypt`获取MD5加密后的密码
  - `splashimage=(hd0,0)/grub/splash.xpm.gz`背景图
  - `hiddenmenu`
- 单个系统的配置（安装系统后会自动生成）
  - `title`系统标题
  - `lock`加密系统
    - 是可选项。必须放在`title`和`root`之间
    - 使用此选项之后，需要输入GRUB密码才能启动系统
    - 不建议使用。否则远程登陆无法进入系统
  - `root`根卷，主启动目录
  - `kernel`内核加载选项。其中的路径相对于`root`
  - `initrd`虚拟文件系统的镜像。路径相对于`root`

> 安装Linux+Windows双系统：云服务器肯定安装不了双系统。本机安装双系统时，需要先安装Windows再安装Linux。因为Linux的GRUB识别Windows，但是Windows的启动引导程序不识别Linux。如果先安装Linux再安装Windows，则Windows的引导程序会覆盖GRUB，此时需要手动安装GRUB

### 系统修复模式

#### 单用户模式

可以用来破解/修改Linux密码。无法修复太复杂的问题。无法找回数据

1. 在GRUB中按`e`进入编辑模式（如果给GRUB设置了密码，需要按`p`输入密码）
2. 修改`kernel`选项，在最后加上` 1`（空格+1），表示启动时以级别1（单用户模式）启动（此修改是临时生效的，不能重启）
3. 按下`b`启动。此时不需要输入账号密码就可以登录
4. 修改`root`密码即可

如果在正常系统里面错误地把默认启动级别改为了0（关机）或6（重启），可以使用此方法修复

以此类推，只要能修改GRUB的配置文件，其密码也可以被无效化。只要能拿到硬盘，这些加密都没有用。

对于云环境，直接把盘拔了，挂载到新的云服务器上，就可以实现这些修复

> 更深一层的加密：给BIOS加密。破解方式：把主板电池扣了。这些后门是用来容错的。攻击者都需要拿到硬件才能破解

#### 光盘修复（略）

使用光盘启动系统（绕开硬盘启动），然后把硬盘挂载到系统，从而修改硬盘中的内容。

云环境不需要这种修复

## 服务管理

### 服务分类

- 使用RPM包安装的服务
  - 独立的服务
  - 基于xinetd的服务（越来越少，几乎淘汰）
- 使用源码包安装的服务

独立服务 vs 基于xinetd的服务：
- 独立服务
  - 服务直接在内存跑
  - 快，但是内存占用大
- xinetd服务
  - xinetd在内存跑
  - 请求会先发到xinetd，xinetd负责转发请求或启动服务
  - 慢，但是内存占用小

命令：
- `chkconfig --list`查询服务分类
  - 0-6表示在不同的启动级别，服务是否默认启动
  - 基于xinetd的服务没有不同启动级别的不同配置
  - 目前服务器可能根本没有装xinetd，所以可能不输出xinetd服务

### 服务的启动与自启动

- RPM包安装的服务
  - 独立服务，通常服务都安装在`/etc/init.d`
    - 启动服务
      - `<abs-path> start`，即`/etc/init.d/<name> start`
      - `service <name> start|stop|restart`
    - 自启动
      - `chkconfig [--level <level>] [name] [on|off]`
        - 例：`chkconfig --level 2345 httpd on`
        - 默认`level`为`2345`
      - 修改`/etc/rc.d/rc.local`文件，在里面使用绝对路径启动服务。**推荐**
      - `ntsysv`，此命令的设置和`chkconfig`是共通的
  - 基于xinetd的服务（以`telnet`为例）
    - 启动服务
      - 修改`/etc/xinetd.d/`下的配置文件，把`disable`设置为`no`
        - 然后重启`xinetd`：`service xinetd restart`
        - 启动服务后服务就会自启动
    - 自启动
      - `chkconfig <name> <on|off>`
        - 不需要写运行级别，因为依托于xinetd的运行级别
        - 设置自启动后程序就会启动
      - `ntsysv`
- 源码包
  - 启动服务
    - `<abs-path> start`
  - 自启动
    - 修改`/etc/rc.d/rc.local`

如果希望使用`service`等命令管理源码包软件，可以创建源码包的`/bin`目录下的启动文件在`/etc/init.d`目录下的软链接。如`ln -s /usr/local/apache2/bin/apachectl /etc/init.d/apache`

> 生产服务器禁止使用`telnet`服务端。这是用来远程管理的命令，但是账号密码都是明文传输，非常不安全

如果希望使用`chkconfig`管理源码包软件，需要在启动脚本中添加chkconfig参数，然后执行`chkconfig --add <name>`

启动脚本中的chkconfig参数，以`/etc/init.d/httpd`为例：

```bash
#!/bin/bash
...
# 以注释的形式定义chkconfig参数。有功能性，不要修改
# `-`表示自启动级别（默认）
# `85`为启动序号，表示第85个启动(S85)
# `15`为关闭序号，表示第15个关闭(K15)
# chkconfig: - 85 15
# description: xxxx
```

### 常见服务（略）

应该把用不到的服务关闭。具体服务的功能自行谷歌


