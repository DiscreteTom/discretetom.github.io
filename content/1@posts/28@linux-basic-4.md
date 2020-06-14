---
title: Linux Basic (part 4)
description: 用户管理、权限管理
tags:
  - linux
  - ops
---

## 前言

本文是观看[此视频](https://www.bilibili.com/video/bv1ut411a7ro)时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。

本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差

本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识

有些内容与[大学的笔记](/academic/LinuxProgrammingEnvironment/)重复，建议先看大学的笔记

## 用户管理

### 用户相关文件

`/etc/passwd`用户信息文件

内容举例：`root:x:0:0:root:/root:/bin/bash`
- 用户名
- 密码位
  - `x`表示用户有密码
  - 密码写在`/etc/shadow`里，root之外的用户都看不了，且密码被哈希加密
- 用户ID（UID）
  - root用户的UID为0。**只要用户的UID为0，就有root权限**，且登录后用户名显示为root
  - 系统用户的UID为1-499（伪用户）。通常系统服务都会有伪用户，删除伪用户会导致系统异常
  - 普通用户的UID为500-65535
- **初始**组ID（GID）
  - 如果创建用户的时候不指定组，则会创建和用户同名的组
- 用户说明
- 用户的home目录
  - root的目录为`/root`
  - 普通用户的home为`/home/username`
  - 系统用户通常不需要登录，其home目录可以瞎写，不起作用
- 登录shell
  - 普通用户和root通常是`/bin/bash`
  - 伪用户通常是`/sbin/nologin`，禁止登陆

`/etc/shadow`保存用户密码信息

内容：
- 用户名
- 哈希之后的密码
  - 伪用户的密码是`!!`或`*`，表示密码无效。任何以`!`开头的密码都是无效的（因为哈希值被修改了。只不过`!`是使用习惯）
- 密码最新修改时间
  - 时间戳，以天为单位
  - 时间戳转日期：`date -d "1970-01-01 xxxxx days`，其中`xxxxx`为时间戳
  - 日期转时间戳：`echo $(($(date --date="yyyy/mm/dd" +%s)/86400+1))`，其中`yyyy/mm/dd`为日期格式，也可以写为`yyyymmdd`
    - `$((xxxx))`表示进行数学运算
    - `$(xxxx)`表示执行系统命令
    - `+%s`选项表示把时间换算成秒
  - 如果此值为`0`，则登录时会强制要求改密码
- 修改密码的最小时间间隔
  - 比如设置为`10`则表示10天之内不能改密码
  - 设置为`0`（默认）表示可以随时改
- 密码有效期
  - 默认值为`99999`(270+年)
- 密码到期前的警告时间（默认为7）
- 密码到期之后的宽限天数
  - 默认为-1，即使过期也可以使用
- 密码失效时间
  - 无视有效期，直接指定一个密码必定失效的时间戳
  - 如果过期，这一字段前面会出现一个`!`
- 保留字段

`/etc/group`组信息文件

内容：
- 组名
- 组密码位
- GID
- 附加组是此组的用户

- 初始组：每个用户有且只有一个初始组，通常和用户名相同（建议）
- 附加组：用户可以属于多个附加组

`/etc/gshadow`组密码文件。如果给用户组设置了组管理员，且给组设置了密码，则密码在此文件中。组管理员可以利用密码管理组。如果不设置管理员，只有root用户可以管理组。不过还是不建议设置组密码

每个用户在`/var/spool/mail/`目录中都会有一个邮箱目录

`/etc/skel`用户模板目录。用来设置用户目录的默认内容，通常是一些隐藏文件。新建用户时，会把此目录的所有内容拷贝到新用户的家目录

### 添加用户与设置密码

新建用户时，只有以下6个文件/夹中都不包含新的用户名，新的用户才能够创建成功：
- `/etc/passwd`
- `/etc/shadow`
- `/etc/group`
- `/etc/gshadow`
- `/home/<username>`
- `/var/spool/mail/<username>`

创建用户相关命令：
- `useradd <username>`创建用户。当然也可以手动修改上述6个文件/夹
  - `-u <number>`指定UID
  - `-g <group>`指定初始组
  - `-G <group>`指定附加组
  - `-c <description>`添加说明
  - `-d <directory>`手动指定家目录
  - `-s <shell>`手动指定shell程序。默认为`/bin/bash`
  - 此命令的默认值可以在`/etc/default/useradd`和`/etc/login.defs`中修改
- `passwd <username>`设置密码。**没有密码时无法登录**
  - `-l`暂时锁定用户（仅root用户可以使用此参数），其实就是在`/etc/shadow`中用户密码前添加`!!`
  - `-u`解锁用户（仅root用户可以使用此参数）
  - `--stdin`从`stdin`获取密码而不是交互式输入。用于脚本创建用户
  - 不加`username`时设置当前用户的密码。只有root用户可以指定其他用户名
- `chage`修改密码属性。比如`chage -d 0 <username>`会把密码修改日期归零，导致用户登录时需要重新设置密码

`/etc/default/useradd`内容：

```
GROUP=100 # 设置用户的默认组。但是Linux没有采用默认组的机制，所以这一行不起作用
HOME=/home
INACTIVE=-1 # 是/etc/shadow文件的第七个字段，即密码过期宽限天数。-1表示密码永不失效（即使过期）
EXPIRE= # 是/etc/shadow的第八个字段
SHELL=/bin/bash
SKEL=/etc/skel
CREATE_MAIL_SPOOL=yes
```

`/etc/login.defs`内容：

```
MAIL_DIR  /var/spool/mail
PASS_MAX_DAYS  99999
PASS_MIN_DAYS  0
PASS_MIN_LEN  5 # 此值已经失效
PASS_WARN_AGE  7
UID_MIN  500
UID_MAX  60000
GID_MIN  500
GID_MAX  60000
CREATE_HOME  yes
UMASK  077 # 用户目录的umask，不是系统的umask
USERGROUPS_ENAB  yes # 删除用户时删除其初始组
ENCRYPT_METHOD  SHA512 # 密码加密方式
```

### 修改用户信息

- `usermod [options] <username>`
  - `-u <UID>`修改UID
  - `-d <directory>`修改家目录
  - `-c <description>`修改说明
  - `-g <group>`指定初始组
  - `-G <group>`指定附加组
  - `-s <shell>`指定登录shell
  - `-e <date>`修改用户的失效日期，即`/etc/shadow`的第八个字段
  - `-L`临时锁定用户
  - `-U`解锁
  - `usermod -l <new> <old>`改名。不建议使用

### 其他用户相关命令

- `userdel [-r] <username>`删除用户
  - `-r`表示删除家目录
- `su [options] <username>`切换用户身份
  - `-`环境变量也切换。如果不使用此参数，环境变量中的`USER`会仍然为原用户名
  - `-c`仅执行一次命令，不切换身份

### 组管理命令

- `groupadd [options] <group>`添加组
  - `-g <GID>`指定GID
- `groupdel <group>`删除组
  - 不能删除其他用户的初始组，即组中不能有初始用户。但是可以有附加用户
- `gpasswd [options] <group>`用来设置组密码和指定管理员。也可以把用户添加到组或从组中删除
  - `-a <username>`添加用户到组
  - `-d <username>`从组中删除用户
- `newgrp <group>`改变有效组。创建文件时，文件的所属组为当前用户的有效组。使用此命令可以指定当前用户的哪个组为有效组

## 权限管理

### 文件基本权限

- 所有者。文件只能有一个所有者
- 所属组。文件只能由一个所属组
- 其他

### ACL权限

用来解决用户对文件身份不足的问题。直接指定某个用户对文件/目录的权限。如果直接指定目录，会有权限溢出的风险，因为目录的`x`表示可以进入，而文件的`x`表示可以执行。所以建议仅用于单个文件

使用`ls -l`查看文件信息时如果权限最后有一个`+`则表示文件受ACL保护


- `dumpe2fs -h <path>`查看ACL是否开启（通常ACL默认开启）
  - `dumpe2fs`用来查询指定分区文件系统详细信息
  - `-h`仅显示super block中的信息，不显示磁盘block的信息
  - 如果输出中包含`Default mount options: acl`则表示ACL已经开启
- `mount -o remount,acl /`重新挂载根分区，并启动ACL权限
  - 也可以修改`/etc/fstab`文件自动开启ACL权限
- `getfacl <filename>`查看文件的ACL权限
- `setfacl [options] <filename>`设置权限
  - `-m`修改ACL
    - 例：`setfacl -m u:<username>:5 <path/filename>`
      - `u`表示指定用户。可以替换为`g`表示组
      - `5`为附加的权限。也可以用`rwx`来代替
    - `-R`表示递归添加权限，只能作用于目录，只能作用于已经存在的文件
    - 设置目录默认ACL权限（能够作用于未来创建的文件）：`setfacl -m d:u:<username>:5 -R <path>`
    - 设置mask：`setfacl -m m:rxw <path>`
  - `-b <path>`删除文件/目录的所有ACL
  - `-x`删除指定用户/组的ACL权限
    - `setfacl -x u:<username> <path>`

### sudo

用来给普通用户管理员的执行权限。设置的东西越少，普通用户权限越大

- `visudo`设置sudo的规则
  - 格式
    - 用户名或组名，组名前加`%`
    - `<target-ip> = (<identity>) <commands>`
      - `target-ip`通常设置为`ALL`（注意是`target-ip`，很多教材都说是`source-ip`）
      - `identity`可以省略，默认为root
      - `commands`需要使用绝对路径
        - 如果仅写命令名，则可以使用任意参数
        - 如果指定参数，则只能使用指定的参数执行命令
        - 使用`, `分隔命令（有空格），使用`\`换行。
        - **不要让用户使用root身份不加参数地启动文本编辑器**，否则就可以编辑所有文件了
        - 支持正则表达式
        - `!`开头表示不允许
  - 例：
    - `root ALL=(ALL) ALL`root用户可以执行所有命令（root用户本来就可以执行所有命令）
    - `user1 ALL=/sbin/shutdown -r now`
    - `user1 ALL=/usr/bin/passwd [A-Za-z]*, !/usr/bin/passwd "", !/usr/bin/passwd root`
- `sudo`
  - `-l`查看当前用户能够执行的超级用户命令

> Unix的权限控制更为严格。即使是在root用户下，也要在命令前面添加`sudo`才能够执行特殊命令。可以用苹果设备试一下

### 文件特殊权限

不推荐使用。是给一些特殊程序使用的，不要自己设置

可以使用`chmod`设置特殊权限。使用数字设置权限时需要使用4位数，后三位表示普通权限，第一位表示特殊权限，`4`表示SUID，`2`表示GUID，`1`表示SBIT。比如`chmod 4755 <path>`。如果只给出3位数，则表示清空特殊权限

#### SetUID

> SUID

只能作用于可执行程序（包括二进制和脚本）。命令执行者在执行此程序时获得文件主的身份。比如用于`passwd`命令，普通用户才能够写`/etc/shadow`

使用`ls -l`查看文件时，如果所有者的执行权限位为`s`则表示此文件有SUID。如果是`S`则表示错误，文件不是可执行文件。或者理解为`s=S+x`

命令：`chmod u+s <file>`给用户添加针对某个文件的SUID权限

#### SetGID

> SGID

既可以用于可执行程序，也可以作用于目录（针对文件，风险较大，不建议使用。针对目录还好）

- 作用于文件时，命令执行者获得文件所属组的身份（比如`/usr/bin/locate`）
- 作用于目录时（没什么用）
  - 用户需要有`r`和`x`权限才能进入目录。有`w`权限才能新建文件
  - 普通用户在此目录中的有效组变为此目录的所属组
  - 如果普通用户有对此目录的`w`权限，则新建的文件的默认所属组为此目录的所属组

#### StickyBIT

> SBIT

只能作用于目录（风险较小）。普通用户即使有目录的`w`权限也不能在有SBIT的目录中删除别人创建的文件。如`/tmp`目录

在`ls -ll`时显示的`x`权限被替换为`t`

### chattr

- `chattr [+-=][options] <path>`
  - `+/-/=`添加/删除/设置权限
  - `i`，意为insert
    - 给文件设置`i`属性，文件不允许被删除、改名、添加或修改数据
    - 给目录设置`i`属性，不能在目录下创建和删除文件
  - `a`，意为append
    - 给文件设置`a`属性，只能在文件中增加数据，不能删除也不能修改数据
    - 给目录设置`a`属性，只能在目录中创建和修改文件，不能删除文件
  - `e`大多数文件都有`e`属性。表示文件是使用ext文件系统存储的，且不能使用`chattr -e`取消这个属性
- `lsattr [options] <path>`
  - `-a`显示所有文件和目录
  - `-d`如果目标是目录，仅列出目录本身的属性，而不是子文件的

特别容易忘。用来防止误删除文件有奇效。root用户都不能直接删除文件，但是root用户可以修改文件的`i/a`属性


