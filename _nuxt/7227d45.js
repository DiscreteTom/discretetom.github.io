(window.webpackJsonp=window.webpackJsonp||[]).push([[69,268,269,270],{1175:function(v,_,l){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),e("p",[v._v("本文是观看"),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1Db411G7pf"}},[v._v("此视频")]),v._v("时的笔记")]),v._v(" "),e("h2",{attrs:{id:"网络存储分类"}},[v._v("网络存储分类")]),v._v(" "),e("ul",[e("li",[v._v("按照网络拓扑分类\n"),e("ul",[e("li",[v._v("DAS(Direct Attached Storage，直接附加存储)\n"),e("ul",[e("li",[v._v("非网络存储。也就是本地硬盘。网络存储最终还是会访问到本地存储")]),v._v(" "),e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("技术简单")]),v._v(" "),e("li",[v._v("传输速度高")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("存储设备和磁盘绑定")])])])])]),v._v(" "),e("li",[v._v("NAS(Network Attached Storage，网络附加存储)\n"),e("ul",[e("li",[v._v("很常见。有些家用路由器可能就自带NAS")]),v._v(" "),e("li",[v._v("之前用SMB、FTP、NFS实现的就是NAS")]),v._v(" "),e("li",[v._v("公网用户 > 交换机 > 应用程序服务器 > 交换机 > 存储设备\n"),e("ul",[e("li",[v._v("【公网用户访问服务】和【服务访问存储设备】使用的是相同的交换机")]),v._v(" "),e("li",[v._v("应用程序服务器和存储设备是平级的")])])]),v._v(" "),e("li",[e("img",{attrs:{src:l(427),alt:"2-1"}})]),v._v(" "),e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("技术相对简单")]),v._v(" "),e("li",[v._v("存储服务器和客户端能够通过网络通信即可")]),v._v(" "),e("li",[v._v("通常放在局域网")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("存储速率较慢，交换机压力大")])])])])]),v._v(" "),e("li",[v._v("SAN(Storage Area Network，存储区域网络)\n"),e("ul",[e("li",[v._v("公网用户 > 其他交换机 > 应用程序服务器 > 内网交换机 > 存储设备\n"),e("ul",[e("li",[v._v("也就是说应用程序服务器比存储设备的层级高")]),v._v(" "),e("li",[v._v("相比于NAS，【公网用户访问服务】和【服务访问存储设备】使用不同的网络设备")])])]),v._v(" "),e("li",[e("img",{attrs:{src:l(428),alt:"2-2"}})]),v._v(" "),e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("安全性高")]),v._v(" "),e("li",[v._v("速度较高")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("贵")]),v._v(" "),e("li",[v._v("技术难度相对高")])])])])])])]),v._v(" "),e("li",[v._v("按照存储技术分类\n"),e("ul",[e("li",[v._v("块存储\n"),e("ul",[e("li",[v._v("硬盘。是最底层的存储技术")]),v._v(" "),e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("可以通过RAID、LVM等技术提供容错、扩容等功能")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("不利于共享")])])])])]),v._v(" "),e("li",[v._v("文件存储/网络存储\n"),e("ul",[e("li",[v._v("FTP、SMB、NFS")]),v._v(" "),e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("构建所需资金不多")]),v._v(" "),e("li",[v._v("跨平台共享")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("读写速度慢")])])])])]),v._v(" "),e("li",[v._v("对象存储/分布式存储\n"),e("ul",[e("li",[v._v("把对象的元数据和对象数据分开存储，可以分别扩展、实现冗余，实现超高吞吐量")]),v._v(" "),e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("读写效率高")]),v._v(" "),e("li",[v._v("跨平台")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("造价昂贵")]),v._v(" "),e("li",[v._v("技术实现难度高")])])])])])])])]),v._v(" "),e("p",[v._v("举例：")]),v._v(" "),e("ul",[e("li",[v._v("硬盘\n"),e("ul",[e("li",[v._v("块存储 + DAS")])])]),v._v(" "),e("li",[v._v("iSCSI集群\n"),e("ul",[e("li",[v._v("块存储 + NAS")]),v._v(" "),e("li",[v._v("块存储 + SAN")])])]),v._v(" "),e("li",[v._v("NFS\n"),e("ul",[e("li",[v._v("文件存储 + NAS")])])]),v._v(" "),e("li",[v._v("MFS(MooseFS驯鹿/RHCS红帽集群套件)\n"),e("ul",[e("li",[v._v("对象存储 + SAN")])])])]),v._v(" "),e("h2",{attrs:{id:"nfs"}},[v._v("NFS")]),v._v(" "),e("p",[v._v("Network File System")]),v._v(" "),e("h3",{attrs:{id:"nfs概述"}},[v._v("NFS概述")]),v._v(" "),e("ul",[e("li",[v._v("跨平台")]),v._v(" "),e("li",[v._v("已经被整合到Linux内核。所有Linux都支持")]),v._v(" "),e("li",[v._v("依赖RPC(Remote Procedure Call)")])]),v._v(" "),e("h3",{attrs:{id:"nfs软件与命令"}},[v._v("NFS软件与命令")]),v._v(" "),e("ul",[e("li",[v._v("需要安装的软件\n"),e("ul",[e("li",[v._v("nfs-utils\n"),e("ul",[e("li",[v._v("内含rpc.nfsd, rpc.mountd, daemons")])])]),v._v(" "),e("li",[v._v("rpcbind\n"),e("ul",[e("li",[v._v("CentOS 5.X的软件名为portmap")])])])])]),v._v(" "),e("li",[v._v("配置文件："),e("code",{pre:!0},[v._v("/etc/exports")]),v._v(" "),e("ul",[e("li",[v._v("格式："),e("code",{pre:!0},[v._v("共享目录 客户端CIDR(参数...)...")]),v._v(" "),e("ul",[e("li",[v._v("参数：\n"),e("ul",[e("li",[e("code",{pre:!0},[v._v("rw")]),v._v("可读写。只有同时开启文件系统的写权限和NFS的写权限才能成功写文件")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("ro")]),v._v("只读")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("sync")]),v._v("同步写入硬盘和内存。慢，安全")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("async")]),v._v("先写到内存，异步写到硬盘。快，有些不安全。但是很常用，因为服务器不容易宕机，有些服务器还有内存恢复机制")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("no_root_squash")]),v._v("如果使用root连接NFS，则操作NFS时也有root权限。显然此选项不安全")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("root_squash")]),v._v("如果客户端使用root，则操作NFS时使用匿名用户，即nobody或nfsnobody")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("all_squash")]),v._v("操作NFS时永远使用匿名用户")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("anonuid")]),v._v("匿名用户的UID，通常是nobody或nfsnobody")]),v._v(" "),e("li",[e("code",{pre:!0},[v._v("anongid")]),v._v("匿名用户的GID")])])])])])])]),v._v(" "),e("li",[v._v("挂载命令"),e("code",{pre:!0},[v._v("mount -t nfs <ip>:<path> <path>")])]),v._v(" "),e("li",[v._v("查看某个服务器启动了哪些挂载："),e("code",{pre:!0},[v._v("showmount -e <ip>")])])]),v._v(" "),e("h2",{attrs:{id:"mfs"}},[v._v("MFS")]),v._v(" "),e("h3",{attrs:{id:"mfs概述"}},[v._v("MFS概述")]),v._v(" "),e("p",[v._v("MooseFS，驯鹿")]),v._v(" "),e("ul",[e("li",[v._v("具备冗余容错能力的分布式文件系统（对象存储）\n"),e("ul",[e("li",[v._v("同一个对象会在多个物理服务器拥有多个副本")]),v._v(" "),e("li",[v._v("所有副本都被独立地保存在一个磁盘或分区上。即对象不会被拆开存储到不同物理设备")])])]),v._v(" "),e("li",[v._v("优点\n"),e("ul",[e("li",[v._v("高可靠，因为冗余存储")]),v._v(" "),e("li",[v._v("高可扩展，可以轻松添加主机实现扩容")]),v._v(" "),e("li",[v._v("高可容错，可以设置对象回收站，对象被删除后一段时间内可以恢复")]),v._v(" "),e("li",[v._v("高数据一致性，即使对象正在被写入或访问，仍然可以轻松完整文件的一致性快照")])])]),v._v(" "),e("li",[v._v("缺点\n"),e("ul",[e("li",[v._v("master节点在MFS免费版中是单点。如果master宕机，数据虽然不会丢，但是服务会中断。虽然会把数据同步到备份服务器，但是恢复需要时间\n"),e("ul",[e("li",[v._v("企业版MFS的master不是单点")])])]),v._v(" "),e("li",[v._v("master对内存要求较高\n"),e("ul",[e("li",[v._v("MFS会把所有对象元数据保存在内存中，因为效率高（但是硬盘上也有同样的备份）")]),v._v(" "),e("li",[v._v("100万个文件大约需要300MB内存。1亿个文件大约需要30GB内存")])])]),v._v(" "),e("li",[v._v("默认metalogger复制元数据时间较长（可调整）\n"),e("ul",[e("li",[v._v("即完整备份元数据时间较长")]),v._v(" "),e("li",[v._v("如果元数据比较少，可以修改备份周期，比如一个小时备份一次")])])])])]),v._v(" "),e("li",[v._v("应用场景\n"),e("ul",[e("li",[v._v("大规模高并发网络文件存储，大文件、小文件均适用")]),v._v(" "),e("li",[v._v("大规模数据处理，如日志分析")])])])]),v._v(" "),e("h3",{attrs:{id:"mfs组件"}},[v._v("MFS组件")]),v._v(" "),e("ul",[e("li",[v._v("master(managing server)\n"),e("ul",[e("li",[v._v("在内存中存储对象的元数据（大小、存储位置、拥有者、权限等）")]),v._v(" "),e("li",[v._v("分发用户请求")]),v._v(" "),e("li",[v._v("社区版MFS中只有一个master节点。可以自行使用keepalive等工具实现高可用")]),v._v(" "),e("li",[v._v("内存中的数据会同步持久化到存储设备\n"),e("ul",[e("li",[v._v("一个更新请求到达的时候，先更新内存，然后更新存储，最后发送响应")])])])])]),v._v(" "),e("li",[v._v("metalogger(metadata backup servers)\n"),e("ul",[e("li",[v._v("实时备份master上面的元数据。master可以宕机但是数据不能丢")])])]),v._v(" "),e("li",[v._v("chunk server\n"),e("ul",[e("li",[v._v("存储对象的数据")]),v._v(" "),e("li",[v._v("对象以chunk为单位进行存储，每个chunk最大64MB，可以小于64MB。超过64MB的对象会被切分")]),v._v(" "),e("li",[v._v("chunk server的剩余空间大于1GB的时候新的数据才能被写入（实际可能比1GB更大）")]),v._v(" "),e("li",[v._v("如果对象的存储次数为1(goal=1)，则对象会被随机存储到一个chunk server上。如果goal大于1，则由master调度保存在不同chunk server。如果goal大于chunk server的数量，则多出的数量无效，即每个chunk server最多保存一个copy")]),v._v(" "),e("li",[v._v("如果chunk server挂了，master会在新的chunk server上面创建对象的copy来维持对象的goal值。如果旧chunk server恢复了，master会随机删掉一个copy来维持goal")])])]),v._v(" "),e("li",[v._v("client\n"),e("ul",[e("li",[v._v("挂载并使用MFS文件系统")]),v._v(" "),e("li",[v._v("读写文件时，客户端会先访问master获得metadata，然后根据metadata访问chunk server获得文件")]),v._v(" "),e("li",[v._v("通过fuse mechanism实现MFS文件系统的挂载\n"),e("ul",[e("li",[v._v("fuse: 用户空间文件系统，由IBM和微软开发。正常的文件系统在内核空间，而fuse在用户空间")]),v._v(" "),e("li",[v._v("只要系统支持fuse，就可以使用MFS客户端")])])])])])]),v._v(" "),e("h3",{attrs:{id:"mfs文件操作"}},[v._v("MFS文件操作")]),v._v(" "),e("ul",[e("li",[v._v("遍历\n"),e("ul",[e("li",[v._v("客户端问master得到对象列表")]),v._v(" "),e("li",[v._v("客户端不会访问到chunk server")])])]),v._v(" "),e("li",[v._v("读对象\n"),e("ul",[e("li",[v._v("客户端问master")]),v._v(" "),e("li",[v._v("master在元数据中检索，如果文件存在，返回chunk server的IP、端口、chunk ID")]),v._v(" "),e("li",[v._v("客户端连接到chunk server获取数据")])])]),v._v(" "),e("li",[v._v("删除对象\n"),e("ul",[e("li",[v._v("客户端请求master")]),v._v(" "),e("li",[v._v("master删除元数据，然后在一个异步队列中添加一条【删除对象数据】的消息")]),v._v(" "),e("li",[v._v("等待一段时间后（反悔期），master删除chunk server中的对象数据")])])]),v._v(" "),e("li",[v._v("修改对象\n"),e("ul",[e("li",[v._v("客户端请求master")]),v._v(" "),e("li",[v._v("master在chunk server上面拷贝对象A，得到一个新对象B")]),v._v(" "),e("li",[v._v("master返回新对象B的位置")]),v._v(" "),e("li",[v._v("客户端修改新对象B。修改过程中如果有其他读对象的请求，master会返回旧对象A的位置")]),v._v(" "),e("li",[v._v("客户端完成修改，master会对比对象A和对象B的内容\n"),e("ul",[e("li",[v._v("如果对象A和对象B内容不同，则master会拷贝对象B得到对象C，然后删除对象AB，更新元数据")]),v._v(" "),e("li",[v._v("如果对象A和对象B的内容相同，则删除对象B，并更新对象的修改时间")])])])])]),v._v(" "),e("li",[v._v("创建对象\n"),e("ul",[e("li",[v._v("客户端请求master，请求中包含对象的元数据，包括文件名、大小等")]),v._v(" "),e("li",[v._v("master在chunk server中创建对象，并告诉客户端新对象的位置")]),v._v(" "),e("li",[v._v("客户端连接到chunk server的对象，上传数据")]),v._v(" "),e("li",[v._v("客户端通知master上传完毕")]),v._v(" "),e("li",[v._v("master去chunk server检查对象的实际大小等信息")])])])]),v._v(" "),e("h2",{attrs:{id:"iscsi"}},[v._v("ISCSI")]),v._v(" "),e("h3",{attrs:{id:"iscsi概述"}},[v._v("ISCSI概述")]),v._v(" "),e("p",[e("img",{attrs:{src:l(429),alt:"2-3"}})]),v._v(" "),e("ul",[e("li",[v._v("基于IP网络的块存储")]),v._v(" "),e("li",[v._v("系统 > SCSI驱动 > iSCSI驱动 > IP网络 > 存储设备")])]),v._v(" "),e("h3",{attrs:{id:"iscsi组件"}},[v._v("iSCSI组件")]),v._v(" "),e("ul",[e("li",[v._v("服务端（存储设备） - target\n"),e("ul",[e("li",[v._v("LUN(Logical Unit)逻辑单元，即把服务器的存储分割成很多块，而不是把所有存储都共享出去。每个块是一个LUN")])])]),v._v(" "),e("li",[v._v("客户端（应用程序） - initiator")])])])}]};v.exports={attributes:{title:"Linux Cluster(Part 2)",description:"DAS/NAS/SAN, NFS, MFS, iSCSI",tags:["Storage"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},427:function(v,_,l){v.exports=l.p+"img/2-1.7dff179.png"},428:function(v,_,l){v.exports=l.p+"img/2-2.fa339c4.png"},429:function(v,_,l){v.exports=l.p+"img/2-3.1744fac.png"}}]);