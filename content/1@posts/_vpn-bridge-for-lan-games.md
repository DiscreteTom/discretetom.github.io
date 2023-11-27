---
title:
---

参考：https://download.rainyun.com/accelerator.html

安装 open vpn server: https://github.com/angristan/openvpn-install
下载客户端：https://openvpn.net/
使用 bridge 才能玩 LAN 游戏：https://openvpn.net/community-resources/determining-whether-to-use-a-routed-or-bridged-vpn/
配置第二网卡：https://repost.aws/zh-Hans/knowledge-center/ec2-ubuntu-secondary-network-interface
配置 bridge: https://openvpn.net/community-resources/ethernet-bridging/

过程：

> ubuntu 22.04 on aws ec2
> 两个网卡，一个有公网 IP，使用 EIP。一个没有公网 IP，作为 bridge 用的网卡

配置第二网卡，配置文件：`/etc/netplan/51-eth1.yaml`

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    ens6: # 注意这里是ens6，不是eth1
      addresses:
        - 172.31.35.185/20 # 新的网卡的私网IP
      dhcp4: no
      routes:
        - to: 0.0.0.0/0
          via: 172.31.32.1 # 子网的网关
          table: 1000
        - to: 172.31.35.185 # 新的网卡的私网IP
          via: 0.0.0.0
          scope: link
          table: 1000
      routing-policy:
        - from: 172.31.35.185 # 新的网卡的私网IP
          table: 1000
```

配置完毕后执行`netplan --debug apply`，然后就可以在`ifconfig`里面看到新的网卡了

```bash
# 根据文档，安装相关依赖
apt update
apt install bridge-utils

# 安装ifconfig以便查看网卡信息
apt install net-tools

# 获取网卡名称，IP地址等信息
ifconfig
```

bridge-start.sh

```sh
#!/bin/bash

#################################
# Set up Ethernet bridge on Linux
# Requires: bridge-utils
#################################

# Define Bridge Interface
br="br0"

# Define list of TAP interfaces to be bridged,
# for example tap="tap0 tap1 tap2".
tap="tap0"

# Define physical ethernet interface to be bridged
# with TAP interface(s) above.
eth="ens6"
eth_ip="172.31.35.185"
eth_netmask="255.255.240.0"
eth_broadcast="172.31.47.255"

for t in $tap; do
    openvpn --mktun --dev $t
done

brctl addbr $br
brctl addif $br $eth

for t in $tap; do
    brctl addif $br $t
done

for t in $tap; do
    ifconfig $t 0.0.0.0 promisc up
done

ifconfig $eth 0.0.0.0 promisc up

ifconfig $br $eth_ip netmask $eth_netmask broadcast $eth_broadcast
```

执行脚本，然后可以在`ifconfig`里面看到`tap0`/`br0`

openvpn 服务端配置文件在：/etc/openvpn/server.conf
修改`dev tun` 为 `dev tap0`
修改以`server`开头的行为：

```conf
server-bridge 10.8.0.2 255.255.255.0 10.8.0.125 10.8.0.254
```

客户端需要使用 OpenVPN v2，否则无法使用 TAP 模式 https://openvpn.net/client/client-connect-vpn-for-windows/

但是不知道为啥 OpenVPN v2 一直不发 TCP 请求，抓包都抓不到

## L2TP

https://github.com/hwdsl2/setup-ipsec-vpn/tree/master

还是不好使
