(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1184:function(t,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),r("p",[t._v("本文是观看"),r("a",{attrs:{href:"https://www.bilibili.com/video/bv164411J761"}},[t._v("此视频")]),t._v("时整理的笔记。")]),t._v(" "),r("h2",{attrs:{id:"samba"}},[t._v("SAMBA")]),t._v(" "),r("h3",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),r("ul",[r("li",[t._v("SMB(Server Messages Block，信息服务块)")]),t._v(" "),r("li",[t._v("局域网共享文件/打印机，跨操作系统")]),t._v(" "),r("li",[t._v("相比于FTP，Sambda使用"),r("code",{pre:!0},[t._v("smb/cifs")]),t._v("协议，"),r("strong",[t._v("能够实现文件系统挂载，可以直接修改服务端文件")]),t._v("。不过FTP传输效率高一些")]),t._v(" "),r("li",[t._v("windows的网上邻居就是使用SMB传输数据。windows可以使用此服务访问Linux中的文件，比如在地址栏输入IP，或者映射网络驱动器")]),t._v(" "),r("li",[t._v("受SELinux限制")])]),t._v(" "),r("h3",{attrs:{id:"smb与cifs"}},[t._v("smb与cifs")]),t._v(" "),r("p",[t._v("cifs是smb的进化版，能用在公网。微软希望SMB能够用在Internet，所以整理了一下SMB协议，重命名为CIFS(Common Internet File System，通用网络文件系统)。")]),t._v(" "),r("h3",{attrs:{id:"软件信息"}},[t._v("软件信息")]),t._v(" "),r("ul",[r("li",[t._v("协议\n"),r("ul",[r("li",[r("code",{pre:!0},[t._v("SMB/CIFS")])])])]),t._v(" "),r("li",[t._v("服务\n"),r("ul",[r("li",[r("code",{pre:!0},[t._v("smb")]),t._v("实现资源共享，权限验证")])])]),t._v(" "),r("li",[t._v("端口\n"),r("ul",[r("li",[t._v("TCP 139, 445")])])]),t._v(" "),r("li",[t._v("配置文件\n"),r("ul",[r("li",[r("code",{pre:!0},[t._v("/etc/sambda/smb.conf")]),t._v("主配置文件")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("/etc/sambda/smbusers")]),t._v("别名配置文件")])])])]),t._v(" "),r("h3",{attrs:{id:"登录验证模式"}},[t._v("登录验证模式")]),t._v(" "),r("ul",[r("li",[t._v("share匿名验证")]),t._v(" "),r("li",[t._v("user本地用户验证（默认）\n"),r("ul",[r("li",[t._v("使用用户名/密码验证")]),t._v(" "),r("li",[t._v("常用的验证方式是"),r("code",{pre:!0},[t._v("tdbsam")]),t._v(" "),r("ul",[r("li",[t._v("用户名为Linux用户的用户名，密码在"),r("code",{pre:!0},[t._v("/etc/samba/passdb.tdb")])]),t._v(" "),r("li",[t._v("不使用系统的密码可以提升安全性")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("pdbedit -a <username>")]),t._v("新建samba用户（必须是已经存在的系统用户）")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("pdbedit -x <username>")]),t._v("删除用户")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("pdbedit -L")]),t._v("列出用户")])])])])]),t._v(" "),r("li",[t._v("虚拟用户/别名用户")])]),t._v(" "),r("h3",{attrs:{id:"配置文件"}},[t._v("配置文件")]),t._v(" "),r("p",[r("code",{pre:!0},[t._v("smb.conf")])]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\tworkgroup "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WORKGROUP "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置工作组或域")]),t._v("\n\tserver string "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxxx "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置服务器注释")]),t._v("\n\tinterfaces "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo eth0 "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".12.2/24 "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听哪些网卡，支持网卡名和IP地址")]),t._v("\n\thosts allow "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),t._v(". "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1 "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".10.1 "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许访问的客户端。支持CIDR")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hosts deny = 127. # 类似于hosts allow。这两个二选一")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hosts allow = 127. EXCEPT 127.123.123.123 # 排除某项")]),t._v("\n\tlog "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /var/log/samba/log.%m\n\tmax log size "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# KB。0表示不限制")]),t._v("\n\tsecurity "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录验证模式")]),t._v("\n\tpassdb backend "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tdbsam "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 密码验证机制。默认tdbsam，使用linux用户+smb密码")]),t._v("\n\tload printers "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否启动Samba的时候就共享打印机")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("homes"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置用户宿主目录的共享属性")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("homes"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用中括号括起来表示共享名。此处表示目录名和用户名相同。不能被修改")]),t._v("\n\tcomment "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 描述")]),t._v("\n\tbrowseable "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否可以被查看。用来防止用户之间互相发现")]),t._v("\n\twritable "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否可以写。即使这里可以写，也要受文件系统权限限制")]),t._v("\n\tvalid "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" some-username, @some-groupname "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以用%S表示用户本身")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("printers"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置打印机的共享资源属性。现在很少用")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("printers"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 共享名")]),t._v("\n\tcomment "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 描述")]),t._v("\n\tpath "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /var/spool/samba "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 共享路径")]),t._v("\n\tbrowseable "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no\n\tguest ok "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否可以匿名访问")]),t._v("\n\twritable "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no\n\tprintable "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否可以打印")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义共享区域")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 共享名")]),t._v("\n\tcomment "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx\n\tpath "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /full/path\n\tpublic "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n\tbrowseable "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n\twritable "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n")])]),t._v(" "),r("p",[t._v("配置文件语法检查工具："),r("code",{pre:!0},[t._v("testparm")]),t._v("。使用参数"),r("code",{pre:!0},[t._v("-v")]),t._v("可以查看samba支持的所有选项")]),t._v(" "),r("h3",{attrs:{id:"访问控制"}},[t._v("访问控制")]),t._v(" "),r("p",[t._v("写入控制：同时受到配置文件和文件系统限制")]),t._v(" "),r("p",[t._v("建议使用：smb配置文件允许，具体由操作系统控制权限，即"),r("code",{pre:!0},[t._v("writable = yes")]),t._v("+"),r("code",{pre:!0},[t._v("setfacl")]),t._v("（也可以用"),r("code",{pre:!0},[t._v("chmod")]),t._v("代替"),r("code",{pre:!0},[t._v("setfacl")]),t._v("）")]),t._v(" "),r("p",[t._v("也可以使用：文件系统开放最大权限，smb配置文件控制用户、组的访问，即:")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" /dir\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# smb.conf")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" only "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 除了write list之外都是只读")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" list "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" some-user, @some-group\n")])]),t._v(" "),r("h3",{attrs:{id:"服务启动"}},[t._v("服务启动")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" smb start"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("stop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("restart"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("reload\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" --level "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2345")]),t._v(" smb on"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("off\n")])]),t._v(" "),r("h3",{attrs:{id:"客户端"}},[t._v("客户端")]),t._v(" "),r("p",[t._v("Linux:")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("smbclient -U "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -L //"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("server-ip"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看服务器共享")]),t._v("\nsmbclient -U "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" //"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("server-ip"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("share-name"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录共享")]),t._v("\n")])]),t._v(" "),r("p",[t._v("Windows: 文件资源管理器："),r("code",{pre:!0},[t._v("\\\\<server-ip>\\<share-name>")]),t._v("。可能需要cmd执行命令来清除登录缓存："),r("code",{pre:!0},[t._v("net use * /del")]),t._v("，否则可能显示不全")]),t._v(" "),r("h2",{attrs:{id:"nfs"}},[t._v("NFS")]),t._v(" "),r("h3",{attrs:{id:"概述-1"}},[t._v("概述")]),t._v(" "),r("ul",[r("li",[t._v("文件共享软件")]),t._v(" "),r("li",[t._v("相比于samba，NFS使用NFS协议，主要针对类unix系统（而非跨平台支持windows），有更优秀的权限控制")]),t._v(" "),r("li",[t._v("通常用来存储一些静态资源（视频、图片），而不是经常变动的资源（数据库文件）")]),t._v(" "),r("li",[t._v("NFS协议无固定端口。NFS服务受RPC服务的管理，客户端通过RPC协议（固定端口111）确定NFS服务器端口\n"),r("ul",[r("li",[t._v("所以需要先启动RPC，然后启动NFS，NFS向RPC注册端口")]),t._v(" "),r("li",[t._v("早期RPC的服务名字叫"),r("code",{pre:!0},[t._v("portmap")]),t._v("，从CentOS 6开始改名叫"),r("code",{pre:!0},[t._v("rpcbind")])])])])]),t._v(" "),r("h3",{attrs:{id:"软件与命令"}},[t._v("软件与命令")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("nfs-utils-*")]),t._v("包括NFS命令与监控程序")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("rpcbind-*")])]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("rpcinfo -p localhost")]),t._v("查看RPC开启了哪些端口")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("exportfs")]),t._v("在服务端控制和客户端的连接\n"),r("ul",[r("li",[t._v("无参数时，查看已经共享出去的目录")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("-a")]),t._v("全部（卸载或挂载）")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("-u")]),t._v("卸载")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("-r")]),t._v("重新读取"),r("code",{pre:!0},[t._v("/etc/exports")]),t._v("中的信息然后挂载")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("-v")]),t._v("详细信息")])])])]),t._v(" "),r("h3",{attrs:{id:"配置文件-1"}},[t._v("配置文件")]),t._v(" "),r("p",[r("code",{pre:!0},[t._v("/etc/exports")]),t._v("。可能需要手动创建")]),t._v(" "),r("ul",[r("li",[t._v("格式："),r("code",{pre:!0},[t._v("共享目录 客户端1（权限、用户映射、其他） 客户端2 ...")])]),t._v(" "),r("li",[t._v("客户端的指定方式：IP、子网、主机、"),r("code",{pre:!0},[t._v("*")])]),t._v(" "),r("li",[t._v("权限指定方式：只读"),r("code",{pre:!0},[t._v("ro")]),t._v("，读写"),r("code",{pre:!0},[t._v("rw")])]),t._v(" "),r("li",[t._v("用户映射：用来定义写文件的时候文件主是谁\n"),r("ul",[r("li",[r("code",{pre:!0},[t._v("root_squash")]),t._v("把root用户映射为匿名"),r("code",{pre:!0},[t._v("nfsnobody")]),t._v("，其他用户和客户端一致")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("no_root_squash")]),t._v("把root用户也映射为服务器端的root用户")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("all_squash")]),t._v("把所有用户映射为一个指定的用户（"),r("strong",[t._v("常用")]),t._v("）\n"),r("ul",[r("li",[r("code",{pre:!0},[t._v("anonuid=xxx")]),t._v("指定UID")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("anongid=xxx")]),t._v("指定GID")])])])])]),t._v(" "),r("li",[t._v("其他配置选项\n"),r("ul",[r("li",[r("code",{pre:!0},[t._v("sync")]),t._v("同步。效率低，但是数据保证一致（"),r("strong",[t._v("常用")]),t._v("）")]),t._v(" "),r("li",[r("code",{pre:!0},[t._v("async")]),t._v("异步。数据先保存在内存缓冲区，必要时才写入磁盘")])])])]),t._v(" "),r("p",[t._v("例：")]),t._v(" "),r("pre",{staticClass:"language-bash"},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("/test "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}]};t.exports={attributes:{title:"Linux Network Applications (Part 5)",description:"SAMBA, NFS"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);