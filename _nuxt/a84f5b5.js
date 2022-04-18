(window.webpackJsonp=window.webpackJsonp||[]).push([[97,264],{1214:function(v,t,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"现象"}},[v._v("现象")]),v._v(" "),e("p",[v._v("OPEN GL中的变换相关代码需要"),e("em",[v._v("反着写")])]),v._v(" "),e("p",[v._v("比如，我们需要（以下过程不需要脑补画面，只需要稍微记一下顺序：")]),v._v(" "),e("ol",[e("li",[v._v("创建一个几何中心在原点，边长为1的正方体")]),v._v(" "),e("li",[v._v("沿X轴拉伸，使其X轴方向的长度为2。变为一个长方体")]),v._v(" "),e("li",[v._v("沿Y轴正方向移动5个单位")]),v._v(" "),e("li",[v._v("以Z轴为旋转轴，宣传30度")])]),v._v(" "),e("p",[v._v("实际代码要这么写：")]),v._v(" "),e("ol",[e("li",[v._v("初始化模型视图矩阵为单位矩阵"),e("code",{pre:!0},[v._v("I")])]),v._v(" "),e("li",[v._v("乘上述第四步的旋转矩阵"),e("code",{pre:!0},[v._v("R")]),v._v("，得到"),e("code",{pre:!0},[v._v("R")])]),v._v(" "),e("li",[v._v("乘上述第三步的平移矩阵"),e("code",{pre:!0},[v._v("T")]),v._v("，得到"),e("code",{pre:!0},[v._v("RT")])]),v._v(" "),e("li",[v._v("乘上述第二步的放缩矩阵"),e("code",{pre:!0},[v._v("S")]),v._v("，得到"),e("code",{pre:!0},[v._v("RTS")])]),v._v(" "),e("li",[v._v("创建上述第一步所述的正方体")])]),v._v(" "),e("p",[v._v("如果要构造多个物体，不同物体需要应用不同的变换，再加上视角变换，就会导致初学者无法理解代码逻辑顺序，无从下手写代码或阅读别人的代码")]),v._v(" "),e("h2",{attrs:{id:"解释"}},[v._v("解释")]),v._v(" "),e("h3",{attrs:{id:"矩阵和点的矩阵表示"}},[v._v("矩阵和点的矩阵表示")]),v._v(" "),e("p",[v._v("为了实现放缩、平移、旋转等变换，N维中的点需要使用N+1维向量表示（详见计算机图形学")]),v._v(" "),e("p",[v._v("所以三维的点是一个四维向量")]),v._v(" "),e("p",[v._v("OPEN GL中使用四维"),e("strong",[v._v("列向量")]),v._v("表示点，使用4乘4矩阵表示变换，乘法规则为"),e("strong",[v._v("矩阵 乘 顶点")]),v._v("（矩阵乘法有结合律而没有交换律，详见线性代数")]),v._v(" "),e("p",[e("img",{attrs:{src:_(440),alt:""}})]),v._v(" "),e("p",[v._v("如果要同时计算多个顶点的变换，只需要组合多个列向量变成一个矩阵就可以了")]),v._v(" "),e("h3",{attrs:{id:"open-gl图像变换机制"}},[v._v("OPEN GL图像变换机制")]),v._v(" "),e("p",[v._v("图像变换是基于"),e("strong",[v._v("模型视图矩阵")]),v._v("进行变换，图像的每个点乘模型视图矩阵得到变换后的点")]),v._v(" "),e("p",[v._v("根据"),e("strong",[v._v("矩阵 乘 点")]),v._v("的规则，假设模型视图矩阵为"),e("code",{pre:!0},[v._v("M")]),v._v("，点为"),e("code",{pre:!0},[v._v("v")]),v._v("，则变换结果为"),e("code",{pre:!0},[v._v("Mv")])]),v._v(" "),e("p",[v._v("把"),e("code",{pre:!0},[v._v("M")]),v._v("视为一系列变换矩阵相乘的结果，假设"),e("code",{pre:!0},[v._v("M=ABC")]),v._v("，所以"),e("code",{pre:!0},[v._v("Mv=(ABC)v")])]),v._v(" "),e("p",[v._v("因为矩阵乘法有结合律，所以从右向左理解上述结果，即"),e("code",{pre:!0},[v._v("Mv=A(B(Cv))")]),v._v("，即点"),e("code",{pre:!0},[v._v("v")]),v._v("先应用变换C，然后应用变换B，最后应用变换A")]),v._v(" "),e("p",[v._v("所以理解“反向”写代码的思路是：为了得到变换后的图形，首先构造模型视图矩阵，然后把此矩阵应用于随后生成的所有图形。因为"),e("strong",[v._v("图形从右向左结合变换矩阵")]),v._v("，所以需要从右向左构造模型视图矩阵，即反向构造模型视图矩阵")]),v._v(" "),e("h2",{attrs:{id:"变换单个物体"}},[v._v("变换单个物体")]),v._v(" "),e("p",[v._v("在上述结论的基础上，如果希望某些变换AB仅应用于部分物体（物体先被施加A变换然后被施加B变换），另一些变换CD应用于其他物体（物体先被施加C变换然后施加D变换），代码顺序应该是：")]),v._v(" "),e("ol",[e("li",[v._v("初始化模型视图矩阵得到I")]),v._v(" "),e("li",[v._v("施加变换B")]),v._v(" "),e("li",[v._v("施加变换A")]),v._v(" "),e("li",[v._v("构造需要应用变换AB的所有物体")]),v._v(" "),e("li",[v._v("初始化模型视图矩阵得到I")]),v._v(" "),e("li",[v._v("施加变换D")]),v._v(" "),e("li",[v._v("施加变换C")]),v._v(" "),e("li",[v._v("构造需要应用变换CD的所有物体")])]),v._v(" "),e("p",[v._v("代码可能是这个样子：")]),v._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("glMatrixMode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("GL_MODELVIEW"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 把当前编辑的矩阵切换为模型视图矩阵")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("glLoadIdentity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 装载单位矩阵")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 变换3")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 变换2")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 变换1")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 最后创建对象，自下向上应用变换123")]),v._v("\n")])]),v._v(" "),e("h2",{attrs:{id:"移动视角"}},[v._v("移动视角")]),v._v(" "),e("p",[v._v("如果我们需要在某个地方架起摄像机(gluLookAt函数)，然后给不同的物体施加不同的变换，如何实现？")]),v._v(" "),e("p",[v._v("首先，根据OPEN GL参考文档，gluLookAt函数是通过设置模型视图矩阵实现的。可以视为"),e("strong",[v._v("摄像机没有移动，世界被移动了")])]),v._v(" "),e("p",[v._v("比如，首先在原点生成一个正方体，然后应用变换A和B把它放置在某地。然后在原点生成一个球体，应用变换C和D把它放在另一个地方，最后在X的位置架起摄像机观察，代码逻辑应该是：")]),v._v(" "),e("ol",[e("li",[v._v("初始化模型视图矩阵")]),v._v(" "),e("li",[v._v("使用gluLookAt函数架起摄像机，建立摄像机坐标系。以后的所有变换都是基于摄像机坐标系的更改")]),v._v(" "),e("li",[v._v("保存摄像机坐标系以便下文使用（使用glPushMatrix保存当前矩阵")]),v._v(" "),e("li",[v._v("施加变换B")]),v._v(" "),e("li",[v._v("施加变换A")]),v._v(" "),e("li",[v._v("生成标准正方体，正方体被顺序施加AB变换，然后被放入摄像机坐标系")]),v._v(" "),e("li",[v._v("load摄像机坐标系（即删除了变换B和A（即使用glPopMatrix恢复摄像机矩阵")]),v._v(" "),e("li",[v._v("施加变换D")]),v._v(" "),e("li",[v._v("施加变换C")]),v._v(" "),e("li",[v._v("生成球体，球体被顺序施加CD变换，然后被放入摄像机坐标系")])]),v._v(" "),e("h2",{attrs:{id:"参考"}},[v._v("参考")]),v._v(" "),e("ul",[e("li",[v._v("《Open GL编程指南 原书第七版》")]),v._v(" "),e("li",[e("a",{attrs:{href:"http://www.opengl-tutorial.org/cn/beginners-tutorials/tutorial-3-matrices/"}},[v._v("第三课：矩阵")])]),v._v(" "),e("li",[e("a",{attrs:{href:"https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/gluLookAt.xml"}},[v._v("gluLookAt")])]),v._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/ivan_ljf/article/details/8764737"}},[v._v("Opengl—gluLookAt函数详解")])])])])}]};v.exports={attributes:{date:"2019-05-30T00:00:00.000Z",title:"关于open gl中变换应用顺序的理解",description:"图像变换顺序与机制、视角变换相关",tags:["opengl"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},440:function(v,t,_){v.exports=_.p+"img/190530-1.0f24e11.jpg"}}]);