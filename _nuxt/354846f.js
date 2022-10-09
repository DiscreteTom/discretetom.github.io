(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1257:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"写在前面"}},[t._v("写在前面")]),t._v(" "),e("p",[t._v("网上相关的博客挺多的。此处写三个似乎不是很容易查到的点")]),t._v(" "),e("h2",{attrs:{id:"重排序参数"}},[t._v("重排序参数")]),t._v(" "),e("h3",{attrs:{id:"现象"}},[t._v("现象")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://man7.org/linux/man-pages/man3/getopt.3.html"}},[t._v("官方文档")]),t._v("有这么一段话:")]),t._v(" "),e("blockquote",[e("p",[t._v("If there are no more option characters, getopt() returns -1. Then optind is the index in argv of the first argv-element that is not an option.")])]),t._v(" "),e("p",[t._v("如果命令行选项在实参前面，这句话似乎没什么重要的。但是如果命令行选项写在了实参后面，比如"),e("code",{pre:!0},[t._v("ls .. -R")]),t._v("，那么经过getopt遍历解析之后的argv数组会变成"),e("code",{pre:!0},[t._v("ls -R ..")]),t._v("以便用户在分析命令行选项之后使用optind变量直接访问非选项部分")]),t._v(" "),e("h3",{attrs:{id:"实验代码"}},[t._v("实验代码")]),t._v(" "),e("pre",{staticClass:"language-c"},[e("code",{pre:!0,attrs:{class:"language-c"}},[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<getopt.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unistd.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<time.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("optString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ral:h:m:"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" opt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getopt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" optString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token char"}},[t._v("'r'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get r\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get a\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token char"}},[t._v("'l'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get l and %s\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" optarg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token char"}},[t._v("'h'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get h and %s\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" optarg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token char"}},[t._v("'m'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get m and %s\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" optarg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" argc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("保存为test.c进行make然后执行，效果如下：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./test 123 -a -r")]),t._v("\nget a\nget r\n./test\n-a\n-r\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])]),t._v(" "),e("h2",{attrs:{id:"区分命令行选项与实参"}},[t._v("区分命令行选项与实参")]),t._v(" "),e("p",[t._v("Linux系统文件名可以是除了"),e("code",{pre:!0},[t._v("/")]),t._v("的任意字符组合（甚至不可打印字符）。如果文件名是"),e("code",{pre:!0},[t._v("-R")]),t._v("，那么"),e("code",{pre:!0},[t._v("ls -R")]),t._v("便不是打印"),e("code",{pre:!0},[t._v("-R")]),t._v("而是递归输出当前目录了")]),t._v(" "),e("p",[t._v("解决方案是在参数里面加上"),e("code",{pre:!0},[t._v("--")]),t._v("，那么"),e("code",{pre:!0},[t._v("--")]),t._v("以后的参数都会视为实参而不是选项。比如上例，可以使用"),e("code",{pre:!0},[t._v("ls -- -R")]),t._v("解决")]),t._v(" "),e("p",[t._v("如果使用getopt函数，它是可以识别"),e("code",{pre:!0},[t._v("--")]),t._v("的，并会把"),e("code",{pre:!0},[t._v("--")]),e("strong",[t._v("及")]),t._v("后面的参数视为实参。所以"),e("code",{pre:!0},[t._v("--")]),t._v("也会作为实参之一。")]),t._v(" "),e("p",[t._v("使用上文中的测试程序进行测试，效果如下：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./test 123 -a -r -- -m 123")]),t._v("\nget a\nget r\n./test\n-a\n-r\n--\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n-m\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])]),t._v(" "),e("p",[t._v("可以看到如果"),e("code",{pre:!0},[t._v("--")]),t._v("前面还有实参，getopt也会把"),e("code",{pre:!0},[t._v("--")]),t._v("作为第一个实参以便进行处理。可以说是非常贴心了")]),t._v(" "),e("h2",{attrs:{id:"无效的命令行选项"}},[t._v("无效的命令行选项")]),t._v(" "),e("p",[t._v("结论："),e("strong",[t._v("无效的命令行选项仍然视为选项")]),t._v("，不会作为实参进行重排序然后放到选项后面")]),t._v(" "),e("p",[t._v("测试：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./test 123 -a -b -r")]),t._v("\nget a\n./test: invalid option -- "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\nget r\n./test\n-a\n-b\n-r\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])])])}]};t.exports={attributes:{date:"2019-04-29T00:00:00.000Z",title:"关于Linux下的getopt函数",description:"参数重排序、区分选项与实参、无效选项相关",tags:["linux"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);