(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1221:function(e,t){const v={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),v("p",[e._v("本文是观看"),v("a",{attrs:{href:"https://www.bilibili.com/video/bv164411J761"}},[e._v("此视频")]),e._v("时整理的笔记。")]),e._v(" "),v("h2",{attrs:{id:"邮箱"}},[e._v("邮箱")]),e._v(" "),v("h3",{attrs:{id:"不建议自建"}},[e._v("不建议自建")]),e._v(" "),v("ol",[v("li",[e._v("占用带宽与计算资源")]),e._v(" "),v("li",[e._v("单点故障，数据丢失")]),e._v(" "),v("li",[e._v("一旦服务器被入侵，入侵者可以查看邮箱数据、发垃圾邮件")])]),e._v(" "),v("p",[e._v("所以小公司不建议自建。很多大企业都提供企业邮箱服务。如果自建可以自行搜索模板搭建。此处仅介绍原理")]),e._v(" "),v("h3",{attrs:{id:"常见服务端软件"}},[e._v("常见服务端软件")]),e._v(" "),v("p",[e._v("客户端软件负责收发邮件，服务器端软件负责交换邮件")]),e._v(" "),v("ul",[v("li",[e._v("Sendmail\n"),v("ul",[v("li",[e._v("最古老，最稳定，但是不够安全")])])]),e._v(" "),v("li",[e._v("Postfix\n"),v("ul",[v("li",[e._v("模块化，投递效率、稳定性、性能、安全性优秀，与sendmail保持足够的兼容性")])])]),e._v(" "),v("li",[e._v("Qmail\n"),v("ul",[v("li",[e._v("模块化，速度快，执行效率高，配置稍微复杂")])])])]),e._v(" "),v("h3",{attrs:{id:"协议"}},[e._v("协议")]),e._v(" "),v("ul",[v("li",[e._v("SMTP\n"),v("ul",[v("li",[e._v("简单邮件传输协议，用来"),v("strong",[e._v("发")]),e._v("邮件（发送者->服务器，服务器->服务器）")]),e._v(" "),v("li",[e._v("TCP 25，加密时使用TCP 465")])])]),e._v(" "),v("li",[e._v("POP3\n"),v("ul",[v("li",[e._v("邮局协议v3，用来"),v("strong",[e._v("收")]),e._v("邮件（服务器->接收者）")]),e._v(" "),v("li",[e._v("TCP 110，加密时使用TCP 995")])])]),e._v(" "),v("li",[e._v("IMAP4\n"),v("ul",[v("li",[e._v("互联网邮件访问协议v4，用来"),v("strong",[e._v("收")]),e._v("邮件")]),e._v(" "),v("li",[e._v("TCP 143，加密时使用TCP 993")])])])]),e._v(" "),v("h3",{attrs:{id:"邮件收发流程"}},[e._v("邮件收发流程")]),e._v(" "),v("ol",[v("li",[e._v("域名A下的用户a想把邮件发给域名B下的用户b")]),e._v(" "),v("li",[e._v("用户a使用客户端把邮件交给域名A下的邮件服务器MA\n"),v("ol",[v("li",[e._v("用户使用的客户端被称为MUA(Mail User Agent)，具有发邮件、编写邮件、查看邮件的功能")]),e._v(" "),v("li",[e._v("客户端给服务器发邮件使用SMTP")])])]),e._v(" "),v("li",[e._v("邮件服务器MA把邮件转发给邮件服务器MB\n"),v("ol",[v("li",[e._v("邮件服务器被称为MTA(Mail Transfer Agent)，负责接收客户端、服务器发的邮件并转发")]),e._v(" "),v("li",[e._v("服务器之间转发使用SMTP")]),e._v(" "),v("li",[e._v("服务器MB收到邮件后，使用MDA(Mail Delivery Agent)把邮件放置到指定的邮筒")])])]),e._v(" "),v("li",[e._v("用户b使用客户端请求服务器MB获得新邮件\n"),v("ol",[v("li",[e._v("此处的请求使用IMAP/POP协议")]),e._v(" "),v("li",[e._v("接收消息的功能被称为MRA(Mail Retrieval Agent)，是MUA的一部分")])])])]),e._v(" "),v("h3",{attrs:{id:"配置dns"}},[e._v("配置DNS")]),e._v(" "),v("pre",{staticClass:"language-bash"},[v("code",{pre:!0,attrs:{class:"language-bash"}},[v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 域的数据配置文件，添加记录")]),e._v("\n     MX "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" mail.extmail.org. "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# [优先级] [邮件服务器域名]")]),e._v("\nmail A    "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".123.123\n")])]),e._v(" "),v("h2",{attrs:{id:"同步"}},[e._v("同步")]),e._v(" "),v("h3",{attrs:{id:"rsync"}},[e._v("rsync")]),e._v(" "),v("h4",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),v("ul",[v("li",[e._v("类unix系统备份工具")]),e._v(" "),v("li",[e._v("支持完全备份和增量备份")]),e._v(" "),v("li",[e._v("支持本地复制（把一个目录复制到不同目录）和远程同步")]),e._v(" "),v("li",[e._v("效率高于scp，文件比较多的时候效率高")]),e._v(" "),v("li",[e._v("能够更新整个目录树、文件系统")]),e._v(" "),v("li",[e._v("选择性地保留符号链接、硬链接、文件属性、权限、设备、事件等信息")]),e._v(" "),v("li",[e._v("使用ssh协议或rsync协议，使用ssh或自定义端口作为传输入口端口")]),e._v(" "),v("li",[e._v("通常用于单向数据同步")]),e._v(" "),v("li",[e._v("是smb的子项目，配置文件有些类似于smb")])]),e._v(" "),v("h4",{attrs:{id:"用户验证方式"}},[e._v("用户验证方式")]),e._v(" "),v("ul",[v("li",[e._v("ssh登录验证，使用系统用户")]),e._v(" "),v("li",[e._v("rsync登录验证，使用非系统用户")])]),e._v(" "),v("h4",{attrs:{id:"命令"}},[e._v("命令")]),e._v(" "),v("h5",{attrs:{id:"使用ssh协议"}},[e._v("使用SSH协议")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("rsync -avz <source> <dest>")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("-a")]),e._v("归档模式，递归复制并保留对象属性")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("-v")]),e._v("冗余输出")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("-z")]),e._v("传输文件时压缩")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("--delete")]),e._v("删除本地比服务器多出来的文件")]),e._v(" "),v("li",[e._v("例："),v("code",{pre:!0},[e._v("rsync -avz user1@123.123.123.123:/home/user1/* /home/user1")])])])])]),e._v(" "),v("h5",{attrs:{id:"使用rsync协议"}},[e._v("使用rsync协议")]),e._v(" "),v("p",[e._v("使用rsync服务")]),e._v(" "),v("p",[e._v("主配置文件："),v("code",{pre:!0},[e._v("/etc/rsyncd.conf")])]),e._v(" "),v("pre",{staticClass:"language-bash"},[v("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("address "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".123.123 "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# rsync服务listen的IP")]),e._v("\nport "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("873")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 默认端口873")]),e._v("\nlog "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /var/log/rsyncd.log\npid "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /var/run/rsyncd.pid\n\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("web"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 共享名，用来显示在url上")]),e._v("\n\tcomment "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" backup "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 介绍")]),e._v("\n\tpath "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /filesrc "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 共享的目录")]),e._v("\n\t"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" only "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" no\n\tdont compress "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" *.gz *.bz2 "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 不压缩哪些文件")]),e._v("\n\tauth "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("users")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" user1 "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 登录用户（非系统用户），需要自行创建")]),e._v("\n\tsecrets "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /etc/rsyncd_users.db "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 登录用户的密码文件，需要自行创建")]),e._v("\n")])]),e._v(" "),v("p",[e._v("用户密码文件：")]),e._v(" "),v("pre",{staticClass:"language-bash"},[v("code",{pre:!0,attrs:{class:"language-bash"}},[v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 密码文件的权限建议为600")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 格式：<username>:<password>")]),e._v("\nuser1:123456\n")])]),e._v(" "),v("p",[e._v("启动服务："),v("code",{pre:!0},[e._v("rsync --daemon")])]),e._v(" "),v("p",[e._v("关闭服务可以使用"),v("code",{pre:!0},[e._v("kill")]),e._v("，但是偶尔会出现进程号文件没有被删除的情况，需要手动删除")]),e._v(" "),v("p",[e._v("传输命令中的地址需要使用"),v("code",{pre:!0},[e._v("rsync://<username>@<address>/<share-name>")]),e._v("，比如"),v("code",{pre:!0},[e._v("rsync -avz rsync://user1@123.123.123.123/web /home/web")])]),e._v(" "),v("p",[e._v("免密：在客户端创建环境变量"),v("code",{pre:!0},[e._v("RSYNC_PASSWORD")])]),e._v(" "),v("h3",{attrs:{id:"实时同步"}},[e._v("实时同步")]),e._v(" "),v("h4",{attrs:{id:"inotify"}},[e._v("inotify")]),e._v(" "),v("ul",[v("li",[e._v("是一个Linux系统内核特性")]),e._v(" "),v("li",[e._v("监控文件系统，并发出事件")]),e._v(" "),v("li",[e._v("包括删除、读、写、卸载等事件")]),e._v(" "),v("li",[e._v("内核需要高于2.6.13")])]),e._v(" "),v("p",[e._v("两个监控命令：")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("inotifywait")]),e._v("用于持续监控，实时输出结果（常用）\n"),v("ul",[v("li",[v("code",{pre:!0},[e._v("inotify -mrq -e <actions> <path> &")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("-m")]),e._v("始终保持事件监听")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("-r")]),e._v("递归监听目录")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("-q")]),e._v("只打印监控事件的信息")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("-e")]),e._v("指定事件\n"),v("ul",[v("li",[e._v("支持"),v("code",{pre:!0},[e._v("modify/create/attrib/move/delete")]),e._v("，可以使用"),v("code",{pre:!0},[e._v(",")]),e._v("分割指定多个")])])])])]),e._v(" "),v("li",[e._v("输出格式："),v("code",{pre:!0},[e._v("<directory> <event> <file>")])])])]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("inotifywatch")]),e._v("用于短期监控，任务完成后再出结果")])]),e._v(" "),v("p",[e._v("配置文件（内核参数）"),v("code",{pre:!0},[e._v("/etc/sysctl.conf")]),e._v("：")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("max_queue_events")]),e._v("队列大小")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("max_user_instances")]),e._v("最多监控实例数")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("max_user_watchs")]),e._v("每个实例最多监控文件数")])]),e._v(" "),v("h4",{attrs:{id:"实时同步脚本"}},[e._v("实时同步脚本")]),e._v(" "),v("pre",{staticClass:"language-bash"},[v("code",{pre:!0,attrs:{class:"language-bash"}},[v("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("triggerCmd")]),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token string"}},[e._v('"inotifywait -mrq -e create,delete /file"')]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("actionCmd")]),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rsync -avz /file/* /some-dst"')]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$triggerCmd")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" directory event "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n\t"),v("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$actionCmd")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])]),e._v(" "),v("h3",{attrs:{id:"双向实时同步"}},[e._v("双向实时同步")]),e._v(" "),v("p",[v("code",{pre:!0},[e._v("unison")])]),e._v(" "),v("ul",[v("li",[e._v("用来实现双向同步")]),e._v(" "),v("li",[e._v("效率较低")])]),e._v(" "),v("h2",{attrs:{id:"elasticstack"}},[e._v("ElasticStack")]),e._v(" "),v("ul",[v("li",[e._v("Beats - 收集日志、数据\n"),v("ul",[v("li",[e._v("类别\n"),v("ul",[v("li",[e._v("Packetbeat收集网络流量数据")]),e._v(" "),v("li",[e._v("Topbeat收集系统、进程、文件系统、CPU、内存等数据")]),e._v(" "),v("li",[e._v("Filebeat收集日志文件数据")]),e._v(" "),v("li",[e._v("Winlogbeat收集Windows事件日志数据")])])])])]),e._v(" "),v("li",[e._v("Logstash - 数据清洗\n"),v("ul",[v("li",[e._v("端口5044")]),e._v(" "),v("li",[e._v("常见插件："),v("code",{pre:!0},[e._v("grok")]),e._v("，使用正则把日志拆分为字段")])])]),e._v(" "),v("li",[e._v("ElasticSearch - 数据检索\n"),v("ul",[v("li",[e._v("端口9200")])])]),e._v(" "),v("li",[e._v("Kibana - 基于web实现ElasticSearch中的数据可视化\n"),v("ul",[v("li",[e._v("端口5601")])])])]),e._v(" "),v("blockquote",[v("p",[e._v("早期没有Beats的时候收集数据也使用的Logstash，所以当时被称为ELK技术栈")])])])}]};e.exports={attributes:{title:"Linux Network Applications (Part 7)",description:"Mail & Sync & ElasticStack概述"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}}}]);