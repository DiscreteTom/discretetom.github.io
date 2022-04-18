(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1167:function(_,v){const l={render:function(){var _=this;_.$createElement;return _._self._c,_._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"概述"}},[_._v("概述")]),_._v(" "),l("p",[_._v("本文是观看"),l("a",{attrs:{href:"https://www.bilibili.com/video/BV1Db411G7pf"}},[_._v("此视频")]),_._v("时的笔记")]),_._v(" "),l("h2",{attrs:{id:"集群"}},[_._v("集群")]),_._v(" "),l("h3",{attrs:{id:"概念"}},[_._v("概念")]),_._v(" "),l("p",[_._v("集群是一组协同工作的服务器，对外表现为一个整体")]),_._v(" "),l("h3",{attrs:{id:"集群分类"}},[_._v("集群分类")]),_._v(" "),l("ul",[l("li",[_._v("LBC(Load balancing cluster)负载均衡集群\n"),l("ul",[l("li",[_._v("调度器后面的每个节点的任务相同，分担业务压力")])])]),_._v(" "),l("li",[_._v("HAC(High availability cluster)高可用集群\n"),l("ul",[l("li",[_._v("backup使用心跳来检测master是否存活。如果backup意外成为master之后发现原master还存活，backup可能会把原master给kill掉")])])]),_._v(" "),l("li",[_._v("HPC(High performance cluster)高性能计算集群\n"),l("ul",[l("li",[_._v("分布式计算，调度器后面的每个节点的任务不同")])])])]),_._v(" "),l("h2",{attrs:{id:"负载均衡集群lbc"}},[_._v("负载均衡集群LBC")]),_._v(" "),l("h3",{attrs:{id:"lbc概述"}},[_._v("LBC概述")]),_._v(" "),l("ul",[l("li",[_._v("软件方案，成本低\n"),l("ul",[l("li",[l("strong",[_._v("LVS")])]),_._v(" "),l("li",[_._v("Nginx")]),_._v(" "),l("li",[_._v("HAProxy")])])]),_._v(" "),l("li",[_._v("硬件方案，性能高\n"),l("ul",[l("li",[_._v("F5")])])])]),_._v(" "),l("p",[_._v("负载均衡层级（越上层越智能，因为底层包的结构都会被解出来，同时也越慢）：")]),_._v(" "),l("ul",[l("li",[_._v("2层（数据链路层）\n"),l("ul",[l("li",[_._v("实现方式：F5")]),_._v(" "),l("li",[_._v("比如游戏服务器针对不同的运营商有不同的专线优化带宽，在2层实现链路分配")])])]),_._v(" "),l("li",[_._v("4层（传输层）\n"),l("ul",[l("li",[_._v("实现方式：LVS、F5")]),_._v(" "),l("li",[_._v("仅进行地址重写，不实现其他的解包操作。负载均衡器只是把请求的目标地址改为真实服务器地址，然后把响应的源地址改为自身地址")]),_._v(" "),l("li",[l("strong",[_._v("只有一次TCP连接")])])])]),_._v(" "),l("li",[_._v("7层（应用层）\n"),l("ul",[l("li",[_._v("实现方式：Nginx")]),_._v(" "),l("li",[_._v("【客户端到负载均衡器】与【负载均衡器到服务器】是"),l("strong",[_._v("两个TCP连接")])]),_._v(" "),l("li",[_._v("负载均衡器会像服务器发起自己的请求，请求的源地址为负载均衡器的地址")])])])]),_._v(" "),l("p",[_._v("负载均衡器在负载均衡集群里面压力最大，需要高可用")]),_._v(" "),l("h3",{attrs:{id:"lvs"}},[_._v("LVS")]),_._v(" "),l("blockquote",[l("p",[_._v("Linux Virtual Server")])]),_._v(" "),l("h4",{attrs:{id:"lvs概述"}},[_._v("LVS概述")]),_._v(" "),l("p",[_._v("LVS可以分为两个部分：")]),_._v(" "),l("ul",[l("li",[l("code",{pre:!0},[_._v("ipvs")]),_._v(" "),l("ul",[l("li",[_._v("运行在内核空间")]),_._v(" "),l("li",[_._v("LVS的核心组件，集成在Linux的内核里面，不需要安装")])])]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("ipvsadm")]),_._v(" "),l("ul",[l("li",[_._v("运行在用户空间")]),_._v(" "),l("li",[_._v("用来控制内核空间的"),l("code",{pre:!0},[_._v("ipvs")])])])])]),_._v(" "),l("h4",{attrs:{id:"运行模式"}},[_._v("运行模式")]),_._v(" "),l("ul",[l("li",[_._v("NAT\n"),l("ul",[l("li",[_._v("拥有一个公网地址，一个私网地址")]),_._v(" "),l("li",[_._v("用户->公网->负载均衡器(DNAT)->私网交换机->服务器->私网交换机->负载均衡器(SNAT)->公网->用户")]),_._v(" "),l("li",[_._v("要求：服务器的网关设置为负载均衡器，因为服务器返回响应包的时候，目标地址为用户地址，但是要把包发给负载均衡器")]),_._v(" "),l("li",[_._v("需要经过两次负载均衡器，负载较大")]),_._v(" "),l("li",[_._v("支持端口映射")])])]),_._v(" "),l("li",[_._v("TUN（隧道模式）\n"),l("ul",[l("li",[_._v("负载均衡器只需要公网地址")]),_._v(" "),l("li",[_._v("用户->公网->负载均衡器->公网->服务器->公网->用户")]),_._v(" "),l("li",[_._v("适用场景：服务器散布在全球各地。不常用")]),_._v(" "),l("li",[_._v("要求：\n"),l("ul",[l("li",[_._v("负载均衡器转发的时候需要再加一层包头")]),_._v(" "),l("li",[_._v("服务器需要解一层包头")])])]),_._v(" "),l("li",[_._v("不支持端口映射")]),_._v(" "),l("li",[_._v("因为使用隧道需要二次封包，所以压力也挺大")])])]),_._v(" "),l("li",[_._v("DR\n"),l("ul",[l("li",[_._v("负载均衡器只需要私网地址")]),_._v(" "),l("li",[_._v("用户->公网->服务端路由器->私网交换机->负载均衡器->私网交换机->服务器->私网交换机->路由器->公网->用户")]),_._v(" "),l("li",[_._v("只需要经过一次负载均衡器，负载量最高，最常用")]),_._v(" "),l("li",[_._v("要求：\n"),l("ul",[l("li",[_._v("负载均衡器使用MAC地址把包转发给服务器，即修改DMAC，而不是重写IP地址（因为响应不经过负载均衡器，所以如果负载均衡器改了地址，没有机会把地址改回来）")]),_._v(" "),l("li",[_._v("负载均衡器和服务器在同一个网络，因为需要使用MAC地址通信")]),_._v(" "),l("li",[_._v("服务器为了接收负载均衡器转发的包，需要设置一个隐性IP地址（和负载均衡器的IP相同），此地址仅对本机可见。通过设置ARP实现")]),_._v(" "),l("li",[_._v("服务器建议是linux，这样才能设置隐性IP地址。如果服务器是windows，需要在路由器设置IP与MAC的绑定")])])]),_._v(" "),l("li",[_._v("不支持端口映射（因为请求和响应不对称，如果映射了，没有机会改回来）")])])])]),_._v(" "),l("h4",{attrs:{id:"连接分类与调度算法"}},[_._v("连接分类与调度算法")]),_._v(" "),l("p",[_._v("HTTP连接的分类")]),_._v(" "),l("ul",[l("li",[_._v("活动连接\n"),l("ul",[l("li",[_._v("已经握手且正在传输数据")]),_._v(" "),l("li",[_._v("在动态调度算法中，活动连接视为256倍的非活动连接")])])]),_._v(" "),l("li",[_._v("非活动连接\n"),l("ul",[l("li",[_._v("刚握手，还没有传输数据")]),_._v(" "),l("li",[_._v("数据传输完毕，连接还没断开")])])])]),_._v(" "),l("p",[_._v("调度算法：")]),_._v(" "),l("ul",[l("li",[_._v("静态调度算法\n"),l("ul",[l("li",[_._v("RR(Round Robin) - 轮询算法（默认）")]),_._v(" "),l("li",[_._v("WRR - 加权轮询")]),_._v(" "),l("li",[_._v("SH(source hash) - 源地址散列，同一个IP的请求发给同一个服务器。可以实现粘性会话")]),_._v(" "),l("li",[_._v("DH(destination hash) - 目标地址散列。基于路径路由。提升缓存命中率")])])]),_._v(" "),l("li",[_._v("动态调度算法（需要考虑服务器状态）\n"),l("ul",[l("li",[_._v("LC(Least Connection) - 最少连接数\n"),l("ul",[l("li",[_._v("即选择"),l("code",{pre:!0},[_._v("活动连接 * 256 + 非活动连接")]),_._v("最小的服务器")])])]),_._v(" "),l("li",[_._v("WLC - 加权最少链接\n"),l("ul",[l("li",[_._v("即选择"),l("code",{pre:!0},[_._v("(活动连接 * 256 + 非活动连接) / 权重")]),_._v("最小的服务器")])])]),_._v(" "),l("li",[_._v("SED - 最短期望延迟。是特殊的WLC\n"),l("ul",[l("li",[_._v("即选择"),l("code",{pre:!0},[_._v("(活动连接 + 1) * 256 / 权重")]),_._v("最小的服务器")]),_._v(" "),l("li",[_._v("所有服务器活动连接相等的时候，会选择权重最大的服务器")])])]),_._v(" "),l("li",[_._v("NQ - 永不排队。在SED的基础上，如果有服务器连接数为0则直接分配")]),_._v(" "),l("li",[_._v("LBLC - 特殊的DH。某个目标地址压力过大时添加新的服务器，然后轮询。即考虑缓存命中率的基础上考虑服务器性能")]),_._v(" "),l("li",[_._v("LBLCR - 是LBLC+缓存。多个缓存服务器可以同步数据。是尽可能提高负载均衡和缓存命中率的折中方案")])])])]),_._v(" "),l("h5",{attrs:{id:"持久连接"}},[_._v("持久连接")]),_._v(" "),l("p",[_._v("LVS支持持久连接，"),l("strong",[_._v("且持久连接的优先级高于调度算法")])]),_._v(" "),l("p",[_._v("分类：")]),_._v(" "),l("ul",[l("li",[_._v("PCC（持久客户端连接）\n"),l("ul",[l("li",[_._v("类似与SH。一段时间内同一客户端的请求路由到相同的服务器")])])]),_._v(" "),l("li",[_._v("PPC（持久端口连接）\n"),l("ul",[l("li",[_._v("一段时间内同一个客户端对同一个端口的请求路由到相同的服务器")])])]),_._v(" "),l("li",[_._v("PFMC（持久防火墙标记连接）\n"),l("ul",[l("li",[_._v("根据iptables的标记进行路由，可以实现分组的效果")])])])]),_._v(" "),l("h2",{attrs:{id:"高可用集群hac"}},[_._v("高可用集群HAC")]),_._v(" "),l("p",[_._v("LVS自身没有后端服务器健康状态检查功能，且LVS自身需要高可用")]),_._v(" "),l("ul",[l("li",[_._v("Keepalive\n"),l("ul",[l("li",[_._v("Keepalive是为高可用设计的软件")]),_._v(" "),l("li",[_._v("支持节点健康检查(Health Check)")]),_._v(" "),l("li",[_._v("支持故障自动切换(Failover)")]),_._v(" "),l("li",[_._v("使用VRRP(Virtual Router Redundancy Protocol，虚拟路由冗余协议)\n"),l("ul",[l("li",[_._v("一主多备，公用同一个IP地址，优先级不同。类似于弹性IP")]),_._v(" "),l("li",[_._v("很多路由器实现高可用的时候也只用此协议")])])]),_._v(" "),l("li",[_._v("通常和LVS-DR一起使用实现4层高可用")])])]),_._v(" "),l("li",[_._v("Heartbeat\n"),l("ul",[l("li",[_._v("经常和Nginx结合使用，实现7层负载均衡的高可用")])])])]),_._v(" "),l("h2",{attrs:{id:"squid"}},[_._v("Squid")]),_._v(" "),l("h3",{attrs:{id:"squid概述"}},[_._v("Squid概述")]),_._v(" "),l("blockquote",[l("p",[_._v("二八原则：80%的访问量仅在访问20%的数据")])]),_._v(" "),l("ul",[l("li",[_._v("是缓存服务器的守护进程（Nginx也有模块做缓存，但是Squid更专业）")]),_._v(" "),l("li",[_._v("支持的协议\n"),l("ul",[l("li",[_._v("FTP")]),_._v(" "),l("li",[_._v("HTTP")]),_._v(" "),l("li",[_._v("SSL")])])]),_._v(" "),l("li",[_._v("层级：磁盘 > 分区 > 目录 > object\n"),l("ul",[l("li",[_._v("目录只能有两级")])])]),_._v(" "),l("li",[_._v("使用索引优化查询\n"),l("ul",[l("li",[_._v("Digest tables - 保存了不同分区中object的大概说明")]),_._v(" "),l("li",[_._v("Hash tables - 保存了每个digest的索引信息")])])]),_._v(" "),l("li",[_._v("使用一个古老的文件系统：UFS(Unix File System)\n"),l("ul",[l("li",[_._v("不支持复杂的权限设置（不过Squid也不需要）")]),_._v(" "),l("li",[_._v("更简单，更迅速")]),_._v(" "),l("li",[_._v("重启服务较慢。建议修改配置文件之后"),l("code",{pre:!0},[_._v("reload")]),_._v("而不是"),l("code",{pre:!0},[_._v("restart")])])])]),_._v(" "),l("li",[_._v("继承者：Varnish\n"),l("ul",[l("li",[_._v("新一代缓存守护进程。暂时还没有广泛使用")]),_._v(" "),l("li",[_._v("功能多\n"),l("ul",[l("li",[_._v("支持使用正则表达式删除缓存")]),_._v(" "),l("li",[_._v("使用内存分页技术存储数据")])])]),_._v(" "),l("li",[_._v("大文件不逊色于Squid，小文件更快")])])]),_._v(" "),l("li",[_._v("有些CDN服务就是使用Squid做缓存")])]),_._v(" "),l("h3",{attrs:{id:"软件信息"}},[_._v("软件信息")]),_._v(" "),l("ul",[l("li",[_._v("系统服务："),l("code",{pre:!0},[_._v("squid")])]),_._v(" "),l("li",[_._v("主程序："),l("code",{pre:!0},[_._v("/usr/sbin/squid")])]),_._v(" "),l("li",[_._v("主配置文件："),l("code",{pre:!0},[_._v("/etc/squid/squid.conf")])]),_._v(" "),l("li",[_._v("默认端口：3128")]),_._v(" "),l("li",[_._v("默认日志："),l("code",{pre:!0},[_._v("/var/log/squid/access.log")])])]),_._v(" "),l("h3",{attrs:{id:"配置文件"}},[_._v("配置文件")]),_._v(" "),l("p",[_._v("常见配置选项：")]),_._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[_._v("http_port "),l("span",{pre:!0,attrs:{class:"token number"}},[_._v("3128")]),_._v("\naccess_log /var/log/squid/access.log squid "),l("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 日志路径 日志用户")]),_._v("\ncache_mem 64MB "),l("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# squid进程能够调用的最大内存资源")]),_._v("\ncache_dir ufs /var/spool/squid "),l("span",{pre:!0,attrs:{class:"token number"}},[_._v("100")]),_._v(" "),l("span",{pre:!0,attrs:{class:"token number"}},[_._v("16")]),_._v(" "),l("span",{pre:!0,attrs:{class:"token number"}},[_._v("256")]),_._v("\n\t"),l("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 缓存目录的文件系统、路径、最大使用100MB存储、最多16个一级目录、256个二级目录")]),_._v("\nvisible_hostname proxy.example.com "),l("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# squid服务器名")]),_._v("\ndns_testnames www.google.com www.baidu.com "),l("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 用来判断自己是否挂了")]),_._v("\nmaximum_object_size 4096KB "),l("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 最大缓存对象。防止缓存太大、不常用的文件")]),_._v("\nreply_body_max_size 10MB "),l("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 最大响应对象。如果对象太大，客户端会无法收到响应")]),_._v("\n")])]),_._v(" "),l("h3",{attrs:{id:"工作模式"}},[_._v("工作模式")]),_._v(" "),l("ul",[l("li",[_._v("传统（正向）代理\n"),l("ul",[l("li",[_._v("需要手动给客户端（如浏览器）设置代理服务器的IP和端口")]),_._v(" "),l("li",[_._v("是默认的模式。如果直接启动squid就是传统模式")])])]),_._v(" "),l("li",[_._v("透明（正向）代理\n"),l("ul",[l("li",[_._v("相比于传统代理，不需要给客户端手动设置代理服务器IP和端口，而是把Squid作为网关")]),_._v(" "),l("li",[_._v("修改配置文件："),l("code",{pre:!0},[_._v("http_port 192.168.0.1:3128 transparent")])]),_._v(" "),l("li",[_._v("修改"),l("code",{pre:!0},[_._v("/etc/sysctl.conf")]),_._v("，启动路由转发："),l("code",{pre:!0},[_._v("net.ipv4.ip_forward = 1")]),_._v(" "),l("ul",[l("li",[_._v("执行"),l("code",{pre:!0},[_._v("sysctl -p")]),_._v("应用配置")])])]),_._v(" "),l("li",[_._v("修改iptables: "),l("code",{pre:!0},[_._v("iptables -t nat -A PREROUTING -i eth0 -s 192.168.0.0/24 -p tcp --dport 80 -j REDIRECT --to-ports 3128")])])])]),_._v(" "),l("li",[_._v("反向代理\n"),l("ul",[l("li",[_._v("仅支持轮询算法")]),_._v(" "),l("li",[_._v("修改配置文件\n"),l("ul",[l("li",[l("code",{pre:!0},[_._v("http_access allow all")])]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("http_port 10.0.0.1:80 vhost")]),_._v("以反向代理（虚拟主机）模式监听80端口")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("cache_peer 192.168.1.1 parent 80 0 originserver round-robin")]),_._v(" "),l("ul",[l("li",[_._v("指定后端服务器"),l("code",{pre:!0},[_._v("192.168.1.1")]),_._v("和端口"),l("code",{pre:!0},[_._v("80")])]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("parent")]),_._v("表示【上游模式】，即squid是后端服务器的上游。除了上游模式，还有同级模式")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("0")]),_._v("表示当前环境其他squid服务器的数量")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("round-robin")]),_._v("轮询。squid仅支持轮询算法")])])])])]),_._v(" "),l("li",[_._v("修改"),l("code",{pre:!0},[_._v("/etc/sysctl.conf")]),_._v("，启动路由转发："),l("code",{pre:!0},[_._v("net.ipv4.ip_forward = 1")]),_._v(" "),l("ul",[l("li",[_._v("执行"),l("code",{pre:!0},[_._v("sysctl -p")]),_._v("应用配置")])])])])])]),_._v(" "),l("blockquote",[l("p",[_._v("互联网早期，由于带宽低，所以本地机房可以设置正向代理，把一些网页的结果缓存在本地，减少公网带宽消耗")])]),_._v(" "),l("h3",{attrs:{id:"acl"}},[_._v("ACL")]),_._v(" "),l("p",[_._v("Access Control List")]),_._v(" "),l("ul",[l("li",[_._v("列表类型\n"),l("ul",[l("li",[l("code",{pre:!0},[_._v("src")]),_._v("源地址")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("dst")]),_._v("目标地址")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("port")]),_._v("目标端口")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("dstdomain")]),_._v("目标域")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("time")]),_._v("访问发起的时间\n"),l("ul",[l("li",[l("code",{pre:!0},[_._v("2019-01-01")])])])]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("maxconn")]),_._v("最大并发连接")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("url_regex")]),_._v("目标URL的域名")]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("Urlpath_regex")]),_._v("目标URL")])])]),_._v(" "),l("li",[_._v("配置文件格式\n"),l("ul",[l("li",[l("code",{pre:!0},[_._v("acl 列表名 列表类型 列表内容")])]),_._v(" "),l("li",[l("code",{pre:!0},[_._v("http_access allow/deny 列表名")])])])])]),_._v(" "),l("p",[_._v("特殊规则：如果没有配置"),l("code",{pre:!0},[_._v("deny all")]),_._v("，且某个ACL列表仅被定义而没有设置access/deny，则这个ACL的列表会根据最后一条"),l("code",{pre:!0},[_._v("http_access")]),_._v("的deny/access进行反向设置")])])}]};_.exports={attributes:{title:"Linux Cluster(Part 1)",description:"集群概念、LVS、高可用负载均衡、Squid",tags:["Network"]},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);