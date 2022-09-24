(window.webpackJsonp=window.webpackJsonp||[]).push([[24,562,563,564,565,566,567,568,569,570,571,572,573,574,575],{1341:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"外围设备的定时方式和信息交换方式"}},[v._v("外围设备的定时方式和信息交换方式")]),v._v(" "),n("p",[v._v("根据外设速度把外设分类：")]),v._v(" "),n("ul",[n("li",[v._v("速度极慢或简单的外设\n"),n("ul",[n("li",[v._v("CPU只需要接收或者发送数据即可。"),n("strong",[v._v("无条件传送")])])])]),v._v(" "),n("li",[v._v("慢速或者中速的设备\n"),n("ul",[n("li",[v._v("异步传送方式（应答）")])])]),v._v(" "),n("li",[v._v("高速外设\n"),n("ul",[n("li",[v._v("同步传送")])])])]),v._v(" "),n("p",[v._v("数据传输方式：")]),v._v(" "),n("ul",[n("li",[v._v("程序查询方式(Polling)")]),v._v(" "),n("li",[v._v("程序中断方式")]),v._v(" "),n("li",[v._v("直接存储器存取(DMA: Direct Memory Access)")]),v._v(" "),n("li",[v._v("通道方式（过时）")])]),v._v(" "),n("h3",{attrs:{id:"程序查询方式"}},[v._v("程序查询方式")]),v._v(" "),n("p",[v._v("最简单的输入输出方式")]),v._v(" "),n("p",[n("img",{attrs:{src:t(699),alt:"8-3"}})]),v._v(" "),n("ul",[n("li",[v._v("CPU需要不断查询并等待慢速外设")]),v._v(" "),n("li",[v._v("效率低，CPU与外设不能并行工作。如果外设多，可能还需要链式查询，慢")]),v._v(" "),n("li",[v._v("接口电路简单，硬件开销小")])]),v._v(" "),n("h3",{attrs:{id:"程序中断方式"}},[v._v("程序中断方式")]),v._v(" "),n("p",[v._v("外设通过接口向CPU发出中断请求，CPU有能力执行中断时转去执行中断，执行完毕后再回到主程序")]),v._v(" "),n("p",[n("img",{attrs:{src:t(700),alt:"8-1"}})]),v._v(" "),n("p",[n("strong",[v._v("中断系统")]),v._v("是计算机实现中断功能的"),n("strong",[v._v("软硬件")]),v._v("总称，一般包括：")]),v._v(" "),n("ul",[n("li",[v._v("在CPU中设置的中断机构")]),v._v(" "),n("li",[v._v("在系统中设置的中断控制器")]),v._v(" "),n("li",[v._v("在软件上设置相应的中断服务程序")])]),v._v(" "),n("p",[v._v("中断处理过程：")]),v._v(" "),n("ol",[n("li",[v._v("中断请求")]),v._v(" "),n("li",[v._v("中断排队与判优")]),v._v(" "),n("li",[v._v("中断响应\n"),n("ol",[n("li",[v._v("暂时中断主程序（即现在执行的程序），发出中断响应信号")]),v._v(" "),n("li",[v._v("保存断点（即返回地址）")]),v._v(" "),n("li",[v._v("关中断（不再允许中断）")]),v._v(" "),n("li",[v._v("查找中断源，获取中断服务程序的入口地址")])])]),v._v(" "),n("li",[v._v("中断处理\n"),n("ol",[n("li",[v._v("保护现场（即保护主程序目前的状态）")]),v._v(" "),n("li",[v._v("中断服务（即给中断源提供服务）")])])]),v._v(" "),n("li",[v._v("恢复现场并中断返回，开中断（允许中断）")])]),v._v(" "),n("p",[n("img",{attrs:{src:t(701),alt:"8-4"}})]),v._v(" "),n("p",[v._v("中断源的识别：")]),v._v(" "),n("ul",[n("li",[v._v("单级中断中采用"),n("strong",[v._v("串行排队链")]),v._v("实现公共请求线的中断源判优识别")]),v._v(" "),n("li",[v._v("也可以采用"),n("strong",[v._v("中断控制器")]),v._v("判断")])]),v._v(" "),n("p",[v._v("转中断服务程序的方法：")]),v._v(" "),n("ul",[n("li",[v._v("预先规定中断服务程序的入口地址")]),v._v(" "),n("li",[v._v("或使用中断向量（类似于设备的名字），通过链式查表的方式找到入口地址")])]),v._v(" "),n("p",[v._v("如图，使用中断向量和中断控制器，首先根据中断控制器获取中断向量")]),v._v(" "),n("p",[n("img",{attrs:{src:t(702),alt:"8-5"}})]),v._v(" "),n("p",[v._v("然后根据中断向量链式查找设备入口地址")]),v._v(" "),n("p",[n("img",{attrs:{src:t(703),alt:"8-6"}})]),v._v(" "),n("p",[n("strong",[v._v("单级中断")]),v._v("不允许其他程序在中断中再次中断，中断响应不允许嵌套")]),v._v(" "),n("p",[n("strong",[v._v("多级中断")]),v._v("通常称为"),n("strong",[v._v("中断嵌套方式")]),v._v("，优先级高的中断可以打断优先级低的中断。类似于高级语言中的函数嵌套。"),n("strong",[v._v("使用堆栈保存现场")])]),v._v(" "),n("p",[n("img",{attrs:{src:t(704),alt:"8-7"}})]),v._v(" "),n("p",[n("strong",[v._v("二维多级中断结构")])]),v._v(" "),n("p",[n("img",{attrs:{src:t(705),alt:"8-8"}})]),v._v(" "),n("h3",{attrs:{id:"dma方式"}},[v._v("DMA方式")]),v._v(" "),n("p",[v._v("正常情况下外设从内存获得数据需要通过CPU的中转。而CPU为运算设计，所以单独设计一个用于数据转移的部件"),n("strong",[v._v("DMA控制器")])]),v._v(" "),n("p",[v._v("基本思想：通过硬件实现主存与IO设备的"),n("strong",[v._v("直接数据传送")]),v._v("，传送过程中"),n("strong",[v._v("无需CPU干预")]),v._v("，速度快")]),v._v(" "),n("p",[n("img",{attrs:{src:t(706),alt:"8-2"}})]),v._v(" "),n("p",[v._v("过程：")]),v._v(" "),n("ol",[n("li",[v._v("申请阶段 - DMA控制器收到DMA传送请求后向CPU发出总线请求信号申请占用总线")]),v._v(" "),n("li",[v._v("响应阶段 - CPU响应总线请求，释放总线，回送总线应答信号，表示已经让出总线")]),v._v(" "),n("li",[v._v("数据传送阶段 - DMA控制器收到总线应答信号后占用总线，分别向存储器和外设发出读写控制信号，完成数据传送操作，记录传送字的个数")]),v._v(" "),n("li",[v._v("传送结束阶段 - 规定字数传送完毕后DMA控制器以中断方式或状态位的方式向CPU报告，释放总线，CPU重新占用总线")])]),v._v(" "),n("p",[n("img",{attrs:{src:t(707),alt:"8-9"}})]),v._v(" "),n("p",[v._v("DMA传送方式：")]),v._v(" "),n("ul",[n("li",[v._v("成组传送\n"),n("ul",[n("li",[v._v("传送过程中CPU停止访存")]),v._v(" "),n("li",[v._v("控制简单，适用于数据传输率很高的设备")]),v._v(" "),n("li",[v._v("但是CPU无法处理紧急事件，数据块也不能太大")])])])]),v._v(" "),n("p",[n("img",{attrs:{src:t(708),alt:"8-10"}})]),v._v(" "),n("ul",[n("li",[v._v("周期窃取\n"),n("ul",[n("li",[v._v("每次占用一个CPU周期，只让CPU暂停工作一个周期")]),v._v(" "),n("li",[v._v("但是总线申请和归还存在过多的时间开销")])])])]),v._v(" "),n("p",[n("img",{attrs:{src:t(709),alt:"8-11"}})]),v._v(" "),n("ul",[n("li",[v._v("DMA与CPU交替访存\n"),n("ul",[n("li",[v._v("不需要总线使用权的申请与归还，总线使用权通过C1和C2分时进行(C1+C2=CPU周期)")]),v._v(" "),n("li",[v._v("也称为"),n("strong",[v._v("透明DMA方式")]),v._v("，CPU不停止主程序也不等待")]),v._v(" "),n("li",[v._v("前提条件：CPU工作周期比内存存取周期长很多")])])])]),v._v(" "),n("p",[n("img",{attrs:{src:t(710),alt:"8-12"}})]),v._v(" "),n("h3",{attrs:{id:"通道方式"}},[v._v("通道方式")]),v._v(" "),n("ul",[n("li",[n("strong",[v._v("通道")]),v._v("是计算机系统中代替CPU管理外设的独立部件，是一种"),n("strong",[v._v("能执行有限IO指令集的处理机")])]),v._v(" "),n("li",[v._v("一个主机可以连接几个通道，每个通道可以连接多个IO设备")]),v._v(" "),n("li",[v._v("通道完成IO操作而不需CPU介入，数据交换结束后向CPU发出中断请求交换数据")])]),v._v(" "),n("p",[v._v("通道类型：")]),v._v(" "),n("ul",[n("li",[v._v("选择通道\n"),n("ul",[n("li",[v._v("选择一台外设独占整个通道，以成组传送的方式传送数据块")]),v._v(" "),n("li",[v._v("效率高，适合快速设备")])])])]),v._v(" "),n("p",[n("img",{attrs:{src:t(711),alt:"8-13"}})]),v._v(" "),n("ul",[n("li",[v._v("字节多路通道\n"),n("ul",[n("li",[v._v("简单的共享信道")]),v._v(" "),n("li",[v._v("分时处理，面向中低速字符设备")])])])]),v._v(" "),n("p",[n("img",{attrs:{src:t(712),alt:"8-14"}})]),v._v(" "),n("ul",[n("li",[v._v("数组多路通道\n"),n("ul",[n("li",[v._v("多个设备以数据块为单位交叉使用通道。结合了以上两种方式")]),v._v(" "),n("li",[v._v("使用多个子通道实现")]),v._v(" "),n("li",[v._v("效率高，但控制复杂")])])])])])}]};v.exports={attributes:{layout:"collection",title:"输入与输出系统",collection:"ComputerOrganizationPrinciple"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},699:function(v,_,t){v.exports=t.p+"img/8-3.7083932.png"},700:function(v,_,t){v.exports=t.p+"img/8-1.a5e485d.png"},701:function(v,_,t){v.exports=t.p+"img/8-4.3ce872e.png"},702:function(v,_,t){v.exports=t.p+"img/8-5.75902f5.png"},703:function(v,_,t){v.exports=t.p+"img/8-6.97e2a80.png"},704:function(v,_,t){v.exports=t.p+"img/8-7.a7e3c34.png"},705:function(v,_,t){v.exports=t.p+"img/8-8.165abd4.png"},706:function(v,_,t){v.exports=t.p+"img/8-2.2db25c5.png"},707:function(v,_,t){v.exports=t.p+"img/8-9.a5d48d0.png"},708:function(v,_,t){v.exports=t.p+"img/8-10.2badb56.png"},709:function(v,_,t){v.exports=t.p+"img/8-11.f54589f.png"},710:function(v,_,t){v.exports=t.p+"img/8-12.da2aed5.png"},711:function(v,_,t){v.exports=t.p+"img/8-13.aff724b.png"},712:function(v,_,t){v.exports=t.p+"img/8-14.9043baf.png"}}]);