(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1221:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),n("p",[t._v("本文是观看"),n("a",{attrs:{href:"https://www.bilibili.com/video/bv164411J761"}},[t._v("此视频")]),t._v("时整理的笔记。")]),t._v(" "),n("h2",{attrs:{id:"apache"}},[t._v("Apache")]),t._v(" "),n("h3",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("ul",[n("li",[t._v("极其稳定的HTTP服务器")]),t._v(" "),n("li",[t._v("可以通过简单的API把Perl/Python/PHP等解释器编译到服务器中")]),t._v(" "),n("li",[t._v("以进程为基础，不太适合高并发（高并发用nginx）。扩容站点时通常会增加服务器数量而不是添加CPU数量")])]),t._v(" "),n("h3",{attrs:{id:"原理"}},[t._v("原理")]),t._v(" "),n("p",[t._v("Apache有两种进程：")]),t._v(" "),n("ul",[n("li",[t._v("主进程/守护进程\n"),n("ul",[n("li",[t._v("执行者是root")])])]),t._v(" "),n("li",[t._v("子进程\n"),n("ul",[n("li",[t._v("被主进程启动")]),t._v(" "),n("li",[t._v("处理HTTP请求")]),t._v(" "),n("li",[t._v("可以指定执行者是哪个用户")])])])]),t._v(" "),n("h3",{attrs:{id:"工作模式"}},[t._v("工作模式")]),t._v(" "),n("p",[t._v("有3种稳定的MPM(多进程处理模块)模式：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("prefork")]),t._v(" "),n("ul",[n("li",[t._v("Apache启动的时候就预先fork一些子进程，避免系统频繁创建、销毁进程")]),t._v(" "),n("li",[t._v("每个子进程只有一个线程，同一时间只能处理一个请求")]),t._v(" "),n("li",[t._v("优点：成熟稳定。一个进程挂掉，其他进程不受影响")]),t._v(" "),n("li",[t._v("缺点：占用高，不适用于高并发")])])]),t._v(" "),n("li",[n("p",[t._v("worker")]),t._v(" "),n("ul",[n("li",[t._v("多进程、多线程混合")]),t._v(" "),n("li",[t._v("也预先fork了一些子进程（数量较少），每个子进程创建一个监听线程和多个工作线程。每个线程处理一个请求")]),t._v(" "),n("li",[t._v("优点：占用稍低，高并发性能更好")]),t._v(" "),n("li",[t._v("缺点：一个进程挂了，里面的线程都会受影响，也就是请求会受到影响")])])]),t._v(" "),n("li",[n("p",[t._v("event")]),t._v(" "),n("ul",[n("li",[t._v("类似于worker模式，但是解决了keep-alive场景下长期被占用的线程的资源浪费问题")]),t._v(" "),n("li",[t._v("使用专门的线程管理keep-alive场景，且允许keep-alive被断开")]),t._v(" "),n("li",[t._v("高并发效果更好")]),t._v(" "),n("li",[t._v("不能在HTTPS下工作")])])]),t._v(" "),n("li",[n("p",[t._v("查看工作模式："),n("code",{pre:!0},[t._v('httpd -V | grep -i "server mpm"')])])]),t._v(" "),n("li",[n("p",[t._v("指定工作模式：在编译时指定"),n("code",{pre:!0},[t._v("--with-mpm=xxx")])])])]),t._v(" "),n("h3",{attrs:{id:"相关文件"}},[t._v("相关文件")]),t._v(" "),n("h4",{attrs:{id:"文件位置"}},[t._v("文件位置")]),t._v(" "),n("ul",[n("li",[t._v("配置文件\n"),n("ul",[n("li",[t._v("源码包安装\n"),n("ul",[n("li",[t._v("主配置文件"),n("code",{pre:!0},[t._v("PREFIX/etc/httpd.conf")])]),t._v(" "),n("li",[t._v("子配置文件"),n("code",{pre:!0},[t._v("PREFIX/etc/extra/*.conf")])])])]),t._v(" "),n("li",[t._v("RPM包安装："),n("code",{pre:!0},[t._v("/etc/httpd/conf/httpd.conf")])])])]),t._v(" "),n("li",[t._v("网页文件\n"),n("ul",[n("li",[t._v("源码包安装："),n("code",{pre:!0},[t._v("PREFIX/htdocs/")])]),t._v(" "),n("li",[t._v("RPM包安装："),n("code",{pre:!0},[t._v("/var/www/html")])])])]),t._v(" "),n("li",[t._v("日志文件\n"),n("ul",[n("li",[t._v("源码包安装："),n("code",{pre:!0},[t._v("PREFIX/logs/")])]),t._v(" "),n("li",[t._v("RPM包安装："),n("code",{pre:!0},[t._v("/var/log/httpd")])])])])]),t._v(" "),n("h4",{attrs:{id:"配置文件内容"}},[t._v("配置文件内容")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主机环境参数")]),t._v("\nServerRoot /usr/local/apache2 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apache程序根目录")]),t._v("\nListen :80 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听所有网卡的80端口。如果要指定网卡，可以写IP地址，如1.1.1.1:80")]),t._v("\nLoadModule php7\nUser www "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定执行apache的用户")]),t._v("\nGroup www "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定执行apache的组")]),t._v("\nServerAdmin xxx@example.com "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理员邮箱")]),t._v("\nServerName localhost "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 没有DNS时用来临时解析。默认关闭")]),t._v("\nErrorLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/error_log"')]),t._v("\nCustomLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/access_log"')]),t._v(" common "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问日志（成功+失败）")]),t._v("\nDirectoryIndex index.html index.php "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认文件。优先级从前到后")]),t._v("\nInclude etc/extra/httpd-vhosts.conf "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载子配置文件")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录和权限配置")]),t._v("\nDocumentRoot "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/apache2/htdocs"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主页目录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/apache2/htdocs> # 用标签来声明目录权限\n\tOptions Indexes FollowSymLinks # 访问服务器时所用的权限\n\t\t# None 仅基础权限\n\t\t# All 除了MultiViews的所有权限\n\t\t# Indexes 目录下没有网页文件时显示目录内容\n\t\t# FollowSymLinks 允许使用软链接\n\t\t# MultiViews 允许文件名泛匹配（需要启动negotiation模块）\n\tAllowOverride None # 定义是否使用目录下的'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(".htacess"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("定义的权限\n\t\t# None 不使用"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(".htaccess"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("文件中定义的权限\n\t\t# All 使用"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(".htaccess"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("文件中定义的权限\n\t\t# AuthConfig 仅使用"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(".htaccess"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('中的网页认证相关内容\n\tRequire all granted # 访问控制\n</Directory>\n<IfModule dir_module> # 指定访问到指定目录的时候自动加载哪个页面文件\n\tDirectoryIndex index.php index.html\n</IfModule>\n\n# 其他配置\nAlias /123/ "')]),t._v("/4/5/6/123/"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" # 配置目录别名。以'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('结尾才能表示目录\n<Directory "')]),t._v('/4/5/6/123"'),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后需要配置此目录")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/Directory"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("h4",{attrs:{id:"身份认证文件"}},[t._v("身份认证文件")]),t._v(" "),n("p",[t._v("在配置文件中为目录启用"),n("code",{pre:!0},[t._v("AllowOverride All")]),t._v("即可在"),n("code",{pre:!0},[t._v(".htaccess")]),t._v("文件中配置权限：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("AuthName "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"welcome"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 欢迎信息。有的浏览器不显示")]),t._v("\nAuthType basic "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 认证类型：基本认证")]),t._v("\nAuthUserFile /usr/local/apache2/htdocs/admin/apache.passwd\nrequire valid-user "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上述文件中的用户都可以访问此目录")]),t._v("\n")])]),t._v(" "),n("p",[t._v("创建密码文件：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建第一个用户，创建密码文件时，使用`-c`选项")]),t._v("\nhtpasswd -c /usr/local/apache2/htdocs/admin/apache.passwd user1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向已有的密码文件添加用户时，使用`-m`参数")]),t._v("\nhtpasswd -m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"相关命令"}},[t._v("相关命令")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("apachectl")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("-t")]),t._v("检测配置文件语法")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("restart|stop|start")])])])])]),t._v(" "),n("h3",{attrs:{id:"虚拟主机"}},[t._v("虚拟主机")]),t._v(" "),n("p",[t._v("实现一个物理机上面部署多个网站")]),t._v(" "),n("p",[t._v("虚拟主机实现方式：")]),t._v(" "),n("ul",[n("li",[t._v("一个物理机，多个IP对应多个网站")]),t._v(" "),n("li",[t._v("一个物理机，一个IP，不同端口对应不同网站")]),t._v(" "),n("li",[t._v("一个物理机，一个IP，不同域名对应多个网站（"),n("strong",[t._v("常用")]),t._v("）")])]),t._v(" "),n("p",[t._v("在配置文件中设置域名和网站的映射：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VirtualHost *:8"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("\n\tServerAdmin xxx@example.com\n\tDocumentRoot "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/xxx"')]),t._v("\n\tServerName host1.example.com "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定域名")]),t._v("\n\tServerAlias www.host1.example.com\n\tErrorLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n\tCustomLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v(" common\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/VirtualHost"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("p",[t._v("使用"),n("code",{pre:!0},[t._v("VirtualHost")]),t._v("标签只能设置host相关配置。如果需要设置目录权限，还是要使用"),n("code",{pre:!0},[t._v("Directory")]),t._v("标签")]),t._v(" "),n("h3",{attrs:{id:"域名跳转"}},[t._v("域名跳转")]),t._v(" "),n("p",[t._v("HTTP状态码301为永久重定向，302为临时重定向")]),t._v(" "),n("p",[t._v("需要使用模块："),n("code",{pre:!0},[t._v("LoadModule rewrite_module modules/mod_rewrite.so")])]),t._v(" "),n("p",[t._v("在目录的"),n("code",{pre:!0},[t._v(".htaccess")]),t._v("文件中添加：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("RewriteEngine on\nRewriteCond %"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HTTP_HOST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" ^www.sohu.com "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置匹配条件")]),t._v("\nReWriteRule ^"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ http://www.example.com/"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("R"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("permanent,L"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `^(.*)$`捕获路径")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `$1`引用上述被捕获的路径")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `R=permanent`表示永久重定向301")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `L`表示此规则是最后一条生效的规则，以后的不再生效")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"https"}},[t._v("HTTPS")]),t._v(" "),n("p",[t._v("Apache + OpenSSL")]),t._v(" "),n("h4",{attrs:{id:"安装证书"}},[t._v("安装证书")]),t._v(" "),n("p",[t._v("把"),n("code",{pre:!0},[t._v(".crt")]),t._v("和"),n("code",{pre:!0},[t._v(".key")]),t._v("文件放在apache安装目录下的"),n("code",{pre:!0},[t._v("cert")]),t._v("目录")]),t._v(" "),n("h4",{attrs:{id:"配置模块"}},[t._v("配置模块")]),t._v(" "),n("ul",[n("li",[t._v("模块存放目录："),n("code",{pre:!0},[t._v("/usr/local/apache2/modules")])]),t._v(" "),n("li",[t._v("在主配置文件中配置\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("LoadModule ssl_module modules/mod_ssl.so")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("Include etc/extra/httpd-ssl.conf")])])])]),t._v(" "),n("li",[t._v("在"),n("code",{pre:!0},[t._v("httpd-ssl.conf")]),t._v("配置文件中配置\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("SSLProtocol all -SSLv2 -SSLv3")]),t._v("设置支持的协议，并去掉不安全的协议")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("SSLCipherSuites HIGH:!RC4:!MD5:!aNULL:!eNULL:!NULL:!DH:!EDH:!EXP:+MEDIUM")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("SSLHonorCipherOrder on")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("SSLCertificateFile cert/xxx.crt")]),t._v("配置签字后的公钥的路径")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("SSLCertificateKeyFile cert/xxx.key")]),t._v("配置私钥路径")])])]),t._v(" "),n("li",[t._v("检查模块是否启用："),n("code",{pre:!0},[t._v("apachectl -M")])])]),t._v(" "),n("h4",{attrs:{id:"配置虚拟主机"}},[t._v("配置虚拟主机")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VirtualHost *:44"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("3")]),t._v(">")]),t._v("\n\tDocumentRoot "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/html"')]),t._v("\n\tServerName xxx.example.com:443\n\tSSLCertificateFile cert/xxx.crt\n\tSSLCertificateKeyFile cert/xxx.key\n\tSSLCertificateChainFile cert/xxx.crt\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/VirtualHost"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("h4",{attrs:{id:"http强制跳转https"}},[t._v("HTTP强制跳转HTTPS")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/html"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\tRewriteEngine on\n\tRewriteCond "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SERVER_PORT}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("^443$ "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 非443端口")]),t._v("\n\tRewriteRule ^"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("?$ https://"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SERVER_NAME}")]),t._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("R"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(",L"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/Directory"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"日志管理与切割"}},[t._v("日志管理与切割")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义日志格式")]),t._v("\nLogFormat "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h %l %u %t '),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("%r"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(" %>s %b "),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("%{Referer}i"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("%{User-Agent}i"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v(" combined\nLogFormat "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h %l %u %t '),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("%r"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(' %>s %b"')]),t._v(" common\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不适用日志切割时，指定日志路径")]),t._v("\nErrorLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/error.log"')]),t._v("\nCustomLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/access.log"')]),t._v(" combined "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处指定访问日志格式")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用日志切割时，指定路径")]),t._v("\nErrorLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"|/usr/local/apache2/bin/rotatelogs -l /usr/apache2/logs/error_%Y%m%d.log 86400"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中`|`表示管道符，把日志输出重定向到`rotatelogs`命令的输入")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `86400`表示每天（86400秒）更新一次新的日志")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `-l`表示校准时区为UTC")]),t._v("\nCustomLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"|/usr/local/apache2/bin/rotatelogs -l /usr/apache2/logs/access_%Y%m%d.log 86400"')]),t._v(" combined\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略一些静态文件的日志。因为有些静态文件的访问是巨量且无用的")]),t._v("\nSetEnvIf Request_URI "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.gif$"')]),t._v(" image-request "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把gif标记为image-request")]),t._v("\nSetEnvIf Request_URI "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.jpg$"')]),t._v(" image-request "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把jpg标记为image-request")]),t._v("\nSetEnvIf Request_URI "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.png$"')]),t._v(" image-request\nSetEnvIf Request_URI "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.bmp$"')]),t._v(" image-request\nSetEnvIf Request_URI "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.swf$"')]),t._v(" image-request\nSetEnvIf Request_URI "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.js$"')]),t._v(" image-request\nSetEnvIf Request_URI "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.css$"')]),t._v(" image-request\nCustomLog "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"|/usr/xxx/access_%Y%m%d.log 86400"')]),t._v(" combined "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("image-request\n")])]),t._v(" "),n("h3",{attrs:{id:"客户端静态资源缓存"}},[t._v("客户端静态资源缓存")]),t._v(" "),n("p",[t._v("方案1：使用"),n("code",{pre:!0},[t._v("mod_expires.c")]),t._v("模块")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfModule mod_expires.c"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\tExpiresActive on\n\tExpiresByType image/gif "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access plus 1 days"')]),t._v("\n\tExpiresByType image/jpeg "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access plus 24 hours"')]),t._v("\n\tExpiresByType image/png "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"now plus 1 days"')]),t._v("\n\n\tExpiresDefault "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"now plus 0 min"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认不缓存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/IfModule"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("p",[t._v("配置之后，服务器返回资源时会带上"),n("code",{pre:!0},[t._v("Cache-Control")]),t._v("的Header")]),t._v(" "),n("p",[t._v("方案2：使用"),n("code",{pre:!0},[t._v("mod_headers.c")]),t._v("模块直接添加上述header")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfModule mod_headers.c"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filesmatch "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\.(html|htm|txt)$"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\theader "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" cache-control "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max-age=3600"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/filesmatch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/IfModule"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"禁止解析php"}},[t._v("禁止解析PHP")]),t._v(" "),n("p",[t._v("用来增强安全性。比如某个存放图片的文件夹，客户恶意上传了一个"),n("code",{pre:!0},[t._v("php")]),t._v("文件，apache判断文件后缀为"),n("code",{pre:!0},[t._v("php")]),t._v("之后就会进行解析，导致安全问题")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Directory /usr/local/xxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\tphp_admin_flag engine off\n\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filesmatch "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(.*)php"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\tOrder deny,allow\n\t\tDeny from all\n\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/filesmatch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/Directory"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("h2",{attrs:{id:"nginx"}},[t._v("Nginx")]),t._v(" "),n("h3",{attrs:{id:"概述-1"}},[t._v("概述")]),t._v(" "),n("p",[t._v("Nginx: Engine X")]),t._v(" "),n("ul",[n("li",[t._v("高性能HTTP、反向代理web服务器，同时支持IMAP/POP3/SMTP服务")]),t._v(" "),n("li",[t._v("Apache默认使用同步阻塞消息处理模式。而Nginx使用的是异步非阻塞的消息处理模式，高并发下性能更好")]),t._v(" "),n("li",[t._v("nginx使用epoll模型。事件都会被接受并保存在池中，存在空闲工作进程时处理池中的事件。且如果请求需要执行耗时较长的工作，worker进程会注册一个事件，然后处理其他请求，即异步非阻塞")]),t._v(" "),n("li",[t._v("Nginx默认支持fastCGI功能。php在编译的时候开启FPM服务之后，Nginx就可以通过fastCGI访问PHP-FPM服务，从而集成PHP")])]),t._v(" "),n("h3",{attrs:{id:"工作模式-1"}},[t._v("工作模式")]),t._v(" "),n("ul",[n("li",[t._v("master-worker模式（默认）\n"),n("ul",[n("li",[t._v("一个master进程和至少一个worker进程")]),t._v(" "),n("li",[t._v("master负责处理系统信号、加载配置、管理worker进程")]),t._v(" "),n("li",[t._v("worker进程负责处理事件，对外提供服务")]),t._v(" "),n("li",[t._v("生产模式通常使用此模式。优点：\n"),n("ul",[n("li",[t._v("稳定性高，一个worker挂了，master启动新的worker")]),t._v(" "),n("li",[t._v("配合linux的cpu亲和性配置，充分利用多核cpu的优势")]),t._v(" "),n("li",[t._v("master进程进行配置重新加载的过程中不会影响worker进程，即可以实现热重启、热加载配置文件")])])])])]),t._v(" "),n("li",[t._v("单进程模式\n"),n("ul",[n("li",[t._v("所有工作由一个进程负责")]),t._v(" "),n("li",[t._v("方便使用gdb进行调试")]),t._v(" "),n("li",[t._v("通常仅用于开发和调试")])])])]),t._v(" "),n("h3",{attrs:{id:"配置文件"}},[t._v("配置文件")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("user www www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行程序的用户和组")]),t._v("\nworker_processes auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作进程数量。默认为CPU核心数量")]),t._v("\nerror_log /home/wwwlogs/nginx_error.log crit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局错误日志")]),t._v("\npid /usr/local/nginx/logs/nginx.pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主进程PID的保存文件")]),t._v("\nworker_rlimit_nofile "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("51200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件描述符数量")]),t._v("\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tuse epoll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用epoll模型。2.6以上的内核建议使用epoll以提升性能")]),t._v("\n\tworker_connections "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("51200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个工作进程能够处理的最大连接数量")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以nginx的并发量为`worker_processes * worker_connections`")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个网站的配置")]),t._v("\n\t\tlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\troot html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 网页根目录。此处`html`为相对路径，相对于nginx的路径")]),t._v("\n\t\tserver_name www.example.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tindex index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认文件。支持多个默认文件")]),t._v("\n\t\taccess_log logs/access.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问日志保存位置")]),t._v("\n\n\t\tlocation "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配path进行配置")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其他网站的配置")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("使用"),n("code",{pre:!0},[t._v("nginx -t")]),t._v("可以检测配置文件语法错误")]),t._v(" "),n("h3",{attrs:{id:"状态统计"}},[t._v("状态统计")]),t._v(" "),n("p",[t._v("安装nginx的时候使用"),n("code",{pre:!0},[t._v("--with-http_stub_status_module")]),t._v("开启此功能")]),t._v(" "),n("p",[t._v("在配置文件的某个"),n("code",{pre:!0},[t._v("server")]),t._v("中添加：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("location /nginx_status "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstub_status on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\taccess_log off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否统计状态统计的请求")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("然后访问"),n("code",{pre:!0},[t._v("http://xxx/nginx_status")]),t._v("就可以查看对应"),n("code",{pre:!0},[t._v("server")]),t._v("的状态信息：")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("Active connections")]),t._v("当前活动链接数")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("server accepts handled requests")]),t._v("已处理的连接数、成功的TCP握手次数、已处理的请求数")])]),t._v(" "),n("h3",{attrs:{id:"访问控制"}},[t._v("访问控制")]),t._v(" "),n("h4",{attrs:{id:"http-basic-auth"}},[t._v("HTTP basic auth")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in a `location`")]),t._v("\nauth_basic "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 欢迎信息")]),t._v("\nauth_basic_user_file /usr/local/nginx/html/htpasswd.nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定密码文件")]),t._v("\n")])]),t._v(" "),n("p",[t._v("使用"),n("code",{pre:!0},[t._v("htpasswd -c /usr/local/nginx/html/htpasswd.nginx user1")]),t._v("创建用户。详见apache章节的笔记")]),t._v(" "),n("h4",{attrs:{id:"基于ip"}},[t._v("基于IP")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in a `location`")]),t._v("\nallow "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndeny "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"反向代理"}},[t._v("反向代理")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in a `location`")]),t._v("\nproxy_pass http://xxx.example.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"负载均衡"}},[t._v("负载均衡")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# before `server`")]),t._v("\nupstream some-name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义服务器资源池")]),t._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.123")]),t._v(".123:80 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定目标和权重")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处使用了加权轮询算法")]),t._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.123")]),t._v(".124:80 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tproxy_pass http://some-name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用定义的资源池")]),t._v("\n\t\tproxy_set_header Host "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本来Host会被设置为`$proxy_host`，也就是`proxy_pass`的值")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"https与重定向"}},[t._v("HTTPS与重定向")]),t._v(" "),n("p",[t._v("安装nginx的时候需要使用"),n("code",{pre:!0},[t._v("--with-http_ssl_module")]),t._v("启动SSL")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in a `server`")]),t._v("\nssl on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_certificate /usr/local/nginx/conf/ssl/xxx.crt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_certificate_key /usr/local/nginx/conf/ssl/xxx.key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_session_timeout 5m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_protocols TLSv1 TLSv1.1 TLSv1.2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_prefer_server_ciphers on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_ciphers "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置重定向")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tserver_name xxx.example.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rewrite ^(.*)$ https://xxx.example.com permanent;")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https://"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}]};t.exports={attributes:{title:"Linux Network Applications (Part 6)",description:"Apache & Nginx"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);