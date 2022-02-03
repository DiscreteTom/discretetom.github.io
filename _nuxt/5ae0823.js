(window.webpackJsonp=window.webpackJsonp||[]).push([[99,286],{1228:function(e,t,v){const n={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"why"}},[e._v("Why?")]),e._v(" "),n("ul",[n("li",[e._v("Unity3D 自带的 Package Manager 不好使\n"),n("ul",[n("li",[e._v("首次加载比较慢")]),e._v(" "),n("li",[e._v("官方 Registry 里面的内容有限（虽然也可以从本地文件 / Git Repo / Assets Store 加载）")]),e._v(" "),n("li",[e._v("GUI 哪有命令行方便（暴论）\n"),n("ul",[n("li",[e._v("比如一次性安装/删除多个依赖包")]),e._v(" "),n("li",[e._v("或者做版本管理，安装指定版本的包")]),e._v(" "),n("li",[e._v("对于第三方包，先下载，再在编辑器里面通过 GUI 点来点去进行导入，哪有命令行方便")])])])])]),e._v(" "),n("li",[e._v("我想跨项目复用一些代码片段\n"),n("ul",[n("li",[e._v("不一定每个代码片段都是一个 Repo。可能是一个 Repo 里面的几个文件或文件夹")]),e._v(" "),n("li",[e._v("可能大部分时间用来 "),n("strong",[e._v("自用")]),e._v("，所以不想申请额外的账号和提交表单")])])])]),e._v(" "),n("p",[e._v("简言之，提升开发效率。")]),e._v(" "),n("blockquote",[n("p",[e._v("当前除了 Unity Package Manager，还有一些第三方的包管理库，比如"),n("a",{attrs:{href:"https://github.com/openupm/openupm"}},[e._v("OpenUPM")]),e._v(", "),n("a",{attrs:{href:"https://upm-packages.dev/"}},[e._v("upm-packages.dev")]),e._v("，可以和此文的方案混合使用")])]),e._v(" "),n("h2",{attrs:{id:"what"}},[e._v("What?")]),e._v(" "),n("p",[e._v("需求如下：")]),e._v(" "),n("ul",[n("li",[e._v("可以仅导入 GitHub Repo 里面的某个文件夹，而不一定是整个 Repo")]),e._v(" "),n("li",[e._v("拥有互联网行业主流编程语言的包管理体验，比如 "),n("code",{pre:!0},[e._v("npm")]),e._v(" / "),n("code",{pre:!0},[e._v("yarn")]),e._v(" / "),n("code",{pre:!0},[e._v("pip")]),e._v(" / "),n("code",{pre:!0},[e._v("go")]),e._v(" / "),n("code",{pre:!0},[e._v("cargo")]),e._v(" / "),n("code",{pre:!0},[e._v("maven")]),e._v(" "),n("ul",[n("li",[e._v("当然，如果能直接拿来用岂不是更妙")])])]),e._v(" "),n("li",[e._v("依赖管理与版本控制\n"),n("ul",[n("li",[e._v("代码片段之间可以互相设置依赖，并自动管理依赖树")])])])]),e._v(" "),n("h2",{attrs:{id:"how"}},[e._v("How?")]),e._v(" "),n("h3",{attrs:{id:"基于-npmyarn-的解决方案"}},[e._v("基于 npm/yarn 的解决方案")]),e._v(" "),n("p",[e._v("因为目前代码主要放在 GitHub，所以理论上只要是能从 GitHub 上面安装依赖的包管理工具，都可以直接拿来使用，比如 npm/yarn")]),e._v(" "),n("p",[e._v("当然，是基于"),n("code",{pre:!0},[e._v("package.json")]),e._v("文件进行包的定义与依赖管理")]),e._v(" "),n("p",[e._v("需要下载安装的时候，只需要")]),e._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repo"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),n("p",[e._v("或者")]),e._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repo"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),n("p",[e._v("就行了")]),e._v(" "),n("h3",{attrs:{id:"仅导入某个文件夹"}},[e._v("仅导入某个文件夹")]),e._v(" "),n("p",[e._v("需要使用一个叫做 "),n("a",{attrs:{href:"https://gitpkg.vercel.app/"}},[e._v("GitPkg")]),e._v(" 的工具，可以把 GitHub 上面某个文件夹视为一个 package")]),e._v(" "),n("p",[e._v("对应的，每个视为 package 的文件夹下面都应该有一个"),n("code",{pre:!0},[e._v("package.json")]),e._v("文件来定义这个包")]),e._v(" "),n("p",[e._v("目前已经实现了一些包，放在了 "),n("a",{attrs:{href:"https://github.com/DiscreteTom/unity3d-utils"}},[e._v("unity3d-utils")]),e._v(" Repo 里面。可以看到它的文件目录就是:")]),e._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("─2D\n│  └─CollisionManager2D\n│          CollisionManager2D.cs\n│          package.json\n│          README.md\n│          yarn.lock\n│\n└─General\n    └─LayerMaskExtension\n            LayerMaskExtension.cs\n            package.json\n            README.md\n")])]),e._v(" "),n("p",[e._v("可以看到文件夹"),n("code",{pre:!0},[e._v("CollisionManager2D")]),e._v("和文件夹"),n("code",{pre:!0},[e._v("LayerMaskExtension")]),e._v("里面都有"),n("code",{pre:!0},[e._v("package.json")]),e._v("文件")]),e._v(" "),n("p",[e._v("并且"),n("code",{pre:!0},[e._v("CollisionManager2D")]),e._v("还依赖了"),n("code",{pre:!0},[e._v("LayerMaskExtension")]),e._v("，我们只需要安装前者，就可以自动安装它的依赖树。")]),e._v(" "),n("p",[e._v("更多细节，可以看看这个 Repo 的源码："),n("a",{attrs:{href:"https://github.com/DiscreteTom/unity3d-utils"}},[e._v("unity3d-utils")])]),e._v(" "),n("h3",{attrs:{id:"开始使用吧"}},[e._v("开始使用吧！")]),e._v(" "),n("ol",[n("li",[e._v("在 Unity3D Editor 里面，创建一个文件夹用来放 npm/yarn 管理的依赖。比如"),n("code",{pre:!0},[e._v("Assets/Modules/")])]),e._v(" "),n("li",[e._v("在此文件夹中，执行"),n("code",{pre:!0},[e._v("yarn init -y")]),e._v("创建空的"),n("code",{pre:!0},[e._v("package.json")]),e._v("文件")]),e._v(" "),n("li",[e._v("执行"),n("code",{pre:!0},[e._v("yarn add xxx")]),e._v("就可以安装所需的依赖啦！\n"),n("ol",[n("li",[e._v("另外，建议把"),n("code",{pre:!0},[e._v("node_modules/")]),e._v("添加到"),n("code",{pre:!0},[e._v(".gitignore")]),e._v("，或者添加完整的 NodeJS 的"),n("a",{attrs:{href:"https://github.com/github/gitignore/blob/main/Node.gitignore"}},[n("code",{pre:!0},[e._v(".gitignore")])])]),e._v(" "),n("li",[e._v("当需要在其他机器下载项目的时候，也需要执行"),n("code",{pre:!0},[e._v("yarn")]),e._v(" / "),n("code",{pre:!0},[e._v("yarn install")]),e._v("来安装所有依赖")])])])]),e._v(" "),n("p",[n("img",{attrs:{src:v(474),alt:""}})]),e._v(" "),n("h2",{attrs:{id:"瑕疵"}},[e._v("瑕疵")]),e._v(" "),n("ul",[n("li",[e._v("GitPkg 目前只能用来转换 public repo，毕竟它没权限访问 private repo\n"),n("ul",[n("li",[e._v("不过它是开源的，有兴趣应该可以自建来解决此问题")])])]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("package.json")]),e._v("要求包的名字都是小写，这导致下载下来的包的文件夹是小写命名，不是很符合 "),n("code",{pre:!0},[e._v("C#")]),e._v(" 的风格\n"),n("ul",[n("li",[e._v("虽然强行大写也没啥问题，但是有 warning 就很不爽")])])])]),e._v(" "),n("h2",{attrs:{id:"其他方案"}},[e._v("其他方案？")]),e._v(" "),n("p",[e._v("当然此博客只是一个思路。使用其他包管理工具也可以实现类似的效果。")]),e._v(" "),n("p",[e._v("使用 npm/yarn 是因为 nodejs：")]),e._v(" "),n("ul",[n("li",[e._v("比较方便跨平台安装（特别是 windows）")]),e._v(" "),n("li",[e._v("依赖管理方案比较统一/直观/成熟")]),e._v(" "),n("li",[e._v("支持从 github 下载依赖")]),e._v(" "),n("li",[e._v("安装的依赖也默认安装在工作目录")])])])}]};e.exports={attributes:{title:"使用NPM/Yarn管理Unity3D中的依赖",description:"实现模块化与跨项目代码复用",tags:["Gaming / 游戏","Unity3D"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},474:function(e,t,v){e.exports=v.p+"img/40-1.555f5a2.png"}}]);