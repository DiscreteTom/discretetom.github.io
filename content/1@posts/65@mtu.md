---
title: Windows MTU
description: "以及SSH卡在 debug1: expecting SSH2_MSG_KEX_ECDH_REPLY 的问题"
---

## 问题

SSH 连接服务器，开启`-v`查看详细日志，发现卡在`debug1: expecting SSH2_MSG_KEX_ECDH_REPLY`。但是从其他设备连接就没有问题，应该是本机的配置问题

## MTU

网上说可能是 MTU 导致的。

### 本机 MTU

在 Windows 上查看 MTU：

```bash
netsh interface ipv4 show subinterfaces
```

设置 MTU（需要管理员权限）：

```bash
netsh interface ipv4 set subinterface WLAN mtu=1400 store=persistent
```

设置为 1400 后成功解决了 SSH 的问题

### 链路 MTU

链路 MTU 可能会小于本机 MTU，因为路由器、交换机、目标设备等设备都有自己的 MTU。可以通过 ping 测试：

```bash
# -f 表示不分片 (Do not fragment)
# -l 表示数据包大小
ping -f -l 1472 <target>
```

如果超时或者成功，说明数据包大小比 MTU 小；如果收到 `Packet needs to be fragmented but DF set.` 说明数据包大小比 MTU 大。

夹逼即可得到链路 MTU。

## 参考

- [windows 中 mtu 如何获取](https://www.nndssk.com/xtjc/3944197rQKLE.html)
- [电脑 mtu 怎么设置](https://m.somode.com/course/31380.html)
