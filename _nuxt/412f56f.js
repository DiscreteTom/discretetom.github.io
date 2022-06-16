(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1165:function(_,v){const e={render:function(){var _=this;_.$createElement;return _._self._c,_._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[_._v("前言")]),_._v(" "),e("p",[_._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[_._v("此视频")]),_._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),_._v(" "),e("p",[_._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),_._v(" "),e("p",[_._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),_._v(" "),e("p",[_._v("有些内容与"),e("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[_._v("大学的笔记")]),_._v("重复，建议先看大学的笔记")]),_._v(" "),e("h2",{attrs:{id:"用户管理"}},[_._v("用户管理")]),_._v(" "),e("h3",{attrs:{id:"用户相关文件"}},[_._v("用户相关文件")]),_._v(" "),e("p",[e("code",{pre:!0},[_._v("/etc/passwd")]),_._v("用户信息文件")]),_._v(" "),e("p",[_._v("内容举例："),e("code",{pre:!0},[_._v("root:x:0:0:root:/root:/bin/bash")])]),_._v(" "),e("ul",[e("li",[_._v("用户名")]),_._v(" "),e("li",[_._v("密码位\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("x")]),_._v("表示用户有密码")]),_._v(" "),e("li",[_._v("密码写在"),e("code",{pre:!0},[_._v("/etc/shadow")]),_._v("里，root之外的用户都看不了，且密码被哈希加密")])])]),_._v(" "),e("li",[_._v("用户ID（UID）\n"),e("ul",[e("li",[_._v("root用户的UID为0。"),e("strong",[_._v("只要用户的UID为0，就有root权限")]),_._v("，且登录后用户名显示为root")]),_._v(" "),e("li",[_._v("系统用户的UID为1-499（伪用户）。通常系统服务都会有伪用户，删除伪用户会导致系统异常")]),_._v(" "),e("li",[_._v("普通用户的UID为500-65535")])])]),_._v(" "),e("li",[e("strong",[_._v("初始")]),_._v("组ID（GID）\n"),e("ul",[e("li",[_._v("如果创建用户的时候不指定组，则会创建和用户同名的组")])])]),_._v(" "),e("li",[_._v("用户说明")]),_._v(" "),e("li",[_._v("用户的home目录\n"),e("ul",[e("li",[_._v("root的目录为"),e("code",{pre:!0},[_._v("/root")])]),_._v(" "),e("li",[_._v("普通用户的home为"),e("code",{pre:!0},[_._v("/home/username")])]),_._v(" "),e("li",[_._v("系统用户通常不需要登录，其home目录可以瞎写，不起作用")])])]),_._v(" "),e("li",[_._v("登录shell\n"),e("ul",[e("li",[_._v("普通用户和root通常是"),e("code",{pre:!0},[_._v("/bin/bash")])]),_._v(" "),e("li",[_._v("伪用户通常是"),e("code",{pre:!0},[_._v("/sbin/nologin")]),_._v("，禁止登陆")])])])]),_._v(" "),e("p",[e("code",{pre:!0},[_._v("/etc/shadow")]),_._v("保存用户密码信息")]),_._v(" "),e("p",[_._v("内容：")]),_._v(" "),e("ul",[e("li",[_._v("用户名")]),_._v(" "),e("li",[_._v("哈希之后的密码\n"),e("ul",[e("li",[_._v("伪用户的密码是"),e("code",{pre:!0},[_._v("!!")]),_._v("或"),e("code",{pre:!0},[_._v("*")]),_._v("，表示密码无效。任何以"),e("code",{pre:!0},[_._v("!")]),_._v("开头的密码都是无效的（因为哈希值被修改了。只不过"),e("code",{pre:!0},[_._v("!")]),_._v("是使用习惯）")])])]),_._v(" "),e("li",[_._v("密码最新修改时间\n"),e("ul",[e("li",[_._v("时间戳，以天为单位")]),_._v(" "),e("li",[_._v("时间戳转日期："),e("code",{pre:!0},[_._v('date -d "1970-01-01 xxxxx days')]),_._v("，其中"),e("code",{pre:!0},[_._v("xxxxx")]),_._v("为时间戳")]),_._v(" "),e("li",[_._v("日期转时间戳："),e("code",{pre:!0},[_._v('echo $(($(date --date="yyyy/mm/dd" +%s)/86400+1))')]),_._v("，其中"),e("code",{pre:!0},[_._v("yyyy/mm/dd")]),_._v("为日期格式，也可以写为"),e("code",{pre:!0},[_._v("yyyymmdd")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("$((xxxx))")]),_._v("表示进行数学运算")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("$(xxxx)")]),_._v("表示执行系统命令")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("+%s")]),_._v("选项表示把时间换算成秒")])])]),_._v(" "),e("li",[_._v("如果此值为"),e("code",{pre:!0},[_._v("0")]),_._v("，则登录时会强制要求改密码")])])]),_._v(" "),e("li",[_._v("修改密码的最小时间间隔\n"),e("ul",[e("li",[_._v("比如设置为"),e("code",{pre:!0},[_._v("10")]),_._v("则表示10天之内不能改密码")]),_._v(" "),e("li",[_._v("设置为"),e("code",{pre:!0},[_._v("0")]),_._v("（默认）表示可以随时改")])])]),_._v(" "),e("li",[_._v("密码有效期\n"),e("ul",[e("li",[_._v("默认值为"),e("code",{pre:!0},[_._v("99999")]),_._v("(270+年)")])])]),_._v(" "),e("li",[_._v("密码到期前的警告时间（默认为7）")]),_._v(" "),e("li",[_._v("密码到期之后的宽限天数\n"),e("ul",[e("li",[_._v("默认为-1，即使过期也可以使用")])])]),_._v(" "),e("li",[_._v("密码失效时间\n"),e("ul",[e("li",[_._v("无视有效期，直接指定一个密码必定失效的时间戳")]),_._v(" "),e("li",[_._v("如果过期，这一字段前面会出现一个"),e("code",{pre:!0},[_._v("!")])])])]),_._v(" "),e("li",[_._v("保留字段")])]),_._v(" "),e("p",[e("code",{pre:!0},[_._v("/etc/group")]),_._v("组信息文件")]),_._v(" "),e("p",[_._v("内容：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("组名")])]),_._v(" "),e("li",[e("p",[_._v("组密码位")])]),_._v(" "),e("li",[e("p",[_._v("GID")])]),_._v(" "),e("li",[e("p",[_._v("附加组是此组的用户")])]),_._v(" "),e("li",[e("p",[_._v("初始组：每个用户有且只有一个初始组，通常和用户名相同（建议）")])]),_._v(" "),e("li",[e("p",[_._v("附加组：用户可以属于多个附加组")])])]),_._v(" "),e("p",[e("code",{pre:!0},[_._v("/etc/gshadow")]),_._v("组密码文件。如果给用户组设置了组管理员，且给组设置了密码，则密码在此文件中。组管理员可以利用密码管理组。如果不设置管理员，只有root用户可以管理组。不过还是不建议设置组密码")]),_._v(" "),e("p",[_._v("每个用户在"),e("code",{pre:!0},[_._v("/var/spool/mail/")]),_._v("目录中都会有一个邮箱目录")]),_._v(" "),e("p",[e("code",{pre:!0},[_._v("/etc/skel")]),_._v("用户模板目录。用来设置用户目录的默认内容，通常是一些隐藏文件。新建用户时，会把此目录的所有内容拷贝到新用户的家目录")]),_._v(" "),e("h3",{attrs:{id:"添加用户与设置密码"}},[_._v("添加用户与设置密码")]),_._v(" "),e("p",[_._v("新建用户时，只有以下6个文件/夹中都不包含新的用户名，新的用户才能够创建成功：")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("/etc/passwd")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("/etc/shadow")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("/etc/group")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("/etc/gshadow")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("/home/<username>")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("/var/spool/mail/<username>")])])]),_._v(" "),e("p",[_._v("创建用户相关命令：")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("useradd <username>")]),_._v("创建用户。当然也可以手动修改上述6个文件/夹\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("-u <number>")]),_._v("指定UID")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-g <group>")]),_._v("指定初始组")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-G <group>")]),_._v("指定附加组")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-c <description>")]),_._v("添加说明")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-d <directory>")]),_._v("手动指定家目录")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-s <shell>")]),_._v("手动指定shell程序。默认为"),e("code",{pre:!0},[_._v("/bin/bash")])]),_._v(" "),e("li",[_._v("此命令的默认值可以在"),e("code",{pre:!0},[_._v("/etc/default/useradd")]),_._v("和"),e("code",{pre:!0},[_._v("/etc/login.defs")]),_._v("中修改")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("passwd <username>")]),_._v("设置密码。"),e("strong",[_._v("没有密码时无法登录")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("-l")]),_._v("暂时锁定用户（仅root用户可以使用此参数），其实就是在"),e("code",{pre:!0},[_._v("/etc/shadow")]),_._v("中用户密码前添加"),e("code",{pre:!0},[_._v("!!")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-u")]),_._v("解锁用户（仅root用户可以使用此参数）")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("--stdin")]),_._v("从"),e("code",{pre:!0},[_._v("stdin")]),_._v("获取密码而不是交互式输入。用于脚本创建用户")]),_._v(" "),e("li",[_._v("不加"),e("code",{pre:!0},[_._v("username")]),_._v("时设置当前用户的密码。只有root用户可以指定其他用户名")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("chage")]),_._v("修改密码属性。比如"),e("code",{pre:!0},[_._v("chage -d 0 <username>")]),_._v("会把密码修改日期归零，导致用户登录时需要重新设置密码")])]),_._v(" "),e("p",[e("code",{pre:!0},[_._v("/etc/default/useradd")]),_._v("内容：")]),_._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[_._v("GROUP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("100")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 设置用户的默认组。但是Linux没有采用默认组的机制，所以这一行不起作用")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[_._v("HOME")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v("/home\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[_._v("INACTIVE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v("-1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 是/etc/shadow文件的第七个字段，即密码过期宽限天数。-1表示密码永不失效（即使过期）")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[_._v("EXPIRE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 是/etc/shadow的第八个字段")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[_._v("SHELL")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v("/bin/bash\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[_._v("SKEL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v("/etc/skel\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[_._v("CREATE_MAIL_SPOOL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v("yes\n")])]),_._v(" "),e("p",[e("code",{pre:!0},[_._v("/etc/login.defs")]),_._v("内容：")]),_._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[_._v("MAIL_DIR  /var/spool/mail\nPASS_MAX_DAYS  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("99999")]),_._v("\nPASS_MIN_DAYS  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("0")]),_._v("\nPASS_MIN_LEN  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("5")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 此值已经失效")]),_._v("\nPASS_WARN_AGE  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("7")]),_._v("\nUID_MIN  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("500")]),_._v("\nUID_MAX  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("60000")]),_._v("\nGID_MIN  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("500")]),_._v("\nGID_MAX  "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("60000")]),_._v("\nCREATE_HOME  "),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("yes")]),_._v("\nUMASK  077 "),e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 用户目录的umask，不是系统的umask")]),_._v("\nUSERGROUPS_ENAB  "),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("yes")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 删除用户时删除其初始组")]),_._v("\nENCRYPT_METHOD  SHA512 "),e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 密码加密方式")]),_._v("\n")])]),_._v(" "),e("h3",{attrs:{id:"修改用户信息"}},[_._v("修改用户信息")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("usermod [options] <username>")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("-u <UID>")]),_._v("修改UID")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-d <directory>")]),_._v("修改家目录")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-c <description>")]),_._v("修改说明")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-g <group>")]),_._v("指定初始组")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-G <group>")]),_._v("指定附加组")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-s <shell>")]),_._v("指定登录shell")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-e <date>")]),_._v("修改用户的失效日期，即"),e("code",{pre:!0},[_._v("/etc/shadow")]),_._v("的第八个字段")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-L")]),_._v("临时锁定用户")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-U")]),_._v("解锁")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("usermod -l <new> <old>")]),_._v("改名。不建议使用")])])])]),_._v(" "),e("h3",{attrs:{id:"其他用户相关命令"}},[_._v("其他用户相关命令")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("userdel [-r] <username>")]),_._v("删除用户\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("-r")]),_._v("表示删除家目录")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("su [options] <username>")]),_._v("切换用户身份\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("-")]),_._v("环境变量也切换。如果不使用此参数，环境变量中的"),e("code",{pre:!0},[_._v("USER")]),_._v("会仍然为原用户名")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-c")]),_._v("仅执行一次命令，不切换身份")])])])]),_._v(" "),e("h3",{attrs:{id:"组管理命令"}},[_._v("组管理命令")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("groupadd [options] <group>")]),_._v("添加组\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("-g <GID>")]),_._v("指定GID")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("groupdel <group>")]),_._v("删除组\n"),e("ul",[e("li",[_._v("不能删除其他用户的初始组，即组中不能有初始用户。但是可以有附加用户")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("gpasswd [options] <group>")]),_._v("用来设置组密码和指定管理员。也可以把用户添加到组或从组中删除\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("-a <username>")]),_._v("添加用户到组")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-d <username>")]),_._v("从组中删除用户")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("newgrp <group>")]),_._v("改变有效组。创建文件时，文件的所属组为当前用户的有效组。使用此命令可以指定当前用户的哪个组为有效组")])]),_._v(" "),e("h2",{attrs:{id:"权限管理"}},[_._v("权限管理")]),_._v(" "),e("h3",{attrs:{id:"文件基本权限"}},[_._v("文件基本权限")]),_._v(" "),e("ul",[e("li",[_._v("所有者。文件只能有一个所有者")]),_._v(" "),e("li",[_._v("所属组。文件只能由一个所属组")]),_._v(" "),e("li",[_._v("其他")])]),_._v(" "),e("h3",{attrs:{id:"acl权限"}},[_._v("ACL权限")]),_._v(" "),e("p",[_._v("用来解决用户对文件身份不足的问题。直接指定某个用户对文件/目录的权限。如果直接指定目录，会有权限溢出的风险，因为目录的"),e("code",{pre:!0},[_._v("x")]),_._v("表示可以进入，而文件的"),e("code",{pre:!0},[_._v("x")]),_._v("表示可以执行。所以建议仅用于单个文件")]),_._v(" "),e("p",[_._v("使用"),e("code",{pre:!0},[_._v("ls -l")]),_._v("查看文件信息时如果权限最后有一个"),e("code",{pre:!0},[_._v("+")]),_._v("则表示文件受ACL保护")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("dumpe2fs -h <path>")]),_._v("查看ACL是否开启（通常ACL默认开启）\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("dumpe2fs")]),_._v("用来查询指定分区文件系统详细信息")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-h")]),_._v("仅显示super block中的信息，不显示磁盘block的信息")]),_._v(" "),e("li",[_._v("如果输出中包含"),e("code",{pre:!0},[_._v("Default mount options: acl")]),_._v("则表示ACL已经开启")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("mount -o remount,acl /")]),_._v("重新挂载根分区，并启动ACL权限\n"),e("ul",[e("li",[_._v("也可以修改"),e("code",{pre:!0},[_._v("/etc/fstab")]),_._v("文件自动开启ACL权限")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("getfacl <filename>")]),_._v("查看文件的ACL权限")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("setfacl [options] <filename>")]),_._v("设置权限\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("-m")]),_._v("修改ACL\n"),e("ul",[e("li",[_._v("例："),e("code",{pre:!0},[_._v("setfacl -m u:<username>:5 <path/filename>")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("u")]),_._v("表示指定用户。可以替换为"),e("code",{pre:!0},[_._v("g")]),_._v("表示组")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("5")]),_._v("为附加的权限。也可以用"),e("code",{pre:!0},[_._v("rwx")]),_._v("来代替")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-R")]),_._v("表示递归添加权限，只能作用于目录，只能作用于已经存在的文件")]),_._v(" "),e("li",[_._v("设置目录默认ACL权限（能够作用于未来创建的文件）："),e("code",{pre:!0},[_._v("setfacl -m d:u:<username>:5 -R <path>")])]),_._v(" "),e("li",[_._v("设置mask："),e("code",{pre:!0},[_._v("setfacl -m m:rxw <path>")])])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-b <path>")]),_._v("删除文件/目录的所有ACL")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-x")]),_._v("删除指定用户/组的ACL权限\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("setfacl -x u:<username> <path>")])])])])])])]),_._v(" "),e("h3",{attrs:{id:"sudo"}},[_._v("sudo")]),_._v(" "),e("p",[_._v("用来给普通用户管理员的执行权限。设置的东西越少，普通用户权限越大")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("visudo")]),_._v("设置sudo的规则\n"),e("ul",[e("li",[_._v("格式\n"),e("ul",[e("li",[_._v("用户名或组名，组名前加"),e("code",{pre:!0},[_._v("%")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("<target-ip> = (<identity>) <commands>")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("target-ip")]),_._v("通常设置为"),e("code",{pre:!0},[_._v("ALL")]),_._v("（注意是"),e("code",{pre:!0},[_._v("target-ip")]),_._v("，很多教材都说是"),e("code",{pre:!0},[_._v("source-ip")]),_._v("）")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("identity")]),_._v("可以省略，默认为root")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("commands")]),_._v("需要使用绝对路径\n"),e("ul",[e("li",[_._v("如果仅写命令名，则可以使用任意参数")]),_._v(" "),e("li",[_._v("如果指定参数，则只能使用指定的参数执行命令")]),_._v(" "),e("li",[_._v("使用"),e("code",{pre:!0},[_._v(", ")]),_._v("分隔命令（有空格），使用"),e("code",{pre:!0},[_._v("\\")]),_._v("换行。")]),_._v(" "),e("li",[e("strong",[_._v("不要让用户使用root身份不加参数地启动文本编辑器")]),_._v("，否则就可以编辑所有文件了")]),_._v(" "),e("li",[_._v("支持正则表达式")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("!")]),_._v("开头表示不允许")])])])])])])]),_._v(" "),e("li",[_._v("例：\n"),e("ul",[e("li",[e("code",{pre:!0},[_._v("root ALL=(ALL) ALL")]),_._v("root用户可以执行所有命令（root用户本来就可以执行所有命令）")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("user1 ALL=/sbin/shutdown -r now")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v('user1 ALL=/usr/bin/passwd [A-Za-z]*, !/usr/bin/passwd "", !/usr/bin/passwd root')])])])])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("sudo")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("-l")]),_._v("查看当前用户能够执行的超级用户命令")])])])]),_._v(" "),e("blockquote",[e("p",[_._v("Unix的权限控制更为严格。即使是在root用户下，也要在命令前面添加"),e("code",{pre:!0},[_._v("sudo")]),_._v("才能够执行特殊命令。可以用苹果设备试一下")])]),_._v(" "),e("h3",{attrs:{id:"文件特殊权限"}},[_._v("文件特殊权限")]),_._v(" "),e("p",[_._v("不推荐使用。是给一些特殊程序使用的，不要自己设置")]),_._v(" "),e("p",[_._v("可以使用"),e("code",{pre:!0},[_._v("chmod")]),_._v("设置特殊权限。使用数字设置权限时需要使用4位数，后三位表示普通权限，第一位表示特殊权限，"),e("code",{pre:!0},[_._v("4")]),_._v("表示SUID，"),e("code",{pre:!0},[_._v("2")]),_._v("表示GUID，"),e("code",{pre:!0},[_._v("1")]),_._v("表示SBIT。比如"),e("code",{pre:!0},[_._v("chmod 4755 <path>")]),_._v("。如果只给出3位数，则表示清空特殊权限")]),_._v(" "),e("h4",{attrs:{id:"setuid"}},[_._v("SetUID")]),_._v(" "),e("blockquote",[e("p",[_._v("SUID")])]),_._v(" "),e("p",[_._v("只能作用于可执行程序（包括二进制和脚本）。命令执行者在执行此程序时获得文件主的身份。比如用于"),e("code",{pre:!0},[_._v("passwd")]),_._v("命令，普通用户才能够写"),e("code",{pre:!0},[_._v("/etc/shadow")])]),_._v(" "),e("p",[_._v("使用"),e("code",{pre:!0},[_._v("ls -l")]),_._v("查看文件时，如果所有者的执行权限位为"),e("code",{pre:!0},[_._v("s")]),_._v("则表示此文件有SUID。如果是"),e("code",{pre:!0},[_._v("S")]),_._v("则表示错误，文件不是可执行文件。或者理解为"),e("code",{pre:!0},[_._v("s=S+x")])]),_._v(" "),e("p",[_._v("命令："),e("code",{pre:!0},[_._v("chmod u+s <file>")]),_._v("给用户添加针对某个文件的SUID权限")]),_._v(" "),e("h4",{attrs:{id:"setgid"}},[_._v("SetGID")]),_._v(" "),e("blockquote",[e("p",[_._v("SGID")])]),_._v(" "),e("p",[_._v("既可以用于可执行程序，也可以作用于目录（针对文件，风险较大，不建议使用。针对目录还好）")]),_._v(" "),e("ul",[e("li",[_._v("作用于文件时，命令执行者获得文件所属组的身份（比如"),e("code",{pre:!0},[_._v("/usr/bin/locate")]),_._v("）")]),_._v(" "),e("li",[_._v("作用于目录时（没什么用）\n"),e("ul",[e("li",[_._v("用户需要有"),e("code",{pre:!0},[_._v("r")]),_._v("和"),e("code",{pre:!0},[_._v("x")]),_._v("权限才能进入目录。有"),e("code",{pre:!0},[_._v("w")]),_._v("权限才能新建文件")]),_._v(" "),e("li",[_._v("普通用户在此目录中的有效组变为此目录的所属组")]),_._v(" "),e("li",[_._v("如果普通用户有对此目录的"),e("code",{pre:!0},[_._v("w")]),_._v("权限，则新建的文件的默认所属组为此目录的所属组")])])])]),_._v(" "),e("h4",{attrs:{id:"stickybit"}},[_._v("StickyBIT")]),_._v(" "),e("blockquote",[e("p",[_._v("SBIT")])]),_._v(" "),e("p",[_._v("只能作用于目录（风险较小）。普通用户即使有目录的"),e("code",{pre:!0},[_._v("w")]),_._v("权限也不能在有SBIT的目录中删除别人创建的文件。如"),e("code",{pre:!0},[_._v("/tmp")]),_._v("目录")]),_._v(" "),e("p",[_._v("在"),e("code",{pre:!0},[_._v("ls -ll")]),_._v("时显示的"),e("code",{pre:!0},[_._v("x")]),_._v("权限被替换为"),e("code",{pre:!0},[_._v("t")])]),_._v(" "),e("h3",{attrs:{id:"chattr"}},[_._v("chattr")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("chattr [+-=][options] <path>")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("+/-/=")]),_._v("添加/删除/设置权限")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("i")]),_._v("，意为insert\n"),e("ul",[e("li",[_._v("给文件设置"),e("code",{pre:!0},[_._v("i")]),_._v("属性，文件不允许被删除、改名、添加或修改数据")]),_._v(" "),e("li",[_._v("给目录设置"),e("code",{pre:!0},[_._v("i")]),_._v("属性，不能在目录下创建和删除文件")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("a")]),_._v("，意为append\n"),e("ul",[e("li",[_._v("给文件设置"),e("code",{pre:!0},[_._v("a")]),_._v("属性，只能在文件中增加数据，不能删除也不能修改数据")]),_._v(" "),e("li",[_._v("给目录设置"),e("code",{pre:!0},[_._v("a")]),_._v("属性，只能在目录中创建和修改文件，不能删除文件")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("e")]),_._v("大多数文件都有"),e("code",{pre:!0},[_._v("e")]),_._v("属性。表示文件是使用ext文件系统存储的，且不能使用"),e("code",{pre:!0},[_._v("chattr -e")]),_._v("取消这个属性")])])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("lsattr [options] <path>")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("-a")]),_._v("显示所有文件和目录")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("-d")]),_._v("如果目标是目录，仅列出目录本身的属性，而不是子文件的")])])])]),_._v(" "),e("p",[_._v("特别容易忘。用来防止误删除文件有奇效。root用户都不能直接删除文件，但是root用户可以修改文件的"),e("code",{pre:!0},[_._v("i/a")]),_._v("属性")])])}]};_.exports={attributes:{title:"Linux Basic (part 4)",description:"用户管理、权限管理"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);