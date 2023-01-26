---
title: 开始魔改steam deck
description: 桌面模式自定义steam deck所需的准备工作
---

## SSH 连接

### 启用 SSH

启动 steam deck，进入桌面模式

点击开始菜单，System, Konsole，启动一个 terminal

使用 steam+X 组合键，呼出临时的屏幕键盘，使用如下命令：

```bash
# 如果之前没有给当前用户`deck`设置过密码，先使用如下命令设置密码
passwd
# 启动SSH服务
sudo systemctl start sshd
```

### 使用域名连接

如果 wifi 下只有一个 steam deck，可以直接使用 steam deck 的 hostname: `steamdeck`进行连接：`ssh deck@steamdeck`

### 使用 IP 连接

也可以查询 IP 之后基于 IP 进行连接：

- 系统托盘 - WIFI - 【选中你的 WIFI】 - Details，里面有 IP 地址
- 也可以命令行查 IP：`ip addr | grep inet | grep wlan0`

通过 SSH 命令进行连接：`ssh deck@<ip>`

### 开机自启动 SSH

```bash
# 如果要开机自启动SSH
sudo systemctl enable sshd
```

## 禁用会话挂起

SSH 连接之后，我们基本就不用手动操作 steam deck 了，但是它每过一段时间就会挂起会话，导致 SSH 断开。我们可以禁用会话挂起

Steam Deck 桌面模式，进入设置 - Power Management - Energy Saving, 禁用 Suspend session，以避免动不动就断开 SSH 连接

> 默认情况下，充电时 steam deck 不会自动挂起，使用电池时才会自动挂起，所以我们只需要禁用使用电池时的会话挂起。注意电量消耗！

## 解锁 steam deck

默认情况下 steam deck 是 readonly 模式，无法手动安装各种软件，所以需要解锁

```bash
# 切换为root用户
sudo -i

# 解锁
steamos-readonly disable

# 解锁之后，就可以使用包管理软件pacman来快乐玩耍了
# 在此之前，最好先进行一些pacman的初始化和准备工作
echo "keyserver hkps://keyserver.ubuntu.com" >> /etc/pacman.d/gnupg/gpg.conf
pacman-key --init
pacman-key --populate
pacman-key --refresh-keys

# 退出root用户
exit
```

## 其他

- 截屏，可以使用 Spectacle

## 参考

- [steamdeck_ssh_instructions](https://gist.github.com/andygeorge/eee2825fa6446b629745ea92e862593a)
- [questions about my IP Address](https://www.reddit.com/r/SteamDeck/comments/ws5pca/questions_about_my_ip_address/)
- [Get Your Deck's IP Address](https://deckcentral.net/posts/get_your_decks_ip/)
- [Unlock Steam Deck](https://christitus.com/unlock-steam-deck/)
- [在 steam deck 的桌面模式截屏](https://steamcommunity.com/app/1675200/discussions/0/3395175706747166784/)
