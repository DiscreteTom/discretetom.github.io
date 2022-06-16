(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1187:function(e,v){const _={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),_("p",[e._v("本文是观看"),_("a",{attrs:{href:"https://www.bilibili.com/video/BV1n4411v7Rz"}},[e._v("此视频")]),e._v("时的笔记")]),e._v(" "),_("h2",{attrs:{id:"docker"}},[e._v("Docker")]),e._v(" "),_("h3",{attrs:{id:"一些概念"}},[e._v("一些概念")]),e._v(" "),_("ul",[_("li",[e._v("Linux Container(LXC)是一种内核虚拟化技术，提供轻量级的虚拟化，用来隔离进程和资源")]),e._v(" "),_("li",[e._v("Docker基于LXC，封装了一些上层工具，使用go语言开发并开源")]),e._v(" "),_("li",[e._v("对比传统虚拟化\n"),_("ul",[_("li",[e._v("传统虚拟化\n"),_("ul",[_("li",[e._v("层级：Hardware -> Host OS -> Hypervisor -> Guest OS -> App")]),e._v(" "),_("li",[e._v("优点：内核级别隔离，每个APP都可以有自己的Guest OS，更安全")]),e._v(" "),_("li",[e._v("缺点：Guest OS导致资源浪费")])])]),e._v(" "),_("li",[e._v("Docker\n"),_("ul",[_("li",[e._v("层级：Hardware -> Host OS -> Docker Engine -> App")]),e._v(" "),_("li",[e._v("优点：不需要Guest OS，而是共享内核，资源利用率更高")]),e._v(" "),_("li",[e._v("缺点：共享内核导致安全性比传统虚拟化差")])])])])]),e._v(" "),_("li",[e._v("概念\n"),_("ul",[_("li",[e._v("镜像(Image)\n"),_("ul",[_("li",[e._v("一个封装好的运行环境")])])]),e._v(" "),_("li",[e._v("仓库(Repository)\n"),_("ul",[_("li",[e._v("用来存放镜像")])])]),e._v(" "),_("li",[e._v("容器(Container)\n"),_("ul",[_("li",[e._v("运行中的镜像")])])]),e._v(" "),_("li",[e._v("Docker服务端\n"),_("ul",[_("li",[e._v("Docker daemon，接收用户从Docker client发出的请求并按照规则进行路由分发")])])]),e._v(" "),_("li",[e._v("Docker客户端\n"),_("ul",[_("li",[e._v("用来向服务端发出请求来管理Docker")])])])])])]),e._v(" "),_("h4",{attrs:{id:"修改用户权限"}},[e._v("修改用户权限")]),e._v(" "),_("p",[e._v("如果没有把用户添加到docker组，操作时可能会出现权限问题。")]),e._v(" "),_("p",[e._v("使用"),_("code",{pre:!0},[e._v("sudo usermod -aG docker <username>")]),e._v("把用户添加到docker组")]),e._v(" "),_("p",[e._v("需要重新登录shell才能应用此更改")]),e._v(" "),_("h4",{attrs:{id:"通常工作流程"}},[e._v("通常工作流程")]),e._v(" "),_("ol",[_("li",[e._v("客户端执行"),_("code",{pre:!0},[e._v("docker pull xxx")])]),e._v(" "),_("li",[e._v("服务器接收命令，在仓库搜索镜像并下载")]),e._v(" "),_("li",[e._v("客户端执行"),_("code",{pre:!0},[e._v("docker run xxx")])]),e._v(" "),_("li",[e._v("服务器接收命令，启动应用得到容器")]),e._v(" "),_("li",[e._v("客户端执行"),_("code",{pre:!0},[e._v("docker stop xxx")])]),e._v(" "),_("li",[e._v("服务器接收命令，停止应用")])]),e._v(" "),_("h4",{attrs:{id:"镜像与容器的原理"}},[e._v("镜像与容器的原理")]),e._v(" "),_("ul",[_("li",[e._v("每个镜像文件内部包含多个【层】")]),e._v(" "),_("li",[e._v("更新镜像的时候可以仅更新部分层")]),e._v(" "),_("li",[e._v("使用镜像文件创建容器的时候，容器会使用镜像里面的文件（配置文件、依赖库、第三方软件、操作系统），并创建一个空白层来处理环境差异（比如宿主系统没有某环境变量，而容器使用了某环境变量，则在空白层设置环境变量。空白层的配置优先级高于宿主系统）")]),e._v(" "),_("li",[e._v("每个镜像最多128层")]),e._v(" "),_("li",[e._v("镜像的层可以基于哈希进行跨镜像复用")]),e._v(" "),_("li",[e._v("镜像使用联合文件系统(union file system)把各层文件叠加在一起")]),e._v(" "),_("li",[e._v("创建容器时的文件系统\n"),_("ul",[_("li",[e._v("传统虚拟化环境下，启动虚拟机时\n"),_("ul",[_("li",[e._v("先使用bootfs作为文件系统完成内核的引导，内核加载后会卸载bootfs以节省资源")]),e._v(" "),_("li",[e._v("内核会以只读模式挂载rootfs，完成系统自建后把rootfs改为读写模式")])])]),e._v(" "),_("li",[e._v("Docker环境下，启动容器时\n"),_("ul",[_("li",[e._v("先使用bootfs作为文件系统完成内核的引导，内核加载后会卸载bootfs以节省资源")]),e._v(" "),_("li",[e._v("以只读模式挂载rootfs，文件从镜像中取。因为镜像内文件不能被容器修改，所以rootfs永远为只读模式，然后使用UFS技术挂载一个可写的层")])])])])]),e._v(" "),_("li",[e._v("镜像必须至少有一个工作在前台的进程才能正常运行。基础镜像通常会提供一个supervisor守护进程以防容器退出")])]),e._v(" "),_("h3",{attrs:{id:"docker命令"}},[e._v("docker命令")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("docker info")]),e._v("docker守护进程的状态")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker search")]),e._v("从镜像仓库查询")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker pull/push")]),e._v("下载/上传镜像\n"),_("ul",[_("li",[e._v("镜像名格式："),_("code",{pre:!0},[e._v("path/image-name:label")]),e._v("。通常没有"),_("code",{pre:!0},[e._v("path")]),e._v("的是官方镜像，有"),_("code",{pre:!0},[e._v("path")]),e._v("的是用户镜像，比如"),_("code",{pre:!0},[e._v("nginx")]),e._v("就是官方镜像。"),_("code",{pre:!0},[e._v("label")]),e._v("默认是"),_("code",{pre:!0},[e._v("latest")]),e._v("，即"),_("code",{pre:!0},[e._v("nginx")]),e._v("表示"),_("code",{pre:!0},[e._v("nginx:latest")])])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker start/stop")]),e._v("启动/停止容器")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker images")]),e._v("本地镜像\n"),_("ul",[_("li",[e._v("由于不同镜像可能共用一些层，所以这里输出的所有镜像大小不表示真实磁盘空间占用")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker rmi")]),e._v("删除镜像\n"),_("ul",[_("li",[e._v("可以使用镜像ID或镜像名删除。如果使用镜像名，必须带"),_("code",{pre:!0},[e._v("label")])]),e._v(" "),_("li",[e._v("无法删除正在使用的镜像")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker ps")]),e._v("查看当前已创建的容器\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("-a")]),e._v("可以查看已经停止的镜像")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--no-trunc")]),e._v("查看容器的完整ID")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker run")]),e._v("创建容器\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("--restart=always")]),e._v("启动docker时自动启动容器")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-h www.example.com")]),e._v("设置容器的主机名")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--dns 127.0.0.1")]),e._v("设置容器使用的DNS服务器")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--dns-search")]),e._v("DNS搜索设置")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--add-host <hostname>:<IP>")]),e._v("注入域名的解析")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--rm")]),e._v("服务停止时自动删除")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-p <host-port>:<container-port>")]),e._v("端口映射")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-d")]),e._v("后台运行")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--env k=v")]),e._v("注入环境变量")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--name <name>")]),e._v("命名")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-v <host-dir>:<volume-dir>")]),e._v("挂载卷")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--volumes-from <container>")]),e._v("共享卷")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker run -it --entrypoint /bin/bash <image> <params>")]),e._v("交互式运行docker")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker run -a stdin -a stdout -it <image> /bin/bash")]),e._v("交互式运行docker")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker rm")]),e._v("删除容器\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("-f")]),e._v("删除正在运行的容器。否则只能删除"),_("code",{pre:!0},[e._v("stop")]),e._v("状态的容器")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-v")]),e._v("删除卷")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker inspect")]),e._v("查看容器信息\n"),_("ul",[_("li",[e._v("可以看到容器的IP地址，可以Ping")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker logs")]),e._v("查看容器日志")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker stats")]),e._v("查看容器占用系统资源")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker exec <container> <command>")]),e._v("在容器内执行命令\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("-it")]),e._v("表示交互模式。其中"),_("code",{pre:!0},[e._v("-i")]),e._v("表示维持stdin开启，"),_("code",{pre:!0},[e._v("-t")]),e._v("表示分配一个伪终端")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker exec -it <container> /bin/bash")]),e._v("登录容器的bash")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker login [registry]")]),e._v("登录\n"),_("ul",[_("li",[e._v("默认的registry是docker官方hub.docker.com")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker port <container>")]),e._v("查看容器当前端口映射关系")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker rm -f $( docker ps -a -q )")]),e._v("删除所有当前镜像。慎用")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker -H <ip>:<post> <command>")]),e._v("远程调用docker命令。慎用")])]),e._v(" "),_("h3",{attrs:{id:"构建镜像"}},[e._v("构建镜像")]),e._v(" "),_("h4",{attrs:{id:"构建镜像的方式"}},[e._v("构建镜像的方式")]),e._v(" "),_("ul",[_("li",[e._v("把已有的容器转换为镜像。"),_("code",{pre:!0},[e._v("docker commit <container> <image-name>")])]),e._v(" "),_("li",[e._v("使用Dockerfile构建。"),_("code",{pre:!0},[e._v("docker build -t <image-name> <docker-file-folder>")]),e._v(" "),_("ul",[_("li",[e._v("在"),_("code",{pre:!0},[e._v("docker-file-folder")]),e._v("下寻找"),_("code",{pre:!0},[e._v("Dockerfile")]),e._v("文件")]),e._v(" "),_("li",[e._v("比如"),_("code",{pre:!0},[e._v("docker build -t nginx:test .")])])])])]),e._v(" "),_("h4",{attrs:{id:"dockerfile"}},[e._v("Dockerfile")]),e._v(" "),_("p",[e._v("基础镜像：通常Linux操作系统的开发商会提供基础镜像。比如"),_("code",{pre:!0},[e._v("library/centos")]),e._v("是最小的centos镜像，"),_("code",{pre:!0},[e._v("public/centos")]),e._v("是包含一些调试工具的centos镜像")]),e._v(" "),_("p",[e._v("语法：")]),e._v(" "),_("pre",{staticClass:"language-bash"},[_("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("FROM centos:7.2 "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定基础镜像")]),e._v("\nMAINTAINER DiscreteTom "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"discrete_tom@outlook.com"')]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 维护者")]),e._v("\n\nRUN "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" scripts.example.com "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" install.sh "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 构建时镜像时执行命令")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 可以有多个RUN指令")]),e._v("\n\nCMD /usr/bin/supervisor "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 容器启动时执行的命令")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果有多个CMD指令，则仅执行最后一个")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 类似的指令：ENTRYPOINT")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 用法1：ENTRYPOINT直接指定命令，和CMD一样")]),e._v("\n\t\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ENTRYPOINT /usr/bin/supervisor")]),e._v("\n\t\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 构建镜像时仅执行最后一个CMD或ENTRYPOINT")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 用法2：ENTRYPOINT指定程序，CMD指定参数。必须使用json语法")]),e._v("\n\t\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# ENTRYPOINT ["/usr/bin/xxx"]')]),e._v("\n\t\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# CMD ["param1", "param2"]')]),e._v("\n\n"),_("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v(" root "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置启动容器的用户。默认是root")]),e._v("\nWORKDIR /tmp "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 切换工作目录，对RUN/CMD/ENTRYPOINT生效")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 可以多次切换，相当于cd")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# WORKDIR /folder1 WORKDIR /folder2 RUN vim a.txt相当于RUN cd /folder1/folder2 && vim a.txt")]),e._v("\nEXPOSE "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 暴露哪些端口。只是一个标注，执行docker ps的时候可以看到，没有实际效果")]),e._v("\nENV JAVA_HOME /path/to/java "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 注入环境变量")]),e._v("\nADD "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("src"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dest"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 把宿主机的文件添加到镜像。支持URL，如果文件是压缩包会自动解压")]),e._v("\nCOPY "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("src"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dest"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 类似ADD，但是不支持URL，不会自动解压")]),e._v("\nVOLUME "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/tmp/data"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 用来持久化数据")]),e._v("\n\nONBUILD ADD /bash "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在子镜像里面执行的操作")]),e._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 即，使用此镜像作为新镜像的FROM时，在新镜像执行的操作，比如保护数据")]),e._v("\n")])]),e._v(" "),_("p",[e._v("Dockerfile文件中的行和docker镜像的层有对应关系。由于镜像最多128层，所以Dockerfile不能无限长")]),e._v(" "),_("h3",{attrs:{id:"构建私有镜像仓库"}},[e._v("构建私有镜像仓库")]),e._v(" "),_("ul",[_("li",[e._v("官方方案registry\n"),_("ul",[_("li",[e._v("适用于小环境")]),e._v(" "),_("li",[e._v("也是一个docker镜像，部署即可")])])]),e._v(" "),_("li",[e._v("Harbor\n"),_("ul",[_("li",[e._v("VMware开发的")]),e._v(" "),_("li",[e._v("在官方的基础上添加了权限认证")]),e._v(" "),_("li",[e._v("原理：请求发送到Nginx，反向代理到官方的Registry。使用MySQL存储鉴权数据")])])])]),e._v(" "),_("h3",{attrs:{id:"网络管理"}},[e._v("网络管理")]),e._v(" "),_("h4",{attrs:{id:"网络通信原理"}},[e._v("网络通信原理")]),e._v(" "),_("ul",[_("li",[e._v("安装docker之后会有一个"),_("code",{pre:!0},[e._v("docker0")]),e._v("网卡，视为一个网桥，地址为"),_("code",{pre:!0},[e._v("172.17.0.1")]),e._v("，位于"),_("code",{pre:!0},[e._v("172.17.0.0/16")]),e._v("的网络\n"),_("ul",[_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("ifconfig")]),e._v("查看")])])]),e._v(" "),_("li",[e._v("容器的IP地址也位于此网络"),_("code",{pre:!0},[e._v("172.17.0.0/16")]),e._v("，网关是"),_("code",{pre:!0},[e._v("docker0")]),e._v("网卡的IP地址"),_("code",{pre:!0},[e._v("172.17.0.1")]),e._v(" "),_("ul",[_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("docker inspect <container>")]),e._v("查看")])])]),e._v(" "),_("li",[e._v("每个容器在宿主机都会有一个名字以"),_("code",{pre:!0},[e._v("veth")]),e._v("开头的虚拟网卡")])]),e._v(" "),_("h4",{attrs:{id:"修改网络配置"}},[e._v("修改网络配置")]),e._v(" "),_("ul",[_("li",[e._v("修改docker主程序\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("-b/--bridge <device>")]),e._v("指定其他网桥设备而不是"),_("code",{pre:!0},[e._v("docker0")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--bip")]),e._v("指定Docker0的IP和掩码，使用CIDR形式，如"),_("code",{pre:!0},[e._v("172.17.0.1/16")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--dns")]),e._v("配置容器的DNS服务器地址。对所有容器生效")]),e._v(" "),_("li",[e._v("修改"),_("code",{pre:!0},[e._v("/etc/docker/daemon.json")])])])]),e._v(" "),_("li",[e._v("修改容器\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("--dns")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--net")]),e._v("指定网络通讯模式\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("bridge")]),e._v("网桥模式。默认")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("none")]),e._v("无网络栈，无网络通信能力，只有一个"),_("code",{pre:!0},[e._v("lo")]),e._v("网卡")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("container")]),e._v("使用其他容器的网络栈。略不安全")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("host")]),e._v("使用主机的网络，自己没有网络栈。最不安全")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-p :<container-port>")]),e._v("把容器的端口映射到主机的一个动态端口")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-p <host-port>:<container-port>")]),e._v("指定端口映射")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-p <IP>::<container-port>")]),e._v("指定主机的IP，映射动态端口")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-p <IP>::<host-port>:<container-port>")]),e._v("指定主机IP和端口")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-P")]),e._v("根据镜像的描述，暴露所有所需端口")])])])]),e._v(" "),_("h4",{attrs:{id:"如何相互访问"}},[e._v("如何相互访问")]),e._v(" "),_("ul",[_("li",[e._v("容器访问外部网络，使用SNAT\n"),_("ul",[_("li",[e._v("宿主机执行："),_("code",{pre:!0},[e._v("iptables -t nat -A POSTROUTING -s 172.17.0.0/16 -o docker0 -j MASQUERADE")])])])]),e._v(" "),_("li",[e._v("外部网络访问容器，使用DNAT\n"),_("ul",[_("li",[e._v("docker暴露端口："),_("code",{pre:!0},[e._v("docker run -d -p 80:80 apache")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("iptables -t nat -A PREROUTING -m addrtype --dst-type LOCAL -j DOCKER")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("iptables -t nat -A DOCKER ! -i docker0 -p tcp -m tcp --dport 80 -j DNAT --to-destination 172.17.0.2:80")])])])])]),e._v(" "),_("h4",{attrs:{id:"如何隔离不同容器"}},[e._v("如何隔离不同容器")]),e._v(" "),_("p",[e._v("有时候我们希望容器之间不能相互访问")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("docker network ls")]),e._v("查看当前可用的网络空间")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("docker network create -d <type> <name>")]),e._v("创建新的网络空间\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("type")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("overlay")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("bridge")]),e._v("通常使用此类型")])])])])])]),e._v(" "),_("p",[e._v("执行"),_("code",{pre:!0},[e._v("docker run")]),e._v("的时候可以使用"),_("code",{pre:!0},[e._v("--network")]),e._v("指定启动容器的网络空间")]),e._v(" "),_("h3",{attrs:{id:"持久化数据"}},[e._v("持久化数据")]),e._v(" "),_("p",[e._v("Docker镜像是分层存储。需要写文件时，把文件从只读层复制出来放到读写层进行修改，读写层的文件会隐藏只读层的文件。stop/start容器不会造成数据的丢失，但是删除容器会删除读写层数据")]),e._v(" "),_("p",[e._v("卷(volume)可以把宿主机上的某个目录挂载到容器，实现文件持久化、跨容器共享")]),e._v(" "),_("ul",[_("li",[e._v("卷类型\n"),_("ul",[_("li",[e._v("docker-managed volume（Docker自管理卷）\n"),_("ul",[_("li",[e._v("在Dockerfile的VOLUME中声明后，启动容器时自动绑定")]),e._v(" "),_("li",[e._v("通常位于"),_("code",{pre:!0},[e._v("/var/lib/docker/volumes")])]),e._v(" "),_("li",[e._v("删除容器时默认卷不会被删除。启动新容器时会创建新的\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("docker rm -v")]),e._v("可以使用参数"),_("code",{pre:!0},[e._v("-v")]),e._v("删除卷")])])])])]),e._v(" "),_("li",[e._v("bind mount volume（绑定卷）\n"),_("ul",[_("li",[e._v("启动容器时人为绑定，"),_("code",{pre:!0},[e._v("docker run -v <host-dir>:<volume-dir>")])]),e._v(" "),_("li",[e._v("可以是宿主机的任何目录")]),e._v(" "),_("li",[e._v("如果绑定的卷和docker管理卷位于容器内同一个位置，则docker不会创建自管理卷。即绑定卷优先级高于自管理卷")]),e._v(" "),_("li",[e._v("可以用来跨容器共享")])])]),e._v(" "),_("li",[e._v("union volume（联合卷）\n"),_("ul",[_("li",[e._v("启动容器时使用其他容器的卷，"),_("code",{pre:!0},[e._v("docker run --volumes-from <container>")])]),e._v(" "),_("li",[e._v("只能共享Dockerfile的VOLUME中声明过的卷")])])])])])]),e._v(" "),_("h3",{attrs:{id:"存储驱动overlayfs"}},[e._v("存储驱动overlayfs")]),e._v(" "),_("p",[e._v("Docker存储驱动(storage driver)是实现分层镜像的基础。使用"),_("code",{pre:!0},[e._v("docker info")]),e._v("可以查看"),_("code",{pre:!0},[e._v("Storage Driver")]),e._v("的信息")]),e._v(" "),_("p",[e._v("驱动类型：")]),e._v(" "),_("ul",[_("li",[e._v("device mapper(DM)\n"),_("ul",[_("li",[e._v("性能和稳定性存在问题。比overlayfs差，但是不至于不能用")]),e._v(" "),_("li",[e._v("不建议生产环境使用")]),e._v(" "),_("li",[e._v("老环境可能会用这种驱动。新环境建议使用overlayfs")])])]),e._v(" "),_("li",[e._v("btrfs\n"),_("ul",[_("li",[e._v("社区驱动。性能和稳定性有问题，稍微比DM强一些")]),e._v(" "),_("li",[e._v("第三方容器可能会用")])])]),e._v(" "),_("li",[e._v("overlayfs\n"),_("ul",[_("li",[e._v("性能和稳定性优异，推荐使用")]),e._v(" "),_("li",[e._v("内核版本>3.18时可以直接使用。否则需要自己编译")])])])]),e._v(" "),_("p",[e._v("docker中的层与overlayfs驱动的三层构造的关系：")]),e._v(" "),_("ul",[_("li",[e._v("镜像层(image layer)\n"),_("ul",[_("li",[e._v("只读")]),e._v(" "),_("li",[e._v("在overlayfs中为"),_("code",{pre:!0},[e._v("lowerdir")])])])]),e._v(" "),_("li",[e._v("容器层(container layer)\n"),_("ul",[_("li",[e._v("可读可写")]),e._v(" "),_("li",[e._v("在overlayfs中为"),_("code",{pre:!0},[e._v("upperdir")])])])]),e._v(" "),_("li",[e._v("容器挂载(container mount)\n"),_("ul",[_("li",[e._v("其实就是表现层，即用户看到的效果")]),e._v(" "),_("li",[e._v("在overlayfs中为"),_("code",{pre:!0},[e._v("merged")])])])])]),e._v(" "),_("p",[e._v("我们可以自己创建overlayfs来进行测试："),_("code",{pre:!0},[e._v("mount -t overlay <path> -olowerdir=<path>,upperdir=<path>,workdir=<path> <path-to-merged>")])]),e._v(" "),_("ul",[_("li",[e._v("在"),_("code",{pre:!0},[e._v("merged")]),e._v("文件夹中修改"),_("code",{pre:!0},[e._v("lowerdir")]),e._v("中的文件，会在"),_("code",{pre:!0},[e._v("upper")]),e._v("中创建同名文件并修改。"),_("code",{pre:!0},[e._v("merged")]),e._v("只能看到"),_("code",{pre:!0},[e._v("upper")]),e._v("中的文件")]),e._v(" "),_("li",[e._v("在"),_("code",{pre:!0},[e._v("merged")]),e._v("文件夹中删除"),_("code",{pre:!0},[e._v("lowerdir")]),e._v("中的文件，会在"),_("code",{pre:!0},[e._v("upper")]),e._v("中创建一个特殊的同名文件（类型为"),_("code",{pre:!0},[e._v("c")]),e._v("）。在"),_("code",{pre:!0},[e._v("merged")]),e._v("层就看不到这个文件了")])]),e._v(" "),_("h3",{attrs:{id:"资源限制"}},[e._v("资源限制")]),e._v(" "),_("h4",{attrs:{id:"相关背景知识"}},[e._v("相关背景知识")]),e._v(" "),_("ul",[_("li",[e._v("docker可以限制内存、CPU、磁盘IO，防止某个容器错误地占用过多资源")]),e._v(" "),_("li",[e._v("原理：CGroup(Control Groups)是Linux内核提供的，可以限制、记录、隔离进程组(process groups)使用的物理资源的机制")]),e._v(" "),_("li",[e._v("对linux来说有一个OOME(out of memory exception)机制，一旦内存不够用，任何进程都可能根据优先级被杀死，包括docker守护进程。不过Docker守护进程的OOM优先级比较高，通常不会死")]),e._v(" "),_("li",[e._v("建议测试工程师对应用进行压测，了解资源使用情况，然后再投入生产")])]),e._v(" "),_("h4",{attrs:{id:"内存限制"}},[e._v("内存限制")]),e._v(" "),_("blockquote",[_("p",[e._v("尽量不要使用swap分区，因为swap会把内存的计算变得复杂，对调度器非常不友好。")])]),e._v(" "),_("blockquote",[_("p",[e._v("在容器内使用"),_("code",{pre:!0},[e._v("free")]),e._v("命令看到的swap空间按并不准确")])]),e._v(" "),_("p",[e._v("docker启动参数可以限制内存。参数的单位可以是"),_("code",{pre:!0},[e._v("b/k/m/g")]),e._v("，对应"),_("code",{pre:!0},[e._v("byte/KB/MB/GB")])]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("-m/--memory")]),e._v("最大内存。硬限制。最小4MB")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--memory-reservation")]),e._v("设置内存软限制，小于上述硬限制\n"),_("ul",[_("li",[e._v("如果主机内存不够用，且某个进程占用的内存超过了软限制，则会减少此进程的内存占用")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--memory-swap")]),e._v("容器能够使用的swap分区大小")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--memory-swappiness")]),e._v("默认情况下，宿主机可以把容器的匿名页(anonymous page)给swap出来。此处可以设置一个0-100的值表示允许swap出来的比例\n"),_("ul",[_("li",[e._v("关于匿名页，可以参考"),_("a",{attrs:{href:"https://stackoverflow.com/questions/13024087/what-are-memory-mapped-page-and-anonymous-page"}},[e._v("stackoverflow")]),e._v("的解释")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--kernel-memory")]),e._v("容器的内核能够使用的内存（比如socket、TCP连接的内存占用），最小值4MB")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--oom-kill-disable")]),e._v("是否在OOM的时候杀死容器。只有设置了"),_("code",{pre:!0},[e._v("-m")]),e._v("的时候才可以把此选项设置为"),_("code",{pre:!0},[e._v("false")]),e._v("，避免容器耗尽内存")])]),e._v(" "),_("p",[e._v("内存和swap存在复杂的设置关系：")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",{pre:!0},[e._v("--memory-swap")])]),e._v(" "),_("th",[_("code",{pre:!0},[e._v("--memory")])]),e._v(" "),_("th",[e._v("功能")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("正数"),_("code",{pre:!0},[e._v("S")])]),e._v(" "),_("td",[e._v("正数"),_("code",{pre:!0},[e._v("M")])]),e._v(" "),_("td",[e._v("容器可使用内存为"),_("code",{pre:!0},[e._v("M")]),e._v("，可使用swap为"),_("code",{pre:!0},[e._v("S-M")])])]),e._v(" "),_("tr",[_("td",[e._v("0或未设置")]),e._v(" "),_("td",[e._v("正数"),_("code",{pre:!0},[e._v("M")])]),e._v(" "),_("td",[e._v("如果宿主机启动了swap，则容器的swap为"),_("code",{pre:!0},[e._v("2M")])])]),e._v(" "),_("tr",[_("td",[e._v("-1")]),e._v(" "),_("td",[e._v("正数"),_("code",{pre:!0},[e._v("M")])]),e._v(" "),_("td",[e._v("如果宿主机启动了swap，则容器的swap无限制")])])])]),e._v(" "),_("h4",{attrs:{id:"cpu限制"}},[e._v("CPU限制")]),e._v(" "),_("p",[e._v("宏观来说有两种CPU限制方式：")]),e._v(" "),_("ul",[_("li",[e._v("对于CPU密集型容器竞争CPU时，可以设置容器能够使用的CPU时间相对比例")]),e._v(" "),_("li",[e._v("以绝对的方式设置容器在每个调度周期内最多能使用的CPU时间")])]),e._v(" "),_("p",[e._v("参数：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("--cpuset-cpus")]),e._v("允许使用的CPU编号\n"),_("ul",[_("li",[e._v("CPU编号从0开始")]),e._v(" "),_("li",[e._v("比如一个8核的宿主机，可以设置"),_("code",{pre:!0},[e._v('--cpuset-cpus="0-3,5,6"')])])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("-c/--cpu-shares")]),e._v("CPU共享权值，默认1024")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--cpuset-mems")]),e._v("允许访问的内存节点(MEMs)\n"),_("ul",[_("li",[e._v("非统一内存访问(NUMA)是一种用于多处理器的内存设计。使用NUMA后，CPU访问本地内存比非本地内存会快一些")])])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--cpu-period")]),e._v("设置调度周期，单位微秒。调度周期的有效范围是1ms-1s，所以此值的范围是1000-1000000")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--cpu-quota")]),e._v("每个调度周期内，容器能够使用的CPU时间。单位微秒，此值必须大于1000，即每个周期可以使用的CPU时间不小于1ms")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("--cpus")]),e._v("限制容器能够使用的CPU个数。支持小数")])]),e._v(" "),_("h3",{attrs:{id:"docker-compose"}},[e._v("docker-compose")]),e._v(" "),_("p",[e._v("Docker提倡的理念是一个容器一个进程。如果需要跨容器访问，可以使用"),_("code",{pre:!0},[e._v("--link")]),e._v("建立连接。这要求容器必须按照顺序启动。"),_("code",{pre:!0},[e._v("docker-compose")]),e._v("可以进行简单的容器编排实现容器启动顺序的配置")]),e._v(" "),_("p",[e._v("基于"),_("code",{pre:!0},[e._v("yaml")]),e._v("写配置文件，然后使用"),_("code",{pre:!0},[e._v("docker-compose")]),e._v("进行应用的启动")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("-f")]),e._v("指定yaml文件位置。默认"),_("code",{pre:!0},[e._v("docker-compose.yml")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("ps")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("logs")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("config -q")]),e._v("验证配置文件是否正确")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("stop/start/restart")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("up -d")]),e._v("创建容器项目")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("pause/unpause")])]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("rm")]),e._v("删除")])])])}]};e.exports={attributes:{title:"Linux Virtualization(Part 2)",description:"Docker, overlayfs",tags:["Container","Docker"]},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);