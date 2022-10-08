(window.webpackJsonp=window.webpackJsonp||[]).push([[48,465,466,467,468,469,470],{1335:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"端口"}},[v._v("端口")]),v._v(" "),l("p",[v._v("用于区分应用层的不同进程")]),v._v(" "),l("p",[v._v("端口号16位")]),v._v(" "),l("p",[v._v("一个IP地址和一个端口号绑定一个套接字(socket)。不允许两个套接字监听同一端口")]),v._v(" "),l("h2",{attrs:{id:"连接的建立与释放"}},[v._v("连接的建立与释放")]),v._v(" "),l("p",[v._v("三次握手建立连接")]),v._v(" "),l("ol",[l("li",[v._v("Client请求连接(seq = x)")]),v._v(" "),l("li",[v._v("Server确认请求(seq = y, ACK = x)")]),v._v(" "),l("li",[v._v("Client确认请求并发送数据(seq = x + 1, ACK = y)")])]),v._v(" "),l("p",[v._v("如果Client发送了重复的请求，Server回复后Client需要用REJECT来释放重复链接")]),v._v(" "),l("p",[v._v("三次握手+定时器释放连接")]),v._v(" "),l("h2",{attrs:{id:"tcp"}},[v._v("TCP")]),v._v(" "),l("p",[v._v("传输控制协议(Transmission Control Protocol)")]),v._v(" "),l("ul",[l("li",[v._v("面向连接的服务")]),v._v(" "),l("li",[v._v("全双工点对点通信")]),v._v(" "),l("li",[l("strong",[v._v("完全可靠")]),v._v("（无丢失、重复、乱序）\n"),l("ul",[l("li",[v._v("具有"),l("strong",[v._v("自动重传")]),v._v("机制，就算某机器断网重连了，原有通信也可以继续进行")]),v._v(" "),l("li",[v._v("一个TCP连接中一端崩溃或突然中断时称为"),l("strong",[v._v("半开连接")]),v._v("，TCP设置了定时器定时探测是否出现了半开连接")])])]),v._v(" "),l("li",[v._v("可靠的连接建立与释放")])]),v._v(" "),l("h3",{attrs:{id:"协议头"}},[v._v("协议头")]),v._v(" "),l("p",[l("img",{attrs:{src:t(600),alt:"6-1"}})]),v._v(" "),l("p",[v._v("长度可变。计算时默认按照20字节计算")]),v._v(" "),l("ul",[l("li",[v._v("源端口 & 目的端口\n"),l("ul",[l("li",[v._v("两字节/16位")])])]),v._v(" "),l("li",[v._v("序号\n"),l("ul",[l("li",[v._v("通信双方需要商定"),l("strong",[v._v("初始序号")])]),v._v(" "),l("li",[v._v("4字节/32位")]),v._v(" "),l("li",[v._v("数据字段每有一个字节，序号+1")])])]),v._v(" "),l("li",[v._v("确认号ACK\n"),l("ul",[l("li",[v._v("4字节/32位")]),v._v(" "),l("li",[l("strong",[v._v("期望收到")]),v._v("的下一个报文段数据的第一个字节的序号")]),v._v(" "),l("li",[v._v("比如收到的包的序列号是x，那么回复的ACK确认号应该是x+1")]),v._v(" "),l("li",[v._v("采用了捎带确认和累计确认技术")])])]),v._v(" "),l("li",[v._v("数据偏移\n"),l("ul",[l("li",[v._v("4位")]),v._v(" "),l("li",[v._v("因为TCP头长度不定，数据偏移用来说明数据部分在TCP包内的位置")]),v._v(" "),l("li",[v._v("单位为4字节/32位")])])]),v._v(" "),l("li",[v._v("保留字段\n"),l("ul",[l("li",[v._v("6位，应该置0")])])]),v._v(" "),l("li",[v._v("紧急比特URG\n"),l("ul",[l("li",[v._v("置1时紧急指针字段有效")])])]),v._v(" "),l("li",[v._v("确认比特ACK\n"),l("ul",[l("li",[v._v("置1时确认号ACK字段有效")])])]),v._v(" "),l("li",[v._v("推送比特PSH\n"),l("ul",[l("li",[v._v("置1时接收方一旦受到包就上交应用层而不填满缓冲区")])])]),v._v(" "),l("li",[v._v("复位比特RST\n"),l("ul",[l("li",[v._v("置1时表明传输出错，释放连接并重连")])])]),v._v(" "),l("li",[v._v("同步比特SYN\n"),l("ul",[l("li",[v._v("置1时表明这是连接请求或连接接收报文")])])]),v._v(" "),l("li",[v._v("终止比特FIN\n"),l("ul",[l("li",[v._v("置1时用来释放连接")])])]),v._v(" "),l("li",[v._v("窗口字段\n"),l("ul",[l("li",[v._v("2字节/16位")]),v._v(" "),l("li",[v._v("通知对方自己的接收窗口，使对方调整发送的数据量")]),v._v(" "),l("li",[v._v("单位为字节")])])]),v._v(" "),l("li",[v._v("校验和\n"),l("ul",[l("li",[v._v("2字节/16位")]),v._v(" "),l("li",[v._v("校验"),l("strong",[v._v("首部与数据")])]),v._v(" "),l("li",[v._v("计算时要在TCP报文段前面加上12字节的"),l("strong",[v._v("伪首部")]),v._v("，伪首部仅参与校验和的计算，不向上向下传递")]),v._v(" "),l("li",[v._v("计算方式和IP校验和计算方式相同")])])])]),v._v(" "),l("p",[l("img",{attrs:{src:t(601),alt:"6-6"}})]),v._v(" "),l("ul",[l("li",[v._v("紧急指针\n"),l("ul",[l("li",[v._v("2字节/16位")]),v._v(" "),l("li",[v._v("指出本报文段中的紧急数据的最后一个字节的序号")])])]),v._v(" "),l("li",[v._v("选项字段\n"),l("ul",[l("li",[v._v("长度可变")]),v._v(" "),l("li",[v._v("TCP只规定了一个选项 - 最大报文段长度MSS(Maximum Segment Size)")]),v._v(" "),l("li",[v._v("告知对方本机的缓存的接受能力")]),v._v(" "),l("li",[l("strong",[v._v("默认值为536")]),v._v("，单位为字节")]),v._v(" "),l("li",[l("strong",[v._v("来自IP网络层的限制")]),v._v("，IP包头的**总长度字段(Total Length)**16位限制一个IP包内最多65535字节，减去IP协议头和TCP协议头，最大为65535-20-20="),l("strong",[v._v("65495字节")])]),v._v(" "),l("li",[l("strong",[v._v("来自数据链路层（以太网）MTU的限制，最大为1460字节")])])])])]),v._v(" "),l("h3",{attrs:{id:"tcp连接的建立和释放"}},[v._v("TCP连接的建立和释放")]),v._v(" "),l("ul",[l("li",[v._v("建立连接\n"),l("ul",[l("li",[v._v("三次握手")]),v._v(" "),l("li",[v._v("主动请求连接的进程为"),l("strong",[v._v("客户(Client)")])]),v._v(" "),l("li",[v._v("被动接受连接的进程为"),l("strong",[v._v("服务器(Server)")])])])]),v._v(" "),l("li",[v._v("释放连接\n"),l("ul",[l("li",[v._v("TCP是全双工通信，拥有两个单向连接，需要分别释放")]),v._v(" "),l("li",[v._v("四次握手，每释放一个单向连接需要两次握手")])])])]),v._v(" "),l("p",[v._v("TCP连接建立过程（三次握手）：")]),v._v(" "),l("ol",[l("li",[v._v("Client: SYN SEQ=x")]),v._v(" "),l("li",[v._v("Server: SYN SEQ=y ACK=x+1")]),v._v(" "),l("li",[v._v("Client: (DATA) SEQ=x+1 ACK=y+1")])]),v._v(" "),l("p",[v._v("TCP连接释放过程（两次握手*2）：")]),v._v(" "),l("ol",[l("li",[v._v("Host1: FIN=1 Seq=x")]),v._v(" "),l("li",[v._v("Host2: ACK=x+1")])]),v._v(" "),l("h3",{attrs:{id:"tcp的传输策略"}},[v._v("TCP的传输策略")]),v._v(" "),l("p",[v._v("基于"),l("strong",[v._v("确认")]),v._v("和"),l("strong",[v._v("可变窗口")])]),v._v(" "),l("p",[v._v("窗口大小为0时不能发送TCP段，但是允许以下两个例外")]),v._v(" "),l("ol",[l("li",[v._v("紧急数据")]),v._v(" "),l("li",[v._v("为了防止死锁，发送方可以发送1字节的TCP段，以便让接收方重新声明确认号和窗口大小")])]),v._v(" "),l("h3",{attrs:{id:"提升tcp传输效率的方法-nagle算法与clark算法"}},[v._v("提升TCP传输效率的方法 - Nagle算法与Clark算法")]),v._v(" "),l("p",[l("strong",[v._v("Nagle算法")]),v._v("：")]),v._v(" "),l("ul",[l("li",[v._v("应用程序向传输实体发送数据时，传输实体发送"),l("strong",[v._v("第一个字节")]),v._v("并缓存所有后面的字节，直到收到接收方对第一个字节的确认")]),v._v(" "),l("li",[v._v("收到确认后把已缓存的所有字节发送出去，在收到确认前继续缓存上层发来的字节")]),v._v(" "),l("li",[v._v("如果缓存的数据填满"),l("strong",[v._v("一半的窗口")]),v._v("或是"),l("strong",[v._v("最大数据段MSS")]),v._v("时也可以发送")])]),v._v(" "),l("p",[l("strong",[v._v("愚笨窗口综合症(Silly window syndrome)")]),v._v("：假设应用程序每次只从传输层实体读出一个字节，那么传输层每次只能再接收一个字节，传输层给发送方发送一个窗口更新段，发送方就会一个字节一个字节地发，效率低")]),v._v(" "),l("p",[l("strong",[v._v("Clark算法")]),v._v("：只有接收方具备"),l("strong",[v._v("一半的空缓存")]),v._v("或"),l("strong",[v._v("MSS的空缓存")]),v._v("时才发送窗口更新段")]),v._v(" "),l("p",[v._v("所以"),l("strong",[v._v("发送方")]),v._v("应使用"),l("strong",[v._v("Nagle算法")]),v._v("避免发送太小的数据段，"),l("strong",[v._v("接收方")]),v._v("应使用"),l("strong",[v._v("Clark算法")]),v._v("避免请求太小的数据段")]),v._v(" "),l("p",[v._v("使用这两个算法的弊端："),l("strong",[v._v("TCP无法保证应用层的消息边界")]),v._v("，可能应用层发了两个包，TCP合成一个包发送。所以应用层需要自行处理数据边界")]),v._v(" "),l("h2",{attrs:{id:"tcp拥塞控制"}},[v._v("TCP拥塞控制")]),v._v(" "),l("p",[v._v("关键词")]),v._v(" "),l("ul",[l("li",[v._v("发送窗口")]),v._v(" "),l("li",[v._v("接收窗口rwnd")]),v._v(" "),l("li",[v._v("拥塞窗口cwnd")]),v._v(" "),l("li",[v._v("阈值")]),v._v(" "),l("li",[v._v("慢启动(slow start)算法")]),v._v(" "),l("li",[v._v("拥塞避免(congestion avoidance)算法")])]),v._v(" "),l("h3",{attrs:{id:"最大最小公平性"}},[v._v("最大最小公平性")]),v._v(" "),l("p",[v._v("尽可能给某个用户分配速率，但是不能从速率比这个用户低的其他用户身上剥夺速率。即降低速率高的来提升速率低的")]),v._v(" "),l("h3",{attrs:{id:"aimd法则"}},[v._v("AIMD法则")]),v._v(" "),l("p",[v._v("如下图，应尽量调节两个用户的带宽分配至"),l("strong",[v._v("效率线")]),v._v("和"),l("strong",[v._v("公平线")]),v._v("的交点，即"),l("strong",[v._v("最优点")])]),v._v(" "),l("p",[l("img",{attrs:{src:t(602),alt:"6-2"}})]),v._v(" "),l("p",[v._v("AIMD控制法则：Additive Increase Multiplicative Decrease，加法增乘法减，这样可以收敛到最优点")]),v._v(" "),l("p",[l("img",{attrs:{src:t(603),alt:"6-3"}})]),v._v(" "),l("p",[v._v("相较于AIMD，还有MIAD/MIMD/AIAD三种法则。对于AIAD和MIMD策略，两个用户占用的带宽将沿着效率线震荡而不会收敛于最优点。MIAD会收敛，但不会收敛到最优点，而是收敛到某个用户的效率最高点。所以这三个策略都是不稳定的")]),v._v(" "),l("h3",{attrs:{id:"发送窗口上限值"}},[v._v("发送窗口上限值")]),v._v(" "),l("p",[v._v("发送窗口的大小应为接收窗口和拥塞窗口的最小值，即"),l("code",{pre:!0},[v._v("min(rwnd, cwnd)")])]),v._v(" "),l("ul",[l("li",[l("code",{pre:!0},[v._v("rwnd < cwnd")]),v._v("时接收方的接受能力限制发送速率")]),v._v(" "),l("li",[l("code",{pre:!0},[v._v("rwnd > cwnd")]),v._v("时网络的拥塞限制发送速率")])]),v._v(" "),l("h3",{attrs:{id:"慢启动slow-start算法"}},[v._v("慢启动(slow start)算法")]),v._v(" "),l("p",[l("strong",[v._v("慢启动算法一点都不慢")])]),v._v(" "),l("p",[v._v("在接收窗口足够大，即发送窗口等于拥塞窗口时，拥塞窗口从1开始"),l("strong",[v._v("二进制指数上升")])]),v._v(" "),l("h3",{attrs:{id:"拥塞避免congestion-avoidance算法"}},[v._v("拥塞避免(congestion avoidance)算法")]),v._v(" "),l("p",[v._v("如果拥塞窗口大于阈值，则拥塞窗口线性增长，直至发生丢包超时")]),v._v(" "),l("p",[v._v("超时后，新阈值设为超时时拥塞窗口的一半，拥塞窗口大小重置为1（即一个MSS），然后再执行慢启动算法")]),v._v(" "),l("p",[l("img",{attrs:{src:t(604),alt:"6-4"}})]),v._v(" "),l("p",[v._v("如果接收窗口小，发送窗口等于接收窗口，只要不丢包，拥塞窗口继续增长")]),v._v(" "),l("h3",{attrs:{id:"快速重传"}},[v._v("快速重传")]),v._v(" "),l("p",[v._v("实例：发送端发送了1、2、3、4四个报文段，接收端接收到了1、2，回复ACK2和ACK3（这里的ACK序号应该等于希望收到的序号），如果3丢了，接收方收到4发现3丢了，于是再次发送ACK3。发送端的计时器还没有超时，认定网络可能拥塞导致3还在网络中传输，所以继续发5、6。接收端收到5、6后又发了两次ACK3，这样发送端会收到很多重复的ACK3")]),v._v(" "),l("p",[v._v("快速重传：发送端一旦连续收到三个重复的ACK就断定报文丢失并重发而不等待计时器超时")]),v._v(" "),l("h3",{attrs:{id:"例题"}},[v._v("例题")]),v._v(" "),l("p",[v._v("假设TCP的拥塞窗口在18KB时发生了超时，那么接下来的5次突发传输结束后拥塞窗口应该为多大？假设MSS=1KB，接收窗口无限大")]),v._v(" "),l("p",[v._v("拥塞窗口18KB超时，则阈值被设置为9KB，下一次发送数据时拥塞窗口为1KB（慢启动阶段），第二次突发传输时拥塞窗口为2KB，第三次为4KB，第四次为8KB，第五次拥塞窗口试图增长到16KB发现超过了阈值9KB，所以第五次拥塞窗口为9KB，进入拥塞避免阶段。第五次之后拥塞窗口应该为10KB")]),v._v(" "),l("h2",{attrs:{id:"tcp定时器管理"}},[v._v("TCP定时器管理")]),v._v(" "),l("p",[v._v("传输层RTT的方差很大，不好设置定时器。定时器需要动态变化")]),v._v(" "),l("h3",{attrs:{id:"平滑往返时间srtt"}},[v._v("平滑往返时间SRTT")]),v._v(" "),l("p",[v._v("Jacobson算法：设置平滑因子"),l("code",{pre:!0},[v._v("α")]),v._v("为一个0到1的常数，此算法维护一个变量"),l("code",{pre:!0},[v._v("SRTT(Smoothed Round-Ttrip Time平滑往返时间)")]),v._v("，假设"),l("code",{pre:!0},[v._v("R")]),v._v("为当前测量得到的往返时延，使用如下公式更新SRTT：")]),v._v(" "),l("p",[l("code",{pre:!0},[v._v("SRTT(new) = αSRTT(old) + (1-α)R")])]),v._v(" "),l("p",[v._v("典型情况下α取7/8。这类公式被称为"),l("strong",[v._v("指数加权移动平均(EWMA, Exponentially Weighted Moving Average)")]),v._v("。显然α的值越大，过去的SRTT的权值就越重，曲线就越光滑")]),v._v(" "),l("h3",{attrs:{id:"tcp计时器的设置"}},[v._v("TCP计时器的设置")]),v._v(" "),l("p",[v._v("TCP计时器的RTO(Retransmission Time-Out超时重传时间)应略大于上面计算出的SRTT，即")]),v._v(" "),l("p",[l("code",{pre:!0},[v._v("RTO = β * SRTT")])]),v._v(" "),l("p",[v._v("β为大于1的系数。早期的TCP标准将β的值取2")]),v._v(" "),l("h3",{attrs:{id:"karn算法"}},[v._v("Karn算法")]),v._v(" "),l("p",[v._v("如果报文段重传了，就不知道接收方返回的确认是在确认重传的包还是在确认在网络中停滞之后到达接收方的包")]),v._v(" "),l("p",[v._v("Karn算法就是在计算SRTT的时候不计算重传的包的RTT")]),v._v(" "),l("p",[v._v("修正的Karn算法：每重传一次就把重传时间增大一些，即"),l("code",{pre:!0},[v._v("新的重传时间 = γ * 旧的重传时间")])]),v._v(" "),l("p",[v._v("γ的典型值为2")]),v._v(" "),l("h3",{attrs:{id:"防止半开连接"}},[v._v("防止半开连接")]),v._v(" "),l("p",[v._v("一个TCP连接中的一端崩溃或突然中断时称为"),l("strong",[v._v("半开连接")]),v._v("。设置定时器定时探测是否出现半开连接的情况")]),v._v(" "),l("h2",{attrs:{id:"udp"}},[v._v("UDP")]),v._v(" "),l("p",[v._v("用户数据报协议(User Datagram Protocol)")]),v._v(" "),l("ul",[l("li",[v._v("无连接服务")]),v._v(" "),l("li",[v._v("UDP只在IP数据包服务的基础上添加了"),l("strong",[v._v("端口")]),v._v("功能与"),l("strong",[v._v("差错检测")]),v._v("功能")]),v._v(" "),l("li",[v._v("提供不可靠交付")]),v._v(" "),l("li",[v._v("不需要建立连接")]),v._v(" "),l("li",[v._v("不需要维护复杂的连接状态表")]),v._v(" "),l("li",[v._v("只有"),l("strong",[v._v("8个字节的首部")]),v._v("开销")]),v._v(" "),l("li",[v._v("网络拥塞不会降低源主机的发送速率，源主机发送速率恒定")])]),v._v(" "),l("p",[l("img",{attrs:{src:t(605),alt:"6-5"}})]),v._v(" "),l("p",[v._v("校验和的计算和TCP一样。记得加上伪首部")]),v._v(" "),l("p",[v._v("UDP的差错检测和TCP的相同")]),v._v(" "),l("h2",{attrs:{id:"实时传输协议-rtp"}},[v._v("实时传输协议 - RTP")]),v._v(" "),l("p",[v._v("Real-time Transport Protocol")]),v._v(" "),l("ul",[l("li",[v._v("应用层协议")]),v._v(" "),l("li",[v._v("将几个实时数据流复用到一个UDP分组流中")]),v._v(" "),l("li",[v._v("可以单播传递也可以多播传递")]),v._v(" "),l("li",[v._v("没有流控制、差错控制、确认，不需要重传")])]),v._v(" "),l("p",[v._v("RTCP协议：辅助RTP实现实时传输的控制协议，负责处理反馈、同步和用户界面等，不传输任何实际的用户数据，只交互控制信息")])])}]};v.exports={attributes:{layout:"collection",title:"传输层",collection:"ComputerNetwork"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},600:function(v,_,t){v.exports=t.p+"img/6-1.021a990.png"},601:function(v,_,t){v.exports=t.p+"img/6-6.9f5e532.png"},602:function(v,_,t){v.exports=t.p+"img/6-2.d737390.png"},603:function(v,_,t){v.exports=t.p+"img/6-3.f2c0ad5.png"},604:function(v,_,t){v.exports=t.p+"img/6-4.ed73813.png"},605:function(v,_,t){v.exports=t.p+"img/6-5.f520444.png"}}]);