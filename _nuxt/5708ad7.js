(window.webpackJsonp=window.webpackJsonp||[]).push([[21,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577],{1357:function(v,_,t){const r={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概念"}},[v._v("概念")]),v._v(" "),r("p",[v._v("解决外部设备种类多样的问题。使用相同的总线标准的外设可以在不同计算机之间兼容")]),v._v(" "),r("p",[v._v("缺点：成为信息通道的瓶颈。总线带宽限制了整条总线的吞吐量")]),v._v(" "),r("p",[v._v("总线的层次结构：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(684),alt:"6-1"}})]),v._v(" "),r("p",[v._v("早期总线内部结构：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(685),alt:"6-2"}})]),v._v(" "),r("p",[v._v("当代总线内部结构：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(686),alt:"6-3"}})]),v._v(" "),r("h2",{attrs:{id:"总线的性能指标"}},[v._v("总线的性能指标")]),v._v(" "),r("ul",[r("li",[v._v("总线宽度 - "),r("strong",[v._v("数据线")]),v._v("的条数")]),v._v(" "),r("li",[v._v("总线传输率（总线带宽） - 每秒传输最大字节或比特数")]),v._v(" "),r("li",[v._v("总线定时协定 - 同步方式、异步方式、半同步方式、分离方式")]),v._v(" "),r("li",[v._v("信号线数 - 地址线、数据线、控制线的总和")])]),v._v(" "),r("h2",{attrs:{id:"总线接口"}},[v._v("总线接口")]),v._v(" "),r("p",[v._v("计算机传输信息有两种基本方式：")]),v._v(" "),r("ul",[r("li",[v._v("串行传送")]),v._v(" "),r("li",[v._v("并行传送")])]),v._v(" "),r("p",[v._v("处于速度与效率上的考虑，"),r("strong",[v._v("总线使用并行传送")])]),v._v(" "),r("h3",{attrs:{id:"串行传送"}},[v._v("串行传送")]),v._v(" "),r("p",[v._v("只需要一根传输线，长距离传输有优势。但是速度慢")]),v._v(" "),r("h3",{attrs:{id:"并行传送"}},[v._v("并行传送")]),v._v(" "),r("p",[v._v("每一位数据需要一根传输线")]),v._v(" "),r("p",[v._v("地址和数据分时传送，即总线的"),r("strong",[v._v("分时复用")])]),v._v(" "),r("p",[v._v("总线上的多个部件分时共享总线")]),v._v(" "),r("h3",{attrs:{id:"接口的基本功能"}},[v._v("接口的基本功能")]),v._v(" "),r("ul",[r("li",[v._v("控制")]),v._v(" "),r("li",[v._v("缓冲")]),v._v(" "),r("li",[v._v("状态控制")]),v._v(" "),r("li",[v._v("转换数据")]),v._v(" "),r("li",[v._v("程序中断")])]),v._v(" "),r("h2",{attrs:{id:"总线仲裁"}},[v._v("总线仲裁")]),v._v(" "),r("h3",{attrs:{id:"主设备与从设备"}},[v._v("主设备与从设备")]),v._v(" "),r("p",[v._v("总线事务包括两个部分：")]),v._v(" "),r("ul",[r("li",[v._v("发起命令与地址")]),v._v(" "),r("li",[v._v("传输数据")])]),v._v(" "),r("p",[v._v("主设备与从设备之间可以双向数据传输")]),v._v(" "),r("p",[v._v("只有主设备可以给从设备发出命令与地址，是总线事务的发起者")]),v._v(" "),r("p",[v._v("从设备是总线事务的响应者")]),v._v(" "),r("ul",[r("li",[v._v("主设备发出读命令时把数据发送到主设备")]),v._v(" "),r("li",[v._v("主设备发出写命令时接收主设备发来的数据并写入")])]),v._v(" "),r("h3",{attrs:{id:"仲裁基础"}},[v._v("仲裁基础")]),v._v(" "),r("p",[v._v("总线仲裁解决多个"),r("strong",[v._v("主设备")]),v._v("争用总线的问题。因为在外设给CPU发送消息时外设是主设备")]),v._v(" "),r("p",[r("strong",[v._v("总线占用期")]),v._v("：主设备持续控制总线的时间")]),v._v(" "),r("p",[v._v("总线仲裁的基本方式：")]),v._v(" "),r("ul",[r("li",[v._v("集中仲裁\n"),r("ul",[r("li",[v._v("链式查询")]),v._v(" "),r("li",[v._v("计数器定时查询")]),v._v(" "),r("li",[v._v("独立请求方式")])])]),v._v(" "),r("li",[v._v("分布仲裁")])]),v._v(" "),r("p",[v._v("集中仲裁由主设备统一管理，就像有红绿灯的十字路口的车辆统一受红绿灯的控制。分布仲裁就像没有红绿灯的十字路口，所有车辆先停下确认没有其他车辆后通行")]),v._v(" "),r("h3",{attrs:{id:"链式查询方式"}},[v._v("链式查询方式")]),v._v(" "),r("p",[r("img",{attrs:{src:t(687),alt:"6-4"}})]),v._v(" "),r("ul",[r("li",[v._v("总线申请者通过置/BR=0发出总线申请")]),v._v(" "),r("li",[v._v("如果/BR=0且总线空闲(/BB=1)时，总线控制器置BG=1，响应总线请求")]),v._v(" "),r("li",[v._v("若模块没有申请总线却收到了BG=1则继续传递BG=1")]),v._v(" "),r("li",[v._v("若模块发出了总线申请，且/BR=0, /BB=1，此时收到了BG=1，则把BG置0（即不再向下传输），并把/BB置0，表示总线已被占用")]),v._v(" "),r("li",[v._v("使用完总线后把/BB置1表示归还总线")])]),v._v(" "),r("p",[v._v("优点：")]),v._v(" "),r("ul",[r("li",[v._v("实现简单，只需要固定数量的控制线实现优先级控制")]),v._v(" "),r("li",[v._v("便于增删总线上的设备，总线控制器的结构与总线上的模块数量无关")])]),v._v(" "),r("p",[v._v("缺点：")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("故障敏感")]),v._v("，某个模块故障之后，后面的模块都不能正常查询")]),v._v(" "),r("li",[v._v("仲裁速度慢，主设备越多时间越长")]),v._v(" "),r("li",[v._v("优先级不能改变，低优先级设备可能饿死")])]),v._v(" "),r("h3",{attrs:{id:"计数器定时查询方式"}},[v._v("计数器定时查询方式")]),v._v(" "),r("p",[r("img",{attrs:{src:t(688),alt:"6-5"}})]),v._v(" "),r("p",[v._v("设备申请总线时，通过/BR发出总线请求，中央仲裁器接收到请求后在BB线为0（总线空闲）的情况下启动计数器开始计数，计数值通过一组地址线发给各设备，每个设备接口都有一个"),r("strong",[v._v("设备地址判别电路")]),v._v("，当地址线上的计数值与总线请求的设备的设备地址一致时，该设备获得使用权，把BB线置1，计数器暂停计数")]),v._v(" "),r("p",[v._v("每次计数可以从0开始，也可以从暂停点开始。如果从0开始，类似于链式查询，优先级固定。如果从暂停点开始，各设备优先级相等。计数器的初值也可以由程序设置。这可以方便地更改优先级，这种灵活性是以增加地址线为代价的")]),v._v(" "),r("h3",{attrs:{id:"独立请求方式"}},[v._v("独立请求方式")]),v._v(" "),r("p",[r("img",{attrs:{src:t(689),alt:"6-6"}})]),v._v(" "),r("p",[v._v("并行仲裁")]),v._v(" "),r("p",[v._v("优点：")]),v._v(" "),r("ul",[r("li",[v._v("速度快，与模块数无关")]),v._v(" "),r("li",[v._v("对优先级的控制灵活")]),v._v(" "),r("li",[v._v("对故障不敏感")])]),v._v(" "),r("p",[v._v("缺点：")]),v._v(" "),r("ul",[r("li",[v._v("需要大量请求线和允许线")]),v._v(" "),r("li",[v._v("电路复杂")]),v._v(" "),r("li",[v._v("不容易增加设备")])]),v._v(" "),r("h3",{attrs:{id:"分布式仲裁方式"}},[v._v("分布式仲裁方式")]),v._v(" "),r("p",[v._v("没有中央仲裁器，而是多个仲裁器竞争使用总线")]),v._v(" "),r("p",[r("img",{attrs:{src:t(690),alt:"6-7"}})]),v._v(" "),r("p",[v._v("某设备需要使用总线时，将自身的"),r("strong",[v._v("仲裁号")]),v._v("发到仲裁总线上，各设备通过仲裁总线互相比较仲裁号的大小，仲裁号最大的获得使用权")]),v._v(" "),r("h2",{attrs:{id:"总线数据传输方式"}},[v._v("总线数据传输方式")]),v._v(" "),r("h3",{attrs:{id:"基础"}},[v._v("基础")]),v._v(" "),r("p",[v._v("完成数据传输分四个阶段")]),v._v(" "),r("ul",[r("li",[v._v("申请阶段\n"),r("ul",[r("li",[v._v("主设备提出申请，总线仲裁器决定总线使用权")])])]),v._v(" "),r("li",[v._v("寻址阶段\n"),r("ul",[r("li",[v._v("获得总线的主设备发出存储器地址或IO端口地址，使模块启动")])])]),v._v(" "),r("li",[v._v("传输阶段")]),v._v(" "),r("li",[v._v("结束阶段\n"),r("ul",[r("li",[v._v("主从设备的有关信息从总线上撤除，让出总线")])])])]),v._v(" "),r("p",[v._v("总线传输的四种方式：")]),v._v(" "),r("ul",[r("li",[v._v("同步方式 - 使用统一的"),r("strong",[v._v("时标")]),v._v("控制数据传送")]),v._v(" "),r("li",[v._v("异步方式 - 使用"),r("strong",[v._v("应答")]),v._v("方式，无时标")]),v._v(" "),r("li",[v._v("半同步方式 - 结合同步与异步")]),v._v(" "),r("li",[v._v("分离方式 - 减少总线无效占用时间")])]),v._v(" "),r("h3",{attrs:{id:"同步方式"}},[v._v("同步方式")]),v._v(" "),r("p",[v._v("主从模块在"),r("strong",[v._v("同一时钟")]),v._v("的控制下传送。完成一次数据传送的传输周期（即总线周期）是固定的")]),v._v(" "),r("p",[r("img",{attrs:{src:t(691),alt:"6-8"}})]),v._v(" "),r("h3",{attrs:{id:"异步方式"}},[v._v("异步方式")]),v._v(" "),r("p",[v._v("应答式传输，使用**请求线(REQ)"),r("strong",[v._v("和")]),v._v("应答线(ACK)**来协调传输过程而不依赖公共时钟信号")]),v._v(" "),r("p",[r("img",{attrs:{src:t(692),alt:"6-9"}})]),v._v(" "),r("h3",{attrs:{id:"半同步方式"}},[v._v("半同步方式")]),v._v(" "),r("p",[v._v("同步和异步的结合。有同步时钟，但"),r("strong",[v._v("传输周期可变")]),v._v("，增加一条信号线(Ready)，主模块解释该信号线查看选中的模块是否准备好。如果未准备好则插入等待状态，延长总线传输周期")]),v._v(" "),r("h3",{attrs:{id:"分离方式"}},[v._v("分离方式")]),v._v(" "),r("p",[v._v("把传输周期（总线周期）分为两个子周期")]),v._v(" "),r("ol",[r("li",[v._v("主模块申请总线，发出地址、控制命令（读/写）。使用完后释放总线")]),v._v(" "),r("li",[v._v("模块准备好数据后，申请总线，获准后把数据送至总线")])]),v._v(" "),r("p",[v._v("特点：")]),v._v(" "),r("ul",[r("li",[v._v("模块准备数据时不占用总线")]),v._v(" "),r("li",[v._v("大大提高总线的利用率")]),v._v(" "),r("li",[v._v("适用于多个主模块的系统")])]),v._v(" "),r("h2",{attrs:{id:"总线的数据传输模式"}},[v._v("总线的数据传输模式")]),v._v(" "),r("h3",{attrs:{id:"读写操作"}},[v._v("读写操作")]),v._v(" "),r("p",[r("img",{attrs:{src:t(693),alt:"6-10"}})]),v._v(" "),r("ul",[r("li",[v._v("读操作是由"),r("strong",[v._v("从方到主方")]),v._v("的数据传送")]),v._v(" "),r("li",[v._v("写操作是由"),r("strong",[v._v("主方到从方")]),v._v("的数据传送")])]),v._v(" "),r("p",[v._v("通常主方先以一个总线周期发出命令和从方地址，经过一定的延时再开始数据传送总线周期")]),v._v(" "),r("p",[v._v("为了提高利用率，主方寻址后可以让出总线控制权，以便其他主方完成更紧迫的操作而自己准备数据，然后重新竞争总线完成数据传送")]),v._v(" "),r("h3",{attrs:{id:"块传送操作"}},[v._v("块传送操作")]),v._v(" "),r("p",[r("img",{attrs:{src:t(694),alt:"6-11"}})]),v._v(" "),r("ul",[r("li",[v._v("只需给出块的起始地址，然后对固定块长度的数据逐一地读出或写入")]),v._v(" "),r("li",[v._v("对于CPU（主方）-存储器（从方）而言的块传送，常称为"),r("strong",[v._v("突发式传送")]),v._v("，块长一般为存储器字长的4倍")]),v._v(" "),r("li",[v._v("由主方控制直到结束")])]),v._v(" "),r("p",[v._v("例如一个64位数据线的总线，一次突发式传送可达256位，在超标量流水线中非常有用")]),v._v(" "),r("h3",{attrs:{id:"写后读-读后写操作"}},[v._v("写后读、读后写操作")]),v._v(" "),r("p",[r("img",{attrs:{src:t(695),alt:"6-12"}})]),v._v(" "),r("p",[v._v("组合操作。"),r("strong",[v._v("只给出一次地址")]),v._v("，先写后读或先读后写。前者处于"),r("strong",[v._v("校验")]),v._v("的目的，后者用于多道程序系统中对共享资源的保护。主方掌管总线直到整个操作完成")]),v._v(" "),r("h3",{attrs:{id:"广播-广集操作"}},[v._v("广播、广集操作")]),v._v(" "),r("p",[v._v("通常数据传送只在一个主方和一个从方之间进行，但是有的总线允许"),r("strong",[v._v("一个主方对多个从方进行写操作")]),v._v("，称为"),r("strong",[v._v("广播")])]),v._v(" "),r("p",[v._v("与广播相反的称为"),r("strong",[v._v("广集")]),v._v("，它将选定的多个从方数据在总线上完成AND或OR操作，用来检测多个中断源")]),v._v(" "),r("h2",{attrs:{id:"pci总线体系"}},[v._v("PCI总线体系")]),v._v(" "),r("p",[v._v("Peripheral Component Interconnect 周边器件互联")]),v._v(" "),r("h3",{attrs:{id:"多总线结构与桥的概念"}},[v._v("多总线结构与桥的概念")]),v._v(" "),r("p",[v._v("多层总线，各层之间使用"),r("strong",[v._v("桥")]),v._v("进行连接")]),v._v(" "),r("p",[r("img",{attrs:{src:t(696),alt:"6-13"}})]),v._v(" "),r("p",[v._v("三种不同的总线和桥：")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("HOST")]),v._v("总线用于连接CPU、cache和主存。也称"),r("strong",[v._v("前端总线")]),v._v("。可以连接多个CPU")]),v._v(" "),r("li",[r("strong",[v._v("PCI")]),v._v("总线用于连接各种"),r("strong",[v._v("高速")]),v._v("PCI设备（显卡、网卡等），可以使主设备也可以是从设备")]),v._v(" "),r("li",[r("strong",[v._v("LAGACY")]),v._v("总线用于连接已有的"),r("strong",[v._v("中低速设备")])])]),v._v(" "),r("p",[r("strong",[v._v("桥")]),v._v("是一个"),r("strong",[v._v("总线转换部件")]),v._v("，可以"),r("strong",[v._v("把一条总线的地址映射到另一条总线的地址空间")]),v._v("。PCI总线的三种桥都属于PCI设备。"),r("strong",[v._v("被桥隔开后各个总线可以并行工作")])]),v._v(" "),r("ul",[r("li",[v._v("写操作时，桥"),r("strong",[v._v("缓存")]),v._v("上层总线的写数据，然后在下层总线生成写周期与写数据（起到缓冲作用）")]),v._v(" "),r("li",[v._v("读操作时，桥可以早于上层总线，直接在下层总线进行预读")])]),v._v(" "),r("p",[v._v("所以"),r("strong",[v._v("桥可以使所有存取都按照CPU的需要出现在总线上")])]),v._v(" "),r("h3",{attrs:{id:"pci信号"}},[v._v("PCI信号")]),v._v(" "),r("p",[v._v("信号线120条，包括电源线、地线、保留信号线等。已经定义的信号线分为两类：")]),v._v(" "),r("ul",[r("li",[v._v("必备信号线\n"),r("ul",[r("li",[v._v("主设备49条，从设备47条")])])]),v._v(" "),r("li",[v._v("可选信号线\n"),r("ul",[r("li",[v._v("51条，用于64位扩展、中断请求、高速缓存支持等")])])])]),v._v(" "),r("h3",{attrs:{id:"pci总线周期"}},[v._v("PCI总线周期")]),v._v(" "),r("p",[v._v("总线类型由主设备发出的控制信号代码指明")]),v._v(" "),r("p",[r("img",{attrs:{src:t(697),alt:"6-14"}})]),v._v(" "),r("p",[v._v("周期类型：")]),v._v(" "),r("ul",[r("li",[v._v("存储器读写总线周期")]),v._v(" "),r("li",[v._v("存储器写并无效周期")]),v._v(" "),r("li",[v._v("特殊周期")]),v._v(" "),r("li",[v._v("配置读写周期")]),v._v(" "),r("li",[v._v("双地址周期")])]),v._v(" "),r("h3",{attrs:{id:"pci总线仲裁"}},[v._v("PCI总线仲裁")]),v._v(" "),r("p",[r("strong",[v._v("集中式仲裁")]),v._v("，每个PCI"),r("strong",[v._v("主设备")]),v._v("都有独立的REQ#（总线请求）和GNT#（总线授权）两条信号线与中央仲裁器相连（从设备没有）")]),v._v(" "),r("p",[v._v("总线仲裁器一般位于"),r("strong",[v._v("桥接芯片")]),v._v("中")]),v._v(" "),r("h3",{attrs:{id:"南北桥"}},[v._v("南北桥")]),v._v(" "),r("p",[r("img",{attrs:{src:t(698),alt:"6-15"}})]),v._v(" "),r("p",[v._v("Host桥称为北桥，其他称为南桥")]),v._v(" "),r("h2",{attrs:{id:"通用串行总线usb"}},[v._v("通用串行总线USB")]),v._v(" "),r("p",[v._v("Universal Serial Bus")]),v._v(" "),r("h3",{attrs:{id:"pc机io方式的弊端"}},[v._v("PC机IO方式的弊端")]),v._v(" "),r("p",[v._v("标准PC机外围设备接口是"),r("strong",[v._v("非共享式接口")]),v._v("，IO接口支持单个设备的连接。同一时刻只有一个外围设备可以连接，灵活性低")]),v._v(" "),r("p",[v._v("为了添加一种新外设，通常是做一块专用的"),r("strong",[v._v("扩展卡")]),v._v("查到扩展总线上，为新的外围设备建立一个连接通道。这种方案适应性差、扩展卡种类繁多、不能热插拔、成本高")]),v._v(" "),r("h3",{attrs:{id:"usb特点"}},[v._v("USB特点")]),v._v(" "),r("p",[v._v("根据平时我们对USB的使用不难发现")]),v._v(" "),r("ul",[r("li",[v._v("即插即用\n"),r("ul",[r("li",[v._v("热插拔")]),v._v(" "),r("li",[v._v("自动配置")])])]),v._v(" "),r("li",[v._v("独立供电")]),v._v(" "),r("li",[v._v("携带方便")]),v._v(" "),r("li",[v._v("标准统一")]),v._v(" "),r("li",[v._v("可连接多设备")]),v._v(" "),r("li",[v._v("成本低")])]),v._v(" "),r("p",[v._v("不足：")]),v._v(" "),r("ul",[r("li",[v._v("实际串联3到4个设备以上就可能导致一些设备失效")]),v._v(" "),r("li",[v._v("USB提供500mA的电力，对于高电耗的设备需要外接电源")])])])}]};v.exports={attributes:{layout:"collection",title:"总线系统",collection:"ComputerOrganizationPrinciple"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},684:function(v,_,t){v.exports=t.p+"img/6-1.4914267.png"},685:function(v,_,t){v.exports=t.p+"img/6-2.cd33a11.png"},686:function(v,_,t){v.exports=t.p+"img/6-3.0ccadf3.png"},687:function(v,_,t){v.exports=t.p+"img/6-4.c55ca06.png"},688:function(v,_,t){v.exports=t.p+"img/6-5.e414086.png"},689:function(v,_,t){v.exports=t.p+"img/6-6.85b6ffc.png"},690:function(v,_,t){v.exports=t.p+"img/6-7.46eb267.png"},691:function(v,_,t){v.exports=t.p+"img/6-8.e93e98f.png"},692:function(v,_,t){v.exports=t.p+"img/6-9.e4b2b45.png"},693:function(v,_,t){v.exports=t.p+"img/6-10.1549a5d.png"},694:function(v,_,t){v.exports=t.p+"img/6-11.c953120.png"},695:function(v,_,t){v.exports=t.p+"img/6-12.b1ed780.png"},696:function(v,_,t){v.exports=t.p+"img/6-13.6d8ac7d.png"},697:function(v,_,t){v.exports=t.p+"img/6-14.a39ce1e.png"},698:function(v,_,t){v.exports=t.p+"img/6-15.c6f5684.png"}}]);