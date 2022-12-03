(window.webpackJsonp=window.webpackJsonp||[]).push([[35,365,366,367,368,369,370,371,372,373],{1307:function(t,n,e){const r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"新建控件"}},[t._v("新建控件")]),t._v(" "),e("p",[t._v("添加新文件 - C++ Class")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("为了方便展示效果，此处以QLabel作为父类")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("ul",[e("li",[t._v("在mylabel.h文件中添加父类的头文件"),e("QLabel")],1),t._v(" "),e("li",[t._v("添加Qt的Object标识 Q_OBJECT")]),t._v(" "),e("li",[t._v("构造函数参数增加父指针")])]),t._v(" "),e("p",[t._v("效果如下")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("因为在本来没有Q_OBJECT标识的类里面添加了Q_OBJECT标识，所以要执行一次qmake，否则会报错 “qt undefined reference to vtable for xxx”")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("在MainWindow中包含此控件")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("运行以测试效果")]),t._v(" "),t._m(8),t._v(" "),e("h2",{attrs:{id:"获取焦点"}},[t._v("获取焦点")]),t._v(" "),e("p",[t._v("一个控件在获取焦点之后才会对键盘操作进行响应")]),t._v(" "),e("p",[t._v("在MyLabel的构造函数中添加如下代码")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("此代码的作用为设置此控件的焦点获取策略为鼠标点击")]),t._v(" "),e("p",[t._v("如果想要测试效果 可以在MyLabel类中添加如下protected方法")]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("然后在cpp文件内添加")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("运行程序 点击控件后控件的内容会发生改变")]),t._v(" "),e("h2",{attrs:{id:"支持英文输入"}},[t._v("支持英文输入")]),t._v(" "),e("p",[t._v("在MyLabel中添加如下protected方法")]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("此方法将响应键盘的按键操作")]),t._v(" "),e("p",[t._v("在cpp文件中添加函数定义")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("这里的代码功能比较简单 只实现了简单的输入操作和删除最后一个字符的操作 读者可以根据自己的需要自行编辑")]),t._v(" "),e("p",[t._v("如果此时尝试输入中文 会发现不能简单地使用输入法中英文切换键(如shift)切换中英文 而且输入汉字也无响应")]),t._v(" "),e("h2",{attrs:{id:"支持中文输入"}},[t._v("支持中文输入")]),t._v(" "),e("p",[t._v("输入法在中文状态下是无法响应KeyPressEvent的")]),t._v(" "),e("p",[t._v("首先在MyLabel的构造函数中添加如下代码")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("Qt是这么介绍WA_InputMethodEnabled的:")]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("此时再次尝试输入中文 发现已经可以使用输入法自带中英文切换键切换中英文 但是仍然无法获得输入的字符")]),t._v(" "),e("p",[t._v("因为不是使用KeyPressEvent来获取事件 我们需要一个新的获取事件的方法")]),t._v(" "),e("p",[t._v("在MyLabel类中添加如下protected方法")]),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("然后在cpp文件添加函数定义")]),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("解释: 输入法返回的事件被inputMethodEvent响应 通过commitString方法获得此事件中包含的中文字符串 然后接到原字符串的末尾")]),t._v(" "),e("p",[t._v("至此 实现中文输入")]),t._v(" "),e("h2",{attrs:{id:"其他"}},[t._v("其他")]),t._v(" "),e("p",[t._v("按照网上的说法 除了")]),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("之外 还要有一条语句")]),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("但是我看了一下文档似乎并不需要 注释掉这条语句之后程序也没有出错 如果未来程序遇到了问题也许可以尝试加上这条语句解决:)")]),t._v(" "),e("p",[t._v("参考:")]),t._v(" "),t._m(20)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(488),alt:"6-1"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(489),alt:"6-2"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[t._v("Class name 设置为 MyLabel")]),t._v(" "),e("li",[t._v("Base Class 选择 Custom 并填写 QLabel")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(490),alt:"6-3"}})])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("p",[r("img",{attrs:{src:e(491),alt:"6-4"}}),t._v(" "),r("img",{attrs:{src:e(492),alt:"6-5"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(493),alt:"6-6"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(494),alt:"6-7"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(495),alt:"6-8"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(496),alt:"6-9"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFocusPolicy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("ClickFocus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要#include <QFocusEvent>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("focusInEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QFocusEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取焦点时的操作")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("focusOutEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QFocusEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//失去焦点时的操作")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLabel")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("focusInEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QFocusEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusIn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLabel")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("focusOutEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QFocusEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FocusOut"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要#include <QKeyEvent>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyPressEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QKeyEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLabel")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyPressEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QKeyEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tQString str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取原字符串")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ev"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Qt"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Key_Backspace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果按键是Backspace")]),t._v("\n\t\tstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chop")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除原字符串最后一个字符")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示新字符串")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不是Backspace")]),t._v("\n\t\tstr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在原字符串后添加新输入的字符")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示新字符串")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WA_InputMethodEnabled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("blockquote",[e("p",[t._v("Enables input methods for Asian languages. Must be set when creating custom text editing widgets.")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要#include <QInputMethodEvent>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("inputMethodEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QInputMethodEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLabel")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("inputMethodEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QInputMethodEvent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tQString str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取原字符串")]),t._v("\n\n\tstr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" ev"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//原字符串后接上输入的中文字符串")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示新字符串")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WA_InputMethodEnabled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-cpp"},[e("code",{pre:!0,attrs:{class:"language-cpp"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("WA_KeyCompression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/u013686019/article/details/38712563"}},[t._v(" [Qt解错篇]报错：error: undefined reference to vtable for ClassName")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/d621e8da0c25032865913f87.html"}},[t._v("Qt中焦点策略FocusPolicy的使用")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://bbs.csdn.net/topics/390154489"}},[t._v("Qt有接收输入法字符串的事件么，keyPressEvent行不行？")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/dongpanshan/article/details/78251556"}},[t._v("QT中文输入法状态下获取键盘输入事件")])])])}]};t.exports={attributes:{title:"Qt-自定义Object如何支持中英文键盘输入",date:"2018-03-28T00:00:00.000Z",tags:["qt"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},488:function(t,n,e){t.exports=e.p+"img/6-1.5e3179c.png"},489:function(t,n,e){t.exports=e.p+"img/6-2.31c413f.png"},490:function(t,n,e){t.exports=e.p+"img/6-3.5c2e3ea.png"},491:function(t,n,e){t.exports=e.p+"img/6-4.c167d0d.png"},492:function(t,n,e){t.exports=e.p+"img/6-5.a9ffbc8.png"},493:function(t,n,e){t.exports=e.p+"img/6-6.0ec85ac.png"},494:function(t,n,e){t.exports=e.p+"img/6-7.45dce25.png"},495:function(t,n,e){t.exports=e.p+"img/6-8.8b057b1.png"},496:function(t,n,e){t.exports=e.p+"img/6-9.fbf375e.png"}}]);