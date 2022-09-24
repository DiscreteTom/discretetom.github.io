(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1281:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"为什么要构建镜像"}},[t._v("为什么要构建镜像")]),t._v(" "),e("ul",[e("li",[t._v("重装系统可以解决 99% 的问题")]),t._v(" "),e("li",[t._v("官方原始镜像有很多要修改的东西，比如时区，键盘布局，用户名密码，激活 SSH 服务器等。每次重装系统都要改一遍很麻烦")]),t._v(" "),e("li",[t._v("镜像备份工具可以实现镜像备份，但是各有缺陷\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://sourceforge.net/projects/win32diskimager/"}},[t._v("Win32DiskImager")]),t._v(" 使用起来最简单，但是是全盘备份，备份文件比较大，读取和写入都比较慢")]),t._v(" "),e("li",[t._v("其他增量备份工具使用起来比较麻烦，而且也是备份文件系统，备份文件不会太小")])])]),t._v(" "),e("li",[t._v("而使用 pi-gen 进行自定义的镜像构建，我们只需要保存几个 shell 脚本来定义【如何构建镜像】就可以了，完全不用备份所有系统文件，而且易于修改")])]),t._v(" "),e("h2",{attrs:{id:"工具"}},[t._v("工具")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/RPi-Distro/pi-gen"}},[t._v("pi-gen")])]),t._v(" "),e("ul",[e("li",[t._v("是树莓派官方构建 Raspberry Pi OS images (Previously known as Raspbian)的工具")]),t._v(" "),e("li",[t._v("对宿主机的操作系统有要求，详见官方 "),e("a",{attrs:{href:"https://github.com/RPi-Distro/pi-gen"}},[t._v("README")]),t._v("。我测试了 AWS Lightsail 的 Debian Buster 是没有问题的")])]),t._v(" "),e("h2",{attrs:{id:"脚本思路"}},[t._v("脚本思路")]),t._v(" "),e("h3",{attrs:{id:"配置环境"}},[t._v("配置环境")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade -y\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" coreutils quilt "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parted")]),t._v(" qemu-user-static "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("debootstrap")]),t._v(" zerofree "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\ndosfstools libarchive-tools libcap2-bin "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" xz-utils "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bc")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nqemu-utils kpartx gpg pigz -y\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://github.com/RPI-Distro/pi-gen.git\n")])]),t._v(" "),e("h3",{attrs:{id:"创建配置文件"}},[t._v("创建配置文件")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('EOF\nIMG_NAME=MyRaspi\nLOCALE_DEFAULT=en_US.UTF-8\nKEYBOARD_KEYMAP=us\nKEYBOARD_LAYOUT="English (US)"\nTIMEZONE_DEFAULT=Asia/Shanghai\n# WPA_ESSID=<wifi name>\n# WPA_PASSWORD=<wifi password>\n# WPA_COUNTRY=CN\nENABLE_SSH=1\nEOF')]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"跳过不必要的镜像创建"}},[t._v("跳过不必要的镜像创建")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跳过stage 3-5，因为我只需要lite版本的镜像")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ./stage3/SKIP ./stage4/SKIP ./stage5/SKIP\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ./stage4/SKIP_IMAGES ./stage5/SKIP_IMAGES\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不需要 noobs buldle")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f stage2/EXPORT_NOOBS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"添加自定义指令"}},[t._v("添加自定义指令")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在stage 2中添加一个step")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("step")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"04-customize"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果文件夹已经存在，删了重建")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -Rf "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 00-run-chroot.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF\n# <your custom script>\nEOF")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x 00-run-chroot.sh\n")])]),t._v(" "),e("h2",{attrs:{id:"实际脚本内容"}},[t._v("实际脚本内容")]),t._v(" "),e("p",[t._v("此脚本会包含环境的配置，依赖的安装，以及 pi-gen 源码的下载。所以只需要开一个 Debian Buster 的机器，直接跑脚本即可")]),t._v(" "),e("p",[t._v("请使用 root 用户执行脚本")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please run as root."')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade -y\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" coreutils quilt "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parted")]),t._v(" qemu-user-static "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("debootstrap")]),t._v(" zerofree "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\ndosfstools libarchive-tools libcap2-bin "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" xz-utils "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bc")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nqemu-utils kpartx gpg pigz\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://github.com/RPI-Distro/pi-gen.git\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" pi-gen\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('EOF\nIMG_NAME=MyRaspi\nLOCALE_DEFAULT=en_US.UTF-8\nKEYBOARD_KEYMAP=us\nKEYBOARD_LAYOUT="English (US)"\nTIMEZONE_DEFAULT=Asia/Shanghai\n# WPA_ESSID=<wifi name>\n# WPA_PASSWORD=<wifi password>\n# WPA_COUNTRY=CN\nENABLE_SSH=1\nEOF')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ./stage3/SKIP ./stage4/SKIP ./stage5/SKIP\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ./stage4/SKIP_IMAGES ./stage5/SKIP_IMAGES\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" stage2\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f EXPORT_NOOBS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("step")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"04-customize"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -Rf "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("script")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00-run-chroot.sh"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF\n# <your custom script>\nEOF")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$script")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("popd")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("popd")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'==== Setup Finished ===='")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Run \"cd pi-gen && ./build.sh\" to start build.'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Modify pi-gen/config and pi-gen/stage2/'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$step")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$script")]),t._v(' to customize your image."')]),t._v("\n")])]),t._v(" "),e("p",[t._v("代码保存在了 gist 上面，可以执行下面的脚本直接执行")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q https://gist.githubusercontent.com/DiscreteTom/17dcc201130d9c6e977c8db9150854f0/raw/f59addd983bc4244ea671ce9817a757e55daf9aa/setup-pi-gen.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" setup-pi-gen.sh\n")])]),t._v(" "),e("h2",{attrs:{id:"ref"}},[t._v("Ref")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://geoffhudik.com/tech/2020/05/15/using-pi-gen-to-build-a-custom-raspbian-lite-image/"}},[t._v("Using Pi-Gen to Build a Custom Raspbian Lite Image")])])])])}]};t.exports={attributes:{title:"使用pi-gen构建自定义树莓派镜像",description:"遇事不决，重装系统！"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);