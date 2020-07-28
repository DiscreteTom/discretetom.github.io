---
title: Access PT sites via IPv6 Proxy
description: And how to enable IPv6 on AWS
tags:
  - Network
---

## 预备知识

有些PT网站不向外公开，仅能使用IPv6访问，且屏蔽了中国境内三大运营商的IPv6网络。所以可以自己搭建IPv6代理服务器来访问，其实就是用一个支持IPv6的服务器搭建HTTP代理罢了

本文不是手把手教程。需要一定的技术基础

## AWS IPv6

本节讲解如何在AWS中国区开启支持IPv6的云服务器。如果你已经有支持IPv6的服务器，可以跳过这一节

### 配置VPC

> AWS默认VPC没有绑定IPv6 CIDR。可以给已有的VPC绑定IPv6 CIDR，不过本文会创建一个新的VPC，避免干扰已有的环境

1. 在VPC控制台创建新的VPC，并在`IPv6 CIDR block`中选择`Amazon provided IPv6 CIDR block`，这样新的VPC就会有IPv6 CIDR
2. 在新的VPC中创建一个新的子网，并分配IPv6 CIDR
3. 创建新的Internet Gateway，并关联到新创建的VPC
4. 编辑子网的路由表，添加路由条目
   1. `0.0.0.0/0` -> Internet Gateway
   2. `::/0` -> Internet Gateway

### 创建云服务器

1. 在EC2控制台创建新的instance
2. 服务器镜像(AMI)选择一个常用的linux镜像。我使用的是Amazon Linux 2
3. 随便选一个便宜的instance type。如果未来性能不够了也可以升级
4. 配置网络的时候，选择刚才创建的VPC和子网，启动`Auto-assign Public IP`和`Auto-assign IPv6 IP`，这样服务器就会有public IPv4地址和IPv6地址。IPv4地址用来支持本地电脑连接服务器，IPv6地址用来支持服务器连接PT网站
5. 添加存储。默认8G基本足够
6. 添加标签。可以跳过
7. 配置安全组，创建新的安全组，允许任何来源的SSH访问，以及TCP 3128端口的访问
8. 启动服务器

## 配置HTTP代理

1. 使用SSH登录服务器
2. 安装`squid`。对于我使用的Amazon Linux 2系统，执行`sudo yum -y install squid`
3. 编辑`squid`配置文件：`vim /etc/squid/squid.conf`
   1. 在`acl localnet src fe80::/10`下面添加
      1. `acl pubnet src all`，即把任意来源的流量(`all`)都标记为`pubnet`
   2. 在`http_access allow localhost`下面添加
      1. `http_access allow pubnet`，即允许标签为`pubnet`的流量访问此HTTP代理
   3. 保存文件。现在`squid`服务就可以被公网访问了
4. 启动`squid`服务：`sudo systemctl start squid`。此服务会监听3128端口

## 使用代理

由于配置的是HTTP代理，所以可以直接配置系统全局代理，也可以使用浏览器插件配置代理，请自行搜索。代理客户端所指定的IP地址使用IPv4地址即可

PT下载软件通常也可以配置代理

## 后续步骤

- 换一个端口，不使用3128端口以提升安全性
- 配置HTTPS来增强安全性

如果使用AWS：

- 修改安全组的来源IP以限制访问
- 给云服务器设置弹性IP防止IP地址漂移

## Refs

- https://www.jianshu.com/p/cdfa2323f9ff
- https://discretetom.github.io/posts/https-proxy

