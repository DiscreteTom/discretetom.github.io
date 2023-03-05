(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1270:function(e,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),_("p",[e._v("本文是观看"),_("a",{attrs:{href:"https://www.bilibili.com/video/BV1g4411Y7Y4/"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),_("h2",{attrs:{id:"why"}},[e._v("Why")]),e._v(" "),_("p",[e._v("拿到目标的信息之后就可以找到合适的漏洞")]),e._v(" "),_("h2",{attrs:{id:"google-hacking"}},[e._v("Google Hacking")]),e._v(" "),_("ul",[_("li",[e._v("使用查询参数\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("site:")]),e._v("指定域名")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("filetype:")]),e._v("指定文件类型")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("inurl:")]),e._v("搜索 URL")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intitle:")]),e._v("搜索网站标题")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intext:")]),e._v("查询正文内容")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-xxx")]),e._v("结果不要出现"),_("code",{pre:!0},[e._v("xxx")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("*xxx")]),e._v("模糊匹配")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('"xxx"')]),e._v("结果一定要出现"),_("code",{pre:!0},[e._v("xxx")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("~xxx")]),e._v("同时搜索近义词")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("2002..2004")]),e._v("搜索年份")])])]),e._v(" "),_("li",[e._v("查询带有疑似 SQL 注入点的网站\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("inurl:.php?id=")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("inurl:.asp?id=")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("inurl:.jsp?id=")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("inurl:/admin/login.php")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("inurl:.php?id= intitle:美女")])])])]),e._v(" "),_("li",[e._v("查询网站后台\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("intitle:后台登录")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intitle:后台管理 filetype:php")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('intitle:index of "Parent Directory"')])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intitle:index of password")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intitle:index of login")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intitle:index of admin")])])])]),e._v(" "),_("li",[e._v("查询网站使用的 CMS\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("intext:Powered by Discuz")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intext:Powered by wordpress")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("intext:Powered by *CMS")])])])])]),e._v(" "),_("h2",{attrs:{id:"shodan-hacking"}},[e._v("Shodan Hacking")]),e._v(" "),_("ul",[_("li",[e._v("https://shodan.io")]),e._v(" "),_("li",[e._v("撒旦搜索引擎，被称为最可怕的搜索引擎")]),e._v(" "),_("li",[e._v("可以扫描一切联网设备\n"),_("ul",[_("li",[e._v("包括 Web 服务器，防火墙，路由器，摄像头，交换机，打印机")])])]),e._v(" "),_("li",[e._v("可搜索内容\n"),_("ul",[_("li",[e._v("IP，比如"),_("code",{pre:!0},[e._v("114.114.114.114")])]),e._v(" "),_("li",[e._v("协议，比如"),_("code",{pre:!0},[e._v("http")]),e._v("/"),_("code",{pre:!0},[e._v("ssh")])]),e._v(" "),_("li",[e._v("过滤搜索内容，需要登录才能使用\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v('country:"DE"')])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('product:"Apache httpd"')])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("version:1.1.1")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("hostname:.edu")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('os:"Linux 2.6.x"')])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("net:110.180.13.0/24")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("port:3389")])])])]),e._v(" "),_("li",[e._v("其他常用关键字\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("ssh default password")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("ftp anon successful")])])])])])])]),e._v(" "),_("blockquote",[_("p",[e._v("国产的 Shodan: "),_("a",{attrs:{href:"https://www.zoomeye.org"}},[e._v("ZoomEye")]),e._v("，可用过滤条件包括："),_("code",{pre:!0},[e._v("ip")]),e._v("/"),_("code",{pre:!0},[e._v("os")]),e._v("/"),_("code",{pre:!0},[e._v("app")]),e._v("/"),_("code",{pre:!0},[e._v("service")]),e._v("/"),_("code",{pre:!0},[e._v("port")]),e._v("/"),_("code",{pre:!0},[e._v("product")]),e._v("/"),_("code",{pre:!0},[e._v("country")]),e._v("/"),_("code",{pre:!0},[e._v("ver")]),e._v("/"),_("code",{pre:!0},[e._v("cidr")]),e._v("/"),_("code",{pre:!0},[e._v("hostname")]),e._v("/"),_("code",{pre:!0},[e._v("site")]),e._v("/"),_("code",{pre:!0},[e._v("title")]),e._v("/"),_("code",{pre:!0},[e._v("header")]),e._v("/"),_("code",{pre:!0},[e._v("keywords")]),e._v("/"),_("code",{pre:!0},[e._v("desc")])])]),e._v(" "),_("h2",{attrs:{id:"robotstxt"}},[e._v("Robots.txt")]),e._v(" "),_("p",[e._v("可以通过网站的"),_("code",{pre:!0},[e._v("robots.txt")]),e._v("文件，得知网站使用的什么建站软件（和漏洞），或者一些关键的文件路径")]),e._v(" "),_("h2",{attrs:{id:"防护"}},[e._v("防护")]),e._v(" "),_("ul",[_("li",[e._v("最小权限原则")]),e._v(" "),_("li",[e._v("限制端口暴露")])])])}]};e.exports={attributes:{title:"Security-6",description:"信息获取"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);