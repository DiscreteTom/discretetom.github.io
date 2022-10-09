(window.webpackJsonp=window.webpackJsonp||[]).push([[82,352,353],{1295:function(t,n,e){const o={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"frontmatter-markdown"},[o("h2",{attrs:{id:"先给结论"}},[t._v("先给结论")]),t._v(" "),o("p",[t._v("实现窗口置顶代码")]),t._v(" "),o("pre",{staticClass:"language-cpp"},[o("code",{pre:!0,attrs:{class:"language-cpp"}},[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWindowFlags")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WindowStaysOnTopHint"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),o("p",[t._v("取消窗口置顶代码")]),t._v(" "),o("pre",{staticClass:"language-cpp"},[o("code",{pre:!0,attrs:{class:"language-cpp"}},[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWindowFlags")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Qt"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WindowStaysOnTopHint"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//add a '!' compared with the upper one")]),t._v("\n")])]),t._v(" "),o("p",[t._v("执行上述两段代码后窗口会隐藏，需要手动调用show()")]),t._v(" "),o("p",[t._v("所以如果不想因为改变窗口置顶状态而隐藏/显示窗口，需要如下代码")]),t._v(" "),o("pre",{staticClass:"language-cpp"},[o("code",{pre:!0,attrs:{class:"language-cpp"}},[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//set Window Stay On Top")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("isHidden")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWindowFlags")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WindowStaysOnTopHint"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWindowFlags")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WindowStaysOnTopHint"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),o("h2",{attrs:{id:"过程"}},[t._v("过程")]),t._v(" "),o("p",[t._v("参考了网上的很多博客，得到的结论基本一致，使用如下代码实现窗口置顶")]),t._v(" "),o("pre",{staticClass:"language-cpp"},[o("code",{pre:!0,attrs:{class:"language-cpp"}},[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWindowFlags")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WindowStaysOnTopHint"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),o("p",[t._v("但是取消窗口置顶，网上的说法就不一致了。我查到的是以下两种")]),t._v(" "),o("pre",{staticClass:"language-cpp"},[o("code",{pre:!0,attrs:{class:"language-cpp"}},[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWindowFlags")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("CustomizeWindowHint"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWindowFlags")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),o("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Widget"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),o("p",[t._v("使用前者效果，取消置顶前:")]),t._v(" "),o("p",[o("img",{attrs:{src:e(486),alt:"5-1"}})]),t._v(" "),o("p",[t._v("取消置顶后:")]),t._v(" "),o("p",[o("img",{attrs:{src:e(487),alt:"5-2"}})]),t._v(" "),o("p",[t._v("可以发现标题栏消失了")]),t._v(" "),o("p",[t._v("使用后者，可以成功取消置顶")]),t._v(" "),o("p",[t._v("查阅Qt内置Help可以发现Qt::Widget的描述如下")]),t._v(" "),o("blockquote",[o("p",[t._v("This is the default type for QWidget. Widgets of this type are child widgets if they have a parent, and independent windows if they have no parent. See also Qt::Window and Qt::SubWindow.")])]),t._v(" "),o("p",[t._v("简单来说是将窗口的Flags设置为QWidget的初始值")]),t._v(" "),o("p",[t._v("感觉这样做不保险，此方案可能会清除其他设置内容")]),t._v(" "),o("p",[t._v("所以似乎我的方案最优的样子:)")]),t._v(" "),o("p",[t._v("参考:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://blog.csdn.net/killua_hzl/article/details/5288769"}},[t._v("Qt编程技巧 窗口置顶")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://blog.csdn.net/dongpanshan/article/details/17612655"}},[t._v("qt 如何让窗口置顶")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_8a3023730100v507.html"}},[t._v("Qt设置窗口置顶")])])])])}]};t.exports={attributes:{title:"QT设置与取消窗口置顶",date:"2018-03-21T00:00:00.000Z",tags:["qt"]},vue:{render:o.render,staticRenderFns:o.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},486:function(t,n,e){t.exports=e.p+"img/5-1.f5bf247.png"},487:function(t,n,e){t.exports=e.p+"img/5-2.e26baf9.png"}}]);