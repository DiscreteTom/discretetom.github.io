(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1178:function(v,_){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),l("p",[v._v("本文是观看"),l("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[v._v("此视频")]),v._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),v._v(" "),l("p",[v._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),v._v(" "),l("p",[v._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),v._v(" "),l("p",[v._v("有些内容与"),l("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[v._v("大学的笔记")]),v._v("重复，建议先看大学的笔记")]),v._v(" "),l("h2",{attrs:{id:"linux版本分类"}},[v._v("Linux版本分类")]),v._v(" "),l("ul",[l("li",[v._v("内核版\n"),l("ul",[l("li",[v._v("www.kernel.org")])])]),v._v(" "),l("li",[v._v("发行版\n"),l("ul",[l("li",[l("strong",[v._v("RedHat系列")]),v._v(" "),l("ul",[l("li",[v._v("个人版，有GUI、游戏等一些不需要在服务器上使用的功能\n"),l("ul",[l("li",[v._v("Fedora")])])]),v._v(" "),l("li",[v._v("服务器版\n"),l("ul",[l("li",[v._v("RHEL（有些功能收费）")]),v._v(" "),l("li",[l("strong",[v._v("CentOS")]),v._v(" "),l("ul",[l("li",[v._v("完全照抄RHEL以至于RedHat把它买了")])])])])]),v._v(" "),l("li",[v._v("使用RPM管理"),l("code",{pre:!0},[v._v("rpm")]),v._v("格式的包（RPM包），命令为"),l("code",{pre:!0},[v._v("rpm")]),v._v("，也可以使用"),l("code",{pre:!0},[v._v("yum")]),v._v("。"),l("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/linux/l-lpic1-v3-102-5/index.html"}},[l("code",{pre:!0},[v._v("yum")]),v._v("在RPM系统中添加了自动更新和依赖管理。")])])])]),v._v(" "),l("li",[v._v("Debian系列\n"),l("ul",[l("li",[v._v("Debian")]),v._v(" "),l("li",[v._v("Ubuntu\n"),l("ul",[l("li",[v._v("常用于教学，但是不适合服务器")])])]),v._v(" "),l("li",[v._v("使用APT管理"),l("code",{pre:!0},[v._v("deb")]),v._v("格式的包（DPKG包），命令为"),l("code",{pre:!0},[v._v("apt")]),v._v("。现在也可以安装RPM包")])])])])])]),v._v(" "),l("h2",{attrs:{id:"常见开源软件"}},[v._v("常见开源软件")]),v._v(" "),l("ul",[l("li",[v._v("Web Server\n"),l("ul",[l("li",[v._v("Apache")]),v._v(" "),l("li",[v._v("Nginx")])])]),v._v(" "),l("li",[v._v("Database\n"),l("ul",[l("li",[v._v("MySQL")]),v._v(" "),l("li",[v._v("MongoDB")]),v._v(" "),l("li",[v._v("Redis")])])]),v._v(" "),l("li",[v._v("Script Language\n"),l("ul",[l("li",[v._v("PHP")]),v._v(" "),l("li",[v._v("Python")]),v._v(" "),l("li",[v._v("Ruby")])])]),v._v(" "),l("li",[v._v("Linux和Windows之间的内网文件服务器\n"),l("ul",[l("li",[v._v("Samba")])])]),v._v(" "),l("li",[v._v("中文分词（用于搜索引擎\n"),l("ul",[l("li",[v._v("Sphinx")])])])]),v._v(" "),l("p",[v._v("常见WEB架构：LAMP/LNMP")]),v._v(" "),l("ul",[l("li",[v._v("Linux")]),v._v(" "),l("li",[v._v("Apache/Nginx")]),v._v(" "),l("li",[v._v("MySQL")]),v._v(" "),l("li",[v._v("PHP/Python")])]),v._v(" "),l("p",[v._v("www.netcraft.com可以查看网站使用的后端WEB架构")]),v._v(" "),l("h2",{attrs:{id:"安装linux"}},[v._v("安装Linux")]),v._v(" "),l("p",[v._v("以在虚拟机上安装CentOS为例")]),v._v(" "),l("h3",{attrs:{id:"虚拟机的网络配置"}},[v._v("虚拟机的网络配置")]),v._v(" "),l("ul",[l("li",[v._v("桥接\n"),l("ul",[l("li",[v._v("可以连接宿主机")]),v._v(" "),l("li",[v._v("可以访问局域网")]),v._v(" "),l("li",[v._v("可以访问公网")]),v._v(" "),l("li",[v._v("会占用一个局域网IP")])])]),v._v(" "),l("li",[v._v("NAT\n"),l("ul",[l("li",[v._v("可以访问宿主机")]),v._v(" "),l("li",[v._v("可以访问公网")])])]),v._v(" "),l("li",[v._v("仅主机\n"),l("ul",[l("li",[v._v("可以访问宿主机")])])])]),v._v(" "),l("h3",{attrs:{id:"磁盘与分区"}},[v._v("磁盘与分区")]),v._v(" "),l("p",[v._v("新硬盘连上电脑之后首先需要进行分区")]),v._v(" "),l("p",[v._v("分区方式（此技术为底层技术，Windows/Linux通用）：")]),v._v(" "),l("ul",[l("li",[v._v("MBR\n"),l("ul",[l("li",[v._v("每个硬盘最多支持4个分区，包括主分区+扩展分区")]),v._v(" "),l("li",[v._v("最大支持2.1TB的硬盘（多余的空间无法被使用")]),v._v(" "),l("li",[v._v("扩展分区，用来提升分区数量\n"),l("ul",[l("li",[v._v("每个硬盘只能有一个扩展分区")]),v._v(" "),l("li",[v._v("不能写数据，不能格式化，只能包含逻辑分区")]),v._v(" "),l("li",[v._v("逻辑分区数量可以达到10+")]),v._v(" "),l("li",[v._v("逻辑分区的分区号从5开始，主分区/扩展分区的分区号为1-4")])])])])]),v._v(" "),l("li",[v._v("GPT\n"),l("ul",[l("li",[v._v("理论上没有分区数限制。但Windows限制128个分区")]),v._v(" "),l("li",[v._v("最大支持9.4ZB的硬盘")])])])]),v._v(" "),l("p",[v._v("安装新系统时会先要求用户分配磁盘分区给Linux。")]),v._v(" "),l("ul",[l("li",[v._v("必需分区\n"),l("ul",[l("li",[v._v("根分区"),l("code",{pre:!0},[v._v("/")])]),v._v(" "),l("li",[v._v("swap分区（交换分区），可以理解为虚拟内存。没有挂载点，无法被用户访问，类型为swap\n"),l("ul",[l("li",[v._v("如果内存小于4GB，swap建议为内存2倍")]),v._v(" "),l("li",[v._v("如果内存大于4GB，swap建议和内存一致")]),v._v(" "),l("li",[v._v("如果磁盘空间够大，swap分区设置大一点没坏处")])])])])]),v._v(" "),l("li",[v._v("推荐分区\n"),l("ul",[l("li",[l("code",{pre:!0},[v._v("/boot")]),v._v("启动分区，1GB")])])]),v._v(" "),l("li",[v._v("常用分区。相当于是给一些文件夹单独设置分区，而不是作为根分区内的一个文件夹\n"),l("ul",[l("li",[l("code",{pre:!0},[v._v("/home")]),v._v("用于文件服务器")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/www")]),v._v("用于WEB服务器")])])])]),v._v(" "),l("h3",{attrs:{id:"文件系统"}},[v._v("文件系统")]),v._v(" "),l("p",[v._v("硬盘分区之后需要格式化分区，用来设置文件系统")]),v._v(" "),l("p",[v._v("文件系统：")]),v._v(" "),l("ul",[l("li",[v._v("Windows\n"),l("ul",[l("li",[v._v("FAT16")]),v._v(" "),l("li",[v._v("FAT32")]),v._v(" "),l("li",[v._v("NTFS")])])]),v._v(" "),l("li",[v._v("Linux\n"),l("ul",[l("li",[v._v("EXT2")]),v._v(" "),l("li",[v._v("EXT3")]),v._v(" "),l("li",[v._v("EXT4")]),v._v(" "),l("li",[v._v("XFS")])])])]),v._v(" "),l("p",[v._v("新的文件系统更安全，更快，支持更大的单个文件")]),v._v(" "),l("p",[v._v("Linux中每个文件块(block)默认4KB，可以设置为2KB/1KB。是存储数据的最小单位")]),v._v(" "),l("p",[v._v("每个文件、文件夹都有一个128字节的"),l("code",{pre:!0},[v._v("inode")]),v._v("，包括")]),v._v(" "),l("ul",[l("li",[v._v("文件类型")]),v._v(" "),l("li",[v._v("权限")]),v._v(" "),l("li",[v._v("大小")]),v._v(" "),l("li",[v._v("link数")]),v._v(" "),l("li",[v._v("时间戳")]),v._v(" "),l("li",[v._v("保存位置")])]),v._v(" "),l("p",[v._v("inode数量有限，所以如果服务器有过多的空文件，在存储空间耗尽之前，inode会先耗尽")]),v._v(" "),l("p",[v._v("分区之后，windows只需要在磁盘设置中设置盘符就可以使用了。linux需要两步：")]),v._v(" "),l("ul",[l("li",[v._v("分配硬件设备文件名（在"),l("code",{pre:!0},[v._v("/dev")]),v._v("目录中。系统自动分配，不需要手动操作）\n"),l("ul",[l("li",[v._v("IDE硬盘（几乎淘汰）："),l("code",{pre:!0},[v._v("/dev/hda1")])]),v._v(" "),l("li",[v._v("SCSI硬盘/"),l("strong",[v._v("SATA硬盘")]),v._v("/USB："),l("code",{pre:!0},[v._v("/dev/sda1")]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("sda1")]),v._v("中的"),l("code",{pre:!0},[v._v("a")]),v._v("表示第一个盘，"),l("code",{pre:!0},[v._v("1")]),v._v("表示第一个分区")])])])])]),v._v(" "),l("li",[v._v("挂载(mount)\n"),l("ul",[l("li",[v._v("只能挂载在已经存在且空的目录")])])])]),v._v(" "),l("h3",{attrs:{id:"配置ip地址"}},[v._v("配置IP地址")]),v._v(" "),l("p",[v._v("RHEL中可以使用"),l("code",{pre:!0},[v._v("setup")]),v._v("命令配置"),l("code",{pre:!0},[v._v("ip")]),v._v("。其他系统可以修改配置文件")]),v._v(" "),l("p",[v._v("修改网卡（比如"),l("code",{pre:!0},[v._v("eth0")]),v._v("）之后可以设置"),l("code",{pre:!0},[v._v("onboot")]),v._v("为开启状态来保证开机自启")]),v._v(" "),l("p",[v._v("使用"),l("code",{pre:!0},[v._v("service network restart")]),v._v("来重启网络服务")]),v._v(" "),l("p",[v._v("使用"),l("code",{pre:!0},[v._v("ifconfig")]),v._v("查看网卡信息。网卡"),l("code",{pre:!0},[v._v("lo")]),v._v("为环回网卡")]),v._v(" "),l("blockquote",[l("p",[v._v("如果网卡已经设置了onboot但是启动服务器后发现网卡没有启动，可能是网卡UUID冲突导致（比如因为使用了镜像或虚拟机）。\n解决方案：")]),v._v(" "),l("ol",[l("li",[v._v("修改"),l("code",{pre:!0},[v._v("/etc/sysconfig/network-scripts/ifcfg-eth0")]),v._v("中的MAC地址行。这样服务器就会重新生成MAC地址并计算UUID。")]),v._v(" "),l("li",[v._v("删除"),l("code",{pre:!0},[v._v("/etc/udev/rules.d/70-persistent-net.rules")]),v._v("，此文件记录了MAC地址和UUID的绑定。")]),v._v(" "),l("li",[v._v("重启服务器即可获得新的UUID")])])]),v._v(" "),l("h3",{attrs:{id:"安装系统产生的日志文件"}},[v._v("安装系统产生的日志文件")]),v._v(" "),l("p",[v._v("安装后会得到三个日志文件")]),v._v(" "),l("ul",[l("li",[v._v("install.log - 安装了哪些程序包")]),v._v(" "),l("li",[v._v("install.log.syslog - 安装程序包的过程中产生的日志，比如新建了哪些用户")]),v._v(" "),l("li",[v._v("anaconda-ks.cfg - 记录图形化安装时用户的选项，用来实现服务器批量安装")])]),v._v(" "),l("h2",{attrs:{id:"常用系统目录"}},[v._v("常用系统目录")]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("/bin")]),v._v(" "),l("ul",[l("li",[v._v("普通用户就可以执行的命令")]),v._v(" "),l("li",[v._v("是"),l("code",{pre:!0},[v._v("/usr/bin")]),v._v("的软链接")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/sbin")]),v._v(" "),l("ul",[l("li",[v._v("只有超级用户才能执行的命令")]),v._v(" "),l("li",[v._v("是"),l("code",{pre:!0},[v._v("/usr/sbin")]),v._v("的软链接")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/boot")]),v._v(" "),l("ul",[l("li",[v._v("系统启动必备文件，内核文件，引导程序GRUB等，勿动")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/dev")]),v._v(" "),l("ul",[l("li",[v._v("设备文件")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/etc")]),v._v(" "),l("ul",[l("li",[v._v("配置文件")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/home")]),v._v(" "),l("ul",[l("li",[v._v("用户目录")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/root")]),v._v(" "),l("ul",[l("li",[v._v("根用户目录")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/lib")]),v._v(" "),l("ul",[l("li",[v._v("系统函数库")]),v._v(" "),l("li",[v._v("是"),l("code",{pre:!0},[v._v("/usr/lib")]),v._v("的软链接")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/lib64")]),v._v(" "),l("ul",[l("li",[v._v("64位函数库")]),v._v(" "),l("li",[v._v("是"),l("code",{pre:!0},[v._v("/usr/lib64")]),v._v("的软链接")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/lost+found")]),v._v(" "),l("ul",[l("li",[v._v("系统意外崩溃时恢复文件用的。系统自动执行，无法手动操作")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/media")]),v._v(" "),l("ul",[l("li",[v._v("空目录，可以作为光盘挂载点（其实挂载的时候随便找个空目录就行）")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/misc")]),v._v(" "),l("ul",[l("li",[v._v("空目录，可以作为网络设备挂载点")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/mnt")]),v._v(" "),l("ul",[l("li",[v._v("空目录，可以作为优盘/移动硬盘挂载点")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/opt")]),v._v(" "),l("ul",[l("li",[v._v("没有使用包管理程序安装的软件的位置")]),v._v(" "),l("li",[v._v("其实通常第三方软件会装在"),l("code",{pre:!0},[v._v("/usr/local")])])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/proc")]),v._v(" "),l("ul",[l("li",[v._v("内存数据，不要改，可以查看")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/proc/cpuinfo")]),v._v("保存CPU信息")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/proc/devices")]),v._v("保存设备驱动列表")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/proc/filesystems")]),v._v("保存文件系统")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/proc/net")]),v._v("保存网络协议信息")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/sys")]),v._v(" "),l("ul",[l("li",[v._v("内存数据，不要改，可以查看")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/net")]),v._v(" "),l("ul",[l("li",[v._v("内存数据，不要改，可以查看")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/selinux")]),v._v(" "),l("ul",[l("li",[v._v("Linux增强安全组件")]),v._v(" "),l("li",[v._v("CIA牵头开发的，用来限制root权限")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/run")]),v._v(" "),l("ul",[l("li",[v._v("系统运行时产生的数据，如ssid、pid")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var/run")]),v._v("是此目录的软链接")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/srv")]),v._v(" "),l("ul",[l("li",[v._v("服务数据目录。保存一些系统服务启动之后使用的数据")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/tmp")]),v._v(" "),l("ul",[l("li",[v._v("临时目录，所有用户都可以写文件，不能保存重要数据，建议每次开机清空此目录")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/usr")]),v._v(" "),l("ul",[l("li",[v._v("系统软件资源目录，Unix Software Resource")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/usr/share")]),v._v(" "),l("ul",[l("li",[v._v("应用程序的资源文件，比如文档、字体")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/usr/src")]),v._v(" "),l("ul",[l("li",[v._v("源码包的保存位置，通常只用来保存内核源码。也可以放到"),l("code",{pre:!0},[v._v("/usr/local/src")])])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/usr/src/kernels")]),v._v(" "),l("ul",[l("li",[v._v("内核源码保存位置")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var")]),v._v(" "),l("ul",[l("li",[v._v("动态数据，如缓存、日志文件、软件运行所产生的文件之类的随时都需要读写的数据")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var/www/html")]),v._v(" "),l("ul",[l("li",[v._v("RPM安装的Apache的默认网页主目录")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var/lib")]),v._v(" "),l("ul",[l("li",[v._v("程序运行中需要调用或改变的数据保存的位置")]),v._v(" "),l("li",[v._v("比如MySQL数据库文件默认保存在"),l("code",{pre:!0},[v._v("/var/lib/mysql")]),v._v("中，可以直接访问文件进行备份")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var/log")]),v._v(" "),l("ul",[l("li",[v._v("系统日志")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var/spool")]),v._v(" "),l("ul",[l("li",[v._v("放置队列数据的目录，即排队等待其他程序使用的数据，比如邮件队列、打印队列")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var/spool/mail")]),v._v(" "),l("ul",[l("li",[v._v("系统新收到的邮件的队列")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("/var/spool/cron")]),v._v(" "),l("ul",[l("li",[v._v("系统定时任务队列")])])])]),v._v(" "),l("h2",{attrs:{id:"给服务器管理员的基础建议"}},[v._v("给服务器管理员的基础建议")]),v._v(" "),l("ul",[l("li",[v._v("仅适用于本地数据中心，不适用于云服务器的建议\n"),l("ul",[l("li",[v._v("服务器只能重启，不能关机\n"),l("ul",[l("li",[v._v("云服务器在控制台可以实现开关机")])])]),v._v(" "),l("li",[v._v("服务器重启前，中止正在执行的任务，保护硬盘\n"),l("ul",[l("li",[v._v("云服务器的硬盘维护不需要我们考虑")])])]),v._v(" "),l("li",[v._v("重启时建议使用命令"),l("code",{pre:!0},[v._v("shutdown -r now")]),v._v("，此命令会正常保存数据、中止程序。最好在重启之前执行几次"),l("code",{pre:!0},[v._v("sync")]),v._v("命令，把内存中的数据同步到硬盘上\n"),l("ul",[l("li",[v._v("云服务器通常建议使用控制台的重启，而不是使用服务器中的命令重启。具体因云服务提供商而异")])])]),v._v(" "),l("li",[v._v("配置远程防火墙时不要把自己踢出服务器。可以配置一个定时任务，周期性把防火墙中远程连接端口打开\n"),l("ul",[l("li",[v._v("云服务器以AWS为例，尽量使用外部防火墙（比如安全组），关闭服务器防火墙。因为使用外部防火墙在自己被踢出服务器时还可以使用云服务控制台改回来，且由云服务提供商承担负载，减小服务器压力")])])])])]),v._v(" "),l("li",[v._v("通用建议，同时适用于本地数据中心和云服务器\n"),l("ul",[l("li",[v._v("不要在服务器访问高峰执行高负载命令。可以使用定时任务，在空闲时间（比如凌晨4点）执行高负载命令，比如解压、拷贝大文件、数据备份")]),v._v(" "),l("li",[v._v("使用强大的密码。建议使用密钥对代替密码，能够更好地防止社会工程学攻击")]),v._v(" "),l("li",[v._v("合理分配用户权限，遵循最小权限原则")]),v._v(" "),l("li",[v._v("定期备份重要数据和日志")]),v._v(" "),l("li",[v._v("70/90原则：CPU占用不应超过70%，内存占用不应超过90%，否则服务器可能死机")])])])])])}]};v.exports={attributes:{title:"Linux Basic",description:"Linux版本分类、磁盘分区、文件系统、系统目录"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);