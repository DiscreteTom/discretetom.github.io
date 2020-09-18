---
title: Setup HTTP Proxy for VS Code and Its Built-in Terminal
description: Including how to configure the authentication.
tags:
  - Network
  - VS Code
---

## Proxy for VS Code

In `settings.json`, add the following content:

```json
{
  "http.proxy": "<protocol>://<your-proxy-server>:<port>"
}
```

Tips:

- The `protocol` field is required, it has to be one of `http`, `https`.
- The `port` field is required.
- The default value of `http.proxy` will inherit from the environment variable `http_proxy` and `https_proxy`.
- There is only one `http.proxy`, no `https.proxy`.
- This setting will apply to VS Code itself and its plugins. For example, I'm using `Go` plugin, when I run `Go: Install/Update Tools` command, this proxy will take effect.
- This setting will not apply to the built-in terminal of VS Code.

## Proxy for the Built-In Terminal

In `settings.json`, add the following content:

```json
{
  "terminal.integrated.env.<platform>": {
    "http_proxy": "<protocol>://<your-proxy-server>:<port>",
    "https_proxy": "<protocol>://<your-proxy-server>:<port>"
  }
}
```

Tips:

- The `platform` should be one of `windows`, `linux` or `osx`.
- The `http_proxy` and `https_proxy` will take effect individually. You'd better set both of them.

## Authentication

Use this format of URL:

`<protocol>://<username>:<password>@<your-proxy-server>:<port>`

## Refs

- [How to specify a user id and password for Visual Studio Code with an authenticating proxy?](https://stackoverflow.com/a/37730040)