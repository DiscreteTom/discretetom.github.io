(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1161:function(e,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),_("p",[e._v("本文是观看"),_("a",{attrs:{href:"https://www.bilibili.com/video/BV1Y4411B7jy"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),_("h2",{attrs:{id:"hbase"}},[e._v("HBase")]),e._v(" "),_("h3",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),_("ul",[_("li",[e._v("分布式、可扩展、支持海量数据的NoSQL数据库")]),e._v(" "),_("li",[e._v("基于谷歌的Big Table论文")]),e._v(" "),_("li",[e._v("数据量越大，优势越明显")]),e._v(" "),_("li",[e._v("读比写慢")]),e._v(" "),_("li",[e._v("作为一个存储引擎，可以和已有的分析引擎/计算引擎进行集成，比如MapReduce/Hive/Spark")])]),e._v(" "),_("h3",{attrs:{id:"数据模型"}},[e._v("数据模型")]),e._v(" "),_("ul",[_("li",[e._v("逻辑上\n"),_("ul",[_("li",[e._v("和关系型数据库很像，有行有列，而且比较稀疏")]),e._v(" "),_("li",[e._v("namespace\n"),_("ul",[_("li",[e._v("类似于mysql中的database。用来隔离数据")]),e._v(" "),_("li",[e._v("两个自带的命名空间\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("hbase")]),e._v("保存HBase内置的表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("default")]),e._v("默认命名空间")])])]),e._v(" "),_("li",[e._v("表的名字是"),_("code",{pre:!0},[e._v("<namespace>:<table>")])])])]),e._v(" "),_("li",[e._v("表。类似于mysql中的table\n"),_("ul",[_("li",[e._v("一个表会根据row key的字典序被横向切分为多个region")])])]),e._v(" "),_("li",[e._v("region（切片）\n"),_("ul",[_("li",[e._v("表的横向切片，每个region包含一个row key的范围")])])]),e._v(" "),_("li",[e._v("row key（行键）\n"),_("ul",[_("li",[e._v("是每行数据的唯一ID")]),e._v(" "),_("li",[_("strong",[e._v("字典序")])])])]),e._v(" "),_("li",[e._v("column family（列族）\n"),_("ul",[_("li",[e._v("包含多个列，也可以一个列。是表的纵向切片")]),e._v(" "),_("li",[e._v("一个表的不同列划分到不同的列族")]),e._v(" "),_("li",[e._v("创建表的时候只需要指明列族即可，不需要声明具体的列。所以写数据的时候，列可以动态指定")]),e._v(" "),_("li",[e._v("不同的列族在不同的文件夹下存储")]),e._v(" "),_("li",[e._v("一个列族被横向拆分为多个store，分布在不同region上")]),e._v(" "),_("li",[e._v("官方建议生产环境只有一个列族，避免多个列族数据稀疏不同，导致在flush的时候产生过多小文件")])])]),e._v(" "),_("li",[e._v("cell（单元格）\n"),_("ul",[_("li",[e._v("由row key, column family, column qualifier, timestamp唯一确定的单元")]),e._v(" "),_("li",[e._v("无类型，物理上以字节数组的形式存储")])])]),e._v(" "),_("li",[e._v("store\n"),_("ul",[_("li",[e._v("一个二维表会被根据列族和region进行划分成若干个store，存储在不同HDFS文件中")]),e._v(" "),_("li",[e._v("store在HDFS中表现为文件夹，里面是每次flush下来的文件或者合并之后的文件")])])])])]),e._v(" "),_("li",[e._v("底层/物理上\n"),_("ul",[_("li",[e._v("是k/v存储，类似于multi-dimensional map")]),e._v(" "),_("li",[e._v("每一行包含\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("row key")]),e._v("行键")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("column family")]),e._v("列族")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("column qualifier")]),e._v("列名")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("timestamp")]),e._v("时间戳")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("type")]),e._v("事件类型")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("value")]),e._v("值")])])]),e._v(" "),_("li",[e._v("因为"),_("strong",[e._v("时间戳、事件类型")]),e._v("的存在，可以像时序数据库一样持续append数据，最后汇总得到结果")]),e._v(" "),_("li",[e._v("因为存在时间戳，可以查询某个时间/时间段的数据")]),e._v(" "),_("li",[e._v("刚写的数据先保存在内存中，然后定时刷到HDFS的文件中")]),e._v(" "),_("li",[e._v("可以给列族设置版本数量上限，使其能够保存多个版本的数据")]),e._v(" "),_("li",[e._v("由于需要根据时间戳合并数据，所以读比写慢")]),e._v(" "),_("li",[e._v("HDFS中的目录结构："),_("code",{pre:!0},[e._v("/HBase/data/<namespace>/<table>/<region>/<column family>/<store files>")])])])])]),e._v(" "),_("h3",{attrs:{id:"架构"}},[e._v("架构")]),e._v(" "),_("ul",[_("li",[e._v("Zookeeper集群\n"),_("ul",[_("li",[e._v("负责管理HBase集群")]),e._v(" "),_("li",[e._v("DDL之外的语句，可以通过ZK直接发往Region Server而不经过Master节点")])])]),e._v(" "),_("li",[e._v("Master节点\n"),_("ul",[_("li",[e._v("负责表级别的管理(DDL)")]),e._v(" "),_("li",[e._v("支持的操作\n"),_("ul",[_("li",[e._v("对表进行create/delete/alter")]),e._v(" "),_("li",[e._v("监控每个region server")]),e._v(" "),_("li",[e._v("分配region到region server")])])]),e._v(" "),_("li",[e._v("如果master挂了，只是DDL无法执行。操作数据的DML仍然可以对region server执行")]),e._v(" "),_("li",[e._v("自带高可用，基于Zookeeper实现")])])]),e._v(" "),_("li",[e._v("Region Server\n"),_("ul",[_("li",[e._v("管理一个HLog和多个region")]),e._v(" "),_("li",[e._v("HLog是WAL(Write Ahead Log)预写入日志，类似于MySQL redo log。数据写入内存而没有落盘时，先在HLog中记录，防止断电丢失")]),e._v(" "),_("li",[e._v("负责region级别的操作，或者说对数据的操作(DML)")]),e._v(" "),_("li",[e._v("支持的操作\n"),_("ul",[_("li",[e._v("对data执行get/put/delete")]),e._v(" "),_("li",[e._v("对region执行split/compact")])])]),e._v(" "),_("li",[e._v("region包含多个store")]),e._v(" "),_("li",[e._v("store管理多个store file(HFile格式，内部是kv)并管理一个mem store(内存存储，用来保存新数据)\n"),_("ul",[_("li",[e._v("内存数据在一段时间后会被刷到HFile")]),e._v(" "),_("li",[e._v("HFile在HDFS上")])])])])])]),e._v(" "),_("h3",{attrs:{id:"流程"}},[e._v("流程")]),e._v(" "),_("h4",{attrs:{id:"写数据和flush"}},[e._v("写数据和Flush")]),e._v(" "),_("ol",[_("li",[e._v("客户端请求ZK，查询"),_("code",{pre:!0},[e._v("/hbase/meta-region-server")]),e._v("，得到"),_("code",{pre:!0},[e._v("hbase:meta")]),e._v("表所在的Region Server")]),e._v(" "),_("li",[e._v("客户端请求Region Server，查询"),_("code",{pre:!0},[e._v("get 'hbase:meta', '<table>,<region info>', 'info:server'")]),e._v("，得到要写的表所在的Region Server，并在客户端缓存\n"),_("ol",[_("li",[_("code",{pre:!0},[e._v("hbase:meta")]),e._v("表中会为每个region创建一条记录。这样客户端就能直接查到该往哪个region server写数据")])])]),e._v(" "),_("li",[e._v("客户端向目标表所在的Region Server发出PUT请求\n"),_("ol",[_("li",[e._v("数据先被写到WAL（但先不同步到HDFS）")]),e._v(" "),_("li",[e._v("然后被写入内存MemStore")]),e._v(" "),_("li",[e._v("试图同步WAL到HDFS。如果失败，回滚MemStore")])])]),e._v(" "),_("li",[e._v("Region Server根据时间和数据量的条件，把MemStore中的数据写到HDFS中的HFile中(Store File)\n"),_("ol",[_("li",[_("code",{pre:!0},[e._v("hbase.regionserver.global.memstore.size")]),e._v("可以配置region server的内存被占用多少的时候会停止客户端读写来进行flush\n"),_("ol",[_("li",[e._v("默认值为0.4（即内存的40%）")]),e._v(" "),_("li",[e._v("flush的时候会阻塞客户端的读写")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("hbase.regionserver.global.memstore.size.lower.limit")]),e._v("可以配置region server的内存被占用多少的时候开始flush\n"),_("ol",[_("li",[e._v("默认值为0.95，即"),_("code",{pre:!0},[e._v("hbase.regionserver.global.memstore.size")]),e._v("的95%")]),e._v(" "),_("li",[e._v("假设内存10G，在被占用"),_("code",{pre:!0},[e._v("10G * 0.4 * 0.95 = 3.8G")]),e._v("的时候开始flush所有region的memstore，被占用"),_("code",{pre:!0},[e._v("10G * 0.4 = 4G")]),e._v("的时候停止客户端读写")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("hbase.regionserver.optionalcacheflushinterval")]),e._v("如果超过了这个时间还没有flush，那就启动flush\n"),_("ol",[_("li",[e._v("单位毫秒，默认3600000，即1小时")]),e._v(" "),_("li",[e._v("从最后一次编辑事件开始算起")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("hbase.hregion.memstore.flush.size")]),e._v("region级别的flush阈值\n"),_("ol",[_("li",[e._v("默认134217728，即128MiB")]),e._v(" "),_("li",[e._v("仅flush一个region")])])]),e._v(" "),_("li",[e._v("每次flush会为region生成一个文件，等待compact进行合并。而不是在flush阶段就直接进行合并")])])])]),e._v(" "),_("blockquote",[_("p",[e._v("老版本的HBase担心meta表也会因为太大而切分，所以又设置了一个"),_("code",{pre:!0},[e._v("-root-")]),e._v("表用来保存meta表的信息，并把root表保存在ZK中。后来实际生产环境发现meta表通常不会膨胀到需要切分的程度，并设置meta表无法被切分")])]),e._v(" "),_("h4",{attrs:{id:"读数据"}},[e._v("读数据")]),e._v(" "),_("ol",[_("li",[e._v("客户端请求ZK，查询"),_("code",{pre:!0},[e._v("/hbase/meta-region-server")]),e._v("，得到"),_("code",{pre:!0},[e._v("hbase:meta")]),e._v("表所在的Region Server")]),e._v(" "),_("li",[e._v("客户端请求Region Server，查询"),_("code",{pre:!0},[e._v("get 'hbase:meta', '<table>,<region info>', 'info:server'")]),e._v("，得到要写的表所在的Region Server，并在客户端缓存")]),e._v(" "),_("li",[e._v("客户端向目标表所在的Region Server发出GET请求\n"),_("ol",[_("li",[e._v("store的StoreFile会在Region Server的磁盘上保留一个block cache\n"),_("ol",[_("li",[e._v("基于LRU（最近最少访问，使用Linked Hash Map实现）进行缓存过期")])])]),e._v(" "),_("li",[e._v("根据时间戳进行合并block cache和memcache里面的数据得到结果")]),e._v(" "),_("li",[e._v("所以HBase每次GET都需要查磁盘上的block cache（如果磁盘没有，甚至还要查HDFS），导致读取比较慢")])])])]),e._v(" "),_("h4",{attrs:{id:"compact"}},[e._v("Compact")]),e._v(" "),_("p",[e._v("定期合并小文件。Compact分两种：")]),e._v(" "),_("ul",[_("li",[e._v("minor\n"),_("ul",[_("li",[e._v("合并小的、相邻的HFile文件为一个较大的HFile，"),_("strong",[e._v("不会")]),e._v(" 清理过期数据和删除的数据")])])]),e._v(" "),_("li",[e._v("major\n"),_("ul",[_("li",[e._v("把一个Store下面所有的HFile合并为一个大HFile，并清理过期/删除的数据")]),e._v(" "),_("li",[e._v("通常用major合并多一些")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("hbase.hregion.majorcompaction")]),e._v("配置合并时间。默认604800000（7天）\n"),_("ul",[_("li",[e._v("major compaction很耗资源，生产环境建议关闭，设置为0，然后在空闲时间手动触发")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("hbase.hregion.majorcompaction.jitter")]),e._v("合并时间抖动比例。默认0.50，即50%的抖动比例")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("hbase.hstore.compactionThreshold")]),e._v("一个store里面允许的文件个数。达到这个个数就会触发合并（但是延迟比较高）。默认3")])])])]),e._v(" "),_("h4",{attrs:{id:"清理数据"}},[e._v("清理数据")]),e._v(" "),_("ul",[_("li",[e._v("flush的时候，清理memstore中被新版本覆盖的数据，然后清空memstore\n"),_("ul",[_("li",[e._v("flush的时候，如果memstore中的数据被标记删除，则仍然会把删除标记给flush到HDFS，因为可能需要删除HDFS上的数据")])])]),e._v(" "),_("li",[e._v("major compact的时候，清理被删除（有删除标记）或者过期的数据，包括HFile里面被新版本覆盖的数据")])]),e._v(" "),_("h4",{attrs:{id:"数据分片"}},[e._v("数据分片")]),e._v(" "),_("ul",[_("li",[e._v("0.94版本之前\n"),_("ul",[_("li",[e._v("一个region的某个store的所有StoreFile总大小超过"),_("code",{pre:!0},[e._v("hbase.hregion.max.filesize")]),e._v("的时候拆分。默认10G")])])]),e._v(" "),_("li",[e._v("0.94之后\n"),_("ul",[_("li",[e._v("一个region的某个store的所有StoreFile总大小超过"),_("code",{pre:!0},[e._v("Min(R^2 * hbase.hregion.memstore.flush.size, hbase.hregion.max.filesize)")]),e._v("的时候拆分。R为当前Table的Region数量")]),e._v(" "),_("li",[e._v("Table只有一个region的时候，默认值为128M")]),e._v(" "),_("li",[e._v("切分的时候，按照Row key取中间值进行切分。")]),e._v(" "),_("li",[e._v("可能会存在数据倾斜\n"),_("ul",[_("li",[e._v("一个分区64M，一个分区10G")]),e._v(" "),_("li",[e._v("解决方案：建表的时候预分区")])])])])])]),e._v(" "),_("h3",{attrs:{id:"常见命令"}},[e._v("常见命令")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("hbash shell")]),e._v("进入交互式命令行\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("help")]),e._v("查看命令帮助\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("help <cmd>")]),e._v("查看命令帮助")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("help <cmd-group>")]),e._v("查看一组命令的帮助\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("help general")]),e._v("查看常见命令")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("help ddl")]),e._v("查看DDL命令")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("help dml")]),e._v("查看DML命令")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("help namespace")]),e._v("查看名称空间相关命令")])])])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("list")]),e._v("列出表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("describe <table>")]),e._v("查看表详细信息")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("create '<table>','<column>',...,'<column>'")]),e._v("创建表\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("create 'student','info'")]),e._v("在默认名称空间建表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("create 'xxx:student','info'")]),e._v("在"),_("code",{pre:!0},[e._v("xxx")]),e._v("名称空间建表")]),e._v(" "),_("li",[e._v("一个表至少有一个列")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("alter '<table>',{<key>=>'<value>',...,<key>=>'<value>'}")]),e._v("修改列的属性\n"),_("ul",[_("li",[e._v("会修改所有region")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("alter 'student', {NAME=>'info', VERSIONS=>2}")]),e._v(" "),_("ul",[_("li",[e._v("修改"),_("code",{pre:!0},[e._v("student")]),e._v("表的"),_("code",{pre:!0},[e._v("info")]),e._v("列族，使其能够保存2个版本的数据")])])])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("disable '<table>'")]),e._v("禁用表。禁用之后才能删除表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("drop '<table>'")]),e._v("删除表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("list/create/drop_namespace")]),e._v("执行namespace级别的操作")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("put '<table>', '<row key>', '<column>', '<value>'")]),e._v("写数据/改数据\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("put 'student', '1001', 'info:name', 'xxx'")]),e._v(" "),_("ul",[_("li",[e._v("向"),_("code",{pre:!0},[e._v("student")]),e._v("表写数据")]),e._v(" "),_("li",[e._v("row key为"),_("code",{pre:!0},[e._v("1001")])]),e._v(" "),_("li",[e._v("数据写在"),_("code",{pre:!0},[e._v("info")]),e._v("列的"),_("code",{pre:!0},[e._v("name")]),e._v("维度")]),e._v(" "),_("li",[e._v("值为"),_("code",{pre:!0},[e._v("xxx")])])])])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("scan")]),e._v("扫描全表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("get")]),e._v("查询数据")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("delete")]),e._v("删除数据的某个列")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("truncate")]),e._v("清空表")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("deleteall")]),e._v("删除一个row key对应的数据（删除一行）")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("flush")]),e._v("落盘（到HDFS）")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("compact")]),e._v("合并文件")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("major_compact")]),e._v("执行major合并")])])])]),e._v(" "),_("h2",{attrs:{id:"优化"}},[e._v("优化")]),e._v(" "),_("ul",[_("li",[e._v("预分区")]),e._v(" "),_("li",[e._v("row key的设计\n"),_("ul",[_("li",[e._v("随机数")]),e._v(" "),_("li",[e._v("哈希值")]),e._v(" "),_("li",[e._v("散列值")]),e._v(" "),_("li",[e._v("字符串反转")]),e._v(" "),_("li",[e._v("字符串拼接")])])])]),e._v(" "),_("p",[e._v("详见视频")])])}]};e.exports={attributes:{title:"Big Data(Part 5)",description:"HBase",tags:["Hadoop"]},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);