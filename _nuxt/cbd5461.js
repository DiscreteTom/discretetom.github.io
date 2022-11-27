(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1301:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"实现开机自启动"}},[t._v("实现开机自启动")]),t._v(" "),e("p",[t._v("实现开机自启动需要修改注册表文件")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("HKEY_LOCAL_MACHINE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SOFTWARE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Microsoft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CurrentVersion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Run\nHKEY_CURRENT_USER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SOFTWARE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Microsoft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CurrentVersion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Run\n")])]),t._v(" "),e("p",[t._v("第一个为所有用户登陆时启动的项目 第二个是当前用户登陆时启动的项目")]),t._v(" "),e("p",[t._v("编辑第一个注册表项需要管理员权限 推荐使用第二个")]),t._v(" "),e("p",[t._v("参考代码:")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* if auto start for all users\n * HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\n * else if auto start for current user\n * HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\n */")]),t._v("\nQSettings "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HKEY_CURRENT_USER\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QSettings"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("NativeFormat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nQString appName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QApplication")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("applicationName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("autoStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tQString strAppPath"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QDir")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toNativeSeparators")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QCoreApplication")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("applicationFilePath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\treg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("strAppPath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("上述代码中的autoStart变量是判断是否自动启动的变量")]),t._v(" "),e("p",[t._v("执行上述函数后可以使用Win + R运行regedit定位到对应注册表位置查看是否更改成功")]),t._v(" "),e("h2",{attrs:{id:"自启动时找不到文件的原因与解决方案"}},[t._v("自启动时找不到文件的原因与解决方案")]),t._v(" "),e("p",[t._v("如果程序运行时需要用到exe所在目录下的文件(即只有一个文件名作为相对路径)")]),t._v(" "),e("p",[t._v("开机自启动后会找不到这些文件")]),t._v(" "),e("p",[t._v("原因"),e("strong",[t._v("可能")]),t._v("是注册表里面的启动项的工作目录继承了父进程的工作目录，也就是system32目录")]),t._v(" "),e("p",[t._v("所以程序实际运行目录并不是exe所在的目录(虽然任务管理器说是)")]),t._v(" "),e("p",[t._v("因为我要保存的文件比较小 索性直接用绝对路径把文件保存到C盘Program Files中的一个文件夹里面了")]),t._v(" "),e("p",[t._v("复杂的解决方案可以参考"),e("a",{attrs:{href:"http://blog.51cto.com/2161404/1825573"}},[t._v("Qt5 windows开机启动")])]),t._v(" "),e("h2",{attrs:{id:"判断应用是否为开机自启动"}},[t._v("判断应用是否为开机自启动")]),t._v(" "),e("blockquote",[e("p",[t._v("为什么要判断应用是开机自启动而不是手动启动的？")]),t._v(" "),e("p",[t._v("案例：某软件开机自启动时会默认最小化到托盘而不显示窗口，但是手动启动时会显示窗口")])]),t._v(" "),e("p",[t._v("实现方案: 增加命令行参数")]),t._v(" "),e("p",[t._v("在注册表文件的命令后面添加参数")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//reg.setValue(appName,strAppPath);")]),t._v("\nreg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strAppPath "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" autoStart"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意tr函数中有一个空格")]),t._v("\n")])]),t._v(" "),e("p",[t._v("然后修改main.cpp")]),t._v(" "),e("p",[t._v("添加如下代码")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//MainWindow w;")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果有命令行参数而且参数是开机自启动")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoStart"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意tr函数中没有空格")]),t._v("\n\tw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不显示窗口")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//正常显示")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("即可实现开机自启动时不显示窗口")]),t._v(" "),e("p",[t._v("参考:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/x356982611/article/details/53183144"}},[t._v("Qt:Qt5程序开机自启动(windows)")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://blog.51cto.com/2161404/1825573"}},[t._v("Qt5 windows开机启动")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/FindSelf/p/3716741.html"}},[t._v("设置Qt程序在Windows开机后自动运行")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhidao.baidu.com/question/520965055.html"}},[t._v("vb判断程序是否是开机启动还是手动启动")])])])])}]};t.exports={attributes:{date:"2018-04-09T00:00:00.000Z",title:"Qt-Windows应用开机自启动相关",tags:["windows","qt"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);