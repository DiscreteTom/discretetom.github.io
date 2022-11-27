(window.webpackJsonp=window.webpackJsonp||[]).push([[76,913,914,915],{1035:function(e,t,n){e.exports=n.p+"img/3-2.ab7e26d.png"},1036:function(e,t,n){e.exports=n.p+"img/3-3.b9a4973.png"},1037:function(e,t,n){e.exports=n.p+"img/3-1.41890a8.png"},1416:function(e,t,n){const r={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frontmatter-markdown"},[r("blockquote",[r("p",[e._v("a process is a program in execution.")])]),e._v(" "),r("p",[e._v("进程包括：")]),e._v(" "),r("ul",[r("li",[e._v("program counter")]),e._v(" "),r("li",[e._v("stack")]),e._v(" "),r("li",[e._v("data section")])]),e._v(" "),r("h2",{attrs:{id:"process-control-blockpcb"}},[e._v("Process Control Block(PCB)")]),e._v(" "),r("p",[r("img",{attrs:{src:n(1035),alt:"3-2"}})]),e._v(" "),r("p",[e._v("每个进程在操作系统中表示为一个进程控制块PCB")]),e._v(" "),r("p",[e._v("使用PCB保存进程数据实现进程切换：")]),e._v(" "),r("p",[r("img",{attrs:{src:n(1036),alt:"3-3"}})]),e._v(" "),r("h2",{attrs:{id:"进程状态与状态转移"}},[e._v("进程状态与状态转移")]),e._v(" "),r("ul",[r("li",[e._v("new")]),e._v(" "),r("li",[e._v("running")]),e._v(" "),r("li",[e._v("waiting - for some event(e.g. memory access or device access)")]),e._v(" "),r("li",[e._v("ready")]),e._v(" "),r("li",[e._v("terminated")])]),e._v(" "),r("p",[e._v("状态转移：\n"),r("img",{attrs:{src:n(1037),alt:"3-1"}})]),e._v(" "),r("p",[e._v("进程不在运行的时候处于两种waiting queue中：")]),e._v(" "),r("ul",[r("li",[e._v("IO request queue(s) - 即处于waiting状态")]),e._v(" "),r("li",[e._v("ready queue - 即处于ready状态")])]),e._v(" "),r("p",[e._v("ready queue中的进程都已经就绪，等待CPU分配时间片。")]),e._v(" "),r("p",[e._v("queue可以使用PCB链表实现")]),e._v(" "),r("h2",{attrs:{id:"调度"}},[e._v("调度")]),e._v(" "),r("ul",[r("li",[e._v("long-term scheduler(or job scheduler) - 选择进程进入ready queue（变为ready状态\n"),r("ul",[r("li",[e._v("慢，几秒或几分钟一次")]),e._v(" "),r("li",[e._v("控制degree of multiprogramming")])])]),e._v(" "),r("li",[e._v("short-term scheduler(or CPU scheduler) - 从ready queue选择进程运行（变为running状态\n"),r("ul",[r("li",[e._v("快，毫秒级")])])])]),e._v(" "),r("p",[e._v("进程可以被分为：")]),e._v(" "),r("ul",[r("li",[e._v("IO-bound process\n"),r("ul",[r("li",[e._v("大部分时间IO")])])]),e._v(" "),r("li",[e._v("CPU-bound process\n"),r("ul",[r("li",[e._v("大部分时间使用CPU")])])])]),e._v(" "),r("h2",{attrs:{id:"interprocess-communicationipc"}},[e._v("interprocess communication(IPC)")]),e._v(" "),r("ul",[r("li",[e._v("independent process\n"),r("ul",[r("li",[e._v("不和其他进程交流")])])]),e._v(" "),r("li",[e._v("cooperating process\n"),r("ul",[r("li",[e._v("和其他进程交流")])])])]),e._v(" "),r("p",[e._v("两种方式：")]),e._v(" "),r("ul",[r("li",[e._v("shared memory\n"),r("ul",[r("li",[e._v("share some variables")]),e._v(" "),r("li",[e._v("操作系统负责提供共享内存")]),e._v(" "),r("li",[e._v("用户负责设计与提供通信")])])]),e._v(" "),r("li",[e._v("message passing\n"),r("ul",[r("li",[e._v("establish a communication")]),e._v(" "),r("li",[e._v("use send(message) and receive(message)")]),e._v(" "),r("li",[e._v("操作系统负责设计与提供通信")])])])]),e._v(" "),r("p",[e._v("这两种方式可以在一个操作系统中共存")]),e._v(" "),r("p",[e._v("CS模型通信可以使用：")]),e._v(" "),r("ul",[r("li",[e._v("socket\n"),r("ul",[r("li",[e._v("an endpoint for communication")]),e._v(" "),r("li",[e._v("a connection is between a pair of sockets")])])]),e._v(" "),r("li",[e._v("remote procedure calls(RPCs)\n"),r("ul",[r("li",[e._v("an RPC occurs when a process(or thread) calls a procedure on a remote application")])])]),e._v(" "),r("li",[e._v("Java’s remote method invocation(RMI)\n"),r("ul",[r("li",[e._v("Java’s version of RPCs")]),e._v(" "),r("li",[e._v("allows a thread to invoke a method on a remote object")])])])]),e._v(" "),r("p",[e._v("RPC和RMI的最大区别：")]),e._v(" "),r("ul",[r("li",[e._v("RPC: data are passed to a remote procedure in the form of an ordinary data structure")]),e._v(" "),r("li",[e._v("RMI: allows object to be passed in remote method calls")])])])}]};e.exports={attributes:{layout:"collection",title:"Processes",collection:"OperatingSystem"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);