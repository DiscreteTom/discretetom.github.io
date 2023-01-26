(window.webpackJsonp=window.webpackJsonp||[]).push([[105,380],{1320:function(t,n,e){const r={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",{attrs:{id:"概念"}},[t._v("概念")]),t._v(" "),r("h3",{attrs:{id:"设备地址和设备名"}},[t._v("设备地址和设备名")]),t._v(" "),r("p",[t._v("每个蓝牙设备都有一个全局唯一的设备地址，类似于 MAC 地址")]),t._v(" "),r("p",[t._v("蓝牙设备也可以有一个设备名。这个设备名不像 DNS 名称一样被统一管理，可以任意取名。客户端设备可以广播一个查询，搜索满足名称条件的设备，从而建立连接")]),t._v(" "),r("h3",{attrs:{id:"通信协议"}},[t._v("通信协议")]),t._v(" "),r("ul",[r("li",[t._v("RFCOMM\n"),r("ul",[r("li",[t._v("类似 TCP")]),t._v(" "),r("li",[t._v("每个机器只有 30 个端口（不像 TCP 有 65535 个）")]),t._v(" "),r("li",[t._v("基于流")])])]),t._v(" "),r("li",[t._v("L2CAP\n"),r("ul",[r("li",[t._v("类似 UDP")]),t._v(" "),r("li",[t._v("面向连接（也可以不面向连接，但是通常不这么用）")]),t._v(" "),r("li",[t._v("基于报文")]),t._v(" "),r("li",[t._v("报文最大长度固定（默认 672 字节，可以协商到 65535）")]),t._v(" "),r("li",[t._v("可选重传机制\n"),r("ul",[r("li",[t._v("不重传")]),t._v(" "),r("li",[t._v("重传直到连接失效（默认）")]),t._v(" "),r("li",[t._v("超时丢弃（超时时间可以配置为 0-1279ms）")])])])])])]),t._v(" "),r("blockquote",[r("p",[t._v("修改重传机制时，所有对同一个设备的连接都会应用此机制，也就是说这个配置对于目标设备来说是全局配置。RFCOMM 底层也是使用 L2CAP，所以要确保这些连接也不会受到影响。如果只对目标设备建立一个蓝牙连接，那没问题")])]),t._v(" "),r("p",[t._v("如何选型")]),t._v(" "),r("ul",[r("li",[t._v("可靠，基于流\n"),r("ul",[r("li",[t._v("RFCOMM（类似 TCP）")])])]),t._v(" "),r("li",[t._v("可靠，基于报文\n"),r("ul",[r("li",[t._v("RFCOMM 或 L2CAP+无限重传（类似 TCP/R-UDP）")])])]),t._v(" "),r("li",[t._v("最大努力，基于报文\n"),r("ul",[r("li",[t._v("L2CAP+超时丢弃（类似 UDP）")])])])]),t._v(" "),r("h3",{attrs:{id:"端口"}},[t._v("端口")]),t._v(" "),r("ul",[r("li",[t._v("L2CAP\n"),r("ul",[r("li",[t._v("端口叫做 Protocol Service Multiplexers(PSM)")]),t._v(" "),r("li",[t._v("1-32767 的奇数")]),t._v(" "),r("li",[t._v("1-1023 是预留的")])])]),t._v(" "),r("li",[t._v("RFCOMM\n"),r("ul",[r("li",[t._v("1-30")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:e(488),alt:""}})]),t._v(" "),r("p",[t._v("为了避免端口冲突，蓝牙使用 Service Discovery Protocol (SDP)")]),t._v(" "),r("h3",{attrs:{id:"sdp"}},[t._v("SDP")]),t._v(" "),r("p",[t._v("SDP 是一个预留的服务（基于 L2CAP，使用预留端口），其他服务想要暴露端口或其他服务信息的时候，可以向 SDP 注册，端口会动态分配。客户端想要连接的时候，可以查询 SDP 服务器")]),t._v(" "),r("p",[t._v("SDP 中还支持使用 UUID 来指定服务的类型，客户端想要查询特定服务时，提供 UUID 作为关键词即可")]),t._v(" "),r("h3",{attrs:{id:"profile"}},[t._v("Profile")]),t._v(" "),r("p",[t._v("类似互联网领域有 RFC 对各种高层协议进行规范化（比如 HTTP），蓝牙也有，叫 Profile")]),t._v(" "),r("h2",{attrs:{id:"linuxpybluez"}},[t._v("Linux+PyBluez")]),t._v(" "),r("p",[t._v("BlueZ 是 Linux 环境使用的蓝牙协议栈。PyBluez 可以使用 python 管理蓝牙")]),t._v(" "),r("h3",{attrs:{id:"地址查询"}},[t._v("地址查询")]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bluetooth\n\ntarget_name "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Phone"')]),t._v("\ntarget_address "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获得一个地址列表")]),t._v("\nnearby_devices "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discover_devices"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" bdaddr "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" nearby_devices"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于地址，连接目标设备，查询它的名字")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" target_name "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lookup_name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bdaddr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        target_address "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bdaddr\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n")])]),t._v(" "),r("p",[t._v("地址格式为"),r("code",{pre:!0},[t._v("xx:xx:xx:xx:xx")])]),t._v(" "),r("p",[t._v("有时候网络不稳定，可以多查询几次")]),t._v(" "),r("h3",{attrs:{id:"建立-rfcomm-连接"}},[t._v("建立 RFCOMM 连接")]),t._v(" "),r("p",[t._v("基于 Socket")]),t._v(" "),r("blockquote",[r("p",[t._v("需要注意：有些设备的蓝牙默认是"),r("code",{pre:!0},[t._v("discoverable off")]),t._v("模式，即无法被发现，此时即使启动了服务器，也无法被客户端发现并连接。需要启用蓝牙发现才能被连接")])]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server.py")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bluetooth\n\nserver_sock "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BluetoothSocket"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RFCOMM"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nport "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里使用固定端口，而不是动态分配一个端口")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# address + port, empty string means any address is acceptable")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处的1不是端口号。详见下文参考")]),t._v("\n\nclient_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("address "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accepted connection from "')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("address\n\ndata "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"received [%s]"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" data\n\nclient_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# client.py")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bluetooth\n\nbd_addr "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"01:23:45:67:89:AB"')]),t._v("\n\nport "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nsock"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BluetoothSocket"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RFCOMM "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bd_addr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello!!"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("h3",{attrs:{id:"建立-l2cap-连接"}},[t._v("建立 L2CAP 连接")]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server.py")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bluetooth\n\nserver_sock"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BluetoothSocket"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("L2CAP "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果设置固定端口，应该是0x1001-0x8FFF的奇数")]),t._v("\nport "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x1001")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nclient_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("address "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accepted connection from "')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("address\n\ndata "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"received [%s]"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" data\n\nclient_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# client.py")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bluetooth\n\nsock"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BluetoothSocket"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("L2CAP"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbd_addr "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"01:23:45:67:89:AB"')]),t._v("\nport "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x1001")]),t._v("\n\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bd_addr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello!!"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("ul",[r("li",[t._v("可以主动协商 MTU："),r("code",{pre:!0},[t._v("bluetooth.set_l2cap_mtu( socket, 65535 )")]),t._v("，仅对此 socket 生效")]),t._v(" "),r("li",[t._v("设置超时语义："),r("code",{pre:!0},[t._v("bluetooth.set_packet_timeout( bdaddr, timeout_ms )")]),t._v("，对目标地址的所有连接生效")])]),t._v(" "),r("h3",{attrs:{id:"使用-sdp-动态分配端口"}},[t._v("使用 SDP 动态分配端口")]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询可用端口，返回第一个可用的端口")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只是查询端口，并没有占用端口，所以bind的时候可能会报错")]),t._v("\nbluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_available_port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" protocol "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# socket被bind之后，可以被SDP广播")]),t._v("\nbluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("advertise_service"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uuid "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stop_advertising"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" sock "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果`bdaddr`是`localhost`，则查询本机的服务")]),t._v("\nbluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_service"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" name "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uuid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bdaddr "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("p",[t._v("调用顺序：")]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server.py")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bluetooth\n\nserver_sock"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BluetoothSocket"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RFCOMM "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nport "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_available_port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RFCOMM "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listening on port %d"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" port\n\nuuid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1e0ca4ea-299d-4335-93eb-27fcfe7fa848"')]),t._v("\nbluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("advertise_service"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" server_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FooBar Service"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uuid "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nclient_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("address "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accepted connection from "')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("address\n\ndata "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"received [%s]"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" data\n\nclient_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver_sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("p",[t._v("客户端示例")]),t._v(" "),r("pre",{staticClass:"language-py"},[r("code",{pre:!0,attrs:{class:"language-py"}},[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# client.py")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bluetooth\n\nuuid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1e0ca4ea-299d-4335-93eb-27fcfe7fa848"')]),t._v("\nservice_matches "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_service"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" uuid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uuid "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service_matches"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"couldn\'t find the FooBar service"')]),t._v("\n    sys"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exit"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfirst_match "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" service_matches"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nport "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" first_match"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nname "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" first_match"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nhost "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" first_match"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connecting to \\"%s\\" on %s"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsock"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BluetoothSocket"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" bluetooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RFCOMM "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello!!"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"dbusbluez"}},[t._v("DBus+BlueZ")]),t._v(" "),r("p",[t._v("BlueZ 还提供了 dbus 接口，有些 pybluez 没有提供的接口，可以通过调用 dbus 接口来实现。比如假设要实现 HID 设备，需要满足 HID 的 profile，而 pybluez 没有提供注册 profile 的接口，所以需要在 python 中调用 dbus 的接口来注册 profile")]),t._v(" "),r("p",[t._v("想要对 dbus 进行 debug，可以使用"),r("code",{pre:!0},[t._v("busctl")]),t._v(", e.g. "),r("code",{pre:!0},[t._v("busctl list")]),t._v(", "),r("code",{pre:!0},[t._v("sudo busctl monitor org.bluez")])]),t._v(" "),r("h2",{attrs:{id:"hid"}},[t._v("HID")]),t._v(" "),r("p",[t._v("Human Interface Device")]),t._v(" "),r("p",[t._v("Windows 操作系统自带 HID Driver，所以不论是蓝牙设备还是 USB 设备，只要使用 HID 协议，就可以免驱动直接可用。如果使用 HID，就要自己写驱动或数据接收程序了")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.bluetooth.com/specifications/assigned-numbers/"}},[t._v("HID 使用 0x0011 作为 HID control port, 0x0013 as HID interrupt port")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/pauloborges/bluez/blob/master/lib/uuid.h"}},[t._v("HID UUID: 00001124-0000-1000-8000-00805f9b34fb")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://btprodspecificationrefs.blob.core.windows.net/assigned-values/16-bit%20UUID%20Numbers%20Document.pdf"}},[t._v("16 bit UUID: 0x0011")])]),t._v(" "),r("h2",{attrs:{id:"device-class"}},[t._v("Device Class")]),t._v(" "),r("p",[t._v("可以在"),r("code",{pre:!0},[t._v("/etc/bluetooth/main.conf")]),t._v("中设置 Device Class，用来被宿主机识别设备类型，从而显示对应的图标")]),t._v(" "),r("p",[t._v("device class generator: http://bluetooth-pentest.narod.ru/software/bluetooth_class_of_device-service_generator.html")]),t._v(" "),r("h2",{attrs:{id:"cli-工具"}},[t._v("CLI 工具")]),t._v(" "),r("ul",[r("li",[t._v("蓝牙管理软件："),r("code",{pre:!0},[t._v("bluetoothctl")]),t._v(" / "),r("code",{pre:!0},[t._v("btmgmt")])])]),t._v(" "),r("h2",{attrs:{id:"ref"}},[t._v("Ref")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://people.csail.mit.edu/albert/bluez-intro/"}},[t._v("An Introduction to Bluetooth Programming")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://git.kernel.org/pub/scm/bluetooth/bluez.git/tree/doc"}},[t._v("BlueZ DBus API")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.bluetooth.com/specifications/specs/human-interface-device-profile-1-1-1/"}},[t._v("Bluetooth HID profile")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/45370731/what-does-the-parameter-of-1-mean-in-listen1-method-of-socket-module-in-pyth"}},[t._v("The meaning of 1 in socket.listen(1)")])])])])}]};t.exports={attributes:{title:"经典蓝牙笔记",description:"蓝牙Socket编程"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},488:function(t,n,e){t.exports=e.p+"img/51-1.662a365.png"}}]);