---
title: Linux Basic (part 2)
description: 文件、用户、压缩、重启、网络、系统痕迹相关命令
---

## 前言

本文是观看[此视频](https://www.bilibili.com/video/bv1ut411a7ro)时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。

本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差

本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识

有些内容与[大学的笔记](/academic/LinuxProgrammingEnvironment/)重复，建议先看大学的笔记

## 常用命令

- `hostname`查看主机名
- [`ls`显示目录内容
  - `--color=always|never|auto`显示颜色
- `cd`切换目录
  - `cd`/`cd ~`返回用户目录
  - `cd -`返回上次目录
- `stat`查看文件的inode信息。Linux不记录文件的创建时间
- `cat`拼接并查看文件
  - `-v`列出特殊字符
  - `-T`使用`^I`显示Tab符号
  - `-n`显示行号
  - `-E`使用`$`显示回车符
  - `-A`相当于`-vET`，列出所有隐藏符号
- `more`分页输出
  - 使用`b`可以向上翻页
- `ln`创建硬链接，`ln a b`会创建`b`指向`a`
  - `-s`创建软链接(soft link, symlink)
- `alias <new-command>='<commands>'`，单引号是必须的

## 软链接和硬链接

软链接的权限和源文件的权限是分开判断的，即需要二次判断，第一次判断用户是否有权操作软链接文件，第二次判断用户是否有权操作源文件

软链接的文件内容是路径。所以路径越长软链接文件越大。

> 原视频中说软链接的文件内容是inode号，应该是错的

软链接尽量使用绝对路径

## 文件类型与权限

使用`ls -l`命令得到的第一列就是文件类型和权限信息

文件类型：
- `-`普通文件
- `b`表示块设备文件，通常是存储设备
- `c`表示字符设备文件，通常是输入设备，比如鼠标键盘

RHEL的文件权限最后如果有一个`.`则表示文件受SELinux保护。可以使用`info ls`查看`ls`的文档获得详细信息

修改权限：
- `chmod u+x,o+r filename`给指定文件的拥有者(u=user)添加执行权限(x)，给其他所有人(o=others)添加读权限(r)，使用逗号可以添加多个权限规则
- `chown`修改文件拥有者，`chown <owner>[:|.<group>] <filename>`
  - `-R`给子目录中所有文件设置文件拥有者
  - **只有超级用户可以修改文件所有者**，即使普通用户是文件所有者也不行
- `chgrp <group> <filename>`修改文件所属组

**删除文件需要目录的写权限**

## 用户和组

- `useradd <username>`添加用户
  - 会自动创建一个和用户同名的组
- `passwd <username>`设置密码

## 帮助与搜索

- `man`
  - `-f`查看命令有哪个级别的帮助。比如使用`man 5 passwd`可以查看命令`passwd`的5级帮助
    - 命令的帮助级别
      - 1 - 普通用户可以执行的系统命令和可执行文件的帮助
      - 2 - 内核可以调用的函数和工具的帮助
      - 3 - C语言函数的帮助
      - 4 - 设备和特殊文件的帮助
      - 5 - 配置文件的帮助
      - 6 - 游戏的帮助
      - 7 - 杂项的帮助
      - 8 - 超级用户可以执行的系统命令的帮助
      - 9 - 内核的帮助
  - `-k`查看和命令相关的所有级别的帮助
  - 上下箭头/PageUp/PageDown进行内容滚动
  - `g`回到第一页
  - `G`到行尾
  - `q`退出
  - `/string`向下搜素字符串
  - `?string`向上搜索字符串
  - `n`搜索的下一个匹配
  - `N`搜索的上一个匹配
- `info`一套完整的手册
  - 上下箭头/PageUp/PageDown进行内容滚动
  - 按下`Tab`在有`*`的节点之间切换
  - 按下回车进入带有`*`符号的子页面
  - `u`返回上一层
  - `p/n`进入上/下一小节
  - `?`查看帮助
  - `q`退出
- `help`用来获取shell内置命令的帮助
- `type`区分命令是内部命令还是外部命令
- `whatis`查看命令的概述与帮助级别
- `whoami`查看当前用户
- `whereis`查看命令、源文件、帮助文档的位置
- `which`查看命令、别名
- `alias`查看所有别名
- `makewhatis`重新加载`whatis`命令的数据库，会消耗不少资源
- `locate`根据文件名查找
  - 使用数据库进行搜索，速度快，消耗资源少
  - 数据库位于`/var/lib/mlocate/mlocate.db`
  - CentOS 7似乎删掉了这个工具
  - 数据库不是实时更新的，需要退出登录，或者使用`updatedb`命令更新数据库
  - 配置文件：`/etc/updatedb.conf`，可以用来配置搜索的时候忽略哪些文件
- `find <path> [options] <content>`
  - 支持的options
    - `-name`按照文件名搜索
    - `-iname`不区分大小写，按照文件名搜索
    - `-inum`按照inode号搜索，可以用于搜索硬链接
    - `-size [+|-]<num>`按照大小搜索，`+/-`表示比目标值大/小
    - `-atime|mtime|ctime [+|-]<days>`按照时间搜索，`+/-`表示X天前/内
    - `-perm [+|-]<mod>`按照权限搜索
    - 更多选项请参考文档
  - content使用通配符和正则表达式，所以搜`abc`搜不到`abcd`
  - 逻辑判断：`-a`表示与，`-o`表示或，`-not`或`!`表示非
  - 执行命令：可以使用`-exec <command> {} \;`执行命令。其中`{}`会被替换为文件名，`\;`是必须的，作为界符。此处的命令不支持别名
  - 也可以使用`-ok`替换`-exec`，每个文件都会让用户判断是否执行操作

## 打包、压缩和解压

- `zip [options] <package-name> <source>`压缩为`.zip`文件
  - `-r`压缩目录
  - 使用`unzip [options] <package>`来解压
    - `-d <path>`指定解压位置
  - zip不是linux下的常用压缩格式，只是为了和windows通用才使用zip
- `gzip <file>`
  - 是Linux常见的压缩格式，**无法压缩文件夹（不会打包）**，只能压缩文件
  - **会删除源文件**
  - `-c`把压缩得到的数据输出到标准输出中，可以用来保留源文件，`gzip -c xxx > xxx.gz`
  - `-d <file.gz>`解压文件，也可以用`gunzip <file.gz>`
  - `-r <folder>`压缩/解压目录下的所有文件
- `bzip2 [options] <source>`
  - 是Linux常见的压缩格式，**无法压缩目录**
  - `-d <file.bz2>`解压缩，也可以用`bunzip2 <file.bz2>`
  - `-k`压缩时保留源文件
  - `-v`压缩时显示详细信息
- `tar [options] [-f <package-name>] <source>`
  - `-c`打包，**不会压缩**
  - `-x`解包
  - `-f`指定压缩包文件名
  - `-v`显示打包/解包过程
  - `-t`仅查看包里面的文件，不解包
  - `-z`打包/解包`.tar.gz`格式的文件，自动调用gzip
  - `-j`打包/解包`.tar.bz2`格式的文件，自动调用bzip2
  - `-C`指定解压目录
    - 必须放在压缩包名字后面，`tar -zxvf package.tar.gz -C /tmp`
    - 可以只解压部分文件：`tar -zxvf package.tar.gz -C /tmp package/file`

## 关机与重启

- `sync`刷新文件系统缓冲区，把缓冲区中的数据落盘
- `shutdown [options] <time> [warning]`，**推荐使用**
  - `-c`取消已经执行的`shutdown`
  - `-h`关机
  - `-r`重启
  - 时间：
    - `now`立即执行
    - `hh:mm`指定时间。不建议使用，还是看着服务器重启最安全
- `reboot`重启
- `halt`/`poweroff`关机。不会完整完毕和保存系统的服务，不建议使用

## 网络

### 常用命令

- `ifconfig`查询当前网卡信息，可以用来查询IP地址、MAC地址、子网掩码等信息，看不到网关
- `ping [options] <ip or domain>`
  - `-b`后面加上广播地址，对整个网段进行探测
  - `-c`指定次数
  - `-s`指定字节数
- `netstat`
  - 常用命令：`netstat -tulnp`查看所有正在使用的端口及其PID
  - `-a`列出所有网络状态，包括Socket
  - `-t`TCP协议的连接
  - `-u`UDP协议的连接
  - `-p`显示PID和程序名
  - `-l`仅显示监听状态的连接
  - `-n`使用IP地址和端口号显示，不适用域名或服务名
  - `-c <second>`表示周期性刷新网络状态
  - `-r`显示路由表，可以用来看网关，比如`netstat -rn`
  - `Recv-Q`/`Send-Q`表示接收/发送队列中的数据包数量。数值越大表示端口越繁忙
- `write <user> <terminal>`向其他用户发送信息，按下`Ctrl-D`发送（`Ctrl-D`表示文件尾）
  - 比如`write user1 pts/1`
  - 可以使用`w`命令查看目前已经登录的用户，在`WHAT`一栏中显示`w`的是自己
  - Linux自带6个本地终端`tty1`-`tty6`，可以使用`Alt+F1`-`Alt+F6`来切换
  - Linux自带本地图形终端`tty7`，使用`Ctrl+Alt+F7`来切换（需要按住3秒以上，需要安装并启动图形界面）
  - 远程终端`pts0`-`pts255`
- `wall <msg>`用来给所有登录用户（包括自己）发送消息
- `mail <user>`给其他用户发邮件
  - 第一行为邮件标题：`Subject: xxx`
  - 第二行开始为正文：`xxxxx`
  - 最后一行使用一个`.`结束输入，或者使用`Ctrl-D`
  - 使用重定向发送文件：`mail -s <title> <user> < <file>`
  - 直接使用`mail`接收邮件
    - 输出格式
      - 是否阅读，如果是`N`则表示新邮件
      - 编号
      - 发件人
      - 时间
      - 标题
    - 会出现`&`等待用户输入命令
      - 用户输入编号即可查看邮件
      - 输入`headers`或`h`可以查看邮件标题
      - 输入`delete <num>`或`d <num>`会删除指定编号的邮件
      - 输入`save <num> <path>`或`s <num> <path>`可以保存邮件为文件
      - 输入`quit`或`q`退出，并执行删除、保存等操作
      - 输入`exit`退出，不保存任何操作
      - 输入`?`获得帮助

### 配置IP地址

- RHEL可以使用`setup`工具
- 可以手动修改`/etc/sysconfig/network-scripts/ifcfg-eth0`

需要重启网络服务：`service network restart`。如果重启失败，最常见的问题是局域网IP冲突，也可能是网卡UUID冲突（常见于虚拟机快照环境）

## 系统痕迹

系统有一些重要的二进制痕迹日志文件，比如`/var/log/wtmp`、`/var/run/utmp`、`/var/log/btmp`、`/var/log/lastlog`等系统日志。只能使用对应的命令查看，无法篡改

- `w`查看系统中正在登陆的用户信息，对应的日志是`/var/run/utmp`
  - 输出格式
    - 第一行
      - 系统时间
      - 系统开机了多久：`up hh:mm`
      - 当前登录了几个用户
      - 系统1/5/15分钟前的平均负载
    - 剩余行
      - 用户名 - `USER`
      - 终端设备 - `TTY`
      - 来源IP - `FROM`
      - 登陆时间 - `LOGIN@`
      - 闲置时间 - `IDLE`
      - 所有进程占用的CPU时间 - `JCPU`
      - 当前进程占用的CPU时间 - `PCPU`
      - 用户正在进行的操作 - `WHAT`
- `who`类似于`w`，也是查看`/var/run/utmp`，输出更简单一些
  - 输出格式
    - 用户名
    - 登录终端
    - 登陆时间（来源IP）
- `last`查看系统所有登陆过的用户信息和系统重启信息。此命令查看`/var/log/wtmp`
  - 输出格式
    - 用户名
    - 终端号
    - 来源IP
    - 登陆时间 - 退出时间（使用时长）
- `lastlog`查看系统中所有用户最后一次登陆时间。此命令查看`/var/log/lastlog`
  - 输出格式
    - 用户名
    - 终端
    - 来源IP
    - 登陆时间
- `lastb`查看错误登录信息。此命令查看`/var/log/btmp`
  - 输出格式
    - 错误登录用户
    - 终端
    - 来源IP
    - 尝试登陆时间

## Shell快捷键

- `Ctrl-A`光标移动到命令开头
- `Ctrl-E`光标移动到命令结尾
- `Ctrl-C`终止当前命令
- `Ctrl-L`清屏，类似于`clear`
- `Ctrl-U`删除光标之前的命令
- `Ctrl-Y`粘贴`Ctrl-U`剪切掉的内容

## 驱动

加载驱动的四个等级：

- 直接放入系统内核。系统启动时必须的驱动，较少
- 以模块的形式放入硬盘。保存在`/lib/modules/<kernel-version>/kernel`中。较多。后缀为`.ko`
- 驱动可以被Linux识别，但是系统认为其不常用，所以默认不加载。如果要使用，需要重新编译内核。NTFS驱动就属于这种情况，不过第三方的`NTFS-3G`插件可以以模块的形式安装NTFS驱动
- 硬件不能被Linux内核识别，需要手动安装驱动

## 挂载命令

### 概述

- `lsblk`查看磁盘
- `fdisk -l`查看磁盘分区信息，包括swap分区
- `mount`
  - `mount [-l]`查询已经挂载的设备。`-l`表示卷标
  - `mount -a`根据`/etc/fstab`的内容自动挂载。如果找不到设备会启动错误。此命令可以用来测试配置文件是否正确，但是此命令有一定的容错能力，不要完全依赖此命令进行检错
  - `mount [-t <file-system>] [-L <label>] [-o <options>] <device-name> <mount-point>`把设备文件`device-name`挂载到`mount-point`目录上
    - 文件系统：`ext3`、`ext4`等。系统会自动识别，所以这个选项可以不写
    - `-L`：按照卷标挂载，而不是按照设备文件名挂载
    - `-o`用来指定读写权限、同步异步等
- `umount <mount-point|device_name>`卸载设备
  - 如果设备正在被其他程序使用，则无法卸载。可以`kill`掉目标进程

> 为什么`mount`一定要挂载在空目录？其实目录非空也可以，目录里面的内容也不会被覆盖，卸载设备之后还是可以访问里面的内容，但是挂载着其他设备的时候，这些文件没有入口，显然是不合理的。所以不建议挂载设备到非空目录

### 挂载NTFS分区

Linux默认不支持NTFS。苹果系(Unix)可以只读访问NTFS

Linux需要安装驱动。官方驱动需要重新编译内核，且只能只读NTFS中的文件。可以使用第三方的NTFS-3G避免编译内核来访问NTFS。但是还是不建议使用驱动的方式访问文件。基于网络的访问多香啊

## 中文编码

在Linux中使用中文有两个条件：

- 安装了中文编码与中文字体
- 操作终端支持中文。纯字符终端不支持中文

可以修改环境变量`LANG`来设置终端字符集：

- `zh_CN.UTF-8`表示中文
- `en_US.UTF-8`表示英文

使用`mount`挂载设备的时候需要手动指定编码才能支持中文显示：`-o iocharset=utf8`

## vim

> 此内容不适合入门vim

### 常见设置命令

- `:set nu`/`:set nonu`显示/取消行号
- `:syntax on`/`:syntax off`启动/关闭语法高亮
- `:set hlsearch`/`:set nohlsearch`是否把查找的字符串高亮
- `:set ruler`/`:set noruler`是否显示右下角状态栏
- `:set showmode`/`:set noshowmode`是否显示左下角状态栏
- `:set list`/`:set nolist`是否显示隐藏字符
  - `Tab`用`^I`表示
  - 换行用`$`表示
  - 回车用`^M`表示。所以windows下的回车换行会表示为`^M$`
  - 可以使用命令`dos2unix`或`unix2dos`来转换文件格式
- `:set all`查看所有参数

上面的修改只能临时生效。可以修改`~/.vimrc`配置文件来永久生效

### 替换命令

- `:m,ns/old/new/g`表示替换第`m`行到第`n`行所有`old`为`new`
- `:%s/old/new/g`替换全文的`old`为`new`

其中`old`的格式为**正则表达式**，如`^`为行首，`$`为行尾

### 其他

- `:r <filename>`可以在光标处导入文件
- `:!<command>`执行系统命令，可以用来查看系统信息
- `:r !<command>`导入命令结果
- `:map <key> <command>`绑定快捷键
  - `:map ^P I#<ESC>` - 按下Ctrl+P的时候在行首加入注释。注意：其中的`^P`不是手工输入，而是使用`Ctrl+V Ctrl+P`来输入的。其他字符手工输入
  - `:map ^B ^x` - 按下Ctrl+B的时候，删除行首第一个字母
- `:ab <source> <target>`字符自动替换
  - `:ab mymail discrete_tom@outlook.com` - 设置之后，一旦输入`mymail`加空格或回车，会自动替换为`discrete_tom@outlook.com`
- `vim -o file1 file2`上下分屏打开多个文件，使用`Ctrl+W`加上下箭头切换文件
- `vim -O file1 file2`左右分屏打开多个文件，使用`Ctrl+W`加左右箭头切换文件
