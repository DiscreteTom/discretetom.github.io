---
title: 使用OpenVPN实现游戏本地联机
---

## 步骤

### 安装 Docker

使用 ubuntu 22.04，安装 docker 相关组件，使用清华源，参考 https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/

```bash
# install docker
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
curl -fsSL https://get.docker.com/ | sudo -E sh

# install docker-compose
sudo apt install docker-compose -y

# add user to docker group
sudo usermod -a -G docker ubuntu
```

### 配置 Docker Hub 镜像

国内配置 docker hub 镜像 参考 https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://mirror.iscas.ac.cn"
  ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 配置私有网络

参考 https://nano.ac/posts/357a264/ 为了避免链接失效，此处复制了部分原文，侵删

> 新建文件夹

```bash
mkdir openvpn
cd openvpn
```

> 创建 `docker-compose.yml`，文件内容如下：

```yml
version: "2"

services:
  openvpn:
    cap_add:
      - NET_ADMIN
    image: kylemanna/openvpn
    # 如果是 ARM64 架构，使用下面的镜像
    # image: nubacuk/docker-openvpn:arm64
    container_name: openvpn
    ports:
      - "1194:1194/udp" # 冒号左边为外部映射端口
    restart: unless-stopped
    volumes:
      - ./config:/etc/openvpn
```

> 执行下面的命令初始化配置文件，把里面的 `VPN.SERVERNAME.COM` 换成你的域名或者 IP 地址，把 `xxx.xxx.xxx.0` 换成你想要自定义的子网范围，例如 `192.168.255.0`：

```bash
docker-compose run --rm openvpn ovpn_genconfig -u udp://VPN.SERVERNAME.COM -s xxx.xxx.xxx.0/24
docker-compose run --rm openvpn ovpn_initpki
```

> 成功后会出现一个 `config` 文件夹，里面有个 `openvpn.conf` 文件，我们要做一些修改：

```conf
# 修改 tap/tun，若是搭建虚拟局域网则推荐使用 tap，若是搭建代理隧道则推荐使用 tun
# dev tun0
dev tap

# 将原本的 dns 设置注释掉
# push "block-outside-dns"
# push "dhcp-option DNS 8.8.8.8"
# push "dhcp-option DNS 8.8.4.4"

# 告诉客户端代理下面的 IP 段，这里换上之前自定义的子网范围
push "route xxx.xxx.xxx.0 255.255.255.0 vpn_gateway"

# 添加一条 允许客户端通过 VPN 互相通讯
client-to-client

# 允许多客户端复用 .oven 文件
duplicate-cn
```

> 然后生成 `.ovpn` 文件：

```bash
# 生成客户端密钥
docker-compose run --rm openvpn easyrsa build-client-full client nopass
# 生成客户端 ovpn 文件
docker-compose run --rm openvpn ovpn_getclient client > client.ovpn
```

> 成功后当前文件夹下会出现名为 `client.ovpn` 的配置文件。

> 配置文件默认是 `tun`，如果我们使用 `tap` 则需要将配置文件中的 `dev tun` 修改成 `dev tap`。

> 默认配置文件是全局代理，但我们只希望代理局域网的流量，不想代理上网流量。编辑配置文件删除下面一行（一般在最后一行）：

```conf
redirect-gateway def1
```

> 在配置文件中添加下列几行，使得客户端能够自动重连：

```conf
resolv-retry infinite
persist-key
persist-tun
```

> 启动服务端

```bash
# 加 -d 可在后台运行
docker-compose up
```

### 服务端防火墙

参考上文的配置，需要开放 UDP 1194

### 客户端

需要使用 OpenVPN v2.6 及以下的版本，否则无法使用 TAP 模式

- https://forums.openvpn.net/viewtopic.php?t=34863
- https://openvpn.net/community-downloads/

对于 Windows 客户端，可能需要添加入站规则以允许内网链接
