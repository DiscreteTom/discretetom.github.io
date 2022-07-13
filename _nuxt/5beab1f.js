(window.webpackJsonp=window.webpackJsonp||[]).push([[70,289,290,291],{1242:function(t,n,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"启动光照并设置参数"}},[t._v("启动光照并设置参数")]),t._v(" "),r("p",[t._v("光照参数：")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[t._v("GLfloat globalAmbient"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境泛光的RGBA")]),t._v("\nGLfloat ambient"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境泛光的RGBA")]),t._v("\nGLfloat diffuse"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 漫反射的RGBA")]),t._v("\nGLfloat specular"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 镜面反射的RGBA")]),t._v("\nGLfloat specref"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0f")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n")])]),t._v(" "),r("p",[t._v("以上参数中通常R、G、B值相同，才能保证光线不会偏红、绿、蓝。全局环境泛光可以稍弱")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 激活光照")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glEnable")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHTING"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置全局环境泛光")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glLightModelfv")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHT_MODEL_AMBIENT"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" globalAmbient"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置观察光线的视角为本地而不是无穷远")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glLightModeli")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHT_MODEL_LOCAL_VIEWER"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_TRUE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置物体的两面都可以感光")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glLightModeli")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHT_MODEL_TWO_SIDE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_TRUE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置0号灯的参数并启动")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glLightfv")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHT0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_AMBIENT"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ambient"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glLightfv")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHT0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_DIFFUSE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diffuse"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glLightfv")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHT0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_SPECULAR"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" specular"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glEnable")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LIGHT0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置阴影模式")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glShadeModel")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_SMOOTH"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置物体材质颜色跟随物体表面颜色")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glColorMaterial")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_FRONT_AND_BACK"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_AMBIENT_AND_DIFFUSE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用材质")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glEnable")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_COLOR_MATERIAL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动物体表面全反射（即反光）")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glMaterialfv")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_FRONT_AND_BACK"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_SPECULAR"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" specref"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glMateriali")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_FRONT_AND_BACK"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GL_SHININESS"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"通过面构造反光的物体"}},[t._v("通过面构造反光的物体")]),t._v(" "),r("p",[t._v("以下代码因为偷懒而没有使用OPENGL里面的顶点数组，实际生产中效率可能偏低")]),t._v(" "),r("h3",{attrs:{id:"错误示范"}},[t._v("错误示范")]),t._v(" "),r("p",[t._v("以下为构造一个圆柱体的代码")]),t._v(" "),r("pre",{staticClass:"language-cpp"},[r("code",{pre:!0,attrs:{class:"language-cpp"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造一个圆柱体。原点(0, 0, 0)为几何中心，Y轴为圆柱中心轴")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// radius指定半径，height指定高度，slices指定圆柱侧面被切了多少片")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// line表示生成的是三维线段构成的物体还是三维面构成的物体")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildCylinder")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" radius"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" height"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" slices"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算圆柱底面的圆的各个顶点")]),t._v("\n\tstd"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstd"),r("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" slices"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" slices "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tz"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" slices "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把第一个点放到vector最后以便收尾连接")]),t._v("\n\tx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tz"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成底面")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glBegin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LINE_LOOP"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glBegin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_POLYGON"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" slices"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glVertex3d")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glEnd")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glBegin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LINE_LOOP"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glBegin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_POLYGON"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" slices"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glVertex3d")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glEnd")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成侧面")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" slices"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glBegin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_LINE_LOOP"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glBegin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL_POLYGON"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glVertex3d")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glVertex3d")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glVertex3d")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glVertex3d")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("glEnd")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("p",[t._v("生成效果：")]),t._v(" "),r("p",[r("img",{attrs:{src:e(443),alt:""}})]),t._v(" "),r("p",[t._v("可以看到圆柱只有上底面反光，其他面虽然有材质（即能够接受光照），但是不能正确的反光")]),t._v(" "),r("h3",{attrs:{id:"不反光的原因"}},[t._v("不反光的原因")]),t._v(" "),r("p",[t._v("构造平面时添加点的顺序决定了平面的"),r("strong",[t._v("法向量")]),t._v("。平面的法向量决定了平面是否反光")]),t._v(" "),r("p",[r("img",{attrs:{src:e(444),alt:""}})]),t._v(" "),r("p",[t._v("如上图所示，假设在YZ平面按照逆时针顺序添加点，则此面的X负半轴方向能够反光，X正半轴方向不能反光")]),t._v(" "),r("p",[t._v("设置法向量的方案：直接通过函数设置，或者调整添加点的顺序")]),t._v(" "),r("h3",{attrs:{id:"正确示范"}},[t._v("正确示范")]),t._v(" "),r("p",[t._v("调整了添加点的顺序以生成法向量正确的面")]),t._v(" "),r("pre",{staticClass:"language-diff"},[r("code",{pre:!0,attrs:{class:"language-diff"}},[t._v("// build a cylinder, use (0, 0, 0) as center, Y as axis\nvoid buildCylinder(double radius, double height, int slices, bool line)\n{\n\t// calculate x and y\n\tstd::vector<double> x;\n\tstd::vector<double> z;\n\tfor (int i = 0; i < slices; ++i)\n\t{\n\t\tx.push_back(radius * cos(radians(360 / slices * i)));\n\t\tz.push_back(radius * sin(radians(360 / slices * i)));\n\t}\n\t// link head and tail\n\tx.push_back(x[0]);\n\tz.push_back(z[0]);\n\n\t// build underside\n\tif (line)\n\t\tglBegin(GL_LINE_LOOP);\n\telse\n\t\tglBegin(GL_POLYGON);\n\tfor (int i = 0; i < slices; ++i)\n\t{\n\t\tglVertex3d(x[i], height / 2, z[i]);\n\t}\n\tglEnd();\n\tif (line)\n\t\tglBegin(GL_LINE_LOOP);\n\telse\n\t\tglBegin(GL_POLYGON);\n"),r("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[r("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\tfor (int i = 0; i < slices; ++i)\n")])]),r("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[r("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\tfor (int i = slices - 1; i >= 0; --i)\n")])]),t._v("\t{\n\t\tglVertex3d(x[i], -height / 2, z[i]);\n\t}\n\tglEnd();\n\n\t//build flank\n\tfor (int i = 0; i < slices; ++i)\n\t{\n\t\tif (line)\n\t\t\tglBegin(GL_LINE_LOOP);\n\t\telse\n\t\t\tglBegin(GL_POLYGON);\n"),r("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[r("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i], height / 2, z[i]);\n")]),r("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i + 1], height / 2, z[i + 1]);\n")]),r("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i + 1], -height / 2, z[i + 1]);\n")]),r("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i], -height / 2, z[i]);\n")])]),r("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[r("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i], -height / 2, z[i]);\n")]),r("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i + 1], -height / 2, z[i + 1]);\n")]),r("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i + 1], height / 2, z[i + 1]);\n")]),r("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token line"}},[t._v("\t\tglVertex3d(x[i], height / 2, z[i]);\n")])]),t._v("\t\tglEnd();\n\t}\n}\n")])]),t._v(" "),r("p",[t._v("效果：非常圆润的反光效果，nice。可以对比一下旁边没有正确使用法向量生成的黄色棱锥，没有反光效果看起来就像是平面图")]),t._v(" "),r("p",[r("img",{attrs:{src:e(445),alt:""}})])])}]};t.exports={attributes:{date:"2019-06-06T00:00:00.000Z",title:"OPENGL-光照与物体反光",description:"OPENGL启动光照、法向量与反光",tags:["opengl"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},443:function(t,n,e){t.exports=e.p+"img/190606-1.845ee95.png"},444:function(t,n,e){t.exports=e.p+"img/190606-2.c9889e6.png"},445:function(t,n,e){t.exports=e.p+"img/190606-3.68162bd.png"}}]);