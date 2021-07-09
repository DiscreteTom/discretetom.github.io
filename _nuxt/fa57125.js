(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1138:function(e,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),_("p",[e._v("本文是观看"),_("a",{attrs:{href:"https://www.bilibili.com/video/BV1Y4411B7jy"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),_("h2",{attrs:{id:"zookeeper"}},[e._v("Zookeeper")]),e._v(" "),_("h3",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),_("ul",[_("li",[e._v("开源、分布式，基于Java\n"),_("ul",[_("li",[e._v("leader/follower模式(master/slave)")]),e._v(" "),_("li",[e._v("只要有"),_("strong",[e._v("半数以上")]),e._v("节点存活，就可以正常工作")]),e._v(" "),_("li",[e._v("全局数据一致。每个节点保存一份相同的数据\n"),_("ul",[_("li",[e._v("因为仅存储配置信息，所以数据量很小")])])])])]),e._v(" "),_("li",[e._v("是一个【分布式服务】管理框架")]),e._v(" "),_("li",[e._v("基于观察者模式（详见设计模式）\n"),_("ul",[_("li",[e._v("存储和管理一些数据")]),e._v(" "),_("li",[e._v("接受观察者的注册")]),e._v(" "),_("li",[e._v("一旦数据状态发生变化，就通知观察者")])])]),e._v(" "),_("li",[e._v("来自客户端的请求被顺序执行")]),e._v(" "),_("li",[e._v("数据更新有原子性，要么成功要么失败")]),e._v(" "),_("li",[e._v("场景\n"),_("ul",[_("li",[e._v("统一命名服务\n"),_("ul",[_("li",[e._v("管理DNS")]),e._v(" "),_("li",[e._v("服务之间使用域名相互通信，由Zookeeper解析IP地址")])])]),e._v(" "),_("li",[e._v("统一配置管理\n"),_("ul",[_("li",[e._v("管理节点上面服务的配置文件")]),e._v(" "),_("li",[e._v("所有节点监听Zookeeper上面的配置文件信息")])])]),e._v(" "),_("li",[e._v("统一集群管理\n"),_("ul",[_("li",[e._v("监听节点状态，同步到其他节点")])])]),e._v(" "),_("li",[e._v("节点动态上下线")]),e._v(" "),_("li",[e._v("软负载均衡\n"),_("ul",[_("li",[e._v("在Zookeeper中记录每台机器的访问量。使访问量最少的机器处理新的客户端请求")])])])])])]),e._v(" "),_("h3",{attrs:{id:"数据结构"}},[e._v("数据结构")]),e._v(" "),_("ul",[_("li",[e._v("类似于文件系统，是树形结构")]),e._v(" "),_("li",[e._v("每个节点称为一个"),_("code",{pre:!0},[e._v("ZNode")]),e._v(" "),_("ul",[_("li",[e._v("每个ZNode都有一个唯一的路径")]),e._v(" "),_("li",[e._v("每个ZNode默认可以保存1MB的数据")])])])]),e._v(" "),_("h3",{attrs:{id:"原理"}},[e._v("原理")]),e._v(" "),_("h4",{attrs:{id:"选举机制"}},[e._v("选举机制")]),e._v(" "),_("ul",[_("li",[e._v("半数机制：集群中半数以上机器存活，则集群可用\n"),_("ul",[_("li",[e._v("所以Zookeeper适合安装在奇数台机器上")])])]),e._v(" "),_("li",[e._v("通过内部选举机制，临时产生leader，而不是手动指定")])]),e._v(" "),_("p",[e._v("选举过程：")]),e._v(" "),_("ol",{attrs:{start:"0"}},[_("li",[e._v("假设集群中有5台机器")]),e._v(" "),_("li",[e._v("机器A启动，在集群广播消息，无响应，所以把自己编号设置为1，并投票给编号最大的机器（A）。目前A有1票，所以不是leader")]),e._v(" "),_("li",[e._v("机器B启动，在集群广播消息，A响应，所以把自己的编号设置为2。A和B都投票给编号最大的机器（B）。目前B有2票，不是leader")]),e._v(" "),_("li",[e._v("机器C启动，在集群广播消息，AB响应，所以把自己的编号设置为3。ABC都投票给编号最大的机器（C）。目前C有3票，成为leader")]),e._v(" "),_("li",[e._v("机器DE启动，在集群广播消息，得到响应，设置自己的编号。由于C已经是leader，所以不再竞选leader")])]),e._v(" "),_("h4",{attrs:{id:"节点类型"}},[e._v("节点类型")]),e._v(" "),_("ul",[_("li",[e._v("持久(persistent)\n"),_("ul",[_("li",[e._v("客户端和服务器断开连接后，创建的节点不删除")])])]),e._v(" "),_("li",[e._v("持久且编号(persistent sequential)\n"),_("ul",[_("li",[e._v("客户端和服务器断开连接后，创建的节点不删除，且在节点名称中添加一个递增编号")]),e._v(" "),_("li",[e._v("编号由父节点维护，实现递增")]),e._v(" "),_("li",[e._v("编号可以用来对事件进行排序")]),e._v(" "),_("li",[e._v("带编号的节点可以同名。因为它们的id中带有唯一的编号")])])]),e._v(" "),_("li",[e._v("短暂(ephemeral)\n"),_("ul",[_("li",[e._v("客户端和服务器断开连接后（会话结束时），创建的节点自己删除")])])]),e._v(" "),_("li",[e._v("短暂且编号。略")])]),e._v(" "),_("h4",{attrs:{id:"stat结构体"}},[e._v("Stat结构体")]),e._v(" "),_("ul",[_("li",[e._v("每个节点都有一个stat结构体。有点类似于linux文件系统的stat")]),e._v(" "),_("li",[e._v("内容\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("cZxid")]),e._v("创建节点的事务的id\n"),_("ul",[_("li",[e._v("每次修改ZK状态都会收到一个zxid形式的时间戳，也就是zookeeper事务ID")]),e._v(" "),_("li",[e._v("每次修改都有唯一的zxid")]),e._v(" "),_("li",[e._v("如果zxid-1小于zxid-2，那么zxid-1在zxid-2之前发生")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("ctime")]),e._v("节点被创建的时间（从1970年开始，毫秒）")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("mZxid")]),e._v("最后一次修改节点的事务的id")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("mtime")]),e._v("最后一次修改节点的时间")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("pZxid")]),e._v("最后更新的子节点的事务的id")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("cVersion")]),e._v("子节点修改次数")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("dataVersion")]),e._v("节点数据修改次数")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("aclVersion")]),e._v("访问控制列表修改次数")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("ephemeralOwner")]),e._v("临时节点的拥有者的会话ID。如果不是临时节点就是0")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("dataLength")]),e._v("节点数据长度")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("numChildren")]),e._v("子节点数量")])])])]),e._v(" "),_("h3",{attrs:{id:"监听器原理"}},[e._v("监听器原理")]),e._v(" "),_("ol",[_("li",[e._v("客户端创建两个线程：负责主动网络通信的线程"),_("code",{pre:!0},[e._v("connect")]),e._v("和负责监听的线程"),_("code",{pre:!0},[e._v("listener")])]),e._v(" "),_("li",[e._v("客户端通过connect线程把【注册监听】事件发送给ZK服务器。服务器记录"),_("code",{pre:!0},[e._v("<client>:<ip>:<port>:<path>")])]),e._v(" "),_("li",[e._v("出现事件时，ZK服务器主动向listener线程汇报事件")]),e._v(" "),_("li",[e._v("客户端调用"),_("code",{pre:!0},[e._v("process")]),e._v("方法处理事件")])]),e._v(" "),_("h3",{attrs:{id:"写数据流程"}},[e._v("写数据流程")]),e._v(" "),_("ol",[_("li",[e._v("客户端向ZK服务器1写数据")]),e._v(" "),_("li",[e._v("如果服务器1不是leader，就把消息发送给leader")]),e._v(" "),_("li",[e._v("leader把消息广播给各个server")]),e._v(" "),_("li",[e._v("每个server写成功后会通知leader")]),e._v(" "),_("li",[e._v("如果大多数server写成功了，就说明数据写成功了。写成功之后，leader会通知服务器1写成功了")]),e._v(" "),_("li",[e._v("服务器1通知客户端写成功")])]),e._v(" "),_("h3",{attrs:{id:"命令"}},[e._v("命令")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("bin/zkServer.sh start|status|stop")]),e._v("启动本地模式服务端")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("bin/zkCli.sh")]),e._v("启动命令行工具\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("ls")]),e._v("查看数据树\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("watch")]),e._v("监听")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("ls2")]),e._v("查看详细数据。在新版本中推荐使用"),_("code",{pre:!0},[e._v("ls -s")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("create")]),e._v("创建普通持久节点\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("-s")]),e._v("带有编号的节点")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-e")]),e._v("临时节点（重启或者超时消失）")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("get/set")]),e._v("读取/写入节点的值")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("stat")]),e._v("查看节点状态\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("watch")]),e._v("监听")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("delete")]),e._v("删除节点")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("rmr")]),e._v("递归删除")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("help")]),e._v("查看命令")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("quit")]),e._v("退出")])])])]),e._v(" "),_("h3",{attrs:{id:"主要配置项"}},[e._v("主要配置项")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 心跳（毫秒）")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("tickTime")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("2000")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 初次同步最多花费几次心跳。如果超时，则认为此follower离线")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("initLimit")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 集群正常状态每次同步最多花费几次心跳")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("syncLimit")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 数据目录")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("dataDir")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/opt/module/zookeeper-x.x.x/zkData\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 客户端连接服务器时连接的端口（服务端端口）")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("clientPort")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v("\n")])]),e._v(" "),_("h3",{attrs:{id:"配置集群"}},[e._v("配置集群")]),e._v(" "),_("ol",[_("li",[e._v("安装软件")]),e._v(" "),_("li",[e._v("配置机器编号：在数据目录（即配置文件里面的"),_("code",{pre:!0},[e._v("dataDir")]),e._v("）下创建一个"),_("code",{pre:!0},[e._v("myid")]),e._v("文件，里面写上编号(id)\n"),_("ol",[_("li",[e._v("每个机器的编号都不同，通常是从1开始的数字")])])]),e._v(" "),_("li",[e._v("修改配置文件"),_("code",{pre:!0},[e._v("zoo.cfg")]),e._v("。添加"),_("code",{pre:!0},[e._v("server.<id>=<hostname>:<port-1>:<port-2>")]),e._v(" "),_("ol",[_("li",[_("code",{pre:!0},[e._v("port-1")]),e._v("是此机器和集群leader交换数据副本的端口.比如2888")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("port-2")]),e._v("是此机器用来进行选举的端口。比如3888")])])]),e._v(" "),_("li",[e._v("启动各机器上面的ZK服务器")])])])}]};e.exports={attributes:{title:"Big Data(Part 4)",description:"Zookeeper",tags:["Hadoop"]},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);