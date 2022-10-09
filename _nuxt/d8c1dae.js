(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1190:function(v,_){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),l("p",[v._v("本文是观看"),l("a",{attrs:{href:"https://www.bilibili.com/video/BV1Db411G7pf"}},[v._v("此视频")]),v._v("时的笔记")]),v._v(" "),l("h2",{attrs:{id:"常见监控平台"}},[v._v("常见监控平台")]),v._v(" "),l("ul",[l("li",[v._v("Cacti（淘汰）\n"),l("ul",[l("li",[v._v("出现较早，性能较差")]),v._v(" "),l("li",[v._v("以"),l("strong",[v._v("流量与性能")]),v._v("监控为主。仅监控，不报警，算是一个绘图和记录工具")]),v._v(" "),l("li",[v._v("使用B/S架构展示数据")]),v._v(" "),l("li",[v._v("使用SNMP(Simple Network Management Protocol)收集数据")])])]),v._v(" "),l("li",[v._v("Nagios（淘汰）\n"),l("ul",[l("li",[v._v("以"),l("strong",[v._v("服务与性能")]),v._v("检测为主，会报警")]),v._v(" "),l("li",[v._v("使用B/S架构展示数据")]),v._v(" "),l("li",[v._v("使用脚本收集数据（有官方脚本），C/S架构")])])]),v._v(" "),l("li",[v._v("Zabbix（主流）\n"),l("ul",[l("li",[v._v("新型全功能监控")]),v._v(" "),l("li",[v._v("使用B/S架构展示数据")]),v._v(" "),l("li",[v._v("使用C/S架构收集数据")])])])]),v._v(" "),l("p",[v._v("早期Cacti和Nagios结合使用，一个做可视化，一个做警报。Zabbix出现后取代了二者")]),v._v(" "),l("h2",{attrs:{id:"cacti"}},[v._v("Cacti")]),v._v(" "),l("p",[v._v("组件：")]),v._v(" "),l("ul",[l("li",[v._v("RRDtool\n"),l("ul",[l("li",[v._v("C语言写的绘图软件")]),v._v(" "),l("li",[v._v("效率高，性能强悍。由于过分灵活，导致使用复杂")])])]),v._v(" "),l("li",[v._v("SNMP\n"),l("ul",[l("li",[v._v("对于监控来说最重要的协议")]),v._v(" "),l("li",[v._v("现在的监控软件几乎都支持SNMP")]),v._v(" "),l("li",[v._v("TCP、UDP、CPU、内存等指标都可以收集")]),v._v(" "),l("li",[v._v("OID：服务器需要收集的指标的ID")])])]),v._v(" "),l("li",[v._v("Apache HTTP Server")])]),v._v(" "),l("p",[v._v("Cacti = SNMP收集数据 + RRDtool画图 + Apache展示")]),v._v(" "),l("h2",{attrs:{id:"nagios"}},[v._v("Nagios")]),v._v(" "),l("p",[v._v("作为Cacti的辅助。Cacti能够收集并保存信息，能够可视化，但是不能发警告。Nagios不能持久保存信息，但是可以监控状态并发警告")]),v._v(" "),l("p",[v._v("监控对象：")]),v._v(" "),l("ul",[l("li",[v._v("主机/主机组")]),v._v(" "),l("li",[v._v("服务/资源/服务组")]),v._v(" "),l("li",[v._v("联系人/联系人组")]),v._v(" "),l("li",[v._v("时段")]),v._v(" "),l("li",[v._v("命令")])]),v._v(" "),l("p",[v._v("即：哪些主机，在哪些时间，使用哪些命令，监控哪些资源，报警给哪些人")]),v._v(" "),l("p",[v._v("因为使用脚本（插件）收集数据，所以比SNMP更灵活")]),v._v(" "),l("p",[v._v("收集数据的方式：")]),v._v(" "),l("ul",[l("li",[v._v("被动方式（服务器主动轮询客户端，主流）\n"),l("ul",[l("li",[v._v("主动请求客户端进行数据的收集")]),v._v(" "),l("li",[v._v("客户端基于SSH把数据推到服务端")]),v._v(" "),l("li",[v._v("客户端安装其他代理，服务端请求代理")])])]),v._v(" "),l("li",[v._v("主动方式（客户端主动。如果客户端检测到自己快挂了可以立刻通知服务器，但是如果客户端没有检测到自己挂了，服务器就不会知道。作为被动方式的辅助）")])]),v._v(" "),l("h2",{attrs:{id:"zabbix"}},[v._v("Zabbix")]),v._v(" "),l("ul",[l("li",[v._v("基于web界面")]),v._v(" "),l("li",[v._v("分布式监控")]),v._v(" "),l("li",[v._v("开源")]),v._v(" "),l("li",[v._v("高性能，2c8G主机可以监控3w+台主机")])]),v._v(" "),l("h3",{attrs:{id:"zabbix组件与程序"}},[v._v("Zabbix组件与程序")]),v._v(" "),l("p",[v._v("组件：")]),v._v(" "),l("ul",[l("li",[v._v("Zabbix Server（基于LAMP）\n"),l("ul",[l("li",[v._v("WEB GUI")]),v._v(" "),l("li",[v._v("database")])])]),v._v(" "),l("li",[v._v("Zabbix Agent\n"),l("ul",[l("li",[v._v("收集数据")])])]),v._v(" "),l("li",[v._v("Zabbix Proxy\n"),l("ul",[l("li",[v._v("子节点。收集数据汇报给主节点")])])])]),v._v(" "),l("p",[v._v("安装完毕后会得到以下程序：")]),v._v(" "),l("ul",[l("li",[v._v("zabbix_agentd\n"),l("ul",[l("li",[v._v("客户端守护进程。TCP 10050")]),v._v(" "),l("li",[v._v("收集数据，如CPU、内存、硬盘。支持调用脚本以监控任意数据")])])]),v._v(" "),l("li",[v._v("zabbix_get\n"),l("ul",[l("li",[v._v("服务端CLI，可以主动询问客户端")]),v._v(" "),l("li",[v._v("用于排错")])])]),v._v(" "),l("li",[v._v("zabbix_proxy\n"),l("ul",[l("li",[v._v("服务端子节点守护进程")]),v._v(" "),l("li",[v._v("负责从客户端收集数据然后发送给server")])])]),v._v(" "),l("li",[v._v("zabbix_sender\n"),l("ul",[l("li",[v._v("用于把数据发送到server/proxy")]),v._v(" "),l("li",[v._v("用于主动提交")])])]),v._v(" "),l("li",[v._v("zabbix_server\n"),l("ul",[l("li",[v._v("服务端主节点守护进程")])])]),v._v(" "),l("li",[v._v("zabbix_java_gateway(optional)\n"),l("ul",[l("li",[v._v("获取Java虚拟机的状态（其实常用的还是使用脚本而不是这个程序）")])])])]),v._v(" "),l("h3",{attrs:{id:"zabbix数据收集方式"}},[v._v("Zabbix数据收集方式")]),v._v(" "),l("ul",[l("li",[v._v("IPMI（智能管理接口）。很多智能硬件都支持")]),v._v(" "),l("li",[v._v("agent。监控操作系统")]),v._v(" "),l("li",[v._v("ICMP/SNMP。监控网卡等设备")])])])}]};v.exports={attributes:{title:"Linux Cluster(Part 3)",description:"Cacti, Nagios, Zabbix",tags:["Monitoring"]},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);