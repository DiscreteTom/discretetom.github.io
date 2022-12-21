(window.webpackJsonp=window.webpackJsonp||[]).push([[46,467,468,469,470,471,472],{1351:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"数据链路层的主要功能"}},[v._v("数据链路层的主要功能")]),v._v(" "),n("ul",[n("li",[v._v("链路管理 - 数据链路的简历、维持和释放")]),v._v(" "),n("li",[v._v("帧同步 - 接收方能从收到的比特流中区分帧的开始和结束")]),v._v(" "),n("li",[v._v("差错控制 - 能够检错重传或纠错")]),v._v(" "),n("li",[v._v("流量控制 - 使接收方能够接受所有发送方发送的数据")]),v._v(" "),n("li",[v._v("透明传输 - 把数据和控制信息分开")]),v._v(" "),n("li",[v._v("寻址 - 保证每一帧都能够发送到目的地")])]),v._v(" "),n("h2",{attrs:{id:"区分"}},[v._v("区分")]),v._v(" "),n("ul",[n("li",[v._v("物理层带宽(Hz)&数据链路层带宽(bps)")])]),v._v(" "),n("h2",{attrs:{id:"封装成帧"}},[v._v("封装成帧")]),v._v(" "),n("h3",{attrs:{id:"字符计数法"}},[v._v("字符计数法")]),v._v(" "),n("p",[v._v("在帧头加一字节表示帧长度")]),v._v(" "),n("p",[n("strong",[v._v("注意帧长度包括了帧头")])]),v._v(" "),n("p",[n("img",{attrs:{src:t(585),alt:"3-1"}})]),v._v(" "),n("p",[v._v("缺点是一旦帧头出错，很难查错。所以"),n("strong",[v._v("不能在有误码的信道上使用")])]),v._v(" "),n("h3",{attrs:{id:"字符填充法"}},[v._v("字符填充法")]),v._v(" "),n("p",[v._v("PPP协议使用")]),v._v(" "),n("p",[v._v("使用控制字符ESC")]),v._v(" "),n("p",[v._v("在所有ESC和FLAG前加ESC")]),v._v(" "),n("p",[n("img",{attrs:{src:t(586),alt:"3-2"}})]),v._v(" "),n("p",[v._v("缺点是控制信息很多时信道利用率低")]),v._v(" "),n("h3",{attrs:{id:"比特填充法"}},[v._v("比特填充法")]),v._v(" "),n("p",[v._v("HDLC协议使用")]),v._v(" "),n("p",[v._v("开头和结尾加01111110")]),v._v(" "),n("p",[v._v("在数据中连续出现五个1时在第五个1后面填充一个0")]),v._v(" "),n("p",[n("img",{attrs:{src:t(587),alt:"3-3"}})]),v._v(" "),n("h3",{attrs:{id:"物理层编码违例法"}},[v._v("物理层编码违例法")]),v._v(" "),n("p",[v._v("利用物理层编码的违例标识控制信息，详见物理层 - 曼彻斯特编码部分")]),v._v(" "),n("h2",{attrs:{id:"差错控制"}},[v._v("差错控制")]),v._v(" "),n("h3",{attrs:{id:"纠错码ecc-error-correcting-code"}},[v._v("纠错码(ECC Error Correcting Code)")]),v._v(" "),n("p",[v._v("定理：")]),v._v(" "),n("ul",[n("li",[v._v("长度不小于t+1的码可以检测t个错误")]),v._v(" "),n("li",[v._v("长度不小于2t+1的码可以纠t个错误")])]),v._v(" "),n("h4",{attrs:{id:"海明码"}},[v._v("海明码")]),v._v(" "),n("p",[v._v("海明距离：两个码做或非操作")]),v._v(" "),n("p",[v._v("假设海明查错码n位，数据码m位，共m+n位，m+n应小于2"),n("sup",[v._v("n")])]),v._v(" "),n("p",[v._v("海明查错码的第n位应在海明码的第2"),n("sup",[v._v("n-1")]),v._v("位上")]),v._v(" "),n("p",[v._v("计算海明码")]),v._v(" "),n("p",[n("img",{attrs:{src:t(588),alt:"3-4"}})]),v._v(" "),n("h3",{attrs:{id:"检错码"}},[v._v("检错码")]),v._v(" "),n("h4",{attrs:{id:"奇偶校验"}},[v._v("奇偶校验")]),v._v(" "),n("p",[v._v("分为奇校验和偶校验")]),v._v(" "),n("p",[v._v("可检测出奇数个"),n("em",[v._v("位翻转错误")]),v._v("\n其他情况漏检率50%")]),v._v(" "),n("h4",{attrs:{id:"交错校验"}},[v._v("交错校验")]),v._v(" "),n("p",[v._v("横着写数据码\n竖着算校验码")]),v._v(" "),n("p",[n("img",{attrs:{src:t(589),alt:"3-5"}})]),v._v(" "),n("p",[v._v("假设数据码n位共k个\n则校验码n位")]),v._v(" "),n("p",[v._v("可以检测出长度不超过n的突发错误(横向)")]),v._v(" "),n("h4",{attrs:{id:"多项式编码polynomial-code"}},[v._v("多项式编码(Polynomial Code)")]),v._v(" "),n("p",[v._v("又叫")]),v._v(" "),n("ul",[n("li",[v._v("CRC循环冗余校验(Cyclic Redundancy Check)")]),v._v(" "),n("li",[v._v("FCS帧校验序列(Frame Check Sequence)")])]),v._v(" "),n("p",[v._v("G(x)成为生成多项式(Generator polynomial)")]),v._v(" "),n("p",[v._v("校验位长度为生成多项式长度-1")]),v._v(" "),n("p",[v._v("数据对生成多项式进行模二除法得到余数即为校验位")]),v._v(" "),n("p",[n("img",{attrs:{src:t(590),alt:"3-6"}})]),v._v(" "),n("p",[v._v("r位校验位可以查出所有长度小于r的突发错误")]),v._v(" "),n("p",[v._v("CRC总是放在数据包的"),n("strong",[v._v("尾部")]),v._v("而不是头部，因为：")]),v._v(" "),n("ul",[n("li",[v._v("发送方的硬件电路可以边发送边计算CRC校验和，最后追加到尾部")]),v._v(" "),n("li",[v._v("接收方可以便接受边计算CRC校验和，最后和尾部CRC比较")])]),v._v(" "),n("h2",{attrs:{id:"流量控制协议"}},[v._v("流量控制协议")]),v._v(" "),n("ul",[n("li",[v._v("基本协议\n"),n("ul",[n("li",[v._v("乌托邦单工协议")]),v._v(" "),n("li",[v._v("无差错信道单工停等协议")]),v._v(" "),n("li",[v._v("有噪声信道单工停等协议")])])]),v._v(" "),n("li",[v._v("滑动窗口协议\n"),n("ul",[n("li",[v._v("1bit滑动窗口协议")]),v._v(" "),n("li",[v._v("GBN协议")]),v._v(" "),n("li",[v._v("选择重传协议")])])])]),v._v(" "),n("p",[v._v("滑动窗口协议允许"),n("strong",[v._v("全双工")]),v._v("和"),n("strong",[v._v("捎带应答(piggybacking)")])]),v._v(" "),n("h3",{attrs:{id:"乌托邦单工协议utopian-simplex-protocol"}},[v._v("乌托邦单工协议(Utopian Simplex Protocol)")]),v._v(" "),n("p",[v._v("信道要求")]),v._v(" "),n("ul",[n("li",[v._v("单工")]),v._v(" "),n("li",[v._v("无差错 不需要差错控制")]),v._v(" "),n("li",[v._v("数据缓冲区无穷大 不需要流量控制")])]),v._v(" "),n("p",[v._v("一直发")]),v._v(" "),n("h3",{attrs:{id:"无差错信道单工停等协议simplex-stop-and-wait"}},[v._v("无差错信道单工停等协议(Simplex Stop-and-Wait)")]),v._v(" "),n("p",[v._v("与乌托邦协议相比 数据缓冲区非无穷大")]),v._v(" "),n("ul",[n("li",[v._v("发送帧 等待")]),v._v(" "),n("li",[v._v("接收方接收帧之后发送ACK")]),v._v(" "),n("li",[v._v("接收ACK 发送下一帧")])]),v._v(" "),n("h3",{attrs:{id:"有差错信道单工停等协议positive-ack-with-retransmissionpar"}},[v._v("有差错信道单工停等协议Positive ACK with Retransmission(PAR)")]),v._v(" "),n("p",[v._v("在协议2的基础上 信道不可靠")]),v._v(" "),n("p",[v._v("使用ARQ(Automatic Repeat request)自动重复请求")]),v._v(" "),n("p",[v._v("添加ACK序号和计时器，超时未收到ACK则重发。ACK序号是为了防止“ACK在网络中滞留，发送方超时重发，接收方再次发送ACK，发送方接收到网络中滞留的ACK后发送下一个包，然后发送方接收到了上一个包的重发ACK后以为新的包已经送达”的问题")]),v._v(" "),n("h3",{attrs:{id:"1bit滑动窗口协议"}},[v._v("1bit滑动窗口协议")]),v._v(" "),n("p",[v._v("低效")]),v._v(" "),n("h3",{attrs:{id:"gbn协议go-back-n"}},[v._v("GBN协议(Go Back N)")]),v._v(" "),n("p",[n("strong",[v._v("窗口大小")]),v._v("如果不特指发送窗口还是接收窗口，就表示"),n("strong",[v._v("帧序号范围")]),v._v("。为了避免混淆下面都用帧序号范围来描述")]),v._v(" "),n("ul",[n("li",[v._v("发送窗口大小"),n("strong",[v._v("大于")]),v._v("1，"),n("strong",[v._v("小于")]),v._v("帧序号范围最大值")]),v._v(" "),n("li",[v._v("接收窗口大小"),n("strong",[v._v("等于")]),v._v("1")])]),v._v(" "),n("p",[v._v("为什么发送窗口不能等于帧序号范围最大值？假设帧序号3位，范围0-7，假设发送窗口的窗口大小也为8，一次性把0-7这8个序号都发出去了，接收方一个接一个正确接收并发送ACK，但是ACK全部丢失，发送方超时重发，接收方发现新来的帧又是从0开始的，自己也应该接收0，就会把重发的包当做新的包")]),v._v(" "),n("p",[v._v("而如果发送窗口大小只是7，一次性发出去0-6，接收窗口知道自己该接收7，那么发送窗口重发就可以被接收窗口识别")]),v._v(" "),n("h3",{attrs:{id:"选择重传selective-repeat"}},[v._v("选择重传(Selective Repeat)")]),v._v(" "),n("ul",[n("li",[n("strong",[v._v("只重传出错或丢失的帧")])]),v._v(" "),n("li",[v._v("设置ACK定时器，没有数据发送时也可以发送ACK，用于捎带确认")]),v._v(" "),n("li",[v._v("增加NAK帧，发送方只需要重发NAK+1的帧而不需要Go Back N")]),v._v(" "),n("li",[v._v("收集齐整个接收窗口的帧后"),n("strong",[v._v("有序")]),v._v("上交网络层")])]),v._v(" "),n("p",[v._v("窗口大小相关：")]),v._v(" "),n("ul",[n("li",[v._v("发送窗口+接收窗口不大于序号范围，即2的n次方")]),v._v(" "),n("li",[v._v("发送窗口和接收窗口不大于帧序号范围的一半，即2的n-1次方")]),v._v(" "),n("li",[v._v("发送窗口不小于接收窗口")]),v._v(" "),n("li",[v._v("通常两个窗口取值都是2的n-1次方")])])])}]};v.exports={attributes:{layout:"collection",title:"数据链路层",collection:"ComputerNetwork"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},585:function(v,_,t){v.exports=t.p+"img/3-1.12f8ba1.png"},586:function(v,_,t){v.exports=t.p+"img/3-2.1e36574.png"},587:function(v,_,t){v.exports=t.p+"img/3-3.2b89aa0.png"},588:function(v,_,t){v.exports=t.p+"img/3-4.345dbd0.png"},589:function(v,_,t){v.exports=t.p+"img/3-5.c35805a.png"},590:function(v,_,t){v.exports=t.p+"img/3-6.15ccac0.png"}}]);