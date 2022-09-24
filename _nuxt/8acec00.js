(window.webpackJsonp=window.webpackJsonp||[]).push([[96,286],{1184:function(v,_,e){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),l("p",[v._v("本文是观看"),l("a",{attrs:{href:"https://www.bilibili.com/video/BV1Db411G7pf"}},[v._v("此视频")]),v._v("时的笔记")]),v._v(" "),l("h2",{attrs:{id:"安全防御概述"}},[v._v("安全防御概述")]),v._v(" "),l("p",[v._v("常见攻击方式：")]),v._v(" "),l("ul",[l("li",[v._v("拒绝服务(DoS: Deny of Service)\n"),l("ul",[l("li",[v._v("恶意流量耗尽服务器资源使正常流量无法被服务")]),v._v(" "),l("li",[v._v("可以使用云厂商的流量清洗服务解决")])])]),v._v(" "),l("li",[v._v("口令破解\n"),l("ul",[l("li",[v._v("比如暴力破解")])])]),v._v(" "),l("li",[v._v("已知漏洞\n"),l("ul",[l("li",[v._v("没有完美的代码")])])]),v._v(" "),l("li",[v._v("欺骗用户\n"),l("ul",[l("li",[v._v("社会工程学攻击、钓鱼网站、钓鱼邮件等")])])])]),v._v(" "),l("p",[v._v("常见防御手段：")]),v._v(" "),l("ul",[l("li",[v._v("基础防火墙\n"),l("ul",[l("li",[v._v("基于规则过滤网络流量")])])]),v._v(" "),l("li",[v._v("IDS（入侵检测系统）\n"),l("ul",[l("li",[v._v("无法防御入侵，但是入侵之后可以检测到")])])]),v._v(" "),l("li",[v._v("IPS（入侵防御系统）\n"),l("ul",[l("li",[v._v("分析数据包内容并过滤流量")])])]),v._v(" "),l("li",[v._v("主动安全（可以理解为IPS的子类，专精于某个领域）\n"),l("ul",[l("li",[v._v("WAF/DAF（WEB防火墙/数据库防火墙）")])])])]),v._v(" "),l("p",[v._v("Linux防御机制：")]),v._v(" "),l("ul",[l("li",[v._v("iptables包过滤")]),v._v(" "),l("li",[v._v("acl文件系统管理")]),v._v(" "),l("li",[v._v("selinux")]),v._v(" "),l("li",[v._v("tcp wrappers基于库的访问控制")])]),v._v(" "),l("h2",{attrs:{id:"防火墙分类"}},[v._v("防火墙分类")]),v._v(" "),l("p",[v._v("分类：")]),v._v(" "),l("ul",[l("li",[v._v("构造\n"),l("ul",[l("li",[v._v("硬件\n"),l("ul",[l("li",[v._v("深信服")]),v._v(" "),l("li",[v._v("网御")])])]),v._v(" "),l("li",[v._v("软件\n"),l("ul",[l("li",[v._v("Windows防火墙")]),v._v(" "),l("li",[v._v("Linux iptables")])])])])]),v._v(" "),l("li",[v._v("工作机制\n"),l("ul",[l("li",[v._v("包过滤（4层）")]),v._v(" "),l("li",[v._v("应用层防火墙（7层）")])])]),v._v(" "),l("li",[v._v("模块\n"),l("ul",[l("li",[v._v("用户态\n"),l("ul",[l("li",[v._v("iptables")])])]),v._v(" "),l("li",[v._v("内核态\n"),l("ul",[l("li",[v._v("netfilter")])])])])])]),v._v(" "),l("h2",{attrs:{id:"iptables"}},[v._v("iptables")]),v._v(" "),l("blockquote",[l("p",[v._v("iptables是CentOS 6自带的防火墙，工作在用户态，用来操作内核态的netfilter。CentOS 7里面管理netfilter的用户态程序为firewalld")])]),v._v(" "),l("h3",{attrs:{id:"iptables概念与规则"}},[v._v("iptables概念与规则")]),v._v(" "),l("p",[v._v("5链(chain)：")]),v._v(" "),l("ul",[l("li",[v._v("INPUT\n"),l("ul",[l("li",[v._v("入站数据包")])])]),v._v(" "),l("li",[v._v("OUTPUT\n"),l("ul",[l("li",[v._v("出站数据包")])])]),v._v(" "),l("li",[v._v("FORWARD\n"),l("ul",[l("li",[v._v("转发数据包")])])]),v._v(" "),l("li",[v._v("PREROUTING\n"),l("ul",[l("li",[v._v("路由前数据包")])])]),v._v(" "),l("li",[v._v("POSTROUTING\n"),l("ul",[l("li",[v._v("路由后数据包")])])])]),v._v(" "),l("p",[v._v("4表(table)：")]),v._v(" "),l("ul",[l("li",[v._v("raw\n"),l("ul",[l("li",[v._v("确定是否对数据包进行状态跟踪（默认会跟踪）")]),v._v(" "),l("li",[v._v("PREROUTING, OUTPUT")])])]),v._v(" "),l("li",[v._v("mangle\n"),l("ul",[l("li",[v._v("为数据包设置标记")]),v._v(" "),l("li",[v._v("PREROUTING, POSTROUTING, INPUT, OUTPUT, FORWARD")])])]),v._v(" "),l("li",[l("strong",[v._v("nat")]),v._v(" "),l("ul",[l("li",[v._v("修改数据包的源、目标IP地址或端口")]),v._v(" "),l("li",[l("strong",[v._v("PREROUTING")]),v._v(", "),l("strong",[v._v("POSTROUTING")]),v._v(", OUTPUT")])])]),v._v(" "),l("li",[l("strong",[v._v("filter")]),v._v(" "),l("ul",[l("li",[v._v("数据包过滤")]),v._v(" "),l("li",[l("strong",[v._v("INPUT")]),v._v(", "),l("strong",[v._v("FORWARD")]),v._v(", "),l("strong",[v._v("OUTPUT")])])])])]),v._v(" "),l("p",[v._v("数据包经过表的顺序：raw->mangle->nat->filter。不同的表有不同的链，链上面会有规则")]),v._v(" "),l("p",[v._v("数据包经过链的顺序：")]),v._v(" "),l("ul",[l("li",[v._v("入站请求（目标地址为本机）\n"),l("ul",[l("li",[v._v("PREROUTING->INPUT")])])]),v._v(" "),l("li",[v._v("出站请求（源地址为本机）\n"),l("ul",[l("li",[v._v("OUTPUT->POSTROUTING")])])]),v._v(" "),l("li",[v._v("转发（目标和源都不是本机）\n"),l("ul",[l("li",[v._v("PREROUTING->FORWARD->POSTROUTING")])])])]),v._v(" "),l("p",[v._v("结合上述表和链的顺序，可以得到如下数据流向图：")]),v._v(" "),l("p",[l("img",{attrs:{src:e(430),alt:"4-1"}})]),v._v(" "),l("p",[v._v("链上面的规则匹配顺序：自上而下依次匹配，如果有"),l("code",{pre:!0},[v._v("LOG")]),v._v("以外的操作则直接处理而不继续匹配；如果没有匹配的规则，则使用默认规则")]),v._v(" "),l("p",[v._v("对iptables的修改都是临时的。使用"),l("code",{pre:!0},[v._v("service iptables save")]),v._v("可以保存修改到"),l("code",{pre:!0},[v._v("/etc/sysconfig/iptables")])]),v._v(" "),l("h3",{attrs:{id:"iptables语法"}},[v._v("iptables语法")]),v._v(" "),l("p",[l("code",{pre:!0},[v._v("iptables [-t table] [options] [chain] [condition] [-j action]")])]),v._v(" "),l("ul",[l("li",[v._v("默认表为filter")]),v._v(" "),l("li",[v._v("默认链为表的所有链")]),v._v(" "),l("li",[v._v("chain/target使用大写字母")]),v._v(" "),l("li",[v._v("options\n"),l("ul",[l("li",[l("code",{pre:!0},[v._v("-A")]),v._v("在链的末尾添加规则")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-I")]),v._v("在指定序号处插入规则（默认位置是链的开头）")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-L")]),v._v("列出所有规则")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-n")]),v._v("以数字形式显示地址、端口等信息")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-v")]),v._v("详细输出")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("--line-numbers")]),v._v("显示规则序号")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-D")]),v._v("删除指定序号或内容的一条规则")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-F")]),v._v("清空规则")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-P")]),v._v("设置链的默认规则")])])]),v._v(" "),l("li",[v._v("action\n"),l("ul",[l("li",[v._v("ACCEPT\n"),l("ul",[l("li",[v._v("允许通过")])])]),v._v(" "),l("li",[v._v("DROP\n"),l("ul",[l("li",[v._v("直接丢弃，不回复")])])]),v._v(" "),l("li",[v._v("REJECT\n"),l("ul",[l("li",[v._v("拒绝，必要时回复")])])]),v._v(" "),l("li",[v._v("LOG\n"),l("ul",[l("li",[v._v("记录，然后继续匹配规则")])])]),v._v(" "),l("li",[v._v("SNAT\n"),l("ul",[l("li",[v._v("修改源地址")])])]),v._v(" "),l("li",[v._v("DNAT\n"),l("ul",[l("li",[v._v("修改目标地址")])])]),v._v(" "),l("li",[v._v("REDIRECT\n"),l("ul",[l("li",[v._v("重定向")])])])])]),v._v(" "),l("li",[v._v("condition\n"),l("ul",[l("li",[v._v("通用匹配\n"),l("ul",[l("li",[v._v("可直接使用，不依赖于其他条件或扩展")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-p")]),v._v("指定协议")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-s/-d")]),v._v("指定源/目标地址")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-i/-o")]),v._v("指定入站/出站网卡")])])]),v._v(" "),l("li",[v._v("隐含匹配\n"),l("ul",[l("li",[v._v("以特定的协议匹配作为前提")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("--sport/--dport")]),v._v("源/目标端口")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("--icmp-type")]),v._v("ICMP类型")])])]),v._v(" "),l("li",[v._v("显式匹配\n"),l("ul",[l("li",[v._v("以"),l("code",{pre:!0},[v._v("-m module")]),v._v("的形式明确指出类型")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-m multiport --sport/dport")]),v._v("多端口匹配\n"),l("ul",[l("li",[v._v("为什么使用多端口？多端口在同一条规则里面可以减少匹配的规则数量，从而优化访问速度")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-m iprange --src-range")]),v._v("IP范围")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-m mac --mac-source")]),v._v("MAC地址")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-m state --state")]),v._v("连接状态\n"),l("ul",[l("li",[v._v("NEW")]),v._v(" "),l("li",[v._v("ESTABLISHED")]),v._v(" "),l("li",[v._v("RELATED")])])]),v._v(" "),l("li",[v._v("包括多端口、MAC地址、IP范围、数据包状态等条件")])])]),v._v(" "),l("li",[v._v("条件取反：加"),l("code",{pre:!0},[v._v("!")]),v._v("，比如"),l("code",{pre:!0},[v._v("-p ! icmp")])])])])]),v._v(" "),l("p",[v._v("例：")]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("iptables -t filter -A INPUT -p tcp -j ACCEPT")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -I INPUT -p udp -j ACCEPT")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -I INPUT 2 -p icmp -j ACCEPT")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -L INPUT --line-numbers")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -D INPUT 3")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -n -L INPUT")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -t filter -P FORWARD DROP")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -P OUTPUT ACCEPT")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -A FORWARD -s 10.20.30.0/24 -j DROP")])])]),v._v(" "),l("h3",{attrs:{id:"实现snat"}},[v._v("实现SNAT")]),v._v(" "),l("blockquote",[l("p",[v._v("主要用途：局域网主机使用网关的公网IP访问互联网")])]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -j SNAT --to-source 218.29.30.31")]),v._v(" "),l("ul",[l("li",[v._v("路由后对源地址为内网地址的数据包执行SNAT操作，把源地址改为静态公网地址（219.29.30.31）")])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -j MASQUERADE")]),v._v(" "),l("ul",[l("li",[v._v("动态公网地址伪装。适用于公网IP不固定的场景，自动判断公网地址")])])])]),v._v(" "),l("p",[v._v("回包的时候会自动把目标地址从公网地址改回私网地址")]),v._v(" "),l("h3",{attrs:{id:"实现dnat"}},[v._v("实现DNAT")]),v._v(" "),l("blockquote",[l("p",[v._v("主要用途：端口映射，使公网可以访问局域网的服务")])]),v._v(" "),l("p",[l("code",{pre:!0},[v._v("iptables -t nat -A PREROUTING -d 218.29.30.31 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.6")])]),v._v(" "),l("p",[v._v("路由前把目标地址为网关地址且目标端口为tcp 80的数据包的目标地址改写为私网地址，然后再路由")]),v._v(" "),l("h3",{attrs:{id:"iptables备份和还原"}},[v._v("iptables备份和还原")]),v._v(" "),l("p",[v._v("命令：")]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("iptables-save")]),v._v("输出规则。可以结合重定向使用")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("iptables-restore")]),v._v("输入规则。可以结合重定向使用")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("service iptables save")]),v._v("保存规则到规则文件。如果不保存，规则就是临时的，重启iptables后失效")])]),v._v(" "),l("p",[v._v("文件：")]),v._v(" "),l("ul",[l("li",[v._v("启动脚本："),l("code",{pre:!0},[v._v("/etc/init.d/iptables")])]),v._v(" "),l("li",[v._v("规则文件："),l("code",{pre:!0},[v._v("/etc/sysconfig/iptables")])])]),v._v(" "),l("h2",{attrs:{id:"selinux"}},[v._v("SeLinux")]),v._v(" "),l("h3",{attrs:{id:"selinux概述"}},[v._v("SeLinux概述")]),v._v(" "),l("p",[v._v("由美国国家安全局(NSA: National Security Agency)开发")]),v._v(" "),l("p",[v._v("设计：任何【主体】访问【客体】的时候都要经过一个【规则库】，实现【防篡改】、【无旁路】、【可验证】")]),v._v(" "),l("p",[v._v("是基于令牌（安全上下文）的访问控制。所有客体（文件、socket、主机等）和主体（进程）都有关联的安全上下文")]),v._v(" "),l("p",[v._v("文件的安全上下文："),l("code",{pre:!0},[v._v("用户:角色:类型:等级")]),v._v("。在"),l("code",{pre:!0},[v._v("target")]),v._v("模式下，通常把文件的"),l("code",{pre:!0},[v._v("类型")]),v._v("设置为进程对应的类型就够了")]),v._v(" "),l("h3",{attrs:{id:"配置文件与命令"}},[v._v("配置文件与命令")]),v._v(" "),l("p",[l("code",{pre:!0},[v._v("/etc/selinux/config")]),v._v(":")]),v._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[l("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("SELINUX")]),l("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("disabled "),l("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 禁用SELinux")]),v._v("\n\t"),l("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# permissive 仅警告")]),v._v("\n\t"),l("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# enforcing 启用SELinux")]),v._v("\n"),l("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("SELINUXTYPE")]),l("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("targeted "),l("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 基础防护，保护目标进程")]),v._v("\n\t"),l("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# mls 多级保护")]),v._v("\n")])]),v._v(" "),l("p",[v._v("修改后需要重启生效。重启会很慢，因为需要把模块加载到内核")]),v._v(" "),l("p",[v._v("命令：")]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("getenforce")]),v._v("查看SELinux状态")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("setenforce")]),v._v("临时修改.只能在permissive/enforcing之间切换，如果要disable，需要修改配置文件并重启\n"),l("ul",[l("li",[l("code",{pre:!0},[v._v("setenforce Enforcing/1")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("setenforce Permissive/0")])])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("ll -Z")]),v._v("可以查看文件的安全上下文")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("chcon [-R] [-t type] [-u user] [-r role] filename")]),v._v("修改文件的安全上下文\n"),l("ul",[l("li",[l("code",{pre:!0},[v._v("-R")]),v._v("递归修改子目录")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-t")]),v._v("修改类型")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-u")]),v._v("修改身份，比如"),l("code",{pre:!0},[v._v("system_u")])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-r")]),v._v("修改角色，比如"),l("code",{pre:!0},[v._v("system_r")])])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("restorecon [-Rv] file/folder")]),v._v("还原文件的安全上下文中的类型字段\n"),l("ul",[l("li",[l("code",{pre:!0},[v._v("-R")]),v._v("递归")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("-v")]),v._v("详细输出")])])])]),v._v(" "),l("h3",{attrs:{id:"布尔值"}},[v._v("布尔值")]),v._v(" "),l("p",[v._v("是很多功能开关。有些软件会提供这些开关，只需要使用开关即可实现复杂的功能，而不用自己实现")]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("getsebool")]),v._v("查看目前所有布尔值\n"),l("ul",[l("li",[v._v("通常会需要过滤，比如"),l("code",{pre:!0},[v._v("getsebool -a | grep samba")])])])]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("setsebool")]),v._v("修改布尔值\n"),l("ul",[l("li",[l("code",{pre:!0},[v._v("-P")]),v._v("持久化到配置文件永久生效")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("setsebool -P samva_enable_home_dirs=1")]),v._v("使用"),l("code",{pre:!0},[v._v("k=v")]),v._v("的语法赋值")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("setsebool samba_export_all_ro on")]),v._v("使用"),l("code",{pre:!0},[v._v("k v")]),v._v("的语法赋值")])])])])])}]};v.exports={attributes:{title:"Linux Cluster(Part 4)",description:"security, iptables, SeLinux",tags:["Security"]},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},430:function(v,_,e){v.exports=e.p+"img/4-1.c9e4314.png"}}]);