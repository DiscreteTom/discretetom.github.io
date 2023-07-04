(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1420:function(e,n){const t={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"基本块优化"}},[e._v("基本块优化")]),e._v(" "),t("ul",[t("li",[e._v("常数传播\n"),t("ul",[t("li",[e._v("比如把常量作为值代入表达式")])])]),e._v(" "),t("li",[e._v("常数合并\n"),t("ul",[t("li",[e._v("x = 2 + 3 -> x = 5")])])]),e._v(" "),t("li",[e._v("删除冗余公共表达式\n"),t("ul",[t("li",[e._v("使用第一次的求值结果")])])]),e._v(" "),t("li",[e._v("复制传播\n"),t("ul",[t("li",[e._v("对于单次赋值a = b，可以在下文使用b代替a来减去这一步")])])]),e._v(" "),t("li",[e._v("删除死代码\n"),t("ul",[t("li",[e._v("没有被引用的值")]),e._v(" "),t("li",[e._v("无法到达的块")])])]),e._v(" "),t("li",[e._v("削弱计算强度\n"),t("ul",[t("li",[e._v("乘方变乘法，乘法变加法")]),e._v(" "),t("li",[e._v("去除没有意义的计算（如加0或乘1")])])]),e._v(" "),t("li",[e._v("改变计算次序")])]),e._v(" "),t("h2",{attrs:{id:"循环优化"}},[e._v("循环优化")]),e._v(" "),t("ul",[t("li",[e._v("循环展开\n"),t("ul",[t("li",[e._v("使用空间换时间")]),e._v(" "),t("li",[e._v("使用重复的代码来取消循环")]),e._v(" "),t("li",[e._v("特别是循环体比较小的代码")])])]),e._v(" "),t("li",[e._v("代码外提/频度削弱\n"),t("ul",[t("li",[e._v("循环中的不变量提取到循环外")])])]),e._v(" "),t("li",[e._v("削弱计算强度\n"),t("ul",[t("li",[e._v("循环中的乘法变加法（如果可以的话")]),e._v(" "),t("li",[e._v("通常作用于循环变量乘常数的场景，把它变成每次循环加这个常数")])])]),e._v(" "),t("li",[e._v("删除归纳变量\n"),t("ul",[t("li",[e._v("如果循环体中对变量I只有唯一的形如"),t("code",{pre:!0},[e._v("I = I + C")]),e._v("这样的赋值，且C为循环不变量，则称I为循环中的基本归纳变量")]),e._v(" "),t("li",[e._v("循环中存在"),t("code",{pre:!0},[e._v("J = C1 * I + C2")]),e._v("，其中C1和C2都是循环不变量，则称J是归纳变量，并称IJ同族")]),e._v(" "),t("li",[e._v("通常同族的归纳变量留一个就够了")])])])]),e._v(" "),t("h2",{attrs:{id:"窥孔优化略"}},[e._v("窥孔优化（略")])])}]};e.exports={attributes:{layout:"collection",title:"代码优化",collection:"FundamentalsOfCompiling"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);