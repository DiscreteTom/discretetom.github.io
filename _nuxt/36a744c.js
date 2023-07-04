(window.webpackJsonp=window.webpackJsonp||[]).push([[117,791],{1431:function(v,_,e){const t={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"预备知识"}},[v._v("预备知识")]),v._v(" "),t("h3",{attrs:{id:"大小写"}},[v._v("大小写")]),v._v(" "),t("ul",[t("li",[v._v("Linux shell区分大小写")]),v._v(" "),t("li",[v._v("windows不区分大小写")])]),v._v(" "),t("h3",{attrs:{id:"行律line-discipline"}},[v._v("行律line discipline")]),v._v(" "),t("p",[v._v("处理一行内字符的缓冲、回显与编辑，直到按下回车键")]),v._v(" "),t("p",[v._v("会进行数据加工，比如把换行变成回车换行，把ctrl+c变成终止进程运行的信号")]),v._v(" "),t("p",[v._v("可以使用stty指令进行修改")]),v._v(" "),t("h3",{attrs:{id:"转义序列"}},[v._v("转义序列")]),v._v(" "),t("p",[v._v("使用ESC后面加其他字符构成转义序列（ESC的ASCII码为0x1B/0d27/0o33")]),v._v(" "),t("p",[v._v("转义序列的功能：")]),v._v(" "),t("ul",[t("li",[v._v("控制光标位置")]),v._v(" "),t("li",[v._v("改变字符颜色")]),v._v(" "),t("li",[v._v("改变字符大小")]),v._v(" "),t("li",[v._v("设置终端字符集")]),v._v(" "),t("li",[v._v("控制打印机、刷卡机、磁条机、密码键盘…")]),v._v(" "),t("li",[v._v("…")])]),v._v(" "),t("p",[v._v("举例: "),t("code",{pre:!0},[v._v("Esc[2J")])]),v._v(" "),t("p",[v._v("可以在控制台直接输入转义字符（按下ESC后会发现接下来按下的几个字符没有回显），也可以通过其他输出到控制台的方法输入转义字符（比如系统自带的cat指令）。如果使用cat或其他指令意外导致控制台乱码，可能是转义字符把终端字符集改了。重启终端即可")]),v._v(" "),t("h3",{attrs:{id:"终端流量控制"}},[v._v("终端流量控制")]),v._v(" "),t("p",[v._v("问什么需要流量控制？")]),v._v(" "),t("ul",[t("li",[v._v("终端的显示速度跟不上主机的发送速度")]),v._v(" "),t("li",[v._v("主机发送的内容需要暂停显示")])]),v._v(" "),t("p",[v._v("流量控制方式：")]),v._v(" "),t("ul",[t("li",[v._v("硬件方式 - 添加CTS(Clear To Send)信号线。麻烦")]),v._v(" "),t("li",[v._v("软件控制 - 使用流控制字符Xon & Xoff，方便")])]),v._v(" "),t("p",[v._v("终端希望主机暂停发送时，终端向主机发送Xoff，否则发送Xon")]),v._v(" "),t("p",[v._v("默认情况下行律把Ctrl+S视为暂停显示（即Xoff），把Ctrl+Q视为恢复显示（即Xon）")]),v._v(" "),t("p",[v._v("古早计算机屏幕打印速度慢，可以直接通过以上两个字符控制屏幕打印以阅读大量信息。现在基本上用户不用这个东西，都是终端和主机通信使用。如果在Linux系统误使用Ctrl+S造成控制台没反应了，使用Ctrl+Q恢复（但是在Ctrl+S和Ctrl+Q之间输入的字符仍然有效")]),v._v(" "),t("h3",{attrs:{id:"shell提示符"}},[v._v("Shell提示符")]),v._v(" "),t("p",[v._v("登陆成功后会出现Shell提示符")]),v._v(" "),t("p",[v._v("常见的Shell提示符：")]),v._v(" "),t("ul",[t("li",[v._v("MS DOS - "),t("code",{pre:!0},[v._v("C>")])]),v._v(" "),t("li",[v._v("Bourne Shell(/bin/sh) - "),t("code",{pre:!0},[v._v("$")])]),v._v(" "),t("li",[v._v("C Shell(/bin/csh) - "),t("code",{pre:!0},[v._v("%")])]),v._v(" "),t("li",[v._v("Korn Shell(/bin/ksh) - "),t("code",{pre:!0},[v._v("$")])]),v._v(" "),t("li",[v._v("当前用户为root - "),t("code",{pre:!0},[v._v("#")])])]),v._v(" "),t("p",[v._v("Shell提示符可以根据需要使用命令进行改变")]),v._v(" "),t("h3",{attrs:{id:"关机"}},[v._v("关机")]),v._v(" "),t("p",[v._v("使用命令"),t("code",{pre:!0},[v._v("shutdown")]),v._v("（仅root用户可以关机")]),v._v(" "),t("p",[v._v("如果直接断电可能会导致数据丢失（可能保存在cache而没有保存到文件")]),v._v(" "),t("h3",{attrs:{id:"死机"}},[v._v("死机")]),v._v(" "),t("p",[v._v("Linux系统稳定，普通应用程序不应该会导致死机。死机现象是由于系统内核态程序有问题，通常是外设的驱动程序的BUG")]),v._v(" "),t("h2",{attrs:{id:"账号相关"}},[v._v("账号相关")]),v._v(" "),t("h3",{attrs:{id:"账号管理"}},[v._v("账号管理")]),v._v(" "),t("ul",[t("li",[v._v("系统管理员可以创建用户（比如使用useradd命令")]),v._v(" "),t("li",[v._v("root用户不受权限制约，可以随意修改与删除文件")]),v._v(" "),t("li",[v._v("普通用户受权限制约")])]),v._v(" "),t("h3",{attrs:{id:"登录过程"}},[v._v("登录过程")]),v._v(" "),t("p",[v._v("出现提示符"),t("code",{pre:!0},[v._v("login:")]),v._v("时输入用户名，回车")]),v._v(" "),t("p",[v._v("出现提示符"),t("code",{pre:!0},[v._v("password:")]),v._v("时输入密码（密码不回显")]),v._v(" "),t("h3",{attrs:{id:"密码"}},[v._v("密码")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("passwd")])]),v._v(" "),t("ul",[t("li",[v._v("普通用户使用时需要先验证原本的口令")]),v._v(" "),t("li",[v._v("root用户不需要验证原本的口令（但是登录需要啊")]),v._v(" "),t("li",[v._v("root用户可以修改其他用户的口令")])]),v._v(" "),t("p",[v._v("系统内部不保存密码明文，而是保存一个token:")]),v._v(" "),t("p",[t("img",{attrs:{src:e(874),alt:"1-1"}})]),v._v(" "),t("p",[v._v("使用的哈希算法非对称，这保证了系统被入侵也无法根据token反推密码")]),v._v(" "),t("h3",{attrs:{id:"查询用户"}},[v._v("查询用户")]),v._v(" "),t("ul",[t("li",[v._v("指令"),t("code",{pre:!0},[v._v("who")]),v._v("可以查询当前登录的所有用户")]),v._v(" "),t("li",[v._v("指令"),t("code",{pre:!0},[v._v("who am i")]),v._v("可以查询自己")]),v._v(" "),t("li",[v._v("指令"),t("code",{pre:!0},[v._v("whoami")]),v._v("也可以查询自己（输出格式会有不同")]),v._v(" "),t("li",[v._v("指令"),t("code",{pre:!0},[v._v("tty")]),v._v("输出当前终端的"),t("strong",[v._v("设备文件")]),v._v("名（Linux中所有设备也视为文件（特殊的文件），设备文件存放在目录"),t("code",{pre:!0},[v._v("/dev")]),v._v("下。所以把信息输入这个文件就可以把字符输出到控制台）。tty是teletypewriter的简写。设备文件通常名为"),t("code",{pre:!0},[v._v("tty*")]),v._v("，DOS下设备文件名为CON")])]),v._v(" "),t("h2",{attrs:{id:"查阅联机手册"}},[v._v("查阅联机手册")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("man")])]),v._v(" "),t("h2",{attrs:{id:"时间"}},[v._v("时间")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("date")]),v._v("读取系统日期和时间。可以加上一个字符串命令行参数以定制输出格式")]),v._v(" "),t("p",[v._v("使用命令"),t("code",{pre:!0},[v._v("ntpdate")]),v._v("通过NTP协议校对系统时间，root用户可以设置系统时间，所有用户都可以查询时间")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("cal")]),v._v("可以打印日历")]),v._v(" "),t("h2",{attrs:{id:"系统状态"}},[v._v("系统状态")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("uptime")]),v._v("输出系统自启动到现在的运行时间、用户数、最近1分钟、5分钟、15分钟内CPU负载")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("top")]),v._v("显示任务管理器，其中")]),v._v(" "),t("ul",[t("li",[v._v("VIRT为进程逻辑地址空间的大小(virtual)")]),v._v(" "),t("li",[v._v("RES为驻留内存数(Resident)，即占用物理内存数量")]),v._v(" "),t("li",[v._v("SHR为进程与其他进程共享的内存数(Share)")]),v._v(" "),t("li",[v._v("%CPU显示CPU占用百分比")]),v._v(" "),t("li",[v._v("%MEM显示内存占用百分比")])]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("ps")]),v._v("查询进程状态(process status)，包括：")]),v._v(" "),t("ul",[t("li",[v._v("UID - 用户ID")]),v._v(" "),t("li",[v._v("PID - 进程ID")]),v._v(" "),t("li",[v._v("PPID - 父进程PID")]),v._v(" "),t("li",[v._v("C - CPU占用指数，最近一段时间的CPU占用情况")]),v._v(" "),t("li",[v._v("STIME - 启动时间")]),v._v(" "),t("li",[v._v("SZ - 进程逻辑内存大小")]),v._v(" "),t("li",[v._v("TTY - 终端的名字")]),v._v(" "),t("li",[v._v("COMMAND - 命令名")]),v._v(" "),t("li",[v._v("WCHAN - 进程在内核的何处睡眠(Wait Channel)")]),v._v(" "),t("li",[v._v("TIME - 累计执行时间（占用CPU时间")]),v._v(" "),t("li",[v._v("PRI - 优先级")]),v._v(" "),t("li",[v._v("S - 状态，包括S(Sleep), R(Run), Z(Zombie)")])]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("free")]),v._v("查询系统内存使用情况")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("vmstat")]),v._v("查询系统负载：")]),v._v(" "),t("ul",[t("li",[v._v("Procs\n"),t("ul",[t("li",[v._v("r - 等待运行的进程数")]),v._v(" "),t("li",[v._v("b - 处在非中断睡眠状态的进程数")])])]),v._v(" "),t("li",[v._v("Memory\n"),t("ul",[t("li",[v._v("swpd - 交换分区使用情况")]),v._v(" "),t("li",[v._v("free - 空闲内存")]),v._v(" "),t("li",[v._v("buff/cache - 用来作为缓存的内存数")])])]),v._v(" "),t("li",[v._v("Swap - 磁盘/内存的交换页数量（KB/s")]),v._v(" "),t("li",[v._v("IO - 块设备IO块数，单位块/s")]),v._v(" "),t("li",[v._v("System\n"),t("ul",[t("li",[v._v("in - 每秒的硬件中断数，包括时钟中断")]),v._v(" "),t("li",[v._v("cs - 每秒的环境切换次数(context switch)")])])]),v._v(" "),t("li",[v._v("CPU - 按CPU百分比来显示\n"),t("ul",[t("li",[v._v("us - user")]),v._v(" "),t("li",[v._v("sy - system")]),v._v(" "),t("li",[v._v("id - idle")]),v._v(" "),t("li",[v._v("wa - wait for disk I/O")])])])]),v._v(" "),t("h2",{attrs:{id:"计算器"}},[v._v("计算器")]),v._v(" "),t("p",[v._v("命令"),t("code",{pre:!0},[v._v("bc")])]),v._v(" "),t("p",[v._v("功能强大，支持编程功能（包括循环、变量等），可以进行 "),t("strong",[v._v("任意精度")]),v._v("的运算")]),v._v(" "),t("p",[v._v("精度：")]),v._v(" "),t("ul",[t("li",[v._v("使用命令"),t("code",{pre:!0},[v._v("bc")]),v._v("的时候默认精度为0，即只能进行整数运算")]),v._v(" "),t("li",[v._v("使用命令"),t("code",{pre:!0},[v._v("bc -l")]),v._v("的时候默认精度为小数点后20位")]),v._v(" "),t("li",[v._v("可以设置变量scale的值自行决定小数点位数")])]),v._v(" "),t("h2",{attrs:{id:"文本文件格式与汉字编码"}},[v._v("文本文件格式与汉字编码")]),v._v(" "),t("h3",{attrs:{id:"行尾字符"}},[v._v("行尾字符")]),v._v(" "),t("p",[v._v("windows & linux文本文件行尾不同")]),v._v(" "),t("ul",[t("li",[v._v("回车符 - 光标回到本行行首")]),v._v(" "),t("li",[v._v("换行符 - 光标下移一行")])]),v._v(" "),t("p",[v._v("linux系统文件行尾仅保存"),t("strong",[v._v("换行")]),v._v("字符，windows行尾保存"),t("strong",[v._v("回车换行")]),v._v("两个字符")]),v._v(" "),t("p",[v._v("相关命令：")]),v._v(" "),t("ul",[t("li",[v._v("格式转换\n"),t("ul",[t("li",[v._v("dos2unix")]),v._v(" "),t("li",[v._v("unix2dos")]),v._v(" "),t("li",[v._v("todos")]),v._v(" "),t("li",[v._v("frodos")])])]),v._v(" "),t("li",[t("code",{pre:!0},[v._v("file")]),v._v("查看文件数据类型（仅供参考")])]),v._v(" "),t("h3",{attrs:{id:"中文编码"}},[v._v("中文编码")]),v._v(" "),t("p",[v._v("通常使用"),t("code",{pre:!0},[v._v("UTF-8")]),v._v("与"),t("code",{pre:!0},[v._v("GBK")]),v._v("两种编码来表示中文")]),v._v(" "),t("p",[v._v("使用命令"),t("code",{pre:!0},[v._v("iconv")]),v._v("可以进行字符转换，参数"),t("code",{pre:!0},[v._v("-f/--from-code")]),v._v("为输入编码，"),t("code",{pre:!0},[v._v("-t/--to-code")]),v._v("为输出编码")]),v._v(" "),t("h2",{attrs:{id:"远程图形桌面"}},[v._v("远程图形桌面")]),v._v(" "),t("h3",{attrs:{id:"virtual-network-computing远程桌面"}},[v._v("Virtual Network Computing远程桌面")]),v._v(" "),t("p",[v._v("检查并修改~/.vnc/xstartup\nvncpasswd\nvncserver\nWindows上执行VNC察看器")]),v._v(" "),t("h3",{attrs:{id:"samba服务-使得windows可共享linux磁盘"}},[v._v("Samba服务 - 使得Windows可共享Linux磁盘")]),v._v(" "),t("p",[v._v("启动smb服务\nsamba配置\n服务器配置\n用户配置\n共享文件目录配置\n关闭SELinux和防火墙\nWindows中“搜索计算机”")]),v._v(" "),t("h2",{attrs:{id:"其他"}},[v._v("其他")]),v._v(" "),t("p",[v._v("makefile通过时间戳判断文件是否被修改")]),v._v(" "),t("p",[v._v("linux系统配置参数使用文件保存")])])}]};v.exports={attributes:{layout:"collection",title:"开始使用Linux",collection:"LinuxProgrammingEnvironment"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}},874:function(v,_,e){v.exports=e.p+"img/1-1.a7faa73.png"}}]);