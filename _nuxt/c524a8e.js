(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1176:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),e("p",[v._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[v._v("此视频")]),v._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),v._v(" "),e("p",[v._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),v._v(" "),e("p",[v._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),v._v(" "),e("p",[v._v("有些内容与"),e("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[v._v("大学的笔记")]),v._v("重复，建议先看大学的笔记")]),v._v(" "),e("h2",{attrs:{id:"系统管理"}},[v._v("系统管理")]),v._v(" "),e("h3",{attrs:{id:"进程管理"}},[v._v("进程管理")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("ps")]),v._v("查看系统进程。此命令的部分选项不能加"),e("code",{pre:!0},[v._v("-")]),v._v("，这是老式BSD系统的格式\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("a")]),v._v("显示一个终端的所有进程，除了会话阴险")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("u")]),v._v("显示进程的归属用户与内存使用情况")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("x")]),v._v("显示没有控制终端的进程")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ps aux")]),v._v("查看系统所有进程\n"),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("VSZ")]),v._v("占用虚拟内存的大小，单位KB")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("RSS")]),v._v("占用物理内存的大小，单位KB")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("TTY")]),v._v("进程在哪个终端\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("tty1-6")]),v._v("是本地字符终端")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("tty7")]),v._v("是本地图形终端")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pts/0-255")]),v._v("是虚拟终端")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("?")]),v._v("内核生成的系统进程，不需要终端号")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("STAT")]),v._v("进程状态")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("START")]),v._v("进程启动的时间，"),e("code",{pre:!0},[v._v("hh:mm")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("TIME")]),v._v("耗费的CPU时间，"),e("code",{pre:!0},[v._v("hh:mm")])])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ps -le")]),v._v("类似于"),e("code",{pre:!0},[v._v("ps aux")]),v._v("，只不过输出的进程命令为简写")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("top")]),v._v("动态查看进程\n"),e("ul",[e("li",[v._v("3秒刷新一次，按照CPU占用率排序")]),v._v(" "),e("li",[v._v("输出内容\n"),e("ul",[e("li",[v._v("系统当前时间")]),v._v(" "),e("li",[v._v("系统运行了多久")]),v._v(" "),e("li",[v._v("用户数")]),v._v(" "),e("li",[e("strong",[v._v("1/5/15分钟平均CPU负载")]),v._v("。通常不建议超过CPU核心数")]),v._v(" "),e("li",[v._v("进程统计信息")]),v._v(" "),e("li",[v._v("CPU统计信息\n"),e("ul",[e("li",[v._v("用户模式占用的CPU百分比")]),v._v(" "),e("li",[v._v("系统模式占用的CPU")]),v._v(" "),e("li",[v._v("改变过优先级的用户进程占用的CPU")]),v._v(" "),e("li",[e("strong",[v._v("空闲CPU占比")])]),v._v(" "),e("li",[v._v("等待IO的进程的CPU占比")]),v._v(" "),e("li",[v._v("硬中断请求服务占用的CPU")]),v._v(" "),e("li",[v._v("软中断请求服务占用的CPU")]),v._v(" "),e("li",[v._v("虚拟时间(steal time)百分比")])])]),v._v(" "),e("li",[v._v("内存统计")]),v._v(" "),e("li",[v._v("swap统计")])])]),v._v(" "),e("li",[v._v("交互模式命令\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("?")]),v._v("/"),e("code",{pre:!0},[v._v("h")]),v._v("查看帮助。按任意键退出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("P")]),v._v("以CPU利用率排序（默认）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("M")]),v._v("以内存占用排序")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("N")]),v._v("以PID排序")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("T")]),v._v("以CPU累计运算时间排序")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("k")]),v._v("用来终止进程")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("r")]),v._v("给进程重设优先级")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("q")]),v._v("退出")])])]),v._v(" "),e("li",[v._v("选项")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-d <second>")]),v._v("指定刷新间隔（秒）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-b")]),v._v("批处理模式输出而不是动态刷新。通常和"),e("code",{pre:!0},[v._v("-n")]),v._v("组合使用")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-n <times>")]),v._v("指定执行次数")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-p <pid>")]),v._v("指定PID，仅查看某个PID的进程")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-s")]),v._v("使此命令在安全模式运行，避免交互模式中出现误操作")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u <username>")]),v._v("仅监听某个用户的进程")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pstree")]),v._v("查看进程依赖关系\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-p")]),v._v("显示PID")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("显示进程所属用户")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("kill")]),v._v("结束进程\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("kill -l")]),v._v("查看"),e("code",{pre:!0},[v._v("kill")]),v._v("支持的信号")]),v._v(" "),e("li",[v._v("常见信号\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-1")]),v._v("立即关闭进程，重新读取配置文件后重启")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-9")]),v._v("立即结束程序。此信号不能被阻塞、处理和忽略。用来强制杀死进程")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("kill [signal] <PID>")]),v._v("给进程发送信号")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("killall [options] [signal] <p-name>")]),v._v("根据进程名杀死进程\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-i")]),v._v("交互式")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-I")]),v._v("忽略进程名大小写")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pkill [signal] [options] <p-name>")]),v._v("根据进程名杀死进程。常用于踢出用户\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-t <tty>")]),v._v("根据终端号踢出用户")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pkill -9 -t pts/1")]),v._v("强制杀死从"),e("code",{pre:!0},[v._v("pts/1")]),v._v("登录的进程")])])])]),v._v(" "),e("h3",{attrs:{id:"后台进程管理"}},[v._v("后台进程管理")]),v._v(" "),e("h4",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),e("p",[v._v("当前终端只能管理当前终端的程序。终端关闭时后台程序也会退出")]),v._v(" "),e("h4",{attrs:{id:"命令"}},[v._v("命令")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("<command> &")]),v._v("把命令放入后台运行")]),v._v(" "),e("li",[v._v("在命令执行过程中按"),e("code",{pre:!0},[v._v("Ctrl+Z")]),v._v("，暂停应用并放到后台")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("jobs")]),v._v("查看后台进程\n"),e("ul",[e("li",[v._v("输出的第一列不是PID，而是job ID")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-l")]),v._v("输出PID")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("fg %<job-id>")]),v._v("把后台进程放到前台\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("%")]),v._v("可以省略")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("bg %<job-id>")]),v._v("把后台暂停的工作设置为执行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("nohup [command] &")]),v._v("使命令脱离终端执行")])]),v._v(" "),e("h3",{attrs:{id:"系统资源管理"}},[v._v("系统资源管理")]),v._v(" "),e("p",[v._v("命令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("vmstat [refresh-latency refresh-count]")]),v._v("查看系统资源\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("vmstat 1 3")]),v._v("每秒刷新一次，一共刷新三次")]),v._v(" "),e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("进程信息\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("r")]),v._v("等待运行的进程数。数值越大，系统越繁忙")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("b")]),v._v("不可唤醒的进程数量。数值越大，系统越繁忙")])])]),v._v(" "),e("li",[v._v("内存信息\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("swpd")]),v._v("虚拟内存使用情况（KB）")]),v._v(" "),e("li",[v._v("…")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("swap")]),v._v("使用情况\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("si")]),v._v("磁盘到内存的数据量（KB）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("so")]),v._v("内存到磁盘的数据框（KB）")])])]),v._v(" "),e("li",[v._v("IO情况\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("bi")]),v._v("从块设备读入的数据总量，单位是块")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("bo")])])])]),v._v(" "),e("li",[v._v("系统状态\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("in")]),v._v("每秒被中断的次数")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("cs")]),v._v("每秒钟进行的事件切换次数")])])]),v._v(" "),e("li",[v._v("CPU状态")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("dmesg")]),v._v("显示开机时的内核监测信息\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("dmesg | grep GPU")]),v._v("查看CPU信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("dmesg | grep eth0")]),v._v("查看第一块网卡的信息")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("free [options]")]),v._v("查看内存状态\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-b")]),v._v("单位为字节")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-k")]),v._v("单位为KB（默认）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-m")]),v._v("单位为MB")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-g")]),v._v("单位为GB")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-h")]),v._v("人性化显示")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("uptime")]),v._v("查看系统启动时间和平均负载，即"),e("code",{pre:!0},[v._v("top")]),v._v("命令的第一行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("uname [options]")]),v._v("查看内核相关信息\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("查看所有信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-r")]),v._v("查看内核版本")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-s")]),v._v("查看内核名称")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("file /bin/ls")]),v._v("通过查看系统命令的信息查看系统的位数")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("lsb_release -a")]),v._v("查看当前Linux系统的发行版本")])]),v._v(" "),e("p",[v._v("文件：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("/proc/cpuinfo")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/proc/meminfo")])])]),v._v(" "),e("h2",{attrs:{id:"定时任务"}},[v._v("定时任务")]),v._v(" "),e("h3",{attrs:{id:"一次性任务"}},[v._v("一次性任务")]),v._v(" "),e("p",[v._v("启动"),e("code",{pre:!0},[v._v("at")]),v._v("服务："),e("code",{pre:!0},[v._v("service atd start")]),v._v("。默认状态下"),e("code",{pre:!0},[v._v("at")]),v._v("应该为启动的状态")]),v._v(" "),e("p",[v._v("访问控制文件：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("/etc/at.allow")]),v._v("白名单文件\n"),e("ul",[e("li",[v._v("默认此文件不存在")]),v._v(" "),e("li",[v._v("如果此文件存在，则只有此文件中的用户可以使用"),e("code",{pre:!0},[v._v("at")]),v._v("。一个用户名一行")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/etc/at.deny")]),v._v("黑名单文件\n"),e("ul",[e("li",[v._v("默认此文件不存在")]),v._v(" "),e("li",[v._v("如果白名单文件存在，此文件不生效")]),v._v(" "),e("li",[v._v("如果白名单文件不存在而此文件存在，则除了此文件内的用户，其他用户都可以使用"),e("code",{pre:!0},[v._v("at")])]),v._v(" "),e("li",[v._v("对"),e("code",{pre:!0},[v._v("root")]),v._v("用户不生效")])])]),v._v(" "),e("li",[v._v("没有黑白名单文件时，只有"),e("code",{pre:!0},[v._v("root")]),v._v("用户可以使用"),e("code",{pre:!0},[v._v("at")])])]),v._v(" "),e("p",[v._v("使用方式："),e("code",{pre:!0},[v._v("at [options] <time>")])]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-m")]),v._v("工作完成后无论命令是否有输出都邮件通知执行"),e("code",{pre:!0},[v._v("at")]),v._v("命令的用户")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-c <job-id>")]),v._v("显示"),e("code",{pre:!0},[v._v("at")]),v._v("工作的实际内容")]),v._v(" "),e("li",[v._v("支持的"),e("code",{pre:!0},[v._v("time")]),v._v("格式\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("hh:mm")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("hh:mm yyyy-mm-dd")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("hh:mm[ap|pm] [month] [date]")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("hh:mm[am|pm] + [min|hours|days|weeks]")])])])]),v._v(" "),e("li",[v._v("执行"),e("code",{pre:!0},[v._v("at")]),v._v("后输入要定时执行的命令")])]),v._v(" "),e("p",[v._v("其他命令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("atq")]),v._v("查询任务，但是只能查job ID和用户，查不到命令")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("atrm [job-id]")]),v._v("删除任务")])]),v._v(" "),e("h3",{attrs:{id:"周期性任务"}},[v._v("周期性任务")]),v._v(" "),e("p",[v._v("启动"),e("code",{pre:!0},[v._v("cron")]),v._v("服务："),e("code",{pre:!0},[v._v("service crond start")]),v._v("。默认状态下"),e("code",{pre:!0},[v._v("cron")]),v._v("应该为启动的状态")]),v._v(" "),e("p",[v._v("访问控制文件：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("/etc/cron.allow")]),v._v("白名单\n"),e("ul",[e("li",[v._v("默认不存在")]),v._v(" "),e("li",[v._v("如果此文件存在，只有此文件中的用户可以使用"),e("code",{pre:!0},[v._v("cron")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/etc/cron.deny")]),v._v("黑名单\n"),e("ul",[e("li",[v._v("类似"),e("code",{pre:!0},[v._v("/etc/at.deny")])])])])]),v._v(" "),e("p",[v._v("命令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("crontab [options]")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-e")]),v._v("编辑定时任务")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-l")]),v._v("查询任务")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-r")]),v._v("删除当前用户的所有任务")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u <username>")]),v._v("修改或删除其他用户的任务。仅root用户可用")]),v._v(" "),e("li",[v._v("使用此命令设置的任务会使用当前用户执行")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/usr/bin/run-parts")]),v._v("执行某个目录下的所有文件")])]),v._v(" "),e("p",[v._v("通常会直接修改"),e("code",{pre:!0},[v._v("crontab")]),v._v("配置文件而不是使用命令")]),v._v(" "),e("p",[v._v("配置文件"),e("code",{pre:!0},[v._v("/etc/crontab")]),v._v("：")]),v._v(" "),e("ul",[e("li",[v._v("内容\n"),e("ul",[e("li",[v._v("每小时的第几分钟（0-59）")]),v._v(" "),e("li",[v._v("每天的第几小时（0-23）")]),v._v(" "),e("li",[v._v("每月的第几天（1-31）")]),v._v(" "),e("li",[v._v("每年的地几个月(1-21)")]),v._v(" "),e("li",[v._v("每周的周几（0-7，0和7都是周日）")]),v._v(" "),e("li",[v._v("用户名")]),v._v(" "),e("li",[v._v("命令。最好使用绝对路径，防止"),e("code",{pre:!0},[v._v("PATH")]),v._v("出问题")])])]),v._v(" "),e("li",[v._v("特殊符号\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("*")]),v._v("表示任意时间")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(",")]),v._v("表示不连续的时间，比如"),e("code",{pre:!0},[v._v("1,2,3,4,5")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-")]),v._v("表示连续的范围，比如"),e("code",{pre:!0},[v._v("1-6")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("*/n")]),v._v("表示每隔多久执行一次\n"),e("ul",[e("li",[v._v("比如每小时的第几分钟的值为"),e("code",{pre:!0},[v._v("*/10")]),v._v("则表示10分钟一次")])])])])])]),v._v(" "),e("p",[v._v("【周几】和【每个月的第几天】最好不要同时出现。他们都是在定义【日】，而且是【或】的关系而不是【与】的关系")]),v._v(" "),e("h3",{attrs:{id:"关机定时任务"}},[v._v("关机定时任务")]),v._v(" "),e("p",[v._v("如果定时任务需要执行时系统处于关机状态而错过执行，"),e("code",{pre:!0},[v._v("anacron")]),v._v("会在下次启动后自行寻找时间执行错过的命令")]),v._v(" "),e("p",[v._v("配置文件：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("/etc/anacrontab")]),v._v("保存定时任务信息\n"),e("ul",[e("li",[v._v("随机延迟：防止多个任务同时执行导致服务器过载")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("/var/spool/anacron/")]),v._v("里面的文件保存了定时任务上次执行的时间")])]),v._v(" "),e("blockquote",[e("p",[v._v("旧版本中，"),e("code",{pre:!0},[v._v("/etc/cron.daily")]),v._v("等文件会被"),e("code",{pre:!0},[v._v("cron")]),v._v("和"),e("code",{pre:!0},[v._v("anacron")]),v._v("调用，可能出问题。新版本中"),e("code",{pre:!0},[v._v("/etc/cron.daily")]),v._v("等文件只会被"),e("code",{pre:!0},[v._v("anacron")]),v._v("调用")])])])}]};v.exports={attributes:{title:"Linux Basic (part 8)",description:"进程管理、后台任务管理、定时任务等"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);