(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1310:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"先说结论"}},[t._v("先说结论")]),t._v(" "),e("p",[t._v("以MainWindow为parent的QMessageBox在运行结束时如果MainWindow处于hide的状态"),e("strong",[t._v("会调用MainWindow的析构函数")]),t._v("把MainWindow杀了")]),t._v(" "),e("h2",{attrs:{id:"细节"}},[t._v("细节")]),t._v(" "),e("p",[t._v("看下面这人畜无害的代码")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MainWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("qDebug")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MainWindow destroyed."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" ui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_pushButton_clicked")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tQMessageBox "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" box "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("QMessageBox")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tbox"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tbox->show();")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("以MainWindow为parent新建一个QMessageBox")]),t._v(" "),e("p",[t._v("隐藏MainWindow并显示/执行QMessageBox")]),t._v(" "),e("p",[t._v("在点击MessageBox上面的OK按钮 MessageBox消失之后")]),t._v(" "),e("p",[e("strong",[t._v("MainWindow的析构函数会被调用")])]),t._v(" "),e("p",[t._v("这样做的原因"),e("strong",[t._v("应该")]),t._v("是防止MainWindow在hide状态下无法简单关闭的问题")]),t._v(" "),e("p",[t._v("所以在最后一个可见的窗体消失时杀掉父窗体MainWindow")]),t._v(" "),e("p",[t._v("嗯 这么一说还是可以理解的")]),t._v(" "),e("p",[t._v("但是我如果把程序缩小到托盘 弹一个MessageBox程序就没了。。。")])])}]};t.exports={attributes:{date:"2018-05-08T00:00:00.000Z",title:"Qt-关闭QMessageBox之后程序自动关闭了",tags:["qt"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);