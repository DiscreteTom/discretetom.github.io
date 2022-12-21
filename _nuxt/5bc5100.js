(window.webpackJsonp=window.webpackJsonp||[]).push([[102,356],{1294:function(e,t,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"frontmatter-markdown"},[_("blockquote",[_("p",[e._v("下文中TLS和SSL指代相同的含义")])]),e._v(" "),_("h2",{attrs:{id:"ssl流程"}},[e._v("SSL流程")]),e._v(" "),_("blockquote",[_("p",[e._v("Ref: https://ruanyifeng.com/blog/2014/02/ssl_tls.html")])]),e._v(" "),_("ol",[_("li",[e._v("客户端向服务器发起加密通信的请求(ClientHello)\n"),_("ol",[_("li",[e._v("包括：支持的TLS协议版本、加密方法、压缩方法，客户端生成的随机数")]),e._v(" "),_("li",[e._v("注意：如果没有使用SNI，则此请求不包含目标域名")])])]),e._v(" "),_("li",[e._v("服务器响应(ServerHello)\n"),_("ol",[_("li",[e._v("包括：确定使用的TLS协议、加密方法，服务器的证书、服务器生成的随机数")]),e._v(" "),_("li",[e._v("如果使用了双向验证（即客户端也有客户端证书），则此响应会包含一个请求，要求客户端提供客户端证书")])])]),e._v(" "),_("li",[e._v("客户端验证服务端证书\n"),_("ol",[_("li",[e._v("如果验证通过，则向服务器发送：一个随机数、编码改变通知（密文的加密方法）、前面所有内容的哈希作为校验值")]),e._v(" "),_("li",[e._v("如果服务器需要客户端证书，则客户端上传客户端证书")])])]),e._v(" "),_("li",[e._v("服务器生成会话密钥\n"),_("ol",[_("li",[e._v("服务器会把上述三个随机数作为会话密钥")]),e._v(" "),_("li",[e._v("向客户端发送编码确认消息和校验和")])])]),e._v(" "),_("li",[e._v("加密通信阶段\n"),_("ol",[_("li",[e._v("双方使用其他应用层协议（如HTTP）进行通信，使用会话密钥加密内容")])])])]),e._v(" "),_("h2",{attrs:{id:"san"}},[e._v("SAN")]),e._v(" "),_("blockquote",[_("p",[e._v("Ref: https://digicert.com/subject-alternative-name.htm")])]),e._v(" "),_("p",[e._v("SAN(Subject Alternative Names)是SSL证书的一个域，它可以使 "),_("strong",[e._v("单个")]),e._v(" SSL证书拥有保护 "),_("strong",[e._v("多个")]),e._v(" 域名的能力。")]),e._v(" "),_("p",[e._v("比如访问github的时候，它的证书中SAN的值为：")]),e._v(" "),_("p",[_("img",{attrs:{src:v(474),alt:"32-1"}})]),e._v(" "),_("p",[e._v("在SAN出现之前，假设我需要保护"),_("code",{pre:!0},[e._v("example.com")]),e._v("和它的所有一级子域名，我需要分别为"),_("code",{pre:!0},[e._v("example.com")]),e._v("和"),_("code",{pre:!0},[e._v("*.example.com")]),e._v("申请证书。在SAN出现之后，我可以使用一个证书，同时保护"),_("code",{pre:!0},[e._v("example.com")]),e._v("和"),_("code",{pre:!0},[e._v("*.example.com")]),e._v("，也可以继续添加其他域名，比如"),_("code",{pre:!0},[e._v("example.net")]),e._v("，"),_("code",{pre:!0},[e._v("*.example.net")]),e._v("等等。简化了HTTP服务器的证书管理工作。")]),e._v(" "),_("h2",{attrs:{id:"sni"}},[e._v("SNI")]),e._v(" "),_("blockquote",[_("p",[e._v("Refs:")]),e._v(" "),_("ul",[_("li",[e._v("https://en.wikipedia.org/wiki/Server_Name_Indication")]),e._v(" "),_("li",[e._v("https://ruanyifeng.com/blog/2014/02/ssl_tls.html")]),e._v(" "),_("li",[e._v("https://aws.amazon.com/blogs/aws/new-application-load-balancer-sni/")])])]),e._v(" "),_("p",[e._v("SNI(Server Name Indication)是SSL协议的一个扩展，它可以使 "),_("strong",[e._v("单个")]),e._v(" HTTP服务器支持 "),_("strong",[e._v("多个")]),e._v(" SSL证书。")]),e._v(" "),_("p",[e._v("从上文【SSL流程】可以看出，交换密钥时，服务器并不知道客户端请求的是哪个域名，因为HTTP请求根本还没有发出来。直到密钥交换完毕，HTTP请求才会被发出来。")]),e._v(" "),_("p",[e._v("使用了SNI扩展后，客户端在第一步请求服务器证书的时候，就会带上自己请求的目标域名，服务器就可以根据域名返回对应的证书。")]),e._v(" "),_("p",[e._v("示例场景：电商独立站托管，可能开一台大机器，把若干个小网站托管在一台机器上，每个网站都有自己的域名。使用SNI就可以方便地管理这些域名的证书。（当然，从架构的可扩展性上说，这么设计风险很大）")]),e._v(" "),_("p",[e._v("目前主流浏览器（如Chrome/FireFox/IE/Safari）、编程语言库（如Go/Python/Java）、命令行工具（如curl/wget）、HTTP服务端（如Nginx/Apache HTTP Server/Tomcat/IIS）都已支持SNI，详细列表可以查看"),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Server_Name_Indication"}},[e._v("wiki")]),e._v("。")])])}]};e.exports={attributes:{title:"SSL, SAN & SNI",description:"SSL, Subject Alternative Names & Server Name Indication.",tags:["Web"]},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}},474:function(e,t,v){e.exports=v.p+"img/32-1.47a0fc2.png"}}]);