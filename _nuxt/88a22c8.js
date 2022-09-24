(window.webpackJsonp=window.webpackJsonp||[]).push([[63,313,314,315,316],{1266:function(t,n,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"程序添加图标"}},[t._v("程序添加图标")]),t._v(" "),r("p",[t._v("以最近写的ToDoStack为例")]),t._v(" "),r("p",[t._v("首先确保"),r("strong",[t._v("图标文件在源码目录中")])]),t._v(" "),r("p",[t._v("打开项目文件"),r("strong",[t._v("ToDoStack.pro")]),t._v("，在最后一行添加")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("//ToDoStack.ico是此程序的图标文件\nRC_ICONS "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ToDoStack.ico\n")])]),t._v(" "),r("p",[t._v("这样程序就会以ToDoStack.ico作为图标")]),t._v(" "),r("h2",{attrs:{id:"最小化托盘需要的图标"}},[t._v("最小化托盘需要的图标")]),t._v(" "),r("p",[t._v("最小化托盘时显示的图标在"),r("strong",[t._v("资源文件")]),t._v("中")]),t._v(" "),r("p",[t._v("项目-新建文件-Qt-Qt Resource File")]),t._v(" "),r("p",[r("img",{attrs:{src:e(468),alt:"2-1"}})]),t._v(" "),r("p",[t._v("命名(本项目中命名为myicon)")]),t._v(" "),r("p",[r("img",{attrs:{src:e(469),alt:"2-2"}})]),t._v(" "),r("p",[t._v("这样在左侧项目视图中会出现"),r("strong",[t._v("资源")]),t._v("文件夹")]),t._v(" "),r("p",[r("img",{attrs:{src:e(470),alt:"2-3"}})]),t._v(" "),r("p",[t._v("编辑资源文件，点击"),r("strong",[t._v("添加-添加前缀")]),t._v("(前缀类似于文件夹的作用),默认会出现一个名为 "),r("strong",[t._v("/new/prefix1")]),t._v(" 的前缀")]),t._v(" "),r("p",[t._v("在本项目中，我将它改名为**/img**")]),t._v(" "),r("p",[r("img",{attrs:{src:e(471),alt:"2-4"}})]),t._v(" "),r("p",[t._v("然后点击"),r("strong",[t._v("添加-添加文件")]),t._v("，选中我们的托盘图标文件添加进来即可")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("注意:托盘图标文件不建议使用ico而建议使用png，否则可能无法正常显示")])])]),t._v(" "),r("h2",{attrs:{id:"实现最小化到托盘"}},[t._v("实现最小化到托盘")]),t._v(" "),r("p",[t._v("需要的头文件")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token macro property"}},[r("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),r("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("<QAction>")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用来生成鼠标点击托盘图标后出现的菜单")])]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token macro property"}},[r("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),r("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("<QMenu>")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用来生成鼠标点击托盘图标后出现的菜单")])]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token macro property"}},[r("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),r("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("<QSystemTrayIcon>")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//托盘图标类")])]),t._v("\n")])]),t._v(" "),r("p",[t._v("给MainWindow.h添加私有子控件指针")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[t._v("QSystemTrayIcon "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" icon"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//托盘图标")]),t._v("\nQAction "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" actionShow"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示窗口操作")]),t._v("\nQAction "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" actionClose"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//退出程序操作")]),t._v("\nQMenu "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" menu"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//菜单")]),t._v("\n")])]),t._v(" "),r("p",[t._v("在构造函数中初始化")]),t._v(" "),r("p",[t._v("注意从资源文件获取图标的时候路径"),r("strong",[t._v("不是:/myicon/img/ToDoStack.png而是:/img/ToDoStack.png")])]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[t._v("icon "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("QSystemTrayIcon")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取托盘图标对象")]),t._v("\nQIcon "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("thisIcon")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('":/img/ToDoStack.png"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从资源文件获取托盘图标的图标文件")]),t._v("\nicon"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("setIcon")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thisIcon"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置托盘图标的图标文件")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("icon"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("QSystemTrayIcon"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("activated"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("MainWindow"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("trayClicked"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点击托盘图标发生的事件")]),t._v("\nicon"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在托盘显示此图标")]),t._v("\nactionShow "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("QAction")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Show(&S)"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示窗口操作")]),t._v("\nactionClose "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("QAction")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Exit(&E)"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//退出程序操作")]),t._v("\nmenu "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("QMenu")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmenu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionShow"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加至菜单")]),t._v("\nmenu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionClose"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionShow"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("QAction"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("triggered"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("MainWindow"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("getShow"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionClose"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("QAction"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("triggered"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("MainWindow"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("getExit"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("p",[t._v("在头文件添加对应的槽")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("trayClicked")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QSystemTrayIcon"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("ActivationReason reason"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此处参数类型不能改动，因为要匹配对应的信号")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExit")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("p",[t._v("在源文件中完成函数")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("trayClicked")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QSystemTrayIcon"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("ActivationReason reason"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//reason为托盘图标被触发的形式")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" QSystemTrayIcon"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token type-opencl-host-cpp keyword"}},[t._v("Context")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//鼠标右键点击")]),t._v("\n\t\tmenu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cursor")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("pos")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示菜单 注意不是show()")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" QSystemTrayIcon"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Trigger"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//鼠标左键点击")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示主窗口")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示主窗口")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExit")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tqApp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("quit")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//退出程序")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("p",[t._v("最后，拦截主窗口自身的关闭操作，实现点击关闭按钮时默认隐藏到托盘的效果")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token macro property"}},[r("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),r("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("<QCloseEvent>")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用来拦截窗口关闭事件")])]),t._v("\n")])]),t._v(" "),r("p",[t._v("在头文件中添加protected方法")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeEvent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QCloseEvent "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("p",[t._v("会发现这里的方法名"),r("em",[t._v("closeEvent")]),t._v("变成了斜体，表示我们"),r("strong",[t._v("不能")]),t._v("改动这个方法名")]),t._v(" "),r("p",[t._v("最后在源文件完善函数")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeEvent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QCloseEvent "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\te"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ignore")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//忽略原本的关闭操作")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//仅仅隐藏主窗口")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"添加托盘注释"}},[t._v("添加托盘注释")]),t._v(" "),r("p",[t._v("QSystemTrayIcon类的方法setToolTip可以设置托盘图标注释")]),t._v(" "),r("p",[t._v("参考：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.qter.org/portal.php?mod=view&aid=25&page=3"}},[t._v("Qt开发环境的搭建和HelloWorld")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://blog.csdn.net/bzhxuexi/article/details/24787103"}},[t._v("Qt中如何使窗口隐藏/最小化到托盘")])])])])}]};t.exports={attributes:{title:"Qt添加图标、资源文件相关、最小化到托盘",date:"2018-03-04T00:00:00.000Z",tags:["qt"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},468:function(t,n,e){t.exports=e.p+"img/2-1.a688ab6.png"},469:function(t,n,e){t.exports=e.p+"img/2-2.1cc410c.png"},470:function(t,n,e){t.exports=e.p+"img/2-3.8ebb7aa.png"},471:function(t,n,e){t.exports=e.p+"img/2-4.f294184.png"}}]);