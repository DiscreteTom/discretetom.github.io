(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1184:function(e,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),_("p",[e._v("本文是观看"),_("a",{attrs:{href:"https://www.bilibili.com/video/bv164411J761"}},[e._v("此视频")]),e._v("时整理的笔记。")]),e._v(" "),_("h2",{attrs:{id:"mysql"}},[e._v("MySQL")]),e._v(" "),_("h3",{attrs:{id:"存储引擎"}},[e._v("存储引擎")]),e._v(" "),_("p",[e._v("定义数据库软件的逻辑层实现方式，是基于表的而不是基于库的，所以也可以被称为表类型")]),e._v(" "),_("p",[e._v("MySQL提供了插件式的存储引擎架构，所以可以支持多种引擎：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("MYISAM")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("默认引擎")])]),e._v(" "),_("li",[e._v("插入和查询较快")]),e._v(" "),_("li",[e._v("支持全文索引")]),e._v(" "),_("li",[_("strong",[e._v("不支持事务")]),e._v("、行级锁、外键约束等功能")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("INNODB")]),e._v(" "),_("ul",[_("li",[e._v("支持事务、行级锁、外键等功能")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("MEMORY")]),e._v(" "),_("ul",[_("li",[e._v("工作在内存中，通过哈希保存数据，高速但非持久")])])])]),e._v(" "),_("h3",{attrs:{id:"软件"}},[e._v("软件")]),e._v(" "),_("ul",[_("li",[e._v("客户端："),_("code",{pre:!0},[e._v("mysql")])]),e._v(" "),_("li",[e._v("服务端："),_("code",{pre:!0},[e._v("mysql-server")]),e._v(" "),_("ul",[_("li",[e._v("服务名："),_("code",{pre:!0},[e._v("mysqld")])]),e._v(" "),_("li",[e._v("端口3306")]),e._v(" "),_("li",[e._v("主配置文件"),_("code",{pre:!0},[e._v("/etc/my.cnf")])]),e._v(" "),_("li",[e._v("初始化脚本"),_("code",{pre:!0},[e._v("mysql_install_db")])]),e._v(" "),_("li",[e._v("常用启动命令"),_("code",{pre:!0},[e._v("mysqld_safe")])]),e._v(" "),_("li",[e._v("数据目录"),_("code",{pre:!0},[e._v("/var/lib/mysql")])]),e._v(" "),_("li",[e._v("socket文件"),_("code",{pre:!0},[e._v("/var/lib/mysql/mysql.sock")])]),e._v(" "),_("li",[e._v("进程文件"),_("code",{pre:!0},[e._v("/var/run/mysqld/mysqld.pid")])])])])]),e._v(" "),_("h3",{attrs:{id:"常见命令"}},[e._v("常见命令")]),e._v(" "),_("ul",[_("li",[e._v("设置管理员密码"),_("code",{pre:!0},[e._v("mysqladmin -u<username> password <password>")]),e._v(" "),_("ul",[_("li",[e._v("例："),_("code",{pre:!0},[e._v("mysqladmin -uroot password 123123")])])])]),e._v(" "),_("li",[e._v("登录"),_("code",{pre:!0},[e._v("mysql -u<username> -p<password> -h <host> -P <port> -S <socket-file>")]),e._v(" "),_("ul",[_("li",[e._v("使用"),_("code",{pre:!0},[e._v("exit")]),e._v("或"),_("code",{pre:!0},[e._v("Ctrl+D")]),e._v("退出")])])])]),e._v(" "),_("p",[e._v("管理员修改密码流程：")]),e._v(" "),_("ol",[_("li",[e._v("停止数据库")]),e._v(" "),_("li",[e._v("修改主配置文件"),_("code",{pre:!0},[e._v("/etc/my.cnf")]),e._v("，添加"),_("code",{pre:!0},[e._v("skip-grant-tables")])]),e._v(" "),_("li",[e._v("启动数据库，不需要密码登录")]),e._v(" "),_("li",[e._v("修改密码："),_("code",{pre:!0},[e._v("update mysql.user set password=password('123123') where user='root';")])]),e._v(" "),_("li",[e._v("然后删除配置文件里面的"),_("code",{pre:!0},[e._v("skip-grant-tables")]),e._v("，重启数据库")])]),e._v(" "),_("p",[e._v("登录之后：")]),e._v(" "),_("ul",[_("li",[e._v("创建用户"),_("code",{pre:!0},[e._v("create user <username>@'<cidr>' identified by '<password>';")]),e._v(" "),_("ul",[_("li",[e._v("例："),_("code",{pre:!0},[e._v("create user user1@'192.168.%' identified by '123123';")]),e._v(" "),_("ul",[_("li",[e._v("其中在"),_("code",{pre:!0},[e._v("cidr")]),e._v("部分可以使用"),_("code",{pre:!0},[e._v("%")]),e._v("表示某个CIDR")])])])])]),e._v(" "),_("li",[e._v("修改自己的密码"),_("code",{pre:!0},[e._v("set password=password('123123')")]),e._v(" "),_("ul",[_("li",[e._v("管理员修改别人的密码"),_("code",{pre:!0},[e._v("set password for <username>@'<cidr>'=password('<password>)")])])])])]),e._v(" "),_("h3",{attrs:{id:"备份和还原"}},[e._v("备份和还原")]),e._v(" "),_("h4",{attrs:{id:"外部命令"}},[e._v("外部命令")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("mysqldump -u <username> -p <database> [table] > <backup-file>")]),e._v(" "),_("ul",[_("li",[e._v("备份多个库："),_("code",{pre:!0},[e._v("--databases db1,db2...")])]),e._v(" "),_("li",[e._v("备份所有库："),_("code",{pre:!0},[e._v("--all-databases")])]),e._v(" "),_("li",[e._v("备份多个表："),_("code",{pre:!0},[e._v("<database> table1 table2 ...")])]),e._v(" "),_("li",[e._v("还原："),_("code",{pre:!0},[e._v("mysql <database> < <backup-file>")])]),e._v(" "),_("li",[e._v("导出的文件为SQL文本文件。所以是逻辑备份")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("mysqlhotcopy --flushlog -u='<username>' -p='<password>' --regexp=xxx <backup-folder>")]),e._v(" "),_("ul",[_("li",[e._v("还原："),_("code",{pre:!0},[e._v("cp -a <backup-folder> <database-folder>")])]),e._v(" "),_("li",[e._v("可以在MySQL工作的时候进行备份")]),e._v(" "),_("li",[e._v("直接备份文件。物理备份")])])])]),e._v(" "),_("h4",{attrs:{id:"binlog"}},[e._v("binlog")]),e._v(" "),_("p",[e._v("MySQL的二进制日志（binlog），以二进制的形式保存历史SQL命令（包括开始时间、状态码等信息），保存了所有对数据库状态的更改操作，不记录查询操作")]),e._v(" "),_("p",[e._v("启动binlog: 修改配置文件"),_("code",{pre:!0},[e._v("/etc/my.cnf")]),e._v("添加"),_("code",{pre:!0},[e._v("log-bin=mysql-bin")])]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("mysqlbinlog <binlog-file>")]),e._v("查看binlog文件\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("mysqlbinlog --start-datetime xxx --stop-datetime xxx <binlog-file> | mysql")]),e._v("基于时间恢复")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("mysqlbinlog --start-position xxx --stop-position xxx <binlog-file> | mysql")]),e._v("基于日志位置恢复（binlog文件里面有"),_("code",{pre:!0},[e._v("at xxx")]),e._v("）")])])])]),e._v(" "),_("h3",{attrs:{id:"集群"}},[e._v("集群")]),e._v(" "),_("h4",{attrs:{id:"主从"}},[e._v("主从")]),e._v(" "),_("p",[e._v("利用binlog。主数据库把binlog发给从数据库")]),e._v(" "),_("ol",[_("li",[e._v("在两个服务器的配置文件中添加"),_("code",{pre:!0},[e._v("log-bin=mysql-bin")]),e._v("，并给每个服务器设置"),_("code",{pre:!0},[e._v("server-id=xxx")])]),e._v(" "),_("li",[e._v("主服务器执行"),_("code",{pre:!0},[e._v("grant replication slave on *.* to xxx@'123.123.123.123' identified by '123123';")]),e._v(" "),_("ol",[_("li",[e._v("授权从服务器的读取。")]),e._v(" "),_("li",[e._v("其中"),_("code",{pre:!0},[e._v("*.*")]),e._v("表示所有库的所有表")]),e._v(" "),_("li",[e._v("主服务器执行"),_("code",{pre:!0},[e._v("show master status")]),e._v("可以看到日志文件名和位置(position)")])])]),e._v(" "),_("li",[e._v("在从服务器执行"),_("code",{pre:!0},[e._v("change master to master_user='xxx', master_password='123123123', master_host='123.123.0.1', master)log_file='mysql.bin.000003', master_log_pos=123;")]),e._v(" "),_("ol",[_("li",[e._v("在"),_("code",{pre:!0},[e._v("/var/lib/mysql/")]),e._v("下会生成文件"),_("code",{pre:!0},[e._v("master.info")])])])]),e._v(" "),_("li",[e._v("在从服务器执行"),_("code",{pre:!0},[e._v("start slave;")]),e._v(" "),_("ol",[_("li",[e._v("在从服务器执行"),_("code",{pre:!0},[e._v("show slave status\\G;")]),e._v("可以查看从服务器内容。检查"),_("code",{pre:!0},[e._v("Slave_IO_Running")]),e._v("（从主服务器接收binlog的进程）和"),_("code",{pre:!0},[e._v("Slave_SQL_Running")]),e._v("（解析binlog的进程）是否是"),_("code",{pre:!0},[e._v("Yes")])])])])]),e._v(" "),_("h4",{attrs:{id:"multi-master"}},[e._v("multi-master")]),e._v(" "),_("p",[e._v("修改所有服务器的配置文件")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("log-bin"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql-bin\nserver-id"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 每个服务器需要不一样")]),e._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 可选：优化性能")]),e._v("\nreplicate-do-db"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("test "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 从数据库仅读取`test`库的binlog")]),e._v("\nbinlog-ignore-db"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 忽略不必要的库，不写入binlog")]),e._v("\nbinlog-ignore-db"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("information_schema\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 避免主键冲突")]),e._v("\nauto-increment-offset"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 数据ID从1开始。不同服务器的配置不一样")]),e._v("\nauto-increment-increment"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 每次+2")]),e._v("\n")])]),e._v(" "),_("p",[e._v("然后设置服务器互为slave")]),e._v(" "),_("h2",{attrs:{id:"redis"}},[e._v("Redis")]),e._v(" "),_("h3",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),_("p",[e._v("命令：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("redis-server")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("redis-cli")])])]),e._v(" "),_("p",[e._v("守护进程模式：修改配置文件，设置"),_("code",{pre:!0},[e._v("daemonize=yes")])]),e._v(" "),_("h3",{attrs:{id:"主从同步"}},[e._v("主从同步")]),e._v(" "),_("p",[e._v("原理：")]),e._v(" "),_("ol",[_("li",[e._v("slave与master建立连接，发送"),_("code",{pre:!0},[e._v("sync")]),e._v("命令")]),e._v(" "),_("li",[e._v("master会启动一个后台进程，把数据库快照保存在文件中")]),e._v(" "),_("li",[e._v("master保存完毕后把文件发送给slave")]),e._v(" "),_("li",[e._v("slave把文件保存在硬盘，然后加载到内存")])]),e._v(" "),_("ul",[_("li",[e._v("主服务器配置：把配置文件中的"),_("code",{pre:!0},[e._v("bind 127.0.0.1")]),e._v("注释掉以允许其他服务器访问")]),e._v(" "),_("li",[e._v("从服务器配置："),_("code",{pre:!0},[e._v("replicaof <master-ip> <master-port>")]),e._v("。如果主服务器有密码，则配置"),_("code",{pre:!0},[e._v("masterauth <master-password>")]),e._v(" "),_("ul",[_("li",[e._v("旧版本"),_("code",{pre:!0},[e._v("replicaof")]),e._v("字段名为"),_("code",{pre:!0},[e._v("slaveof")])])])])]),e._v(" "),_("h3",{attrs:{id:"持久化"}},[e._v("持久化")]),e._v(" "),_("p",[e._v("两种方式：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("snapshotting")]),e._v("快照方式（默认）\n"),_("ul",[_("li",[e._v("默认文件名为"),_("code",{pre:!0},[e._v("dump.rdb")]),e._v(" "),_("ul",[_("li",[e._v("配置文件中"),_("code",{pre:!0},[e._v("dir")]),e._v("表示此文件的保存位置。默认值为"),_("code",{pre:!0},[e._v("./")]),e._v("，所以会随着redis的启动目录而改变，建议先固定一下，改成绝对路径")])])]),e._v(" "),_("li",[e._v("触发"),_("code",{pre:!0},[e._v("save")]),e._v("的方式：\n"),_("ul",[_("li",[e._v("60秒内至少10000个key发生了改变")]),e._v(" "),_("li",[e._v("300秒内至少10个key发生了改变")]),e._v(" "),_("li",[e._v("900秒内至少1个key发生了改变")])])])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("append-only file")]),e._v("，简称AOF\n"),_("ul",[_("li",[e._v("持久化策略：\n"),_("ul",[_("li",[e._v("每次写的时候都备份")]),e._v(" "),_("li",[e._v("每秒备份（默认）")]),e._v(" "),_("li",[e._v("不备份")])])]),e._v(" "),_("li",[e._v("即使每秒备份，性能也很好（备份是后台线程处理的）")]),e._v(" "),_("li",[e._v("配置：修改"),_("code",{pre:!0},[e._v("redis.conf")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("appendonly yes")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("appendfsync always/everysec/no")])])])])])])])])}]};e.exports={attributes:{title:"Linux Network Applications (Part 8)",description:"MySQL & Redis"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);