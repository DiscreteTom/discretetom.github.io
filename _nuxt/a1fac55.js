(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1215:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),e("p",[t._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1g4411Y7Y4/"}},[t._v("此视频")]),t._v("时的笔记")]),t._v(" "),e("h2",{attrs:{id:"nmap"}},[t._v("nmap")]),t._v(" "),e("ul",[e("li",[t._v("https://nmap.org")]),t._v(" "),e("li",[t._v("https://sectools.org")]),t._v(" "),e("li",[t._v("开源端口扫描器\n"),e("ul",[e("li",[t._v("主机、IP、网段")]),t._v(" "),e("li",[t._v("操作系统")]),t._v(" "),e("li",[t._v("防火墙")]),t._v(" "),e("li",[t._v("服务器软件版本")])])]),t._v(" "),e("li",[t._v("路由追踪")]),t._v(" "),e("li",[t._v("支持自定义脚本，可以直接对服务进行攻击")])]),t._v(" "),e("p",[t._v("常用指令：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主机发现")]),t._v("\nnmap -sn "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1.1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端口扫描")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -sS: 使用TCP SYN进行扫描")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -p: 指定端口")]),t._v("\nnmap -sS -p22-1000 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1.1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 系统扫描")]),t._v("\nnmap -O "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1.1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 版本扫描")]),t._v("\nnmap -sV "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1.1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 综合扫描")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -T: 指定速度，1-5（最大）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -A: 综合扫描")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -v: 输出过程")]),t._v("\nnmap -T4 -A -v "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1.1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行脚本")]),t._v("\nnmap --script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx\n")])]),t._v(" "),e("h2",{attrs:{id:"zenmap"}},[t._v("zenmap")]),t._v(" "),e("ul",[e("li",[t._v("图形化 nmap 工具")]),t._v(" "),e("li",[t._v("有很多预置的模板")])]),t._v(" "),e("h2",{attrs:{id:"openvas"}},[t._v("OpenVAS")]),t._v(" "),e("ul",[e("li",[t._v("Open Vulnerability Assessment System")]),t._v(" "),e("li",[t._v("https://www.openvas.org")]),t._v(" "),e("li",[t._v("当前最好用的漏扫工具")])]),t._v(" "),e("h2",{attrs:{id:"防御"}},[t._v("防御")]),t._v(" "),e("ul",[e("li",[t._v("最小权限原则")]),t._v(" "),e("li",[t._v("关闭无用端口")])])])}]};t.exports={attributes:{title:"Security-7",description:"目标扫描"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);