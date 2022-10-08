(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1181:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),e("p",[v._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[v._v("此视频")]),v._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),v._v(" "),e("p",[v._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),v._v(" "),e("p",[v._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),v._v(" "),e("p",[v._v("有些内容与"),e("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[v._v("大学的笔记")]),v._v("重复，建议先看大学的笔记")]),v._v(" "),e("h2",{attrs:{id:"启动引导与修复"}},[v._v("启动引导与修复")]),v._v(" "),e("h3",{attrs:{id:"运行级别"}},[v._v("运行级别")]),v._v(" "),e("ol",{attrs:{start:"0"}},[e("li",[v._v("关机")]),v._v(" "),e("li",[v._v("单用户模式，用于系统修复")]),v._v(" "),e("li",[v._v("不完全的命令模式，不包含NFS服务")]),v._v(" "),e("li",[v._v("正常的命令模式")]),v._v(" "),e("li",[v._v("系统保留")]),v._v(" "),e("li",[v._v("图形模式")]),v._v(" "),e("li",[v._v("重启")])]),v._v(" "),e("p",[v._v("相关命令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("runlevel")]),v._v("查看运行级别，输出上一次运行级别和当前运行级别。如果上一次运行级别是"),e("code",{pre:!0},[v._v("N")]),v._v("则表示没有上一次的运行记录")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("init <level>")]),v._v("切换级别\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("init 0")]),v._v("关机。不建议使用")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("init 6")]),v._v("重启。不建议使用")])])])]),v._v(" "),e("p",[v._v("相关文件：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("/etc/inittab")]),v._v("配置系统默认运行级别")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/etc/rc.d/rc.local")]),v._v("系统启动之后，所有用户登录之前，执行此文件\n"),e("ul",[e("li",[v._v("可以用来启动服务")])])])]),v._v(" "),e("h3",{attrs:{id:"启动引导程序grub"}},[v._v("启动引导程序GRUB")]),v._v(" "),e("blockquote",[e("p",[v._v("Boot Loader")])]),v._v(" "),e("p",[v._v("早期Linux使用Lilo作为引导程序，现在使用GRUB")]),v._v(" "),e("p",[v._v("相关文件：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("/boot/grub/grub.conf")]),v._v("配置文件\n"),e("ul",[e("li",[v._v("包含了所有系统通用的启动配置和每个不同的系统的单独配置")]),v._v(" "),e("li",[v._v("软链接\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("/boot/grub/menu.lst")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/etc/grub.conf")])])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/boot/grub/splash.xpm.gz")]),v._v("splash界面，通常不用改")])]),v._v(" "),e("p",[v._v("GRUB中的设备文件名："),e("code",{pre:!0},[v._v("(hdx,y)")]),v._v("，其中"),e("code",{pre:!0},[v._v("x")]),v._v("表示第几块SCSI硬盘，"),e("code",{pre:!0},[v._v("y")]),v._v("表示分区号。"),e("code",{pre:!0},[v._v("x")]),v._v("/"),e("code",{pre:!0},[v._v("y")]),v._v("都从0开始计数（设备文件名通常从1开始计数）")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("/boot/grub/grub.conf")]),v._v("的内容：")]),v._v(" "),e("ul",[e("li",[v._v("全局配置\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("default=0")]),v._v("默认启动第一个系统")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("timeout=5")]),v._v("5秒之后自动启动\n"),e("ul",[e("li",[v._v("0表示直接进入系统")]),v._v(" "),e("li",[v._v("-1表示永久等待")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("password --md5 <md5-code>")]),v._v("加密GRUB\n"),e("ul",[e("li",[v._v("即使有人可以操控本机，也要输入密码才能使用GRUB。但是不影响系统启动")]),v._v(" "),e("li",[v._v("这个配置必须放在"),e("code",{pre:!0},[v._v("timeout")]),v._v("和"),e("code",{pre:!0},[v._v("splashimage")]),v._v("之间。可选")]),v._v(" "),e("li",[v._v("使用"),e("code",{pre:!0},[v._v("grub-md5-crypt")]),v._v("获取MD5加密后的密码")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("splashimage=(hd0,0)/grub/splash.xpm.gz")]),v._v("背景图")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("hiddenmenu")])])])]),v._v(" "),e("li",[v._v("单个系统的配置（安装系统后会自动生成）\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("title")]),v._v("系统标题")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("lock")]),v._v("加密系统\n"),e("ul",[e("li",[v._v("是可选项。必须放在"),e("code",{pre:!0},[v._v("title")]),v._v("和"),e("code",{pre:!0},[v._v("root")]),v._v("之间")]),v._v(" "),e("li",[v._v("使用此选项之后，需要输入GRUB密码才能启动系统")]),v._v(" "),e("li",[v._v("不建议使用。否则远程登陆无法进入系统")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("root")]),v._v("根卷，主启动目录")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("kernel")]),v._v("内核加载选项。其中的路径相对于"),e("code",{pre:!0},[v._v("root")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("initrd")]),v._v("虚拟文件系统的镜像。路径相对于"),e("code",{pre:!0},[v._v("root")])])])])]),v._v(" "),e("blockquote",[e("p",[v._v("安装Linux+Windows双系统：云服务器肯定安装不了双系统。本机安装双系统时，需要先安装Windows再安装Linux。因为Linux的GRUB识别Windows，但是Windows的启动引导程序不识别Linux。如果先安装Linux再安装Windows，则Windows的引导程序会覆盖GRUB，此时需要手动安装GRUB")])]),v._v(" "),e("h3",{attrs:{id:"系统修复模式"}},[v._v("系统修复模式")]),v._v(" "),e("h4",{attrs:{id:"单用户模式"}},[v._v("单用户模式")]),v._v(" "),e("p",[v._v("可以用来破解/修改Linux密码。无法修复太复杂的问题。无法找回数据")]),v._v(" "),e("ol",[e("li",[v._v("在GRUB中按"),e("code",{pre:!0},[v._v("e")]),v._v("进入编辑模式（如果给GRUB设置了密码，需要按"),e("code",{pre:!0},[v._v("p")]),v._v("输入密码）")]),v._v(" "),e("li",[v._v("修改"),e("code",{pre:!0},[v._v("kernel")]),v._v("选项，在最后加上"),e("code",{pre:!0},[v._v(" 1")]),v._v("（空格+1），表示启动时以级别1（单用户模式）启动（此修改是临时生效的，不能重启）")]),v._v(" "),e("li",[v._v("按下"),e("code",{pre:!0},[v._v("b")]),v._v("启动。此时不需要输入账号密码就可以登录")]),v._v(" "),e("li",[v._v("修改"),e("code",{pre:!0},[v._v("root")]),v._v("密码即可")])]),v._v(" "),e("p",[v._v("如果在正常系统里面错误地把默认启动级别改为了0（关机）或6（重启），可以使用此方法修复")]),v._v(" "),e("p",[v._v("以此类推，只要能修改GRUB的配置文件，其密码也可以被无效化。只要能拿到硬盘，这些加密都没有用。")]),v._v(" "),e("p",[v._v("对于云环境，直接把盘拔了，挂载到新的云服务器上，就可以实现这些修复")]),v._v(" "),e("blockquote",[e("p",[v._v("更深一层的加密：给BIOS加密。破解方式：把主板电池扣了。这些后门是用来容错的。攻击者都需要拿到硬件才能破解")])]),v._v(" "),e("h4",{attrs:{id:"光盘修复略"}},[v._v("光盘修复（略）")]),v._v(" "),e("p",[v._v("使用光盘启动系统（绕开硬盘启动），然后把硬盘挂载到系统，从而修改硬盘中的内容。")]),v._v(" "),e("p",[v._v("云环境不需要这种修复")]),v._v(" "),e("h2",{attrs:{id:"服务管理"}},[v._v("服务管理")]),v._v(" "),e("h3",{attrs:{id:"服务分类"}},[v._v("服务分类")]),v._v(" "),e("ul",[e("li",[v._v("使用RPM包安装的服务\n"),e("ul",[e("li",[v._v("独立的服务")]),v._v(" "),e("li",[v._v("基于xinetd的服务（越来越少，几乎淘汰）")])])]),v._v(" "),e("li",[v._v("使用源码包安装的服务")])]),v._v(" "),e("p",[v._v("独立服务 vs 基于xinetd的服务：")]),v._v(" "),e("ul",[e("li",[v._v("独立服务\n"),e("ul",[e("li",[v._v("服务直接在内存跑")]),v._v(" "),e("li",[v._v("快，但是内存占用大")])])]),v._v(" "),e("li",[v._v("xinetd服务\n"),e("ul",[e("li",[v._v("xinetd在内存跑")]),v._v(" "),e("li",[v._v("请求会先发到xinetd，xinetd负责转发请求或启动服务")]),v._v(" "),e("li",[v._v("慢，但是内存占用小")])])])]),v._v(" "),e("p",[v._v("命令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("chkconfig --list")]),v._v("查询服务分类\n"),e("ul",[e("li",[v._v("0-6表示在不同的启动级别，服务是否默认启动")]),v._v(" "),e("li",[v._v("基于xinetd的服务没有不同启动级别的不同配置")]),v._v(" "),e("li",[v._v("目前服务器可能根本没有装xinetd，所以可能不输出xinetd服务")])])])]),v._v(" "),e("h3",{attrs:{id:"服务的启动与自启动"}},[v._v("服务的启动与自启动")]),v._v(" "),e("ul",[e("li",[v._v("RPM包安装的服务\n"),e("ul",[e("li",[v._v("独立服务，通常服务都安装在"),e("code",{pre:!0},[v._v("/etc/init.d")]),v._v(" "),e("ul",[e("li",[v._v("启动服务\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("<abs-path> start")]),v._v("，即"),e("code",{pre:!0},[v._v("/etc/init.d/<name> start")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("service <name> start|stop|restart")])])])]),v._v(" "),e("li",[v._v("自启动\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("chkconfig [--level <level>] [name] [on|off]")]),v._v(" "),e("ul",[e("li",[v._v("例："),e("code",{pre:!0},[v._v("chkconfig --level 2345 httpd on")])]),v._v(" "),e("li",[v._v("默认"),e("code",{pre:!0},[v._v("level")]),v._v("为"),e("code",{pre:!0},[v._v("2345")])])])]),v._v(" "),e("li",[v._v("修改"),e("code",{pre:!0},[v._v("/etc/rc.d/rc.local")]),v._v("文件，在里面使用绝对路径启动服务。"),e("strong",[v._v("推荐")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ntsysv")]),v._v("，此命令的设置和"),e("code",{pre:!0},[v._v("chkconfig")]),v._v("是共通的")])])])])]),v._v(" "),e("li",[v._v("基于xinetd的服务（以"),e("code",{pre:!0},[v._v("telnet")]),v._v("为例）\n"),e("ul",[e("li",[v._v("启动服务\n"),e("ul",[e("li",[v._v("修改"),e("code",{pre:!0},[v._v("/etc/xinetd.d/")]),v._v("下的配置文件，把"),e("code",{pre:!0},[v._v("disable")]),v._v("设置为"),e("code",{pre:!0},[v._v("no")]),v._v(" "),e("ul",[e("li",[v._v("然后重启"),e("code",{pre:!0},[v._v("xinetd")]),v._v("："),e("code",{pre:!0},[v._v("service xinetd restart")])]),v._v(" "),e("li",[v._v("启动服务后服务就会自启动")])])])])]),v._v(" "),e("li",[v._v("自启动\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("chkconfig <name> <on|off>")]),v._v(" "),e("ul",[e("li",[v._v("不需要写运行级别，因为依托于xinetd的运行级别")]),v._v(" "),e("li",[v._v("设置自启动后程序就会启动")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ntsysv")])])])])])])])]),v._v(" "),e("li",[v._v("源码包\n"),e("ul",[e("li",[v._v("启动服务\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("<abs-path> start")])])])]),v._v(" "),e("li",[v._v("自启动\n"),e("ul",[e("li",[v._v("修改"),e("code",{pre:!0},[v._v("/etc/rc.d/rc.local")])])])])])])]),v._v(" "),e("p",[v._v("如果希望使用"),e("code",{pre:!0},[v._v("service")]),v._v("等命令管理源码包软件，可以创建源码包的"),e("code",{pre:!0},[v._v("/bin")]),v._v("目录下的启动文件在"),e("code",{pre:!0},[v._v("/etc/init.d")]),v._v("目录下的软链接。如"),e("code",{pre:!0},[v._v("ln -s /usr/local/apache2/bin/apachectl /etc/init.d/apache")])]),v._v(" "),e("blockquote",[e("p",[v._v("生产服务器禁止使用"),e("code",{pre:!0},[v._v("telnet")]),v._v("服务端。这是用来远程管理的命令，但是账号密码都是明文传输，非常不安全")])]),v._v(" "),e("p",[v._v("如果希望使用"),e("code",{pre:!0},[v._v("chkconfig")]),v._v("管理源码包软件，需要在启动脚本中添加chkconfig参数，然后执行"),e("code",{pre:!0},[v._v("chkconfig --add <name>")])]),v._v(" "),e("p",[v._v("启动脚本中的chkconfig参数，以"),e("code",{pre:!0},[v._v("/etc/init.d/httpd")]),v._v("为例：")]),v._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token shebang important"}},[v._v("#!/bin/bash")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v(".\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 以注释的形式定义chkconfig参数。有功能性，不要修改")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# `-`表示自启动级别（默认）")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# `85`为启动序号，表示第85个启动(S85)")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# `15`为关闭序号，表示第15个关闭(K15)")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# chkconfig: - 85 15")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# description: xxxx")]),v._v("\n")])]),v._v(" "),e("h3",{attrs:{id:"常见服务略"}},[v._v("常见服务（略）")]),v._v(" "),e("p",[v._v("应该把用不到的服务关闭。具体服务的功能自行谷歌")])])}]};v.exports={attributes:{title:"Linux Basic (part 7)",description:"启动引导、修复系统、运行级别、服务管理等"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);