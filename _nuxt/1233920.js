(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1238:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"先说结论"}},[t._v("先说结论")]),t._v(" "),e("p",[t._v("在main函数靠前的位置添加如下代码")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//need #include<windows.h>")]),t._v("\nHANDLE hMutex "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateMutex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LPCTSTR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourAppName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLastError")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ERROR_ALREADY_EXISTS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("效果:")]),t._v(" "),e("p",[t._v("启动应用A得到实例A1，再次启动应用A试图得到实例A2会失败")]),t._v(" "),e("h2",{attrs:{id:"原理"}},[t._v("原理")]),t._v(" "),e("p",[t._v("每次启动应用时，上面的代码调用CreateMutex在系统中产生一个"),e("strong",[t._v("互斥体")])]),t._v(" "),e("p",[t._v('互斥体的名称在上述代码中为"YourAppName"')]),t._v(" "),e("p",[t._v("再次启动应用时又会试图产生同名互斥体，显然这是不允许的")]),t._v(" "),e("p",[t._v("这样就会产生"),e("strong",[t._v("ERROR_ALREADY_EXISTS")]),t._v("错误，通过"),e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms679360"}},[t._v("GetLastError")]),t._v("()函数获取即可")]),t._v(" "),e("h3",{attrs:{id:"关于互斥体的名称"}},[t._v("关于互斥体的名称")]),t._v(" "),e("p",[t._v("不要和已有其他互斥体重名就好，比如像本例一样使用应用名作为互斥体名")]),t._v(" "),e("h2",{attrs:{id:"风险和其他"}},[t._v("风险和其他")]),t._v(" "),e("p",[t._v("释放互斥体函数"),e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms685066"}},[e("strong",[t._v("ReleaseMutex")])]),t._v("和关闭线程/句柄函数"),e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms724211"}},[e("strong",[t._v("CloseHandle")])]),t._v("在此例中没有被调用，因为main函数return时系统会自动做如上工作。如果要实现其他更复杂的判断功能可以考虑调用这两个函数")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms724211"}},[t._v("CloseHandle function")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms682411"}},[t._v("CreateMutex function")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/ciaos/article/details/7488362"}},[t._v("如何禁止程序启动多个实例")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.cnblogs.com/singlex/archive/2011/12/07/2279913.html"}},[t._v("C# 禁止应用程序多次启动")])])])])}]};t.exports={attributes:{date:"2018-05-26T00:00:00.000Z",title:"Windows防止应用双开",tags:["windows"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);