(window.webpackJsonp=window.webpackJsonp||[]).push([[47,385,386,387,388,389,390],{1253:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"数据报服务与虚电路服务"}},[v._v("数据报服务与虚电路服务")]),v._v(" "),l("p",[v._v("网络层给传输层提供的服务就是数据报服务和虚电路服务")]),v._v(" "),l("table",[l("thead",[l("tr",[l("th",[v._v("对比的方面")]),v._v(" "),l("th",[v._v("虚电路服务")]),v._v(" "),l("th",[v._v("数据报服务")])])]),v._v(" "),l("tbody",[l("tr",[l("td",[v._v("连接的建立")]),v._v(" "),l("td",[v._v("必须要")]),v._v(" "),l("td",[v._v("不需要")])]),v._v(" "),l("tr",[l("td",[v._v("目的地址")]),v._v(" "),l("td",[v._v("仅在建立连接的时候需要。发送数据时使用虚电路号")]),v._v(" "),l("td",[v._v("每个分组都有目的地址")])]),v._v(" "),l("tr",[l("td",[v._v("转发路径")]),v._v(" "),l("td",[v._v("沿着一条确定的虚电路转发")]),v._v(" "),l("td",[v._v("每个分组独立地选择路由转发")])]),v._v(" "),l("tr",[l("td",[v._v("节点出现故障时")]),v._v(" "),l("td",[v._v("整条虚电路瘫痪")]),v._v(" "),l("td",[v._v("可能会丢失一些分组，路由发生变换")])]),v._v(" "),l("tr",[l("td",[v._v("服务质量控制")]),v._v(" "),l("td",[v._v("容易控制，因为路线不变，带宽预先划分好了")]),v._v(" "),l("td",[v._v("不容易控制")])]),v._v(" "),l("tr",[l("td",[v._v("拥塞控制")]),v._v(" "),l("td",[v._v("容易控制，带宽预先划分好了")]),v._v(" "),l("td",[v._v("不容易控制")])]),v._v(" "),l("tr",[l("td",[v._v("分组的顺序")]),v._v(" "),l("td",[v._v("总是按顺序到达")]),v._v(" "),l("td",[v._v("不一定按顺序到达")])])])]),v._v(" "),l("h2",{attrs:{id:"路由算法"}},[v._v("路由算法")]),v._v(" "),l("p",[v._v("这里所说的路由算法都是"),l("strong",[v._v("数据报")]),v._v("服务的路由算法")]),v._v(" "),l("h3",{attrs:{id:"静态算法-dijkstra算法"}},[v._v("静态算法 - Dijkstra算法")]),v._v(" "),l("p",[v._v("算法内容略")]),v._v(" "),l("p",[v._v("需要在一开始就知道所有节点的路由，无法动态改变")]),v._v(" "),l("p",[v._v("能够用来生成“宿树”")]),v._v(" "),l("h3",{attrs:{id:"洪泛算法"}},[v._v("洪泛算法")]),v._v(" "),l("p",[v._v("发给除了源以外的所有端口，最后必定能到达目的地")]),v._v(" "),l("p",[v._v("缺点：开销非常大")]),v._v(" "),l("p",[v._v("优化：设置计时器/生命周期，只在网络中转发一定的次数。超过次数后不转发")]),v._v(" "),l("h3",{attrs:{id:"动态算法-距离矢量路由dvr"}},[v._v("动态算法 - 距离矢量路由DVR")]),v._v(" "),l("p",[v._v("Distance Vector Routing")]),v._v(" "),l("ul",[l("li",[v._v("每个节点给邻居发送一个echo包，邻居接收后回复。以此获得当前结点和邻居的距离")]),v._v(" "),l("li",[v._v("路由器内部保存的表的内容：当前路由器到某个路由器的距离")]),v._v(" "),l("li",[v._v("路由器给自己的邻居分享自己的路由表")])]),v._v(" "),l("p",[v._v("举例：A和B是邻居且距离为x，B和C是邻居且距离为y，A和C不是邻居。B给C分享自己的路由表时C可以知道“B能够到A而且距离为x”，C当前与A的距离为无穷（因为不是邻居），C通过B到A的距离为"),l("code",{pre:!0},[v._v("x+y")]),v._v("小于当前距离，那么C就会更新自己的路由表")]),v._v(" "),l("p",[l("strong",[v._v("无穷计数问题")]),v._v("：如果A突然宕机了（或AB之间的链路断了），B会发现A不可达了，B就会询问邻居C能不能到A。邻居C表示“没关系，我这里有一条距离为"),l("code",{pre:!0},[v._v("x+y")]),v._v("的到A的路径。B无法知道这条路径是经过自身的，那么B就会记下自己到A的距离为"),l("code",{pre:!0},[v._v("x+2y")]),v._v("。下一次信息更新时（比如C中的A过期了），C知道B有一条距离为"),l("code",{pre:!0},[v._v("x+2y")]),v._v("的路径到A，就记下C到A的距离为"),l("code",{pre:!0},[v._v("x+3y")]),v._v("。。。最后B和C到A距离会趋近于无穷")]),v._v(" "),l("p",[v._v("但是如果A修好了，所有节点会立刻发现到达A的路径变短了")]),v._v(" "),l("h3",{attrs:{id:"动态算法-链路状态路由lsr"}},[v._v("动态算法 - 链路状态路由LSR")]),v._v(" "),l("p",[v._v("Link State Routing")]),v._v(" "),l("p",[v._v("解决了距离矢量路由无穷计数的问题")]),v._v(" "),l("p",[v._v("花费大量空间"),l("strong",[v._v("保存整个网络拓扑")]),v._v("，防止出现无穷计数。可以使用分层网络来减少链路状态路由需要保存的数据量")]),v._v(" "),l("p",[l("strong",[v._v("链路状态路由的五个基本步骤")]),v._v("：")]),v._v(" "),l("ul",[l("li",[v._v("路由器启动时广播HELLO包以发现邻居")]),v._v(" "),l("li",[v._v("对邻居发送ECHO包以计算距离（或开销）")]),v._v(" "),l("li",[v._v("内部建立路由表：目的节点 - 距离，构造链路状态数据包LSP")]),v._v(" "),l("li",[v._v("使用扩散法发布链路状态数据包LSP使网络中各个路由器数据库同步")]),v._v(" "),l("li",[v._v("使用Dijkstra算法计算最短路径与路由")])]),v._v(" "),l("p",[v._v("为了控制洪泛，扩散数据库时每个分组含有一个序号，每次发送新的分组时序号加1。路由器接收到链路状态分组是如果序号是新的则分发，如果是重复的或小于记录的最大序号，则丢弃")]),v._v(" "),l("p",[v._v("问题与解决方案：")]),v._v(" "),l("ul",[l("li",[v._v("如果序号回转，可能会产生混淆\n"),l("ul",[l("li",[v._v("使用了32位序号，每秒产生一个链路状态分组的话也需要137年才可能回转")])])]),v._v(" "),l("li",[v._v("如果路由器崩溃，序号会重置或出错\n"),l("ul",[l("li",[v._v("增加年龄(Age)字段，每秒钟减1，为0时丢弃")]),v._v(" "),l("li",[v._v("链路状态包到达后等待一段时间，使这个包与其他已到达的来自同一路由器的链路状态包比较序号，丢弃重复包，保留新包")]),v._v(" "),l("li",[v._v("需要应答")])])])]),v._v(" "),l("h3",{attrs:{id:"两个动态算法的比较"}},[v._v("两个动态算法的比较")]),v._v(" "),l("table",[l("thead",[l("tr",[l("th",[v._v("属性")]),v._v(" "),l("th",[v._v("链路状态路由")]),v._v(" "),l("th",[v._v("距离矢量路由")])])]),v._v(" "),l("tbody",[l("tr",[l("td",[v._v("复杂性")]),v._v(" "),l("td",[v._v("向全网发送信息，复杂")]),v._v(" "),l("td",[v._v("仅与邻居交换，简单")])]),v._v(" "),l("tr",[l("td",[v._v("收敛速度")]),v._v(" "),l("td",[v._v("收敛时间稳定。可能存在路由震荡")]),v._v(" "),l("td",[v._v("收敛时间不稳定，可能出现路由循环和无穷计数")])]),v._v(" "),l("tr",[l("td",[v._v("健壮性")]),v._v(" "),l("td",[v._v("强，节点只计算自己的路由表")]),v._v(" "),l("td",[v._v("弱，错误会传播到全网")])])])]),v._v(" "),l("h2",{attrs:{id:"分级路由"}},[v._v("分级路由")]),v._v(" "),l("p",[v._v("减少路由表大小，但是生成的路径不一定是最短的")]),v._v(" "),l("p",[v._v("例子：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(579),alt:"5-4"}})]),v._v(" "),l("p",[v._v("节点1A不需要知道每个其他节点的跳数，只需要知道最低一级中邻居节点的距离和上级其他路由表簇的距离。所以1A的路由表只需要知道B、C的距离和其他簇的距离与下一跳目的地即可")]),v._v(" "),l("p",[v._v("需要注意的地方")]),v._v(" "),l("ol",[l("li",[v._v("节点1A不需要记录Region 1的路由，因为它自身就在Region 1内")]),v._v(" "),l("li",[v._v("节点1A到节点5C的最短路径（以跳数计算）应该是"),l("code",{pre:!0},[v._v("1A -> 1B -> 2A -> 2B -> 2D -> 5C")]),v._v("（5跳），而按照分级路由得到的路径是"),l("code",{pre:!0},[v._v("1A -> 1C -> 3B -> 4A -> 5A -> 5B -> 5C")]),v._v("（6跳），所以分级路由生成的路径不一定是最短的")])]),v._v(" "),l("h2",{attrs:{id:"拥塞控制"}},[v._v("拥塞控制")]),v._v(" "),l("h3",{attrs:{id:"拥塞控制与流量控制"}},[v._v("拥塞控制与流量控制")]),v._v(" "),l("p",[v._v("拥塞控制(congestion control)是一个全局性过程，设计主机、路由器等很多因素，确保子网能够承载用户提交的信息量")]),v._v(" "),l("p",[v._v("流量控制(flow control)与点到点通信量有关，主要解决快速发送方与慢速接收方的问题，是局部过程（点对点），一般基于反馈实现")]),v._v(" "),l("p",[v._v("即使网络不存在拥塞，流量控制也是必须的")]),v._v(" "),l("h3",{attrs:{id:"增加网络供给"}},[v._v("增加网络供给")]),v._v(" "),l("p",[v._v("升级网络，使带宽、速度等属性满足需求，防止拥塞的发生")]),v._v(" "),l("h3",{attrs:{id:"流量感知路由"}},[v._v("流量感知路由")]),v._v(" "),l("p",[v._v("如果从A到B存在多条路径，如路径R1与路径R2，数据从A发送到B，如果A感知到R1拥塞严重一些则尽量通过R2发送，如果感知到R2拥塞严重一些则尽量通过R1发送")]),v._v(" "),l("p",[v._v("问题："),l("strong",[v._v("路由震荡")])]),v._v(" "),l("p",[l("img",{attrs:{src:t(580),alt:"5-5"}})]),v._v(" "),l("p",[v._v("数据目的地是H，途径C，C感知到CF拥挤，但C知道它可以转发给E，因为E之前告诉C说E可以到H。所以C转发给E。E感知到EI拥挤，于是再次转发给C。那么包就在CE之间来回震荡，直到CF或EI不再拥挤")]),v._v(" "),l("h3",{attrs:{id:"准入控制接纳控制虚电路网络"}},[v._v("准入控制/接纳控制（虚电路网络）")]),v._v(" "),l("ul",[l("li",[v._v("许可控制\n"),l("ul",[l("li",[v._v("拥塞已经发生，在问题解决之前不允许建立新的虚电路。可以绕开发生拥塞的地区建立虚电路")])])]),v._v(" "),l("li",[v._v("资源预留\n"),l("ul",[l("li",[v._v("建立虚电路时在虚电路上预留资源防止拥塞")])])])]),v._v(" "),l("h3",{attrs:{id:"流量限流业务量减速"}},[v._v("流量限流/业务量减速")]),v._v(" "),l("p",[v._v("路由器根据当前队列长度来判断拥塞，队列太长时判断为拥塞并通知发送方")]),v._v(" "),l("ul",[l("li",[l("strong",[v._v("显式拥塞通知ECN(Explicit Congestion Notification)")]),v._v(" "),l("ul",[l("li",[v._v("拥挤的路由器转发分组时会给分组头部设置警告标识，警告标识被目的主机复制到ACK包中发给源端")])])]),v._v(" "),l("li",[v._v("抑制分组Choke Packets\n"),l("ul",[l("li",[v._v("路由器直接给源端返回一个抑制分组，并把当前包设置一个标记，防止后面的路由器也发送抑制分组")])])]),v._v(" "),l("li",[v._v("逐级跳(hop-by-hop)抑制分组\n"),l("ul",[l("li",[v._v("长距离网络中源主机响应慢，所以使抑制包在返回主机的途中对每一台经过的主机都有抑制效果而不是只对源主机起效")])])])]),v._v(" "),l("h3",{attrs:{id:"负载掉落负载丢弃load-shedding"}},[v._v("负载掉落/负载丢弃(load shedding)")]),v._v(" "),l("p",[v._v("RED(Random Early Detection)"),l("strong",[v._v("随机早期检测")])]),v._v(" "),l("p",[v._v("上面的方法都不能消除拥塞时，路由器"),l("strong",[v._v("主动丢包")]),v._v("（队列中的包），发送方检测到丢包会减速（结合TCP协议，在传输层减速）")]),v._v(" "),l("p",[v._v("随机"),l("strong",[v._v("早期")]),v._v("检测的含义：在拥塞发生之前就（主动）丢包。ECN也可能丢包，但是是被动丢包")]),v._v(" "),l("p",[v._v("丢弃策略：")]),v._v(" "),l("ul",[l("li",[v._v("随机丢弃")]),v._v(" "),l("li",[v._v("Wine & Milk策略\n"),l("ul",[l("li",[v._v("区分数据类型，如文件、多媒体等")])])]),v._v(" "),l("li",[v._v("分组自带优先级")])]),v._v(" "),l("h2",{attrs:{id:"流量整形traffic-shapping"}},[v._v("流量整形(Traffic Shapping)")]),v._v(" "),l("p",[v._v("用户发送到底层的数据是突发的、不平滑的，使用"),l("strong",[v._v("漏桶算法")]),v._v("来平滑数据。即漏桶有一定的容量，拥有一个恒定的输出速率。上层的突发数据先放入漏桶，由漏桶恒定输出")]),v._v(" "),l("p",[v._v("漏桶算法不够灵活，因此引入"),l("strong",[v._v("令牌桶")]),v._v("。基本思想：漏桶存放令牌，每隔一段时间产生一个令牌，令牌累计超过漏桶上界时就不再增加。分组传输之前必须获得一个令牌。传输之后删除该令牌")]),v._v(" "),l("p",[v._v("令牌为发送权，漏桶算法不允许积累发送权，而令牌桶可以积累发送权，最大为桶的大小。以便发送突发数据")]),v._v(" "),l("p",[v._v("丢弃的规则：漏桶存放数据，桶满了则丢弃数据分组。令牌桶存放令牌，而不存放数据，所以不会被数据填满")]),v._v(" "),l("p",[v._v("计算“以最大速率发送突发数据的持续时间”：通常最大输出速率大于令牌到达速率。如果初始令牌桶是空的，令牌已经耗尽而上层还有数据要发送，那么输出速率只能等于令牌生成速率。如果初始令牌桶是满的而上层有在瞬时无限的数据要发送，那么在令牌被耗尽之前是可以用最大输出速率输出的")]),v._v(" "),l("p",[v._v("已知突发时间长度"),l("code",{pre:!0},[v._v("S")]),v._v("，令牌桶容量"),l("code",{pre:!0},[v._v("C")]),v._v("字节，令牌生成速率"),l("code",{pre:!0},[v._v("p")]),v._v("字节/秒，最大输出速率"),l("code",{pre:!0},[v._v("M")]),v._v("字节/秒。则在时间"),l("code",{pre:!0},[v._v("S")]),v._v("内一共发出了"),l("code",{pre:!0},[v._v("MS = C + pS")]),v._v("字节数据，所以"),l("code",{pre:!0},[v._v("S = C / (M - p)")])]),v._v(" "),l("p",[v._v("可以在令牌桶后面再加一个漏桶实现更平滑的整形效果")]),v._v(" "),l("h2",{attrs:{id:"qosquality-of-service服务质量"}},[v._v("QoS(Quality of Service)服务质量")]),v._v(" "),l("p",[v._v("服务质量参数：")]),v._v(" "),l("ul",[l("li",[v._v("可靠性\n"),l("ul",[l("li",[v._v("丢包率")]),v._v(" "),l("li",[v._v("错包率")])])]),v._v(" "),l("li",[v._v("延迟")]),v._v(" "),l("li",[v._v("同一流中数据的"),l("strong",[v._v("抖动")])]),v._v(" "),l("li",[v._v("带宽 - 最大数据率")])]),v._v(" "),l("h2",{attrs:{id:"internetworkinginterconnection"}},[v._v("InternetWorking(Interconnection)")]),v._v(" "),l("blockquote",[l("p",[v._v("网络互连")])]),v._v(" "),l("p",[v._v("目的：连接使用协议不同的网络")]),v._v(" "),l("h3",{attrs:{id:"devices"}},[v._v("Devices")]),v._v(" "),l("p",[v._v("设备的选择")]),v._v(" "),l("p",[v._v("考虑以下设备")]),v._v(" "),l("ul",[l("li",[v._v("中继器(Repeater)、集线器(HUB)\n"),l("ul",[l("li",[v._v("工作在物理层")]),v._v(" "),l("li",[v._v("仅仅是将信号从一根导线移动到另一根导线")]),v._v(" "),l("li",[v._v("多为模拟设备")]),v._v(" "),l("li",[v._v("不了解网络协议")])])]),v._v(" "),l("li",[v._v("网桥(Bridges)、交换机(Switches)\n"),l("ul",[l("li",[v._v("工作在链路层")]),v._v(" "),l("li",[v._v("仅了解以太网协议，做轻微协议转换")])])]),v._v(" "),l("li",[v._v("路由器(Router)\n"),l("ul",[l("li",[v._v("网络层")]),v._v(" "),l("li",[l("strong",[v._v("合适")])])])]),v._v(" "),l("li",[v._v("网关(Gateway)等其他高层设备\n"),l("ul",[l("li",[v._v("以后介绍")])])])]),v._v(" "),l("p",[v._v("路由器工作机理：收到数据包后"),l("strong",[v._v("去掉包头")]),v._v("取出数据，需要转发时重新"),l("strong",[v._v("添加包头")]),v._v("并发送数据包，所以在网络互联中可以使用不同的包头以转发到不同网络")]),v._v(" "),l("p",[v._v("而网桥在转发数据包时并不去掉包头，直接转发整个数据包，因此并不能进行协议的处理。而且网桥基于MAC地址寻找目的而不是基于网络层地址")]),v._v(" "),l("h3",{attrs:{id:"tunneling隧道技术"}},[v._v("Tunneling隧道技术")]),v._v(" "),l("p",[v._v("如果发送方主机和目的主机使用的协议相同而中间经过的路径使用了不同的协议，可以使用**隧道(Tunneling)**技术")]),v._v(" "),l("p",[v._v("使用中间网络的协议封装源主机发送的带有协议的数据包")]),v._v(" "),l("h3",{attrs:{id:"internetwork-routing"}},[v._v("Internetwork Routing")]),v._v(" "),l("p",[v._v("因特网互连时使用一个两层的路由算法")]),v._v(" "),l("ul",[l("li",[v._v("域内(intradomain)协议或内部网关协议(interior gateway protocol)")]),v._v(" "),l("li",[v._v("域间(interdomain)协议或外部网关协议(exterior gateway protocol)")])]),v._v(" "),l("h2",{attrs:{id:"packet-fragment"}},[v._v("Packet Fragment")]),v._v(" "),l("p",[v._v("数据包分段")]),v._v(" "),l("p",[v._v("MTU: Maximum Transmission Unit （信道的）最大传输单元，理应是数据链路层的属性")]),v._v(" "),l("p",[v._v("决定MTU的因素")]),v._v(" "),l("ul",[l("li",[v._v("硬件")]),v._v(" "),l("li",[v._v("操作系统")]),v._v(" "),l("li",[v._v("协议")]),v._v(" "),l("li",[v._v("国标")]),v._v(" "),l("li",[v._v("为了减少错误")]),v._v(" "),l("li",[v._v("为了增加信道利用率")])]),v._v(" "),l("p",[v._v("分段方法")]),v._v(" "),l("ul",[l("li",[v._v("透明分段\n"),l("ul",[l("li",[v._v("分段后一旦到达新的路由器就重组")]),v._v(" "),l("li",[v._v("对接收方来说透明，感知不到被分段")])])]),v._v(" "),l("li",[v._v("非透明分段\n"),l("ul",[l("li",[v._v("一旦分段就不再重组")]),v._v(" "),l("li",[v._v("目的主机接收到分段后自行重组")])])])]),v._v(" "),l("p",[v._v("详见后文"),l("a",{attrs:{href:"#Fragmentation-and-Re-assembly"}},[v._v("IPv4分段与重装")])]),v._v(" "),l("h3",{attrs:{id:"path-mtu-discovery"}},[v._v("Path MTU Discovery")]),v._v(" "),l("p",[v._v("路径MTU发现")]),v._v(" "),l("p",[v._v("为了避免路由器分段，使源主机主动分段的策略")]),v._v(" "),l("p",[v._v("发送数据包时设置数据包不可被分段。如果某个路由器发现数据包太大则返回一个错误信息，源端根据此错误信息重新将数据分段并重发。缺点是增加了发送数据包的启动延迟")]),v._v(" "),l("h2",{attrs:{id:"the-network-layer-in-the-internet"}},[v._v("The Network Layer in the Internet")]),v._v(" "),l("p",[v._v("因特网中的网络层")]),v._v(" "),l("p",[v._v("IP协议(Internet Protocol)")]),v._v(" "),l("ul",[l("li",[v._v("使用最广泛的因特网协议")]),v._v(" "),l("li",[l("strong",[v._v("无连接")]),v._v("网络层协议")]),v._v(" "),l("li",[l("strong",[v._v("不可靠")]),v._v("(best-effort)，只提供"),l("strong",[v._v("尽力而为")]),v._v("的服务")])]),v._v(" "),l("h3",{attrs:{id:"ipv4-address"}},[v._v("IPv4 Address")]),v._v(" "),l("p",[v._v("IP地址的发展")]),v._v(" "),l("ul",[l("li",[v._v("1981-分类地址(Classful Addressing)")]),v._v(" "),l("li",[v._v("1985-子网(Subnetting)")]),v._v(" "),l("li",[v._v("1993-超网(Supernetting)")]),v._v(" "),l("li",[v._v("1995-无类别地址(Classless Addressing)")])]),v._v(" "),l("p",[v._v("IP地址代表网络借口，如果一个主机连接了多个网络就会有多个IP地址")]),v._v(" "),l("p",[v._v("路由器有多个接口，所以有多个IP地址")]),v._v(" "),l("p",[v._v("32位，每8位(一个字节)为一组，通常使用"),l("strong",[v._v("点分十进制")]),v._v("表示法")]),v._v(" "),l("h4",{attrs:{id:"classful-addressing"}},[v._v("Classful Addressing")]),v._v(" "),l("p",[v._v("IP地址由两部分组成")]),v._v(" "),l("ul",[l("li",[v._v("网络地址")]),v._v(" "),l("li",[v._v("主机地址")])]),v._v(" "),l("p",[v._v("路由选择就是找网络地址")]),v._v(" "),l("ul",[l("li",[v._v("A类地址\n"),l("ul",[l("li",[v._v("开头为0")]),v._v(" "),l("li",[v._v("7位网络地址")]),v._v(" "),l("li",[v._v("24位主机地址")])])]),v._v(" "),l("li",[v._v("B类地址\n"),l("ul",[l("li",[v._v("开头为10")]),v._v(" "),l("li",[v._v("14位网络地址")]),v._v(" "),l("li",[v._v("16位主机地址")])])]),v._v(" "),l("li",[v._v("C类地址\n"),l("ul",[l("li",[v._v("开头为110")]),v._v(" "),l("li",[v._v("21位网络地址")]),v._v(" "),l("li",[v._v("8位主机地址")])])]),v._v(" "),l("li",[v._v("D类地址\n"),l("ul",[l("li",[v._v("广播地址，略")])])]),v._v(" "),l("li",[v._v("E类地址\n"),l("ul",[l("li",[v._v("保留地址，略")])])])]),v._v(" "),l("p",[v._v("记法：ABC类地址的开头分别是1、2、3位，主机地址分别是24/16/8位，其他为网络地址")]),v._v(" "),l("p",[v._v("特殊地址：")]),v._v(" "),l("ul",[l("li",[v._v("全0地址=本机")]),v._v(" "),l("li",[v._v("网络地址全0+主机地址=本地网络主机")]),v._v(" "),l("li",[v._v("全1地址=本地网络广播")]),v._v(" "),l("li",[v._v("网络地址+主机地址全1=目标网络广播")]),v._v(" "),l("li",[v._v("127.x.x.x=环回地址")]),v._v(" "),l("li",[v._v("网络地址+主机地址全0=网络地址")])]),v._v(" "),l("h4",{attrs:{id:"default-mask"}},[v._v("Default Mask")]),v._v(" "),l("p",[v._v("默认掩码/缺省掩码")]),v._v(" "),l("p",[v._v("用来确定IP地址中的网络地址（和IP地址进行与运算）")]),v._v(" "),l("p",[v._v("ABC类网络的默认掩码分别为")]),v._v(" "),l("ul",[l("li",[v._v("255.0.0.0")]),v._v(" "),l("li",[v._v("255.255.0.0")]),v._v(" "),l("li",[v._v("255.255.255.0")])]),v._v(" "),l("h4",{attrs:{id:"subnetting"}},[v._v("Subnetting")]),v._v(" "),l("p",[v._v("子网，把一个大网络拆分成多个小网络")]),v._v(" "),l("p",[v._v("分类地址只有ABC三种尺寸，机构申请到一大块地址需要分配给不同部门。")]),v._v(" "),l("p",[v._v("子网划分对外部不可见")]),v._v(" "),l("p",[v._v("通过子网掩码(Subnet Mask)实现")]),v._v(" "),l("p",[v._v("子网划分技术：每个子网的地址数量必须是2的n次方，其中包括2个特殊地址（网络地址+广播地址），容纳主机数量为2"),l("sup",[v._v("n")]),v._v("-2。子网大小为m个地址（包括网络地址和广播地址）时，"),l("strong",[v._v("子网掩码后log2(m)位全是0")])]),v._v(" "),l("h4",{attrs:{id:"supernetting"}},[v._v("Supernetting")]),v._v(" "),l("p",[v._v("超网")]),v._v(" "),l("p",[v._v("分类地址只有ABC三种尺寸而且大块地址（即AB类地址）即将耗尽。解决方法：聚合小块地址（即C类地址），即"),l("strong",[v._v("路由聚合(Route Agregation)")])]),v._v(" "),l("p",[v._v("条件")]),v._v(" "),l("ul",[l("li",[v._v("C类地址的数量必须是2的n次方")]),v._v(" "),l("li",[v._v("地址必须连续"),l("strong",[v._v("且可通过掩码计算")])])]),v._v(" "),l("p",[v._v("使用超网掩码(Supernet Mask)实现")]),v._v(" "),l("h4",{attrs:{id:"classless-addressing"}},[v._v("Classless Addressing")]),v._v(" "),l("p",[v._v("无类别地址")]),v._v(" "),l("ul",[l("li",[v._v("不分类")]),v._v(" "),l("li",[v._v("网络地址长度不固定")])]),v._v(" "),l("p",[v._v("CIDR(Classless InterDomain Routing)无类别域间选路")]),v._v(" "),l("p",[v._v("使用前缀表示法(Slass Notation)，写为a.b.c.d/x，其中abcd仍为点分十进制中的十进制数，x为网络地址长度")]),v._v(" "),l("p",[v._v("类似于超网，需要满足")]),v._v(" "),l("ul",[l("li",[v._v("主机地址数量为2的n次方")]),v._v(" "),l("li",[v._v("地址连续且可通过掩码计算")])]),v._v(" "),l("p",[l("strong",[v._v("路由聚合的计算与最长前缀匹配法")])]),v._v(" "),l("p",[v._v("可用地址的计算")]),v._v(" "),l("ul",[l("li",[v._v("根据前缀得到网络地址长度")]),v._v(" "),l("li",[v._v("32-网络地址长度=主机地址长度n")]),v._v(" "),l("li",[v._v("共有2^n个地址，其中全0为网络地址，全1为广播地址")]),v._v(" "),l("li",[v._v("故可用地址数量为"),l("strong",[v._v("2^n-2")]),v._v("个")])]),v._v(" "),l("h4",{attrs:{id:"nat"}},[v._v("NAT")]),v._v(" "),l("p",[v._v("NAT Network Address Translation 网络地址翻译")]),v._v(" "),l("p",[v._v("为了解决IP地址不够用的问题")]),v._v(" "),l("p",[v._v("思路：使用两层IP地址，一层私有，一层共有。向外通信时需要把私有地址转换为共有地址（翻译）")]),v._v(" "),l("p",[v._v("私有地址的范围")]),v._v(" "),l("ul",[l("li",[v._v("10.0.0.0~10.255.255.255/8")]),v._v(" "),l("li",[v._v("172.16.0.0~192.31.255.255/12")]),v._v(" "),l("li",[v._v("192.168.0.0~192.168.255.255/16")])]),v._v(" "),l("p",[v._v("以上私有地址不可能出现在因特网上，只能出现在网络内部")]),v._v(" "),l("p",[v._v("设备：NAT盒子（可以被集成到路由器或ADSL调制解调器中）")]),v._v(" "),l("p",[v._v("举例：校园网、手机热点")]),v._v(" "),l("p",[v._v("新的问题：内部设备对外的IP地址都一样，NAT盒子如何把返回的数据送给指定的主机？")]),v._v(" "),l("p",[v._v("解决方法：使用传输层的端口。NAT盒子可以记录如下传输表")]),v._v(" "),l("ul",[l("li",[v._v("私有地址")]),v._v(" "),l("li",[v._v("私有端口")]),v._v(" "),l("li",[v._v("共有地址（只有一个）")]),v._v(" "),l("li",[v._v("共有端口")]),v._v(" "),l("li",[v._v("传输层协议")])]),v._v(" "),l("p",[v._v("通过端口确定私有地址")]),v._v(" "),l("h3",{attrs:{id:"ipv4-header"}},[v._v("IPv4 Header")]),v._v(" "),l("p",[v._v("IPv4协议头")]),v._v(" "),l("h4",{attrs:{id:"structure"}},[v._v("structure")]),v._v(" "),l("p",[v._v("至少20字节")]),v._v(" "),l("p",[l("img",{attrs:{src:t(581),alt:"5-1"}})]),v._v(" "),l("p",[v._v("重要的模块：")]),v._v(" "),l("ul",[l("li",[v._v("IHL\n"),l("ul",[l("li",[v._v("头长度，以32位为单位，最小值为5，即20字节，最大值为15，即60字节")])])]),v._v(" "),l("li",[v._v("Total Length\n"),l("ul",[l("li",[v._v("IP数据包总长度，单位为字节。即数据包最大65535字节")])])]),v._v(" "),l("li",[v._v("Identification\n"),l("ul",[l("li",[v._v("标识，表明此分段属于哪个数据报。相同数据报的标识相同")])])]),v._v(" "),l("li",[v._v("NU\n"),l("ul",[l("li",[v._v("not used")]),v._v(" "),l("li",[v._v("未使用")])])]),v._v(" "),l("li",[v._v("DF\n"),l("ul",[l("li",[v._v("Don’t Fragment")]),v._v(" "),l("li",[v._v("=1时不允许路由器把此数据报分段")])])]),v._v(" "),l("li",[v._v("MF\n"),l("ul",[l("li",[v._v("More Fragmens")]),v._v(" "),l("li",[v._v("=1时代表此数据报还有更多分段")])])]),v._v(" "),l("li",[v._v("Fragment offset\n"),l("ul",[l("li",[v._v("分段偏移量")]),v._v(" "),l("li",[v._v("单位为8字节")])])]),v._v(" "),l("li",[v._v("Time to live\n"),l("ul",[l("li",[v._v("生存期")]),v._v(" "),l("li",[v._v("防止数据报永远在网络中循环")])])]),v._v(" "),l("li",[v._v("Protocol\n"),l("ul",[l("li",[v._v("目标协议，接收方应该使用哪种传输层协议(TCP/UDP等)")])])]),v._v(" "),l("li",[v._v("Header checksum\n"),l("ul",[l("li",[v._v("头检验和")])])])]),v._v(" "),l("h4",{attrs:{id:"checksum"}},[v._v("checksum")]),v._v(" "),l("p",[v._v("头校验和，只校验IP头是否正确。因为IP头的错误会引起更大的问题（错误转发等）。数据的校验交给高层，因为每次经过网络层都校验太复杂")]),v._v(" "),l("p",[v._v("计算方法：")]),v._v(" "),l("ul",[l("li",[v._v("把IP头分为以16位为单位的块")]),v._v(" "),l("li",[v._v("把所有块相加（包括checksum块，这一块初始为全0），得到sum。"),l("strong",[v._v("超过16位的进位加到末位")])]),v._v(" "),l("li",[v._v("对sum取反，得到checksum")]),v._v(" "),l("li",[v._v("把checksum填充到checksum块")])]),v._v(" "),l("p",[v._v("接收方校验")]),v._v(" "),l("ul",[l("li",[v._v("把IP头分为以16位为单位的块")]),v._v(" "),l("li",[v._v("把所有块相加（包括checksum），得到sum。"),l("strong",[v._v("超过16位的进位加到末位")])]),v._v(" "),l("li",[v._v("sum理论值应该是全1")]),v._v(" "),l("li",[v._v("对sum取反，得到checksum")]),v._v(" "),l("li",[v._v("checksum理论值应该为全0")])]),v._v(" "),l("p",[v._v("为什么不使用CRC校验？使用CRC需要在包内包含生成多项式G(X)，在网络层不具有通用性")]),v._v(" "),l("h4",{attrs:{id:"fragmentation-and-re-assembly"}},[v._v("Fragmentation and Re-assembly")]),v._v(" "),l("p",[v._v("分段与重装")]),v._v(" "),l("p",[v._v("传输过程中可能会经过其他协议的网络，因为协议的MTU不同，所以数据可能会被分段与重装")]),v._v(" "),l("p",[v._v("重要：因为offset块的单位为8字节，所以"),l("strong",[v._v("非尾")]),v._v("数据段的"),l("strong",[v._v("数据长度")]),v._v("必须为"),l("strong",[v._v("8字节")]),v._v("的整数倍")]),v._v(" "),l("p",[v._v("举例：一个原始IP数据包有424字节，offset=0，more=0，DF=0，经过一个MTU为230字节的信道，如何分段？")]),v._v(" "),l("p",[v._v("解：424字节的数据包包括20字节协议头和404字节数据。230字节的信道减去20字节协议头还剩下210字节可以发送数据。第一段数据段长度必须是8字节的整数倍，所以应该是小于210的最大8的倍数208。所以第一段数据为")]),v._v(" "),l("ul",[l("li",[v._v("20字节头\n"),l("ul",[l("li",[v._v("offset=0")]),v._v(" "),l("li",[v._v("more=1")]),v._v(" "),l("li",[v._v("DF=0")])])]),v._v(" "),l("li",[v._v("208字节数据")])]),v._v(" "),l("p",[v._v("第二段数据是尾段，无长度限制")]),v._v(" "),l("ul",[l("li",[v._v("20字节头\n"),l("ul",[l("li",[v._v("offset=208/8=26")]),v._v(" "),l("li",[v._v("more=0")]),v._v(" "),l("li",[v._v("DF=0")])])]),v._v(" "),l("li",[v._v("196字节数据")])]),v._v(" "),l("h2",{attrs:{id:"ipv6"}},[v._v("IPv6")]),v._v(" "),l("ul",[l("li",[v._v("更长的地址 128位")]),v._v(" "),l("li",[v._v("更"),l("strong",[v._v("简单")]),v._v("的协议头 路由器处理更迅速\n"),l("ul",[l("li",[v._v("只是简单，"),l("strong",[v._v("因为有扩展头和选项字段的存在，IPv6的协议头比IPv4更长")]),v._v("，只是路由器转发时不需要考虑罢了")])])]),v._v(" "),l("li",[v._v("新的“选项(Options)”字段 提供更多元功能")]),v._v(" "),l("li",[v._v("更安全 新的安全措施也已经应用到了IPv4中")]),v._v(" "),l("li",[v._v("服务质量更高")])]),v._v(" "),l("h3",{attrs:{id:"ipv6-header"}},[v._v("IPv6 Header")]),v._v(" "),l("p",[v._v("相比于IPv4协议头的13个字段，IPv6协议头只有8个最主要的字段。其他内容通过“选项”字段添加")]),v._v(" "),l("p",[v._v("下图为"),l("strong",[v._v("IP固定头")]),v._v("，即必须的头（无选项字段）\n"),l("img",{attrs:{src:t(582),alt:"5-2"}})]),v._v(" "),l("ul",[l("li",[v._v("Version 版本 4位\n"),l("ul",[l("li",[v._v("IPv4为4 IPv6为6")])])]),v._v(" "),l("li",[v._v("Traffic class/Diff.services/PRI/Priority of packets 区分服务 8位\n"),l("ul",[l("li",[v._v("用来描述数据包的服务质量，对实时传递的要求")])])]),v._v(" "),l("li",[v._v("Flow label 流标签 20位\n"),l("ul",[l("li",[v._v("发送方和接收方之间存在一个“流”，在服务质量需要时路由器会为流预留带宽以保证这个流的延迟要求得到满足")])])]),v._v(" "),l("li",[v._v("Payload Length 有效载荷长度 16位\n"),l("ul",[l("li",[v._v("类似于IPv4中的总长度(Total Length)，但是不完全相同")]),v._v(" "),l("li",[v._v("记录的是IPv6的40字节"),l("strong",[v._v("固定头后面")]),v._v("还有多少字节（选项字段+数据）")])])]),v._v(" "),l("li",[v._v("Next Header 下一个头 8位\n"),l("ul",[l("li",[v._v("与IPv4的主要区别")]),v._v(" "),l("li",[v._v("IPv6使用"),l("strong",[v._v("扩展头")]),v._v("来实现更多的功能，类似一个属性链表。如果当前头是最后一个IP头，那么下一个头指向传输层协议(TCP/UDP等)")])])]),v._v(" "),l("li",[v._v("Hop Limit 跳数限制 8位 略")]),v._v(" "),l("li",[v._v("源地址与目的地址各32位*4=128位 详见"),l("a",{attrs:{href:"#IPv6-Address"}},[v._v("IPv6 Address")])])]),v._v(" "),l("h3",{attrs:{id:"ipv6-address"}},[v._v("IPv6 Address")]),v._v(" "),l("p",[v._v("128位，16字节，最后4字节为IPv4地址")]),v._v(" "),l("p",[v._v("表示方法："),l("strong",[v._v("冒分十六进制")]),v._v("，16个字节分为8组书写，每组4个16进制数，组之间使用冒号隔开")]),v._v(" "),l("p",[v._v("如8000:0000:0000:0000:0123:4567:89AB:CDEF")]),v._v(" "),l("p",[v._v("由于地址很长，有如下三个缩写规则")]),v._v(" "),l("ol",[l("li",[v._v("如果存在完全由0构成的一个组或连续多个组，可以使用两个冒号代替\n"),l("ul",[l("li",[v._v("上述地址可缩写为8000::0123:4567:89AB:CDEF")]),v._v(" "),l("li",[v._v("为防止混淆，这种缩写方式只能使用一次")])])]),v._v(" "),l("li",[v._v("一个组中的前导0可以省略\n"),l("ul",[l("li",[v._v("上述地址可以缩写为8000::123:4567:89AB:CDEF")])])]),v._v(" "),l("li",[v._v("IPv4地址可以表示为两个冒号加原本点分十进制数\n"),l("ul",[l("li",[v._v("上述地址可以缩写为::192.31.20.46")])])])]),v._v(" "),l("h3",{attrs:{id:"ipv4-vs-ipv6"}},[v._v("IPv4 vs IPv6")]),v._v(" "),l("p",[v._v("对比IPv4与IPv6，后者为了优化取消了哪些字段")]),v._v(" "),l("ul",[l("li",[v._v("取消了IHL字段，因为IPv6协议拥有固定头，长度是定值")]),v._v(" "),l("li",[v._v("取消了Protocol字段，因为IPv6有下一个协议字段")]),v._v(" "),l("li",[v._v("取消了分段相关的字段，根据"),l("a",{attrs:{href:"#Path-MTU-Discovery"}},[v._v("路径MTU发现")]),v._v("策略使防止路由器分段")]),v._v(" "),l("li",[v._v("取消Checksum校验和字段，当今网络已经比较可靠。相信数据链路层的校验")])]),v._v(" "),l("h2",{attrs:{id:"icmpinternet-control-message-protocol"}},[v._v("ICMP(Internet Control Message Protocol)")]),v._v(" "),l("p",[v._v("因特网报文控制协议")]),v._v(" "),l("p",[v._v("用来监视与报告路由器处理数据包时产生的异常。如路径MTU发现时出现的MTU不足以发送数据包的异常。协议定义了一系列事件，这些事件被触发时将被封装在IP数据包中报告给源主机。")]),v._v(" "),l("p",[v._v("常见消息：")]),v._v(" "),l("ul",[l("li",[v._v("Destination unreachable 目的地不可达\n"),l("ul",[l("li",[v._v("Packet could not be delivered 数据包无法传递")]),v._v(" "),l("li",[v._v("如果路由器无法定位一个目标或路由器MTU不足以发送数据包时报告")])])]),v._v(" "),l("li",[v._v("Time exceeded 超时\n"),l("ul",[l("li",[v._v("Time to live field hit 0 TTL字段减少到0")])])]),v._v(" "),l("li",[v._v("Parameter problem 参数问题\n"),l("ul",[l("li",[v._v("Invalid header field 协议头出错")])])]),v._v(" "),l("li",[v._v("Source quench 源抑制\n"),l("ul",[l("li",[v._v("Choke packet 使源主机减速（现在很少用）")])])]),v._v(" "),l("li",[v._v("Redirect 重定向\n"),l("ul",[l("li",[v._v("Teach a router about geography")]),v._v(" "),l("li",[v._v("当一个数据包似乎被错误路由时报告")])])]),v._v(" "),l("li",[v._v("Echo and echo reply 回显与回显应答\n"),l("ul",[l("li",[v._v("Check if a machine is alive 判断某主机是否可达(ping)")])])]),v._v(" "),l("li",[v._v("Timestamp request/reply 时间戳请求/应答\n"),l("ul",[l("li",[v._v("Same as Echo, but with timestamp 和回显类似，应答消息中还包含了请求消息的到达时间和应答消息的发出时间，可以用来测试网络性能")])])]),v._v(" "),l("li",[v._v("Router advertisement/solicitation 路由器通告/路由器恳求\n"),l("ul",[l("li",[v._v("Find a nearby router 寻找附近路由器")])])])]),v._v(" "),l("h2",{attrs:{id:"arpaddress-resolution-protocol"}},[v._v("ARP(Address Resolution Protocol)")]),v._v(" "),l("p",[v._v("地址解析协议，IP Address -> MAC Address")]),v._v(" "),l("h3",{attrs:{id:"example"}},[v._v("Example")]),v._v(" "),l("p",[v._v("考虑如下网络")]),v._v(" "),l("p",[l("img",{attrs:{src:t(583),alt:"5-3"}})]),v._v(" "),l("ol",[l("li",[v._v("第一种情况-同一局域网传输\n"),l("ul",[l("li",[v._v("假设Host1试图给Host2发送数据且Host1已经知道Host2的IP地址。交换机需要处理这个转发过程。交换机通过MAC地址工作，所以Host1需要发送的应该有Host2的MAC地址。但是Host1只通过DNS或其他方式得到了Host2的IP地址。如何使Host1发送的包内含有Host2的MAC地址？可以在Host1内保存一个配置文件（一个表），记录IP和MAC的对应关系。但是这个表会非常大，难以保存或查找。")]),v._v(" "),l("li",[v._v("解决方案：Host1在以太网发送一个广播包，请拥有Host2的IP地址的主机返回其MAC地址。以太网内所有主机都会接收到但是只有Host2会应答。Host2发送自己的MAC地址时也需要知道Host1的MAC地址（否则就只能像Host1一样广播），所以Host1在一开始发送广播包时应该带上自己的MAC地址。现在Host1和Host2都已经知道了对方的MAC地址，就可以正常通信。")])])]),v._v(" "),l("li",[v._v("第二种情况-非同一局域网传输\n"),l("ul",[l("li",[v._v("假设Host1试图给Host3发送数据且已经知道了Host3的IP地址。Host1发现Host3的IP地址所在网络和自己的网络不同，所以需要把包发给路由器。Host1已经知道了Router的IP地址但是不知道MAC地址。和第一种情况一样。使用同样方法解决。")]),v._v(" "),l("li",[v._v("Router也需要发送包给Host3，仍然使用同样的方法。所以在不同网络内发送数据包需要多次上述过程。")])])])]),v._v(" "),l("p",[v._v("优化：")]),v._v(" "),l("ul",[l("li",[v._v("每台主机保存一个规模比较小的IP地址与MAC地址的映射表")]),v._v(" "),l("li",[v._v("当有主机获得新的IP地址时发起一次广播，请求查找自己的IP地址。如果有别的主机应答说明IP地址分配有问题，网络管理员需要解决这个问题。如果没有应答则IP分配正确，而且其他主机还获得了这个主机的IP与MAC映射表。这被称为“"),l("strong",[v._v("免费ARP(Gratuitous ARP)")]),v._v("” (Gratuitous 免费的 无偿的 无理由的)")])]),v._v(" "),l("p",[v._v("注意路由器不会转发ARP包，因为这是以太网级别的包")]),v._v(" "),l("h3",{attrs:{id:"conclusion"}},[v._v("Conclusion")]),v._v(" "),l("p",[v._v("结论：ARP协议工作流程如下。假设Host1和Host2在同一个局域网，Host1试图主动和Host2建立连接。Host1知道Host2的IP地址")]),v._v(" "),l("ol",[l("li",[v._v("Host1在局域网内广播自己的IP-MAC映射表，并请求拥有Host2的IP的主机应答")]),v._v(" "),l("li",[v._v("Host2发现自己的IP地址和ARP请求中的地址相符，于是缓存下Host1的IP-MAC映射，给Host1发送自己的IP-MAC映射（非广播）")]),v._v(" "),l("li",[v._v("连接建立。开始通信")])]),v._v(" "),l("h2",{attrs:{id:"dhcpdynamic-host-configuration-protocol"}},[v._v("DHCP(Dynamic Host Configuration Protocol)")]),v._v(" "),l("p",[v._v("动态主机配置协议")]),v._v(" "),l("p",[v._v("解决的问题：给主机分配IP地址")]),v._v(" "),l("p",[l("img",{attrs:{src:t(584),alt:"5-6"}})]),v._v(" "),l("p",[v._v("电脑开机时发送一个DHCP包向DHCP服务器请求自己的IP地址。DHCP会返回一个IP地址和一个"),l("strong",[v._v("租赁期")]),v._v("，在租赁期满之前主机必须请求"),l("strong",[v._v("DHCP续订")]),v._v("，否则DHCP服务器将收回IP地址，防止DHCP的地址池被无效主机耗尽")]),v._v(" "),l("p",[v._v("DHCP服务器可能又多个，返回多个IP地址，主机需要选择一个IP地址并返回租赁信息告诉对应的DHCP服务器：我已经选中了这个IP地址")]),v._v(" "),l("h2",{attrs:{id:"riprouting-information-protocol"}},[v._v("RIP(Routing Information Protocol)")]),v._v(" "),l("p",[v._v("路由信息协议")]),v._v(" "),l("ul",[l("li",[v._v("应用在自治系统(AS)内部")]),v._v(" "),l("li",[v._v("使用距离矢量路由")]),v._v(" "),l("li",[v._v("距离使用跳数计算，最大跳数限制为16")]),v._v(" "),l("li",[v._v("使用UDP包")])]),v._v(" "),l("p",[v._v("三个主要思想：")]),v._v(" "),l("ul",[l("li",[v._v("分享自己知道的路由（距离矢量路由）")]),v._v(" "),l("li",[v._v("只给自己的直接邻居分享自己的路由表")]),v._v(" "),l("li",[v._v("没隔一段固定时间分享一次")])]),v._v(" "),l("p",[v._v("主要问题：")]),v._v(" "),l("ul",[l("li",[v._v("路由表冗余的比对升级过程")]),v._v(" "),l("li",[v._v("无穷计数响应慢（距离矢量路由）")]),v._v(" "),l("li",[v._v("路由表很大")])]),v._v(" "),l("h2",{attrs:{id:"ospfopen-shortest-path-first"}},[v._v("OSPF(Open Shortest Path First)")]),v._v(" "),l("p",[v._v("开放的最短路径优先，内部网关路由协议，域内路由算法")]),v._v(" "),l("ul",[l("li",[v._v("自治系统内部")]),v._v(" "),l("li",[v._v("使用链路状态路由")]),v._v(" "),l("li",[v._v("直接使用IP包")])]),v._v(" "),l("h2",{attrs:{id:"routing-protocol-summary"}},[v._v("Routing Protocol Summary")]),v._v(" "),l("table",[l("thead",[l("tr",[l("th"),v._v(" "),l("th",[v._v("RIP")]),v._v(" "),l("th",[v._v("OSPF")]),v._v(" "),l("th",[v._v("BGP")])])]),v._v(" "),l("tbody",[l("tr",[l("td",[v._v("应用范围")]),v._v(" "),l("td",[v._v("AS内部")]),v._v(" "),l("td",[v._v("AS内部")]),v._v(" "),l("td",[v._v("AS之间")])]),v._v(" "),l("tr",[l("td",[v._v("选路算法")]),v._v(" "),l("td",[v._v("距离矢量")]),v._v(" "),l("td",[v._v("链路状态")]),v._v(" "),l("td",[v._v("路径矢量")])]),v._v(" "),l("tr",[l("td",[v._v("路由器交换的信息")]),v._v(" "),l("td",[v._v("到各网络的距离")]),v._v(" "),l("td",[v._v("网络拓扑结构")]),v._v(" "),l("td",[v._v("到各网络的路径")])]),v._v(" "),l("tr",[l("td",[v._v("无穷计数问题")]),v._v(" "),l("td",[v._v("有")]),v._v(" "),l("td",[v._v("无")]),v._v(" "),l("td",[v._v("无")])]),v._v(" "),l("tr",[l("td",[v._v("路由报文承载协议")]),v._v(" "),l("td",[v._v("UDP")]),v._v(" "),l("td",[v._v("IP")]),v._v(" "),l("td",[v._v("TCP")])])])])])}]};v.exports={attributes:{layout:"collection",title:"The Network Layer 网络层",collection:"ComputerNetwork"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},579:function(v,_,t){v.exports=t.p+"img/5-4.bca0ccd.png"},580:function(v,_,t){v.exports=t.p+"img/5-5.5743aa1.png"},581:function(v,_,t){v.exports=t.p+"img/5-1.2e70311.png"},582:function(v,_,t){v.exports=t.p+"img/5-2.46a599f.png"},583:function(v,_,t){v.exports=t.p+"img/5-3.256927f.png"},584:function(v,_,t){v.exports=t.p+"img/5-6.3ebe5fb.png"}}]);