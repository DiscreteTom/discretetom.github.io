(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1264:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"问题描述"}},[t._v("问题描述")]),t._v(" "),e("p",[t._v("目前有模块data，包含一个变量config，并且可以使用函数load为其赋值。代码如下：")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# data.py")]),t._v("\nconfig "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" config\n\tconfig "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("模块A使用"),e("code",{pre:!0},[t._v("from x import x")]),t._v("格式导入config:")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A.py")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("funcA")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("p",[t._v("模块B使用"),e("code",{pre:!0},[t._v("import x")]),t._v("格式导入data，然后使用data.config访问config:")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# B.py")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" data\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("funcB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("p",[t._v("主模块main分别调用模块A和B的内容，并在某一时刻修改data：")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# main.py")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" A "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" funcA\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" B "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" funcB\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" load\n\nload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfuncA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfuncB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("p",[t._v("会发现，输出的结果是")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("即，模块A和模块B都使用了data模块的config变量，输出为何不同？")]),t._v(" "),e("h2",{attrs:{id:"分析"}},[t._v("分析")]),t._v(" "),e("p",[t._v("上面的例子中，因为模块A使用"),e("code",{pre:!0},[t._v("from data import config")]),t._v("，所以获得的是直接对config的引用。模块B使用"),e("code",{pre:!0},[t._v("import data")]),t._v("，获得的是对data模块的引用。")]),t._v(" "),e("p",[t._v("模块main调用"),e("code",{pre:!0},[t._v("data.load()")]),t._v("函数对config变量进行直接赋值（绑定了另一块内存），抛弃对原对象的引用。然而原对象的内存被模块A的"),e("code",{pre:!0},[t._v("config")]),t._v("绑定所以没有被回收，模块A使用的还是原来的对象。模块B通过"),e("code",{pre:!0},[t._v("data.config")]),t._v("访问到的"),e("code",{pre:!0},[t._v("config")]),t._v("才是新的对象")]),t._v(" "),e("p",[t._v("网上一些关于python跨文件/模块全局变量的问题很多也是由这个原因产生的")]),t._v(" "),e("h2",{attrs:{id:"解决方案"}},[t._v("解决方案")]),t._v(" "),e("h3",{attrs:{id:"方案一每次操作变量都重新解析其对象"}},[t._v("方案一：每次操作变量都重新解析其对象")]),t._v(" "),e("p",[t._v("即，能用"),e("code",{pre:!0},[t._v("import data")]),t._v("就不要"),e("code",{pre:!0},[t._v("from data import config")])]),t._v(" "),e("p",[t._v("这会导致引用过多不需要的东西，以及代码会比较长："),e("code",{pre:!0},[t._v("bulabula.bulabula.bulabula.bulabula")])]),t._v(" "),e("h3",{attrs:{id:"方案二避免对对象本体重新赋值"}},[t._v("方案二：避免对对象本体重新赋值")]),t._v(" "),e("p",[t._v("即，通过修改对象的内部数据达到类似于重新赋值的效果")]),t._v(" "),e("p",[t._v("上述load函数就应该改为：")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[t._v("config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tconfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),t._v("\n")])]),t._v(" "),e("p",[t._v("从模块划分的角度来说显然应该采用方案二")])])}]};t.exports={attributes:{date:"2019-07-30T00:00:00.000Z",title:"python中跨模块变量数据不一致问题",description:"两种import方式导致变量作用域不同",tags:["python"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);