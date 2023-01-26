(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1158:function(e,n){const t={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),t("p",[e._v("本文是观看"),t("a",{attrs:{href:"https://www.bilibili.com/video/BV184411B7kU"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),t("h2",{attrs:{id:"flume"}},[e._v("Flume")]),e._v(" "),t("h3",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),t("ul",[t("li",[e._v("Flume是Cloudera提供的高可用、高可靠、分布式的海量"),t("strong",[e._v("日志")]),e._v("采集、聚合、传输系统\n"),t("ul",[t("li",[e._v("Flume默认是一个单机的程序。通过Avro可以构建集群/分布式")])])]),e._v(" "),t("li",[e._v("基于流式架构，灵活简单")]),e._v(" "),t("li",[e._v("可以监控文件夹/磁盘上的文件变化，也可以监听网络端口")]),e._v(" "),t("li",[e._v("数据目标通常是HDFS和Kafka")]),e._v(" "),t("li",[e._v("监控：Ganglia（已过时）")])]),e._v(" "),t("h3",{attrs:{id:"概念"}},[e._v("概念")]),e._v(" "),t("ul",[t("li",[e._v("Agent\n"),t("ul",[t("li",[e._v("一个JVM进程，采集数据，包括Source/Channel/Sink三大组件")]),e._v(" "),t("li",[e._v("以事件(Event)的形式把数据从source送到sink")])])]),e._v(" "),t("li",[e._v("Source\n"),t("ul",[t("li",[e._v("传输数据/过滤数据")]),e._v(" "),t("li",[e._v("可以自定义Source")]),e._v(" "),t("li",[e._v("常见source包括Avro(RPC框架，用来实现多个Flume级联通信)/Thrift/Exec(监控命令行输出)/SpoolingDirectory/Taildir(监控多个目录)/Kafka/NetCat/Syslog")])])]),e._v(" "),t("li",[e._v("Channel\n"),t("ul",[t("li",[e._v("常见Channel包括：Memory/JDBC/Kafka/File")]),e._v(" "),t("li",[e._v("支持自定义")]),e._v(" "),t("li",[e._v("Memory Channel速度快，但是数据可能丢。File Channel速度比内存慢，但是数据安全，且量大")])])]),e._v(" "),t("li",[e._v("Sink\n"),t("ul",[t("li",[e._v("常见Sink包括HDFS/Hive/Logger(输出到控制台)/Avro/Thrift/Kafka/HBase/FIleRole/ElasticSearch")]),e._v(" "),t("li",[e._v("支持自定义")])])]),e._v(" "),t("li",[e._v("Event\n"),t("ul",[t("li",[e._v("数据基本传输单元")]),e._v(" "),t("li",[e._v("由header和body组成")]),e._v(" "),t("li",[e._v("header是k/v数据。body是二进制数据")])])])]),e._v(" "),t("h3",{attrs:{id:"配置文件"}},[e._v("配置文件")]),e._v(" "),t("pre",{staticClass:"language-bash"},[t("code",{pre:!0,attrs:{class:"language-bash"}},[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# file: netcat-flume-logger.conf")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# configure agent")]),e._v("\na1.sources "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" r1 r2 r3\na1.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" k1\na1.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" c1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# configure source")]),e._v("\na1.sources.r1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" netcat\na1.sources.r1.bind "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" localhost\na1.sources.r1.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4444")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# configure sink")]),e._v("\na1.sinks.k1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" logger\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# configure channel to buffer events in memory")]),e._v("\na1.channels.c1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" memory\na1.channels.c1.capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# number of events")]),e._v("\na1.channels.c1.transactionCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# number of events to be transmitted")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bind source and sink to channel")]),e._v("\na1.sources.r1.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" c1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# one source can send to many channels")]),e._v("\na1.sinks.k1.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" c1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# one sinks can only receive from one channel")]),e._v("\n")])]),e._v(" "),t("h3",{attrs:{id:"命令"}},[e._v("命令")]),e._v(" "),t("ul",[t("li",[t("code",{pre:!0},[e._v("bin/flume-ng agent --conf conf/ --conf-file job/netcat-flume-logger.conf --name a1 -Dflume.root.logger==INFO,console")]),e._v(" "),t("ul",[t("li",[e._v("使用"),t("code",{pre:!0},[e._v("nc localhost 44444")]),e._v("写入数据")]),e._v(" "),t("li",[t("code",{pre:!0},[e._v("agent")]),e._v("表示启动agent，使用"),t("code",{pre:!0},[e._v("--name a1")]),e._v("指定agent名字，全局（多进程）唯一")]),e._v(" "),t("li",[t("code",{pre:!0},[e._v("--conf conf/ --conf-file xxx")]),e._v("指定配置文件的路径和文件名")]),e._v(" "),t("li",[e._v("可以使用"),t("code",{pre:!0},[e._v("source-flume-sink.conf")]),e._v("作为任务配置文件的文件名，比如"),t("code",{pre:!0},[e._v("netcat-flume-logger.conf")])]),e._v(" "),t("li",[t("code",{pre:!0},[e._v("-Dflume.root.logger==INFO,console")]),e._v("定义logger sink的细节。比如数据详细程度为INFO，并输出到控制台")])])])]),e._v(" "),t("h3",{attrs:{id:"示例"}},[e._v("示例")]),e._v(" "),t("ul",[t("li",[e._v("监控本地文件尾部更新\n"),t("ul",[t("li",[e._v("使用"),t("code",{pre:!0},[e._v("Exec")]),e._v("作为source，命令为"),t("code",{pre:!0},[e._v("tail -f xxx")]),e._v("或者"),t("code",{pre:!0},[e._v("tail -F xxx")]),e._v("。使用"),t("code",{pre:!0},[e._v("-F")]),e._v("的tail命令会自动重试\n"),t("ul",[t("li",[e._v("无法保证数据不丢失（比如agent挂掉）")])])])])]),e._v(" "),t("li",[e._v("监听文件夹，有新文件时上传\n"),t("ul",[t("li",[e._v("使用"),t("code",{pre:!0},[e._v("Spooldir")]),e._v("作为source\n"),t("ul",[t("li",[e._v("可以保证数据不丢失，支持断点续传，但是延迟比较高，非实时")])])])])]),e._v(" "),t("li",[e._v("断点续传文件\n"),t("ul",[t("li",[e._v("使用"),t("code",{pre:!0},[e._v("Taildir")]),e._v("作为source\n"),t("ul",[t("li",[e._v("支持断点续传，保证数据不丢失，而且是实时监控")]),e._v(" "),t("li",[e._v("支持监控多个文件夹中的多个文件")])])])])])]),e._v(" "),t("h3",{attrs:{id:"事务"}},[e._v("事务")]),e._v(" "),t("ul",[t("li",[e._v("保证数据一致性")]),e._v(" "),t("li",[e._v("source-channel之间存在事务(put)，channel-sink之间也存在事务(take)")]),e._v(" "),t("li",[e._v("put事务流程\n"),t("ul",[t("li",[e._v("doPut - 把数据写入临时缓冲区putList")]),e._v(" "),t("li",[e._v("doCommit - 检查channel内存队列是否足够合并")]),e._v(" "),t("li",[e._v("doRollback - 如果channel的内存空间不足，则回滚putList")])])]),e._v(" "),t("li",[e._v("take事务流程\n"),t("ul",[t("li",[e._v("doTake - 从channel获取数据到临时缓冲区takeList")]),e._v(" "),t("li",[e._v("doCommit - 如果成功发送数据，则清除takeList")]),e._v(" "),t("li",[e._v("doRollback - 如果数据发送失败，把takeList的数据回滚到channel")])])])]),e._v(" "),t("h3",{attrs:{id:"agent内部工作流"}},[e._v("Agent内部工作流")]),e._v(" "),t("ol",[t("li",[e._v("从Source获取事件")]),e._v(" "),t("li",[e._v("事件被发送到Channel Processor")]),e._v(" "),t("li",[e._v("Channel Processor把事件传递给拦截器(Interceptor)链，用来增强数据")]),e._v(" "),t("li",[e._v("Channel Processor调用Channel Selector，选择事件对应的channel\n"),t("ol",[t("li",[e._v("Replicating Channel Selector(default)，把事件发往所有channel")]),e._v(" "),t("li",[e._v("Multiplexing Channel Selector，把事件发往指定的channel")])])]),e._v(" "),t("li",[e._v("Channel Processor把事件写入Channel")]),e._v(" "),t("li",[e._v("Sink Processor从Channel获取事件\n"),t("ol",[t("li",[e._v("DefaultSinkProcessor")]),e._v(" "),t("li",[e._v("LoadBalancingSinkProcessor\n"),t("ol",[t("li",[e._v("轮询")]),e._v(" "),t("li",[e._v("随机")]),e._v(" "),t("li",[e._v("…")]),e._v(" "),t("li",[e._v("自定义")])])]),e._v(" "),t("li",[e._v("FailoverSinkProcessor")])])]),e._v(" "),t("li",[e._v("Sink Processor把事件发往sink")])]),e._v(" "),t("p",[e._v("Processor都可以自定义。拦截器也可以自定义")]),e._v(" "),t("h3",{attrs:{id:"拓扑结构和集群"}},[e._v("拓扑结构和集群")]),e._v(" "),t("ul",[t("li",[e._v("使用Avro实现级联Flume，实现简单串联")]),e._v(" "),t("li",[e._v("使用一个source对应多个channel，每个channel对应一个sink的方式，实现事件复制、多路复用")]),e._v(" "),t("li",[e._v("使用SinkProcessor实现负载均衡和故障转移")]),e._v(" "),t("li",[e._v("多个Avro Sink指向同一个Avro Source实现事件聚合，也可以多个source指向一个sink")])])])}]};e.exports={attributes:{title:"Big Data(Part 6)",description:"Flume"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);