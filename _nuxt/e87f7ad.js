(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1287:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"准备工具"}},[t._v("准备工具")]),t._v(" "),e("p",[e("strong",[t._v("以下代码使用 Windows Powershell 执行")])]),t._v(" "),e("h3",{attrs:{id:"安装-scoop"}},[t._v("安装 Scoop")]),t._v(" "),e("pre",{staticClass:"language-powershell"},[e("code",{pre:!0,attrs:{class:"language-powershell"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PowerShell must be allowed to execute local scripts for your user account")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-ExecutionPolicy")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy RemoteSigned "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope CurrentUser\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install scoop from a script")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("iwr")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("useb get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scoop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("iex")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"安装-golang"}},[t._v("安装 golang")]),t._v(" "),e("pre",{staticClass:"language-powershell"},[e("code",{pre:!0,attrs:{class:"language-powershell"}},[t._v("scoop install go\n")])]),t._v(" "),e("h3",{attrs:{id:"安装-tinygo"}},[t._v("安装 TinyGo")]),t._v(" "),e("pre",{staticClass:"language-powershell"},[e("code",{pre:!0,attrs:{class:"language-powershell"}},[t._v("scoop install tinygo\n")])]),t._v(" "),e("h3",{attrs:{id:"安装-avr-相关工具"}},[t._v("安装 AVR 相关工具")]),t._v(" "),e("p",[t._v("因为 Arduino Nano 的处理器是 AVR 架构，所以需要安装 AVR 相关工具")]),t._v(" "),e("pre",{staticClass:"language-powershell"},[e("code",{pre:!0,attrs:{class:"language-powershell"}},[t._v("scoop install avr-gcc\nscoop install avrdude\n")])]),t._v(" "),e("h2",{attrs:{id:"配置-vscode"}},[t._v("配置 VSCode")]),t._v(" "),e("ol",[e("li",[t._v("安装 VSCode 的 Go 语言插件和 TinyGo 插件，重启 VSCode")]),t._v(" "),e("li",[t._v("打开 Go 语言的项目，在底部选择编译目标（比如"),e("code",{pre:!0},[t._v("TinyGo: arduino-nano")]),t._v("），然后重启 VSCode")])]),t._v(" "),e("p",[t._v("配置完毕后，可以获得"),e("code",{pre:!0},[t._v("machine")]),t._v("库的代码提示")]),t._v(" "),e("h2",{attrs:{id:"点灯"}},[t._v("点灯")]),t._v(" "),e("h3",{attrs:{id:"代码"}},[t._v("代码")]),t._v(" "),e("p",[t._v("官方示例代码")]),t._v(" "),e("pre",{staticClass:"language-go"},[e("code",{pre:!0,attrs:{class:"language-go"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"machine"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LED\n\tled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" machine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PinOutput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Low")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\tled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("High")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"烧程序"}},[t._v("烧程序")]),t._v(" "),e("p",[t._v("以 Arduino Nano 为例")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("tinygo flash -target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("arduino-nano\n")])]),t._v(" "),e("h2",{attrs:{id:"refs"}},[t._v("Refs")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ScoopInstaller/Scoop"}},[t._v("Scoop")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tinygo.org/getting-started/install/windows/"}},[t._v("Windows | TinyGo")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tinygo.org/docs/guides/ide-integration/vscode/"}},[t._v("VSCode | TinyGo")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tinygo.org/docs/tutorials/blinky/"}},[t._v("Blinking LED | TinyGo")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tinygo.org/docs/reference/microcontrollers/arduino-nano/"}},[t._v("Arduino Nano | TinyGo")])])])])}]};t.exports={attributes:{title:"在 Windows 环境下使用 VSCode 和 Go 语言开发 Arduino",description:"Go语言可比C/C++写起来爽多了"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);