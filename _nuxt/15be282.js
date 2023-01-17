(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1299:function(t,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"树莓派信息"}},[t._v("树莓派信息")]),t._v(" "),r("p",[t._v("树莓派 zero w")]),t._v(" "),r("p",[t._v("可能是最便宜的树莓派。毕竟是第一次玩，作为实验品（消耗品）")]),t._v(" "),r("p",[t._v("虽然很小，但是有 wifi 和蓝牙")]),t._v(" "),r("h2",{attrs:{id:"安装系统"}},[t._v("安装系统")]),t._v(" "),r("p",[t._v("需要一个读卡器，先在电脑上把系统刷到 SD 卡，使用官方工具"),r("a",{attrs:{href:"https://www.raspberrypi.org/software/"}},[t._v("Raspberry Pi Imager")])]),t._v(" "),r("h2",{attrs:{id:"开机与密码"}},[t._v("开机与密码")]),t._v(" "),r("p",[t._v("没有开机键，插电即开机")]),t._v(" "),r("p",[t._v("默认用户名为"),r("code",{pre:!0},[t._v("pi")]),t._v("，密码为"),r("code",{pre:!0},[t._v("raspberry")]),t._v("，推荐先改密码："),r("code",{pre:!0},[t._v("sudo passwd pi")])]),t._v(" "),r("h2",{attrs:{id:"修改键盘布局"}},[t._v("修改键盘布局")]),t._v(" "),r("ol",[r("li",[t._v("执行"),r("code",{pre:!0},[t._v("sudo raspi-config")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("Localization Options")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("Keyboard")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("Generic 101-Key PC")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("Other")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("English (US)")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("English (US, alt. intl.)")])]),t._v(" "),r("li",[t._v("一路 OK 即可")])]),t._v(" "),r("h2",{attrs:{id:"连接-wifi"}},[t._v("连接 wifi")]),t._v(" "),r("p",[t._v("可以参考"),r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md"}},[t._v("官方文档")])]),t._v(" "),r("ol",[r("li",[t._v("执行"),r("code",{pre:!0},[t._v("sudo raspi-config")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("Localisation Options")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("WLAN Country")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("CN China")]),t._v("，保存并退出")]),t._v(" "),r("li",[t._v("执行"),r("code",{pre:!0},[t._v("sudo iwlist wlan0 scan")]),t._v("查看可用网络。主要是关注网络的"),r("code",{pre:!0},[t._v("ESSID")]),t._v("，也就是网络名。")]),t._v(" "),r("li",[t._v("修改"),r("code",{pre:!0},[t._v("/etc/wpa_supplicant/wpa_supplicant.conf")]),t._v("文件，在文末加上：")])]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("network")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ssid")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WIFI名字"')]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("psk")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WIFI密码"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("重启网卡："),r("code",{pre:!0},[t._v("wpa_cli -i wlan0 reconfigure")])]),t._v(" "),r("li",[t._v("检查配置是否成功："),r("code",{pre:!0},[t._v("ifconfig wlan0")]),t._v("，如果输出结果中有"),r("code",{pre:!0},[t._v("inet")]),t._v("则说明成功获取了 IPv4 地址。如果有"),r("code",{pre:!0},[t._v("inet6")]),t._v("则说明成功获取了 IPv6 地址")]),t._v(" "),r("li",[t._v("如果想要固定 IP 地址，可以编辑"),r("code",{pre:!0},[t._v("/etc/dhcpcd.conf")]),t._v("，添加如下内容：（重启生效）")])]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("interface wlan0\nstatic "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ip_address")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx.xxx.xxx.xxx/24\nstatic "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("routers")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx.xxx.xxx.xxx\n")])]),t._v(" "),r("h2",{attrs:{id:"启用-ssh-和-vnc"}},[t._v("启用 SSH 和 VNC")]),t._v(" "),r("ol",[r("li",[r("code",{pre:!0},[t._v("sudo raspi-config")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("Interface Options")])]),t._v(" "),r("li",[t._v("选择"),r("code",{pre:!0},[t._v("SSH")]),t._v("或"),r("code",{pre:!0},[t._v("VNC")]),t._v("，跟着提示激活即可")])]),t._v(" "),r("h2",{attrs:{id:"配置软件镜像"}},[t._v("配置软件镜像")]),t._v(" "),r("p",[t._v("以下使用清华镜像来加速"),r("code",{pre:!0},[t._v("apt")]),t._v("安装软件的速度")]),t._v(" "),r("ol",[r("li",[t._v("执行"),r("code",{pre:!0},[t._v("cat /etc/os-release")]),t._v("。我的是"),r("code",{pre:!0},[t._v("Raspbian GNU/Linux 10 (buster)")])]),t._v(" "),r("li",[t._v("参考"),r("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/raspbian/"}},[t._v("文档")]),t._v("，根据对应的版本修改对应的文件")])]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑 `/etc/apt/sources.list` 文件，删除原文件所有内容，用以下内容取代：")]),t._v("\ndeb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑 `/etc/apt/sources.list.d/raspi.list` 文件，删除原文件所有内容，用以下内容取代：")]),t._v("\ndeb http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ buster main ui\n")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("执行"),r("code",{pre:!0},[t._v("sudo apt update")]),t._v("更新软件仓库索引")]),t._v(" "),r("li",[t._v("执行"),r("code",{pre:!0},[t._v("sudo apt upgrade -y")]),t._v("升级软件包。由于有些软件包依赖于更高版本的内核，所以可能需要重启："),r("code",{pre:!0},[t._v("sudo reboot now")]),t._v("，然后再执行一次"),r("code",{pre:!0},[t._v("sudo apt upgrade -y")])])]),t._v(" "),r("h2",{attrs:{id:"安装-rust"}},[t._v("安装 Rust")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://sh.rustup.rs -sSf "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"配置-golang"}},[t._v("配置 Golang")]),t._v(" "),r("p",[t._v("下载与安装，参考"),r("a",{attrs:{href:"https://go.dev/doc/install"}},[t._v("官方文档")])]),t._v(" "),r("p",[t._v("因为在中国大陆，所以要配置 "),r("a",{attrs:{href:"https://goproxy.io/"}},[t._v("Proxy")]),t._v(" 才能顺利开发，否则执行"),r("code",{pre:!0},[t._v("go get/run/build")]),t._v("等命令会卡死")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export GOPROXY=https://goproxy.io,direct"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/profile\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n")])]),t._v(" "),r("p",[t._v("利用 Go 语言进行嵌入式开发，可以看下 "),r("a",{attrs:{href:"https://gobot.io/"}},[t._v("gobot")]),t._v(" 和"),r("a",{attrs:{href:"https://tinygo.org/"}},[t._v("tinygo")])]),t._v(" "),r("h2",{attrs:{id:"安装-docker"}},[t._v("安装 docker")]),t._v(" "),r("blockquote",[r("p",[t._v("树莓派 Zero w 是"),r("code",{pre:!0},[t._v("armv61")]),t._v("架构的 32 位处理器（使用"),r("code",{pre:!0},[t._v("uname -m")]),t._v("查看。ARM v8 之前都是 32 位），正常的 docker 安装方式可能无效，有些镜像可能也无法正常工作")])]),t._v(" "),r("p",[t._v("参考"),r("a",{attrs:{href:"https://docs.docker.com/engine/install/debian/"}},[t._v("官方文档")]),t._v("：")]),t._v(" "),r("blockquote",[r("p",[t._v("For Raspbian, installing using the repository is not yet supported. You must instead use the convenience script.")])]),t._v(" "),r("p",[t._v("执行"),r("code",{pre:!0},[t._v("sudo curl -sL get.docker.com | bash")]),t._v("即可。其实还是基于"),r("code",{pre:!0},[t._v("apt")]),t._v("安装软件，只不过 repo 不是"),r("code",{pre:!0},[t._v("debian")]),t._v("而是"),r("code",{pre:!0},[t._v("raspbian")])]),t._v(" "),r("h2",{attrs:{id:"配置-docker-镜像源"}},[t._v("配置 docker 镜像源")]),t._v(" "),r("p",[t._v("参考此"),r("a",{attrs:{href:"https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6"}},[t._v("博客")])]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/docker\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/docker/daemon.json "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'EOF\'\n{\n    "registry-mirrors": [\n        "https://docker.mirrors.ustc.edu.cn",\n        "https://dockerhub.azk8s.cn",\n        "https://mirror.ccs.tencentyun.com",\n        "https://hub-mirror.c.163.com",\n        "https://reg-mirror.qiniu.com"\n    ]\n}\nEOF')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"远程-gui-访问"}},[t._v("远程 GUI 访问")]),t._v(" "),r("p",[t._v("如果安装系统的时候选择的是 lite 版本（没有图形界面），可以使用如下命令安装图形界面")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xserver-xorg xinit\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" raspberrypi-ui-mods\n")])]),t._v(" "),r("p",[t._v("然后执行"),r("code",{pre:!0},[t._v("sudo raspi-config")]),t._v("，修改"),r("code",{pre:!0},[t._v("Display Settings")]),t._v("里面的"),r("code",{pre:!0},[t._v("Resolution")]),t._v("，任意选择一个非默认的分辨率。")]),t._v(" "),r("p",[t._v("重启，然后启动桌面："),r("code",{pre:!0},[t._v("sudo startx")])]),t._v(" "),r("p",[t._v("最后使用 vnc 连接即可")]),t._v(" "),r("p",[t._v("如果连接之后没有任务栏，可以在 GUI 里面开一个 terminal，然后执行"),r("code",{pre:!0},[t._v("lxpanel")])]),t._v(" "),r("h2",{attrs:{id:"使用-sysfs-控制-gpio"}},[t._v("使用 sysfs 控制 GPIO")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始使用18引脚。使用BCM引脚编号")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此操作后，`/sys/class/gpio`下面会多一个文件夹：`gpio18`")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sys/class/gpio/export\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置引脚为输出模式")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" out "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sys/class/gpio/gpio18/direction\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置高电平/低电平")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sys/class/gpio/gpio18/value\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 释放引脚")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sys/class/gpio/unexport\n")])]),t._v(" "),r("p",[t._v("查看 GPIO 的使用情况："),r("code",{pre:!0},[t._v("cat /sys/kernel/debug/gpio")]),t._v("。如果此文件不存在，可以手动挂载一下 debug 文件系统："),r("code",{pre:!0},[t._v("mount -t debugfs none /sys/kernel/debug")])]),t._v(" "),r("h2",{attrs:{id:"参考"}},[t._v("参考")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.raspberrypi.org/software/"}},[t._v("Raspberry Pi OS")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/654ee08d2b3a"}},[t._v("树莓派开启 SSH 的 N 种方法")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md"}},[t._v("Setting up a wireless LAN via the command line")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://shumeipai.nxez.com/2017/11/13/raspberry-pi-change-the-keyboard-layout.html"}},[t._v("树莓派开箱配置之更改键盘布局")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/raspbian/"}},[t._v("Raspbian 镜像使用帮助")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://pimylifeup.com/raspbian-version/"}},[t._v("How to check the Raspbian Version")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/"}},[t._v("Docker Community Edition 镜像使用帮助")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/liudsl/article/details/79200134"}},[t._v("apt 和 apt-get 的区别")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_42108484/article/details/104032372"}},[t._v("树莓派 4B 如何手动固定 IP 地址")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.docker.com/engine/install/debian/"}},[t._v("Install Docker Engine on Debian")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://raspberrypi.stackexchange.com/questions/93559/docker-core-dump-error-when-starting-service"}},[t._v("Docker ‘core-dump’ error when starting service")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://askubuntu.com/questions/428772/how-to-install-specific-version-of-some-package"}},[t._v("How to install specific version of some package?")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://unix.stackexchange.com/questions/136407/is-my-linux-arm-32-or-64-bit"}},[t._v("is my linux ARM 32 or 64 bit?")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://markmcgookin.com/2019/08/04/how-to-install-docker-on-a-raspberry-pi-zero-w-running-raspbian-buster/"}},[t._v("How to install docker on a Raspberry Pi Zero W running Raspbian Buster")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6"}},[t._v("Docker Hub 镜像加速器")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.raspberrypi.org/forums/viewtopic.php?t=202060"}},[t._v("Turn a ‘lite’ install into a ‘desktop’ install?")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://raspberrypi.stackexchange.com/questions/65848/how-do-i-upgrade-raspbian-lite-to-raspbian-pixel"}},[t._v("How do I upgrade Raspbian Lite to Raspbian PIXEL?")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/40594358"}},[t._v("树莓派的 GPIO 控制")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/48535503/setting-gpio-using-sysfs-fails-in-i-mx6"}},[t._v("Setting GPIO using sysfs fails in i.MX6")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forge.rust-lang.org/infra/other-installation-methods.html"}},[t._v("Other Rust Installation Methods")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_42306122/article/details/107571480"}},[t._v("go get/run/build 等命令无反应")])])])])}]};t.exports={attributes:{title:"初次使用树莓派的一些坑",description:"键盘布局、配置wifi、启用SSH等"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);