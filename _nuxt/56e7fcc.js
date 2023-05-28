(window.webpackJsonp=window.webpackJsonp||[]).push([[87,784,785],{1425:function(v,_,t){const n={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"活动记录-控制栈"}},[v._v("活动记录、控制栈")]),v._v(" "),n("h3",{attrs:{id:"预备知识"}},[v._v("预备知识")]),v._v(" "),n("ul",[n("li",[n("strong",[v._v("过程")]),v._v(" - 过程、函数和方法统称为过程，包括过程名和过程体")]),v._v(" "),n("li",[v._v("过程的分类\n"),n("ul",[n("li",[v._v("过程 - 没有返回值的过程")]),v._v(" "),n("li",[v._v("函数 - 有返回值的过程")])])]),v._v(" "),n("li",[n("strong",[v._v("活动")]),v._v(" - 过程的一次执行")]),v._v(" "),n("li",[v._v("过程和活动就像可执行文件与进程")])]),v._v(" "),n("h3",{attrs:{id:"程序运行空间的划分"}},[v._v("程序运行空间的划分")]),v._v(" "),n("p",[n("img",{attrs:{src:t(868),alt:"7-1"}})]),v._v(" "),n("h3",{attrs:{id:"控制栈与活动记录"}},[v._v("控制栈与活动记录")]),v._v(" "),n("ul",[n("li",[v._v("控制栈 - 程序运行空间中的存储区域，"),n("strong",[v._v("以栈的形式组织和管理")]),v._v("，保存活动记录。")]),v._v(" "),n("li",[v._v("活动记录 - 保存活动相关的各种信息")])]),v._v(" "),n("p",[v._v("活动记录的内容：")]),v._v(" "),n("p",[n("img",{attrs:{src:t(869),alt:"7-2"}})]),v._v(" "),n("p",[v._v("重要的部分：")]),v._v(" "),n("ul",[n("li",[v._v("控制链 - 保存当前活动执行完后应该返回到的地方")]),v._v(" "),n("li",[v._v("访问链 - 保存此活动的直接外围，用来判断数据可访问性")])]),v._v(" "),n("p",[v._v("局部数据编址可能会遇到"),n("strong",[v._v("对齐")]),v._v("的问题")]),v._v(" "),n("p",[v._v("名字的左值和右值：")]),v._v(" "),n("ul",[n("li",[v._v("左值指其地址")]),v._v(" "),n("li",[v._v("右值指其值")])]),v._v(" "),n("h2",{attrs:{id:"存储分配策略"}},[v._v("存储分配策略")]),v._v(" "),n("ul",[n("li",[v._v("静态存储分配 - 编译时为所有变量分配空间，运行时不能动态分配（不能new")]),v._v(" "),n("li",[v._v("栈式存储分配 - 运行时需要局部变量时在栈区分配局部变量（相当于new出来的对象也在栈区，有生命周期")]),v._v(" "),n("li",[v._v("堆式存储分配 - 所有变量都在堆区分配，需要手动delete（相当于所有变量都需要new出来")])]),v._v(" "),n("p",[v._v("重点为栈式存储分配的方案")]),v._v(" "),n("h2",{attrs:{id:"栈式存储分配"}},[v._v("栈式存储分配")]),v._v(" "),n("p",[v._v("调用子过程时把子过程的活动记录压入控制栈")]),v._v(" "),n("p",[n("strong",[v._v("调用序列和返回序列")]),v._v("：是两段代码，"),n("strong",[v._v("分别处理调用过程时压栈的操作和过程结束时弹栈的操作")]),v._v("（包括参数计算、返回值计算、控制链和访问链设置、保存机器状态等")]),v._v(" "),n("h2",{attrs:{id:"非局部名字的访问"}},[v._v("非局部名字的访问")]),v._v(" "),n("p",[v._v("注意："),n("strong",[v._v("非局部名字不是局部变量也不是全局变量")]),v._v("。")]),v._v(" "),n("p",[v._v("使用访问链实现")]),v._v(" "),n("p",[v._v("C/C++语言不存在非局部名字。所以C语言的活动记录不需要访问链这一块。不是局部变量就是全局变量，地址确定")]),v._v(" "),n("p",[v._v("PASCAL语言允许过程嵌套，如果把一个子过程作为参数传递给其他函数，那么这个子过程无论在哪里都仍然可以访问父过程中定义的变量。所以存在非局部名字，需要访问链判断是否能够访问指定变量。")]),v._v(" "),n("p",[v._v("所以访问链是"),n("strong",[v._v("静态链")]),v._v("，指向代码中的直接父过程（固定）。而控制链是"),n("strong",[v._v("动态链")]),v._v("，指向调用它的过程（可变）。")]),v._v(" "),n("h2",{attrs:{id:"参数传递方式"}},[v._v("参数传递方式")]),v._v(" "),n("ul",[n("li",[v._v("传值调用（参考C/C++")]),v._v(" "),n("li",[v._v("传引用调用（参考C/C++")]),v._v(" "),n("li",[v._v("复制恢复（按一定顺序恢复到参数列表")]),v._v(" "),n("li",[v._v("传名调用（相当于宏")])])])}]};v.exports={attributes:{layout:"collection",title:"运行环境",collection:"FundamentalsOfCompiling"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},868:function(v,_,t){v.exports=t.p+"img/7-1.2bb2c26.png"},869:function(v,_,t){v.exports=t.p+"img/7-2.1569f81.png"}}]);