(window.webpackJsonp=window.webpackJsonp||[]).push([[60,853,854,855,856,857],{1032:function(t,e,n){t.exports=n.p+"img/8-1.1bd5f63.png"},1033:function(t,e,n){t.exports=n.p+"img/8-2.dab09cf.png"},1034:function(t,e,n){t.exports=n.p+"img/8-3.745ad89.png"},1035:function(t,e,n){t.exports=n.p+"img/8-4.9eaa1fc.png"},1036:function(t,e,n){t.exports=n.p+"img/8-5.02f3c93.png"},1344:function(t,e,n){const v={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"地址空间"}},[t._v("地址空间")]),t._v(" "),v("p",[t._v("每个主存中的进程都有它的"),v("strong",[t._v("地址空间address space")])]),t._v(" "),v("p",[t._v("可以使用一对寄存器(base register and limit register)表明一段地址空间，以此保护程序")]),t._v(" "),v("p",[v("img",{attrs:{src:n(1032),alt:"8-1"}})]),t._v(" "),v("h2",{attrs:{id:"地址绑定"}},[t._v("地址绑定")]),t._v(" "),v("p",[t._v("程序装入内存时，操作系统会为其分配空间。因为"),v("strong",[t._v("程序的逻辑地址和物理地址有可能不一致")]),t._v("，CPU执行指令的时候使用的是物理地址，所以需要地址转换")]),t._v(" "),v("p",[t._v("指令和数据的地址绑定可以发生在三个阶段：")]),t._v(" "),v("ul",[v("li",[t._v("compile time编译或汇编阶段产生绝对地址")]),t._v(" "),v("li",[t._v("load time程序进入内存时产生绝对地址")]),t._v(" "),v("li",[t._v("execution time运行时产生地址")])]),t._v(" "),v("p",[t._v("分类：")]),t._v(" "),v("ul",[v("li",[t._v("static address relocation静态地址重定位，在指令执行前完成地址变换\n"),v("ul",[v("li",[t._v("compile time")]),t._v(" "),v("li",[t._v("load time")])])]),t._v(" "),v("li",[t._v("dynamic address relocation动态地址重定位，指令执行时进行地址变换\n"),v("ul",[v("li",[t._v("execution time")])])])]),t._v(" "),v("p",[t._v("MMU(Memory-management unit)负责运行时地址绑定(run-time address mapping)")]),t._v(" "),v("h2",{attrs:{id:"swapping"}},[t._v("swapping")]),t._v(" "),v("p",[t._v("交换是系统控制的。在内存和外存之间交换数据实现内存的扩充")]),t._v(" "),v("h2",{attrs:{id:"contiguous-allocation连续分配"}},[t._v("contiguous allocation连续分配")]),t._v(" "),v("p",[t._v("运行前把整个进程完全放进内存，每个进程使用一块连续的地址空间(a single contiguous section of memory)")]),t._v(" "),v("h3",{attrs:{id:"fixed-sized-partitions固定分区法"}},[t._v("fixed-sized partitions固定分区法")]),t._v(" "),v("p",[t._v("内存被分为几个固定大小的partitions，每个partition可以装载一个process。当有一个分区空闲时就从等待队列中取出一个进程放入内存。")]),t._v(" "),v("p",[v("img",{attrs:{src:n(1033),alt:"8-2"}})]),t._v(" "),v("h3",{attrs:{id:"mvt可变分区法"}},[t._v("MVT可变分区法")]),t._v(" "),v("p",[t._v("操作系统维护一个partition table记录哪些partition被使用，哪些不被使用。这些分区会产生hole。当一个新的process需要放入主存的时候，寻找一个适当的hole来放入。process执行完毕后如果有相邻的hole，这些hole会合并")]),t._v(" "),v("p",[v("img",{attrs:{src:n(1034),alt:"8-3"}})]),t._v(" "),v("p",[t._v("hole的分配算法：")]),t._v(" "),v("ul",[v("li",[t._v("first-fit\n"),v("ul",[v("li",[t._v("找到第一个可行的Hole就放入")])])]),t._v(" "),v("li",[t._v("best-fit\n"),v("ul",[v("li",[t._v("找到big enough且最小的Hole。必须扫描整个hole的list")])])]),t._v(" "),v("li",[t._v("worst-fit\n"),v("ul",[v("li",[t._v("顾名思义，没用")])])])]),t._v(" "),v("h3",{attrs:{id:"fragmentation"}},[t._v("Fragmentation")]),t._v(" "),v("p",[t._v("连续分配会产生碎片（即不被使用的小内存块）")]),t._v(" "),v("ul",[v("li",[t._v("内部碎片（fixed-sized会产生\n"),v("ul",[v("li",[t._v("在连续分配出来的地址空间中存在的碎片")])])]),t._v(" "),v("li",[t._v("外部碎片（MVT会产生\n"),v("ul",[v("li",[t._v("在连续分配的块之间的碎片")]),t._v(" "),v("li",[t._v("可以通过compaction减少外部碎片")])])])]),t._v(" "),v("h2",{attrs:{id:"paging页式存储管理"}},[t._v("Paging页式存储管理")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("物理地址")]),t._v("被分为固定大小的frames（帧、框架）\n"),v("ul",[v("li",[t._v("帧的大小必须是2的指数，如512B或8192B等")]),t._v(" "),v("li",[t._v("OS使用frame table记录")])])]),t._v(" "),v("li",[v("strong",[t._v("逻辑地址")]),t._v("被分为固定大小的pages（页）\n"),v("ul",[v("li",[t._v("OS使用page tables记录")]),t._v(" "),v("li",[t._v("每个进程都有一个page table")]),t._v(" "),v("li",[t._v("PCB中存的有指向此进程page table的指针")]),t._v(" "),v("li",[t._v("保存了每个页的访问权限(1 bit)")])])])]),t._v(" "),v("p",[t._v("帧和页一一对应。程序不连续存储，而是使用很多不一定连续的页存储")]),t._v(" "),v("p",[t._v("OS使用page number和page offset来定位某个页中的某个地址")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("offset决定了每个页内数据的大小")]),t._v("，如offset有8位，则每个页中的数据就有2^8B")]),t._v(" "),v("li",[t._v("number决定了页表大小")])]),t._v(" "),v("h2",{attrs:{id:"页表的结构略"}},[t._v("页表的结构（略")]),t._v(" "),v("ul",[v("li",[t._v("多级页表")]),t._v(" "),v("li",[t._v("…")])]),t._v(" "),v("h2",{attrs:{id:"segmentation段式存储管理"}},[t._v("Segmentation段式存储管理")]),t._v(" "),v("p",[t._v("程序被分为很多段（比如每个函数一个段），每个段的长度可以不同。OS维护一个segmentation table")]),t._v(" "),v("p",[t._v("逻辑地址由段号+段内地址构成")]),t._v(" "),v("p",[v("img",{attrs:{src:n(1035),alt:"8-4"}})]),t._v(" "),v("ul",[v("li",[t._v("比页式存储管理慢")]),t._v(" "),v("li",[t._v("会产生外部碎片（因为连续分配地址了")]),t._v(" "),v("li",[t._v("段越小，外部碎片越少")])]),t._v(" "),v("h2",{attrs:{id:"segmentation-with-paging段页式存储管理"}},[t._v("Segmentation with paging段页式存储管理")]),t._v(" "),v("p",[v("strong",[t._v("使用很多不连续的帧来构成段")]),t._v("，每个段内，物理地址需要使用page nummber & offset来指定")]),t._v(" "),v("p",[v("img",{attrs:{src:n(1036),alt:"8-5"}})]),t._v(" "),v("p",[t._v("segment-table并不保存段的base address而是保存页的base address")])])}]};t.exports={attributes:{layout:"collection",title:"Memory Management",collection:"OperatingSystem"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}}}]);