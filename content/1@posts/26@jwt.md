---
title: JWT概述
description: 如何生成JWT、JWT相比传统鉴权方式的优点
tags:
  - web
---

## JWT vs 传统鉴权方式

> ref: https://bilibili.com/video/BV1tJ411B7yJ

基于token的鉴权流程：

1. 客户端向服务器发起登录请求
2. 服务器
   1. 验证用户名密码
   2. 生成随机token（比如uuid）
   3. 为了水平扩展性，把token放在外部的redis或其他数据库上，如`token -> username`
   4. 返回登陆成功信息和token
3. 客户端登录后发出的请求会包含token
4. 服务器
   1. 先验证token，通过访问数据库得到username
   2. 进行后续操作

基于JWT的鉴权流程：

1. 客户端向服务器发起登录请求
2. 服务器
   1. 验证用户名密码
   2. 生成JWT，其中**保存了用户信息**，如`username`，且**被签名加密，无法篡改**
   3. 返回登陆成功信息和JWT
3. 客户端登录后发出的请求会包含JWT
4. 服务器
   1. 不需要访问数据库，直接解析JWT得到`username`
   2. 进行后续操作

可以看到JWT可以减少一次数据库的访问，减少服务器响应时间，缓解数据库压力。JWT自带的过期检测也非常方便

## JWT的生成

> ref: https://jwt.io/introduction/

### 概述

JWT包含三个部分：

- header
- payload
- signature

这三个部分都是字符串，使用`.`连接，即`<header>.<payload>.<signature>`

### header

header的内容*通常*包含两部分：token类型与加密算法。例：

```json
{
  "alg": "HS256", // "HMAC SHA256" or "RSA"
  "typ": "JWT"
}
```

上述json会以字符串形式被Base64Url编码（先Base64编码再URL编码）成为JWT中的header字符串

header的内容可以被客户端解析查看

### payload

payload的内容为自定义json对象。有一些预定义的字段，如`iss`表示`issuer`，`exp`表示`expiration time`，`sub`表示`subject`，`aud`表示`audience`。例：

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

上述json会以字符串形式被Base64Url编码（先Base64编码再URL编码）成为JWT中的payload字符串

由于使用Base64Url编码，所以客户端也可以解析查看payload的内容，所以**不要放敏感信息**，比如用户的密码。而是放一些描述性的信息，比如用户名

### signature

signature用来保证payload部分没有被篡改过。它会使用header中定义的加密方法和一个服务端才知道的secret字符串，把`<header>.<payload>`进行哈希签名

```js
signature = HMACSHA256([headerString, payloadString].join('.'), secret)
```

由于使用了secret，所以signature无法被客户端伪造，保证了JWT的真实性

### 使用方式

通常在HTTP Header的`Authorization: Bearer <token>`中使用


