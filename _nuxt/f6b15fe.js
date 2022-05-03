(window.webpackJsonp=window.webpackJsonp||[]).push([[104,390],{1288:function(v,_,t){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"交互硬件设备"}},[v._v("交互硬件设备")]),v._v(" "),e("ul",[e("li",[v._v("定位设备\n"),e("ul",[e("li",[v._v("在二维或三维坐标系统中定位")]),v._v(" "),e("li",[v._v("鼠标")])])]),v._v(" "),e("li",[v._v("键盘设备\n"),e("ul",[e("li",[v._v("用来输入字母、数字、选择功能")]),v._v(" "),e("li",[v._v("键盘")])])]),v._v(" "),e("li",[v._v("取数设备\n"),e("ul",[e("li",[v._v("可以使用旋转或平移的电位器实现")])])]),v._v(" "),e("li",[v._v("选择设备\n"),e("ul",[e("li",[v._v("用来选择功能或图形元素")])])]),v._v(" "),e("li",[v._v("其他输入设备\n"),e("ul",[e("li",[v._v("语音识别器")]),v._v(" "),e("li",[v._v("数位板")]),v._v(" "),e("li",[v._v("…")])])])]),v._v(" "),e("h2",{attrs:{id:"基本交互任务"}},[v._v("基本交互任务")]),v._v(" "),e("ul",[e("li",[v._v("定位")]),v._v(" "),e("li",[v._v("选择")]),v._v(" "),e("li",[v._v("数量输入")]),v._v(" "),e("li",[v._v("文本输入")]),v._v(" "),e("li",[v._v("三维交互任务\n"),e("ul",[e("li",[v._v("三维空间定位、选择、旋转…")])])])]),v._v(" "),e("h2",{attrs:{id:"高级交互技术"}},[v._v("高级交互技术")]),v._v(" "),e("h3",{attrs:{id:"几何约束"}},[v._v("几何约束")]),v._v(" "),e("ul",[e("li",[v._v("定位约束\n"),e("ul",[e("li",[v._v("光标仅能定位到屏幕上的离散点")]),v._v(" "),e("li",[v._v("任何输入都选取最近的网格结点")])])]),v._v(" "),e("li",[v._v("方向约束\n"),e("ul",[e("li",[v._v("如画线只能是水平或垂直的")])])])]),v._v(" "),e("h3",{attrs:{id:"拖动"}},[v._v("拖动")]),v._v(" "),e("p",[v._v("实时显示子图的位置")]),v._v(" "),e("p",[v._v("用户感觉更直观")]),v._v(" "),e("h3",{attrs:{id:"橡皮筋技术"}},[v._v("橡皮筋技术")]),v._v(" "),e("p",[v._v("确定起点后实时显示起点到当前点的路径。")]),v._v(" "),e("p",[v._v("橡皮筋可以使用矩形代替")]),v._v(" "),e("h3",{attrs:{id:"图形变比"}},[v._v("图形变比")]),v._v(" "),e("p",[v._v("把图片的某一部分放大或缩小")]),v._v(" "),e("h3",{attrs:{id:"引力场效果"}},[v._v("引力场效果")]),v._v(" "),e("p",[v._v("参考磁吸效果")]),v._v(" "),e("p",[v._v("在目标点或直线（比较小或者比较细，难以选择的对象）周围设置一个香肠或哑铃型区域")]),v._v(" "),e("p",[e("img",{attrs:{src:t(552),alt:""}})]),v._v(" "),e("h3",{attrs:{id:"标尺和导向线"}},[v._v("标尺和导向线")]),v._v(" "),e("p",[v._v("参考ppt的参考线。仅在部分编辑的时候显示")]),v._v(" "),e("h3",{attrs:{id:"坐标显示"}},[v._v("坐标显示")]),v._v(" "),e("p",[v._v("直接显示坐标")]),v._v(" "),e("h3",{attrs:{id:"三视图三维输入"}},[v._v("三视图三维输入")]),v._v(" "),e("p",[v._v("输入时输出三视图")]),v._v(" "),e("h3",{attrs:{id:"推移"}},[v._v("推移")]),v._v(" "),e("p",[v._v("使用二维图片在三维空间的变换（旋转、平移、放缩等）轨迹形成的三维图形，如三角形旋转轨迹形成圆锥")]),v._v(" "),e("h3",{attrs:{id:"结构平面"}},[v._v("结构平面")]),v._v(" "),e("p",[v._v("选择一个3D物体的一个平面，在平面上选取一个区域进行推移操作。这个平面就是结构平面")]),v._v(" "),e("h2",{attrs:{id:"输入过程基本处理模式"}},[v._v("输入过程基本处理模式")]),v._v(" "),e("h3",{attrs:{id:"请求方式request-mode"}},[v._v("请求方式Request mode")]),v._v(" "),e("p",[v._v("应用程序实现输入设备的初始化")]),v._v(" "),e("p",[v._v("当应用程序需要输入时等待用户输入（阻塞")]),v._v(" "),e("h3",{attrs:{id:"取样方式sample-mode"}},[v._v("取样方式Sample mode")]),v._v(" "),e("p",[v._v("设备立即输入信息，与应用程序的输入命令无关")]),v._v(" "),e("h3",{attrs:{id:"事件方式event-mode"}},[v._v("事件方式Event mode")]),v._v(" "),e("p",[v._v("输入设备和程序同时工作（非阻塞）")]),v._v(" "),e("p",[v._v("用户输入后产生一个事件（中断），程序处理输入队列")]),v._v(" "),e("h2",{attrs:{id:"设计人机交互的一般风格及原则"}},[v._v("设计人机交互的一般风格及原则")]),v._v(" "),e("p",[v._v("风格：")]),v._v(" "),e("ul",[e("li",[v._v("所见即所得what you see is what you get\n"),e("ul",[e("li",[v._v("在屏幕上见到的设计结果和使用硬拷贝得到的输出结果应该是一致的")])])]),v._v(" "),e("li",[v._v("直接操作direct manipulate\n"),e("ul",[e("li",[v._v("能够直观地表现操作的结果，说明这个操作是被正确执行了")])])]),v._v(" "),e("li",[v._v("菜单和图形符号icon\n"),e("ul",[e("li",[v._v("使用设计好的图形符号代表按钮的操作")])])])]),v._v(" "),e("p",[v._v("原则：")]),v._v(" "),e("ul",[e("li",[v._v("简单易学")]),v._v(" "),e("li",[v._v("提供反馈")]),v._v(" "),e("li",[v._v("易于对错误操作进行修正（撤销")]),v._v(" "),e("li",[v._v("设计一致性（布局、颜色、代号等应一致")])])])}]};v.exports={attributes:{layout:"collection",title:"人机交互技术",collection:"ComputerGraphics"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},552:function(v,_,t){v.exports=t.p+"img/5-1.b201d97.png"}}]);