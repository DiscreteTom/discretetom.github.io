(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1309:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"jwt-vs-传统鉴权方式"}},[t._v("JWT vs 传统鉴权方式")]),t._v(" "),n("blockquote",[n("p",[t._v("ref: https://bilibili.com/video/BV1tJ411B7yJ")])]),t._v(" "),n("p",[t._v("基于token的鉴权流程：")]),t._v(" "),n("ol",[n("li",[t._v("客户端向服务器发起登录请求")]),t._v(" "),n("li",[t._v("服务器\n"),n("ol",[n("li",[t._v("验证用户名密码")]),t._v(" "),n("li",[t._v("生成随机token（比如uuid）")]),t._v(" "),n("li",[t._v("为了水平扩展性，把token放在外部的redis或其他数据库上，如"),n("code",{pre:!0},[t._v("token -> username")])]),t._v(" "),n("li",[t._v("返回登陆成功信息和token")])])]),t._v(" "),n("li",[t._v("客户端登录后发出的请求会包含token")]),t._v(" "),n("li",[t._v("服务器\n"),n("ol",[n("li",[t._v("先验证token，通过访问数据库得到username")]),t._v(" "),n("li",[t._v("进行后续操作")])])])]),t._v(" "),n("p",[t._v("基于JWT的鉴权流程：")]),t._v(" "),n("ol",[n("li",[t._v("客户端向服务器发起登录请求")]),t._v(" "),n("li",[t._v("服务器\n"),n("ol",[n("li",[t._v("验证用户名密码")]),t._v(" "),n("li",[t._v("生成JWT，其中"),n("strong",[t._v("保存了用户信息")]),t._v("，如"),n("code",{pre:!0},[t._v("username")]),t._v("，且"),n("strong",[t._v("被签名加密，无法篡改")])]),t._v(" "),n("li",[t._v("返回登陆成功信息和JWT")])])]),t._v(" "),n("li",[t._v("客户端登录后发出的请求会包含JWT")]),t._v(" "),n("li",[t._v("服务器\n"),n("ol",[n("li",[t._v("不需要访问数据库，直接解析JWT得到"),n("code",{pre:!0},[t._v("username")])]),t._v(" "),n("li",[t._v("进行后续操作")])])])]),t._v(" "),n("p",[t._v("可以看到JWT可以减少一次数据库的访问，减少服务器响应时间，缓解数据库压力。JWT自带的过期检测也非常方便")]),t._v(" "),n("h2",{attrs:{id:"jwt的生成"}},[t._v("JWT的生成")]),t._v(" "),n("blockquote",[n("p",[t._v("ref: https://jwt.io/introduction/")])]),t._v(" "),n("h3",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("p",[t._v("JWT包含三个部分：")]),t._v(" "),n("ul",[n("li",[t._v("header")]),t._v(" "),n("li",[t._v("payload")]),t._v(" "),n("li",[t._v("signature")])]),t._v(" "),n("p",[t._v("这三个部分都是字符串，使用"),n("code",{pre:!0},[t._v(".")]),t._v("连接，即"),n("code",{pre:!0},[t._v("<header>.<payload>.<signature>")])]),t._v(" "),n("h3",{attrs:{id:"header"}},[t._v("header")]),t._v(" "),n("p",[t._v("header的内容"),n("em",[t._v("通常")]),t._v("包含两部分：token类型与加密算法。例：")]),t._v(" "),n("pre",{staticClass:"language-json"},[n("code",{pre:!0,attrs:{class:"language-json"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "HMAC SHA256" or "RSA"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("上述json会以字符串形式被Base64Url编码（先Base64编码再URL编码）成为JWT中的header字符串")]),t._v(" "),n("p",[t._v("header的内容可以被客户端解析查看")]),t._v(" "),n("h3",{attrs:{id:"payload"}},[t._v("payload")]),t._v(" "),n("p",[t._v("payload的内容为自定义json对象。有一些预定义的字段，如"),n("code",{pre:!0},[t._v("iss")]),t._v("表示"),n("code",{pre:!0},[t._v("issuer")]),t._v("，"),n("code",{pre:!0},[t._v("exp")]),t._v("表示"),n("code",{pre:!0},[t._v("expiration time")]),t._v("，"),n("code",{pre:!0},[t._v("sub")]),t._v("表示"),n("code",{pre:!0},[t._v("subject")]),t._v("，"),n("code",{pre:!0},[t._v("aud")]),t._v("表示"),n("code",{pre:!0},[t._v("audience")]),t._v("。例：")]),t._v(" "),n("pre",{staticClass:"language-json"},[n("code",{pre:!0,attrs:{class:"language-json"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"admin"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("上述json会以字符串形式被Base64Url编码（先Base64编码再URL编码）成为JWT中的payload字符串")]),t._v(" "),n("p",[t._v("由于使用Base64Url编码，所以客户端也可以解析查看payload的内容，所以"),n("strong",[t._v("不要放敏感信息")]),t._v("，比如用户的密码。而是放一些描述性的信息，比如用户名")]),t._v(" "),n("h3",{attrs:{id:"signature"}},[t._v("signature")]),t._v(" "),n("p",[t._v("signature用来保证payload部分没有被篡改过。它会使用header中定义的加密方法和一个服务端才知道的secret字符串，把"),n("code",{pre:!0},[t._v("<header>.<payload>")]),t._v("进行哈希签名")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[t._v("signature "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HMACSHA256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("headerString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payloadString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("p",[t._v("由于使用了secret，所以signature无法被客户端伪造，保证了JWT的真实性")]),t._v(" "),n("h3",{attrs:{id:"使用方式"}},[t._v("使用方式")]),t._v(" "),n("p",[t._v("通常在HTTP Header的"),n("code",{pre:!0},[t._v("Authorization: Bearer <token>")]),t._v("中使用")])])}]};t.exports={attributes:{title:"JWT概述",description:"如何生成JWT、JWT相比传统鉴权方式的优点",tags:["web"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);