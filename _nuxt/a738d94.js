(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1221:function(v,_){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),l("p",[v._v("本文是观看"),l("a",{attrs:{href:"https://www.bilibili.com/video/BV1n4411v7Rz"}},[v._v("此视频")]),v._v("时的笔记")]),v._v(" "),l("h2",{attrs:{id:"云计算概述"}},[v._v("云计算概述")]),v._v(" "),l("p",[v._v("分类：")]),v._v(" "),l("ul",[l("li",[v._v("公有云\n"),l("ul",[l("li",[v._v("购买第三方云")]),v._v(" "),l("li",[v._v("容量大")])])]),v._v(" "),l("li",[v._v("私有云\n"),l("ul",[l("li",[v._v("自建数据中心云")]),v._v(" "),l("li",[v._v("数据在自己手里")])])]),v._v(" "),l("li",[v._v("混合云\n"),l("ul",[l("li",[v._v("数据敏感的业务使用私有云，流量、计算量大的业务使用公有云")]),v._v(" "),l("li",[v._v("使用VPN/专线打通公有云和私有云")])])]),v._v(" "),l("li",[v._v("融合云\n"),l("ul",[l("li",[v._v("使用不同云厂商的公有云")]),v._v(" "),l("li",[v._v("可能需要跨云调度")])])])]),v._v(" "),l("p",[v._v("云计算包括：")]),v._v(" "),l("ul",[l("li",[v._v("IaaS\n"),l("ul",[l("li",[v._v("基础设施即服务")]),v._v(" "),l("li",[v._v("提供云服务器、网络")]),v._v(" "),l("li",[v._v("需要开发能力和运维能力")])])]),v._v(" "),l("li",[v._v("PaaS\n"),l("ul",[l("li",[v._v("平台即服务")]),v._v(" "),l("li",[v._v("提供“环境”")]),v._v(" "),l("li",[v._v("需要开发能力，基本不需要运维")])])]),v._v(" "),l("li",[v._v("SaaS\n"),l("ul",[l("li",[v._v("软件即服务")]),v._v(" "),l("li",[v._v("提供软件，不需要开发能力，直接使用")]),v._v(" "),l("li",[v._v("如今有很多基于浏览器的SaaS服务")])])])]),v._v(" "),l("h2",{attrs:{id:"openstack"}},[v._v("OpenStack")]),v._v(" "),l("h3",{attrs:{id:"why-openstack"}},[v._v("Why OpenStack")]),v._v(" "),l("ul",[l("li",[v._v("API支持好")]),v._v(" "),l("li",[v._v("开源")]),v._v(" "),l("li",[v._v("平台成熟")]),v._v(" "),l("li",[v._v("生态好，有大厂支持")])]),v._v(" "),l("h3",{attrs:{id:"openstack概述"}},[v._v("OpenStack概述")]),v._v(" "),l("ul",[l("li",[v._v("WEB管理界面")]),v._v(" "),l("li",[v._v("是一套软件")]),v._v(" "),l("li",[v._v("API可以对接AWS")])]),v._v(" "),l("h3",{attrs:{id:"核心组件"}},[v._v("核心组件")]),v._v(" "),l("p",[v._v("构建OpenStack的时候不一定包括以下所有组件")]),v._v(" "),l("ul",[l("li",[v._v("Nova\n"),l("ul",[l("li",[v._v("Compute（计算服务）")]),v._v(" "),l("li",[v._v("是OpenStack的核心")])])]),v._v(" "),l("li",[v._v("Glance\n"),l("ul",[l("li",[v._v("Image Service（镜像服务）")])])]),v._v(" "),l("li",[v._v("Swift\n"),l("ul",[l("li",[v._v("Object Storage（对象存储）")])])]),v._v(" "),l("li",[v._v("Cinder\n"),l("ul",[l("li",[v._v("Block Storage（块存储）")]),v._v(" "),l("li",[v._v("使用iSCSI协议")])])]),v._v(" "),l("li",[v._v("Neutron\n"),l("ul",[l("li",[v._v("Networking（网络）")]),v._v(" "),l("li",[v._v("不同组件的隔离与联网")])])]),v._v(" "),l("li",[v._v("Horizon\n"),l("ul",[l("li",[v._v("Dashboard（仪表盘）")]),v._v(" "),l("li",[v._v("WEB界面，B/S架构")]),v._v(" "),l("li",[v._v("基于Django(Python)")])])]),v._v(" "),l("li",[v._v("Keystone\n"),l("ul",[l("li",[v._v("Identity Service（身份认证）")])])]),v._v(" "),l("li",[v._v("Heat\n"),l("ul",[l("li",[v._v("Orchestration（编排）")]),v._v(" "),l("li",[v._v("自动化管理其他组件")])])]),v._v(" "),l("li",[v._v("Ceilometer\n"),l("ul",[l("li",[v._v("Telemetry（监控）")]),v._v(" "),l("li",[v._v("CPU/内存/网络的使用情况")])])]),v._v(" "),l("li",[v._v("Trove\n"),l("ul",[l("li",[v._v("Database Service（数据库服务）")])])]),v._v(" "),l("li",[v._v("Sahara\n"),l("ul",[l("li",[v._v("Data Processing（大数据处理）")]),v._v(" "),l("li",[v._v("可以结合Hadoop")])])])])])}]};v.exports={attributes:{title:"Linux Virtualization(Part 3)",description:"Cloud Computing & Intro of OpenStack"},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);