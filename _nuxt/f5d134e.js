(window.webpackJsonp=window.webpackJsonp||[]).push([[98,314],{1222:function(e,t,_){const v={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),v("p",[e._v("本文是观看"),v("a",{attrs:{href:"https://www.bilibili.com/video/BV1T54y1Q7VY"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),v("h2",{attrs:{id:"监控"}},[e._v("监控")]),e._v(" "),v("ul",[v("li",[e._v("维持业务连续性")]),e._v(" "),v("li",[e._v("通常需要使用时序数据库保存历史数据")]),e._v(" "),v("li",[e._v("目前主流的监控方案\n"),v("ul",[v("li",[e._v("Zabbix\n"),v("ul",[v("li",[e._v("图形界面友好")]),e._v(" "),v("li",[e._v("成熟，资料多")]),e._v(" "),v("li",[e._v("告警方案成熟\n"),v("ul",[v("li",[e._v("分级告警等功能")])])]),e._v(" "),v("li",[e._v("架构成熟")]),e._v(" "),v("li",[e._v("可以参考"),v("a",{attrs:{href:"https://discretetom.github.io/notes/linux-cluster/3/"}},[e._v("之前的博客")])])])]),e._v(" "),v("li",[e._v("Open-Falcon\n"),v("ul",[v("li",[e._v("由小米开源")])])]),e._v(" "),v("li",[e._v("Prometheus\n"),v("ul",[v("li",[e._v("常用于容器监控")]),e._v(" "),v("li",[e._v("需要写配置文件，而不是在GUI操作")]),e._v(" "),v("li",[e._v("和k8s一起在CNCF发展，有一套适用于k8s的成熟监控解决方案。基本上用k8s的都会使用Prometheus进行监控")])])])])])]),e._v(" "),v("h2",{attrs:{id:"prometheus"}},[e._v("Prometheus")]),e._v(" "),v("h3",{attrs:{id:"概述-1"}},[e._v("概述")]),e._v(" "),v("p",[v("img",{attrs:{src:_(437),alt:"5-1"}})]),e._v(" "),v("ul",[v("li",[e._v("多维数据模型。可以根据维度对数据进行筛选")]),e._v(" "),v("li",[e._v("支持使用PromQL进行多维数据复杂查询")]),e._v(" "),v("li",[e._v("不依赖外部数据库存储，自带时序数据库")]),e._v(" "),v("li",[e._v("不使用agent，而是基于HTTP pull的方式从不同的endpoint上拉数据\n"),v("ul",[v("li",[e._v("所以需要安装不同的exporter程序来提供http endpoint。比如监控主机，使用"),v("code",{pre:!0},[e._v("node_exporter")])]),e._v(" "),v("li",[e._v("exporter只负责返回当前目标的状态，没有存储数据的能力。数据由Prometheus统一在时序数据库存储")])])]),e._v(" "),v("li",[e._v("使用PushGateway解决push数据的收集问题")]),e._v(" "),v("li",[e._v("支持集成k8s的服务发现，也可以使用静态配置")]),e._v(" "),v("li",[e._v("支持告警收敛、去重、分级告警")])]),e._v(" "),v("h3",{attrs:{id:"示例"}},[e._v("示例")]),e._v(" "),v("ol",[v("li",[e._v("使用Docker安装并启动Prometheus容器。Prometheus会自动开始监控自己")]),e._v(" "),v("li",[e._v("可以使用cAdvisor(Container Advisor)监控节点上的所有容器")])]),e._v(" "),v("ul",[v("li",[e._v("cAdvisor也是基于容器启动")]),e._v(" "),v("li",[e._v("基于卷映射实现对其他容器的监控")]),e._v(" "),v("li",[e._v("监控CPU、内存、网络、硬盘等信息")]),e._v(" "),v("li",[e._v("exporter导出数据的路径是"),v("code",{pre:!0},[e._v("/metrics")]),e._v("，比如"),v("code",{pre:!0},[e._v("localhost:8080/metrics")]),e._v("。在Prometheus配置文件里面可以省略"),v("code",{pre:!0},[e._v("metrics")]),e._v("这个路径，因为这是默认路径，所以直接写"),v("code",{pre:!0},[e._v("localhost:8080")]),e._v("即可")]),e._v(" "),v("li",[e._v("exporter导出数据的格式是"),v("code",{pre:!0},[e._v('metric_name(dimension_1="xxx",dimension_2="xxx") value')])])]),e._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[e._v("修改Prometheus配置文件并重启服务，实现对容器的监控（Prometheus也支持热更新）")]),e._v(" "),v("li",[e._v("在Prometheus的WEB GUI可以实现查询。语法："),v("code",{pre:!0},[e._v('metric_name(dimension_1="xxx",dimension_2="xxx")')]),e._v("，也可以不添加dimension，直接查整个metric")])]),e._v(" "),v("h2",{attrs:{id:"grafana"}},[e._v("Grafana")]),e._v(" "),v("ul",[v("li",[e._v("非常炫酷的web监控界面")]),e._v(" "),v("li",[e._v("支持设置账号密码、鉴权、登录")]),e._v(" "),v("li",[e._v("不保存时序数据，仅使用SQLite保存一些用户数据（比如登录、鉴权、仪表盘元数据）。使用各种数据源插件来支持不同的监控系统\n"),v("ul",[v("li",[e._v("使用PromQL对Prometheus进行查询")])])]),e._v(" "),v("li",[e._v("同样可以基于Docker进行部署")]),e._v(" "),v("li",[e._v("Grafana提供常见需求的监控仪表盘模板，可以直接导入\n"),v("ul",[v("li",[e._v("Docker的监控模板编号是193")]),e._v(" "),v("li",[e._v("Linux的监控模板编号是9276")])])])])])}]};e.exports={attributes:{title:"Linux Virtualization(Part 5)",description:"监控：Prometheus & Grafana",tags:["Container"]},vue:{render:v.render,staticRenderFns:v.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=v.render,this.$options.staticRenderFns=v.staticRenderFns}}}}},437:function(e,t,_){e.exports=_.p+"img/5-1.573eb9e.png"}}]);