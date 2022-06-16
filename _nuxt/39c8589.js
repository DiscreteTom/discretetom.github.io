(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1181:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),e("p",[t._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/bv164411J761"}},[t._v("此视频")]),t._v("时整理的笔记。")]),t._v(" "),e("h2",{attrs:{id:"dhcp"}},[t._v("DHCP")]),t._v(" "),e("blockquote",[e("p",[t._v("Dynamic Host Configuration Protocol")])]),t._v(" "),e("h3",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),e("ul",[e("li",[t._v("局域网协议")]),t._v(" "),e("li",[t._v("使用UDP传输")]),t._v(" "),e("li",[t._v("动态分配IP地址，配置客户端的网关、DNS服务器并集中管理（限速等）")]),t._v(" "),e("li",[t._v("DHCP服务器自身的IP通过编辑网卡配置文件可以设置。详见"),e("a",{attrs:{href:"/notes/linux-basic/1"}},[t._v("Linux入门的笔记")])])]),t._v(" "),e("h3",{attrs:{id:"租约与续租"}},[t._v("租约与续租")]),t._v(" "),e("p",[t._v("租约：")]),t._v(" "),e("ol",[e("li",[t._v("客户端发起DHCP Discover\n"),e("ol",[e("li",[t._v("客户端首先会把"),e("code",{pre:!0},[t._v("0.0.0.0")]),t._v("作为自己的IP地址，但是此地址不合法，无法通信")]),t._v(" "),e("li",[t._v("客户端不知道DHCP服务器的IP地址，所以会在局域网广播数据包("),e("code",{pre:!0},[t._v("255.255.255.255")]),t._v(")，用来发现DHCP服务器")]),t._v(" "),e("li",[t._v("目标端口为UDP 67")]),t._v(" "),e("li",[t._v("请求中包含自己的MAC地址和主机名")]),t._v(" "),e("li",[t._v("如果局域网没有DHCP服务器，客户端就会一直发请求")])])]),t._v(" "),e("li",[t._v("服务器返回DHCP Offer\n"),e("ol",[e("li",[t._v("可能有多个DHCP服务器回复客户端")]),t._v(" "),e("li",[t._v("回复信息中包括客户端MAC地址、分配的IP、子网掩码、网关、租约期限、DHCP服务器的IP和MAC等")]),t._v(" "),e("li",[t._v("由于客户端还没有IP，所以回复的目标地址仍然是"),e("code",{pre:!0},[t._v("255.255.255.255")]),t._v("广播。源端口为UDP 68")])])]),t._v(" "),e("li",[t._v("客户端发起DHCP Request\n"),e("ol",[e("li",[t._v("通常接受第一个收到的回复，因为最快回复表示网络质量最好")]),t._v(" "),e("li",[t._v("DHCP Request会广播到所有DHCP服务器")]),t._v(" "),e("li",[t._v("消息包括客户端接受的IP地址、对应的DHCP服务器标识")]),t._v(" "),e("li",[t._v("客户端仍然使用"),e("code",{pre:!0},[t._v("0.0.0.0")]),t._v("作为源地址，"),e("code",{pre:!0},[t._v("255.255.255.255")]),t._v("作为目标地址，使用UDP 67作为目标端口广播消息")]),t._v(" "),e("li",[t._v("没有被选中的DHCP服务器会回收已经给出的Offer中的IP地址")])])]),t._v(" "),e("li",[t._v("服务端返回DHCP ACK/NAK\n"),e("ol",[e("li",[t._v("消息包含IP地址有效租约和其他可能配置的信息")]),t._v(" "),e("li",[t._v("目标地址为"),e("code",{pre:!0},[t._v("255.255.255.255")]),t._v("（广播），源端口为UDP 68")])])])]),t._v(" "),e("p",[t._v("默认租期：客户端不指定租期时的默认租期\n最大租期：客户端指定租期时的最大值")]),t._v(" "),e("p",[t._v("续租：")]),t._v(" "),e("ol",[e("li",[t._v("客户端发起DHCP Request\n"),e("ol",[e("li",[t._v("客户端租期过去一半的时候会尝试续租。如果续租失败，则在租期过去7/8的时候再次尝试续租。如果仍然续租失败，则租约到达100%的时候客户端必须放弃此地址。如果客户端放弃地址之后没有DHCP服务器可以用，则会使用"),e("code",{pre:!0},[t._v("169.254.0.0/16")]),t._v("中的一个随机地址（一个B类地址），每隔5分钟再进行尝试")]),t._v(" "),e("li",[t._v("目标地址为DHCP服务器的地址")])])]),t._v(" "),e("li",[t._v("服务器返回DHCP ACK/NAK")])]),t._v(" "),e("blockquote",[e("p",[t._v("为什么会选用"),e("code",{pre:!0},[t._v("169.254.0.0/16")]),t._v("中的一个随机地址，而不是变回"),e("code",{pre:!0},[t._v("0.0.0.0")]),t._v("？")])]),t._v(" "),e("h3",{attrs:{id:"相关软件和文件"}},[t._v("相关软件和文件")]),t._v(" "),e("ul",[e("li",[t._v("软件\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("dhcp")]),t._v("DHCP服务软件包")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("dhcp-common")]),t._v("DHCP命令软件包")])])]),t._v(" "),e("li",[t._v("服务\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("dhcpd")]),t._v("DHCP服务")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("dhcrelay")]),t._v("DHCP中继")])])]),t._v(" "),e("li",[t._v("端口\n"),e("ul",[e("li",[t._v("UDP 67，作为监听端口接受DHCP请求")]),t._v(" "),e("li",[t._v("UDP 68，作为回复数据包的源端口")])])]),t._v(" "),e("li",[t._v("配置文件\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("/etc/dhcp/dhcpd.conf")]),t._v("默认是空的。需要参考模板文件进行编辑")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("/usr/share/doc/dhcp*/dhcp.conf.sample")]),t._v("模板文件")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("/etc/sysconfig/dhcrelay")]),t._v("DHCP中继的配置文件")])])]),t._v(" "),e("li",[t._v("日志\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("/var/log/messages")]),t._v("DHCP服务器的日志。可以看到租约过程")])])])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("/etc/dhcp/dhcpd.conf")]),t._v("文件内容分为局部和全局。大括号内为局部配置。示例：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("log-facility local7"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志保存设备。通常不需要配置")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此配置文件中至少有一个subnet网段包括DHCP服务器IP")]),t._v("\nsubnet "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.0 netmask "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要分配的网段和子网掩码")]),t._v("\n\trange "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.3 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.254"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 声明可用的IP范围")]),t._v("\n\toption domain-name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"discretetom.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置DNS域")]),t._v("\n\toption domain-name-servers "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.8")]),t._v(".8.8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置DNS服务器地址")]),t._v("\n\toption routers "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认网关地址")]),t._v("\n\toption broadcase-address "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.255"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 广播地址（可以不写）")]),t._v("\n\tdefault-lease-time "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认租约（秒）")]),t._v("\n\tmax-lease-time "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大租约（秒）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" some-host-name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用来给某个主机设置固定IP")]),t._v("\n\thardware ethernet xx.xx.xx.xx.xx.xx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MAC地址")]),t._v("\n\tfixed-address "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".99.123"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分配的IP地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"搭建"}},[t._v("搭建")]),t._v(" "),e("p",[t._v("DHCP安装完之后必须先配置才能启动")]),t._v(" "),e("p",[t._v("写好配置文件之后使用"),e("code",{pre:!0},[t._v("service dhcpd start")]),t._v("即可。修改配置文件之后需要重启服务")]),t._v(" "),e("p",[t._v("其他服务器给网卡配置好DHCP之后，需要重启网卡来获得IP。如果使用"),e("code",{pre:!0},[t._v("service network restart")]),t._v("会重启所有网卡。使用"),e("code",{pre:!0},[t._v("ifdown eth0;ifup eth0")]),t._v("可以重启指定的网卡")]),t._v(" "),e("h3",{attrs:{id:"超级作用域"}},[t._v("超级作用域")]),t._v(" "),e("p",[t._v("IP地址不够用的时候，超级作用域可以给DHCP服务器添加新的CIDR块而不影响已有的CIDR块。通常在路由器上设置，因为跨CIDR了，需要路由。Linux上面设置比较复杂，需要配置转发规则来模拟路由器")]),t._v(" "),e("p",[t._v("单臂路由技术：在同一个网卡上设置两个IP不同的地址")]),t._v(" "),e("p",[t._v("只要在路由器上启动单臂路由，配置一下转发规则就可以了")]),t._v(" "),e("p",[t._v("在Linux上面：")]),t._v(" "),e("ol",[e("li",[t._v("使用"),e("code",{pre:!0},[t._v("cp -a ifcfg-eth0 ifcfg-eth0:0")]),t._v("创建一个子网卡"),e("code",{pre:!0},[t._v("eth0:0")]),t._v("，修改此配置文件的网卡名和IP地址。MAC地址和UUID不需要改。子网卡的IP地址和原网卡的IP地址在不同的网端，以便实现路由功能")]),t._v(" "),e("li",[t._v("使用"),e("code",{pre:!0},[t._v("ifup eth0:0")]),t._v("启动新网卡")]),t._v(" "),e("li",[t._v("开启路由转发，修改"),e("code",{pre:!0},[t._v("/etc/sysctl.conf")]),t._v("，设置"),e("code",{pre:!0},[t._v("net.ipv4.ip_forward = 1")])]),t._v(" "),e("li",[t._v("刷新内核参数："),e("code",{pre:!0},[t._v("sysctl -p")])]),t._v(" "),e("li",[t._v("修改DHCP配置文件")]),t._v(" "),e("li",[t._v("重启"),e("code",{pre:!0},[t._v("dhcpd")])])]),t._v(" "),e("p",[t._v("超级作用域DHCP配置文件内容格式如下：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("shared-network some-network-name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建超级作用域")]),t._v("\n\tsubnet "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.0 netmask "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置子网1")]),t._v("\n\t\toption routers "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由器网卡的IP")]),t._v("\n\t\trange "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.100 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".88.200"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tsubnet "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".99.0 netmask "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置子网2")]),t._v("\n\t\toption routers "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".99.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由器网卡的另一个IP")]),t._v("\n\t\trange "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".99.100 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".99.200"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"dhcp中继"}},[t._v("DHCP中继")]),t._v(" "),e("blockquote",[e("p",[t._v("也叫DHCPR，是一种代理服务器")])]),t._v(" "),e("p",[t._v("在不同CIDR之间转发DHCP包，用来实现一个DHCP服务器管理不同的CIDR。同样需要路由器连接多个不同的网段并转发DHCP包。所以DHCP中继需要安装在路由器上")]),t._v(" "),e("p",[t._v("DHCP服务器的配置文件中直接并列写两个subnet配置项即可")]),t._v(" "),e("p",[t._v("DHCP中继服务器需要两个网卡。修改配置文件"),e("code",{pre:!0},[t._v("/etc/sysconfig/dhcrelay")]),t._v("中的"),e("code",{pre:!0},[t._v("INTERFACE")]),t._v("为两个网卡，如"),e("code",{pre:!0},[t._v('"eth0 eth1"')]),t._v("，并修改"),e("code",{pre:!0},[t._v("DHCPSERVERS")]),t._v("。同样需要开启内核路由转发，然后启动服务")]),t._v(" "),e("h2",{attrs:{id:"dns"}},[t._v("DNS")]),t._v(" "),e("h3",{attrs:{id:"域名和dns概述"}},[t._v("域名和DNS概述")]),t._v(" "),e("ul",[e("li",[t._v("根域\n"),e("ul",[e("li",[t._v("全球一共有13台根域服务器，解析"),e("code",{pre:!0},[t._v(".")])]),t._v(" "),e("li",[t._v("其中一个主根域服务器，12个辅根域服务器")]),t._v(" "),e("li",[t._v("其实更新的时候还是更新主根域服务器，然后同步到其他服务器")]),t._v(" "),e("li",[t._v("根域服务器都不在中国。中国有镜像根域服务器用来加速DNS解析")]),t._v(" "),e("li",[t._v("目前根域的"),e("code",{pre:!0},[t._v(".")]),t._v("通常被省略")])])]),t._v(" "),e("li",[t._v("顶级域\n"),e("ul",[e("li",[t._v("比如"),e("code",{pre:!0},[t._v("com.")]),t._v("、"),e("code",{pre:!0},[t._v("cn.")]),t._v("、"),e("code",{pre:!0},[t._v("io.")])]),t._v(" "),e("li",[t._v("由ICANN组织管理。可以找它申请新的顶级域")])])]),t._v(" "),e("li",[t._v("二级域\n"),e("ul",[e("li",[t._v("可以由个人或组织申请注册，比如"),e("code",{pre:!0},[t._v("github.io.")])])])]),t._v(" "),e("li",[t._v("三级域\n"),e("ul",[e("li",[t._v("通常为主机名，如"),e("code",{pre:!0},[t._v("discretetom.github.io.")])])])])]),t._v(" "),e("p",[t._v("常见公用DNS服务器：")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("8.8.8.8")]),t._v("/"),e("code",{pre:!0},[t._v("4.4.4.4")]),t._v("谷歌DNS")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("114.114.114.114")]),t._v("中国三大运营商的DNS")])]),t._v(" "),e("h3",{attrs:{id:"dns查询过程"}},[t._v("DNS查询过程")]),t._v(" "),e("ol",[e("li",[t._v("客户端查询本机"),e("code",{pre:!0},[t._v("hosts")]),t._v("文件")]),t._v(" "),e("li",[t._v("客户端查询本机DNS缓存")]),t._v(" "),e("li",[t._v("客户端根据网卡中设置的DNS服务器，向DNS服务器发出请求进行递归查询（客户端只请求一次）")]),t._v(" "),e("li",[t._v("DNS服务器查看本机DNS解析库（权威）")]),t._v(" "),e("li",[t._v("DNS服务器查看本机缓存（非权威）")]),t._v(" "),e("li",[t._v("DNS服务器从顶级域DNS服务器开始进行迭代查询（客户端请求多次）")]),t._v(" "),e("li",[t._v("DNS服务器保存查询结果")])]),t._v(" "),e("h3",{attrs:{id:"常见记录类型"}},[t._v("常见记录类型")]),t._v(" "),e("ul",[e("li",[t._v("A - IPv4地址")]),t._v(" "),e("li",[t._v("AAAA - IPv6地址")]),t._v(" "),e("li",[t._v("CNAME - 别名，指向另一个域名")]),t._v(" "),e("li",[t._v("TXT - 任意文本，长度限制255。通常用来做SPF（反垃圾邮件）")]),t._v(" "),e("li",[t._v("NS - 指定解析子域名的域名服务器")]),t._v(" "),e("li",[t._v("MX - 邮件")]),t._v(" "),e("li",[t._v("PTR - 反向解析。通常用来反垃圾邮件")])]),t._v(" "),e("h3",{attrs:{id:"相关软件和文件-1"}},[t._v("相关软件和文件")]),t._v(" "),e("h4",{attrs:{id:"概述-1"}},[t._v("概述")]),t._v(" "),e("ul",[e("li",[t._v("软件\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("bind")])])])]),t._v(" "),e("li",[t._v("服务\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("named")])])])]),t._v(" "),e("li",[t._v("端口\n"),e("ul",[e("li",[t._v("UDP 53域名解析")]),t._v(" "),e("li",[t._v("TCP 53数据同步（主从同步）")])])]),t._v(" "),e("li",[t._v("配置文件\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("/etc/named.conf")]),t._v("主配置文件，服务器运行参数")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("/etc/named.rfc1912.zones")]),t._v("域配置文件，正反向区域解析相关配置")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("/var/named/")]),t._v("数据配置文件\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("named.localhost")]),t._v("正向解析配置文件模板")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("named.loopback")]),t._v("反向解析配置文件模板")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("name.ca")]),t._v("根域服务器的位置")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("slaves")]),t._v("主从架构中，从服务器保存配置文件的位置")])])])])])]),t._v(" "),e("h4",{attrs:{id:"主配置文件"}},[t._v("主配置文件")]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("/etc/named.conf")])]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("options "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlisten-on port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置监听的IP地址。可以写any")]),t._v("\n\tlisten-on-v6 port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ::1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tdirectory "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/named"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据文件的保存位置")]),t._v("\n\tdump-file "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/named/data/cache_dump.db"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstatistics-file "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/named/data/named_stats.txt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmemstatistics-file "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/named/data/named_mem_stats.txt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tallow-query "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许访问服务的客户端IP。可以写any")]),t._v("\n\trecursion "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tinclude "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/named.rfc1912.zones"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入域配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("h4",{attrs:{id:"域配置文件"}},[t._v("域配置文件")]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("/etc/named.rfc1912.zones")])]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正向解析示例")]),t._v("\nzone "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),t._v(" IN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义要解析的域。注意不是域名")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器类型，master/slave")]),t._v("\n\tmasters "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.123"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是slave则指定master")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"named.localhost"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用的配置文件。如果是slave，建议改成slaves/named.localhost")]),t._v("\n\tallow-update "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是master则允许哪些slave的更新。填写IP地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向解析示例")]),t._v("\nzone "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.127.in-addr.arpa"')]),t._v(" IN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解析127.0.0.0/24")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"named.loopback"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tallow-update "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("h4",{attrs:{id:"数据配置文件"}},[t._v("数据配置文件")]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("/var/named/xx.xx")])]),t._v(" "),e("p",[t._v("slave不需要配置数据配置文件，会主动从master拉配置文件")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TTL")]),t._v(" 1D "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置缓存TTL。D表示天")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @表示域名本身")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SOA表示起始授权记录，描述管理员、邮件地址等信息")]),t._v("\n@\tIN SOA example.com. rname.invalid. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义要解析的域。注意最后的点。和域配置文件要匹配")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# serial - 配置文件版本，用来使slave识别master的配置文件版本")]),t._v("\n\t1D "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# refresh - slave向master的查询周期")]),t._v("\n\t1H "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# retry - 更新失败时重试周期")]),t._v("\n\t1W "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# expire - 无法更新时的失效周期")]),t._v("\n\t3H"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minimum - 缓存服务器无法更新时的失效时间")]),t._v("\n\n\tNS dns.example.com. "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DNS服务器的域名。必备的记录。注意最后的点")]),t._v("\n\tA "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".123.123 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 域名本身的A记录")]),t._v("\n\ndns A "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".123.123 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置dns.example.com的A记录")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"dns缓存服务器"}},[t._v("DNS缓存服务器")]),t._v(" "),e("p",[t._v("使用主从架构只能减轻master的压力，不能加速DNS解析。DNS缓存服务器先从缓存查询DNS记录，然后再查数据库，可以加速DNS解析，返回非权威应答")]),t._v(" "),e("ul",[e("li",[t._v("软件\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("dnsmasq")])])])]),t._v(" "),e("li",[t._v("配置文件\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("/etc/dnsmasq.conf")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("domain=github.io")]),t._v("需要解析的域")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("server=192.168.0.123")]),t._v("主DNS服务器的IP")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("cache-size=15000")]),t._v("缓存条数")])])])])])]),t._v(" "),e("h3",{attrs:{id:"智能dns分离解析"}},[t._v("智能DNS分离解析")]),t._v(" "),e("p",[t._v("把相同的域名解析为不同的IP地址。比如把不同运营商的用户解析到对应的服务器，提升访问速度")]),t._v(" "),e("p",[t._v("原理：不同的网卡对应不同的外网IP，使用不同的配置文件和数据文件，返回不同的DNS查询结果")]),t._v(" "),e("p",[t._v("修改主配置文件"),e("code",{pre:!0},[t._v("/etc/named.conf")])]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("view some-name-1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmatch-clients "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".10.0/24"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以写any")]),t._v("\n\tzone "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" IN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配范围。此处为`.`，表示所有域")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" hint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"named.ca"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tinclude "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/xxx.zones"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nview some-name-2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}]};t.exports={attributes:{title:"Linux Network Applications (Part 3)",description:"DHCP & DNS"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);