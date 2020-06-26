---
title: Linux Basic (part 9)
description: 日志管理
---

## 前言

本文是观看[此视频](https://www.bilibili.com/video/bv1ut411a7ro)时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。

本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差

本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识

有些内容与[大学的笔记](/academic/LinuxProgrammingEnvironment/)重复，建议先看大学的笔记

## 日志管理

### 概述

> CentOS 6.x开始`rsyslogd`取代了之前的`syslogd`，更安全，支持更多特性

系统日志文件都在`/var/log`中

常见日志（以下文件都在`/var/log`下）：
- `cron`定时任务的日志
- `dmesg`开机自检的信息
- `btmp`错误登录的日志，二进制文件，需要使用`lastb`查看
- `lastlog`所有用户最后一次登陆时间的日志，二进制，需要用`lastlog`查看
- `mailog`邮件日志
- `message`系统重要信息的日志。如果系统出现问题，首先检查这个文件
- `secure`记录验证和授权相关的信息，包括`ssh`登录，`su`切换用户，`sudo`授权等
- `wtmp`永久记录所有用户的登录与注销信息、系统启动与关闭事件。使用`last`命令查看
- `utmp`记录当前已经登录的用户的信息。使用`w`/`who`/`users`命令查询

常见应用日志（在`/var/log`下，使用RPM包安装的软件的日志才会在此目录下）：
- `httpd`
- `mail`
- `samba`
- `sssd`守护进程安全服务目录

### rsyslog

日志文件格式：
- 事件时间
- 发生事件的主机名
- 产生事件的服务或程序名
- 事件具体信息

配置文件：`/etc/rsyslog.conf`，格式：
- 服务名称，连接符，日志等级
  - 连接符的取值
    - `.`表示只要不低于设置的日志等级的日志都会被保存
      - 比如`cron.info`表示`cron`产生的不低于`info`等级的日志都会被保存
    - `.=`表示只记录指定等级的日志
      - 比如`cron.=emerg`表示只记录`emerg`等级的日志
    - `.!`表示不等于
- 日志记录位置

> 比如`authpriv.* /var/log/secure`表示【认证相关服务，所有日志等级，记录在`/var/log/secure`下】

日志等级：
- `debug`调试信息
- `info`普通信息
- `notice`需要注意的普通信息
- `warning`警告，但是不影响系统运行
- `err`错误，系统会受到影响
- `crit`系统会收到重大影响
- `alert`需要立即采取行动
- `emerg`系统已经崩溃无法使用
- `*`表示所有等级
- `none`表示忽略所有日志

日志目标：
- 可以使用绝对路径指定保存日志的文件，也可以是设备文件
  - 文件前面如果有`-`则表示日志先保存在内存，然后保存在文件
- 可以转发给远程主机。需要加载网络模块
- `*`表示立即给所有用户发消息，通常用于`emerg`等级的事件

### 日志轮替

日志最好按天切割为不同的文件，太久的日志可以删除。使用`/etc/logrotate.conf`配置日志切割参数

RPM包安装的程序通常会自行修改`/etc/logrotate`文件。源码包安装的程序需要自行修改

在`/etc/logrotate`中使用`dateext`可以把切割后日志的扩展名变为日期。否则日志会以编号结尾

配置文件中有`postrotate`选项，用来指定rotate之后执行的脚本。可能会用来重启服务和rsyslog，保证服务的日志会写到新的日志文件。

`logrotate [options] <config-file>`命令：
- `-v`显示轮替信息
- `-f`强制轮替配置文件中的所有日志，即使没到时间
- `config-file`通常是`/etc/logrotate`

