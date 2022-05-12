(window.webpackJsonp=window.webpackJsonp||[]).push([[113,894],{1044:function(e,t,v){e.exports=v.p+"img/9-1.ca943fa.png"},1383:function(e,t,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"frontmatter-markdown"},[_("p",[e._v("使逻辑地址空间大于物理地址空间")]),e._v(" "),_("h2",{attrs:{id:"demand-paging请求页式管理"}},[e._v("Demand Paging请求页式管理")]),e._v(" "),_("h3",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),_("ul",[_("li",[e._v("进程逻辑空间按页进行组织")]),e._v(" "),_("li",[e._v("进程开始执行之前吧逻辑地址空间中"),_("strong",[e._v("经常使用的pages")]),e._v("放入内存，其他pages需要dynamic loading")]),e._v(" "),_("li",[e._v("执行时如果发现需要的页不在内存，则发生"),_("strong",[e._v("缺页中断page fault trap")]),e._v("，访问外存调入内存")]),e._v(" "),_("li",[e._v("如果把page放入内存时没有free frame则使用页面替换算法page replacement algorithm")])]),e._v(" "),_("p",[e._v("page table中包含了valid-invalid bit来区分目标页是否在内存中。")]),e._v(" "),_("ul",[_("li",[e._v("如果是1则在内存，可访问")]),e._v(" "),_("li",[e._v("如果是0则产生缺页中断")]),e._v(" "),_("li",[e._v("初始所有页设置为0")])]),e._v(" "),_("h3",{attrs:{id:"eat-effective-access-time"}},[e._v("EAT: Effective Access Time")]),e._v(" "),_("p",[e._v("假设访问内存时间为t1，缺页中断访问外存时间为t2(t2包括查询、交换页的时间，通常远大于t1)，缺页率为p，则")]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("EAT=t1*(1-p)+t2*p")])]),e._v(" "),_("h3",{attrs:{id:"page-replacement"}},[e._v("page replacement")]),e._v(" "),_("p",[e._v("over-allocation: 进程需要的页数超过主存页数")]),e._v(" "),_("ul",[_("li",[e._v("FIFO\n"),_("ul",[_("li",[e._v("设置一个age of page")]),e._v(" "),_("li",[e._v("有Belady’s Anomaly")])])]),e._v(" "),_("li",[e._v("Optimal Algorithm(OPT or MIN)\n"),_("ul",[_("li",[e._v("淘汰将来不会被使用或最远被访问的页")]),e._v(" "),_("li",[e._v("不存在Belady’s Anomaly")]),e._v(" "),_("li",[e._v("难以实现：如何估算哪个页不再被访问？")])])]),e._v(" "),_("li",[e._v("LRU: Least Recently Used\n"),_("ul",[_("li",[e._v("最近最少使用")]),e._v(" "),_("li",[e._v("是一个很实用的算法")]),e._v(" "),_("li",[e._v("两种实现方案\n"),_("ul",[_("li",[e._v("计数器")]),e._v(" "),_("li",[e._v("栈")])])])])])]),e._v(" "),_("p",[e._v("FIFO会导致Belady’s Anomaly:")]),e._v(" "),_("p",[_("img",{attrs:{src:v(1044),alt:"9-1"}})]),e._v(" "),_("p",[e._v("即number of frames提高的时候缺页中断应该一直下降，但是number of frames为4的时候竟然上升了")]),e._v(" "),_("h2",{attrs:{id:"allocation-of-frames"}},[e._v("Allocation of Frames")]),e._v(" "),_("p",[e._v("如何在OS进程和用户进程之间分配free frames?")]),e._v(" "),_("p",[e._v("如果给一个process的frame少于正常执行需要的最少frame，则进程将陷入无尽的取指令缺页中断中")]),e._v(" "),_("p",[e._v("所以每个进程的frame至少要能够包含操作与操作数")]),e._v(" "),_("h3",{attrs:{id:"fixed-allocation"}},[e._v("Fixed allocation")]),e._v(" "),_("ul",[_("li",[e._v("equal allocation\n"),_("ul",[_("li",[e._v("平均分配")]),e._v(" "),_("li",[e._v("假设有100帧，5个进程，每个进程20帧")])])]),e._v(" "),_("li",[e._v("proportional allocation\n"),_("ul",[_("li",[e._v("根据process的size加权分配")])])])]),e._v(" "),_("h3",{attrs:{id:"priority-allocation"}},[e._v("Priority allocation")]),e._v(" "),_("p",[e._v("优先级越高，分配帧越多")]),e._v(" "),_("h2",{attrs:{id:"cow-copy-on-write写拷贝"}},[e._v("COW: Copy-on-Write写拷贝")]),e._v(" "),_("p",[e._v("多个进程访问同一个资源时，并不拷贝资源而是给他们同一个资源的引用。等待有线程对资源进行更改的时候再真正的拷贝一个资源出来")])])}]};e.exports={attributes:{layout:"collection",title:"virtual memory",collection:"OperatingSystem"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);