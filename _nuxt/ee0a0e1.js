(window.webpackJsonp=window.webpackJsonp||[]).push([[29,760,761,762,763,764,765,766,767,768,769,770,771],{1394:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"8086管脚"}},[v._v("8086管脚")]),v._v(" "),l("h3",{attrs:{id:"主要管脚"}},[v._v("主要管脚")]),v._v(" "),l("p",[l("img",{attrs:{src:t(887),alt:"5-1"}})]),v._v(" "),l("p",[v._v("主要管脚：")]),v._v(" "),l("ul",[l("li",[v._v("AD15-AD0\n"),l("ul",[l("li",[v._v("时分复用地址数据线（为了减少对外引脚个数")]),v._v(" "),l("li",[v._v("ALE为1时为地址线，为0时为数据线")])])]),v._v(" "),l("li",[v._v("A19/S6-A16-S3\n"),l("ul",[l("li",[v._v("20位地址线的高四位")]),v._v(" "),l("li",[v._v("或状态线S6-S3")])])]),v._v(" "),l("li",[v._v("M/~IO\n"),l("ul",[l("li",[v._v("表示当前地址是存储器地址还是IO地址")])])]),v._v(" "),l("li",[v._v("~RD\n"),l("ul",[l("li",[v._v("表示是否读")])])]),v._v(" "),l("li",[v._v("~WR\n"),l("ul",[l("li",[v._v("表示是否写")])])]),v._v(" "),l("li",[v._v("ALE\n"),l("ul",[l("li",[v._v("地址锁存允许信号，高电平表示AD线传输的是地址")])])]),v._v(" "),l("li",[v._v("DT/~R\n"),l("ul",[l("li",[v._v("数据发送(transmit)或接受(receive)信号")])])]),v._v(" "),l("li",[v._v("~DEN\n"),l("ul",[l("li",[v._v("data enable数据允许信号")])])]),v._v(" "),l("li",[v._v("INTR\n"),l("ul",[l("li",[v._v("interupt request中断请求")]),v._v(" "),l("li",[v._v("INTR为1且IF(S5)为1时CPU准备进行中断服务。当前指令执行完后~INTA变为低电平以响应中断")])])]),v._v(" "),l("li",[v._v("~INTA\n"),l("ul",[l("li",[v._v("中断响应信号")])])]),v._v(" "),l("li",[v._v("CLK\n"),l("ul",[l("li",[v._v("时钟，8086时钟为5MHz")])])]),v._v(" "),l("li",[v._v("VCC\n"),l("ul",[l("li",[v._v("电源5V")])])]),v._v(" "),l("li",[v._v("GND\n"),l("ul",[l("li",[v._v("地线0V")])])]),v._v(" "),l("li",[v._v("MN/~MX\n"),l("ul",[l("li",[v._v("工作模式，MN表示最小模式，MX表示最大模式")])])])]),v._v(" "),l("h3",{attrs:{id:"工作状态s7-s0"}},[v._v("工作状态S7-S0")]),v._v(" "),l("p",[v._v("S7恒为1，S6恒为0，S5为IF")]),v._v(" "),l("p",[v._v("S4和S3表示当前总线周期哪一个段正在被存取：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(888),alt:"5-2"}})]),v._v(" "),l("p",[v._v("S2-S0表示当前总线周期的功能：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(889),alt:"5-3"}})]),v._v(" "),l("h2",{attrs:{id:"总线周期与时序"}},[v._v("总线周期与时序")]),v._v(" "),l("h3",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),l("p",[l("strong",[v._v("总线周期")]),v._v("是"),l("strong",[v._v("CPU完成一次访存（或IO端口）操作所需要的时间")]),v._v("，8086CPU的基本总线周期包括"),l("strong",[v._v("4个时钟周期")]),v._v("，命名为T1-T4")]),v._v(" "),l("p",[l("strong",[v._v("Ti")]),v._v("表示在两个"),l("strong",[v._v("总线周期")]),v._v("之间插入的"),l("strong",[v._v("空闲时钟周期")])]),v._v(" "),l("p",[v._v("如果一次IO或存储器存取时间较长，则根据需要在T3和T4之间插入若干个"),l("strong",[v._v("等待周期Tw")]),v._v("以保证访存正常进行")]),v._v(" "),l("p",[l("img",{attrs:{src:t(890),alt:"5-4"}})]),v._v(" "),l("h3",{attrs:{id:"读周期时序"}},[v._v("读周期时序")]),v._v(" "),l("p",[l("img",{attrs:{src:t(891),alt:"5-5"}})]),v._v(" "),l("ul",[l("li",[v._v("T1\n"),l("ul",[l("li",[v._v("送出20位地址")]),v._v(" "),l("li",[v._v("按需设置M/~IO")]),v._v(" "),l("li",[v._v("ALE使地址生效（锁存地址")]),v._v(" "),l("li",[v._v("DT/~R设置为接收态")])])]),v._v(" "),l("li",[v._v("T2\n"),l("ul",[l("li",[v._v("此时地址已经被锁存，AD线可以不再表示地址，A19-A16表示S7-S3")]),v._v(" "),l("li",[v._v("按需启动~RD信号")]),v._v(" "),l("li",[v._v("启动~DEN信号")])])]),v._v(" "),l("li",[v._v("T3\n"),l("ul",[l("li",[v._v("T3的前沿（下降沿）采样READY信号，如果为1则表示结束，否则表示没有结束，在T3后面插入Tw")]),v._v(" "),l("li",[v._v("数据被放入数据总线")])])]),v._v(" "),l("li",[v._v("T4\n"),l("ul",[l("li",[v._v("T4的前沿采样数据总线，获得数据")]),v._v(" "),l("li",[v._v("然后所有信号变为无效")])])])]),v._v(" "),l("h2",{attrs:{id:"8086工作模式"}},[v._v("8086工作模式")]),v._v(" "),l("p",[v._v("8086工作模式有最大模式和最小模式")]),v._v(" "),l("ul",[l("li",[v._v("最小模式 - 系统中只有一个8086处理器，所有总线控制信号都由此8086产生，系统的总线控制逻辑电路被减到最少")]),v._v(" "),l("li",[v._v("最大模式 - 可以包含一个主处理器和很多协处理器（如数值运算协处理器8087、输入输出协处理器8089），需要使用8288总线控制器来产生不同的控制信号")])]),v._v(" "),l("p",[v._v("通电后设置8086的MN/~MX电平以控制CPU的工作模式")]),v._v(" "),l("h2",{attrs:{id:"8086存储器"}},[v._v("8086存储器")]),v._v(" "),l("p",[v._v("数据总线16位，地址总线20位，可寻址1M字节")]),v._v(" "),l("p",[v._v("利用BHE信号线，可以按不同方式寻址：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(892),alt:"5-6"}})]),v._v(" "),l("p",[l("strong",[v._v("如果一个字放在奇地址开始的边界上，则需要两个总线周期才能完成读写操作")]),v._v("（因为要发出两次字节读取信号")]),v._v(" "),l("h2",{attrs:{id:"io接口概述"}},[v._v("IO接口概述")]),v._v(" "),l("p",[l("strong",[v._v("IO接口指微处理器与外部世界的连接电路或部件")]),v._v("，外设包括存储器、IO设备、A/D或D/A转换器、控制设备等")]),v._v(" "),l("p",[v._v("大致结构：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(893),alt:"5-7"}})]),v._v(" "),l("p",[v._v("接口的功能：")]),v._v(" "),l("ul",[l("li",[v._v("执行CPU发来的控制命令")]),v._v(" "),l("li",[v._v("联络功能\n"),l("ul",[l("li",[v._v("告诉CPU是否准备好、缓冲区是否空或满")])])]),v._v(" "),l("li",[v._v("数据缓冲与锁存\n"),l("ul",[l("li",[v._v("隔离信号，增强总线驱动能力")]),v._v(" "),l("li",[v._v("缓冲与锁存解决CPU与外设速度不匹配的问题\n"),l("ul",[l("li",[v._v("如CPU速度快，只在一瞬间送来地址，那么地址就要被锁存起来使用")])])])])]),v._v(" "),l("li",[v._v("寻址功能（也称为设备选择功能，即根据CPU发出的外设地址进行译码变为设备选择信号")]),v._v(" "),l("li",[v._v("信号转换功能")]),v._v(" "),l("li",[v._v("中断管理\n"),l("ul",[l("li",[v._v("CPU与中低速外设传递信息使用中断方式")])])]),v._v(" "),l("li",[v._v("数据转换\n"),l("ul",[l("li",[v._v("串并转换、数模转换")])])]),v._v(" "),l("li",[v._v("可编程功能\n"),l("ul",[l("li",[v._v("有些接口芯片可以使用CPU编程来获得不同的效果")])])])]),v._v(" "),l("p",[v._v("IO接口的基本结构：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(894),alt:"5-8"}})]),v._v(" "),l("p",[v._v("CPU和外设需要交换三种信息：")]),v._v(" "),l("ul",[l("li",[v._v("数据信息")]),v._v(" "),l("li",[v._v("状态信息")]),v._v(" "),l("li",[v._v("控制信息")])]),v._v(" "),l("p",[v._v("所以IO接口需要为以上三种信息设置端口，即"),l("strong",[v._v("数据端口")]),v._v("、"),l("strong",[v._v("状态端口")]),v._v("和"),l("strong",[v._v("控制端口")])]),v._v(" "),l("p",[v._v("CPU能做的操作就是"),l("strong",[v._v("对IO端口进行读写")])]),v._v(" "),l("h2",{attrs:{id:"寻址方式"}},[v._v("寻址方式")]),v._v(" "),l("h3",{attrs:{id:"统一编制方式存储器映射"}},[v._v("统一编制方式（存储器映射")]),v._v(" "),l("ul",[l("li",[v._v("存储器地址与IO端口地址共用一个地址空间，访存与访问IO端口使用相同的指令")]),v._v(" "),l("li",[v._v("IO空间和存储器空间不必连续，可以交错")]),v._v(" "),l("li",[v._v("对IO端口操作灵活")]),v._v(" "),l("li",[v._v("缺点：占用存储器地址，对IO操作执行时间长。程序可读性差")])]),v._v(" "),l("p",[l("img",{attrs:{src:t(895),alt:"5-9"}})]),v._v(" "),l("p",[v._v("代码举例：")]),v._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("mov a, "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("1000h"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n")])]),v._v(" "),l("h3",{attrs:{id:"独立编制方式io映射"}},[v._v("独立编制方式（IO映射")]),v._v(" "),l("p",[v._v("8086采用此方式")]),v._v(" "),l("ul",[l("li",[v._v("存储器地址和IO端口地址都有各自独立的地址空间，有专门的IO指令")]),v._v(" "),l("li",[v._v("IO端口不占用存储器地址")]),v._v(" "),l("li",[v._v("IO指令短，执行速度快，功能单一")]),v._v(" "),l("li",[v._v("程序可读性强")])]),v._v(" "),l("p",[l("img",{attrs:{src:t(896),alt:"5-10"}})]),v._v(" "),l("p",[v._v("代码举例：")]),v._v(" "),l("pre",{staticClass:"language-bash"},[l("code",{pre:!0,attrs:{class:"language-bash"}},[l("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("in")]),v._v(" al, 20h\nout dx, al\n")])]),v._v(" "),l("p",[v._v("注意in和out的非立即数据必须存放在al中，非立即地址必须在dx中")]),v._v(" "),l("h3",{attrs:{id:"io端口地址译码"}},[v._v("IO端口地址译码")]),v._v(" "),l("p",[v._v("两种译码方式：")]),v._v(" "),l("ul",[l("li",[v._v("固定式端口地址译码\n"),l("ul",[l("li",[v._v("使用写死的译码器或门电路")])])]),v._v(" "),l("li",[v._v("可选式端口地址译码\n"),l("ul",[l("li",[v._v("使用开关或比较器实现")])])])]),v._v(" "),l("p",[v._v("译码电路实现途径：")]),v._v(" "),l("ul",[l("li",[v._v("门电路实现")]),v._v(" "),l("li",[v._v("译码器实现")])]),v._v(" "),l("h2",{attrs:{id:"基本输入输出接口"}},[v._v("基本输入输出接口")]),v._v(" "),l("p",[v._v("注意此处的输入输出都是"),l("strong",[v._v("相对CPU")]),v._v("的而不是相对接口的")]),v._v(" "),l("ul",[l("li",[v._v("基本输入接口（从接口输入到CPU）是一组三态缓冲器(74LS244)\n"),l("ul",[l("li",[v._v("因为CPU速度快，所以当三态缓冲器ready时CPU才能再次读取")])])]),v._v(" "),l("li",[v._v("基本输出接口（从CPU输出到接口）是一组锁存器(74LS374)\n"),l("ul",[l("li",[v._v("因为CPU速度快，所以当锁存器内数据被取走之后CPU才能再次输出")])])])]),v._v(" "),l("p",[v._v("基本输入接口：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(897),alt:"5-11"}})]),v._v(" "),l("p",[v._v("基本输出接口：")]),v._v(" "),l("p",[l("img",{attrs:{src:t(898),alt:"5-12"}})]),v._v(" "),l("h2",{attrs:{id:"cpu与外设的数据交换方式"}},[v._v("CPU与外设的数据交换方式")]),v._v(" "),l("h3",{attrs:{id:"程序控制方式"}},[v._v("程序控制方式")]),v._v(" "),l("p",[v._v("包括：")]),v._v(" "),l("ul",[l("li",[v._v("无条件传送方式\n"),l("ul",[l("li",[v._v("假设外设速度无限大，不考虑任何情况直接传数据")]),v._v(" "),l("li",[v._v("适用于简单外设")])])]),v._v(" "),l("li",[v._v("查询方式\n"),l("ul",[l("li",[v._v("CPU持续主动读取状态字，如果目标ready则读写")]),v._v(" "),l("li",[v._v("效率低，CPU不能与外设并行工作")]),v._v(" "),l("li",[v._v("接口电路简单，硬件开销小")]),v._v(" "),l("li",[v._v("适用于CPU负荷不大、传送速度不高的系统")])])])]),v._v(" "),l("h3",{attrs:{id:"中断方式"}},[v._v("中断方式")]),v._v(" "),l("ul",[l("li",[v._v("外设ready时发出中断请求")]),v._v(" "),l("li",[v._v("CPU和外设可以并行工作")]),v._v(" "),l("li",[v._v("接口需要中断控制器的逻辑支持")]),v._v(" "),l("li",[v._v("适用于CPU负荷较大、传送速度不太高的系统")])]),v._v(" "),l("h3",{attrs:{id:"dma方式"}},[v._v("DMA方式")]),v._v(" "),l("ul",[l("li",[v._v("数据传送不经过CPU")]),v._v(" "),l("li",[v._v("需要DMA控制器、硬件开销大")]),v._v(" "),l("li",[v._v("适用于高速大量数据传送的系统")])])])}]};v.exports={attributes:{layout:"collection",title:"微处理器外部特性与输入输出",collection:"MicrocomputerPrincipleAndInterfaceTechnology"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},887:function(v,_,t){v.exports=t.p+"img/5-1.f6033a2.png"},888:function(v,_,t){v.exports=t.p+"img/5-2.34d1f7f.png"},889:function(v,_,t){v.exports=t.p+"img/5-3.419635e.png"},890:function(v,_,t){v.exports=t.p+"img/5-4.dc93dfb.png"},891:function(v,_,t){v.exports=t.p+"img/5-5.da6b525.png"},892:function(v,_,t){v.exports=t.p+"img/5-6.8fa823e.png"},893:function(v,_,t){v.exports=t.p+"img/5-7.97aa642.png"},894:function(v,_,t){v.exports=t.p+"img/5-8.fe83635.png"},895:function(v,_,t){v.exports=t.p+"img/5-9.891464b.png"},896:function(v,_,t){v.exports=t.p+"img/5-10.c8f6821.png"},897:function(v,_,t){v.exports=t.p+"img/5-11.e57e0ff.png"},898:function(v,_,t){v.exports=t.p+"img/5-12.b21bf4f.png"}}]);