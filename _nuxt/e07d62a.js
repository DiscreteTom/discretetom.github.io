(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1214:function(e,t){const r={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"树莓派信息"}},[e._v("树莓派信息")]),e._v(" "),r("p",[e._v("树莓派zero w")]),e._v(" "),r("p",[e._v("可能是最便宜的树莓派。毕竟是第一次玩，作为实验品（消耗品）")]),e._v(" "),r("p",[e._v("虽然很小，但是有wifi和蓝牙")]),e._v(" "),r("h2",{attrs:{id:"安装系统"}},[e._v("安装系统")]),e._v(" "),r("p",[e._v("需要一个读卡器，先在电脑上把系统刷到SD卡，使用官方工具"),r("a",{attrs:{href:"https://www.raspberrypi.org/software/"}},[e._v("Raspberry Pi Imager")])]),e._v(" "),r("h2",{attrs:{id:"开机与密码"}},[e._v("开机与密码")]),e._v(" "),r("p",[e._v("没有开机键，插电即开机")]),e._v(" "),r("p",[e._v("默认用户名为"),r("code",{pre:!0},[e._v("pi")]),e._v("，密码为"),r("code",{pre:!0},[e._v("raspberry")]),e._v("，推荐先改密码："),r("code",{pre:!0},[e._v("sudo passwd pi")])]),e._v(" "),r("h2",{attrs:{id:"修改键盘布局"}},[e._v("修改键盘布局")]),e._v(" "),r("ol",[r("li",[e._v("执行"),r("code",{pre:!0},[e._v("sudo raspi-config")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("Localization Options")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("Keyboard")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("Generic 101-Key PC")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("Other")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("English (US)")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("English (US, alt. intl.)")])]),e._v(" "),r("li",[e._v("一路OK即可")])]),e._v(" "),r("h2",{attrs:{id:"连接wifi"}},[e._v("连接wifi")]),e._v(" "),r("p",[e._v("可以参考"),r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md"}},[e._v("官方文档")])]),e._v(" "),r("ol",[r("li",[e._v("执行"),r("code",{pre:!0},[e._v("sudo raspi-config")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("Localisation Options")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("WLAN Country")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("CN China")]),e._v("，保存并退出")]),e._v(" "),r("li",[e._v("执行"),r("code",{pre:!0},[e._v("sudo iwlist wlan0 scan")]),e._v("查看可用网络。主要是关注网络的"),r("code",{pre:!0},[e._v("ESSID")]),e._v("，也就是网络名。")]),e._v(" "),r("li",[e._v("修改"),r("code",{pre:!0},[e._v("/etc/wpa_supplicant/wpa_supplicant.conf")]),e._v("文件，在文末加上：")])]),e._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("network")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ssid")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"WIFI名字"')]),e._v("\n "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("psk")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"WIFI密码"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("重启网卡："),r("code",{pre:!0},[e._v("wpa_cli -i wlan0 reconfigure")])]),e._v(" "),r("li",[e._v("检查配置是否成功："),r("code",{pre:!0},[e._v("ifconfig wlan0")]),e._v("，如果输出结果中有"),r("code",{pre:!0},[e._v("inet")]),e._v("则说明成功获取了IPv4地址。如果有"),r("code",{pre:!0},[e._v("inet6")]),e._v("则说明成功获取了IPv6地址")]),e._v(" "),r("li",[e._v("如果想要固定IP地址，可以编辑"),r("code",{pre:!0},[e._v("/etc/dhcpcd.conf")]),e._v("，添加如下内容：（重启生效）")])]),e._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("interface wlan0\nstatic "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ip_address")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx/24\nstatic "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("routers")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxx.xxx.xxx.xxx\n")])]),e._v(" "),r("h2",{attrs:{id:"启用ssh"}},[e._v("启用SSH")]),e._v(" "),r("p",[e._v("虽然树莓派上面有"),r("code",{pre:!0},[e._v("systemctl")]),e._v("，但是一开始"),r("code",{pre:!0},[e._v("sshd")]),e._v("没有被"),r("code",{pre:!0},[e._v("systemctl")]),e._v("接管，所以无法"),r("code",{pre:!0},[e._v("sudo systemctl start sshd")])]),e._v(" "),r("p",[e._v("可以直接："),r("code",{pre:!0},[e._v("sudo /etc/init.d/ssh start")]),e._v("，此方案可以临时启动ssh，重启后失效")]),e._v(" "),r("p",[e._v("如果要永久开启SSH服务，可以：")]),e._v(" "),r("ol",[r("li",[r("code",{pre:!0},[e._v("sudo raspi-config")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("Interface Options")])]),e._v(" "),r("li",[e._v("选择"),r("code",{pre:!0},[e._v("SSH")]),e._v("，跟着提示激活即可")])]),e._v(" "),r("h2",{attrs:{id:"配置软件镜像"}},[e._v("配置软件镜像")]),e._v(" "),r("p",[e._v("以下使用清华镜像来加速"),r("code",{pre:!0},[e._v("apt")]),e._v("安装软件的速度")]),e._v(" "),r("ol",[r("li",[e._v("执行"),r("code",{pre:!0},[e._v("cat /etc/os-release")]),e._v("。我的是"),r("code",{pre:!0},[e._v("Raspbian GNU/Linux 10 (buster)")])]),e._v(" "),r("li",[e._v("参考"),r("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/raspbian/"}},[e._v("文档")]),e._v("，根据对应的版本修改对应的文件")])]),e._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 编辑 `/etc/apt/sources.list` 文件，删除原文件所有内容，用以下内容取代：")]),e._v("\ndeb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 编辑 `/etc/apt/sources.list.d/raspi.list` 文件，删除原文件所有内容，用以下内容取代：")]),e._v("\ndeb http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ buster main ui\n")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("执行"),r("code",{pre:!0},[e._v("sudo apt update")]),e._v("更新软件仓库索引")]),e._v(" "),r("li",[e._v("执行"),r("code",{pre:!0},[e._v("sudo apt upgrade -y")]),e._v("升级软件包。由于有些软件包依赖于更高版本的内核，所以可能需要重启："),r("code",{pre:!0},[e._v("sudo reboot now")]),e._v("，然后再执行一次"),r("code",{pre:!0},[e._v("sudo apt upgrade -y")])])]),e._v(" "),r("h2",{attrs:{id:"安装docker"}},[e._v("安装docker")]),e._v(" "),r("blockquote",[r("p",[e._v("树莓派Zero w是"),r("code",{pre:!0},[e._v("armv61")]),e._v("架构的32位处理器（使用"),r("code",{pre:!0},[e._v("uname -m")]),e._v("查看。ARM v8之前都是32位），正常的docker安装方式可能无效，有些镜像可能也无法正常工作")])]),e._v(" "),r("p",[e._v("参考"),r("a",{attrs:{href:"https://docs.docker.com/engine/install/debian/"}},[e._v("官方文档")]),e._v("：")]),e._v(" "),r("blockquote",[r("p",[e._v("For Raspbian, installing using the repository is not yet supported. You must instead use the convenience script.")])]),e._v(" "),r("p",[e._v("执行"),r("code",{pre:!0},[e._v("sudo curl -sL get.docker.com | bash")]),e._v("即可。其实还是基于"),r("code",{pre:!0},[e._v("apt")]),e._v("安装软件，只不过repo不是"),r("code",{pre:!0},[e._v("debian")]),e._v("而是"),r("code",{pre:!0},[e._v("raspbian")])]),e._v(" "),r("h2",{attrs:{id:"配置docker镜像源"}},[e._v("配置docker镜像源")]),e._v(" "),r("p",[e._v("参考此"),r("a",{attrs:{href:"https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6"}},[e._v("博客")])]),e._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /etc/docker\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /etc/docker/daemon.json "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<-")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'EOF\'\n{\n    "registry-mirrors": [\n        "https://docker.mirrors.ustc.edu.cn",\n        "https://dockerhub.azk8s.cn",\n        "https://mirror.ccs.tencentyun.com",\n        "https://hub-mirror.c.163.com",\n        "https://reg-mirror.qiniu.com"\n    ]\n}\nEOF')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl daemon-reload\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart docker\n")])]),e._v(" "),r("h2",{attrs:{id:"参考"}},[e._v("参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.raspberrypi.org/software/"}},[e._v("Raspberry Pi OS")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/654ee08d2b3a"}},[e._v("树莓派开启SSH的N种方法")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md"}},[e._v("Setting up a wireless LAN via the command line")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://shumeipai.nxez.com/2017/11/13/raspberry-pi-change-the-keyboard-layout.html"}},[e._v("树莓派开箱配置之更改键盘布局")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/raspbian/"}},[e._v("Raspbian 镜像使用帮助")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://pimylifeup.com/raspbian-version/"}},[e._v("How to check the Raspbian Version")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/"}},[e._v("Docker Community Edition 镜像使用帮助")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/liudsl/article/details/79200134"}},[e._v("apt 和 apt-get的区别")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_42108484/article/details/104032372"}},[e._v("树莓派4B如何手动固定IP地址")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.docker.com/engine/install/debian/"}},[e._v("Install Docker Engine on Debian")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://raspberrypi.stackexchange.com/questions/93559/docker-core-dump-error-when-starting-service"}},[e._v("Docker ‘core-dump’ error when starting service")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://askubuntu.com/questions/428772/how-to-install-specific-version-of-some-package"}},[e._v("How to install specific version of some package?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://unix.stackexchange.com/questions/136407/is-my-linux-arm-32-or-64-bit"}},[e._v("is my linux ARM 32 or 64 bit?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://markmcgookin.com/2019/08/04/how-to-install-docker-on-a-raspberry-pi-zero-w-running-raspbian-buster/"}},[e._v("How to install docker on a Raspberry Pi Zero W running Raspbian Buster")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6"}},[e._v("Docker Hub 镜像加速器")])])])])}]};e.exports={attributes:{title:"初次使用树莓派的一些坑",description:"键盘布局、配置wifi、启用SSH等"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);