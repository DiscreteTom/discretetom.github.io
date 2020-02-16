(window.webpackJsonp=window.webpackJsonp||[]).push([[70,803,804,805],{1153:function(t,n,o){const c={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"frontmatter-markdown"},[c("h2",[t._v("启动光照并设置参数")]),t._v(" "),c("p",[t._v("光照参数：")]),t._v(" "),c("pre",{staticClass:"language-cpp"},[c("code",{staticClass:"language-cpp"},[t._v("GLfloat globalAmbient"),c("span",{staticClass:"token punctuation"},[t._v("[")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("{")]),c("span",{staticClass:"token number"},[t._v("0.2f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("0.2f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("0.2f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v("}")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token comment"},[t._v("// 全局环境泛光的RGBA")]),t._v("\nGLfloat ambient"),c("span",{staticClass:"token punctuation"},[t._v("[")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("{")]),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v("}")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token comment"},[t._v("// 环境泛光的RGBA")]),t._v("\nGLfloat diffuse"),c("span",{staticClass:"token punctuation"},[t._v("[")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("{")]),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v("}")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token comment"},[t._v("// 漫反射的RGBA")]),t._v("\nGLfloat specular"),c("span",{staticClass:"token punctuation"},[t._v("[")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("{")]),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1.0f")]),c("span",{staticClass:"token punctuation"},[t._v("}")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token comment"},[t._v("// 镜面反射的RGBA")]),t._v("\nGLfloat specref"),c("span",{staticClass:"token punctuation"},[t._v("[")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("{")]),c("span",{staticClass:"token number"},[t._v("3.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("3.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("3.0f")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("3.0f")]),c("span",{staticClass:"token punctuation"},[t._v("}")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token comment"},[t._v("//")]),t._v("\n")])]),t._v(" "),c("p",[t._v("以上参数中通常R、G、B值相同，才能保证光线不会偏红、绿、蓝。全局环境泛光可以稍弱")]),t._v(" "),c("pre",{staticClass:"language-cpp"},[c("code",{staticClass:"language-cpp"},[c("span",{staticClass:"token comment"},[t._v("// 激活光照")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glEnable")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHTING"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// 设置全局环境泛光")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glLightModelfv")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHT_MODEL_AMBIENT"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" globalAmbient"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// 设置观察光线的视角为本地而不是无穷远")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glLightModeli")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHT_MODEL_LOCAL_VIEWER"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_TRUE"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// 设置物体的两面都可以感光")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glLightModeli")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHT_MODEL_TWO_SIDE"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_TRUE"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// 设置0号灯的参数并启动")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glLightfv")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHT0"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_AMBIENT"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" ambient"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glLightfv")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHT0"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_DIFFUSE"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" diffuse"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glLightfv")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHT0"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_SPECULAR"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" specular"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glEnable")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LIGHT0"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// 设置阴影模式")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glShadeModel")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_SMOOTH"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),c("span",{staticClass:"token comment"},[t._v("// 设置物体材质颜色跟随物体表面颜色")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glColorMaterial")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_FRONT_AND_BACK"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_AMBIENT_AND_DIFFUSE"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),c("span",{staticClass:"token comment"},[t._v("// 启用材质")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glEnable")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_COLOR_MATERIAL"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// 启动物体表面全反射（即反光）")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glMaterialfv")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_FRONT_AND_BACK"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_SPECULAR"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" specref"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),c("span",{staticClass:"token function"},[t._v("glMateriali")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_FRONT_AND_BACK"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" GL_SHININESS"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("50")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])]),t._v(" "),c("h2",[t._v("通过面构造反光的物体")]),t._v(" "),c("p",[t._v("以下代码因为偷懒而没有使用OPENGL里面的顶点数组，实际生产中效率可能偏低")]),t._v(" "),c("h3",[t._v("错误示范")]),t._v(" "),c("p",[t._v("以下为构造一个圆柱体的代码")]),t._v(" "),c("pre",{staticClass:"language-cpp"},[c("code",{staticClass:"language-cpp"},[c("span",{staticClass:"token comment"},[t._v("// 构造一个圆柱体。原点(0, 0, 0)为几何中心，Y轴为圆柱中心轴")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// radius指定半径，height指定高度，slices指定圆柱侧面被切了多少片")]),t._v("\n"),c("span",{staticClass:"token comment"},[t._v("// line表示生成的是三维线段构成的物体还是三维面构成的物体")]),t._v("\n"),c("span",{staticClass:"token keyword"},[t._v("void")]),t._v(" "),c("span",{staticClass:"token function"},[t._v("buildCylinder")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token keyword"},[t._v("double")]),t._v(" radius"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token keyword"},[t._v("double")]),t._v(" height"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token keyword"},[t._v("int")]),t._v(" slices"),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token keyword"},[t._v("bool")]),t._v(" line"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),c("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),c("span",{staticClass:"token comment"},[t._v("// 计算圆柱底面的圆的各个顶点")]),t._v("\n\tstd"),c("span",{staticClass:"token operator"},[t._v("::")]),t._v("vector"),c("span",{staticClass:"token operator"},[t._v("<")]),c("span",{staticClass:"token keyword"},[t._v("double")]),c("span",{staticClass:"token operator"},[t._v(">")]),t._v(" x"),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\tstd"),c("span",{staticClass:"token operator"},[t._v("::")]),t._v("vector"),c("span",{staticClass:"token operator"},[t._v("<")]),c("span",{staticClass:"token keyword"},[t._v("double")]),c("span",{staticClass:"token operator"},[t._v(">")]),t._v(" z"),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("for")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token keyword"},[t._v("int")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("0")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("<")]),t._v(" slices"),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("++")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\tx"),c("span",{staticClass:"token punctuation"},[t._v(".")]),c("span",{staticClass:"token function"},[t._v("push_back")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("radius "),c("span",{staticClass:"token operator"},[t._v("*")]),t._v(" "),c("span",{staticClass:"token function"},[t._v("cos")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token function"},[t._v("radians")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token number"},[t._v("360")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" slices "),c("span",{staticClass:"token operator"},[t._v("*")]),t._v(" i"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\tz"),c("span",{staticClass:"token punctuation"},[t._v(".")]),c("span",{staticClass:"token function"},[t._v("push_back")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("radius "),c("span",{staticClass:"token operator"},[t._v("*")]),t._v(" "),c("span",{staticClass:"token function"},[t._v("sin")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token function"},[t._v("radians")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token number"},[t._v("360")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" slices "),c("span",{staticClass:"token operator"},[t._v("*")]),t._v(" i"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n\t"),c("span",{staticClass:"token comment"},[t._v("// 把第一个点放到vector最后以便收尾连接")]),t._v("\n\tx"),c("span",{staticClass:"token punctuation"},[t._v(".")]),c("span",{staticClass:"token function"},[t._v("push_back")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),c("span",{staticClass:"token punctuation"},[t._v("[")]),c("span",{staticClass:"token number"},[t._v("0")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\tz"),c("span",{staticClass:"token punctuation"},[t._v(".")]),c("span",{staticClass:"token function"},[t._v("push_back")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("z"),c("span",{staticClass:"token punctuation"},[t._v("[")]),c("span",{staticClass:"token number"},[t._v("0")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n\t"),c("span",{staticClass:"token comment"},[t._v("// 生成底面")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("if")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("line"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glBegin")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LINE_LOOP"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("else")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glBegin")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_POLYGON"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("for")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token keyword"},[t._v("int")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("0")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("<")]),t._v(" slices"),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("++")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glVertex3d")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" height "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("2")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" z"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n\t"),c("span",{staticClass:"token function"},[t._v("glEnd")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("if")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("line"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glBegin")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LINE_LOOP"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("else")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glBegin")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_POLYGON"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("for")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token keyword"},[t._v("int")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("0")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("<")]),t._v(" slices"),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("++")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glVertex3d")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("-")]),t._v("height "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("2")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" z"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n\t"),c("span",{staticClass:"token function"},[t._v("glEnd")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n\t"),c("span",{staticClass:"token comment"},[t._v("// 生成侧面")]),t._v("\n\t"),c("span",{staticClass:"token keyword"},[t._v("for")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token keyword"},[t._v("int")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("0")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" i "),c("span",{staticClass:"token operator"},[t._v("<")]),t._v(" slices"),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("++")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),c("span",{staticClass:"token keyword"},[t._v("if")]),t._v(" "),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("line"),c("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t\t\t"),c("span",{staticClass:"token function"},[t._v("glBegin")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_LINE_LOOP"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),c("span",{staticClass:"token keyword"},[t._v("else")]),t._v("\n\t\t\t"),c("span",{staticClass:"token function"},[t._v("glBegin")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("GL_POLYGON"),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glVertex3d")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" height "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("2")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" z"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glVertex3d")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i "),c("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" height "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("2")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" z"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i "),c("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glVertex3d")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i "),c("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("-")]),t._v("height "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("2")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" z"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i "),c("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("1")]),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glVertex3d")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),c("span",{staticClass:"token operator"},[t._v("-")]),t._v("height "),c("span",{staticClass:"token operator"},[t._v("/")]),t._v(" "),c("span",{staticClass:"token number"},[t._v("2")]),c("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" z"),c("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),c("span",{staticClass:"token punctuation"},[t._v("]")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),c("span",{staticClass:"token function"},[t._v("glEnd")]),c("span",{staticClass:"token punctuation"},[t._v("(")]),c("span",{staticClass:"token punctuation"},[t._v(")")]),c("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),c("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),c("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])]),t._v(" "),c("p",[t._v("生成效果：")]),t._v(" "),c("p",[c("img",{attrs:{src:o(986),alt:""}})]),t._v(" "),c("p",[t._v("可以看到圆柱只有上底面反光，其他面虽然有材质（即能够接受光照），但是不能正确的反光")]),t._v(" "),c("h3",[t._v("不反光的原因")]),t._v(" "),c("p",[t._v("构造平面时添加点的顺序决定了平面的"),c("strong",[t._v("法向量")]),t._v("。平面的法向量决定了平面是否反光")]),t._v(" "),c("p",[c("img",{attrs:{src:o(987),alt:""}})]),t._v(" "),c("p",[t._v("如上图所示，假设在YZ平面按照逆时针顺序添加点，则此面的X负半轴方向能够反光，X正半轴方向不能反光")]),t._v(" "),c("p",[t._v("设置法向量的方案：直接通过函数设置，或者调整添加点的顺序")]),t._v(" "),c("h3",[t._v("正确示范")]),t._v(" "),c("p",[t._v("调整了添加点的顺序以生成法向量正确的面")]),t._v(" "),c("pre",{staticClass:"language-diff"},[c("code",{pre:!0,attrs:{class:"language-diff"}},[t._v("// build a cylinder, use (0, 0, 0) as center, Y as axis\nvoid buildCylinder(double radius, double height, int slices, bool line)\n{\n\t// calculate x and y\n\tstd::vector<double> x;\n\tstd::vector<double> z;\n\tfor (int i = 0; i < slices; ++i)\n\t{\n\t\tx.push_back(radius * cos(radians(360 / slices * i)));\n\t\tz.push_back(radius * sin(radians(360 / slices * i)));\n\t}\n\t// link head and tail\n\tx.push_back(x[0]);\n\tz.push_back(z[0]);\n\n\t// build underside\n\tif (line)\n\t\tglBegin(GL_LINE_LOOP);\n\telse\n\t\tglBegin(GL_POLYGON);\n\tfor (int i = 0; i < slices; ++i)\n\t{\n\t\tglVertex3d(x[i], height / 2, z[i]);\n\t}\n\tglEnd();\n\tif (line)\n\t\tglBegin(GL_LINE_LOOP);\n\telse\n\t\tglBegin(GL_POLYGON);\n"),c("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("-\tfor (int i = 0; i < slices; ++i)\n")]),c("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+\tfor (int i = slices - 1; i >= 0; --i)\n")]),t._v("\t{\n\t\tglVertex3d(x[i], -height / 2, z[i]);\n\t}\n\tglEnd();\n\n\t//build flank\n\tfor (int i = 0; i < slices; ++i)\n\t{\n\t\tif (line)\n\t\t\tglBegin(GL_LINE_LOOP);\n\t\telse\n\t\t\tglBegin(GL_POLYGON);\n"),c("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("-\t\tglVertex3d(x[i], height / 2, z[i]);\n-\t\tglVertex3d(x[i + 1], height / 2, z[i + 1]);\n-\t\tglVertex3d(x[i + 1], -height / 2, z[i + 1]);\n-\t\tglVertex3d(x[i], -height / 2, z[i]);\n")]),c("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+\t\tglVertex3d(x[i], -height / 2, z[i]);\n+\t\tglVertex3d(x[i + 1], -height / 2, z[i + 1]);\n+\t\tglVertex3d(x[i + 1], height / 2, z[i + 1]);\n+\t\tglVertex3d(x[i], height / 2, z[i]);\n")]),t._v("\t\tglEnd();\n\t}\n}\n")])]),t._v(" "),c("p",[t._v("效果：非常圆润的反光效果，nice。可以对比一下旁边没有正确使用法向量生成的黄色棱锥，没有反光效果看起来就像是平面图")]),t._v(" "),c("p",[c("img",{attrs:{src:o(988),alt:""}})])])}]};t.exports={attributes:{date:"2019-06-06T00:00:00.000Z",title:"OPENGL-光照与物体反光",description:"OPENGL启动光照、法向量与反光",tags:["opengl"]},vue:{render:c.render,staticRenderFns:c.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=c.render,this.$options.staticRenderFns=c.staticRenderFns}}}}},986:function(t,n,o){t.exports=o.p+"img/c62813c.png"},987:function(t,n,o){t.exports=o.p+"img/1e46ebe.png"},988:function(t,n,o){t.exports=o.p+"img/14ba7eb.png"}}]);