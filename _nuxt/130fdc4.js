(window.webpackJsonp=window.webpackJsonp||[]).push([[54,431,432,433,434,435],{1310:function(v,_,l){const t={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"frontmatter-markdown"},[t("p",[v._v("也叫 介质接入控制子层")]),v._v(" "),t("h2",{attrs:{id:"解决问题"}},[v._v("解决问题")]),v._v(" "),t("ul",[t("li",[v._v("信道分配问题")]),v._v(" "),t("li",[v._v("多路访问协议")]),v._v(" "),t("li",[v._v("以太网")]),v._v(" "),t("li",[v._v("无线局域网")]),v._v(" "),t("li",[v._v("数据链路层交换")])]),v._v(" "),t("h2",{attrs:{id:"数据链路类型"}},[v._v("数据链路类型")]),v._v(" "),t("ul",[t("li",[v._v("Point to point links点-点链路\n"),t("ul",[t("li",[v._v("一个发送方一个接收方")]),v._v(" "),t("li",[v._v("链接建立后地址不必传输")]),v._v(" "),t("li",[v._v("可靠的通信")]),v._v(" "),t("li",[v._v("协议\n"),t("ul",[t("li",[v._v("HDLC")]),v._v(" "),t("li",[v._v("PPP")])])])])]),v._v(" "),t("li",[v._v("Broadcast links广播链路\n"),t("ul",[t("li",[v._v("很多发送方和可接受到信息的接收方")]),v._v(" "),t("li",[v._v("争夺共有的信道")]),v._v(" "),t("li",[v._v("必须传输地址")]),v._v(" "),t("li",[v._v("协议\n"),t("ul",[t("li",[v._v("ALOHA")]),v._v(" "),t("li",[v._v("CSMA/CD")]),v._v(" "),t("li",[v._v("MACA")])])])])])]),v._v(" "),t("h2",{attrs:{id:"信道分配问题"}},[v._v("信道分配问题")]),v._v(" "),t("p",[v._v("多重接入/信道分配策略")]),v._v(" "),t("ul",[t("li",[v._v("静态分配\n"),t("ul",[t("li",[v._v("频分复用")]),v._v(" "),t("li",[v._v("时分复用")]),v._v(" "),t("li",[v._v("波分复用")]),v._v(" "),t("li",[v._v("同步时分复用")])])]),v._v(" "),t("li",[v._v("动态分配\n"),t("ul",[t("li",[v._v("异步时分复用/统计时分复用")]),v._v(" "),t("li",[v._v("随机接入协议\n"),t("ul",[t("li",[v._v("ALOHA")]),v._v(" "),t("li",[v._v("CSMA")]),v._v(" "),t("li",[v._v("CSMA/CD")])])]),v._v(" "),t("li",[v._v("接入控制协议\n"),t("ul",[t("li",[v._v("Polling")]),v._v(" "),t("li",[v._v("Token Ring")])])])])])]),v._v(" "),t("h3",{attrs:{id:"共享信道评价一个协议优劣的指标"}},[v._v("共享信道评价一个协议优劣的指标")]),v._v(" "),t("ul",[t("li",[v._v("低负载时的时延")]),v._v(" "),t("li",[v._v("高负载时的吞吐量")])]),v._v(" "),t("h3",{attrs:{id:"static-channel-allocation静态信道分配"}},[v._v("Static Channel Allocation静态信道分配")]),v._v(" "),t("p",[v._v("时分复用接入TDMA(Time division multiple access)")]),v._v(" "),t("p",[v._v("把信道分配为若干个固定的时槽 空闲时槽被浪费")]),v._v(" "),t("h2",{attrs:{id:"multiple-access-protocols多点接入协议"}},[v._v("Multiple Access Protocols多点接入协议")]),v._v(" "),t("p",[v._v("注意这些协议是局域网内的主机（网卡）的协议，而不是链路层设备交换机使用的协议。交换机只是存储转发罢了")]),v._v(" "),t("h3",{attrs:{id:"pure-aloha"}},[v._v("Pure ALOHA")]),v._v(" "),t("ul",[t("li",[v._v("有帧就发送 不考虑其他站（即使信道忙）")]),v._v(" "),t("li",[v._v("如果ACK没收到就重发")]),v._v(" "),t("li",[v._v("重发前等待随机时长")]),v._v(" "),t("li",[v._v("一直重发至发送成功")])]),v._v(" "),t("p",[v._v("简单但低效 最大利用率约18.4%")]),v._v(" "),t("p",[v._v("脆弱期/易冲突期为"),t("strong",[v._v("2T")]),v._v("，T为"),t("strong",[v._v("单程端到端传播时延")])]),v._v(" "),t("h3",{attrs:{id:"slotted-aloha-分槽时隙aloha"}},[v._v("Slotted ALOHA 分槽/时隙ALOHA")]),v._v(" "),t("ul",[t("li",[v._v("每个槽的时长为T")]),v._v(" "),t("li",[v._v("需要中心时钟或其他同步措施")]),v._v(" "),t("li",[v._v("错帧的产生：要么丢失要么完全重叠")]),v._v(" "),t("li",[v._v("最大利用率36.8%")])]),v._v(" "),t("h3",{attrs:{id:"载波监听多路访问协议carrier-sense-multiple-access-protocols"}},[v._v("载波监听多路访问协议Carrier Sense Multiple Access Protocols")]),v._v(" "),t("ul",[t("li",[v._v("发送前监听信道(Carrier Sense载波监听)")]),v._v(" "),t("li",[v._v("试图将脆弱期降低至T\n"),t("ul",[t("li",[v._v("因为传播时延T通常小于发送时延")])])])]),v._v(" "),t("p",[v._v("CSMA策略")]),v._v(" "),t("ul",[t("li",[v._v("如果信道空闲 有几率发送帧")]),v._v(" "),t("li",[v._v("如果信道忙 等待至空闲")]),v._v(" "),t("li",[v._v("ACK超时未收则重发")]),v._v(" "),t("li",[v._v("脆弱期为1t 但是只能通过ACK判断是否出错")])]),v._v(" "),t("p",[v._v("CSMA分类：")]),v._v(" "),t("ul",[t("li",[v._v("Nonpersistent CSMA 非坚持CSMA\n"),t("ul",[t("li",[v._v("如果信道忙 等到随机时间后再次监听（不坚持监听）")])])]),v._v(" "),t("li",[v._v("p-persistent CSMA p-坚持CSMA\n"),t("ul",[t("li",[v._v("有信息需要发送时，坚持监听信道")]),v._v(" "),t("li",[v._v("信道空闲时以概率p发送帧")]),v._v(" "),t("li",[v._v("p越小 越不容易冲突 效率越高")])])]),v._v(" "),t("li",[v._v("1-Persistent CSMA 1-坚持CSMA\n"),t("ul",[t("li",[v._v("有信息需要发送时，坚持监听信道")]),v._v(" "),t("li",[v._v("信道空闲时立即发送，也就是信道空闲时以概率1发送帧")])])])]),v._v(" "),t("p",[v._v("效率对比：")]),v._v(" "),t("ul",[t("li",[v._v("1坚持CSMA\n"),t("ul",[t("li",[v._v("低负载（轻载）高吞吐量低时延")]),v._v(" "),t("li",[v._v("高负载（重载）低吞吐量")])])]),v._v(" "),t("li",[v._v("非坚持CSMA\n"),t("ul",[t("li",[v._v("高负载（重载）高吞吐量")])])])]),v._v(" "),t("h3",{attrs:{id:"随机接入协议总结"}},[v._v("随机接入协议总结")]),v._v(" "),t("ul",[t("li",[v._v("Pure ALOHA\n"),t("ul",[t("li",[v._v("时间连续")]),v._v(" "),t("li",[v._v("无载波监听")]),v._v(" "),t("li",[v._v("脆弱期2T")])])]),v._v(" "),t("li",[v._v("分槽ALOHA\n"),t("ul",[t("li",[v._v("时间分槽")]),v._v(" "),t("li",[v._v("无载波监听")]),v._v(" "),t("li",[v._v("脆弱期T")])])]),v._v(" "),t("li",[v._v("CSMA\n"),t("ul",[t("li",[v._v("载波监听")]),v._v(" "),t("li",[v._v("脆弱期为传播时延T")])])]),v._v(" "),t("li",[v._v("三者共同点\n"),t("ul",[t("li",[t("strong",[v._v("只有计时器到期了 发送方才知道出错")])])])])]),v._v(" "),t("h3",{attrs:{id:"csmacd带冲突检测的载波监听多点接入csma-with-collision-detection"}},[v._v("CSMA/CD带冲突检测的载波监听多点接入(CSMA with Collision Detection)")]),v._v(" "),t("ul",[t("li",[v._v("发送时也监听信道")]),v._v(" "),t("li",[v._v("发送时发现冲突则停止发送并发送jam信号（冲突强化信号）")]),v._v(" "),t("li",[v._v("发送jam信号之后随机等待一段时间重发")]),v._v(" "),t("li",[v._v("半双工")]),v._v(" "),t("li",[v._v("节省时间和带宽")]),v._v(" "),t("li",[v._v("常用于以太局域网")])]),v._v(" "),t("p",[v._v("三个状态")]),v._v(" "),t("ul",[t("li",[v._v("争用期Contention period")]),v._v(" "),t("li",[v._v("传输期Transmission period")]),v._v(" "),t("li",[v._v("空闲期Idle period")])]),v._v(" "),t("p",[v._v("争用槽Contention slots 时长为2T\n一个站点最多需要2T发现冲突")]),v._v(" "),t("h4",{attrs:{id:"1-persistant-csmacd"}},[v._v("1-persistant CSMA/CD")]),v._v(" "),t("p",[v._v("1-坚持CSMA/CD的重传等待时间：")]),v._v(" "),t("p",[v._v("退避时在0-d中随机选择一个数k，等待k时间后检测信道")]),v._v(" "),t("ul",[t("li",[v._v("如果信道空闲 发送")]),v._v(" "),t("li",[v._v("如果信道忙 等待至空闲后直接发送")]),v._v(" "),t("li",[v._v("如果再次冲突 重复以上过程")]),v._v(" "),t("li",[v._v("如果冲突次数达到一个最大值（通常16）停止发送 上报网络层")]),v._v(" "),t("li",[v._v("二进制指数退避算法(Binary Exponential Backoff Algorithm)\n"),t("ul",[t("li",[v._v("从0到2^k-1中挑选一个数r")]),v._v(" "),t("li",[v._v("重传等待时间=r*某个重传时间常量")]),v._v(" "),t("li",[v._v("冲突次数达到最大值时上报网络层")])])])]),v._v(" "),t("h2",{attrs:{id:"无冲突协议collision-free-protocols"}},[v._v("无冲突协议Collision-Free Protocols")]),v._v(" "),t("h3",{attrs:{id:"basic-bit-map-protocol基本位图协议"}},[v._v("Basic Bit-map Protocol基本位图协议")]),v._v(" "),t("p",[v._v("预留协议：实际发送信息之前先广播发送请求")]),v._v(" "),t("ul",[t("li",[v._v("共享信道上有N个站，竞争周期分为N个时槽，如果有站要发送帧，就在对应的时槽内发送1")]),v._v(" "),t("li",[v._v("N个时槽之后，每个站都知道哪些站要发送，则按照站的序号发送数据")]),v._v(" "),t("li",[v._v("每个站每次发送的数据量是相同的，这样所有站就能够知道下一次发送竞争时槽信号的时间")])]),v._v(" "),t("p",[t("img",{attrs:{src:l(587),alt:"4-1"}})]),v._v(" "),t("h3",{attrs:{id:"binary-countdown二进制下数法"}},[v._v("Binary Countdown二进制下数法")]),v._v(" "),t("ul",[t("li",[v._v("所有站点地址用等长二进制串表示")]),v._v(" "),t("li",[v._v("如果需要占用信道，则广播串")]),v._v(" "),t("li",[v._v("各个地址做与操作")]),v._v(" "),t("li",[v._v("如果存在某个站点的串大于当前串，则放弃发送请求")])]),v._v(" "),t("p",[v._v("举例：")]),v._v(" "),t("p",[t("img",{attrs:{src:l(588),alt:"4-2"}})]),v._v(" "),t("h2",{attrs:{id:"无线局域网中的隐蔽站与暴露站问题"}},[v._v("无线局域网中的隐蔽站与暴露站问题")]),v._v(" "),t("h3",{attrs:{id:"隐蔽站"}},[v._v("隐蔽站")]),v._v(" "),t("p",[t("img",{attrs:{src:l(589),alt:"4-3"}})]),v._v(" "),t("p",[v._v("A和C无法感知对方，都以为B是空闲的，都给B发送数据，导致冲突")]),v._v(" "),t("p",[v._v("因为A和C相互隐蔽，故称为隐蔽站问题")]),v._v(" "),t("h3",{attrs:{id:"暴露站"}},[v._v("暴露站")]),v._v(" "),t("p",[t("img",{attrs:{src:l(590),alt:"4-4"}})]),v._v(" "),t("p",[v._v("B给A发送数据，C想给D发送数据，但是C检测到了信道被占用而不发送")]),v._v(" "),t("p",[v._v("因为C暴露在B的传输范围内，故称为暴露站问题")]),v._v(" "),t("h3",{attrs:{id:"结论"}},[v._v("结论")]),v._v(" "),t("p",[v._v("传统CSMA协议不适用于无线局域网")]),v._v(" "),t("p",[v._v("解决方案：MACA")]),v._v(" "),t("h2",{attrs:{id:"macamultiple-access-with-collision-avoidance带冲突避免的多点接入"}},[v._v("MACA(Multiple Access with Collision Avoidance)带冲突避免的多点接入")]),v._v(" "),t("ul",[t("li",[v._v("发送方发送请求帧RTS(Request To Send)，包括源地址、目的地址与此次会话持续时间")]),v._v(" "),t("li",[v._v("若接收方空闲，回复一个响应帧CTS(Clear To Send)，包括RTS中的会话持续时间（防止没有收到RTS的站不知道会话持续时间）")]),v._v(" "),t("li",[v._v("周围站点在此会话时间内避免发送数据")])]),v._v(" "),t("h2",{attrs:{id:"以太网拓扑结构"}},[v._v("以太网拓扑结构")]),v._v(" "),t("ul",[t("li",[v._v("总线型 - 传统以太网")]),v._v(" "),t("li",[v._v("星型 - 交换以太网")]),v._v(" "),t("li",[v._v("环形 - 令牌环")])]),v._v(" "),t("h2",{attrs:{id:"传统以太网中的物理层"}},[v._v("传统以太网中的物理层")]),v._v(" "),t("p",[v._v("传统以太网的传输介质：")]),v._v(" "),t("ul",[t("li",[v._v("粗缆10BASE5")]),v._v(" "),t("li",[v._v("细缆10BASE2")]),v._v(" "),t("li",[v._v("双绞线10BASE-T")]),v._v(" "),t("li",[v._v("光缆10BASE-F")])]),v._v(" "),t("h2",{attrs:{id:"mac与llc的划分"}},[v._v("MAC与LLC的划分")]),v._v(" "),t("p",[v._v("数据链路层包括了LLC（逻辑链路控制子层）和MAC（媒体访问控制子层），从功能上看显然LLC的层级要比MAC高一些。MAC负责管理与物理层的接入，LLC负责控制逻辑链路")]),v._v(" "),t("p",[v._v("对于同一个LLC，下面可能有多个MAC，LLC隐藏了不同MAC子层的差异，为网络层提供单一格式的接口")]),v._v(" "),t("ul",[t("li",[v._v("物理层功能\n"),t("ul",[t("li",[v._v("信号的编码与译码")]),v._v(" "),t("li",[v._v("比特的传输与接收")])])]),v._v(" "),t("li",[v._v("MAC子层的功能\n"),t("ul",[t("li",[v._v("成帧与拆帧")]),v._v(" "),t("li",[v._v("比特差错检测")]),v._v(" "),t("li",[v._v("寻址")]),v._v(" "),t("li",[v._v("竞争处理")])])]),v._v(" "),t("li",[v._v("LLC子层的功能\n"),t("ul",[t("li",[v._v("建立和释放逻辑连接")]),v._v(" "),t("li",[v._v("提供与高层的接口")]),v._v(" "),t("li",[v._v("差错控制")]),v._v(" "),t("li",[v._v("给帧加序号")])])])]),v._v(" "),t("h2",{attrs:{id:"硬件地址mac地址"}},[v._v("硬件地址/MAC地址")]),v._v(" "),t("h3",{attrs:{id:"格式"}},[v._v("格式")]),v._v(" "),t("p",[v._v("12个十六进制数，每两个十六进制数用"),t("code",{pre:!0},[v._v("-")]),v._v("分隔，如"),t("code",{pre:!0},[v._v("1A-24-F6-54-1B-0E")])]),v._v(" "),t("h3",{attrs:{id:"链路层转发"}},[v._v("链路层转发")]),v._v(" "),t("p",[v._v("路由器由于连接了两个网络，所以有两个网卡和两个MAC地址")]),v._v(" "),t("p",[v._v("网卡接收到MAC帧（即链路层帧）就首先检查帧中的MAC地址，如果是发往本站的就接收，否则丢弃")]),v._v(" "),t("h3",{attrs:{id:"mac帧长限制"}},[v._v("MAC帧长限制")]),v._v(" "),t("p",[t("strong",[v._v("以太网规定最小有效帧长为64字节，最大为1518字节，其中18字节为非数据字段")])]),v._v(" "),t("p",[v._v("MAC最小帧长的限制是由于CSMA/CD协议要求帧的发送时间应该大于2T。小于最小帧长的帧被视为"),t("strong",[v._v("无效帧")])]),v._v(" "),t("p",[v._v("例题：两台计算机使用1500米的同轴电缆连接，使用CSMA/CD协议，电缆时延4.33μs/km，其他往返延时因素为38.5μs，网络数据传输速率为10Mbps，发送的帧的最短长度是？")]),v._v(" "),t("p",[v._v("从题中可以看出"),t("code",{pre:!0},[v._v("2T = 2 * 1500 / 1000 * 4.33 + 38.5")]),v._v("μs，在这时间内要已知发送数据，所以最短帧长度应为上述时间称网络数据传输速率。结果为65字节")]),v._v(" "),t("p",[v._v("帧间最小间隔为9.6μs，相当于96比特的发送时间。一个站检测到总线空闲时要等待9.6μs才能开始发送。这是为了给之前的接收方留出处理缓存的时间")]),v._v(" "),t("h2",{attrs:{id:"网桥"}},[v._v("网桥")]),v._v(" "),t("h3",{attrs:{id:"网桥的转发与学习算法"}},[v._v("网桥的转发与学习算法")]),v._v(" "),t("p",[v._v("网桥的学习算法 - 逆向学习：")]),v._v(" "),t("ul",[t("li",[v._v("从端口x收到无差错的帧，在表中查找地址")]),v._v(" "),t("li",[v._v("如果有地址且目标地址不通过源端口，则转发。如果目标地址通过源端口则丢弃")]),v._v(" "),t("li",[v._v("如果没有地址，向x以外的端口洪泛")]),v._v(" "),t("li",[v._v("如果源站不在转发表，则把源站的MAC地址与端口x的映射加入转发表并设置计时器")])]),v._v(" "),t("p",[v._v("网桥维护的转发表含有")]),v._v(" "),t("ul",[t("li",[v._v("站地址 - 各站的MAC地址")]),v._v(" "),t("li",[v._v("接口 - 各站对应的接口号")]),v._v(" "),t("li",[v._v("时间 - 帧进入网桥的时间")])]),v._v(" "),t("h2",{attrs:{id:"虚拟局域网"}},[v._v("虚拟局域网")]),v._v(" "),t("p",[v._v("是一种局域网给用户提供的"),t("strong",[v._v("服务")]),v._v("而不是一种新型局域网")]),v._v(" "),t("p",[v._v("在一个大的局域网内把一些"),t("strong",[v._v("物理位置不相邻")]),v._v("的主机划分为小局域网的技术")]),v._v(" "),t("p",[t("img",{attrs:{src:l(591),alt:"4-5"}})]),v._v(" "),t("p",[v._v("组网方式：")]),v._v(" "),t("ul",[t("li",[v._v("使用交换机端口号定义虚拟局域网\n"),t("ul",[t("li",[v._v("即某个交换机的哪些端口属于同一个虚拟局域网")])])]),v._v(" "),t("li",[v._v("使用MAC地址定义虚拟局域网")]),v._v(" "),t("li",[v._v("使用IP地址定义虚拟局域网")])]),v._v(" "),t("p",[v._v("功能：实现信息隔离，即使是广播也无法在两个逻辑网络之间穿透（当然这里的广播指的是虚拟局域网发起的在虚拟局域网内的广播）。而且不需要改造主机的以太网卡和相关软件")])])}]};v.exports={attributes:{layout:"collection",title:"媒体访问控制MAC(The Mediun Access Control Sublayer)子层",collection:"ComputerNetwork"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}},587:function(v,_,l){v.exports=l.p+"img/4-1.84642ed.png"},588:function(v,_,l){v.exports=l.p+"img/4-2.d96a000.png"},589:function(v,_,l){v.exports=l.p+"img/4-3.6b55454.png"},590:function(v,_,l){v.exports=l.p+"img/4-4.adfab3b.png"},591:function(v,_,l){v.exports=l.p+"img/4-5.6237ba8.png"}}]);