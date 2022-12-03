(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1197:function(e,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),_("p",[e._v("本文是观看"),_("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[e._v("此视频")]),e._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),e._v(" "),_("p",[e._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),e._v(" "),_("p",[e._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),e._v(" "),_("p",[e._v("有些内容与"),_("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[e._v("大学的笔记")]),e._v("重复，建议先看大学的笔记")]),e._v(" "),_("h2",{attrs:{id:"日志管理"}},[e._v("日志管理")]),e._v(" "),_("h3",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),_("blockquote",[_("p",[e._v("CentOS 6.x开始"),_("code",{pre:!0},[e._v("rsyslogd")]),e._v("取代了之前的"),_("code",{pre:!0},[e._v("syslogd")]),e._v("，更安全，支持更多特性")])]),e._v(" "),_("p",[e._v("系统日志文件都在"),_("code",{pre:!0},[e._v("/var/log")]),e._v("中")]),e._v(" "),_("p",[e._v("常见日志（以下文件都在"),_("code",{pre:!0},[e._v("/var/log")]),e._v("下）：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("cron")]),e._v("定时任务的日志")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("dmesg")]),e._v("开机自检的信息")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("btmp")]),e._v("错误登录的日志，二进制文件，需要使用"),_("code",{pre:!0},[e._v("lastb")]),e._v("查看")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("lastlog")]),e._v("所有用户最后一次登陆时间的日志，二进制，需要用"),_("code",{pre:!0},[e._v("lastlog")]),e._v("查看")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("mailog")]),e._v("邮件日志")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("message")]),e._v("系统重要信息的日志。如果系统出现问题，首先检查这个文件")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("secure")]),e._v("记录验证和授权相关的信息，包括"),_("code",{pre:!0},[e._v("ssh")]),e._v("登录，"),_("code",{pre:!0},[e._v("su")]),e._v("切换用户，"),_("code",{pre:!0},[e._v("sudo")]),e._v("授权等")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("wtmp")]),e._v("永久记录所有用户的登录与注销信息、系统启动与关闭事件。使用"),_("code",{pre:!0},[e._v("last")]),e._v("命令查看")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("utmp")]),e._v("记录当前已经登录的用户的信息。使用"),_("code",{pre:!0},[e._v("w")]),e._v("/"),_("code",{pre:!0},[e._v("who")]),e._v("/"),_("code",{pre:!0},[e._v("users")]),e._v("命令查询")])]),e._v(" "),_("p",[e._v("常见应用日志（在"),_("code",{pre:!0},[e._v("/var/log")]),e._v("下，使用RPM包安装的软件的日志才会在此目录下）：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("httpd")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("mail")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("samba")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("sssd")]),e._v("守护进程安全服务目录")])]),e._v(" "),_("h3",{attrs:{id:"rsyslog"}},[e._v("rsyslog")]),e._v(" "),_("p",[e._v("日志文件格式：")]),e._v(" "),_("ul",[_("li",[e._v("事件时间")]),e._v(" "),_("li",[e._v("发生事件的主机名")]),e._v(" "),_("li",[e._v("产生事件的服务或程序名")]),e._v(" "),_("li",[e._v("事件具体信息")])]),e._v(" "),_("p",[e._v("配置文件："),_("code",{pre:!0},[e._v("/etc/rsyslog.conf")]),e._v("，格式：")]),e._v(" "),_("ul",[_("li",[e._v("服务名称，连接符，日志等级\n"),_("ul",[_("li",[e._v("连接符的取值\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v(".")]),e._v("表示只要不低于设置的日志等级的日志都会被保存\n"),_("ul",[_("li",[e._v("比如"),_("code",{pre:!0},[e._v("cron.info")]),e._v("表示"),_("code",{pre:!0},[e._v("cron")]),e._v("产生的不低于"),_("code",{pre:!0},[e._v("info")]),e._v("等级的日志都会被保存")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v(".=")]),e._v("表示只记录指定等级的日志\n"),_("ul",[_("li",[e._v("比如"),_("code",{pre:!0},[e._v("cron.=emerg")]),e._v("表示只记录"),_("code",{pre:!0},[e._v("emerg")]),e._v("等级的日志")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v(".!")]),e._v("表示不等于")])])])])]),e._v(" "),_("li",[e._v("日志记录位置")])]),e._v(" "),_("blockquote",[_("p",[e._v("比如"),_("code",{pre:!0},[e._v("authpriv.* /var/log/secure")]),e._v("表示【认证相关服务，所有日志等级，记录在"),_("code",{pre:!0},[e._v("/var/log/secure")]),e._v("下】")])]),e._v(" "),_("p",[e._v("日志等级：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("debug")]),e._v("调试信息")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("info")]),e._v("普通信息")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("notice")]),e._v("需要注意的普通信息")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("warning")]),e._v("警告，但是不影响系统运行")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("err")]),e._v("错误，系统会受到影响")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("crit")]),e._v("系统会收到重大影响")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("alert")]),e._v("需要立即采取行动")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("emerg")]),e._v("系统已经崩溃无法使用")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("*")]),e._v("表示所有等级")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("none")]),e._v("表示忽略所有日志")])]),e._v(" "),_("p",[e._v("日志目标：")]),e._v(" "),_("ul",[_("li",[e._v("可以使用绝对路径指定保存日志的文件，也可以是设备文件\n"),_("ul",[_("li",[e._v("文件前面如果有"),_("code",{pre:!0},[e._v("-")]),e._v("则表示日志先保存在内存，然后保存在文件")])])]),e._v(" "),_("li",[e._v("可以转发给远程主机。需要加载网络模块")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("*")]),e._v("表示立即给所有用户发消息，通常用于"),_("code",{pre:!0},[e._v("emerg")]),e._v("等级的事件")])]),e._v(" "),_("h3",{attrs:{id:"日志轮替"}},[e._v("日志轮替")]),e._v(" "),_("p",[e._v("日志最好按天切割为不同的文件，太久的日志可以删除。使用"),_("code",{pre:!0},[e._v("/etc/logrotate.conf")]),e._v("配置日志切割参数")]),e._v(" "),_("p",[e._v("RPM包安装的程序通常会自行修改"),_("code",{pre:!0},[e._v("/etc/logrotate")]),e._v("文件。源码包安装的程序需要自行修改")]),e._v(" "),_("p",[e._v("在"),_("code",{pre:!0},[e._v("/etc/logrotate")]),e._v("中使用"),_("code",{pre:!0},[e._v("dateext")]),e._v("可以把切割后日志的扩展名变为日期。否则日志会以编号结尾")]),e._v(" "),_("p",[e._v("配置文件中有"),_("code",{pre:!0},[e._v("postrotate")]),e._v("选项，用来指定rotate之后执行的脚本。可能会用来重启服务和rsyslog，保证服务的日志会写到新的日志文件。")]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("logrotate [options] <config-file>")]),e._v("命令：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("-v")]),e._v("显示轮替信息")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-f")]),e._v("强制轮替配置文件中的所有日志，即使没到时间")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("config-file")]),e._v("通常是"),_("code",{pre:!0},[e._v("/etc/logrotate")])])])])}]};e.exports={attributes:{title:"Linux Basic (part 9)",description:"日志管理"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);