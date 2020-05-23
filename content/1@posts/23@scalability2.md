---
date: 2019-10-12
title: 系统设计中的可扩展性-part2
description: 镜像与副本、NoSQL、cache、异步
tags:
  - 系统设计
---

## 概述

本文是阅读[这些文章](http://www.lecloud.net/tagged/scalability/chrono)时整理的笔记。（似乎需要魔法上网才能访问原文

## 镜像与副本

因为负载均衡的存在，用户的请求可能被分发到不同的服务器，但是得到的响应应该是与后端服务器无关的。所以**可扩展性的一个原则：业务逻辑服务器应仅保存相同的业务逻辑代码而不应在其存储设备上保存任何用户信息**（存储设备包括内存和外存，用户信息包括session、用户头像等

session信息应该保存在一个所有业务逻辑服务器都能够访问的地方，比如一个**非业务逻辑**的数据库服务器或某个**非业务逻辑**服务器的cache（基于redis/memcached）

使用[Capistrano](https://capistranorb.com/)实现自动化在所有服务器上同步部署相同代码以保证业务逻辑正确性。

因为所有业务逻辑服务器的代码相同，我们可以保存服务器镜像(image, 在AWS中有现成的服务AMI: Amazon Machine Image)，然后快速克隆出多个业务逻辑服务器。

## 使用NoSQL

在上文基础上，业务逻辑服务器可以很快的水平扩展，数据库很快变成了性能瓶颈

优化方案：

1. 雇佣一个DBA(Database Administrator)，启动master-slave架构，master处理write请求，slave处理read请求，给master添加大内存和cache。一段时间过后，数据量更大，DBA提出使用数据库分区、非规范化、SQL tuning等方案使维护数据库的工作越发复杂。在数据量大了之后进行上述改变的成本会非常高，不如在数据量还很小的时候迁移到下述方案2
2. 非规范化数据库，放弃一切SQL请求中的join操作，把SQL当作NoSQL用，或者直接使用NoSQL比如MongoDB或CouchDB。SQL中的join操作需要在业务逻辑代码中完成。

## cache

此处的cache指的是内存中的缓存，即Redis&Memcached。**永远不要使用基于文件的cache**（基于文件的cache与动态内容静态化不同。此处基于文件的cache指把从数据库获取的内容暂时保存到文件中

cache使用key-value对存储，作为业务逻辑与持久化的中间层

两种缓存策略：

1. 缓存数据库query - 这是最常用的缓存策略。`key-value`分别是`hash后的query语句-query结果`。缺点：难以应对数据库数据的改变，可能需要设置过期时间
2. 缓存object - **推荐使用此方案**。把代码中的对象（object）进行缓存。cache在访问数据库之后首先构造object，然后缓存这个object。参考object：用户session（不要使用数据库保存session）、完全渲染的博客文章、活动流(activity streams)、用户的好友关系网（像QQ这样的社交应用当然不会每次拉取好友动态就访问数据库）。

## 异步

如果某个操作非常费时，用户就需要一直等待。服务器长时间无响应显然不是一个好现象。

解决方案：

1. 提前进行耗时的操作，用户请求的时候费时操作已经完成。比如把动态内容转为静态内容（比如提前渲染静态HTML页面然后保存到AWS S3或CDN上）
2. 有时候耗时的操作无法完全被预见，比如用户请求的结果需要根据用户的请求动态生成。这种情况服务器可以设置一个异步事件队列，接受请求之后立即返回“your job is running”。客户端不断请求以获取服务器状态，在任务结束时获得结果。

## 参考

- [scalability - Le Cloud Blog](https://www.lecloud.net/tagged/scalability)