---
title: OAuth2
description: 以及和SSO的关系和区别、和JWT的关系
---

本文是观看[此视频](https://www.bilibili.com/video/BV1kX4y17712/)和阅读[此文章](https://aaronparecki.com/oauth-2-simplified/)的笔记

## OAuth 和 SSO 的区别

两个不同维度的概念，但是容易混淆

- OAuth
  - 开源的授权规范
  - 一处注册，多处登录
  - 通常用于联合授权（跨不同的、互相不信任的系统）
- SSO
  - 一处登录，多处使用
    - 登录的时候可以使用各种方式，可以用 OAuth 也可以不用
  - 通常用于企业内部系统，或者是同家族的系统（比如淘宝、支付宝，都是互相信任的系统）
  - 关键点是 session 信息集中存储（比如统一把 JWT 存到 redis），跨站点共享 cookie 等客户端凭据
  - 可以在一个单独的域名实现登录，然后通过 query string 中的 redirectURL 参数返回原站点。
    - 示例流程：访问 `https://console.examples.com`，发现未登录，跳转到 `https://sso.examples.com/?redirect=https://console.examples.com`，登录并设置 cookie，然后跳回去

## OAuth

### 场景设定

假设我们自己写了一个应用 DTTK，希望使用 GitHub 实现登录。登录的时候获取 GitHub 的用户信息（用户名，头像等），然后在 DTTK 里面创建一个用户。

### 角色

- Client: 尝试【获取资源】的应用
  - 在我们的场景里面，就是 DTTK
- Authorization Server: 提供【授权服务】的服务器
  - 在我们的场景里面，由 GitHub 提供
- Resource Server: 【提供资源】的服务器
  - 在我们的场景里面，由 GitHub 提供，用来获取用户名、头像等信息
- Resource Owner: 其实就是用户。是资源的拥有者
  - 在我们的场景里面，就是 GitHub 的用户，是用户名、头像等信息的拥有者

### 创建应用

在开始之前，需要在 GitHub 上创建一个 OAuth App，设置 callback URL 然后获取到 client_id （和可选的 client_secret，secret 不可公开）

### 鉴权

OAuth2 定义了多种不同的 grant types 以适配不同的应用场景

- Authorization Code
  - 适用于服务器需要访问用户资源的场景
  - 通过用户的授权，获取到一个 code，然后通过 code 获取到 access token
- Implicit
  - 适用于没有后端的应用，比如 SPA
  - 直接通过前端获取 access token
- Password (Resource Owner Password Credentials)
  - 适用于用户信任第三方应用的情况，直接提供用户名密码
- Client Credentials
  - 适用于第三方应用访问自己的资源的场景
  - 直接通过 client_id 和 client_secret 获取 access token

#### Web Server Apps

OAuth 是在 DTTK web 客户端发生的，如果我们需要在 DTTK 服务器上面调用 GitHub 的 API，需要客户端把相关的 token 传递给服务器

对于这种有服务器的场景，通常使用 Authorization Code 鉴权方式，流程：

1. 用户访问 DTTK，发现没登陆，DTTK 跳转到 GitHub 的 OAuth 登陆界面，如 `https://auth.github.com/login?response_type=code&client_id=xxx&redirect_uri=yyy&scope=zzz&state=abc`
   1. response_type: Authorization Code 模式应该为固定值 code
   2. client_id: 在 GitHub 上创建的 OAuth App 时候获取到的
   3. redirect_uri: GitHub 登陆成功后跳转回来的地址
   4. scope: 请求的权限范围，比如获取用户信息、获取用户的仓库列表等
   5. state: 随机字符串，用来防止 CSRF （重放）攻击
2. 用户被重定向之后，会看到 GitHub 的登录界面，并确认授权，GitHub 会重定向到 redirect_uri，并且带上 code 和 state 参数，如`https://dttk.com/callback?code=xxx&state=abc`
   1. 此时最好确认 state 的一致性，防止 CSRF 攻击。state 可以存到 cookie/session 里面，然后在 callback 里面比对
3. 因为重定向发生在客户端（浏览器），所以浏览器会给 DTTK 服务器发请求（也就是上面的 callback），DTTK 服务器收到 code 就可以请求 GitHub 获取用户信息，如`POST https://api.github.com/token grant_type=authorization_code&code=xxx&redirect_uri=yyy&client_id=zz&client_secret=aaa`
   1. grant_type: 固定值 authorization_code
   2. code: 上一步获取到的 code
   3. redirect_uri: 和上一步一致
   4. client_id/client_secret: 在 GitHub 上创建的 OAuth App 时候获取到的
   5. 为啥不在前端直接请求？因为 client_secret 不应该暴露在前端。并且由服务器发起请求也可以避免一些 XSS 攻击和跨域问题
   6. GitHub 会返回 access_token 和过期时间等信息

#### Single Page Apps / 静态网站

此场景不使用服务器（准确来说，是 API 服务器或者后端）。这种情况不使用 client_secret，为了保证安全，通常会给每个请求加一个动态生成的 secret，这也被成为 PKCE 扩展。客户端获得授权之后，直接在客户端对资源服务器发起请求获取资源

曾经这个场景通常使用 Implicit 鉴权方式，现在建议使用 Authorization Code + PKCE。流程类似于上面的 Web Server Apps，但是多了一个 code_verifier 和 code_challenge 参数

1. 客户端生成一个随机的 43-128 字节长度的 code_verifier，然后通过 SHA256 哈希并 url-safe base64 编码 生成 code_challenge
2. 重定向到授权服务器时，使用`https://auth.github.com/login?response_type=code&client_id=xxx&redirect_uri=yyy&scope=zzz&state=abc&code_challenge=xxx&code_challenge_method=S256`
   1. code_challenge: 上一步生成的 code_challenge
   2. code_challenge_method: 固定值 S256
3. 重定向回来的时候，url 为`https://dttk.com/callback?code=xxx&state=abc`
   1. 同样，先检查 state 是否一致
4. 接下来，由客户端直接请求`POST https://api.github.com/token grant_type=authorization_code&code=xxx&redirect_uri=yyy&client_id=zz&code_verifier=vvv`
   1. code: 上一步获取到的 code
   2. code_verifier: 第一步生成的 code_verifier

显然此方案是在使用哈希的方式避免了 code 泄露的问题。code_verifier 在 POST 请求中会被加密，所以是安全的

#### 手机 App

通常我们认为手机 App 客户端也是不安全的，所以类似 SPA，我们也使用 Authorization Code + PKCE 的方式

- 如果我们直接使用手机里面的应用进行鉴权（比如跳转到微信鉴权），通常会构造一个特殊的 URL（比如`wx://auth?k=v`），系统根据 URL 打开对应的应用，然后应用会把结果返回给系统。callback URL 也会是一个特殊的 URL，比如`dttk://callback?k=v`，系统会根据这个 URL 打开 DTTK
- 如果鉴权服务器没有原生应用，那我们就可以启动一个浏览器，然后使用浏览器进行鉴权，callback URL 仍然是一个特殊的 URL，比如`dttk://callback?k=v`，系统会根据这个 URL 打开 DTTK

#### Password

显然这种方式会泄露用户的密码，所以只有类似前文 SSO 场景，互相信任的系统之间才会使用这种方式

```
POST https://auth.github.com/token
grant_type=password&username=xxx&password=yyy&client_id=zz
```

#### Client Credentials

这种方式适用于第三方应用访问自己的资源的场景，比如我们的 DTTK 服务器需要直接访问 GitHub 的 API，而不是用户在访问

```
POST https://auth.github.com/token
grant_type=client_credentials&client_id=zz&client_secret=aaa
```

### 发起请求

拿到 access token 之后，就可以使用这个 token 发起请求了。比如获取用户信息。关键点就是在 Header 里面加上 Authorization 字段，值为`Bearer xxx`，xxx 是 access token

```
GET https://api.github.com/user
Authorization: Bearer xxx
```

token 通常是 JWT
