(window.webpackJsonp=window.webpackJsonp||[]).push([[98,681],{1126:function(e,t,v){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[e._v("CPU调度 - 从ready queue中取出进程并执行")]),e._v(" "),n("p",[e._v("目的 - 让CPU一直忙")]),e._v(" "),n("h2",[e._v("调度策略")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("nonpreemptive剥夺、抢占 - 停止正在执行的进程")])]),e._v(" "),n("li",[n("p",[e._v("preemptive非剥夺、非抢占 - 不停止正在执行的进程")])]),e._v(" "),n("li",[n("p",[e._v("FCFS(first-come, first-served)先来先服务")]),e._v(" "),n("ul",[n("li",[e._v("先来先服务，按顺序执行。非剥夺")])])]),e._v(" "),n("li",[n("p",[e._v("SJF(Shortest-job-first)最短工作优先")]),e._v(" "),n("ul",[n("li",[e._v("是"),n("strong",[e._v("最优的调度算法")]),e._v("，拥有最短的平均等待时间")]),e._v(" "),n("li",[e._v("难点：不易估算job的长度")]),e._v(" "),n("li",[e._v("是优先级调度算法(priority scheduling)的特例，把剩余时间作为优先级")]),e._v(" "),n("li",[e._v("可能发生饥饿starvation")]),e._v(" "),n("li",[e._v("防止饥饿的策略：aging（优先级随时间改变，等待时间越长优先级越高")]),e._v(" "),n("li",[e._v("可以分为剥夺和非剥夺的：\n"),n("ul",[n("li",[e._v("非剥夺 - 略")]),e._v(" "),n("li",[e._v("剥夺 - 如果新的进程的CPU burst长度小于当前"),n("strong",[e._v("正在运行")]),e._v("的进程的剩余时间则抢占之。也被称为SRTF(Shortest-Remaining-Time-First)")])])])])]),e._v(" "),n("li",[n("p",[e._v("RR(Round-robin)时间片轮转算法")]),e._v(" "),n("ul",[n("li",[e._v("常用于分时系统")]),e._v(" "),n("li",[e._v("把时间分为q个相等的时槽(slot/time units/time quantum)")]),e._v(" "),n("li",[e._v("每个进程最多工作q个时间，超时了就被放置在ready queue的末尾")]),e._v(" "),n("li",[e._v("难点在于选择时槽长度，常为10-100ms")]),e._v(" "),n("li",[e._v("一定是剥夺的")])])]),e._v(" "),n("li",[n("p",[e._v("multilevel queue")]),e._v(" "),n("ul",[n("li",[e._v("是上面一些算法的结合")])])])]),e._v(" "),n("p",[e._v("SJF估算CPU burst length:使用历史数据估算。")]),e._v(" "),n("ul",[n("li",[e._v("令t(n)为第n次CPU burst的长度")]),e._v(" "),n("li",[e._v("令τ(n)为估计第n次CPU burst的长度")]),e._v(" "),n("li",[e._v("令参数α为[0, 1]的数，反映了历史数据的重要性\n"),n("ul",[n("li",[e._v("α=0表示历史数据完全不重要，仅猜测")]),e._v(" "),n("li",[e._v("α=1表示猜测数据完全不重要，仅参考历史数据")])])]),e._v(" "),n("li",[e._v("则τ(n+1)=αt(n) + (1-α)τ(n)")]),e._v(" "),n("li",[e._v("即下一次的估算值等于上一次估算值和实际值的加权平均")])]),e._v(" "),n("h2",[e._v("评估")]),e._v(" "),n("ul",[n("li",[e._v("CPU利用率(CPU utilization) = 使用CPU的时间/总时间")]),e._v(" "),n("li",[e._v("Throughput吞吐量 = 完成的进程数目/总时间")]),e._v(" "),n("li",[e._v("Turnaround time周转时间 = 某个进程从开始到结束的总时长（包括等待")]),e._v(" "),n("li",[e._v("Waiting time等待时间 = 从进程第一次放入ready queue开始到进程执行完毕中间等待的时间\n"),n("ul",[n("li",[e._v("Average waiting time = 所有进程等待时间/进程数")])])]),e._v(" "),n("li",[e._v("Response timme响应时间 = 从进程第一次放入ready queue开始到进程被第一次run之前等待的时间")])]),e._v(" "),n("h2",[e._v("甘特图表示法")]),e._v(" "),n("p",[n("img",{attrs:{src:v(854),alt:"5-1"}})]),e._v(" "),n("p",[e._v("上面用矩形表示时间长短，下边标注时间点")])])}]};e.exports={attributes:{layout:"collection",title:"CPU Scheduling",collection:"OperatingSystem"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},854:function(e,t,v){e.exports=v.p+"img/bf36fa4.png"}}]);