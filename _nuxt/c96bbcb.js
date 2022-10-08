(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1179:function(v,_){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"前言"}},[v._v("前言")]),v._v(" "),e("p",[v._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/bv1ut411a7ro"}},[v._v("此视频")]),v._v("时整理的笔记，只记录了我觉得有价值的内容，用来查阅而不是用来学习。不一定适合小白入门Linux。")]),v._v(" "),e("p",[v._v("本文中的Linux系统为CentOS，不同系统在一些细节上会有偏差")]),v._v(" "),e("p",[v._v("本文中的一些描述混合了我的奇妙理解，添加了一些云计算相关知识")]),v._v(" "),e("p",[v._v("有些内容与"),e("a",{attrs:{href:"/academic/LinuxProgrammingEnvironment/"}},[v._v("大学的笔记")]),v._v("重复，建议先看大学的笔记")]),v._v(" "),e("h2",{attrs:{id:"文件系统管理"}},[v._v("文件系统管理")]),v._v(" "),e("h3",{attrs:{id:"基础知识"}},[v._v("基础知识")]),v._v(" "),e("p",[v._v("硬盘每个扇区的大小为512B。是磁盘的最小存储单位。0磁道0扇区通常是启动引导程序")]),v._v(" "),e("ul",[e("li",[v._v("机械硬盘\n"),e("ul",[e("li",[v._v("机械结构，容易坏")]),v._v(" "),e("li",[v._v("需要旋转产热，目前技术基本达到速度上限")]),v._v(" "),e("li",[v._v("技术成熟成本低")])])]),v._v(" "),e("li",[v._v("固态硬盘\n"),e("ul",[e("li",[v._v("直接用芯片存储数据，速度快，目前IO性能受限于接口而不是存储")])])])]),v._v(" "),e("blockquote",[e("p",[v._v("所以通常PC会用小一点的固态硬盘装系统，大一点的机械硬盘存储数据")])]),v._v(" "),e("p",[v._v("接口类型（建议自行搜索接口图片）：")]),v._v(" "),e("ul",[e("li",[v._v("IDE(Integrated Drive Electronics，集成电子驱动器，并口)，也叫ATA或PATA硬盘。理论速度133MB/s，基本淘汰，有些光驱可能会用IDE口")]),v._v(" "),e("li",[v._v("SCSI(Small Computer System Interface，小型计算机系统接口)，曾经广泛用于服务器。范围广、多任务、大带宽、CPU占用低、热插拔，理论速度320MB/s。基本淘汰")]),v._v(" "),e("li",[v._v("SATA(Serial ATA，串口)，更高的传输速度，更强的纠错能力。SATA三代理论传输速度600MB/s。"),e("strong",[v._v("是目前的主流")]),v._v("，不论PC还是服务器")]),v._v(" "),e("li",[v._v("苹果电脑使用PCI-E接口，理论速度2000MB/s")])]),v._v(" "),e("p",[v._v("早期建议服务器上把能用的磁盘空间都给根，但是这会导致数据查询速度变慢，系统性能下降。现在建议根分区够用就行，比如分配300G，剩下的空间单独设置数据分区然后挂载，比如"),e("code",{pre:!0},[v._v("/www")]),v._v("分区")]),v._v(" "),e("h3",{attrs:{id:"分区的内容"}},[v._v("分区的内容")]),v._v(" "),e("p",[v._v("每个分区包含下列信息：")]),v._v(" "),e("ul",[e("li",[v._v("super block\n"),e("ul",[e("li",[v._v("记录整个文件系统的信息")]),v._v(" "),e("li",[v._v("包括block和inode的总量、已经使用量、未使用量，block与inode的大小，文件系统挂载时间，最近一次写入时间，最近一次磁盘检验时间等")]),v._v(" "),e("li",[v._v("使用"),e("code",{pre:!0},[v._v("dumpe2fs -h <partition>")]),v._v("可以查看分区信息")])])]),v._v(" "),e("li",[v._v("data block(简称block)\n"),e("ul",[e("li",[v._v("实际保存数据的块")]),v._v(" "),e("li",[v._v("大小在格式化的时候确定。通常为1/2/4KB")])])]),v._v(" "),e("li",[v._v("inode\n"),e("ul",[e("li",[v._v("用来记录文件权限、所有者、所属组、大小、修改时间、数据块编号")]),v._v(" "),e("li",[v._v("每个文件一个inode（包括目录文件）")])])])]),v._v(" "),e("p",[v._v("每个分区有一个super block，剩余空间被分为多个块组(block group)，每个块组都有一个inode区域和data block区域。查看块组："),e("code",{pre:!0},[v._v("dumpe2fs <partition>")])]),v._v(" "),e("h3",{attrs:{id:"linux常见文件系统"}},[v._v("Linux常见文件系统")]),v._v(" "),e("ul",[e("li",[v._v("ext，Linux中最早的文件系统，在性能和兼容性上有很多缺陷，已淘汰")]),v._v(" "),e("li",[v._v("ext2，RHEL7.2之前默认文件系统都是ext2，最大支持16TB分区和2TB的单个文件")]),v._v(" "),e("li",[v._v("ext3，添加了日志功能，以便在系统突然停止时提高文件系统的可靠性。16TB分区2TB文件")]),v._v(" "),e("li",[e("strong",[v._v("ext4")]),v._v("（目前最常用），增强了性能、伸缩性、可靠性。最大支持1EB文件系统和16TB的单个文件，无限数量子目录。是CentOS 6.x的默认文件系统")]),v._v(" "),e("li",[v._v("xfs，最早针对IRIX操作系统开发，是高性能日志型文件系统，有崩溃一致性。是64位操作系统，后来开源并移植到Linux。目前CentOS 7.x把XFS+LVM作为默认的文件系统。官方表示XFS对大文件的读写性能较好")]),v._v(" "),e("li",[v._v("swap，用于swap分区的文件系统（类似于windows中的虚拟内存）。通常位内存的2倍，但是不要超过2GB。是Linux必备分区")]),v._v(" "),e("li",[v._v("NFS，网络文件系统(Network FS)")]),v._v(" "),e("li",[v._v("iso9660，光盘的标准文件系统。Linux使用光盘时需要支持iso9660")]),v._v(" "),e("li",[v._v("fat，即windows下的fat16文件系统，在linux中识别为fat")]),v._v(" "),e("li",[v._v("vfat，即windows下的fat32文件系统，在linux中识别为fat32。最大32GB分区和4GB单个文件")]),v._v(" "),e("li",[v._v("NTFS，目前Windows下的主流文件系统。Linux默认不识别。比fat32更安全，更快，最大2TB分区，64GB单个文件")]),v._v(" "),e("li",[v._v("ufs，是Sun公司的操作系统Solaris和SunOS使用的文件系统")]),v._v(" "),e("li",[v._v("proc，是Linux种基于内存的虚拟文件系统，用来管理内存存储目录"),e("code",{pre:!0},[v._v("/proc")])]),v._v(" "),e("li",[v._v("sysfs，和proc一样是基于内存的虚拟文件系统。用来管理目录"),e("code",{pre:!0},[v._v("/sysfs")])]),v._v(" "),e("li",[v._v("tmpfs，也是基于内存的虚拟文件系统，也可以使用swap分区")])]),v._v(" "),e("h3",{attrs:{id:"基本硬盘管理命令"}},[v._v("基本硬盘管理命令")]),v._v(" "),e("blockquote",[e("p",[e("code",{pre:!0},[v._v("ls -l")]),v._v("得到的目录大小是目录文件的大小。目录文件仅保存了文件名")])]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("df")]),v._v("用来统计分区使用率。得到的剩余空间是准确的\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("显示特殊文件系统，比如"),e("code",{pre:!0},[v._v("/proc")]),v._v("。因为是挂载在内存种所以磁盘占用是0")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-h")]),v._v("输出不使用KB，而是易读的单位")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-T")]),v._v("查看文件系统类型")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("du [options] [path]")]),v._v("统计文件大小。得到的文件大小是准确的\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("显示每个子文件的磁盘占用（默认只统计每个子目录的磁盘占用）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-h")]),v._v("人性化输出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-s")]),v._v("(sum)统计总占用量而不列出子目录和子文件的占用量")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("fsck -y <partition>")]),v._v("文件系统修复命令。开机时自动执行，不需要手动执行")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("dumpe2fs <partition>")]),v._v("显示磁盘状态\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-h")]),v._v("仅显示磁盘的super block的信息")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("stat <path>")]),v._v("查看文件inode信息，比如修改日期")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("file <path>")]),v._v("判断文件类型")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("type <command>")]),v._v("判断命令类型（内部命令/外部命令）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("fdisk")]),v._v("手工分区。只能处理使用MBR分区表的磁盘\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("fdisk -l")]),v._v("查看系统所有硬盘与分区")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("fdisk <device>")]),v._v("进行磁盘分区\n"),e("ul",[e("li",[v._v("常用命令\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("m")]),v._v("查看帮助")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("p")]),v._v("查看所有分区")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("l")]),v._v("查看已知文件系统类型的ID号\n"),e("ul",[e("li",[v._v("标准分区ID是"),e("code",{pre:!0},[v._v("83")]),v._v("(Linux)")]),v._v(" "),e("li",[v._v("swap分区ID是"),e("code",{pre:!0},[v._v("82")]),v._v("(Linux swap)")]),v._v(" "),e("li",[v._v("LVM分区ID是"),e("code",{pre:!0},[v._v("8e")]),v._v("(Linux LVM)")]),v._v(" "),e("li",[v._v("扩展分区ID是"),e("code",{pre:!0},[v._v("5")]),v._v("(Extended)")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("t")]),v._v("改变一个分区的文件系统ID")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("n")]),v._v("创建分区\n"),e("ul",[e("li",[v._v("步骤\n"),e("ul",[e("li",[v._v("选择主分区/扩展分区/逻辑分区")]),v._v(" "),e("li",[v._v("设置分区号（建议从小到大）")]),v._v(" "),e("li",[v._v("选择起始柱面（分区的单位为磁盘柱面）")]),v._v(" "),e("li",[v._v("选择结束柱面或直接指定分区大小（指定大小时，会计算空间最接近的柱面）\n"),e("ul",[e("li",[v._v("可以直接指定柱面号，比如"),e("code",{pre:!0},[v._v("100")])]),v._v(" "),e("li",[v._v("可以指定相对于起始柱面的柱面号，比如"),e("code",{pre:!0},[v._v("+100")])]),v._v(" "),e("li",[v._v("指定空间大小："),e("code",{pre:!0},[v._v("+100G")]),v._v("。记得带单位(K/M/G)")])])])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("d")]),v._v("删除分区")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("q")]),v._v("不保存退出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("w")]),v._v("保存退出\n"),e("ul",[e("li",[v._v("有时候会提示：设备正忙，需要重启系统。比如分区之后没有重启，然后进行第二次分区")])])])])])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("parted <device>")]),v._v("，用来对使用GTP分区表的磁盘进行分区并格式化。只能格式化为ext2文件系统，不过可以使用其他工具修改文件系统\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("help")]),v._v("获取帮助")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("print [devices|free|list,all|NUMBER]")]),v._v("显示分区表、活动设备、空闲空间、所有分区\n"),e("ul",[e("li",[v._v("如果输出的分区表类型为"),e("code",{pre:!0},[v._v("msdos")]),v._v("则表示分区表是MBR分区表")]),v._v(" "),e("li",[v._v("输出内容：\n"),e("ul",[e("li",[v._v("分区号")]),v._v(" "),e("li",[v._v("起始字节")]),v._v(" "),e("li",[v._v("终止字节")]),v._v(" "),e("li",[v._v("大小")]),v._v(" "),e("li",[v._v("分区类型")]),v._v(" "),e("li",[v._v("文件系统")]),v._v(" "),e("li",[v._v("标签")])])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mklabel gpt|msdos")]),v._v("修改分区表类型。"),e("code",{pre:!0},[v._v("msdos")]),v._v("表示MBR分区表。"),e("strong",[v._v("会清空磁盘内容")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mkpart")]),v._v("创建分区。gpt的分区不需要区分主分区/扩展分区/逻辑分区")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mkfs")]),v._v("创建文件系统")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("resize")]),v._v("调整分区大小。"),e("strong",[v._v("一定要先卸载分区")]),v._v("。有风险不建议使用，用LVM更好一些")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("rm")]),v._v("删除分区。"),e("strong",[v._v("一定要先卸载分区")])])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mkfs [-t <fs-type>] <partition>")]),v._v("创建文件系统。但是不能指定块大小")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("mke2fs [options] <partition>")]),v._v("格式化分区\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-t <fs-type>")]),v._v("指定文件系统，如ext2/ext3/ext4")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-b <bytes>")]),v._v("指定block大小")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-i <bytes>")]),v._v("指定多少字节分配一个inode")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-j")]),v._v("建立带有ext3日志功能的文件系统")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-L <label>")]),v._v("设置卷标")])])])]),v._v(" "),e("p",[v._v("使用"),e("code",{pre:!0},[v._v("df")]),v._v("得到的剩余空间的准确的，使用"),e("code",{pre:!0},[v._v("du")]),v._v("得到的（总）文件大小是准确的。但是实际使用中会发现"),e("code",{pre:!0},[v._v("df")]),v._v("得到的已使用空间大于"),e("code",{pre:!0},[v._v("du")]),v._v("得到的已使用空间。原因是存在一些系统临时文件占用了空间，可能需要重启才能释放空间。重启服务器可以解决此问题。")]),v._v(" "),e("blockquote",[e("p",[v._v("可以使用"),e("code",{pre:!0},[v._v("lsof | grep deleted")]),v._v("查看被删除的文件，然后手动kill进程来释放空间。不建议使用，存在风险。"),e("strong",[v._v("计划之内的重启比意料之外的宕机好得多")])])]),v._v(" "),e("p",[v._v("Linux默认不支持动态调整分区大小。Windows中有一些工具可以直接修改分区表来调整分区大小，但是存在崩溃风险。Linux可以通过使用LVM实现动态分区")]),v._v(" "),e("h3",{attrs:{id:"fstab文件"}},[v._v("fstab文件")]),v._v(" "),e("p",[v._v("用来管理哪些分区会被自动挂载。如果启动系统的时候有些分区没有被找到，则会启动失败，所以不要自动挂载移动存储设备")]),v._v(" "),e("p",[v._v("文件内容：")]),v._v(" "),e("ul",[e("li",[v._v("设备文件名或"),e("code",{pre:!0},[v._v("UUID=<UUID>")]),v._v("（目前推荐UUID）\n"),e("ul",[e("li",[v._v("可以使用"),e("code",{pre:!0},[v._v("dumpe2fs <partition>")]),v._v("或"),e("code",{pre:!0},[v._v("ls -l /dev/disk/by-uuid")]),v._v("查看UUID")])])]),v._v(" "),e("li",[v._v("挂载点")]),v._v(" "),e("li",[v._v("文件系统")]),v._v(" "),e("li",[v._v("挂载选项\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("defaults")]),v._v("表示默认")])])]),v._v(" "),e("li",[v._v("是否可以被备份\n"),e("ul",[e("li",[v._v("0表示不备份。建议用在虚拟分区")]),v._v(" "),e("li",[v._v("1表示每天备份。推荐")]),v._v(" "),e("li",[v._v("2表示不定期备份")])])]),v._v(" "),e("li",[v._v("是否使用"),e("code",{pre:!0},[v._v("fsck")]),v._v("检测磁盘\n"),e("ul",[e("li",[v._v("0表示不检测。建议用在虚拟分区")]),v._v(" "),e("li",[v._v("1表示启动时检测。建议用在根分区")]),v._v(" "),e("li",[v._v("2表示启动后检测。建议用在根以外的所有分区")])])])]),v._v(" "),e("p",[v._v("如果是云服务器上这个文件写错导致开不了机，把盘拔了挂载到其他云服务器上修改即可")]),v._v(" "),e("h3",{attrs:{id:"管理swap分区"}},[v._v("管理swap分区")]),v._v(" "),e("blockquote",[e("p",[v._v("可以使用命令"),e("code",{pre:!0},[v._v("free")]),v._v("查看内存信息，参数"),e("code",{pre:!0},[v._v("-h")]),v._v("表示人性化显示。里面可以看到swap分区的空间。")]),v._v(" "),e("p",[e("code",{pre:!0},[v._v("buffers")]),v._v("用来加速硬盘写入速度，"),e("code",{pre:!0},[v._v("cached")]),v._v("用来加速硬盘的读取速度。由系统调度并自动调整大小。"),e("code",{pre:!0},[v._v("-/+ buffers/cache")]),v._v("意为除去"),e("code",{pre:!0},[v._v("buffers")]),v._v("和"),e("code",{pre:!0},[v._v("cached")]),v._v("之后数据占用的内存和剩余空间")])]),v._v(" "),e("p",[v._v("如果swap空间太小，可以手动增加空间")]),v._v(" "),e("ol",[e("li",[v._v("使用"),e("code",{pre:!0},[v._v("fdisk <device>")]),v._v("进入目标设备")]),v._v(" "),e("li",[v._v("使用"),e("code",{pre:!0},[v._v("t")]),v._v("命令修改分区ID")]),v._v(" "),e("li",[v._v("把分区的Hex code设置为82")]),v._v(" "),e("li",[v._v("使用"),e("code",{pre:!0},[v._v("mkswap <partition>")]),v._v("格式化分区为swap文件系统")]),v._v(" "),e("li",[v._v("使用"),e("code",{pre:!0},[v._v("swapon <partition>")]),v._v("添加swap分区（临时生效。如果要永久生效，需要修改"),e("code",{pre:!0},[v._v("/etc/fstab")]),v._v("，挂载点为"),e("code",{pre:!0},[v._v("swap")]),v._v("，文件系统为"),e("code",{pre:!0},[v._v("swap")]),v._v("，选项为"),e("code",{pre:!0},[v._v("defaults")]),v._v("，备份和检测都是"),e("code",{pre:!0},[v._v("0")]),v._v("）")])]),v._v(" "),e("h3",{attrs:{id:"raid"}},[v._v("RAID")]),v._v(" "),e("p",[v._v("能够配置的软RAID在实际生产中通常不会使用。直接使用硬件实现RAID")]),v._v(" "),e("h3",{attrs:{id:"磁盘配额"}},[v._v("磁盘配额")]),v._v(" "),e("p",[v._v("限制普通用户/组在某个分区能够使用的空间（防止磁盘空间耗尽）或文件个数（防止inode耗尽）。通常结合其他功能，比如FTP、WEB。")]),v._v(" "),e("ul",[e("li",[v._v("软限制(soft limit, aka quota)：到达极限时给出提示")]),v._v(" "),e("li",[v._v("硬限制(hard limit, aka limit)：到达极限时拒绝请求")]),v._v(" "),e("li",[v._v("宽限时间：到达软限制之后如果超过了宽限时间，会把软限制升级为硬限制。默认7天")])]),v._v(" "),e("p",[v._v("软限制和硬限制可以结合使用，比如设置90M的软限制，100M的硬限制")]),v._v(" "),e("blockquote",[e("p",[v._v("实际上组配额很少用。组配额不是平均分配到用户，而是先到先得")])]),v._v(" "),e("p",[v._v("前置条件：")]),v._v(" "),e("ol",[e("li",[v._v("检查内核是否支持磁盘配额："),e("code",{pre:!0},[v._v("grep QUOTA /boot/config-2.6.32-279.e16.i686")]),v._v("，如果"),e("code",{pre:!0},[v._v("CONFIG_QUOTA=y")]),v._v("则内核支持磁盘配额（默认是支持的）")]),v._v(" "),e("li",[v._v("检查是否安装了磁盘配额工具："),e("code",{pre:!0},[v._v("rpm -qa | grep quota")])])]),v._v(" "),e("ul",[e("li",[v._v("使分区支持配额：需要在"),e("code",{pre:!0},[v._v("mount")]),v._v("的时候使用"),e("code",{pre:!0},[v._v("usrquota")]),v._v("/"),e("code",{pre:!0},[v._v("grpquota")]),v._v("选项。如果需要永久生效需要改"),e("code",{pre:!0},[v._v("/etc/fstab")]),v._v("，比如把选项设置为"),e("code",{pre:!0},[v._v("defaults,usrquota,grpquota")])]),v._v(" "),e("li",[v._v("建立磁盘配额配置文件："),e("code",{pre:!0},[v._v("quotacheck [options] [partition]")]),v._v("。需要关闭SELinux，否则会报错\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("扫描"),e("code",{pre:!0},[v._v("/etc/mtab")]),v._v("文件中所有启动磁盘配额功能的分区。使用此选项时命令中不需要加入分区名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-c")]),v._v("忽略原有配置文件，重新扫描并生成配置文件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("创建用户配额配置文件，即"),e("code",{pre:!0},[v._v("/disk/aquota.user")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-g")]),v._v("创建组配额配置文件，即"),e("code",{pre:!0},[v._v("/disk/aquota.group")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-v")]),v._v("详细输出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-m")]),v._v("强制以读写的方式扫描文件系统。通常用于扫描根分区，因为根分区正在被系统使用，所以需要强制读写")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-f")]),v._v("强制扫描文件系统，并写入新的配置文件。通常用于扫描新添加的硬盘分区")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("quotacheck -avug")]),v._v("自动生成配置文件")])])]),v._v(" "),e("li",[v._v("设置配额："),e("code",{pre:!0},[v._v("edquota [options] [user|group]")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-u <username>")]),v._v("指定用户")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-g <group>")]),v._v("指定组")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-t")]),v._v("设定宽限时间")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-p")]),v._v("复制配额限制。"),e("code",{pre:!0},[v._v("edquota -p <old-user> -u <new-user>")])]),v._v(" "),e("li",[v._v("进入编辑模式后，"),e("strong",[v._v("不要")]),v._v("修改"),e("code",{pre:!0},[v._v("blocks")]),v._v("和"),e("code",{pre:!0},[v._v("inodes")]),v._v("，这两个值是已经占用的值，系统自动生成")]),v._v(" "),e("li",[v._v("文件大小的默认单位为KB")]),v._v(" "),e("li",[v._v("其实编辑的就是"),e("code",{pre:!0},[v._v("aquota.user")]),v._v("/"),e("code",{pre:!0},[v._v("aquota.group")]),v._v("文件，只不过这两个文件是二进制文件，不能直接用文本编辑器打开")])])]),v._v(" "),e("li",[v._v("启动配额："),e("code",{pre:!0},[v._v("quotaon [options] [partition]")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("根据"),e("code",{pre:!0},[v._v("/etc/mtab")]),v._v("文件启动所有配额分区。使用此选项时命令中不需要加入分区名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("启动用户配额")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-g")]),v._v("启动组配额")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-v")]),v._v("详细输出")])])]),v._v(" "),e("li",[v._v("关闭配额："),e("code",{pre:!0},[v._v("quotaoff [options] [partition]")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("根据"),e("code",{pre:!0},[v._v("/etc/mtab")]),v._v("关闭所有配额分区。使用此选项时命令中不需要加入分区名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("/"),e("code",{pre:!0},[v._v("-g")]),v._v("关闭用户/组配额")])])]),v._v(" "),e("li",[v._v("按用户/组查询配额："),e("code",{pre:!0},[v._v("quota [options] [user|group]")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-u <username>")]),v._v("/"),e("code",{pre:!0},[v._v("-g <group>")]),v._v("查看用户/组配额")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-v")]),v._v("详细输出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-s")]),v._v("使用易读单位")])])]),v._v(" "),e("li",[v._v("按分区查询配额："),e("code",{pre:!0},[v._v("requota [options] [partition]")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-a")]),v._v("根据"),e("code",{pre:!0},[v._v("/etc/mtab")]),v._v("文件查询配额。使用此选项时命令中不需要加入分区名")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-u")]),v._v("/"),e("code",{pre:!0},[v._v("-g")]),v._v("查询用户/组配额")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-v")]),v._v("详细输出")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-s")]),v._v("使用易读输出")])])]),v._v(" "),e("li",[v._v("非交互模式设置配额："),e("code",{pre:!0},[v._v("setquota -u <user> <block-quota> <block-limit> <inode-quota> <inode-limit> <partition>")])])]),v._v(" "),e("blockquote",[e("ul",[e("li",[v._v("查看SELinux是否开启："),e("code",{pre:!0},[v._v("getenforce")])]),v._v(" "),e("li",[v._v("开启/关闭SELinux："),e("code",{pre:!0},[v._v("setenforce 1|0")]),v._v("。关闭后，状态变为"),e("code",{pre:!0},[v._v("permissive")]),v._v("危险操作只会警告而不会禁止")]),v._v(" "),e("li",[v._v("手动修改："),e("code",{pre:!0},[v._v("/etc/selinux/config")]),v._v("。可以把SELinux设置为"),e("code",{pre:!0},[v._v("disabled")]),v._v("，但是需要重启系统")])])]),v._v(" "),e("blockquote",[e("p",[v._v("测试："),e("code",{pre:!0},[v._v("dd if=/dev/zero of=/disk/testfile bs=1M count=60")])]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("dd")]),v._v("命令用来实现磁盘对拷")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("if=/dev/zero")]),v._v("指定源文件为全0文件（二进制），目标文件为"),e("code",{pre:!0},[v._v("of=/disk/testfile")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("bs=1M")]),v._v("每次复制1M")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("count=60")]),v._v("复制60次")])])]),v._v(" "),e("h3",{attrs:{id:"lvm"}},[v._v("LVM")]),v._v(" "),e("blockquote",[e("p",[v._v("Logic Volume Manager")])]),v._v(" "),e("h4",{attrs:{id:"概念"}},[v._v("概念")]),v._v(" "),e("p",[v._v("用来实现安全地动态扩容分区（第三方软件工具都是有风险的）")]),v._v(" "),e("p",[e("strong",[v._v("实际生产环境应该使用LVM而不是之前讲的基本分区")]),v._v("（主分区/扩展分区/逻辑分区）")]),v._v(" "),e("p",[v._v("概念：")]),v._v(" "),e("ul",[e("li",[v._v("物理卷(Physical Volume, PV)，真正的物理硬盘或分区")]),v._v(" "),e("li",[v._v("卷组(Volume Group, VG)，多个物理卷的组合。相当于逻辑硬盘(Logical Disk)。可以动态扩容")]),v._v(" "),e("li",[v._v("逻辑卷(Logical Volume, LV)，是逻辑硬盘中的分区，可以动态扩容。需要格式化和挂载才能使用")]),v._v(" "),e("li",[v._v("物理扩展(Physical Extend, PE)，逻辑卷中空间的最小单元，默认4MB（不是data block size。具体数据块大小是格式化卷的时候确定的）\n"),e("ul",[e("li",[v._v("fdisk是按照柱面划分卷，最小单位是柱面")])])])]),v._v(" "),e("blockquote",[e("p",[v._v("理论上支持数据缩减，但是不建议使用，可能数据丢失")])]),v._v(" "),e("h4",{attrs:{id:"建立lvm"}},[v._v("建立LVM")]),v._v(" "),e("p",[v._v("宏观步骤：")]),v._v(" "),e("ol",[e("li",[v._v("把物理硬盘划分为物理分区（可选）")]),v._v(" "),e("li",[v._v("把物理分区设置为物理卷。也可以把整块硬盘建立为物理卷")]),v._v(" "),e("li",[v._v("把物理卷整合为卷组。可以把新的物理分区加入卷组实现扩容，也可以从卷组中删除物理分区。卷组会成为"),e("code",{pre:!0},[v._v("/dev")]),v._v("下的文件夹")]),v._v(" "),e("li",[v._v("把卷组划分为逻辑卷。逻辑卷会成为"),e("code",{pre:!0},[v._v("/dev/<vg-name>")]),v._v("文件夹下的设备文件")]),v._v(" "),e("li",[v._v("格式化、挂载")])]),v._v(" "),e("p",[v._v("相关命令：")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("fdisk")]),v._v("把分区的文件系统ID设置为LVM的ID："),e("code",{pre:!0},[v._v("8e")])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pvcreate <device|partition>")]),v._v("把设备或卷设置为物理卷")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pvscan")]),v._v("查看系统中的物理卷")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pvdisplay")]),v._v("查看详细物理卷信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("pvremove <device|partition>")]),v._v("删除物理卷")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vgcreate [options] <vg-name> <pv-name>")]),v._v("创建卷组。可以指定多个物理卷。"),e("code",{pre:!0},[v._v("pv-name")]),v._v("就是物理卷的设备名\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-s <pe-size>")]),v._v("指定PE的大小。默认4MB")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vgscan")]),v._v("查看系统中是否有卷组")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vgdisplay")]),v._v("查看卷组详细状态")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vgextend <vg-name> <pv-name>")]),v._v("卷组扩容")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vgreduce <vg-name> <pv-name>")]),v._v("卷组缩容（不建议使用）")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("vgremove <vg-name>")]),v._v("删除卷组")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("lvcreate [options] <vg-name>")]),v._v("创建逻辑卷\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-L <size>")]),v._v("指定容量，单位可以是M/G/T")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-l <count>")]),v._v("指定PE个数来创建卷。通常不会用")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-n <lv-name>")]),v._v("指定逻辑卷名")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("lvscan")]),v._v("/"),e("code",{pre:!0},[v._v("lvdisplay")]),v._v("查看逻辑卷/详细信息")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("lvresize [options] <lv-name>")]),v._v("调整逻辑卷大小。安全，不会导致文件丢失\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("-L <size>")]),v._v("设置逻辑卷大小。可以直接指定数字，也可以使用"),e("code",{pre:!0},[v._v("+/-")]),v._v("表示增量，单位为M/G/T")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("-l <count>")]),v._v("按照PE个数设置大小。通常不会用")])])]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("resize2fs [options] [device] [size]")]),v._v("虽然设备大小调整了，但是可能没有挂载上。"),e("strong",[v._v("逻辑卷不用重新挂载就可以调整容量")]),v._v(" "),e("ul",[e("li",[e("code",{pre:!0},[v._v("-f")]),v._v("强制调整")]),v._v(" "),e("li",[v._v("如果不指定"),e("code",{pre:!0},[v._v("size")]),v._v("，则会使用整个分区")])])])]),v._v(" "),e("p",[v._v("坑：boot分区只能放在标准分区中，不能放在LVM中，否则系统无法正常启动")])])}]};v.exports={attributes:{title:"Linux Basic (part 5)",description:"磁盘分区、格式化、挂载、配额、LVM"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);