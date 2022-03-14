---
title: 使用pi-gen构建自定义树莓派镜像
description: 遇事不决，重装系统！
---

## 为什么要构建镜像

- 重装系统可以解决 99% 的问题
- 官方原始镜像有很多要修改的东西，比如时区，键盘布局，用户名密码，激活 SSH 服务器等。每次重装系统都要改一遍很麻烦
- 镜像备份工具可以实现镜像备份，但是各有缺陷
  - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) 使用起来最简单，但是是全盘备份，备份文件比较大，读取和写入都比较慢
  - 其他增量备份工具使用起来比较麻烦，而且也是备份文件系统，备份文件不会太小
- 而使用 pi-gen 进行自定义的镜像构建，我们只需要保存几个 shell 脚本来定义【如何构建镜像】就可以了，完全不用备份所有系统文件，而且易于修改

## 工具

[pi-gen](https://github.com/RPi-Distro/pi-gen)

- 是树莓派官方构建 Raspberry Pi OS images (Previously known as Raspbian)的工具
- 对宿主机的操作系统有要求，详见官方 [README](https://github.com/RPi-Distro/pi-gen)。我测试了 AWS Lightsail 的 Debian Buster 是没有问题的

## 脚本思路

### 配置环境

```bash
apt update && apt upgrade -y

apt-get install coreutils quilt parted qemu-user-static debootstrap zerofree zip \
dosfstools libarchive-tools libcap2-bin grep rsync xz-utils file git curl bc \
qemu-utils kpartx gpg pigz -y

git clone --depth 1 https://github.com/RPI-Distro/pi-gen.git
```

### 创建配置文件

```bash
cat > config << EOF
IMG_NAME=MyRaspi
LOCALE_DEFAULT=en_US.UTF-8
KEYBOARD_KEYMAP=us
KEYBOARD_LAYOUT="English (US)"
TIMEZONE_DEFAULT=Asia/Shanghai
# WPA_ESSID=<wifi name>
# WPA_PASSWORD=<wifi password>
# WPA_COUNTRY=CN
ENABLE_SSH=1
EOF
```

### 跳过不必要的镜像创建

```bash
# 跳过stage 3-5，因为我只需要lite版本的镜像
touch ./stage3/SKIP ./stage4/SKIP ./stage5/SKIP
touch ./stage4/SKIP_IMAGES ./stage5/SKIP_IMAGES

# 不需要 noobs buldle
rm -f stage2/EXPORT_NOOBS || true
```

### 添加自定义指令

```bash
# 在stage 2中添加一个step
step="04-customize"
# 如果文件夹已经存在，删了重建
if [ -d "$step" ]; then rm -Rf $step; fi
mkdir $step && pushd $step

cat > 00-run-chroot.sh << EOF
# <your custom script>
EOF

chmod +x 00-run-chroot.sh
```

## 实际脚本内容

此脚本会包含环境的配置，依赖的安装，以及 pi-gen 源码的下载。所以只需要开一个 Debian Buster 的机器，直接跑脚本即可

请使用 root 用户执行脚本

```bash
#!/bin/bash

user=$(whoami)
if [ "$user" != "root" ]
then
  echo "Please run as root."
  exit 1
fi

apt update && apt upgrade -y

apt-get install coreutils quilt parted qemu-user-static debootstrap zerofree zip \
dosfstools libarchive-tools libcap2-bin grep rsync xz-utils file git curl bc \
qemu-utils kpartx gpg pigz

git clone --depth 1 https://github.com/RPI-Distro/pi-gen.git

pushd pi-gen

cat > config << EOF
IMG_NAME=MyRaspi
LOCALE_DEFAULT=en_US.UTF-8
KEYBOARD_KEYMAP=us
KEYBOARD_LAYOUT="English (US)"
TIMEZONE_DEFAULT=Asia/Shanghai
# WPA_ESSID=<wifi name>
# WPA_PASSWORD=<wifi password>
# WPA_COUNTRY=CN
ENABLE_SSH=1
EOF

touch ./stage3/SKIP ./stage4/SKIP ./stage5/SKIP
touch ./stage4/SKIP_IMAGES ./stage5/SKIP_IMAGES

pushd stage2

rm -f EXPORT_NOOBS || true

step="04-customize"
if [ -d "$step" ]; then rm -Rf $step; fi
mkdir $step && pushd $step

script="00-run-chroot.sh"
cat > $script << EOF
# <your custom script>
EOF

chmod +x $script

popd
popd

echo
echo '==== Setup Finished ===='
echo 'Run "cd pi-gen && ./build.sh" to start build.'
echo "Modify pi-gen/config and pi-gen/stage2/$step/$script to customize your image."
```

代码保存在了 gist 上面，可以执行下面的脚本直接执行

```bash
wget -q https://gist.githubusercontent.com/DiscreteTom/17dcc201130d9c6e977c8db9150854f0/raw/f59addd983bc4244ea671ce9817a757e55daf9aa/setup-pi-gen.sh && bash setup-pi-gen.sh
```

## Ref

- [Using Pi-Gen to Build a Custom Raspbian Lite Image](https://geoffhudik.com/tech/2020/05/15/using-pi-gen-to-build-a-custom-raspbian-lite-image/)
