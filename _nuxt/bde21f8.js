(window.webpackJsonp=window.webpackJsonp||[]).push([[44,866,867,868,869,870,871,872],{1030:function(e,t,n){e.exports=n.p+"img/7-1.2007909.png"},1031:function(e,t,n){e.exports=n.p+"img/7-2.930c7d3.png"},1032:function(e,t,n){e.exports=n.p+"img/7-3.5fd5250.png"},1033:function(e,t,n){e.exports=n.p+"img/7-4.82ad218.png"},1034:function(e,t,n){e.exports=n.p+"img/7-5.e557c39.png"},1035:function(e,t,n){e.exports=n.p+"img/7-6.74d3cac.png"},1036:function(e,t,n){e.exports=n.p+"img/7-7.5eaadbf.png"},1365:function(e,t,n){const v={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"frontmatter-markdown"},[v("blockquote",[v("p",[e._v("A deadlock state occurs when two or more processes are waiting indefinitely for an event that can be caused only by one of the waiting processes.")])]),e._v(" "),v("h2",{attrs:{id:"资源分配图resource-allocation-graph"}},[e._v("资源分配图Resource allocation graph")]),e._v(" "),v("p",[e._v("有死锁的资源分配图：")]),e._v(" "),v("p",[v("img",{attrs:{src:n(1030),alt:"7-1"}})]),e._v(" "),v("p",[e._v("无死锁的资源分配图：")]),e._v(" "),v("p",[v("img",{attrs:{src:n(1031),alt:"7-2"}})]),e._v(" "),v("h2",{attrs:{id:"死锁必要条件"}},[e._v("死锁必要条件")]),e._v(" "),v("p",[e._v("如下四个情况同时发生时会死锁：")]),e._v(" "),v("ul",[v("li",[e._v("mutual exclusion - 存在同时只能被一个进程访问的资源")]),e._v(" "),v("li",[e._v("hold and wait - 进程持有某些资源，而且在等待更多资源")]),e._v(" "),v("li",[e._v("no preemption - 资源不能被抢占")]),e._v(" "),v("li",[e._v("circular wait - 等待资源的进程形成了一个环")])]),e._v(" "),v("h2",{attrs:{id:"deadlock-handling"}},[e._v("deadlock handling")]),e._v(" "),v("p",[e._v("处理死锁的三个思想：")]),e._v(" "),v("ul",[v("li",[e._v("忽视它。假装死锁不存在")]),e._v(" "),v("li",[e._v("允许系统进入死锁并设置恢复方案")]),e._v(" "),v("li",[e._v("保证死锁不存在")])]),e._v(" "),v("h2",{attrs:{id:"deadlock-prevention死锁预防"}},[e._v("deadlock prevention死锁预防")]),e._v(" "),v("ul",[v("li",[e._v("预防mutual exclusion\n"),v("ul",[v("li",[e._v("不使用共享变量")])])]),e._v(" "),v("li",[e._v("预防hold and wait\n"),v("ul",[v("li",[e._v("防止wait - 一次性给所有资源（利用率差，可能饥饿")])])]),e._v(" "),v("li",[e._v("预防no preemption\n"),v("ul",[v("li",[e._v("改成preemption，如果请求其他资源失败就释放所有自己的资源")])])]),e._v(" "),v("li",[e._v("预防circular wait\n"),v("ul",[v("li",[e._v("保证存在一个可解序列而没有形成环")])])])]),e._v(" "),v("h2",{attrs:{id:"死锁避免deadlock-avoidance"}},[e._v("死锁避免deadlock avoidance")]),e._v(" "),v("h3",{attrs:{id:"安全"}},[e._v("安全")]),e._v(" "),v("p",[v("strong",[e._v("安全序列safe sequence")]),e._v(" - 能够按顺序结束所有进程的序列")]),e._v(" "),v("p",[e._v("系统处于"),v("strong",[e._v("安全状态safe state")]),e._v("要求至少存在一个安全序列")]),e._v(" "),v("h3",{attrs:{id:"资源分配图算法"}},[e._v("资源分配图算法")]),e._v(" "),v("p",[e._v("资源分配图没有环则安全")]),e._v(" "),v("p",[e._v("例：存在如下资源分配图：")]),e._v(" "),v("p",[v("img",{attrs:{src:n(1032),alt:"7-3"}})]),e._v(" "),v("p",[e._v("R1被P1使用，P2在请求R1。此时P2和P1在同时请求R2。如果R2把资源给P2，则：")]),e._v(" "),v("p",[v("img",{attrs:{src:n(1033),alt:"7-4"}})]),e._v(" "),v("p",[e._v("形成了环，死锁")]),e._v(" "),v("h3",{attrs:{id:"银行家算法bankers-algorithm"}},[e._v("银行家算法Banker’s algorithm")]),e._v(" "),v("p",[e._v("包括四个矩阵：")]),e._v(" "),v("ul",[v("li",[e._v("available矩阵 - 保存所有资源的剩余量")]),e._v(" "),v("li",[e._v("max矩阵 - 保存所有进程需要的所有资源量")]),e._v(" "),v("li",[e._v("allocation矩阵 - 保存所有进程已经被分配的资源量")]),e._v(" "),v("li",[e._v("need矩阵 - 保存所有进程还需要哪些资源量")])]),e._v(" "),v("p",[e._v("显然"),v("code",{pre:!0},[e._v("max-allocation=need")])]),e._v(" "),v("p",[e._v("例：已知如下allocation/max/available矩阵，求need矩阵")]),e._v(" "),v("p",[v("img",{attrs:{src:n(1034),alt:"7-5"}})]),e._v(" "),v("p",[e._v("显然此处的available矩阵为干扰项。只需要用max-allocation就能求得need：")]),e._v(" "),v("p",[v("img",{attrs:{src:n(1035),alt:"7-6"}})]),e._v(" "),v("p",[e._v("银行家算法：持续将available和need矩阵对比，确保存在安全序列")]),e._v(" "),v("h2",{attrs:{id:"死锁检测"}},[e._v("死锁检测")]),e._v(" "),v("h3",{attrs:{id:"single-instance-of-each-resource-type"}},[e._v("single instance of each resource type")]),e._v(" "),v("p",[e._v("使用wait-for gragh:")]),e._v(" "),v("p",[v("img",{attrs:{src:n(1036),alt:"7-7"}})]),e._v(" "),v("p",[e._v("如果存在环则死锁")]),e._v(" "),v("h3",{attrs:{id:"several-instances-of-a-resource-type"}},[e._v("several instances of a resource type")]),e._v(" "),v("p",[e._v("银行家算法中使用的矩阵。略")]),e._v(" "),v("h2",{attrs:{id:"死锁恢复"}},[e._v("死锁恢复")]),e._v(" "),v("ul",[v("li",[e._v("停止所有死锁进程")]),e._v(" "),v("li",[e._v("每次停止一个进程直至死锁被解开")])])])}]};e.exports={attributes:{layout:"collection",title:"Deadlocks",collection:"OperatingSystem"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}}}]);