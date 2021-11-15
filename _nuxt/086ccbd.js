(window.webpackJsonp=window.webpackJsonp||[]).push([[82,663,664],{1301:function(e,t,r){const n={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"符号表"}},[e._v("符号表")]),e._v(" "),n("p",[e._v("符号表是一张"),n("strong",[e._v("动态表")]),e._v("，在编译期间不断增加或减少（因为可能有临时变量的产生")]),e._v(" "),n("ul",[n("li",[e._v("多遍编译程序\n"),n("ul",[n("li",[e._v("符号表在词法分析阶段创建")]),e._v(" "),n("li",[e._v("语法分析阶段不使用符号表")]),e._v(" "),n("li",[e._v("在语义分析和代码生成阶段被使用")])])]),e._v(" "),n("li",[e._v("一遍编译程序\n"),n("ul",[n("li",[e._v("语法分析程序是核心模块")]),e._v(" "),n("li",[e._v("语句被识别出来的时候放入符号表")])])])]),e._v(" "),n("h2",{attrs:{id:"类型等价"}},[e._v("类型等价")]),e._v(" "),n("h3",{attrs:{id:"类型表达式"}},[e._v("类型表达式")]),e._v(" "),n("ul",[n("li",[e._v("基本类型\n"),n("ul",[n("li",[e._v("如int/char/real/bool这样的内部没有结构的类型")])])]),e._v(" "),n("li",[e._v("类型构造器\n"),n("ul",[n("li",[e._v("数组"),n("code",{pre:!0},[e._v("array[count/range, type]")]),e._v("，例：\n"),n("ul",[n("li",[n("code",{pre:!0},[e._v("array[10, int]")])]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("array[1..9, bool]")])])])]),e._v(" "),n("li",[e._v("笛卡尔积"),n("code",{pre:!0},[e._v("M*N")])]),e._v(" "),n("li",[e._v("记录（结构体）"),n("code",{pre:!0},[e._v("record(name*type)")]),e._v("，例：\n"),n("ul",[n("li",[n("code",{pre:!0},[e._v("record(i*int)")])]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("record((i*int)*(c*array[10, char]))")])])])]),e._v(" "),n("li",[e._v("指针"),n("code",{pre:!0},[e._v("pointer(type)")])]),e._v(" "),n("li",[e._v("函数"),n("code",{pre:!0},[e._v("type -> returnType")]),e._v("，例：\n"),n("ul",[n("li",[n("code",{pre:!0},[e._v("pointer(int) -> record(i*int)")])])])])])])]),e._v(" "),n("p",[e._v("类型表达式的图形表示：")]),e._v(" "),n("p",[n("img",{attrs:{src:r(847),alt:"6-1"}})]),e._v(" "),n("p",[n("img",{attrs:{src:r(848),alt:"6-2"}})]),e._v(" "),n("h3",{attrs:{id:"结构等价与名字等价"}},[e._v("结构等价与名字等价")]),e._v(" "),n("ul",[n("li",[e._v("结构等价 - 完全展开类型表达式，判断二者是否等价（包括record中的name")]),e._v(" "),n("li",[e._v("名字等价 - 不展开，仅判断名字")])]),e._v(" "),n("p",[e._v("C语言中：对于union和struct使用名字等价（因为二者可以嵌套定义，防止无限展开），其他使用结构等价")]),e._v(" "),n("h2",{attrs:{id:"类型检查略"}},[e._v("类型检查（略")])])}]};e.exports={attributes:{layout:"collection",title:"语义分析",collection:"FundamentalsOfCompiling"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},847:function(e,t,r){e.exports=r.p+"img/6-1.63066a0.png"},848:function(e,t,r){e.exports=r.p+"img/6-2.11597e5.png"}}]);