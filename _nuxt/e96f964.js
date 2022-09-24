(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1170:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),e("p",[v._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[v._v("此视频")]),v._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),v._v(" "),e("p",[v._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),v._v(" "),e("p",[v._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),v._v(" "),e("p",[v._v("有些内容与"),e("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[v._v("大学的笔记")]),v._v("重复，建议先看大学的笔记")]),v._v(" "),e("h2",{attrs:{id:"常用命令"}},[v._v("常用命令")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("hostname")]),v._v("查看主机名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ls")]),v._v("显示目录内容\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("--color=always|never|auto")]),v._v("显示颜色")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("cd")]),v._v("切换目录\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("cd")]),v._v("/"),e("code",{pre:!0},[v._v("cd ~")]),v._v("返回用户目录")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("cd -")]),v._v("返回上次目录")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("stat")]),v._v("查看文件的inode信息。Linux不记录文件的创建时间")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("cat")]),v._v("拼接并查看文件\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-v")]),v._v("列出特殊字符")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-T")]),v._v("使用"),e("code",{pre:!0},[v._v("^I")]),v._v("显示Tab符号")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-n")]),v._v("显示行号")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-E")]),v._v("使用"),e("code",{pre:!0},[v._v("$")]),v._v("显示回车符")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-A")]),v._v("相当于"),e("code",{pre:!0},[v._v("-vET")]),v._v("，列出所有隐藏符号")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("more")]),v._v("分页输出\n"),e("ul",[e("li",[v._v("使用"),e("code",{pre:!0},[v._v("b")]),v._v("可以向上翻页")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ln")]),v._v("创建硬链接，"),e("code",{pre:!0},[v._v("ln a b")]),v._v("会创建"),e("code",{pre:!0},[v._v("b")]),v._v("指向"),e("code",{pre:!0},[v._v("a")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-s")]),v._v("创建软链接(soft link, symlink)")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("alias <new-command>='<commands>'")]),v._v("，单引号是必须的")])]),v._v(" "),e("h2",{attrs:{id:"软链接和硬链接"}},[v._v("软链接和硬链接")]),v._v(" "),e("p",[v._v("软链接的权限和源文件的权限是分开判断的，即需要二次判断，第一次判断用户是否有权操作软链接文件，第二次判断用户是否有权操作源文件")]),v._v(" "),e("p",[v._v("软链接的文件内容是路径。所以路径越长软链接文件越大。")]),v._v(" "),e("blockquote",[e("p",[v._v("原视频中说软链接的文件内容是inode号，应该是错的")])]),v._v(" "),e("p",[v._v("软链接尽量使用绝对路径")]),v._v(" "),e("h2",{attrs:{id:"文件类型与权限"}},[v._v("文件类型与权限")]),v._v(" "),e("p",[v._v("使用"),e("code",{pre:!0},[v._v("ls -l")]),v._v("命令得到的第一列就是文件类型和权限信息")]),v._v(" "),e("p",[v._v("文件类型：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-")]),v._v("普通文件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("b")]),v._v("表示块设备文件，通常是存储设备")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("c")]),v._v("表示字符设备文件，通常是输入设备，比如鼠标键盘")])]),v._v(" "),e("p",[v._v("RHEL的文件权限最后如果有一个"),e("code",{pre:!0},[v._v(".")]),v._v("则表示文件受SELinux保护。可以使用"),e("code",{pre:!0},[v._v("info ls")]),v._v("查看"),e("code",{pre:!0},[v._v("ls")]),v._v("的文档获得详细信息")]),v._v(" "),e("p",[v._v("修改权限：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("chmod u+x,o+r filename")]),v._v("给指定文件的拥有者(u=user)添加执行权限(x)，给其他所有人(o=others)添加读权限®，使用逗号可以添加多个权限规则")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("chown")]),v._v("修改文件拥有者，"),e("code",{pre:!0},[v._v("chown <owner>[:|.<group>] <filename>")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-R")]),v._v("给子目录中所有文件设置文件拥有者")]),v._v(" "),e("li",[e("strong",[v._v("只有超级用户可以修改文件所有者")]),v._v("，即使普通用户是文件所有者也不行")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("chgrp <group> <filename>")]),v._v("修改文件所属组")])]),v._v(" "),e("p",[e("strong",[v._v("删除文件需要目录的写权限")])]),v._v(" "),e("h2",{attrs:{id:"用户和组"}},[v._v("用户和组")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("useradd <username>")]),v._v("添加用户\n"),e("ul",[e("li",[v._v("会自动创建一个和用户同名的组")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("passwd <username>")]),v._v("设置密码")])]),v._v(" "),e("h2",{attrs:{id:"帮助与搜索"}},[v._v("帮助与搜索")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("man")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-f")]),v._v("查看命令有哪个级别的帮助。比如使用"),e("code",{pre:!0},[v._v("man 5 passwd")]),v._v("可以查看命令"),e("code",{pre:!0},[v._v("passwd")]),v._v("的5级帮助\n"),e("ul",[e("li",[v._v("命令的帮助级别\n"),e("ul",[e("li",[v._v("1 - 普通用户可以执行的系统命令和可执行文件的帮助")]),v._v(" "),e("li",[v._v("2 - 内核可以调用的函数和工具的帮助")]),v._v(" "),e("li",[v._v("3 - C语言函数的帮助")]),v._v(" "),e("li",[v._v("4 - 设备和特殊文件的帮助")]),v._v(" "),e("li",[v._v("5 - 配置文件的帮助")]),v._v(" "),e("li",[v._v("6 - 游戏的帮助")]),v._v(" "),e("li",[v._v("7 - 杂项的帮助")]),v._v(" "),e("li",[v._v("8 - 超级用户可以执行的系统命令的帮助")]),v._v(" "),e("li",[v._v("9 - 内核的帮助")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-k")]),v._v("查看和命令相关的所有级别的帮助")]),v._v(" "),e("li",[v._v("上下箭头/PageUp/PageDown进行内容滚动")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("g")]),v._v("回到第一页")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("G")]),v._v("到行尾")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("q")]),v._v("退出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/string")]),v._v("向下搜素字符串")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("?string")]),v._v("向上搜索字符串")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("n")]),v._v("搜索的下一个匹配")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("N")]),v._v("搜索的上一个匹配")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("info")]),v._v("一套完整的手册\n"),e("ul",[e("li",[v._v("上下箭头/PageUp/PageDown进行内容滚动")]),v._v(" "),e("li",[v._v("按下"),e("code",{pre:!0},[v._v("Tab")]),v._v("在有"),e("code",{pre:!0},[v._v("*")]),v._v("的节点之间切换")]),v._v(" "),e("li",[v._v("按下回车进入带有"),e("code",{pre:!0},[v._v("*")]),v._v("符号的子页面")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("u")]),v._v("返回上一层")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("p/n")]),v._v("进入上/下一小节")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("?")]),v._v("查看帮助")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("q")]),v._v("退出")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("help")]),v._v("用来获取shell内置命令的帮助")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("type")]),v._v("区分命令是内部命令还是外部命令")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("whatis")]),v._v("查看命令的概述与帮助级别")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("whoami")]),v._v("查看当前用户")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("whereis")]),v._v("查看命令、源文件、帮助文档的位置")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("which")]),v._v("查看命令、别名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("alias")]),v._v("查看所有别名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("makewhatis")]),v._v("重新加载"),e("code",{pre:!0},[v._v("whatis")]),v._v("命令的数据库，会消耗不少资源")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("locate")]),v._v("根据文件名查找\n"),e("ul",[e("li",[v._v("使用数据库进行搜索，速度快，消耗资源少")]),v._v(" "),e("li",[v._v("数据库位于"),e("code",{pre:!0},[v._v("/var/lib/mlocate/mlocate.db")])]),v._v(" "),e("li",[v._v("CentOS 7似乎删掉了这个工具")]),v._v(" "),e("li",[v._v("数据库不是实时更新的，需要退出登录，或者使用"),e("code",{pre:!0},[v._v("updatedb")]),v._v("命令更新数据库")]),v._v(" "),e("li",[v._v("配置文件："),e("code",{pre:!0},[v._v("/etc/updatedb.conf")]),v._v("，可以用来配置搜索的时候忽略哪些文件")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("find <path> [options] <content>")]),v._v(" "),e("ul",[e("li",[v._v("支持的options\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-name")]),v._v("按照文件名搜索")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-iname")]),v._v("不区分大小写，按照文件名搜索")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-inum")]),v._v("按照inode号搜索，可以用于搜索硬链接")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-size [+|-]<num>")]),v._v("按照大小搜索，"),e("code",{pre:!0},[v._v("+/-")]),v._v("表示比目标值大/小")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-atime|mtime|ctime [+|-]<days>")]),v._v("按照时间搜索，"),e("code",{pre:!0},[v._v("+/-")]),v._v("表示X天前/内")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-perm [+|-]<mod>")]),v._v("按照权限搜索")]),v._v(" "),e("li",[v._v("更多选项请参考文档")])])]),v._v(" "),e("li",[v._v("content使用通配符和正则表达式，所以搜"),e("code",{pre:!0},[v._v("abc")]),v._v("搜不到"),e("code",{pre:!0},[v._v("abcd")])]),v._v(" "),e("li",[v._v("逻辑判断："),e("code",{pre:!0},[v._v("-a")]),v._v("表示与，"),e("code",{pre:!0},[v._v("-o")]),v._v("表示或，"),e("code",{pre:!0},[v._v("-not")]),v._v("或"),e("code",{pre:!0},[v._v("!")]),v._v("表示非")]),v._v(" "),e("li",[v._v("执行命令：可以使用"),e("code",{pre:!0},[v._v("-exec <command> {} \\;")]),v._v("执行命令。其中"),e("code",{pre:!0},[v._v("{}")]),v._v("会被替换为文件名，"),e("code",{pre:!0},[v._v("\\;")]),v._v("是必须的，作为界符。此处的命令不支持别名")]),v._v(" "),e("li",[v._v("也可以使用"),e("code",{pre:!0},[v._v("-ok")]),v._v("替换"),e("code",{pre:!0},[v._v("-exec")]),v._v("，每个文件都会让用户判断是否执行操作")])])])]),v._v(" "),e("h2",{attrs:{id:"打包-压缩和解压"}},[v._v("打包、压缩和解压")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("zip [options] <package-name> <source>")]),v._v("压缩为"),e("code",{pre:!0},[v._v(".zip")]),v._v("文件\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-r")]),v._v("压缩目录")]),v._v(" "),e("li",[v._v("使用"),e("code",{pre:!0},[v._v("unzip [options] <package>")]),v._v("来解压\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-d <path>")]),v._v("指定解压位置")])])]),v._v(" "),e("li",[v._v("zip不是linux下的常用压缩格式，只是为了和windows通用才使用zip")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("gzip <file>")]),v._v(" "),e("ul",[e("li",[v._v("是Linux常见的压缩格式，"),e("strong",[v._v("无法压缩文件夹（不会打包）")]),v._v("，只能压缩文件")]),v._v(" "),e("li",[e("strong",[v._v("会删除源文件")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-c")]),v._v("把压缩得到的数据输出到标准输出中，可以用来保留源文件，"),e("code",{pre:!0},[v._v("gzip -c xxx > xxx.gz")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-d <file.gz>")]),v._v("解压文件，也可以用"),e("code",{pre:!0},[v._v("gunzip <file.gz>")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-r <folder>")]),v._v("压缩/解压目录下的所有文件")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("bzip2 [options] <source>")]),v._v(" "),e("ul",[e("li",[v._v("是Linux常见的压缩格式，"),e("strong",[v._v("无法压缩目录")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-d <file.bz2>")]),v._v("解压缩，也可以用"),e("code",{pre:!0},[v._v("bunzip2 <file.bz2>")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-k")]),v._v("压缩时保留源文件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-v")]),v._v("压缩时显示详细信息")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("tar [options] [-f <package-name>] <source>")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-c")]),v._v("打包，"),e("strong",[v._v("不会压缩")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-x")]),v._v("解包")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-f")]),v._v("指定压缩包文件名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-v")]),v._v("显示打包/解包过程")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-t")]),v._v("仅查看包里面的文件，不解包")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-z")]),v._v("打包/解包"),e("code",{pre:!0},[v._v(".tar.gz")]),v._v("格式的文件，自动调用gzip")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-j")]),v._v("打包/解包"),e("code",{pre:!0},[v._v(".tar.bz2")]),v._v("格式的文件，自动调用bzip2")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-C")]),v._v("指定解压目录\n"),e("ul",[e("li",[v._v("必须放在压缩包名字后面，"),e("code",{pre:!0},[v._v("tar -zxvf package.tar.gz -C /tmp")])]),v._v(" "),e("li",[v._v("可以只解压部分文件："),e("code",{pre:!0},[v._v("tar -zxvf package.tar.gz -C /tmp package/file")])])])])])])]),v._v(" "),e("h2",{attrs:{id:"关机与重启"}},[v._v("关机与重启")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("sync")]),v._v("刷新文件系统缓冲区，把缓冲区中的数据落盘")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("shutdown [options] <time> [warning]")]),v._v("，"),e("strong",[v._v("推荐使用")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-c")]),v._v("取消已经执行的"),e("code",{pre:!0},[v._v("shutdown")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-h")]),v._v("关机")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-r")]),v._v("重启")]),v._v(" "),e("li",[v._v("时间：\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("now")]),v._v("立即执行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("hh:mm")]),v._v("指定时间。不建议使用，还是看着服务器重启最安全")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("reboot")]),v._v("重启")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("halt")]),v._v("/"),e("code",{pre:!0},[v._v("poweroff")]),v._v("关机。不会完整完毕和保存系统的服务，不建议使用")])]),v._v(" "),e("h2",{attrs:{id:"网络"}},[v._v("网络")]),v._v(" "),e("h3",{attrs:{id:"常用命令-1"}},[v._v("常用命令")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("ifconfig")]),v._v("查询当前网卡信息，可以用来查询IP地址、MAC地址、子网掩码等信息，看不到网关")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ping [options] <ip or domain>")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-b")]),v._v("后面加上广播地址，对整个网段进行探测")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-c")]),v._v("指定次数")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-s")]),v._v("指定字节数")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("netstat")]),v._v(" "),e("ul",[e("li",[v._v("常用命令："),e("code",{pre:!0},[v._v("netstat -tulnp")]),v._v("查看所有正在使用的端口及其PID")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("列出所有网络状态，包括Socket")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-t")]),v._v("TCP协议的连接")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("UDP协议的连接")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-p")]),v._v("显示PID和程序名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-l")]),v._v("仅显示监听状态的连接")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-n")]),v._v("使用IP地址和端口号显示，不适用域名或服务名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-c <second>")]),v._v("表示周期性刷新网络状态")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-r")]),v._v("显示路由表，可以用来看网关，比如"),e("code",{pre:!0},[v._v("netstat -rn")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("Recv-Q")]),v._v("/"),e("code",{pre:!0},[v._v("Send-Q")]),v._v("表示接收/发送队列中的数据包数量。数值越大表示端口越繁忙")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("write <user> <terminal>")]),v._v("向其他用户发送信息，按下"),e("code",{pre:!0},[v._v("Ctrl-D")]),v._v("发送（"),e("code",{pre:!0},[v._v("Ctrl-D")]),v._v("表示文件尾）\n"),e("ul",[e("li",[v._v("比如"),e("code",{pre:!0},[v._v("write user1 pts/1")])]),v._v(" "),e("li",[v._v("可以使用"),e("code",{pre:!0},[v._v("w")]),v._v("命令查看目前已经登录的用户，在"),e("code",{pre:!0},[v._v("WHAT")]),v._v("一栏中显示"),e("code",{pre:!0},[v._v("w")]),v._v("的是自己")]),v._v(" "),e("li",[v._v("Linux自带6个本地终端"),e("code",{pre:!0},[v._v("tty1")]),v._v("-"),e("code",{pre:!0},[v._v("tty6")]),v._v("，可以使用"),e("code",{pre:!0},[v._v("Alt+F1")]),v._v("-"),e("code",{pre:!0},[v._v("Alt+F6")]),v._v("来切换")]),v._v(" "),e("li",[v._v("Linux自带本地图形终端"),e("code",{pre:!0},[v._v("tty7")]),v._v("，使用"),e("code",{pre:!0},[v._v("Ctrl+Alt+F7")]),v._v("来切换（需要按住3秒以上，需要安装并启动图形界面）")]),v._v(" "),e("li",[v._v("远程终端"),e("code",{pre:!0},[v._v("pts0")]),v._v("-"),e("code",{pre:!0},[v._v("pts255")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("wall <msg>")]),v._v("用来给所有登录用户（包括自己）发送消息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mail <user>")]),v._v("给其他用户发邮件\n"),e("ul",[e("li",[v._v("第一行为邮件标题："),e("code",{pre:!0},[v._v("Subject: xxx")])]),v._v(" "),e("li",[v._v("第二行开始为正文："),e("code",{pre:!0},[v._v("xxxxx")])]),v._v(" "),e("li",[v._v("最后一行使用一个"),e("code",{pre:!0},[v._v(".")]),v._v("结束输入，或者使用"),e("code",{pre:!0},[v._v("Ctrl-D")])]),v._v(" "),e("li",[v._v("使用重定向发送文件："),e("code",{pre:!0},[v._v("mail -s <title> <user> < <file>")])]),v._v(" "),e("li",[v._v("直接使用"),e("code",{pre:!0},[v._v("mail")]),v._v("接收邮件\n"),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("是否阅读，如果是"),e("code",{pre:!0},[v._v("N")]),v._v("则表示新邮件")]),v._v(" "),e("li",[v._v("编号")]),v._v(" "),e("li",[v._v("发件人")]),v._v(" "),e("li",[v._v("时间")]),v._v(" "),e("li",[v._v("标题")])])]),v._v(" "),e("li",[v._v("会出现"),e("code",{pre:!0},[v._v("&")]),v._v("等待用户输入命令\n"),e("ul",[e("li",[v._v("用户输入编号即可查看邮件")]),v._v(" "),e("li",[v._v("输入"),e("code",{pre:!0},[v._v("headers")]),v._v("或"),e("code",{pre:!0},[v._v("h")]),v._v("可以查看邮件标题")]),v._v(" "),e("li",[v._v("输入"),e("code",{pre:!0},[v._v("delete <num>")]),v._v("或"),e("code",{pre:!0},[v._v("d <num>")]),v._v("会删除指定编号的邮件")]),v._v(" "),e("li",[v._v("输入"),e("code",{pre:!0},[v._v("save <num> <path>")]),v._v("或"),e("code",{pre:!0},[v._v("s <num> <path>")]),v._v("可以保存邮件为文件")]),v._v(" "),e("li",[v._v("输入"),e("code",{pre:!0},[v._v("quit")]),v._v("或"),e("code",{pre:!0},[v._v("q")]),v._v("退出，并执行删除、保存等操作")]),v._v(" "),e("li",[v._v("输入"),e("code",{pre:!0},[v._v("exit")]),v._v("退出，不保存任何操作")]),v._v(" "),e("li",[v._v("输入"),e("code",{pre:!0},[v._v("?")]),v._v("获得帮助")])])])])])])])]),v._v(" "),e("h3",{attrs:{id:"配置ip地址"}},[v._v("配置IP地址")]),v._v(" "),e("ul",[e("li",[v._v("RHEL可以使用"),e("code",{pre:!0},[v._v("setup")]),v._v("工具")]),v._v(" "),e("li",[v._v("可以手动修改"),e("code",{pre:!0},[v._v("/etc/sysconfig/network-scripts/ifcfg-eth0")])])]),v._v(" "),e("p",[v._v("需要重启网络服务："),e("code",{pre:!0},[v._v("service network restart")]),v._v("。如果重启失败，最常见的问题是局域网IP冲突，也可能是网卡UUID冲突（常见于虚拟机快照环境）")]),v._v(" "),e("h2",{attrs:{id:"系统痕迹"}},[v._v("系统痕迹")]),v._v(" "),e("p",[v._v("系统有一些重要的二进制痕迹日志文件，比如"),e("code",{pre:!0},[v._v("/var/log/wtmp")]),v._v("、"),e("code",{pre:!0},[v._v("/var/run/utmp")]),v._v("、"),e("code",{pre:!0},[v._v("/var/log/btmp")]),v._v("、"),e("code",{pre:!0},[v._v("/var/log/lastlog")]),v._v("等系统日志。只能使用对应的命令查看，无法篡改")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("w")]),v._v("查看系统中正在登陆的用户信息，对应的日志是"),e("code",{pre:!0},[v._v("/var/run/utmp")]),v._v(" "),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("第一行\n"),e("ul",[e("li",[v._v("系统时间")]),v._v(" "),e("li",[v._v("系统开机了多久："),e("code",{pre:!0},[v._v("up hh:mm")])]),v._v(" "),e("li",[v._v("当前登录了几个用户")]),v._v(" "),e("li",[v._v("系统1/5/15分钟前的平均负载")])])]),v._v(" "),e("li",[v._v("剩余行\n"),e("ul",[e("li",[v._v("用户名 - "),e("code",{pre:!0},[v._v("USER")])]),v._v(" "),e("li",[v._v("终端设备 - "),e("code",{pre:!0},[v._v("TTY")])]),v._v(" "),e("li",[v._v("来源IP - "),e("code",{pre:!0},[v._v("FROM")])]),v._v(" "),e("li",[v._v("登陆时间 - "),e("code",{pre:!0},[v._v("LOGIN@")])]),v._v(" "),e("li",[v._v("闲置时间 - "),e("code",{pre:!0},[v._v("IDLE")])]),v._v(" "),e("li",[v._v("所有进程占用的CPU时间 - "),e("code",{pre:!0},[v._v("JCPU")])]),v._v(" "),e("li",[v._v("当前进程占用的CPU时间 - "),e("code",{pre:!0},[v._v("PCPU")])]),v._v(" "),e("li",[v._v("用户正在进行的操作 - "),e("code",{pre:!0},[v._v("WHAT")])])])])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("who")]),v._v("类似于"),e("code",{pre:!0},[v._v("w")]),v._v("，也是查看"),e("code",{pre:!0},[v._v("/var/run/utmp")]),v._v("，输出更简单一些\n"),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("用户名")]),v._v(" "),e("li",[v._v("登录终端")]),v._v(" "),e("li",[v._v("登陆时间（来源IP）")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("last")]),v._v("查看系统所有登陆过的用户信息和系统重启信息。此命令查看"),e("code",{pre:!0},[v._v("/var/log/wtmp")]),v._v(" "),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("用户名")]),v._v(" "),e("li",[v._v("终端号")]),v._v(" "),e("li",[v._v("来源IP")]),v._v(" "),e("li",[v._v("登陆时间 - 退出时间（使用时长）")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("lastlog")]),v._v("查看系统中所有用户最后一次登陆时间。此命令查看"),e("code",{pre:!0},[v._v("/var/log/lastlog")]),v._v(" "),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("用户名")]),v._v(" "),e("li",[v._v("终端")]),v._v(" "),e("li",[v._v("来源IP")]),v._v(" "),e("li",[v._v("登陆时间")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("lastb")]),v._v("查看错误登录信息。此命令查看"),e("code",{pre:!0},[v._v("/var/log/btmp")]),v._v(" "),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("错误登录用户")]),v._v(" "),e("li",[v._v("终端")]),v._v(" "),e("li",[v._v("来源IP")]),v._v(" "),e("li",[v._v("尝试登陆时间")])])])])])]),v._v(" "),e("h2",{attrs:{id:"shell快捷键"}},[v._v("Shell快捷键")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("Ctrl-A")]),v._v("光标移动到命令开头")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("Ctrl-E")]),v._v("光标移动到命令结尾")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("Ctrl-C")]),v._v("终止当前命令")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("Ctrl-L")]),v._v("清屏，类似于"),e("code",{pre:!0},[v._v("clear")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("Ctrl-U")]),v._v("删除光标之前的命令")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("Ctrl-Y")]),v._v("粘贴"),e("code",{pre:!0},[v._v("Ctrl-U")]),v._v("剪切掉的内容")])]),v._v(" "),e("h2",{attrs:{id:"驱动"}},[v._v("驱动")]),v._v(" "),e("p",[v._v("加载驱动的四个等级：")]),v._v(" "),e("ul",[e("li",[v._v("直接放入系统内核。系统启动时必须的驱动，较少")]),v._v(" "),e("li",[v._v("以模块的形式放入硬盘。保存在"),e("code",{pre:!0},[v._v("/lib/modules/<kernel-version>/kernel")]),v._v("中。较多。后缀为"),e("code",{pre:!0},[v._v(".ko")])]),v._v(" "),e("li",[v._v("驱动可以被Linux识别，但是系统认为其不常用，所以默认不加载。如果要使用，需要重新编译内核。NTFS驱动就属于这种情况，不过第三方的"),e("code",{pre:!0},[v._v("NTFS-3G")]),v._v("插件可以以模块的形式安装NTFS驱动")]),v._v(" "),e("li",[v._v("硬件不能被Linux内核识别，需要手动安装驱动")])]),v._v(" "),e("h2",{attrs:{id:"挂载命令"}},[v._v("挂载命令")]),v._v(" "),e("h3",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("lsblk")]),v._v("查看磁盘")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("fdisk -l")]),v._v("查看磁盘分区信息，包括swap分区")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mount")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("mount [-l]")]),v._v("查询已经挂载的设备。"),e("code",{pre:!0},[v._v("-l")]),v._v("表示卷标")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mount -a")]),v._v("根据"),e("code",{pre:!0},[v._v("/etc/fstab")]),v._v("的内容自动挂载。如果找不到设备会启动错误。此命令可以用来测试配置文件是否正确，但是此命令有一定的容错能力，不要完全依赖此命令进行检错")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mount [-t <file-system>] [-L <label>] [-o <options>] <device-name> <mount-point>")]),v._v("把设备文件"),e("code",{pre:!0},[v._v("device-name")]),v._v("挂载到"),e("code",{pre:!0},[v._v("mount-point")]),v._v("目录上\n"),e("ul",[e("li",[v._v("文件系统："),e("code",{pre:!0},[v._v("ext3")]),v._v("、"),e("code",{pre:!0},[v._v("ext4")]),v._v("等。系统会自动识别，所以这个选项可以不写")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-L")]),v._v("：按照卷标挂载，而不是按照设备文件名挂载")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-o")]),v._v("用来指定读写权限、同步异步等")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("umount <mount-point|device_name>")]),v._v("卸载设备\n"),e("ul",[e("li",[v._v("如果设备正在被其他程序使用，则无法卸载。可以"),e("code",{pre:!0},[v._v("kill")]),v._v("掉目标进程")])])])]),v._v(" "),e("blockquote",[e("p",[v._v("为什么"),e("code",{pre:!0},[v._v("mount")]),v._v("一定要挂载在空目录？其实目录非空也可以，目录里面的内容也不会被覆盖，卸载设备之后还是可以访问里面的内容，但是挂载着其他设备的时候，这些文件没有入口，显然是不合理的。所以不建议挂载设备到非空目录")])]),v._v(" "),e("h3",{attrs:{id:"挂载ntfs分区"}},[v._v("挂载NTFS分区")]),v._v(" "),e("p",[v._v("Linux默认不支持NTFS。苹果系(Unix)可以只读访问NTFS")]),v._v(" "),e("p",[v._v("Linux需要安装驱动。官方驱动需要重新编译内核，且只能只读NTFS中的文件。可以使用第三方的NTFS-3G避免编译内核来访问NTFS。但是还是不建议使用驱动的方式访问文件。基于网络的访问多香啊")]),v._v(" "),e("h2",{attrs:{id:"中文编码"}},[v._v("中文编码")]),v._v(" "),e("p",[v._v("在Linux中使用中文有两个条件：")]),v._v(" "),e("ul",[e("li",[v._v("安装了中文编码与中文字体")]),v._v(" "),e("li",[v._v("操作终端支持中文。纯字符终端不支持中文")])]),v._v(" "),e("p",[v._v("可以修改环境变量"),e("code",{pre:!0},[v._v("LANG")]),v._v("来设置终端字符集：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("zh_CN.UTF-8")]),v._v("表示中文")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("en_US.UTF-8")]),v._v("表示英文")])]),v._v(" "),e("p",[v._v("使用"),e("code",{pre:!0},[v._v("mount")]),v._v("挂载设备的时候需要手动指定编码才能支持中文显示："),e("code",{pre:!0},[v._v("-o iocharset=utf8")])]),v._v(" "),e("h2",{attrs:{id:"vim"}},[v._v("vim")]),v._v(" "),e("blockquote",[e("p",[v._v("此内容不适合入门vim")])]),v._v(" "),e("h3",{attrs:{id:"常见设置命令"}},[v._v("常见设置命令")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v(":set nu")]),v._v("/"),e("code",{pre:!0},[v._v(":set nonu")]),v._v("显示/取消行号")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":syntax on")]),v._v("/"),e("code",{pre:!0},[v._v(":syntax off")]),v._v("启动/关闭语法高亮")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":set hlsearch")]),v._v("/"),e("code",{pre:!0},[v._v(":set nohlsearch")]),v._v("是否把查找的字符串高亮")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":set ruler")]),v._v("/"),e("code",{pre:!0},[v._v(":set noruler")]),v._v("是否显示右下角状态栏")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":set showmode")]),v._v("/"),e("code",{pre:!0},[v._v(":set noshowmode")]),v._v("是否显示左下角状态栏")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":set list")]),v._v("/"),e("code",{pre:!0},[v._v(":set nolist")]),v._v("是否显示隐藏字符\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("Tab")]),v._v("用"),e("code",{pre:!0},[v._v("^I")]),v._v("表示")]),v._v(" "),e("li",[v._v("换行用"),e("code",{pre:!0},[v._v("$")]),v._v("表示")]),v._v(" "),e("li",[v._v("回车用"),e("code",{pre:!0},[v._v("^M")]),v._v("表示。所以windows下的回车换行会表示为"),e("code",{pre:!0},[v._v("^M$")])]),v._v(" "),e("li",[v._v("可以使用命令"),e("code",{pre:!0},[v._v("dos2unix")]),v._v("或"),e("code",{pre:!0},[v._v("unix2dos")]),v._v("来转换文件格式")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":set all")]),v._v("查看所有参数")])]),v._v(" "),e("p",[v._v("上面的修改只能临时生效。可以修改"),e("code",{pre:!0},[v._v("~/.vimrc")]),v._v("配置文件来永久生效")]),v._v(" "),e("h3",{attrs:{id:"替换命令"}},[v._v("替换命令")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v(":m,ns/old/new/g")]),v._v("表示替换第"),e("code",{pre:!0},[v._v("m")]),v._v("行到第"),e("code",{pre:!0},[v._v("n")]),v._v("行所有"),e("code",{pre:!0},[v._v("old")]),v._v("为"),e("code",{pre:!0},[v._v("new")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":%s/old/new/g")]),v._v("替换全文的"),e("code",{pre:!0},[v._v("old")]),v._v("为"),e("code",{pre:!0},[v._v("new")])])]),v._v(" "),e("p",[v._v("其中"),e("code",{pre:!0},[v._v("old")]),v._v("的格式为"),e("strong",[v._v("正则表达式")]),v._v("，如"),e("code",{pre:!0},[v._v("^")]),v._v("为行首，"),e("code",{pre:!0},[v._v("$")]),v._v("为行尾")]),v._v(" "),e("h3",{attrs:{id:"其他"}},[v._v("其他")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v(":r <filename>")]),v._v("可以在光标处导入文件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":!<command>")]),v._v("执行系统命令，可以用来查看系统信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":r !<command>")]),v._v("导入命令结果")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":map <key> <command>")]),v._v("绑定快捷键\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v(":map ^P I#<ESC>")]),v._v(" - 按下Ctrl+P的时候在行首加入注释。注意：其中的"),e("code",{pre:!0},[v._v("^P")]),v._v("不是手工输入，而是使用"),e("code",{pre:!0},[v._v("Ctrl+V Ctrl+P")]),v._v("来输入的。其他字符手工输入")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":map ^B ^x")]),v._v(" - 按下Ctrl+B的时候，删除行首第一个字母")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(":ab <source> <target>")]),v._v("字符自动替换\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v(":ab mymail discrete_tom@outlook.com")]),v._v(" - 设置之后，一旦输入"),e("code",{pre:!0},[v._v("mymail")]),v._v("加空格或回车，会自动替换为"),e("code",{pre:!0},[v._v("discrete_tom@outlook.com")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vim -o file1 file2")]),v._v("上下分屏打开多个文件，使用"),e("code",{pre:!0},[v._v("Ctrl+W")]),v._v("加上下箭头切换文件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vim -O file1 file2")]),v._v("左右分屏打开多个文件，使用"),e("code",{pre:!0},[v._v("Ctrl+W")]),v._v("加左右箭头切换文件")])])])}]};v.exports={attributes:{title:"Linux Basic (part 2)",description:"文件、用户、压缩、重启、网络、系统痕迹相关命令"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);