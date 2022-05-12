(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1244:function(t,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"proxy-for-vs-code"}},[t._v("Proxy for VS Code")]),t._v(" "),r("p",[t._v("In "),r("code",{pre:!0},[t._v("settings.json")]),t._v(", add the following content:")]),t._v(" "),r("pre",{staticClass:"language-json"},[r("code",{pre:!0,attrs:{class:"language-json"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http.proxy"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<protocol>://<your-proxy-server>:<port>"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("p",[t._v("Tips:")]),t._v(" "),r("ul",[r("li",[t._v("The "),r("code",{pre:!0},[t._v("protocol")]),t._v(" field is required, it has to be one of "),r("code",{pre:!0},[t._v("http")]),t._v(", "),r("code",{pre:!0},[t._v("https")]),t._v(".")]),t._v(" "),r("li",[t._v("The "),r("code",{pre:!0},[t._v("port")]),t._v(" field is required.")]),t._v(" "),r("li",[t._v("The default value of "),r("code",{pre:!0},[t._v("http.proxy")]),t._v(" will inherit from the environment variable "),r("code",{pre:!0},[t._v("http_proxy")]),t._v(" and "),r("code",{pre:!0},[t._v("https_proxy")]),t._v(".")]),t._v(" "),r("li",[t._v("There is only one "),r("code",{pre:!0},[t._v("http.proxy")]),t._v(", no "),r("code",{pre:!0},[t._v("https.proxy")]),t._v(".")]),t._v(" "),r("li",[t._v("This setting will apply to VS Code itself and its plugins. For example, I’m using "),r("code",{pre:!0},[t._v("Go")]),t._v(" plugin, when I run "),r("code",{pre:!0},[t._v("Go: Install/Update Tools")]),t._v(" command, this proxy will take effect.")]),t._v(" "),r("li",[t._v("This setting will not apply to the built-in terminal of VS Code.")])]),t._v(" "),r("h2",{attrs:{id:"proxy-for-the-built-in-terminal"}},[t._v("Proxy for the Built-In Terminal")]),t._v(" "),r("p",[t._v("In "),r("code",{pre:!0},[t._v("settings.json")]),t._v(", add the following content:")]),t._v(" "),r("pre",{staticClass:"language-json"},[r("code",{pre:!0,attrs:{class:"language-json"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"terminal.integrated.env.<platform>"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http_proxy"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<protocol>://<your-proxy-server>:<port>"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https_proxy"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<protocol>://<your-proxy-server>:<port>"')]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("p",[t._v("Tips:")]),t._v(" "),r("ul",[r("li",[t._v("The "),r("code",{pre:!0},[t._v("platform")]),t._v(" should be one of "),r("code",{pre:!0},[t._v("windows")]),t._v(", "),r("code",{pre:!0},[t._v("linux")]),t._v(" or "),r("code",{pre:!0},[t._v("osx")]),t._v(".")]),t._v(" "),r("li",[t._v("The "),r("code",{pre:!0},[t._v("http_proxy")]),t._v(" and "),r("code",{pre:!0},[t._v("https_proxy")]),t._v(" will take effect individually. You’d better set both of them.")])]),t._v(" "),r("h2",{attrs:{id:"authentication"}},[t._v("Authentication")]),t._v(" "),r("p",[t._v("Use this format of URL:")]),t._v(" "),r("p",[r("code",{pre:!0},[t._v("<protocol>://<username>:<password>@<your-proxy-server>:<port>")])]),t._v(" "),r("h2",{attrs:{id:"refs"}},[t._v("Refs")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://stackoverflow.com/a/37730040"}},[t._v("How to specify a user id and password for Visual Studio Code with an authenticating proxy?")])])])])}]};t.exports={attributes:{title:"Setup HTTP Proxy for VS Code and Its Built-in Terminal",description:"Including how to configure the authentication.",tags:["Network","VS Code"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);