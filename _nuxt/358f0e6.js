(window.webpackJsonp=window.webpackJsonp||[]).push([[13,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538],{1370:function(v,_,t){const c={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,c=v._self._c||_;return c("div",{staticClass:"frontmatter-markdown"},[c("h2",{attrs:{id:"存储系统基本知识"}},[v._v("存储系统基本知识")]),v._v(" "),c("h3",{attrs:{id:"存储器层次系统"}},[v._v("存储器层次系统")]),v._v(" "),c("p",[v._v("程序运行的局部性：")]),v._v(" "),c("ul",[c("li",[v._v("空间局部性 - 短时间内程序所访问的存储器地址在很大比例上集中在存储器地址空间的很小范围内")]),v._v(" "),c("li",[v._v("时间局部性 - 在一小段时间内最近被访问过的程序和数据很可能再次被访问")])]),v._v(" "),c("p",[v._v("越接近CPU，速度越快，容量越小，成本越高")]),v._v(" "),c("h3",{attrs:{id:"存储器编址方式"}},[v._v("存储器编址方式")]),v._v(" "),c("ul",[c("li",[v._v("按字节编址")]),v._v(" "),c("li",[v._v("按字编址")]),v._v(" "),c("li",[v._v("按半字编址等")])]),v._v(" "),c("p",[v._v("物理存储器中低字节存放在前面、高字节存放在后面，成为LE(Little Endian)，反之成为BE(Big Endian)")]),v._v(" "),c("h3",{attrs:{id:"存储器主要的性能指标"}},[v._v("存储器主要的性能指标")]),v._v(" "),c("ul",[c("li",[v._v("容量")]),v._v(" "),c("li",[v._v("存取速度\n"),c("ul",[c("li",[v._v("访问时间（存取时间）T"),c("sub",[v._v("A")]),v._v(" "),c("ul",[c("li",[v._v("从存储器接收到读写命令到信息被读出或写入所需的时间")])])]),v._v(" "),c("li",[v._v("存储周期T"),c("sub",[v._v("M")]),v._v(" "),c("ul",[c("li",[v._v("在存储器连续读写过程中一次完整的存取操作所需的时间（CPU连续两次访问存储器的最小时间间隔）")])])]),v._v(" "),c("li",[v._v("通常T"),c("sub",[v._v("M")]),v._v(" >> T"),c("sub",[v._v("A")])])])]),v._v(" "),c("li",[v._v("存储器带宽\n"),c("ul",[c("li",[v._v("单位时间能够传送的信息量")])])])]),v._v(" "),c("h3",{attrs:{id:"处理器与主存储器的连接"}},[v._v("处理器与主存储器的连接")]),v._v(" "),c("p",[v._v("通过"),c("strong",[v._v("地址、数据、控制")]),v._v("三类总线与CPU或其他部件连接")]),v._v(" "),c("p",[c("img",{attrs:{src:t(625),alt:"3-1"}})]),v._v(" "),c("ul",[c("li",[v._v("地址总线n位的话可寻址最大主存空间为2"),c("sup",[v._v("n")])]),v._v(" "),c("li",[v._v("数据总线宽度为一个地址内的比特数，通常为8的倍数")]),v._v(" "),c("li",[v._v("控制总线确定总线周期的类型和本次操作完成的时刻")])]),v._v(" "),c("h3",{attrs:{id:"存储器读写过程"}},[v._v("存储器读写过程")]),v._v(" "),c("ul",[c("li",[v._v("读过程\n"),c("ul",[c("li",[v._v("给出目标地址")]),v._v(" "),c("li",[v._v("给出片选信号与读命令")]),v._v(" "),c("li",[v._v("外部保存读出内容")])])]),v._v(" "),c("li",[v._v("写过程\n"),c("ul",[c("li",[v._v("给出目标地址")]),v._v(" "),c("li",[v._v("给出片选信号与待写入数据")]),v._v(" "),c("li",[v._v("给出写命令")])])])]),v._v(" "),c("h2",{attrs:{id:"sram静态存储器"}},[v._v("SRAM静态存储器")]),v._v(" "),c("h3",{attrs:{id:"sram基本信息"}},[v._v("SRAM基本信息")]),v._v(" "),c("p",[c("img",{attrs:{src:t(626),alt:"3-2"}})]),v._v(" "),c("p",[v._v("片选线生效时表示选中了此芯片，读写信号才有效")]),v._v(" "),c("p",[v._v("存储体内是一个二维的寻址结构，输送地址时需要两个地址（X坐标和Y坐标）")]),v._v(" "),c("p",[c("img",{attrs:{src:t(627),alt:"3-3"}})]),v._v(" "),c("p",[v._v("上图为双译码方式寻址（比单译码结构节省选择线的条数），使用两组地址线输送地址")]),v._v(" "),c("p",[v._v("双译码结构图：")]),v._v(" "),c("p",[c("img",{attrs:{src:t(628),alt:"3-4"}})]),v._v(" "),c("h3",{attrs:{id:"sram的组成"}},[v._v("SRAM的组成")]),v._v(" "),c("ul",[c("li",[v._v("驱动器")]),v._v(" "),c("li",[v._v("IO电路")]),v._v(" "),c("li",[v._v("片选与读写控制电路")]),v._v(" "),c("li",[v._v("输出驱动电路")])]),v._v(" "),c("h3",{attrs:{id:"sram实例"}},[v._v("SRAM实例")]),v._v(" "),c("p",[c("img",{attrs:{src:t(629),alt:"3-5"}})]),v._v(" "),c("p",[v._v("CS信号为片选信号，WE信号为写使能信号")]),v._v(" "),c("h3",{attrs:{id:"sram时序图"}},[v._v("SRAM时序图")]),v._v(" "),c("p",[v._v("读周期时序图：")]),v._v(" "),c("p",[c("img",{attrs:{src:t(630),alt:"3-8"}})]),v._v(" "),c("p",[v._v("t"),c("sub",[v._v("RC")]),v._v("为"),c("strong",[v._v("读周期")]),v._v("。在t"),c("sub",[v._v("RC")]),v._v("的起始部分，地址线给出了有效地址，然后给出了片选信号CS与读命令（读使能）OE，在下一次时钟脉冲时存储器发现片选信号和读命令，于是将数据送入IO总线。"),c("strong",[v._v("需要注意的就是地址信号、CS/OE信号和数据出现的时间顺序")])]),v._v(" "),c("p",[v._v("写周期时序图：")]),v._v(" "),c("p",[c("img",{attrs:{src:t(631),alt:"3-9"}})]),v._v(" "),c("p",[v._v("t"),c("sub",[v._v("WC")]),v._v("为"),c("strong",[v._v("写周期")]),v._v("。同样是先给出地址，然后片选信号生效，接下来是写命令。在写命令之前数据就应该已经放在数据总线了。在t"),c("sub",[v._v("WD")]),v._v("时间内写入数据。为了写入可靠，片选信号维持了比读周期更长的时间")]),v._v(" "),c("p",[v._v("一般取t"),c("sub",[v._v("RC")]),v._v(" = t"),c("sub",[v._v("WC")]),v._v("，称作"),c("strong",[v._v("存取周期")])]),v._v(" "),c("h2",{attrs:{id:"dram动态存储器"}},[v._v("DRAM动态存储器")]),v._v(" "),c("h3",{attrs:{id:"dram基础"}},[v._v("DRAM基础")]),v._v(" "),c("p",[v._v("一个SRAM的存储单元需要六只晶体管，DRAM可以减少晶体管的使用，但是需要周期充电以维持存储内容不丢失（称为"),c("strong",[v._v("动态刷新")]),v._v("）。所以DRAM需要额外的"),c("strong",[v._v("刷新电路")])]),v._v(" "),c("p",[c("img",{attrs:{src:t(632),alt:"3-10"}})]),v._v(" "),c("p",[v._v("因为DRAM存储密度大，所以引脚会不够用。采用"),c("strong",[v._v("分时复用地址线")]),v._v("的策略，第一次送出行地址，第二次送出列地址。所以需要行地址选中信号"),c("strong",[v._v("RAS")]),v._v("和列地址选中信号"),c("strong",[v._v("CAS")]),v._v("，还需要地址锁存器来保存之前的地址")]),v._v(" "),c("h3",{attrs:{id:"dram读写周期"}},[v._v("DRAM读写周期")]),v._v(" "),c("p",[c("img",{attrs:{src:t(633),alt:"3-11"}})]),v._v(" "),c("p",[c("img",{attrs:{src:t(634),alt:"3-12"}})]),v._v(" "),c("p",[v._v("需要注意的是"),c("strong",[v._v("先给出行地址和列地址之后才能读写数据，RAS与CAS信号在对应时间段生效")])]),v._v(" "),c("h3",{attrs:{id:"dram刷新策略"}},[v._v("DRAM刷新策略")]),v._v(" "),c("ul",[c("li",[v._v("集中式刷新")])]),v._v(" "),c("p",[v._v("一次性刷新所有存储单元。缺点是刷新时间内无法访问存储器，无法响应系统紧急事件")]),v._v(" "),c("p",[c("img",{attrs:{src:t(635),alt:"3-13"}})]),v._v(" "),c("ul",[c("li",[v._v("分散式刷新")])]),v._v(" "),c("p",[v._v("刷新操作嵌入到正常的读写操作中，且一行一行的刷新")]),v._v(" "),c("p",[v._v("例如某DRAM有1024行，刷新周期8ms，则每隔7.8μs刷新一行")]),v._v(" "),c("p",[v._v("使用"),c("strong",[v._v("CAS在RAS之前的刷新操作")]),v._v("，正常读写时先送RAS再送CAS，如果先送CAS就表示进行刷新操作")]),v._v(" "),c("h3",{attrs:{id:"dram-vs-sram"}},[v._v("DRAM vs SRAM")]),v._v(" "),c("table",[c("thead",[c("tr",[c("th",[v._v("DRAM")]),v._v(" "),c("th",[v._v("SRAM")])])]),v._v(" "),c("tbody",[c("tr",[c("td",[v._v("通常用于主存")]),v._v(" "),c("td",[v._v("通常用于cache")])]),v._v(" "),c("tr",[c("td",[v._v("晶体管数量少")]),v._v(" "),c("td",[v._v("晶体管数量多")])]),v._v(" "),c("tr",[c("td",[v._v("每2-8ms需要刷新")]),v._v(" "),c("td",[v._v("不需要刷新")])]),v._v(" "),c("tr",[c("td",[v._v("读操作是破坏性的，需要回写(write-back)")]),v._v(" "),c("td",[v._v("读操作不是破坏性的")])]),v._v(" "),c("tr",[c("td",[v._v("存储密度大")]),v._v(" "),c("td",[v._v("访问速度快")])]),v._v(" "),c("tr",[c("td",[v._v("一组地址线分时复用（引脚不够）")]),v._v(" "),c("td",[v._v("两组地址线")])])])]),v._v(" "),c("h2",{attrs:{id:"存储器容量扩展"}},[v._v("存储器容量扩展")]),v._v(" "),c("ul",[c("li",[v._v("位扩展 - 增加存储器字长")]),v._v(" "),c("li",[v._v("字扩展 - 增加存储器字的数量，需要增加一些地址作为片选信号")]),v._v(" "),c("li",[v._v("字位同时扩展")])]),v._v(" "),c("h3",{attrs:{id:"位扩展"}},[v._v("位扩展")]),v._v(" "),c("p",[c("img",{attrs:{src:t(636),alt:"3-6"}})]),v._v(" "),c("p",[v._v("不需要增加片选信号，地址信号和片选信号同时作用于所有芯片，芯片一起输出到数据线")]),v._v(" "),c("h3",{attrs:{id:"字扩展"}},[v._v("字扩展")]),v._v(" "),c("p",[c("img",{attrs:{src:t(637),alt:"3-7"}})]),v._v(" "),c("p",[v._v("增加了寻址空间，需要增加地址线作为片选信号。地址线和读写线同样同时作用于所有芯片，只有被片选线选中的芯片做出响应。被选中的芯片将数据发送到数据总线")]),v._v(" "),c("h2",{attrs:{id:"rom只读存储器"}},[v._v("ROM只读存储器")]),v._v(" "),c("h3",{attrs:{id:"掩膜式只读存储器"}},[v._v("掩膜式只读存储器")]),v._v(" "),c("p",[v._v("在芯片的制造过程中就编好程序，使用时只能读出不能修改")]),v._v(" "),c("p",[v._v("优点：可靠性高，集成度高，价格便宜，适合大批量生产")]),v._v(" "),c("p",[v._v("缺点：不能重写")]),v._v(" "),c("h3",{attrs:{id:"一次编程只读存储器prom"}},[v._v("一次编程只读存储器PROM")]),v._v(" "),c("p",[v._v("出厂时所有存储元均制成0，用户根据自己的需要把存储元改为1。此改变是一个不可逆的过程（如把熔丝烧断或击穿PN结）")]),v._v(" "),c("h2",{attrs:{id:"flash闪速存储器"}},[v._v("FLASH闪速存储器")]),v._v(" "),c("p",[v._v("闪存分两类：")]),v._v(" "),c("ul",[c("li",[v._v("NOR闪存\n"),c("ul",[c("li",[v._v("擦除写入时间较长。能够随机存取。适用于存储偶尔需要修改的程序代码")])])]),v._v(" "),c("li",[v._v("NAND闪存\n"),c("ul",[c("li",[v._v("擦除写入速度快，有较高的密度和较低的位成本。更多的擦除次数。只允许顺序存取数据。适用于高容量存储设备，如U盘")])])])]),v._v(" "),c("p",[c("strong",[v._v("闪速存储器是目前唯一具有大容量、非易失性、低价、可在线改写、较高速度的存储器")])]),v._v(" "),c("p",[v._v("FLASH比SRAM成本低，比SRAM集成度高，信息不易失")]),v._v(" "),c("p",[v._v("擦写次数和速度逊于DRAM，不能取代DRAM")]),v._v(" "),c("p",[v._v("闪存可以按照区块sector或页面page组织内容，能够通过不同的命令进入不同的状态（如整片擦除、页面擦除、整片编程等）")]),v._v(" "),c("h2",{attrs:{id:"并行存储器"}},[v._v("并行存储器")]),v._v(" "),c("h3",{attrs:{id:"双端口存储器"}},[v._v("双端口存储器")]),v._v(" "),c("p",[v._v("拥有两组相互独立的读写控制线、地址线和数据线，提供了两个相互独立的端口（左端口与右端口）")]),v._v(" "),c("p",[v._v("当两个端口读写的地址不同时读写操作不会产生冲突。当地址相同时，为了解决冲突，设置了BUSY标志线，由内部逻辑部件判断哪个端口优先操作，而另一个端口的BUSY设置成有效，延迟读写操作")]),v._v(" "),c("h3",{attrs:{id:"多模块存储器"}},[v._v("多模块存储器")]),v._v(" "),c("p",[v._v("由若干个模块组成的主存储器是线性编址的。编址方式有两个：")]),v._v(" "),c("ul",[c("li",[v._v("顺序方式")])]),v._v(" "),c("p",[v._v("数据顺序放在链式连接的存储器中")]),v._v(" "),c("p",[c("img",{attrs:{src:t(638),alt:"3-14"}})]),v._v(" "),c("p",[v._v("只能"),c("strong",[v._v("串行访问")]),v._v("。某一模块故障不影响其他模块。增加模块可扩充存储器容量")]),v._v(" "),c("ul",[c("li",[v._v("交叉方式")])]),v._v(" "),c("p",[v._v("数据交叉放在不同存储器中")]),v._v(" "),c("p",[c("img",{attrs:{src:t(639),alt:"3-15"}})]),v._v(" "),c("p",[v._v("假设CPU先给M0发出了读信号，M0需要时间（一个存储周期）去准备数据，此时CPU可以给其他存储器发送读信号，等CPU回来接收M0的数据时M0已经准备好数据了。"),c("strong",[v._v("流水线操作")]),v._v("，提升效率和存储器带宽")]),v._v(" "),c("p",[v._v("假设模块存取一个字的存取周期为T，总线传送周期（即在两个模块之间转移的时间）为t，那么令m = T / t称为"),c("strong",[v._v("交叉存取度")]),v._v("，显然存储器的交叉模块数量应该等于交叉存取度m，以此实现效率最大化")]),v._v(" "),c("p",[v._v("交叉方式连续存取m个字所需的时间为"),c("code",{pre:!0},[v._v("T + (m - 1)t")]),v._v("，而顺序方式存储器连续读取m个字需要时间为"),c("code",{pre:!0},[v._v("mT")]),v._v("。以此可以计算出带宽")]),v._v(" "),c("h2",{attrs:{id:"cache存储器"}},[v._v("cache存储器")]),v._v(" "),c("h3",{attrs:{id:"cache概论"}},[v._v("cache概论")]),v._v(" "),c("p",[v._v("大容量的主存储器通常使用DRAM构成，访问速度慢，静态SRAM速度快而容量小")]),v._v(" "),c("p",[v._v("cache: 高速缓冲存储器，一般由SRAM构成，全部由硬件调度，对用户透明")]),v._v(" "),c("p",[v._v("利用了程序的空间局部性与时间局部性")]),v._v(" "),c("p",[v._v("cache可以有很多级，越高级，容量越小，速度越快。高级cache拷贝低级cache中的内容供CPU查找")]),v._v(" "),c("h3",{attrs:{id:"cache的缺失类型"}},[v._v("cache的缺失类型")]),v._v(" "),c("ul",[c("li",[v._v("冷启缺失/义务缺失(Cold miss/Compulsory miss)\n"),c("ul",[c("li",[v._v("cache为空时就是冷启缺失")])])]),v._v(" "),c("li",[v._v("冲突缺失(Conflict miss)\n"),c("ul",[c("li",[v._v("如果低级层的不同数据映射到高级层的同一位置则产生冲突缺失")])])]),v._v(" "),c("li",[v._v("容量缺失(Capacity miss)\n"),c("ul",[c("li",[v._v("活动的cache块的数量超过cache的容量就会产生容量缺失")])])])]),v._v(" "),c("h3",{attrs:{id:"基本参数"}},[v._v("基本参数")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("命中率")])])]),v._v(" "),c("p",[v._v("程序执行期间，令N"),c("sub",[v._v("c")]),v._v("为cache完成存取的总次数，N"),c("sub",[v._v("m")]),v._v("为主存完成存取的总次数，则命中率h=N"),c("sub",[v._v("c")]),v._v("/(N"),c("sub",[v._v("c")]),v._v("+N"),c("sub",[v._v("m")]),v._v(")，即cache命中次数除以总访问次数")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("平均访问时间")])])]),v._v(" "),c("p",[v._v("t"),c("sub",[v._v("c")]),v._v("为命中时cache的访问时间，t"),c("sub",[v._v("m")]),v._v("为未命中时主存的访问时间，则cache/主存系统的平均访问时间t"),c("sub",[v._v("a")]),v._v("=ht"),c("sub",[v._v("c")]),v._v("+(1-h)t"),c("sub",[v._v("m")]),v._v("，即cache访问时间和主存访问时间的加权和")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("访问效率")])])]),v._v(" "),c("p",[v._v("访问效率e=t"),c("sub",[v._v("c")]),v._v("/t"),c("sub",[v._v("a")]),v._v("，即cache访问时间除以平均访问时间")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("命中时间")])])]),v._v(" "),c("p",[v._v("从cache传送一个字到CPU所需的时间")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("缺失率")])])]),v._v(" "),c("p",[v._v("等于"),c("code",{pre:!0},[v._v("1-命中率")])]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("缺失损失/缺失处罚")])])]),v._v(" "),c("p",[v._v("加载低一层cache中的数据到当前层cache的时间+把数据交给处理器的时间。通常远大于cache命中时间（加入cache命中时间为1个时钟，缺失处罚可能为100个时钟）")]),v._v(" "),c("h3",{attrs:{id:"地址映射的基础内容可寻址存储器cam"}},[v._v("地址映射的基础：内容可寻址存储器CAM")]),v._v(" "),c("p",[v._v("CAM(Content Addressable Memory)是一种利用内容寻址的存储器")]),v._v(" "),c("p",[c("img",{attrs:{src:t(640),alt:"3-16"}})]),v._v(" "),c("p",[v._v("普通存储器是输入地址输出数据，CAM则是输入数据输出地址（或另一数据）")]),v._v(" "),c("h3",{attrs:{id:"主存与cache地址的映射"}},[v._v("主存与cache地址的映射")]),v._v(" "),c("p",[v._v("cache数据块称为"),c("strong",[v._v("行")]),v._v("，主存数据块称为"),c("strong",[v._v("块")]),v._v("。cache中通常保存一个**标签(tag)**来保存地址映射关系")]),v._v(" "),c("p",[v._v("地址映射/地址变换的三种策略：")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("全相联映射(Fully Associative Mapping)")])])]),v._v(" "),c("p",[c("img",{attrs:{src:t(641),alt:"3-17"}})]),v._v(" "),c("p",[v._v("把主存中的"),c("strong",[v._v("一小部分块")]),v._v("拷贝在cache中。全相联映射中主存中的每个块都可以放在cache中的"),c("strong",[v._v("任意位置")]),v._v("，主存地址与cache地址没有直接关系，需要链式查找")]),v._v(" "),c("p",[v._v("地址转换逻辑把CPU发送来的地址分成两部分，一个"),c("strong",[v._v("tag")]),v._v("部分，一个"),c("strong",[v._v("偏移量")]),v._v("部分。使用分离出的tag匹配cache中所有行的tag，如果命中则从偏移量处开始读取。如果未命中则取下一级cache中寻找或取主存中寻找")]),v._v(" "),c("p",[v._v("举例：假设一个32位CPU试图从0xFF0144地址读取一个字（32位），每个块有32个字")]),v._v(" "),c("p",[c("img",{attrs:{src:t(642),alt:"3-18"}})]),v._v(" "),c("p",[v._v("全相联映射把块名作为tag，因为每个块有32个字，所以后5位用来表示"),c("strong",[v._v("偏移量")]),v._v("，前32-5=27位作为"),c("strong",[v._v("tag")]),v._v("。使用16进制表示，不是4的整数倍补前导0，得到tag为0x7F80A。在cache中链式查找，找到后根据偏移量读取数据")]),v._v(" "),c("p",[v._v("缺点：需要CAM存储器来比对tag，电路复杂")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("直接映射(Direct Mapping)")])])]),v._v(" "),c("p",[c("img",{attrs:{src:t(643),alt:"3-19"}})]),v._v(" "),c("p",[v._v("直接映射是"),c("strong",[v._v("多对一")]),v._v("的映射关系，一个主存块只能映射到cache中的"),c("strong",[v._v("一个")]),v._v("特定位置。因为主存中的块比cache中的多，必定有很多块使用同一个cache地址")]),v._v(" "),c("p",[v._v("举例：假设一个32位CPU试图从0xFF0144地址读取一个字（32位），每个块有32个字。cache容量为8行")]),v._v(" "),c("p",[c("img",{attrs:{src:t(644),alt:"3-20"}})]),v._v(" "),c("p",[v._v("因为直接映射使用多对一映射，每个主存块只能存放到指定的cache行中。因为每个块有32个字，所以后5位仍为"),c("strong",[v._v("偏移量")]),v._v("。因为cache容量为8行，所以偏移量前面的3位表示了"),c("strong",[v._v("行号")]),v._v("，"),c("strong",[v._v("cache根据行号可以直接访问到指定cache行（而不需要链式查找）")]),v._v("，在当前行内判断剩下的32-3-5=24位是否匹配。如果匹配则cache命中")]),v._v(" "),c("p",[v._v("实现简单，但易产生冲突缺失")]),v._v(" "),c("ul",[c("li",[c("strong",[v._v("v路组相连映射(v-way Set Associative Mapping)")])])]),v._v(" "),c("p",[v._v("简称组相连映射，是上面两个方法的结合体")]),v._v(" "),c("p",[v._v("在直接映射（多对一）的基础上采取多对多的形式，把cache分组，主存中的每个块只能对应到cache中的特定"),c("strong",[v._v("组")]),v._v("（参考直接映射），因为主存容量大于cache容量，所以必定存在很多主存块对应同一个cache组。cache组可以存放多个块，cache在组中链式查找目标标签（参考全相联映射）")]),v._v(" "),c("p",[v._v("如果cache中的组内可以存放v个块，则称v路组相连映射")]),v._v(" "),c("p",[c("img",{attrs:{src:t(645),alt:"3-21"}})]),v._v(" "),c("p",[v._v("所以组相连映射的检索过程：")]),v._v(" "),c("ol",[c("li",[v._v("根据CPU地址传来的到cache中寻找对应的组（这个组一定存在）")]),v._v(" "),c("li",[v._v("在组中链式寻找标签匹配者")]),v._v(" "),c("li",[v._v("如果找到，使用偏移量访存")]),v._v(" "),c("li",[v._v("如果没找到，到下一级cache或者主存中去找")])]),v._v(" "),c("p",[v._v("举例：假设一个32位CPU试图从0xFF0144地址读取一个字（32位），每个块有32个字。cache内含4组，使用v路组相连映射")]),v._v(" "),c("p",[c("img",{attrs:{src:t(646),alt:"3-22"}})]),v._v(" "),c("p",[v._v("每个块32个字，则"),c("strong",[v._v("偏移量")]),v._v("为后5位。cache内含4组，则"),c("strong",[v._v("组号")]),v._v("2位，标签32-5-2=25位，补0得到16进制"),c("strong",[v._v("标签")]),v._v("。根据组号直接选中一个组，然后在组内链式匹配标签")]),v._v(" "),c("p",[v._v("集成了全相联映射和直接映射的优点，"),c("strong",[v._v("被普遍采用")])]),v._v(" "),c("ul",[c("li",[c("p",[c("strong",[v._v("三种映射方式的比较")])])]),v._v(" "),c("li",[c("p",[v._v("全相联映射")]),v._v(" "),c("ul",[c("li",[v._v("每个主存块可以存放在任意cache行")]),v._v(" "),c("li",[v._v("需要CAM")])])]),v._v(" "),c("li",[c("p",[v._v("直接映射")]),v._v(" "),c("ul",[c("li",[v._v("每个主存块只能映射一个唯一cache行")]),v._v(" "),c("li",[v._v("cache中定位时不需要链式查询")]),v._v(" "),c("li",[v._v("cache未命中时新的主存块会立即更新cache行")])])]),v._v(" "),c("li",[c("p",[v._v("组相连映射")]),v._v(" "),c("ul",[c("li",[v._v("每个主存块映射一个唯一cache组内的任意行")]),v._v(" "),c("li",[v._v("在组内链式查询时需要CAM")]),v._v(" "),c("li",[v._v("cache未命中时，新的主存快会替换掉某个cache组内的一行")])])])]),v._v(" "),c("h3",{attrs:{id:"cache替换策略"}},[v._v("cache替换策略")]),v._v(" "),c("p",[v._v("使用组相连映射，cache未命中时新的主存块会替换掉cache组中的一行。替换哪一行？")]),v._v(" "),c("ul",[c("li",[v._v("随机替换(RAND)\n"),c("ul",[c("li",[v._v("硬件随机选择")])])]),v._v(" "),c("li",[v._v("先进先出(FIFO: First-In First-Out)\n"),c("ul",[c("li",[v._v("最先调入此cache组内的块被替换")])])]),v._v(" "),c("li",[v._v("最少使用(LFU: Least Frequently Used)\n"),c("ul",[c("li",[v._v("需要为每个cache行设置访问计数器")])])]),v._v(" "),c("li",[v._v("最久未使用(LRU: Least Recently Used)\n"),c("ul",[c("li",[v._v("需要为每个cache行设置计时器")])])])]),v._v(" "),c("h3",{attrs:{id:"cache的写操作"}},[v._v("cache的写操作")]),v._v(" "),c("p",[v._v("数据的多份拷贝同时存在于cache与主存（或其他存储器）中，有如下写操作策略：")]),v._v(" "),c("ul",[c("li",[v._v("写命中(write hit) - cache中有目标块/行\n"),c("ul",[c("li",[v._v("写穿透/直写(write through)\n"),c("ul",[c("li",[v._v("写操作同时更新cache和主存（和其他存储器），每次写都会占用总线带宽")])])]),v._v(" "),c("li",[v._v("写回(write back)\n"),c("ul",[c("li",[v._v("只写入cache，当cache缺失，当前cache行需要被替换时将数据写到主存（和其他存储器）")]),v._v(" "),c("li",[v._v("cache中存在一个标志位用来判断是否被修改")]),v._v(" "),c("li",[v._v("显著减少总线占用。实现复杂")])])])])]),v._v(" "),c("li",[v._v("写缺失(write miss) - cache中没有目标块/行（略）")])]),v._v(" "),c("h2",{attrs:{id:"虚拟存储器"}},[v._v("虚拟存储器")]),v._v(" "),c("h3",{attrs:{id:"基础"}},[v._v("基础")]),v._v(" "),c("p",[v._v("思想：")]),v._v(" "),c("ul",[c("li",[v._v("主存太小，把主存中不使用的数据暂时放到外存中")]),v._v(" "),c("li",[v._v("编写程序时不需要考虑程序是否能在物理存储器中存放的下，也不需要考虑存放在什么位置")])]),v._v(" "),c("p",[v._v("用户编写程序时使用的地址称为"),c("strong",[v._v("虚拟地址(Virtual Address)"),c("strong",[v._v("或")]),v._v("逻辑地址(Logical Address)")]),v._v("；CPU实际发送出来的用来寻址的地址称为"),c("strong",[v._v("物理地址(Physical Address)"),c("strong",[v._v("或")]),v._v("实地址(Real Address)")])]),v._v(" "),c("p",[v._v("使用"),c("strong",[v._v("主存-辅存")]),v._v("两级存储器组成")]),v._v(" "),c("h3",{attrs:{id:"段式存储管理"}},[v._v("段式存储管理")]),v._v(" "),c("ul",[c("li",[v._v("利用程序的模块化性质，按照程序的逻辑结构划分成多个相对独立的段（如把程序分为"),c("strong",[v._v("代码段")]),v._v("与"),c("strong",[v._v("数据段")]),v._v("）")]),v._v(" "),c("li",[v._v("使用"),c("strong",[v._v("段表")]),v._v("来控制，各个段有不同的名称、起点和"),c("strong",[v._v("不同的段长")])]),v._v(" "),c("li",[v._v("有利于实现信息共享和内存保护，但是因为长度不等所以容易产生内存碎块，影响主存储器利用效率")])]),v._v(" "),c("h3",{attrs:{id:"页式虚拟存储器"}},[v._v("页式虚拟存储器")]),v._v(" "),c("p",[v._v("把虚拟空间和主存空间划分成"),c("strong",[v._v("大小相同的页")]),v._v("（大小为2的整数幂个字），以页为单位进行虚存与主存的信息交换")]),v._v(" "),c("p",[v._v("虚拟地址被分为"),c("strong",[v._v("虚拟页号")]),v._v("+"),c("strong",[v._v("页内地址")]),v._v("，物理地址被分为"),c("strong",[v._v("物理页号（页框号）")]),v._v("+"),c("strong",[v._v("页内地址")])]),v._v(" "),c("p",[v._v("缺点是处理、保护和共享都不如段式管理方便")]),v._v(" "),c("p",[v._v("优化：使用"),c("strong",[v._v("TLB")]),v._v("（快表，其实就是页的cache）和多级页表")]),v._v(" "),c("h3",{attrs:{id:"段页式虚拟存储器"}},[v._v("段页式虚拟存储器")]),v._v(" "),c("ul",[c("li",[v._v("程序先按照逻辑单位分段，再把每段分成固定大小的页")]),v._v(" "),c("li",[v._v("操作系统使用"),c("strong",[v._v("页面")]),v._v("为单位进行操作")])]),v._v(" "),c("p",[v._v("优点是集合了段氏和页式的优点，能够按段实现共享与保护，也可以按页管理内存")]),v._v(" "),c("p",[v._v("缺点是地址映射过程中需要多次查表。地址映射通过一个段表和一组页表来进行")]),v._v(" "),c("h3",{attrs:{id:"页面替换算法"}},[v._v("页面替换算法")]),v._v(" "),c("ul",[c("li",[v._v("LRU最近最少使用")]),v._v(" "),c("li",[v._v("LFU最不经常使用")]),v._v(" "),c("li",[v._v("FIFO先进先出")])]),v._v(" "),c("h3",{attrs:{id:"写回处理"}},[v._v("写回处理")]),v._v(" "),c("p",[v._v("出现修改就应该写回，所以需要设置标志位")]),v._v(" "),c("h2",{attrs:{id:"虚存与cache的比较"}},[v._v("虚存与cache的比较")]),v._v(" "),c("p",[v._v("相同点：")]),v._v(" "),c("ul",[c("li",[v._v("二者都利用了程序的局部性原理")]),v._v(" "),c("li",[v._v("目标都是提升系统性价比而诞生的层次性存储体系")])]),v._v(" "),c("p",[v._v("不同点：")]),v._v(" "),c("table",[c("thead",[c("tr",[c("th",[v._v("虚存")]),v._v(" "),c("th",[v._v("cache")])])]),v._v(" "),c("tbody",[c("tr",[c("td",[v._v("解决存储容量问题")]),v._v(" "),c("td",[v._v("解决存储速度问题，使存储器的访问速度尽量不影响CPU的运行速度")])]),v._v(" "),c("tr",[c("td",[v._v("单位时间内交换次数少，每次交换数据量大")]),v._v(" "),c("td",[v._v("单位时间内交换次数多，每次交换数据量小")])]),v._v(" "),c("tr",[c("td",[v._v("由操作系统（软件）和硬件协同完成，对系统程序不透明，对应用程序透明")]),v._v(" "),c("td",[v._v("完全由硬件实现")])])])]),v._v(" "),c("h2",{attrs:{id:"存储保护略"}},[v._v("存储保护（略）")]),v._v(" "),c("h2",{attrs:{id:"附录存储器的分类"}},[v._v("附录：存储器的分类")]),v._v(" "),c("ul",[c("li",[v._v("按照存储器与CPU的耦合程度\n"),c("ul",[c("li",[v._v("内存（主存+cache）")]),v._v(" "),c("li",[v._v("外村")])])]),v._v(" "),c("li",[v._v("按照读写功能\n"),c("ul",[c("li",[v._v("读写存储器 RWM Read/Write Memory")]),v._v(" "),c("li",[v._v("只读存储器 ROM Read-Only Memory")])])]),v._v(" "),c("li",[v._v("按照数据存取的随机性\n"),c("ul",[c("li",[v._v("随机存取存储器 RAM Random Access Memory")]),v._v(" "),c("li",[v._v("顺序存取存储器 SAM Sequential Access Memory")]),v._v(" "),c("li",[v._v("直接存取存储器 DAM Direct Access Memory")])])]),v._v(" "),c("li",[v._v("按照存储器的访问方式\n"),c("ul",[c("li",[v._v("按地址访问的存储器")]),v._v(" "),c("li",[v._v("按内容访问的存储器 CAM 相联存储器")])])]),v._v(" "),c("li",[v._v("按照半导体存储信息的方法\n"),c("ul",[c("li",[v._v("静态存储器")]),v._v(" "),c("li",[v._v("动态存储器")])])])]),v._v(" "),c("p",[v._v("存储器的习惯分类：")]),v._v(" "),c("ul",[c("li",[v._v("易失性半导体存储器统称为RAM")]),v._v(" "),c("li",[v._v("非易失性半导体存储器统称为ROM")]),v._v(" "),c("li",[v._v("RAM可以分为\n"),c("ul",[c("li",[v._v("静态RAM(SRAM)")]),v._v(" "),c("li",[v._v("动态RAM(DRAM)")])])]),v._v(" "),c("li",[v._v("ROM可以分为\n"),c("ul",[c("li",[v._v("掩膜ROM(MASK ROM)")]),v._v(" "),c("li",[v._v("可编程ROM(PROM)\n"),c("ul",[c("li",[v._v("一次性可编程ROM(OTP ROM)")]),v._v(" "),c("li",[v._v("可擦除PROM(EPROM)\n"),c("ul",[c("li",[v._v("紫外线擦除EPROM(UV EPROM)")]),v._v(" "),c("li",[v._v("电擦除EPROM(EEPROM/E2PROM)")]),v._v(" "),c("li",[v._v("闪速存储器(FLASH ROM)")])])])])])])])])])}]};v.exports={attributes:{layout:"collection",title:"存储系统",collection:"ComputerOrganizationPrinciple"},vue:{render:c.render,staticRenderFns:c.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=c.render,this.$options.staticRenderFns=c.staticRenderFns}}}}},625:function(v,_,t){v.exports=t.p+"img/3-1.58df600.png"},626:function(v,_,t){v.exports=t.p+"img/3-2.f466581.png"},627:function(v,_,t){v.exports=t.p+"img/3-3.163f367.png"},628:function(v,_,t){v.exports=t.p+"img/3-4.20193cd.png"},629:function(v,_,t){v.exports=t.p+"img/3-5.15132b9.png"},630:function(v,_,t){v.exports=t.p+"img/3-8.2f3ab4d.png"},631:function(v,_,t){v.exports=t.p+"img/3-9.fe9dc3d.png"},632:function(v,_,t){v.exports=t.p+"img/3-10.93d67bb.png"},633:function(v,_,t){v.exports=t.p+"img/3-11.e68051a.png"},634:function(v,_,t){v.exports=t.p+"img/3-12.965bbf8.png"},635:function(v,_,t){v.exports=t.p+"img/3-13.a9aa573.png"},636:function(v,_,t){v.exports=t.p+"img/3-6.70a2eee.png"},637:function(v,_,t){v.exports=t.p+"img/3-7.6fb2260.png"},638:function(v,_,t){v.exports=t.p+"img/3-14.824ee05.png"},639:function(v,_,t){v.exports=t.p+"img/3-15.08efda2.png"},640:function(v,_,t){v.exports=t.p+"img/3-16.d069495.png"},641:function(v,_,t){v.exports=t.p+"img/3-17.1ea3e93.png"},642:function(v,_,t){v.exports=t.p+"img/3-18.52e6ca7.png"},643:function(v,_,t){v.exports=t.p+"img/3-19.16bc9cf.png"},644:function(v,_,t){v.exports=t.p+"img/3-20.52ef224.png"},645:function(v,_,t){v.exports=t.p+"img/3-21.37527af.png"},646:function(v,_,t){v.exports=t.p+"img/3-22.4865352.png"}}]);