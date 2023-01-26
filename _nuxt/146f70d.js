(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1300:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"redis概述"}},[v._v("Redis概述")]),v._v(" "),e("ul",[e("li",[v._v("内存k-v数据库，使用C语言编写，非常快，但是断电后内存中数据丢失（可以通过持久化数据避免数据丢失）")]),v._v(" "),e("li",[v._v("通常用来做SQL数据库的缓存。也可以单独拿来做内存数据库，或者用来生成分布式唯一主键、实现分布式锁、队列等")]),v._v(" "),e("li",[v._v("主进程是单线程的，所有数据操作都不会被并行处理。在执行持久化等操作的时候才会fork出子进程")]),v._v(" "),e("li",[v._v("可以使用管道(pipe)实现简单的事务。也可以用来执行批量操作，提升操作速度")])]),v._v(" "),e("h2",{attrs:{id:"持久化方式"}},[v._v("持久化方式")]),v._v(" "),e("h3",{attrs:{id:"rdb"}},[v._v("RDB")]),v._v(" "),e("ul",[e("li",[v._v("默认位置：在启动redis服务端的目录中的"),e("code",{pre:!0},[v._v("dump.rdb")])]),v._v(" "),e("li",[v._v("使用二进制的形式保存内存中保存的数据")]),v._v(" "),e("li",[v._v("触发方式\n"),e("ul",[e("li",[v._v("手动触发\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("SAVE")]),v._v("使用主进程进行持久化，会block操作")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("BGSAVE")]),v._v("使用fork创建子进程进行持久化，主进程不受影响")])])]),v._v(" "),e("li",[e("strong",[v._v("在Redis中")]),v._v("执行"),e("code",{pre:!0},[v._v("SHUTDOWN")]),v._v("时，如果没有配置AOF，则会触发持久化")]),v._v(" "),e("li",[v._v("执行"),e("code",{pre:!0},[v._v("FLUSHALL")]),v._v("时会触发，把RDB文件清空")]),v._v(" "),e("li",[v._v("根据配置文件定时触发\n"),e("ul",[e("li",[v._v("默认值\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("save 900 1")]),v._v(" - 900秒内有1次写入时，保存")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("save 300 10")]),v._v(" - 300秒内有10次写入时，保存")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("save 60 10000")]),v._v(" - 60秒内有10000次写入时，保存")])])]),v._v(" "),e("li",[v._v("如果开了主从配置，通常会关闭主节点的定时保存功能")])])])])])]),v._v(" "),e("h3",{attrs:{id:"aof"}},[v._v("AOF")]),v._v(" "),e("p",[v._v("Append-Only File")]),v._v(" "),e("p",[v._v("有点类似于时序数据库或MySQL的binlog。AOF文件会把写操作以"),e("strong",[v._v("字符串")]),v._v("保存在文件中")]),v._v(" "),e("ul",[e("li",[v._v("触发机制：编辑配置文件\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("no")]),v._v(" - 由操作系统触发，无法保证数据的持久化")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("always")]),v._v(" - 记录每一个写操作")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("everysec")]),v._v(" - 每秒保存一次。默认值。"),e("strong",[v._v("推荐")])])])]),v._v(" "),e("li",[v._v("AOF重写：AOF文件过大时，合并AOF中的信息以减少AOF文件\n"),e("ul",[e("li",[v._v("如果使用的redis版本较新，AOF文件可能会使用混合存储模式，使用RDB格式保存部分数据以进一步减少AOF文件大小(4.0版本引入混合存储，5.0版本默认使用混合存储)")])])])]),v._v(" "),e("p",[v._v("使用默认配置的AOF，数据最多只会丢失2s，比RDB丢失的数据更少。")]),v._v(" "),e("h3",{attrs:{id:"数据恢复"}},[v._v("数据恢复")]),v._v(" "),e("p",[v._v("启动redis时，如果启动了AOF且目录下存在AOF文件则加载AOF文件。如果没有AOF文件且启动了RDB则加载RDB文件。如果都没有，则以空内容启动")]),v._v(" "),e("h2",{attrs:{id:"redis常见问题"}},[v._v("Redis常见问题")]),v._v(" "),e("h3",{attrs:{id:"缓存雪崩"}},[v._v("缓存雪崩")]),v._v(" "),e("p",[v._v("大量缓存数据在同一时间失效，导致大量查询请求同时直接打到数据库")]),v._v(" "),e("p",[v._v("解决方案：")]),v._v(" "),e("ul",[e("li",[v._v("使用随机TTL")]),v._v(" "),e("li",[v._v("不使用TTL")]),v._v(" "),e("li",[v._v("使用定时任务刷TTL")])]),v._v(" "),e("h3",{attrs:{id:"缓存穿透"}},[v._v("缓存穿透")]),v._v(" "),e("p",[v._v("使用不合法参数，使缓存必定miss，从而直接把压力施加到数据库。比如数据库里面的id都是大于0的，使用小于0的id在redis里面查询必定会导致缓存miss，从而直接在数据库查询")]),v._v(" "),e("p",[v._v("解决方案：")]),v._v(" "),e("ul",[e("li",[v._v("应用层参数验证、WAF")]),v._v(" "),e("li",[v._v("封锁恶意用户IP")]),v._v(" "),e("li",[v._v("使用布隆过滤器(Bloom Filter)")])]),v._v(" "),e("h3",{attrs:{id:"缓存击穿"}},[v._v("缓存击穿")]),v._v(" "),e("p",[v._v("热点数据过期，会有大量请求直接打到数据库。比如电商秒杀场景")]),v._v(" "),e("p",[v._v("解决方案：")]),v._v(" "),e("ul",[e("li",[v._v("不使用TTL")]),v._v(" "),e("li",[v._v("如果是单体应用，可以使用分布式锁\n"),e("ul",[e("li",[v._v("多个线程争夺一个互斥锁。拿到锁的线程负责访问数据库并更新到Redis，其他线程短暂sleep后重新访问Redis而不是数据库。这样就只会有一个请求打到数据库")])])])]),v._v(" "),e("h2",{attrs:{id:"主从复制"}},[v._v("主从复制")]),v._v(" "),e("ul",[e("li",[v._v("leader/follower(master/slave)架构\n"),e("ul",[e("li",[v._v("一个主库可以有多个从库(replica)")]),v._v(" "),e("li",[v._v("从库可以有从库(sub-replica)，形成级联架构")]),v._v(" "),e("li",[v._v("从4.0开始，从库的从库会收到和从库一样的来自主库的指令流。所以即使向从库写数据，从库的从库也不会同步这些数据")])])]),v._v(" "),e("li",[v._v("从库会试图维持和主库完全一致")]),v._v(" "),e("li",[v._v("主库会向从库输出一个指令流(a stream of commands)")]),v._v(" "),e("li",[v._v("连接断开时从库会主动尝试重连\n"),e("ul",[e("li",[v._v("重连后会试图仅获取断开连接后丢失的指令流(部分同步，partial resynchronization)")]),v._v(" "),e("li",[v._v("如果部分同步无法实现，从库会申请全量同步(full resynchronization)\n"),e("ul",[e("li",[v._v("主库会对当前状态进行快照并发送给从库。然后继续同步指令流")])])])])]),v._v(" "),e("li",[v._v("默认使用异步复制，从而保证低延迟、高性能。主库不会被阻塞")]),v._v(" "),e("li",[v._v("可以对主库使用"),e("code",{pre:!0},[v._v("WAIT")]),v._v("命令来等待复制完毕（触发同步复制）")]),v._v(" "),e("li",[v._v("从库可以用来实现持久化，即主库不负责持久化，仅从库持久化\n"),e("ul",[e("li",[e("strong",[v._v("这会有些危险")]),v._v("：如果主库重启，主库是没有数据的，如果从库从主库同步数据，从库的数据也会丢失")])])]),v._v(" "),e("li",[v._v("从库对主库使用"),e("code",{pre:!0},[v._v("PSYNC")]),v._v("命令请求复制\n"),e("ul",[e("li",[v._v("在从库的配置文件中写入"),e("code",{pre:!0},[v._v("replicaof <ip> <port>")]),v._v("即可")]),v._v(" "),e("li",[v._v("或者对从库执行"),e("code",{pre:!0},[v._v("REPLICAOF")]),v._v("命令")]),v._v(" "),e("li",[v._v("老版本的redis使用"),e("code",{pre:!0},[v._v("SYNC")]),v._v("命令。它的协议比较老，且不支持部分同步")])])]),v._v(" "),e("li",[v._v("只读副本\n"),e("ul",[e("li",[v._v("从2.6开始，副本默认进入只读模式")]),v._v(" "),e("li",[v._v("配置项："),e("code",{pre:!0},[v._v("replica-read-only")])]),v._v(" "),e("li",[v._v("即使向副本中写数据，在进行主从同步时，向从库写入的数据也会丢失")])])]),v._v(" "),e("li",[v._v("鉴权\n"),e("ul",[e("li",[v._v("配置项"),e("code",{pre:!0},[v._v("masterauth <password>")])])])]),v._v(" "),e("li",[v._v("从库在NAT之后\n"),e("ul",[e("li",[v._v("从库连接主库时会使用"),e("code",{pre:!0},[v._v("INFO")]),v._v("命令/"),e("code",{pre:!0},[v._v("ROLE")]),v._v("命令，这两个命令中包含从库的IP地址")]),v._v(" "),e("li",[v._v("如果使用了NAT或者Docker之类的IP/端口映射，那么会导致请求IP和命令中的IP不符")]),v._v(" "),e("li",[v._v("使用"),e("code",{pre:!0},[v._v("replica-announce-ip <ip>")]),v._v("和"),e("code",{pre:!0},[v._v("replica-announce-port <port>")]),v._v("来解决")])])])]),v._v(" "),e("h2",{attrs:{id:"参考"}},[v._v("参考")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://bilibili.com/video/BV1U54y1C7rm"}},[v._v("Redis中两种持久化机制RDB和AOF")])]),v._v(" "),e("li",[e("a",{attrs:{href:"https://bilibili.com/video/BV1f5411b7ux"}},[v._v("什么是Redis缓存雪崩、穿透、击穿")])]),v._v(" "),e("li",[e("a",{attrs:{href:"https://redis.io/topics/replication"}},[v._v("Redis复制(官方文档)")])])])])}]};v.exports={attributes:{title:"Redis相关知识点的总结",description:"RDB/AOF持久化、缓存雪崩、穿透、击穿、主从复制",tags:["Redis"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);