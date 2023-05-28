(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1330:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"准备工具"}},[t._v("准备工具")]),t._v(" "),e("ul",[e("li",[t._v("安装 Go 语言编译器、TinyGo 编译器、配置 VSCode：参考"),e("a",{attrs:{href:"https://discretetom.github.io/posts/windows-vscode-tinygo-arduino/"}},[t._v("此文")])]),t._v(" "),e("li",[t._v("买一个"),e("a",{attrs:{href:"https://www.st.com/en/development-tools/st-link-v2.html"}},[t._v("STLink v2")]),t._v(" "),e("ul",[e("li",[t._v("需要安装驱动，安装完毕后连接 STLink 和电脑，LED 应该常亮")])])]),t._v(" "),e("li",[t._v("安装 "),e("a",{attrs:{href:"https://www.msys2.org/"}},[t._v("MSYS2")]),t._v("，然后安装 "),e("a",{attrs:{href:"https://openocd.org/pages/getting-openocd.html"}},[t._v("OpenOCD")]),t._v(" "),e("ul",[e("li",[t._v("需要执行两次"),e("code",{pre:!0},[t._v("pacman -Syu")])])])])]),t._v(" "),e("h2",{attrs:{id:"点灯"}},[t._v("点灯")]),t._v(" "),e("h3",{attrs:{id:"代码"}},[t._v("代码")]),t._v(" "),e("p",[t._v("我的开发板是 STM32F103 ，对应 TinyGo 里面的 "),e("a",{attrs:{href:"https://tinygo.org/docs/reference/microcontrollers/bluepill/"}},[t._v("bluepill")])]),t._v(" "),e("p",[t._v("根据"),e("a",{attrs:{href:"https://doc.embedfire.com/mcu/stm32/f103zhinanzhe/std/zh/latest/book/LED_register.html"}},[t._v("开发板的文档")]),t._v("，开发板上有一个 RGB LED\nRGB 对应的引脚分别是 PB5 PB0 PB1")]),t._v(" "),e("pre",{staticClass:"language-go"},[e("code",{pre:!0,attrs:{class:"language-go"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"machine"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tred "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PB5\n\tgreen "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PB0\n\tblue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PB1\n\tred"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinOutput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tgreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinOutput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tblue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinOutput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tred"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("High")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tblue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("High")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tgreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("High")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tgreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("High")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tred"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Low")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\tred"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("High")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tblue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Low")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\tblue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("High")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tgreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Low")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"烧程序"}},[t._v("烧程序")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("tinygo flash -target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bluepill\n")])])])}]};t.exports={attributes:{title:"在 Windows 环境下使用 VSCode 和 Go 语言开发 STM32",description:"STM32和Arduino相比，要配置的东西多一些"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);