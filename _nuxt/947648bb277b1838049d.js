(window.webpackJsonp=window.webpackJsonp||[]).push([[66,209,210,211],{1052:function(t,n,_){const v={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,v=t._self._c||n;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",[t._v("概述")]),t._v(" "),v("blockquote",[v("p",[t._v("消隐 - 找出并消除物体中不可见的部分")])]),t._v(" "),v("p",[t._v("经过消隐得到的图形称为消隐图")]),t._v(" "),v("p",[t._v("消隐的对象是三维物体")]),t._v(" "),v("p",[t._v("根据消隐对象的不同，有两类消隐算法：")]),t._v(" "),v("ul",[v("li",[t._v("消除不可见的线段 - 线消隐")]),t._v(" "),v("li",[t._v("消除不可见的面 - 面消隐")])]),t._v(" "),v("p",[t._v("消隐不仅与对象有关，还与投影有关")]),t._v(" "),v("p",[t._v("通常投影平面为XOY，投影方向为负Z")]),t._v(" "),v("p",[t._v("根据消隐空间的不同，也可以分为两类：")]),t._v(" "),v("ul",[v("li",[t._v("物体空间消隐 - 计算物体所在空间的遮挡关系")]),t._v(" "),v("li",[t._v("图像空间消隐 - 计算物体在屏幕上是否可见")])]),t._v(" "),v("p",[t._v("消隐算法种类繁多，但是必然涉及"),v("strong",[t._v("排序")]),t._v("和"),v("strong",[t._v("相关性")]),t._v("两个基本原则：")]),t._v(" "),v("ul",[v("li",[t._v("排序 - 为了确定对象之间的遮挡关系，大多数算法都会在Z方向排序，确定对象相对于观察点的距离，然后在X和Y方向进一步排序，确定遮挡关系")]),t._v(" "),v("li",[t._v("相关性 - 指所考察的物体或视图区内的图像局部保持不变的一种性质。相关性利用得越充分、巧妙，消隐算法效率越高")])]),t._v(" "),v("h2",[t._v("区域子分算法")]),t._v(" "),v("h3",[t._v("概述")]),t._v(" "),v("p",[v("img",{attrs:{src:_(401),alt:""}})]),t._v(" "),v("p",[t._v("针对光栅扫描式图像显示器")]),t._v(" "),v("p",[t._v("分治算法")]),t._v(" "),v("p",[t._v("每次把矩形窗口等分为4个相等矩形（称为窗口），每一次子分都计算要显示的多边形和窗口的关系：")]),t._v(" "),v("ul",[v("li",[t._v("多边形包围了窗口（下图1")]),t._v(" "),v("li",[t._v("多边形和窗口相交（下图2")]),t._v(" "),v("li",[t._v("窗口包围多边形（下图3")]),t._v(" "),v("li",[t._v("二者分离（下图4")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(402),alt:""}})]),t._v(" "),v("p",[t._v("确定窗口和每个多边形的关系后：")]),t._v(" "),v("ul",[v("li",[t._v("如果所有多边形都和窗口分离，窗口填充背景色")]),t._v(" "),v("li",[t._v("只有一个多边形和窗口相交或在窗口内，则窗口填充背景色，然后使用扫描算法画多边形")]),t._v(" "),v("li",[t._v("距离观察者最近的多边形包围了窗口，则窗口填充目标颜色")]),t._v(" "),v("li",[t._v("如果以上都不是，则进一步四分窗口")])]),t._v(" "),v("h3",[t._v("改进效率 - 边界盒方法")]),t._v(" "),v("p",[t._v("此方法可以用来判断两个线段或者多边形是否相交")]),t._v(" "),v("p",[t._v("多边形的边界盒是包含这个多边形的平行于坐标轴的最小矩形，由四个参数决定:$x_{max}, x_{min}, y_{max}, y_{min}$")]),t._v(" "),v("p",[t._v("如果边界盒不想交，则二者不相交")]),t._v(" "),v("h3",[t._v("遮挡判断")]),t._v(" "),v("p",[t._v("把窗口的顶点坐标代入目标多边形的平面方程得到Z值")]),t._v(" "),v("p",[t._v("如果有多个多边形，多边形A的最小Z不小于多边形B的最大Z，那么多边形B被遮挡")]),t._v(" "),v("p",[t._v("否则，老老实实根据X和Y计算哪个面的Z最大")]),t._v(" "),v("h2",[t._v("深度缓存算法")]),t._v(" "),v("h3",[t._v("概述")]),t._v(" "),v("p",[t._v("Z-Buffer")]),t._v(" "),v("p",[t._v("是一种最简单的图像空间面消隐算法，适用于多边形和其他曲面")]),t._v(" "),v("p",[t._v("需要深度缓存数组ZB，大小与屏幕像素个数相同，也与显示器的帧缓存FB单元个数相同。一一对应")]),t._v(" "),v("p",[t._v("对于显示器的每一个点(x, y)，向Z轴发射射线，取最大Z值存在ZB，对应的颜色存在显示器的FB")]),t._v(" "),v("p",[v("img",{attrs:{src:_(403),alt:""}})]),t._v(" "),v("h3",[t._v("算法步骤")]),t._v(" "),v("p",[t._v("假设有N个多边形，屏幕像素个数为$m \\times n$")]),t._v(" "),v("pre",{staticClass:"language-python"},[v("code",{staticClass:"language-python"},[v("span",{staticClass:"token comment"},[t._v("# 初始化ZB为Z的极小值")]),t._v("\n"),v("span",{staticClass:"token comment"},[t._v("# 初始化FB为背景色")]),t._v("\n"),v("span",{staticClass:"token keyword"},[t._v("for")]),t._v(" i "),v("span",{staticClass:"token keyword"},[t._v("in")]),t._v(" "),v("span",{staticClass:"token builtin"},[t._v("range")]),v("span",{staticClass:"token punctuation"},[t._v("(")]),v("span",{staticClass:"token number"},[t._v("1")]),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" n"),v("span",{staticClass:"token punctuation"},[t._v(")")]),v("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("\n\t"),v("span",{staticClass:"token keyword"},[t._v("for")]),t._v(" j "),v("span",{staticClass:"token keyword"},[t._v("in")]),t._v(" "),v("span",{staticClass:"token builtin"},[t._v("range")]),v("span",{staticClass:"token punctuation"},[t._v("(")]),v("span",{staticClass:"token number"},[t._v("1")]),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" m"),v("span",{staticClass:"token punctuation"},[t._v(")")]),v("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("\n\t\t"),v("span",{staticClass:"token keyword"},[t._v("for")]),t._v(" k "),v("span",{staticClass:"token keyword"},[t._v("in")]),t._v(" "),v("span",{staticClass:"token builtin"},[t._v("range")]),v("span",{staticClass:"token punctuation"},[t._v("(")]),v("span",{staticClass:"token number"},[t._v("1")]),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" N"),v("span",{staticClass:"token punctuation"},[t._v(")")]),v("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),v("span",{staticClass:"token comment"},[t._v("# 遍历多边形")]),t._v("\n\t\t\t"),v("span",{staticClass:"token keyword"},[t._v("if")]),t._v(" point"),v("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("i"),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" j"),v("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),v("span",{staticClass:"token keyword"},[t._v("in")]),t._v(" polygon"),v("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("k"),v("span",{staticClass:"token punctuation"},[t._v("]")]),v("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("projection"),v("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("\n\t\t\t\t"),v("span",{staticClass:"token comment"},[t._v("# 射线与多边形有交点")]),t._v("\n\t\t\t\t"),v("span",{staticClass:"token keyword"},[t._v("if")]),t._v(" polygon"),v("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("k"),v("span",{staticClass:"token punctuation"},[t._v("]")]),v("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("i"),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" j"),v("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),v("span",{staticClass:"token operator"},[t._v(">")]),t._v(" ZB"),v("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("i"),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" j"),v("span",{staticClass:"token punctuation"},[t._v(")")]),v("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("\n\t\t\t\t\t"),v("span",{staticClass:"token comment"},[t._v("# 如果Z大于当前ZB的Z")]),t._v("\n\t\t\t\t\tZB"),v("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("i"),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" j"),v("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),v("span",{staticClass:"token operator"},[t._v("=")]),t._v(" polygon"),v("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("k"),v("span",{staticClass:"token punctuation"},[t._v("]")]),v("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("i"),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" j"),v("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t\t\t\t\tFB"),v("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("i"),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" j"),v("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),v("span",{staticClass:"token operator"},[t._v("=")]),t._v(" polygon"),v("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("k"),v("span",{staticClass:"token punctuation"},[t._v("]")]),v("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("i"),v("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" j"),v("span",{staticClass:"token punctuation"},[t._v(")")]),v("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("color\n")])]),t._v(" "),v("h2",[t._v("扫描线算法（略")]),t._v(" "),v("p",[t._v("ZB算法的优点是简单可靠，不需要对显示对象的面进行排序。缺点是需要很大的ZB，对于每一个像素都要计算Z，工作量大")]),t._v(" "),v("p",[t._v("面向多边形场景的扫描线算法解决上述问题")]),t._v(" "),v("p",[t._v("类似于多边形扫描线填充算法，首先以y为步增方向，根据多边形在XOY轴投影的图形，计算y+1时x的增量，从而根据递推公式计算出多边形在XOY轴投影的边界的各个点。然后对于XOY投影的边界的各个点步增时Z轴的增量，即可得到深度Z")])])}]};t.exports={attributes:{layout:"collection",title:"消隐技术",collection:"ComputerGraphics"},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}},401:function(t,n,_){t.exports=_.p+"img/600400a.png"},402:function(t,n,_){t.exports=_.p+"img/c23c0b8.png"},403:function(t,n,_){t.exports=_.p+"img/06e9f43.png"}}]);