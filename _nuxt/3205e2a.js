(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1299:function(e,v){const t={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),t("p",[e._v("本文是观看"),t("a",{attrs:{href:"http://aws.amazon.bokecc.com/news/show-731.html"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),t("h2",{attrs:{id:"软件架构风格的演变"}},[e._v("软件架构风格的演变")]),e._v(" "),t("ul",[t("li",[e._v("Monolithic\n"),t("ul",[t("li",[e._v("一个软件是一个整体，强耦合，依赖复杂")]),e._v(" "),t("li",[e._v("虽然代码可能进行了模块化，但是架构没有模块化，无法适应分布式系统")]),e._v(" "),t("li",[e._v("软件包越来越大，团队越来越复杂")]),e._v(" "),t("li",[e._v("难以单独更新部分功能，难以部署、扩展、测试、迭代")])])]),e._v(" "),t("li",[e._v("SOA: Service Oriented Architecture\n"),t("ul",[t("li",[e._v("面向服务的架构")]),e._v(" "),t("li",[e._v("根据服务拆分架构")]),e._v(" "),t("li",[e._v("通常使用消息队列/总线进行跨服务通信")]),e._v(" "),t("li",[e._v("热插拔")]),e._v(" "),t("li",[e._v("跨语言/跨环境")]),e._v(" "),t("li",[e._v("解耦")]),e._v(" "),t("li",[e._v("部署的时候仍然是一起部署，难以分别扩展")])])]),e._v(" "),t("li",[e._v("Microservices\n"),t("ul",[t("li",[e._v("微服务")]),e._v(" "),t("li",[e._v("更加独立")]),e._v(" "),t("li",[e._v("通常使用REST/RPC API进行跨服务通信")]),e._v(" "),t("li",[e._v("跨语言/跨环境")]),e._v(" "),t("li",[e._v("易于单独扩展模块，物理资源利用率更高")]),e._v(" "),t("li",[e._v("每个团队单独开发、部署、测试、迭代，有自己的pipeline，效率更高")]),e._v(" "),t("li",[e._v("团队之间比较独立，对环境的维护（比如依赖包的版本控制）较为简单")])])])]),e._v(" "),t("h2",{attrs:{id:"微服务面临的问题"}},[e._v("微服务面临的问题")]),e._v(" "),t("ul",[t("li",[e._v("资源管理\n"),t("ul",[t("li",[e._v("原来的物理资源可能只是几个超级大的数据库、物理机，垂直扩展")]),e._v(" "),t("li",[e._v("微服务化之后，可能是几千个小数据库、物理机，水平扩展")])])]),e._v(" "),t("li",[e._v("监控\n"),t("ul",[t("li",[e._v("如何监控、诊断、调试每个服务")]),e._v(" "),t("li",[e._v("如何健康状态检查")])])]),e._v(" "),t("li",[e._v("服务发现\n"),t("ul",[t("li",[e._v("服务A扩展之后，服务B如何发现服务A中新添加的API/URL")]),e._v(" "),t("li",[e._v("负载均衡器如何发现服务")])])]),e._v(" "),t("li",[e._v("部署\n"),t("ul",[t("li",[e._v("如何管理众多的流水线")]),e._v(" "),t("li",[e._v("如何管理不同的环境与依赖")]),e._v(" "),t("li",[e._v("如何控制部署在哪个物理机上")])])])])])}]};e.exports={attributes:{title:"What is Microservices",description:"微服务架构概述",tags:["Distributed System"]},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);