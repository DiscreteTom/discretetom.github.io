(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1168:function(t,n){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",[t._v("产出")]),t._v(" "),e("p",[t._v("写了个基于QT的简单程序👉"),e("a",{attrs:{href:"https://github.com/DiscreteTom/TaskBarKiller"}},[t._v("TaskBarKiller")]),t._v("👈")]),t._v(" "),e("h2",[t._v("目标效果")]),t._v(" "),e("p",[t._v("默认"),e("strong",[t._v("任务栏为自动隐藏状态")]),t._v("，即鼠标贴近屏幕边缘可以显示任务栏。")]),t._v(" "),e("p",[t._v("目标是实现在运行非全屏应用时鼠标贴近屏幕边缘不会呼出任务栏，以减少错误操作")]),t._v(" "),e("h2",[t._v("方案")]),t._v(" "),e("p",[t._v("搜索得到以下信息")]),t._v(" "),e("ol",[e("li",[t._v("任务栏也是窗口，可以获取句柄")]),t._v(" "),e("li",[t._v("获取句柄的情况下可以使用Windows的"),e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms633545"}},[t._v("SetWindowsPos")]),t._v("函数实现窗口的置顶与取消置顶等位置操作")]),t._v(" "),e("li",[t._v("获取句柄的情况下可以使用Windows的"),e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms633548"}},[t._v("ShowWindow")]),t._v("函数实现控制窗口的隐藏与显示")])]),t._v(" "),e("p",[t._v("于是得到以下方案")]),t._v(" "),e("ol",[e("li",[t._v("任务栏始终置底，只有在桌面鼠标贴近屏幕边缘才可以呼出任务栏（信息1+信息2）")]),t._v(" "),e("li",[t._v("设置热键，使用热键切换任务栏的隐藏与显示（信息1+信息3）")])]),t._v(" "),e("p",[t._v("方案1看起来是个优秀的方案，因为只需要设置一次即可满足任何时间的使用需要，而方案2每次调出任务栏需要按下热键。但是根据测试，使用SetWindowPos函数似乎并不对任务栏产生效果。在找到更好的方案之前，"),e("strong",[t._v("暂时选择使用方案2")]),t._v("（测试得到"),e("strong",[t._v("方案2")]),t._v("的另一个"),e("strong",[t._v("缺点")]),t._v("是隐藏任务栏时"),e("strong",[t._v("无法使用Win+数字")]),t._v("快捷键切换或启动应用，使用Alt+Tab切换应用吧）")]),t._v(" "),e("p",[t._v("细化方案2，需要写一个程序，满足：")]),t._v(" "),e("ol",[e("li",[t._v("可以注册全局热键")]),t._v(" "),e("li",[t._v("可以隐藏到系统托盘区域")]),t._v(" "),e("li",[t._v("支持开机自启动")])]),t._v(" "),e("h2",[t._v("实现")]),t._v(" "),e("p",[t._v("全局热键使用第三方库QHotkey实现")]),t._v(" "),e("p",[t._v("MainWindow添加头文件")]),t._v(" "),e("pre",{staticClass:"language-c++"},[e("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("#include <qhotkey.h>\n")])]),t._v(" "),e("p",[t._v("添加私有成员")]),t._v(" "),e("pre",{staticClass:"language-c++"},[e("code",{pre:!0,attrs:{class:"language-c++"}},[t._v("QHotkey * hotkey;\nbool taskBarIsHidden;\n")])]),t._v(" "),e("p",[t._v("构造函数初始化，这里的快捷键选择了和网上相似软件一样的"),e("strong",[t._v("Ctrl+~")])]),t._v(" "),e("pre",{staticClass:"language-c++"},[e("code",{pre:!0,attrs:{class:"language-c++"}},[t._v('hotkey = new QHotkey(QKeySequence("Ctrl+`"), true, this);//设置快捷键、默认启动\nconnect(hotkey, &QHotkey::activated, this, &MainWindow::getHotKeyPressed);//连接快捷键能够触发的功能\ntaskBarIsHidden = false;//默认任务栏是显示的\n')])]),t._v(" "),e("p",[t._v("添加接收信号的槽函数")]),t._v(" "),e("pre",{staticClass:"language-c++"},[e("code",{pre:!0,attrs:{class:"language-c++"}},[t._v('void MainWindow::getHotKeyPressed()\n{\n\tHWND hwnd=::FindWindow(L"Shell_TrayWnd",NULL);//查找任务栏句柄\n\ttaskBarIsHidden = !taskBarIsHidden;//切换状态\n\tif (taskBarIsHidden){\n\t\tShowWindow(hwnd, 0);//hide\n\t} else {\n\t\tShowWindow(hwnd, 1);//show\n\t}\n}\n')])]),t._v(" "),e("p",[t._v("为了防止意外情况程序关闭导致任务栏一去不复返，在MainWindow的析构函数中添加显示任务栏的代码，在一定程度上补救一下")]),t._v(" "),e("pre",{staticClass:"language-c++"},[e("code",{pre:!0,attrs:{class:"language-c++"}},[t._v('MainWindow::~MainWindow()\n{\n\tHWND hwnd=::FindWindow(L"Shell_TrayWnd",NULL);\n\tShowWindow(hwnd, 1);//show\n\tdelete ui;\n}\n')])]),t._v(" "),e("p",[t._v("至此实现主要功能")]),t._v(" "),e("p",[t._v("接下来添加开机自启动功能和最小化托盘功能，之前的博客已经讲过")]),t._v(" "),e("p",[t._v("传送门：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/2018/03/04/Qt%E6%B7%BB%E5%8A%A0%E5%9B%BE%E6%A0%87-%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E7%9B%B8%E5%85%B3-%E6%9C%80%E5%B0%8F%E5%8C%96%E5%88%B0%E6%89%98%E7%9B%98/"}},[t._v("Qt-添加图标、资源文件相关、最小化到托盘")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/2018/04/09/Qt-Windows%E5%BA%94%E7%94%A8%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF%E5%8A%A8%E7%9B%B8%E5%85%B3/"}},[t._v("Qt-Windows应用开机自启动相关")])])]),t._v(" "),e("p",[t._v("参考:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/wangjieest/article/details/6943241"}},[t._v("任务栏句柄")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.cnblogs.com/Ricky81317/archive/2009/01/16/1376745.html"}},[t._v("如何使任意Windows窗口置顶")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms633545"}},[t._v("MSDN-SetWindowPos Function")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://m.www.cnblogs.com/sjcatsoft/archive/2009/03/13/1410639.html"}},[t._v("C#使用Windows API 隐藏/显示 任务栏 (FindWindowEx, ShowWindow)")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms633548"}},[t._v("ShowWindow function")])])])])}]};t.exports={attributes:{date:"2018-05-25T00:00:00.000Z",title:"屏蔽Windows任务栏",description:"基于QT的热键、隐藏任务栏",tags:["windows"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);