---
title: Linux Basic (part 3)
description: 软件包、RPM、yum、源码安装相关
tags:
  - linux
  - ops
---

## 前言

本文是观看[此视频](https://www.bilibili.com/video/bv1ut411a7ro)时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。

本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差

本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识

有些内容与[大学的笔记](https://discretetom.github.io/academic/LinuxProgrammingEnvironment/)重复，建议先看大学的笔记

## 软件包

### 软件包分类

- 源码包
  - 优点
    - 可以自由选择功能
    - 可以自定义功能
    - 编译安装，更加稳定，**效率更高（约5%）**
    - 卸载方便，直接删除安装目录即可，几乎没有残留（安装时需要指定安装目录，**不要使用默认安装位置**，因为无法判断默认安装位置会安装在哪里）
    - **不需要管理依赖**
  - 缺点
    - 安装复杂，难以解决报错
    - 安装时间长
    - 默认不能用系统工具管理（比如`service`或`systemctl`）
- 二进制包（以RPM包为例）
  - 优点
    - 安装简单，不会报错
    - 安装快
    - 默认可以用系统工具管理
    - RPM会在数据库记录软件包的安装位置，以便卸载时没有残留。**建议使用默认安装位置**，方便系统服务进行查找
  - 缺点
    - 源码不可见
    - 功能选择不够灵活
    - 依赖性难以管理

### 手动解决模块依赖

直接用RPM安装二进制包肯恩会有依赖问题

模块依赖：缺少一个`so`文件，但是需要通过安装其他包才能得到这个文件。如何判断这个文件来自哪个包？

https://www.rpmfind.net 通过`so`文件查询需要安装哪个包

### RPM系统

#### RPM包命名规则

例：`httpd-2.2.15-15.el6.centos.1.i686.rpm`

- `httpd` - 包名/进程名，不一定和软件名相同
  - 比如apache服务器的包名就是`httpd`
- `2.2.15` - 软件版本
- `15` - 软件发布次数
- `el6` - 软件发行商
  - `el6`表示适合RHEL 6.x和CentOS 6.x使用
- `i686` - 适合的硬件平台
  - `i386`表示386以上计算机可以安装
  - `i586`表示586以上计算机可以安装
  - `i686`表示奔腾II以上计算机可以安装。目前所有CPU都是奔腾II以上，所以这个值比较常见
  - `x86_64`表示64位CPU可以安装
  - `noarch`没有硬件限制
- `rpm`表示这是RPM包

操作未安装的包时需要使用包全名和绝对路径来指定rpm文件位置。操作已经安装的包时直接使用包名即可，因为`rpm`会创建包名和包全名的对应数据库（位于`/var/lib/rpm`）

安装软件包的时候可能会发现有很多名字相关的包，比如`httpd`/`httpd-manual`/`httpd-devel`/`httpd-tools`。可以先安装主包，即`httpd`，根据依赖报错慢慢安装依赖包，最后安装所有的包。通常安装主包就有基本功能

#### 使用RPM

`rpm -ivh <package-name>`

- `-i` = install
- `-v` = verbose，显示详细信息
- `-h` = hash，使用`#`显示安装进度
- `--nodeps`不检测依赖性安装
- `--replacefiles`替换文件安装。如果安装软件的时候提示包的部分文件已存在，可以使用此选项忽视报错强行覆盖安装
- `--replacepkgs`替换软件包安装。如果软件已经安装，此选项可以重新安装一遍软件包
- `--force`强制安装，相当于`--replacefiles --replacepkgs`
  - 可以用于重新生成配置文件或依赖文件，**但是不会覆盖已修改且已存在的文件，只会添加缺失的文件**
- `--test`检测依赖性
- `--prefix`指定安装路径而不使用默认安装路径。**不建议使用**。默认安装路径由软件包作者决定
- `-U`升级安装。如果之前没有安装则安装。如果已经安装则升级(upgrade)
  - `rpm -Uvh <package-name>`
- `-F`仅升级安装。如果没有安装则不会安装(freshen)
  - `rpm -Fvh <package-name>`
- `rpm -e <package-name>`卸载，可以直接使用包名而不是包全名
  - `--nodeps`不检查依赖性
- `rpm -q <package-name>`查询包是否安装。使用包名而不是包全名
  - **无法被`yum`取代**，因为`yum`查询的是服务器端数据，`rpm`查询的是本地数据
- `rpm -qa`查看系统安装的所有包
- `rpm -qi <package-name>`查询包的详细信息。使用包名
- `rpm -qip <package-name>`查询没有安装的包的详细信息
- `rpm -ql <package-name>`查询包中的文件列表。可以使用`-p`查看没有安装的包的文件列表
- `rpm -qf <filename>`查询系统文件属于哪个包
- `rpm -qR <package-name>`查询包的依赖包（甚至包括Linux内核。不常用）

使用RPM需要手动安装/卸载各种依赖包，麻烦

#### 校验包

以下命令检测软件包的文件是否和安装的时候状态相同

- `rpm -Va`校验本机所有包
- `rpm -V <package-name>`验证已安装的包
- `rpm -Vf <file-name>`验证系统文件

校验结果格式：

- 内容验证结果
  - `S`文件大小改变
  - `M`文件类型或权限改变
  - `5`文件MD5校验改变
  - `D`设备主从代码改变
  - `L`文件路径改变
  - `U`文件拥有者改变
  - `G`文件的属组改变
  - `T`文件的修改时间改变
- 文件类型
  - `c`配置文件config file
  - `d`文档documentation
  - `g`鬼文件。表示此文件不该被软件包包含。少见
  - `l`授权文件license
  - `r`描述文件read me

软件包在安装的时候会检测数字证书。数字证书的位置：`/etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6`

- 导入数字证书：`rpm --import <cert-file>`。**这一步安装新系统之后需要手动执行**
- 查询已经安装的数字证书：`rpm -qa | grep gpg-pubkey`

#### RPM包中的文件提取

重新安装包不会覆盖已经被修改且存在的文件。所以为了恢复一些文件，可以从RPM包中提取文件

> 建议修改重要文件之前设置备份文件`xxx.bak`

`cpio`命令，本来是用来实现备份/还原的（很难用）。`-o`表示把数据备份到文件库，`-i`表示把数据从文件库恢复，`-p`表示不把数据放到文件库，直接复制为其他文件

`rpm2cpio <package-name> | cpio -idv . <file>`
- `rpm2cpio`把RPM包改为CPIO的二进制格式
- `.`表示恢复到当前目录（而不是默认安装目录，否则会覆盖已有文件）
- `file`为包中文件的绝对路径

例：`rpm2cpio /mnt/cdrom /Packages/httpd-2.2.15-53.el6.centos.x86-64.rpm | cpio -idv . /etc/httpd/conf`

### YUM系统

#### YUM概述

可以使用`yum`在线安装二进制包，`yum`负责管理依赖问题

> RHEL认为`yum`是售后服务，所以需要单独购买。正版RHEL需要购买CD Key才能使用`yum`。所以推荐使用CentOS，因为后者的`yum`是免费的

**使用`yum`卸载包的时候会自动卸载高级包**

#### YUM源

源的配置文件在`/etc/yum.repos.d`中，文件扩展名必须为`.repo`。默认生效的源为`CentOS-Base.repo`中的`base`

文件中有`yum`源容器。容器名称使用`[]`包裹

- `name`容器说明。可以随便写
- `mirrorlist`镜像站点
- `baseurl`源服务器地址，可以是一个文件夹，即`file:///xx/xx/xx`
- `enabled`是否启用。默认启用。`1/0`表示启用/禁用
- `gpgcheck`数字证书是否生效。`1/0`表示生效/不生效
- `gpgkey`数字证书的公钥文件保存位置

如果要禁用其他源，把`enabled`设置为`1`，或者把文件名改为不以`.repo`结尾。比如以`.repo.bak`结尾

#### 使用YUM

- `yum list [pakcage-name]`列出服务器中的包
  - 输出格式
    - 包名
    - 版本
    - 源的容器名称
- `yum search <keyword>`搜索包
  - `keyword`除了可以是包名的关键字，也可以是命令。比如查`netstat`会输出`net-tools`
- `yum info <package-name>`查询包的信息
- `yum install <package-name>`安装
- `yum update [pakcage]`升级。不指定包时升级所有包，包括内核
- `yum remove <package-name>`卸载。**慎用**，因为可能导致高层包的卸载

#### 使用YUM组

如果不知道包的名字怎么办？

- `yum grouplist`查看所有可用软件组列表
- `yum groupinfo <group-name>`查看软件组内的软件
- `yum groupinstall <group-name>`安装软件组
- `yum groupremove <group-name>`卸载组

### 源码包

#### 概述

使用源码包安装的软件效率更高，所以需要面向大量客户的包可以使用源码包安装来提升性能，比如LAMP。如果软件包是给开发人员自己用的，或者只给少量用户使用，建议使用RPM包安装，因为简单

源码包通常从官方网站下载

#### 如何安装源码包

1. 下载软件包
2. 解压
3. 进入解压目录
4. 执行`./configure`进行编译前准备（这一步可能被CMAKE代替。效果差不多，查CMAKE文档即可）
   1. 环境检测
   2. 定义需要启动的功能。可以执行`./configure --help`查看支持的功能
   3. 可以使用`./configure --prefix=/xxx/xxx`来指定安装路径
   4. 执行完毕后会把环境检测结果和定义好的功能写到`Makefile`文件
   5. 如果`./configure`的过程中报错，需要执行`make clean`清空编译生成的内容
5. 执行`make`进行编译。编译会调用gcc编译器，根据`Makefile`的内容编译软件。通常耗时较长
   1. 如果`make`的过程中报错，需要执行`make clean`清空编译生成的内容
6. 执行`make install`安装软件
   1. 通常会指定程序的安装位置
   2. 如果忘了指定安装目录，可以把这个命令的执行过程保存起来，以备未来删除
   3. 如果这一步出现问题，需要删除安装目录来进行清理

#### 打补丁

> 现在已经不常用

比较文件的不同：

`diff [options] old new`比较old和new的不同
- `-a`把任何文档视为文本文档
- `-b`忽略空格造成的不同
- `-B`忽略空白行造成的不同
- `-I`忽略大小写不同
- `-N`比较两个目录时，需要某个文件只在一个目录中，则在另一个目录中视为空文件
- `-r`比较目录时，递归比较子目录
- `-u`使用统一的输出格式

生成补丁文件：`diff -Naur old new > xxx.patch`，其中old和new建议使用绝对路径

打补丁：`patch -pn < xxx.patch`，其中`n`表示删除补丁文件中文件路径的层数。此命令不需要指定新旧文件，因为`xxx.patch`中包含了新旧文件的信息（使用了绝对路径）

