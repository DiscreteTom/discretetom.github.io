(window.webpackJsonp=window.webpackJsonp||[]).push([[75,801,802,803],{1436:function(v,_,t){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"8086微处理器内部结构"}},[v._v("8086微处理器内部结构")]),v._v(" "),l("ul",[l("li",[v._v("总线接口部件BIU\n"),l("ul",[l("li",[v._v("形成访问存储器和IO设备的地址，完成指令预取，存放运算结果")]),v._v(" "),l("li",[v._v("包括：\n"),l("ul",[l("li",[v._v("地址加法器")]),v._v(" "),l("li",[v._v("专用寄存器组")]),v._v(" "),l("li",[v._v("指令队列")]),v._v(" "),l("li",[v._v("总线控制电路")])])])])]),v._v(" "),l("li",[v._v("执行部件EU - 负责执行指令，包括：\n"),l("ul",[l("li",[v._v("算数逻辑单元ALU")]),v._v(" "),l("li",[v._v("标志寄存器FR")]),v._v(" "),l("li",[v._v("通用寄存器组")]),v._v(" "),l("li",[v._v("EU控制器")])])])]),v._v(" "),l("p",[v._v("EU和BIU可以并行工作以提高效率")]),v._v(" "),l("p",[l("img",{attrs:{src:t(885),alt:"2-1"}})]),v._v(" "),l("h2",{attrs:{id:"8086寄存器"}},[v._v("8086寄存器")]),v._v(" "),l("h3",{attrs:{id:"通用寄存器"}},[v._v("通用寄存器")]),v._v(" "),l("p",[l("img",{attrs:{src:t(886),alt:"2-2"}})]),v._v(" "),l("p",[v._v("80386之前的处理器都是16位，80386之后变为32位。本课程只考虑16位，即忽略上图绿色区域")]),v._v(" "),l("p",[v._v("以下所有通用寄存器均为16位。其中AX/BX/CX/DX都可以拆成两个8位寄存器（即?H/?L）来使用。虽然是通用寄存器，但是他们也有一些约定俗成的用法")]),v._v(" "),l("ul",[l("li",[v._v("AX\n"),l("ul",[l("li",[v._v("累加器")]),v._v(" "),l("li",[v._v("算术运算的主要寄存器，保存计算结果")]),v._v(" "),l("li",[v._v("IO指令使用AX和外设传送信息")])])]),v._v(" "),l("li",[v._v("BX\n"),l("ul",[l("li",[v._v("基址寄存器，保存"),l("strong",[v._v("基址")])])])]),v._v(" "),l("li",[v._v("CX\n"),l("ul",[l("li",[v._v("loop循环中隐含的计数器")]),v._v(" "),l("li",[v._v("串处理中隐含的计数器")])])]),v._v(" "),l("li",[v._v("DX\n"),l("ul",[l("li",[v._v("保存数据")]),v._v(" "),l("li",[v._v("可以和AX一起存储双字，DX为高位，表示为DX:AX")])])]),v._v(" "),l("li",[v._v("SP\n"),l("ul",[l("li",[v._v("堆栈指针，可以指示栈顶的偏移地址")])])]),v._v(" "),l("li",[v._v("BP\n"),l("ul",[l("li",[v._v("基址指针寄存器，可以指向栈底")])])]),v._v(" "),l("li",[v._v("SI\n"),l("ul",[l("li",[v._v("源变址，能够自动增减")])])]),v._v(" "),l("li",[v._v("DI\n"),l("ul",[l("li",[v._v("目的变址，能够自动增减")])])])]),v._v(" "),l("h3",{attrs:{id:"段寄存器"}},[v._v("段寄存器")]),v._v(" "),l("ul",[l("li",[v._v("CS - 代码段")]),v._v(" "),l("li",[v._v("DS - 数据段")]),v._v(" "),l("li",[v._v("ES - 附加段")]),v._v(" "),l("li",[v._v("SS - 堆栈段")])]),v._v(" "),l("h3",{attrs:{id:"专用寄存器"}},[v._v("专用寄存器")]),v._v(" "),l("ul",[l("li",[v._v("IP - 指令指针寄存器，存放代码段中的偏移地址。和CS一起使用，表示为CS:IP，即某代码段中的某一句代码")]),v._v(" "),l("li",[v._v("PSW（或FR） - 程序状态字寄存器，也称为标志寄存器，如图：")])]),v._v(" "),l("p",[l("img",{attrs:{src:t(887),alt:"2-3"}})]),v._v(" "),l("p",[v._v("标志寄存器中的常用位：")]),v._v(" "),l("ul",[l("li",[v._v("CF - 是否进位")]),v._v(" "),l("li",[v._v("ZF - 是否为0")]),v._v(" "),l("li",[v._v("OF - 是否溢出")])]),v._v(" "),l("h2",{attrs:{id:"指令的执行过程"}},[v._v("指令的执行过程")]),v._v(" "),l("p",[v._v("从CS:IP指向的内存地址取指令（并执行），然后CS:IP指向下一条指令")]),v._v(" "),l("p",[v._v("执行过程：")]),v._v(" "),l("ul",[l("li",[v._v("取指 - BIU把指令从内存取到指令队列")]),v._v(" "),l("li",[v._v("译码 - EU控制器发出控制信号")]),v._v(" "),l("li",[v._v("执行 - ALU执行计算结果并影响标志寄存器FR")]),v._v(" "),l("li",[v._v("写回 - 可能需要把结果放回寄存器")])]),v._v(" "),l("h2",{attrs:{id:"8086存储器"}},[v._v("8086存储器")]),v._v(" "),l("h3",{attrs:{id:"实模式real-address-mode"}},[v._v("实模式Real-Address mode")]),v._v(" "),l("p",[v._v("8086处理器的存储器模式，使用20位物理地址、单任务工作方式、独占系统所有资源")]),v._v(" "),l("p",[v._v("存储器空间：00000H-FFFFFH")]),v._v(" "),l("p",[v._v("处理器上电后首先进入实模式")]),v._v(" "),l("p",[v._v("DOS系统要求实模式")]),v._v(" "),l("p",[v._v("使用两个16位地址来形成一个20位地址。计算方式："),l("strong",[v._v("16位段地址左移四位加上16位偏移地址")])]),v._v(" "),l("p",[v._v("存储器被分为很多"),l("strong",[v._v("大小不同的段")]),v._v("，因为段内偏移地址为16位，所以每个段最大为64KB")]),v._v(" "),l("p",[v._v("段寄存器用来保存这些段的段地址")]),v._v(" "),l("h3",{attrs:{id:"保护模式protected-mode略"}},[v._v("保护模式Protected mode（略")]),v._v(" "),l("ul",[l("li",[v._v("为实现虚拟存储器提供硬件支持")]),v._v(" "),l("li",[v._v("为存储器共享和保护提供硬件支持")]),v._v(" "),l("li",[v._v("支持多任务处理")])])])}]};v.exports={attributes:{layout:"collection",title:"微处理器的功能结构",collection:"MicrocomputerPrincipleAndInterfaceTechnology"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}},885:function(v,_,t){v.exports=t.p+"img/2-1.9666fd2.png"},886:function(v,_,t){v.exports=t.p+"img/2-2.2d68a76.png"},887:function(v,_,t){v.exports=t.p+"img/2-3.2cbbb90.png"}}]);