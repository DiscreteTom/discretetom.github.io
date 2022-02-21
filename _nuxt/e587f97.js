(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1225:function(v,e){const _={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"预备知识"}},[v._v("预备知识")]),v._v(" "),_("p",[v._v("有些PT网站不向外公开，仅能使用IPv6访问，且屏蔽了中国境内三大运营商的IPv6网络。所以可以自己搭建IPv6代理服务器来访问，其实就是用一个支持IPv6的服务器搭建HTTP代理罢了")]),v._v(" "),_("p",[v._v("本文不是手把手教程。需要一定的技术基础")]),v._v(" "),_("h2",{attrs:{id:"aws-ipv6"}},[v._v("AWS IPv6")]),v._v(" "),_("p",[v._v("本节讲解如何在AWS中国区开启支持IPv6的云服务器。如果你已经有支持IPv6的服务器，可以跳过这一节")]),v._v(" "),_("h3",{attrs:{id:"配置vpc"}},[v._v("配置VPC")]),v._v(" "),_("blockquote",[_("p",[v._v("AWS默认VPC没有绑定IPv6 CIDR。可以给已有的VPC绑定IPv6 CIDR，不过本文会创建一个新的VPC，避免干扰已有的环境")])]),v._v(" "),_("ol",[_("li",[v._v("在VPC控制台创建新的VPC，并在"),_("code",{pre:!0},[v._v("IPv6 CIDR block")]),v._v("中选择"),_("code",{pre:!0},[v._v("Amazon provided IPv6 CIDR block")]),v._v("，这样新的VPC就会有IPv6 CIDR")]),v._v(" "),_("li",[v._v("在新的VPC中创建一个新的子网，并分配IPv6 CIDR")]),v._v(" "),_("li",[v._v("创建新的Internet Gateway，并关联到新创建的VPC")]),v._v(" "),_("li",[v._v("编辑子网的路由表，添加路由条目\n"),_("ol",[_("li",[_("code",{pre:!0},[v._v("0.0.0.0/0")]),v._v(" -> Internet Gateway")]),v._v(" "),_("li",[_("code",{pre:!0},[v._v("::/0")]),v._v(" -> Internet Gateway")])])])]),v._v(" "),_("h3",{attrs:{id:"创建云服务器"}},[v._v("创建云服务器")]),v._v(" "),_("ol",[_("li",[v._v("在EC2控制台创建新的instance")]),v._v(" "),_("li",[v._v("服务器镜像(AMI)选择一个常用的linux镜像。我使用的是Amazon Linux 2")]),v._v(" "),_("li",[v._v("随便选一个便宜的instance type。如果未来性能不够了也可以升级")]),v._v(" "),_("li",[v._v("配置网络的时候，选择刚才创建的VPC和子网，启动"),_("code",{pre:!0},[v._v("Auto-assign Public IP")]),v._v("和"),_("code",{pre:!0},[v._v("Auto-assign IPv6 IP")]),v._v("，这样服务器就会有public IPv4地址和IPv6地址。IPv4地址用来支持本地电脑连接服务器，IPv6地址用来支持服务器连接PT网站")]),v._v(" "),_("li",[v._v("添加存储。默认8G基本足够")]),v._v(" "),_("li",[v._v("添加标签。可以跳过")]),v._v(" "),_("li",[v._v("配置安全组，创建新的安全组，允许任何来源的SSH访问，以及TCP 3128端口的访问")]),v._v(" "),_("li",[v._v("启动服务器")])]),v._v(" "),_("h2",{attrs:{id:"配置http代理"}},[v._v("配置HTTP代理")]),v._v(" "),_("ol",[_("li",[v._v("使用SSH登录服务器")]),v._v(" "),_("li",[v._v("安装"),_("code",{pre:!0},[v._v("squid")]),v._v("。对于我使用的Amazon Linux 2系统，执行"),_("code",{pre:!0},[v._v("sudo yum -y install squid")])]),v._v(" "),_("li",[v._v("编辑"),_("code",{pre:!0},[v._v("squid")]),v._v("配置文件："),_("code",{pre:!0},[v._v("vim /etc/squid/squid.conf")]),v._v(" "),_("ol",[_("li",[v._v("在"),_("code",{pre:!0},[v._v("acl localnet src fe80::/10")]),v._v("下面添加\n"),_("ol",[_("li",[_("code",{pre:!0},[v._v("acl pubnet src all")]),v._v("，即把任意来源的流量("),_("code",{pre:!0},[v._v("all")]),v._v(")都标记为"),_("code",{pre:!0},[v._v("pubnet")])])])]),v._v(" "),_("li",[v._v("在"),_("code",{pre:!0},[v._v("http_access allow localhost")]),v._v("下面添加\n"),_("ol",[_("li",[_("code",{pre:!0},[v._v("http_access allow pubnet")]),v._v("，即允许标签为"),_("code",{pre:!0},[v._v("pubnet")]),v._v("的流量访问此HTTP代理")])])]),v._v(" "),_("li",[v._v("保存文件。现在"),_("code",{pre:!0},[v._v("squid")]),v._v("服务就可以被公网访问了")])])]),v._v(" "),_("li",[v._v("启动"),_("code",{pre:!0},[v._v("squid")]),v._v("服务："),_("code",{pre:!0},[v._v("sudo systemctl start squid")]),v._v("。此服务会监听3128端口")])]),v._v(" "),_("h2",{attrs:{id:"使用代理"}},[v._v("使用代理")]),v._v(" "),_("p",[v._v("由于配置的是HTTP代理，所以可以直接配置系统全局代理，也可以使用浏览器插件配置代理，请自行搜索。代理客户端所指定的IP地址使用IPv4地址即可")]),v._v(" "),_("p",[v._v("PT下载软件通常也可以配置代理")]),v._v(" "),_("h2",{attrs:{id:"后续步骤"}},[v._v("后续步骤")]),v._v(" "),_("ul",[_("li",[v._v("换一个端口，不使用3128端口以提升安全性")]),v._v(" "),_("li",[v._v("配置HTTPS来增强安全性")])]),v._v(" "),_("p",[v._v("如果使用AWS：")]),v._v(" "),_("ul",[_("li",[v._v("修改安全组的来源IP以限制访问")]),v._v(" "),_("li",[v._v("给云服务器设置弹性IP防止IP地址漂移")])]),v._v(" "),_("h2",{attrs:{id:"refs"}},[v._v("Refs")]),v._v(" "),_("ul",[_("li",[v._v("https://www.jianshu.com/p/cdfa2323f9ff")]),v._v(" "),_("li",[v._v("https://discretetom.github.io/posts/https-proxy")])])])}]};v.exports={attributes:{title:"Access PT sites via IPv6 Proxy",description:"And how to enable IPv6 on AWS",tags:["Network"]},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);