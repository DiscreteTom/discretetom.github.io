(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1171:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),e("p",[v._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[v._v("此视频")]),v._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),v._v(" "),e("p",[v._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),v._v(" "),e("p",[v._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),v._v(" "),e("p",[v._v("有些内容与"),e("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[v._v("大学的笔记")]),v._v("重复，建议先看大学的笔记")]),v._v(" "),e("h2",{attrs:{id:"软件包"}},[v._v("软件包")]),v._v(" "),e("h3",{attrs:{id:"软件包分类"}},[v._v("软件包分类")]),v._v(" "),e("ul",[e("li",[v._v("源码包\n"),e("ul",[e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("可以自由选择功能")]),v._v(" "),e("li",[v._v("可以自定义功能")]),v._v(" "),e("li",[v._v("编译安装，更加稳定，"),e("strong",[v._v("效率更高（约5%）")])]),v._v(" "),e("li",[v._v("卸载方便，直接删除安装目录即可，几乎没有残留（安装时需要指定安装目录，"),e("strong",[v._v("不要使用默认安装位置")]),v._v("，因为无法判断默认安装位置会安装在哪里）")]),v._v(" "),e("li",[e("strong",[v._v("不需要管理依赖")])])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("安装复杂，难以解决报错")]),v._v(" "),e("li",[v._v("安装时间长")]),v._v(" "),e("li",[v._v("默认不能用系统工具管理（比如"),e("code",{pre:!0},[v._v("service")]),v._v("或"),e("code",{pre:!0},[v._v("systemctl")]),v._v("）")])])])])]),v._v(" "),e("li",[v._v("二进制包（以RPM包为例）\n"),e("ul",[e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("安装简单，不会报错")]),v._v(" "),e("li",[v._v("安装快")]),v._v(" "),e("li",[v._v("默认可以用系统工具管理")]),v._v(" "),e("li",[v._v("RPM会在数据库记录软件包的安装位置，以便卸载时没有残留。"),e("strong",[v._v("建议使用默认安装位置")]),v._v("，方便系统服务进行查找")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("源码不可见")]),v._v(" "),e("li",[v._v("功能选择不够灵活")]),v._v(" "),e("li",[v._v("依赖性难以管理")])])])])])]),v._v(" "),e("h3",{attrs:{id:"手动解决模块依赖"}},[v._v("手动解决模块依赖")]),v._v(" "),e("p",[v._v("直接用RPM安装二进制包肯恩会有依赖问题")]),v._v(" "),e("p",[v._v("模块依赖：缺少一个"),e("code",{pre:!0},[v._v("so")]),v._v("文件，但是需要通过安装其他包才能得到这个文件。如何判断这个文件来自哪个包？")]),v._v(" "),e("p",[v._v("https://www.rpmfind.net 通过"),e("code",{pre:!0},[v._v("so")]),v._v("文件查询需要安装哪个包")]),v._v(" "),e("h3",{attrs:{id:"rpm系统"}},[v._v("RPM系统")]),v._v(" "),e("h4",{attrs:{id:"rpm包命名规则"}},[v._v("RPM包命名规则")]),v._v(" "),e("p",[v._v("例："),e("code",{pre:!0},[v._v("httpd-2.2.15-15.el6.centos.1.i686.rpm")])]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("httpd")]),v._v(" - 包名/进程名，不一定和软件名相同\n"),e("ul",[e("li",[v._v("比如apache服务器的包名就是"),e("code",{pre:!0},[v._v("httpd")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("2.2.15")]),v._v(" - 软件版本")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("15")]),v._v(" - 软件发布次数")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("el6")]),v._v(" - 软件发行商\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("el6")]),v._v("表示适合RHEL 6.x和CentOS 6.x使用")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("i686")]),v._v(" - 适合的硬件平台\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("i386")]),v._v("表示386以上计算机可以安装")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("i586")]),v._v("表示586以上计算机可以安装")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("i686")]),v._v("表示奔腾II以上计算机可以安装。目前所有CPU都是奔腾II以上，所以这个值比较常见")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("x86_64")]),v._v("表示64位CPU可以安装")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("noarch")]),v._v("没有硬件限制")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm")]),v._v("表示这是RPM包")])]),v._v(" "),e("p",[v._v("操作未安装的包时需要使用包全名和绝对路径来指定rpm文件位置。操作已经安装的包时直接使用包名即可，因为"),e("code",{pre:!0},[v._v("rpm")]),v._v("会创建包名和包全名的对应数据库（位于"),e("code",{pre:!0},[v._v("/var/lib/rpm")]),v._v("）")]),v._v(" "),e("p",[v._v("安装软件包的时候可能会发现有很多名字相关的包，比如"),e("code",{pre:!0},[v._v("httpd")]),v._v("/"),e("code",{pre:!0},[v._v("httpd-manual")]),v._v("/"),e("code",{pre:!0},[v._v("httpd-devel")]),v._v("/"),e("code",{pre:!0},[v._v("httpd-tools")]),v._v("。可以先安装主包，即"),e("code",{pre:!0},[v._v("httpd")]),v._v("，根据依赖报错慢慢安装依赖包，最后安装所有的包。通常安装主包就有基本功能")]),v._v(" "),e("h4",{attrs:{id:"使用rpm"}},[v._v("使用RPM")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("rpm -ivh <package-name>")])]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-i")]),v._v(" = install")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-v")]),v._v(" = verbose，显示详细信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-h")]),v._v(" = hash，使用"),e("code",{pre:!0},[v._v("#")]),v._v("显示安装进度")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("--nodeps")]),v._v("不检测依赖性安装")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("--replacefiles")]),v._v("替换文件安装。如果安装软件的时候提示包的部分文件已存在，可以使用此选项忽视报错强行覆盖安装")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("--replacepkgs")]),v._v("替换软件包安装。如果软件已经安装，此选项可以重新安装一遍软件包")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("--force")]),v._v("强制安装，相当于"),e("code",{pre:!0},[v._v("--replacefiles --replacepkgs")]),v._v(" "),e("ul",[e("li",[v._v("可以用于重新生成配置文件或依赖文件，"),e("strong",[v._v("但是不会覆盖已修改且已存在的文件，只会添加缺失的文件")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("--test")]),v._v("检测依赖性")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("--prefix")]),v._v("指定安装路径而不使用默认安装路径。"),e("strong",[v._v("不建议使用")]),v._v("。默认安装路径由软件包作者决定")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-U")]),v._v("升级安装。如果之前没有安装则安装。如果已经安装则升级(upgrade)\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("rpm -Uvh <package-name>")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-F")]),v._v("仅升级安装。如果没有安装则不会安装(freshen)\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("rpm -Fvh <package-name>")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -e <package-name>")]),v._v("卸载，可以直接使用包名而不是包全名\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("--nodeps")]),v._v("不检查依赖性")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -q <package-name>")]),v._v("查询包是否安装。使用包名而不是包全名\n"),e("ul",[e("li",[e("strong",[v._v("无法被"),e("code",{pre:!0},[v._v("yum")]),v._v("取代")]),v._v("，因为"),e("code",{pre:!0},[v._v("yum")]),v._v("查询的是服务器端数据，"),e("code",{pre:!0},[v._v("rpm")]),v._v("查询的是本地数据")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -qa")]),v._v("查看系统安装的所有包")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -qi <package-name>")]),v._v("查询包的详细信息。使用包名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -qip <package-name>")]),v._v("查询没有安装的包的详细信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -ql <package-name>")]),v._v("查询包中的文件列表。可以使用"),e("code",{pre:!0},[v._v("-p")]),v._v("查看没有安装的包的文件列表")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -qf <filename>")]),v._v("查询系统文件属于哪个包")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -qR <package-name>")]),v._v("查询包的依赖包（甚至包括Linux内核。不常用）")])]),v._v(" "),e("p",[v._v("使用RPM需要手动安装/卸载各种依赖包，麻烦")]),v._v(" "),e("h4",{attrs:{id:"校验包"}},[v._v("校验包")]),v._v(" "),e("p",[v._v("以下命令检测软件包的文件是否和安装的时候状态相同")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("rpm -Va")]),v._v("校验本机所有包")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -V <package-name>")]),v._v("验证已安装的包")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rpm -Vf <file-name>")]),v._v("验证系统文件")])]),v._v(" "),e("p",[v._v("校验结果格式：")]),v._v(" "),e("ul",[e("li",[v._v("内容验证结果\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("S")]),v._v("文件大小改变")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("M")]),v._v("文件类型或权限改变")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("5")]),v._v("文件MD5校验改变")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("D")]),v._v("设备主从代码改变")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("L")]),v._v("文件路径改变")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("U")]),v._v("文件拥有者改变")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("G")]),v._v("文件的属组改变")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("T")]),v._v("文件的修改时间改变")])])]),v._v(" "),e("li",[v._v("文件类型\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("c")]),v._v("配置文件config file")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("d")]),v._v("文档documentation")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("g")]),v._v("鬼文件。表示此文件不该被软件包包含。少见")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("l")]),v._v("授权文件license")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("r")]),v._v("描述文件read me")])])])]),v._v(" "),e("p",[v._v("软件包在安装的时候会检测数字证书。数字证书的位置："),e("code",{pre:!0},[v._v("/etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6")])]),v._v(" "),e("ul",[e("li",[v._v("导入数字证书："),e("code",{pre:!0},[v._v("rpm --import <cert-file>")]),v._v("。"),e("strong",[v._v("这一步安装新系统之后需要手动执行")])]),v._v(" "),e("li",[v._v("查询已经安装的数字证书："),e("code",{pre:!0},[v._v("rpm -qa | grep gpg-pubkey")])])]),v._v(" "),e("h4",{attrs:{id:"rpm包中的文件提取"}},[v._v("RPM包中的文件提取")]),v._v(" "),e("p",[v._v("重新安装包不会覆盖已经被修改且存在的文件。所以为了恢复一些文件，可以从RPM包中提取文件")]),v._v(" "),e("blockquote",[e("p",[v._v("建议修改重要文件之前设置备份文件"),e("code",{pre:!0},[v._v("xxx.bak")])])]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("cpio")]),v._v("命令，本来是用来实现备份/还原的（很难用）。"),e("code",{pre:!0},[v._v("-o")]),v._v("表示把数据备份到文件库，"),e("code",{pre:!0},[v._v("-i")]),v._v("表示把数据从文件库恢复，"),e("code",{pre:!0},[v._v("-p")]),v._v("表示不把数据放到文件库，直接复制为其他文件")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("rpm2cpio <package-name> | cpio -idv . <file>")])]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("rpm2cpio")]),v._v("把RPM包改为CPIO的二进制格式")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v(".")]),v._v("表示恢复到当前目录（而不是默认安装目录，否则会覆盖已有文件）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("file")]),v._v("为包中文件的绝对路径")])]),v._v(" "),e("p",[v._v("例："),e("code",{pre:!0},[v._v("rpm2cpio /mnt/cdrom /Packages/httpd-2.2.15-53.el6.centos.x86-64.rpm | cpio -idv . /etc/httpd/conf")])]),v._v(" "),e("h3",{attrs:{id:"yum系统"}},[v._v("YUM系统")]),v._v(" "),e("h4",{attrs:{id:"yum概述"}},[v._v("YUM概述")]),v._v(" "),e("p",[v._v("可以使用"),e("code",{pre:!0},[v._v("yum")]),v._v("在线安装二进制包，"),e("code",{pre:!0},[v._v("yum")]),v._v("负责管理依赖问题")]),v._v(" "),e("blockquote",[e("p",[v._v("RHEL认为"),e("code",{pre:!0},[v._v("yum")]),v._v("是售后服务，所以需要单独购买。正版RHEL需要购买CD Key才能使用"),e("code",{pre:!0},[v._v("yum")]),v._v("。所以推荐使用CentOS，因为后者的"),e("code",{pre:!0},[v._v("yum")]),v._v("是免费的")])]),v._v(" "),e("p",[e("strong",[v._v("使用"),e("code",{pre:!0},[v._v("yum")]),v._v("卸载包的时候会自动卸载高级包")])]),v._v(" "),e("h4",{attrs:{id:"yum源"}},[v._v("YUM源")]),v._v(" "),e("p",[v._v("源的配置文件在"),e("code",{pre:!0},[v._v("/etc/yum.repos.d")]),v._v("中，文件扩展名必须为"),e("code",{pre:!0},[v._v(".repo")]),v._v("。默认生效的源为"),e("code",{pre:!0},[v._v("CentOS-Base.repo")]),v._v("中的"),e("code",{pre:!0},[v._v("base")])]),v._v(" "),e("p",[v._v("文件中有"),e("code",{pre:!0},[v._v("yum")]),v._v("源容器。容器名称使用"),e("code",{pre:!0},[v._v("[]")]),v._v("包裹")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("name")]),v._v("容器说明。可以随便写")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mirrorlist")]),v._v("镜像站点")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("baseurl")]),v._v("源服务器地址，可以是一个文件夹，即"),e("code",{pre:!0},[v._v("file:///xx/xx/xx")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("enabled")]),v._v("是否启用。默认启用。"),e("code",{pre:!0},[v._v("1/0")]),v._v("表示启用/禁用")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("gpgcheck")]),v._v("数字证书是否生效。"),e("code",{pre:!0},[v._v("1/0")]),v._v("表示生效/不生效")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("gpgkey")]),v._v("数字证书的公钥文件保存位置")])]),v._v(" "),e("p",[v._v("如果要禁用其他源，把"),e("code",{pre:!0},[v._v("enabled")]),v._v("设置为"),e("code",{pre:!0},[v._v("1")]),v._v("，或者把文件名改为不以"),e("code",{pre:!0},[v._v(".repo")]),v._v("结尾。比如以"),e("code",{pre:!0},[v._v(".repo.bak")]),v._v("结尾")]),v._v(" "),e("h4",{attrs:{id:"使用yum"}},[v._v("使用YUM")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("yum list [pakcage-name]")]),v._v("列出服务器中的包\n"),e("ul",[e("li",[v._v("输出格式\n"),e("ul",[e("li",[v._v("包名")]),v._v(" "),e("li",[v._v("版本")]),v._v(" "),e("li",[v._v("源的容器名称")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum search <keyword>")]),v._v("搜索包\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("keyword")]),v._v("除了可以是包名的关键字，也可以是命令。比如查"),e("code",{pre:!0},[v._v("netstat")]),v._v("会输出"),e("code",{pre:!0},[v._v("net-tools")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum info <package-name>")]),v._v("查询包的信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum install <package-name>")]),v._v("安装")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum update [pakcage]")]),v._v("升级。不指定包时升级所有包，包括内核")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum remove <package-name>")]),v._v("卸载。"),e("strong",[v._v("慎用")]),v._v("，因为可能导致高层包的卸载")])]),v._v(" "),e("h4",{attrs:{id:"使用yum组"}},[v._v("使用YUM组")]),v._v(" "),e("p",[v._v("如果不知道包的名字怎么办？")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("yum grouplist")]),v._v("查看所有可用软件组列表")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum groupinfo <group-name>")]),v._v("查看软件组内的软件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum groupinstall <group-name>")]),v._v("安装软件组")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("yum groupremove <group-name>")]),v._v("卸载组")])]),v._v(" "),e("h3",{attrs:{id:"源码包"}},[v._v("源码包")]),v._v(" "),e("h4",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),e("p",[v._v("使用源码包安装的软件效率更高，所以需要面向大量客户的包可以使用源码包安装来提升性能，比如LAMP。如果软件包是给开发人员自己用的，或者只给少量用户使用，建议使用RPM包安装，因为简单")]),v._v(" "),e("p",[v._v("源码包通常从官方网站下载")]),v._v(" "),e("h4",{attrs:{id:"如何安装源码包"}},[v._v("如何安装源码包")]),v._v(" "),e("ol",[e("li",[v._v("下载软件包")]),v._v(" "),e("li",[v._v("解压")]),v._v(" "),e("li",[v._v("进入解压目录")]),v._v(" "),e("li",[v._v("执行"),e("code",{pre:!0},[v._v("./configure")]),v._v("进行编译前准备（这一步可能被CMAKE代替。效果差不多，查CMAKE文档即可）\n"),e("ol",[e("li",[v._v("环境检测")]),v._v(" "),e("li",[v._v("定义需要启动的功能。可以执行"),e("code",{pre:!0},[v._v("./configure --help")]),v._v("查看支持的功能")]),v._v(" "),e("li",[v._v("可以使用"),e("code",{pre:!0},[v._v("./configure --prefix=/xxx/xxx")]),v._v("来指定安装路径")]),v._v(" "),e("li",[v._v("执行完毕后会把环境检测结果和定义好的功能写到"),e("code",{pre:!0},[v._v("Makefile")]),v._v("文件")]),v._v(" "),e("li",[v._v("如果"),e("code",{pre:!0},[v._v("./configure")]),v._v("的过程中报错，需要执行"),e("code",{pre:!0},[v._v("make clean")]),v._v("清空编译生成的内容")])])]),v._v(" "),e("li",[v._v("执行"),e("code",{pre:!0},[v._v("make")]),v._v("进行编译。编译会调用gcc编译器，根据"),e("code",{pre:!0},[v._v("Makefile")]),v._v("的内容编译软件。通常耗时较长\n"),e("ol",[e("li",[v._v("如果"),e("code",{pre:!0},[v._v("make")]),v._v("的过程中报错，需要执行"),e("code",{pre:!0},[v._v("make clean")]),v._v("清空编译生成的内容")])])]),v._v(" "),e("li",[v._v("执行"),e("code",{pre:!0},[v._v("make install")]),v._v("安装软件\n"),e("ol",[e("li",[v._v("通常会指定程序的安装位置")]),v._v(" "),e("li",[v._v("如果忘了指定安装目录，可以把这个命令的执行过程保存起来，以备未来删除")]),v._v(" "),e("li",[v._v("如果这一步出现问题，需要删除安装目录来进行清理")])])])]),v._v(" "),e("h4",{attrs:{id:"打补丁"}},[v._v("打补丁")]),v._v(" "),e("blockquote",[e("p",[v._v("现在已经不常用")])]),v._v(" "),e("p",[v._v("比较文件的不同：")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("diff [options] old new")]),v._v("比较old和new的不同")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("把任何文档视为文本文档")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-b")]),v._v("忽略空格造成的不同")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-B")]),v._v("忽略空白行造成的不同")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-I")]),v._v("忽略大小写不同")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-N")]),v._v("比较两个目录时，需要某个文件只在一个目录中，则在另一个目录中视为空文件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-r")]),v._v("比较目录时，递归比较子目录")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("使用统一的输出格式")])]),v._v(" "),e("p",[v._v("生成补丁文件："),e("code",{pre:!0},[v._v("diff -Naur old new > xxx.patch")]),v._v("，其中old和new建议使用绝对路径")]),v._v(" "),e("p",[v._v("打补丁："),e("code",{pre:!0},[v._v("patch -pn < xxx.patch")]),v._v("，其中"),e("code",{pre:!0},[v._v("n")]),v._v("表示删除补丁文件中文件路径的层数。此命令不需要指定新旧文件，因为"),e("code",{pre:!0},[v._v("xxx.patch")]),v._v("中包含了新旧文件的信息（使用了绝对路径）")])])}]};v.exports={attributes:{title:"Linux Basic (part 3)",description:"软件包、RPM、yum、源码安装相关"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);