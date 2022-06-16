(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1235:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"建议前置知识"}},[t._v("建议前置知识")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("exec()")]),t._v("函数族（下文用到了"),e("code",{pre:!0},[t._v("execlp()")])]),t._v(" "),e("li",[t._v("文件描述符表与"),e("code",{pre:!0},[t._v("dup2()")]),t._v("函数")]),t._v(" "),e("li",[t._v("管道的效果，以及"),e("code",{pre:!0},[t._v("pipe()")]),t._v("函数")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("fork()")]),t._v("函数")])]),t._v(" "),e("h2",{attrs:{id:"实现重定向"}},[t._v("实现重定向")]),t._v(" "),e("p",[t._v("因为exec仅重置用户数据段而"),e("strong",[t._v("不重置系统数据段")]),t._v("，所以文件描述符都会得到保留")]),t._v(" "),e("p",[t._v("只要在原程序中使用"),e("code",{pre:!0},[t._v("dup2")]),t._v("编辑标准文件描述符，然后再执行exec就可以实现重定向")]),t._v(" "),e("p",[t._v("如，从data.txt输入数据输出到result.txt：")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[t._v("fd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.txt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" O_RDONLY"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data.txt => stdin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result.txt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" O_WRONLY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" O_CREATE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stdout => result.txt")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("p",[t._v("其中"),e("code",{pre:!0},[t._v("close(fd)")]),t._v("并不会真正关闭文件的连接，因为标准文件描述符还打开着这些文件")]),t._v(" "),e("h2",{attrs:{id:"实现管道"}},[t._v("实现管道")]),t._v(" "),e("p",[t._v("思想：")]),t._v(" "),e("ol",[e("li",[t._v("原进程初始化管道文件描述符，并fork出两个子进程。")]),t._v(" "),e("li",[t._v("子进程继承了管道文件描述符，使用管道文件描述符修改标准文件描述符实现重定向")]),t._v(" "),e("li",[t._v("子进程调用exec，启动管道两侧需要执行的程序")]),t._v(" "),e("li",[t._v("父进程负责监视两个子进程的结束，防止父进程执行结束后孤儿进程的产生")])]),t._v(" "),e("p",[t._v("示例："),e("a",{attrs:{href:"https://github.com/DiscreteTom/linux-homework/tree/master/4"}},[t._v("我的linux作业题")])]),t._v(" "),e("h2",{attrs:{id:"exec注意事项"}},[t._v("exec注意事项")]),t._v(" "),e("p",[t._v("以"),e("code",{pre:!0},[t._v("execl")]),t._v("为例。"),e("code",{pre:!0},[t._v("execl")]),t._v("的第一个参数是目标程序名，后面的参数是目标程序的参数")]),t._v(" "),e("p",[t._v("所以"),e("code",{pre:!0},[t._v("execl")]),t._v("的第二个参数是目标程序的第一个参数，理论上也是目标程序名，基本上是一个没有用的参数")]),t._v(" "),e("p",[t._v("所以"),e("code",{pre:!0},[t._v("execl")]),t._v("的第二个参数"),e("strong",[t._v("通常")]),t._v("可以"),e("strong",[t._v("传入任意字符串")]),t._v("，并"),e("strong",[t._v("通常")]),t._v("会"),e("strong",[t._v("被目标程序忽略")]),t._v("（除非目标程序需要输出目标程序名什么的")])])}]};t.exports={attributes:{date:"2019-05-26T00:00:00.000Z",title:"Linux下在程序内实现管道",description:"文件描述符的复制、输入输出重定向、命令参数",tags:["linux"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);