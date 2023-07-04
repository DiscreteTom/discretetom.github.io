(window.webpackJsonp=window.webpackJsonp||[]).push([[110,440],{1373:function(v,t,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),e("p",[v._v("OpenGL是一种3D API，是3D图形加速卡和3D图形应用程序之间的桥梁")]),v._v(" "),e("p",[v._v("主要特点：")]),v._v(" "),e("ul",[e("li",[v._v("硬件无关，可以一直")]),v._v(" "),e("li",[v._v("可以在CS系统工作，拥有网络功能")])]),v._v(" "),e("p",[v._v("在Open GL之上还有更多高级专用图形库")]),v._v(" "),e("h2",{attrs:{id:"api结构"}},[v._v("API结构")]),v._v(" "),e("p",[e("img",{attrs:{src:_(526),alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("Open GL表示基本API，包括物体描述、平移、旋转、光照、纹理、文字等")]),v._v(" "),e("li",[v._v("GLU表示utility api，包括绘制二次曲面、复杂多边形与纹理、矩阵管理等")]),v._v(" "),e("li",[v._v("WGL是为win32支持的OPEN GL接口")]),v._v(" "),e("li",[v._v("GLX是为UNIX支持的OPEN GL接口")])]),v._v(" "),e("h2",{attrs:{id:"open-gl工作流程"}},[v._v("OPEN GL工作流程")]),v._v(" "),e("ol",[e("li",[v._v("构造几何要素 ，创建对象的数学描述")]),v._v(" "),e("li",[v._v("在3D空间放置对象，选择合适的观察点")]),v._v(" "),e("li",[v._v("直接定义或由光照条件与贴图纹理给出对象的颜色")]),v._v(" "),e("li",[v._v("将对象的数学描述和颜色信息转换为屏幕像素")])]),v._v(" "),e("h2",{attrs:{id:"open-gl程序设计"}},[v._v("OPEN GL程序设计")]),v._v(" "),e("h3",{attrs:{id:"api-变量与常量的命名"}},[v._v("API、变量与常量的命名")]),v._v(" "),e("ul",[e("li",[v._v("基本库 - 以gl开头的函数")]),v._v(" "),e("li",[v._v("实用库 - 以glu开头")]),v._v(" "),e("li",[v._v("辅助库 - 以glut开头")]),v._v(" "),e("li",[v._v("windows专用库 - 以wgl开头")]),v._v(" "),e("li",[v._v("X-Windows专用库 - 以glx开头")]),v._v(" "),e("li",[v._v("常数 - 以"),e("code",{pre:!0},[v._v("GL_")]),v._v("开头")])]),v._v(" "),e("p",[v._v("函数后缀表明了API的数据类型")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("后缀")]),v._v(" "),e("th",[v._v("类型")]),v._v(" "),e("th",[v._v("C语言变量")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("b")]),v._v(" "),e("td",[v._v("8 bit int")]),v._v(" "),e("td",[v._v("signed char")])]),v._v(" "),e("tr",[e("td",[v._v("s")]),v._v(" "),e("td",[v._v("16 bit int")]),v._v(" "),e("td",[v._v("short")])]),v._v(" "),e("tr",[e("td",[v._v("i")]),v._v(" "),e("td",[v._v("32 bit int")]),v._v(" "),e("td",[v._v("long")])]),v._v(" "),e("tr",[e("td",[v._v("f")]),v._v(" "),e("td",[v._v("32 bit float")]),v._v(" "),e("td",[v._v("float")])]),v._v(" "),e("tr",[e("td",[v._v("d")]),v._v(" "),e("td",[v._v("64 bit float")]),v._v(" "),e("td",[v._v("double")])]),v._v(" "),e("tr",[e("td",[v._v("ub")]),v._v(" "),e("td",[v._v("8 bit unsigned int")]),v._v(" "),e("td",[v._v("unsigned char")])]),v._v(" "),e("tr",[e("td",[v._v("us")]),v._v(" "),e("td",[v._v("16 bit unsigned int")]),v._v(" "),e("td",[v._v("unsigned short")])]),v._v(" "),e("tr",[e("td",[v._v("ui")]),v._v(" "),e("td",[v._v("32 bit unsigned int")]),v._v(" "),e("td",[v._v("unsigned long")])])])]),v._v(" "),e("p",[v._v("比如函数"),e("code",{pre:!0},[v._v("glVertex2i(100, 200)")]),v._v("表明：")]),v._v(" "),e("ul",[e("li",[v._v("gl - 是OPEN GL基本函数")]),v._v(" "),e("li",[v._v("vertex - 绘点函数")]),v._v(" "),e("li",[v._v("2i - 两个整型参数")])]),v._v(" "),e("h3",{attrs:{id:"open-gl工作方式"}},[v._v("OPEN GL工作方式")]),v._v(" "),e("p",[v._v("OPEN GL工作方式是状态机。可以进行状态或模式设置。没有重新改变之前一直生效")]),v._v(" "),e("p",[v._v("许多变量可以通过"),e("code",{pre:!0},[v._v("glEnable()")]),v._v("和"),e("code",{pre:!0},[v._v("glDisable()")]),v._v("两个函数来启动、关闭")]),v._v(" "),e("p",[v._v("可以使用"),e("code",{pre:!0},[v._v("glGetBooleanv()/glGetDouble()/glGetGloatv()/glGetIntegerv()")]),v._v("等函数获取某个状态变量")]),v._v(" "),e("p",[v._v("使用"),e("code",{pre:!0},[v._v("glPushAttrib()/glPopAttrib()")]),v._v("可以存储和恢复最近使用的状态变量")]),v._v(" "),e("h3",{attrs:{id:"程序基本结构"}},[v._v("程序基本结构")]),v._v(" "),e("ul",[e("li",[v._v("初始化部分\n"),e("ul",[e("li",[v._v("设置状态开关、颜色模式、是否光照等")])])]),v._v(" "),e("li",[v._v("设置观察坐标系的取景模式和取景框位置大小\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("void glViewPort(left, top, right, bottom)")]),v._v("设置屏幕窗口大小")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("void glOrtho(left, rright, bottom, top, near, far)")]),v._v("设置投影方式为正交投影（平行投影），取景体积是一个长方体")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("void gluPerspective(fovy, aspect, zNear, zFar)")]),v._v("设置投影为透视投影，取景体积是一个截头锥体")])])]),v._v(" "),e("li",[v._v("使用OPEN GL进行几何物体对象的数学描述\n"),e("ul",[e("li",[v._v("包括点线面的位置与拓扑，几何变换，光照处理")])])])]),v._v(" "),e("h2",{attrs:{id:"配置环境windows"}},[v._v("配置环境（windows")]),v._v(" "),e("p",[v._v("安装宇宙最强IDE - Visual Studio")]),v._v(" "),e("p",[v._v("在"),e("a",{attrs:{href:"http://freeglut.sourceforge.net/index.php#download"}},[v._v("GLUT的网址")]),v._v("下载最新的GLUT版本源文件")]),v._v(" "),e("p",[v._v("跟着README或自行百度即可")])])}]};v.exports={attributes:{layout:"collection",title:"OPEN GL",collection:"ComputerGraphics"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},526:function(v,t,_){v.exports=_.p+"img/10-1.460f518.png"}}]);