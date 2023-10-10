(window.webpackJsonp=window.webpackJsonp||[]).push([[68,947,948,949,950],{1035:function(t,e,r){t.exports=r.p+"img/1-1.d47bbbc.png"},1036:function(t,e,r){t.exports=r.p+"img/1-2.4548a41.png"},1037:function(t,e,r){t.exports=r.p+"img/1-4.7138cf0.png"},1038:function(t,e,r){t.exports=r.p+"img/1-3.1e4aad8.png"},1464:function(t,e,r){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("blockquote",[n("p",[t._v("操作系统是用户和硬件之间的媒介(An operating system acts as an intermediary between the user of a computer and the computer hardware)\n操作系统的目标是提供一个使用户进程"),n("strong",[t._v("方便高效")]),t._v("地运行的环境(The purpose of an operating system is to provide an environment in which a user can execute programs in a "),n("strong",[t._v("convenient")]),t._v(" and "),n("strong",[t._v("efficient")]),t._v(" manner)")])]),t._v(" "),n("p",[t._v("但是通常"),n("strong",[t._v("方便和高效是对立的")]),t._v("。大型机(Mainframe)注重高效，小型机(Minicomputer)注重方便")]),t._v(" "),n("p",[n("strong",[t._v("操作系统是管理硬件的软件")])]),t._v(" "),n("p",[t._v("一个computer system可以被粗略分为四个components:")]),t._v(" "),n("ul",[n("li",[t._v("hardware")]),t._v(" "),n("li",[t._v("operating system")]),t._v(" "),n("li",[t._v("application programs")]),t._v(" "),n("li",[t._v("users")])]),t._v(" "),n("p",[n("img",{attrs:{src:r(1035),alt:"1-1"}})]),t._v(" "),n("h2",{attrs:{id:"操作系统的身份"}},[t._v("操作系统的身份")]),t._v(" "),n("ul",[n("li",[t._v("资源分配者(Resource allocator)")]),t._v(" "),n("li",[t._v("程序管理者(Program controller)")]),t._v(" "),n("li",[t._v("内核(Kernel) - 时刻都在运行着的程序")])]),t._v(" "),n("h2",{attrs:{id:"计算机结构"}},[t._v("计算机结构")]),t._v(" "),n("h3",{attrs:{id:"结构概述与中断"}},[t._v("结构概述与中断")]),t._v(" "),n("p",[n("img",{attrs:{src:r(1036),alt:"1-2"}})]),t._v(" "),n("ul",[n("li",[t._v("一个或多个CPU")]),t._v(" "),n("li",[t._v("多种设备连接同一块内存(memory)")]),t._v(" "),n("li",[t._v("连接的媒介是总线(BUS)")]),t._v(" "),n("li",[t._v("设备通过设备控制器(device controller)连接总线，"),n("strong",[t._v("设备控制器自身有缓冲区(local buffer)")])]),t._v(" "),n("li",[t._v("每个设备控制器管理一种设备。操作系统对每种设备控制器都要有"),n("strong",[t._v("驱动程序(device driver)")])]),t._v(" "),n("li",[t._v("IO设备和CPU可以同时运行(execute concurrently)")]),t._v(" "),n("li",[t._v("CPU负责在内存和设备控制器缓冲区之间交换数据，IO操作在设备控制器进行")]),t._v(" "),n("li",[t._v("设备控制器通过产生"),n("strong",[t._v("中断")]),t._v("通知CPU是否有事件的发生。软件也可以使用**系统调用(system call or monitor call)**引起软件中断(trap)")])]),t._v(" "),n("p",[t._v("计算机开机（或重启）的时候需要运行一个"),n("strong",[t._v("引导程序(bootstrap program)")]),t._v("，引导程序存在ROM或EEPROM里，属于硬件中的子类——"),n("strong",[t._v("固件")]),t._v("("),n("strong",[t._v("firmware")]),t._v(")")]),t._v(" "),n("p",[t._v("中断使用"),n("strong",[t._v("中断向量(interrupt vector)"),n("strong",[t._v("实现。中断可以被")]),t._v("屏蔽(disabled)")]),t._v("，因屏蔽而未能生效的中断被称为丢失的中断(lost interrupt)")]),t._v(" "),n("h3",{attrs:{id:"存储结构"}},[t._v("存储结构")]),t._v(" "),n("p",[t._v("主存(main memory)是CPU可以直接访问的唯一大容量存储介质。是易失(volatile)的。从二级存储(secondary storage)开始就不易失了")]),t._v(" "),n("p",[t._v("存储层级结构：\n"),n("img",{attrs:{src:r(1037),alt:"1-4"}})]),t._v(" "),n("p",[t._v("层级越高，价格越贵，越快")]),t._v(" "),n("h3",{attrs:{id:"io结构"}},[t._v("IO结构")]),t._v(" "),n("p",[t._v("两种IO策略：")]),t._v(" "),n("ul",[n("li",[t._v("同步(synchronous)\n"),n("ul",[n("li",[t._v("阻塞，顺序执行")])])]),t._v(" "),n("li",[t._v("异步(asynchronous)\n"),n("ul",[n("li",[t._v("非阻塞，并行执行")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:r(1038),alt:"1-3"}})]),t._v(" "),n("p",[t._v("DMA方式的IO每传输一块(block)发出一次中断而不是常规的一字节(byte)一次中断")]),t._v(" "),n("h2",{attrs:{id:"用户态和内核态"}},[t._v("用户态和内核态")]),t._v(" "),n("p",[t._v("user mode and kernel mode")]),t._v(" "),n("p",[t._v("IO指令、关机指令这些只能在内核态进行(privileged)")])])}]};t.exports={attributes:{layout:"collection",title:"Introduction",collection:"OperatingSystem"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);