---
title: 初次使用树莓派的一些坑
description: 键盘布局、配置wifi、启用SSH等
---

## 树莓派信息

树莓派zero w

可能是最便宜的树莓派。毕竟是第一次玩，作为实验品（消耗品）

虽然很小，但是有wifi和蓝牙

## 安装系统

需要一个读卡器，先在电脑上把系统刷到SD卡，使用官方工具[Raspberry Pi Imager](https://www.raspberrypi.org/software/)

## 开机与密码

没有开机键，插电即开机

默认用户名为`pi`，密码为`raspberry`，推荐先改密码：`sudo passwd pi`

## 修改键盘布局

1. 执行`sudo raspi-config`
2. 选择`Localization Options`
3. 选择`Keyboard`
4. 选择`Generic 101-Key PC`
5. 选择`Other`
6. 选择`English (US)`
7. 选择`English (US, alt. intl.)`
8. 一路OK即可

## 连接wifi

可以参考[官方文档](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)

1. 执行`sudo raspi-config`
2. 选择`Localisation Options`
3. 选择`WLAN Country`
4. 选择`CN China`，保存并退出
5. 执行`sudo iwlist wlan0 scan`查看可用网络。主要是关注网络的`ESSID`，也就是网络名。
6. 修改`/etc/wpa_supplicant/wpa_supplicant.conf`文件，在文末加上：

```conf
network={
 ssid="WIFI名字"
 psk="WIFI密码"
}
```

4. 重启网卡：`wpa_cli -i wlan0 reconfigure`
5. 检查配置是否成功：`ifconfig wlan0`，如果输出结果中有`inet`则说明成功获取了IPv4地址。如果有`inet6`则说明成功获取了IPv6地址
6. 如果想要固定IP地址，可以编辑`/etc/dhcpcd.conf`，添加如下内容：（重启生效）

```conf
interface wlan0
static ip_address=xxx.xxx.xxx.xxx/24
static routers=xxx.xxx.xxx.xxx
```

## 启用SSH

虽然树莓派上面有`systemctl`，但是一开始`sshd`没有被`systemctl`接管，所以无法`sudo systemctl start sshd`

可以直接：`sudo /etc/init.d/ssh start`，此方案可以临时启动ssh，重启后失效

如果要永久开启SSH服务，可以：

1. `sudo raspi-config`
2. 选择`Interface Options`
3. 选择`SSH`，跟着提示激活即可

## 配置软件镜像

以下使用清华镜像来加速`apt`安装软件的速度

1. 执行`cat /etc/os-release`。我的是`Raspbian GNU/Linux 10 (buster)`
2. 参考[文档](https://mirrors.tuna.tsinghua.edu.cn/help/raspbian/)，根据对应的版本修改对应的文件

```bash
# 编辑 `/etc/apt/sources.list` 文件，删除原文件所有内容，用以下内容取代：
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi

# 编辑 `/etc/apt/sources.list.d/raspi.list` 文件，删除原文件所有内容，用以下内容取代：
deb http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ buster main ui
```

3. 执行`sudo apt update`更新软件仓库索引
4. 执行`sudo apt upgrade -y`升级软件包。由于有些软件包依赖于更高版本的内核，所以可能需要重启：`sudo reboot now`，然后再执行一次`sudo apt upgrade -y`

## 安装docker

> 树莓派Zero w是`armv61`架构的32位处理器（使用`uname -m`查看。ARM v8之前都是32位），正常的docker安装方式可能无效，有些镜像可能也无法正常工作

参考[官方文档](https://docs.docker.com/engine/install/debian/)：

> For Raspbian, installing using the repository is not yet supported. You must instead use the convenience script.

执行`sudo curl -sL get.docker.com | bash`即可。其实还是基于`apt`安装软件，只不过repo不是`debian`而是`raspbian`

## 配置docker镜像源

参考此[博客](https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6)

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://docker.mirrors.ustc.edu.cn",
        "https://dockerhub.azk8s.cn",
        "https://mirror.ccs.tencentyun.com",
        "https://hub-mirror.c.163.com",
        "https://reg-mirror.qiniu.com"
    ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 参考

- [Raspberry Pi OS](https://www.raspberrypi.org/software/)
- [树莓派开启SSH的N种方法](https://www.jianshu.com/p/654ee08d2b3a)
- [Setting up a wireless LAN via the command line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
- [树莓派开箱配置之更改键盘布局](https://shumeipai.nxez.com/2017/11/13/raspberry-pi-change-the-keyboard-layout.html)
- [Raspbian 镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/raspbian/)
- [How to check the Raspbian Version](https://pimylifeup.com/raspbian-version/)
- [Docker Community Edition 镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/)
- [apt 和 apt-get的区别](https://blog.csdn.net/liudsl/article/details/79200134)
- [树莓派4B如何手动固定IP地址](https://blog.csdn.net/weixin_42108484/article/details/104032372)
- [Install Docker Engine on Debian](https://docs.docker.com/engine/install/debian/)
- [Docker 'core-dump' error when starting service](https://raspberrypi.stackexchange.com/questions/93559/docker-core-dump-error-when-starting-service)
- [How to install specific version of some package?](https://askubuntu.com/questions/428772/how-to-install-specific-version-of-some-package)
- [is my linux ARM 32 or 64 bit?](https://unix.stackexchange.com/questions/136407/is-my-linux-arm-32-or-64-bit)
- [How to install docker on a Raspberry Pi Zero W running Raspbian Buster](https://markmcgookin.com/2019/08/04/how-to-install-docker-on-a-raspberry-pi-zero-w-running-raspbian-buster/)
- [Docker Hub 镜像加速器](https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6)
