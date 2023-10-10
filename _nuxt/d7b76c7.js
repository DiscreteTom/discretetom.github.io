(window.webpackJsonp=window.webpackJsonp||[]).push([[65,527,528,529,530],{1392:function(v,_,t){const e={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("p",[v._v("许多协议都是基于"),e("strong",[v._v("客户-服务器方式(CS)")])]),v._v(" "),e("h2",{attrs:{id:"dns-domain-name-system"}},[v._v("DNS - Domain Name System")]),v._v(" "),e("p",[v._v("32位的IP地址难于记忆。DNS实现符号地址到IP地址的转换。"),e("strong",[v._v("DNS域名最长为256字节（包括符号）")])]),v._v(" "),e("ul",[e("li",[v._v("基于CS模式")]),v._v(" "),e("li",[v._v("基于UDP包")]),v._v(" "),e("li",[v._v("分布式数据库系统")]),v._v(" "),e("li",[v._v("基于域的多层次命名系统")])]),v._v(" "),e("h3",{attrs:{id:"因特网域名结构"}},[v._v("因特网域名结构")]),v._v(" "),e("ul",[e("li",[v._v("任何一个连接在因特网上的主机或路由器都有一个唯一的层次结构的名字，即域名")]),v._v(" "),e("li",[v._v("域名的结构有若干个分量组成，各分量之间用"),e("code",{pre:!0},[v._v(".")]),v._v("隔开，如"),e("code",{pre:!0},[v._v("XXX.三级域名.二级域名.顶级域名")])]),v._v(" "),e("li",[v._v("各分量分别代表不同级别的域名")]),v._v(" "),e("li",[v._v("因特网采用了树状的命名方法，一个高级域名下有多个低级域名")])]),v._v(" "),e("h3",{attrs:{id:"域名解析流程"}},[v._v("域名解析流程")]),v._v(" "),e("p",[v._v("当应用程序（比如浏览器）需要进行域名解析时，它成为域名系统的一个客户，把域名放在DNS报文中向"),e("strong",[v._v("本地域名服务器")]),v._v("发出请求。本地域名服务器找到IP地址后响应。")]),v._v(" "),e("p",[v._v("本地域名服务器无法完成解析时，它临时变成其上级域名名服务器的客户，递归或迭代解析，知道域名解析完成")]),v._v(" "),e("ul",[e("li",[v._v("递归解析")])]),v._v(" "),e("p",[v._v("主机"),e("code",{pre:!0},[v._v("www.ibm.com")]),v._v("获取"),e("code",{pre:!0},[v._v("xyz.usst.edu.cn")]),v._v("的IP地址的过程如图")]),v._v(" "),e("p",[e("img",{attrs:{src:t(613),alt:"7-1"}})]),v._v(" "),e("p",[v._v("高层服务器的态度是“好的我去给你找”，可以看到如果高层服务器（根域名服务器）的任务量非常重")]),v._v(" "),e("ul",[e("li",[v._v("迭代解析")])]),v._v(" "),e("p",[v._v("相同的问题，迭代解析过程如图")]),v._v(" "),e("p",[e("img",{attrs:{src:t(614),alt:"7-2"}})]),v._v(" "),e("p",[v._v("高层服务器的态度是“你应该去这里找”，这样就减轻了高层服务器的任务量")]),v._v(" "),e("p",[v._v("实际应用中使用迭代解析")]),v._v(" "),e("h2",{attrs:{id:"www万维网world-wide-web"}},[v._v("WWW万维网(World Wide Web)")]),v._v(" "),e("p",[v._v("简称"),e("strong",[v._v("WEB")])]),v._v(" "),e("h3",{attrs:{id:"web的cs模型"}},[v._v("WEB的CS模型")]),v._v(" "),e("p",[v._v("每个WEB服务器上都有一个进程在TCP的80端口监听由浏览器发来的请求。连接建立后浏览器和服务器之间使用HTTP超文本传输协议进行信息传输")]),v._v(" "),e("p",[v._v("HTTP协议基于TCP，工作流程：")]),v._v(" "),e("ol",[e("li",[v._v("建立TCP连接")]),v._v(" "),e("li",[v._v("Client: HTTP请求报文")]),v._v(" "),e("li",[v._v("Server: HTTP响应报文")]),v._v(" "),e("li",[v._v("释放TCP连接")])]),v._v(" "),e("h3",{attrs:{id:"web需要的基本技术"}},[v._v("WEB需要的基本技术")]),v._v(" "),e("h4",{attrs:{id:"统一资源定位符url"}},[v._v("统一资源定位符URL")]),v._v(" "),e("ul",[e("li",[v._v("超链接使用URL寻找网页")]),v._v(" "),e("li",[v._v("URL由三部分组成\n"),e("ul",[e("li",[v._v("协议类型 - HTTP/FTP/…")]),v._v(" "),e("li",[v._v("网页所在机器地址 - 域名或IP")]),v._v(" "),e("li",[v._v("网页文件名")])])]),v._v(" "),e("li",[v._v("URL的一般形式："),e("code",{pre:!0},[v._v("<Protocol>://<Host><:Port></Path>")])]),v._v(" "),e("li",[v._v("URL对大小写不敏感")])]),v._v(" "),e("h4",{attrs:{id:"超文本传输协议http"}},[v._v("超文本传输协议HTTP")]),v._v(" "),e("ul",[e("li",[v._v("基于TCP")]),v._v(" "),e("li",[v._v("虽然TCP面向连接，但是HTTP不是面向连接的服务，而是"),e("strong",[v._v("面向事务")]),v._v("的，一旦事务结束就中断连接")]),v._v(" "),e("li",[v._v("服务器默认端口号80")])]),v._v(" "),e("p",[v._v("报文结构图：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(615),alt:"7-3"}})]),v._v(" "),e("p",[v._v("注意首部结束之后"),e("strong",[v._v("无论有没有实体都要有一个空行")])]),v._v(" "),e("ul",[e("li",[v._v("请求报文")])]),v._v(" "),e("p",[v._v("有两个方法：GET & POST，GET在url中附上请求内容，不能附带实体。POST不在url中附上请求，保密性更好。可以附带实体，如表单")]),v._v(" "),e("p",[v._v("请求报文举例：已知一个HTML页面中有标签"),e("code",{pre:!0},[v._v('<a href="www.info-source.com/welcome.html">click here for info</a>')]),v._v("，点击超链接后发送的请求为：")]),v._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("GET /welcome.html HTTP/1.1\nHost: www.info-source.com\n（空行）\n")])]),v._v(" "),e("ul",[e("li",[v._v("响应报文")])]),v._v(" "),e("p",[v._v("响应报文中含有HTTP状态码")]),v._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("2XX - 请求成功\n3XX - 资源重定向，需要进一步请求\n4XX - 客户请求错误\n常用状态码：\n"),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("200")]),v._v(" - OK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("403")]),v._v(" - Forbidden\n"),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("404")]),v._v(" - Not Found\n")])]),v._v(" "),e("p",[v._v("回复信息中的状态行举例（只是状态行，不是完整头）：")]),v._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("200")]),v._v(" OK\n")])]),v._v(" "),e("h4",{attrs:{id:"超文本标记语言html"}},[v._v("超文本标记语言HTML")]),v._v(" "),e("ul",[e("li",[v._v("使用"),e("strong",[v._v("标签")]),v._v("实现对文本的格式化")]),v._v(" "),e("li",[v._v("HTML文件拓展名为"),e("code",{pre:!0},[v._v(".htm")]),v._v("或"),e("code",{pre:!0},[v._v(".html")])])]),v._v(" "),e("h4",{attrs:{id:"搜索引擎略"}},[v._v("搜索引擎（略）")]),v._v(" "),e("h2",{attrs:{id:"ftp文件传输协议file-transfer-protocol"}},[v._v("FTP文件传输协议(File Transfer Protocol)")]),v._v(" "),e("ul",[e("li",[v._v("用来从远程主机下载文件或向远程主机上传文件")]),v._v(" "),e("li",[v._v("基于CS模式")]),v._v(" "),e("li",[v._v("基于TCP协议")]),v._v(" "),e("li",[v._v("使用"),e("strong",[v._v("两个TCP链接")]),v._v("，一个用于控制（端口21），一个用于文件传输（端口20）。好处是简单易实现，在传输文件时也可以控制终止传输")]),v._v(" "),e("li",[v._v("采用"),e("strong",[v._v("交互式")]),v._v("处理方式")])]),v._v(" "),e("p",[v._v("首先进行控制连接。如果有传输命令再进行数据连接，传输结束后立即释放数据连接，但是不释放控制连接")]),v._v(" "),e("h2",{attrs:{id:"邮件系统与协议"}},[v._v("邮件系统与协议")]),v._v(" "),e("h3",{attrs:{id:"电子邮件格式"}},[v._v("电子邮件格式")]),v._v(" "),e("p",[v._v("邮件地址格式："),e("code",{pre:!0},[v._v("name@host")]),v._v("，符号"),e("code",{pre:!0},[v._v("@")]),v._v("读作"),e("code",{pre:!0},[v._v("at")]),v._v("，意为“在”")]),v._v(" "),e("p",[v._v("同一个host下的name应该是唯一的")]),v._v(" "),e("p",[v._v("电子邮件格式")]),v._v(" "),e("ul",[e("li",[v._v("信封")]),v._v(" "),e("li",[v._v("内容\n"),e("ul",[e("li",[v._v("首部")]),v._v(" "),e("li",[v._v("主体")])])])]),v._v(" "),e("p",[v._v("首部的格式："),e("code",{pre:!0},[v._v("<关键字>:<内容>")])]),v._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[v._v("To:一个或多个收信人的邮件地址\nSubject:邮件主题\nCc:抄送，表示给某人发送一个邮件的副本\nFrom:发件人地址\nData:发信时间\nReply-To:这封信回复的是哪封信\n")])]),v._v(" "),e("h3",{attrs:{id:"smtp简单邮件传输协议simple-mail-transfer-protocol"}},[v._v("SMTP简单邮件传输协议(Simple Mail Transfer Protocol)")]),v._v(" "),e("ul",[e("li",[v._v("用于"),e("strong",[v._v("发送")]),v._v("邮件，可以使主机给邮件服务器发送，也可以是邮件服务器之间发送，但是不能是邮件服务器给主机发送")]),v._v(" "),e("li",[v._v("基于TCP协议，CS模式，端口25")]),v._v(" "),e("li",[v._v("14条命令21种响应信息\n"),e("ul",[e("li",[v._v("每条命令4个字母")]),v._v(" "),e("li",[v._v("响应信息只有一行，由一个3位数字的代码开始，后面可以附加文字说明")])])])]),v._v(" "),e("h3",{attrs:{id:"pop3邮局协议post-office-protocol-v30"}},[v._v("POP3邮局协议(Post Office Protocol v3.0)")]),v._v(" "),e("ul",[e("li",[v._v("用于"),e("strong",[v._v("接收")]),v._v("邮件")]),v._v(" "),e("li",[v._v("基于TCP协议，CS模式，端口110")]),v._v(" "),e("li",[v._v("15条命令2种响应信息")]),v._v(" "),e("li",[v._v("功能简单且有限")]),v._v(" "),e("li",[v._v("接收邮件的用户PC机上必须运行POP客户端")])]),v._v(" "),e("h3",{attrs:{id:"imap4交互式邮件存取协议internet-message-access-protocol-v40"}},[v._v("IMAP4交互式邮件存取协议(Internet Message Access Protocol v4.0)")]),v._v(" "),e("ul",[e("li",[v._v("用于"),e("strong",[v._v("接收")]),v._v("邮件")]),v._v(" "),e("li",[v._v("是一个"),e("strong",[v._v("联机协议")]),v._v("，打开邮箱时可以看到所有邮件的首部并制定下载哪些邮件")])]),v._v(" "),e("p",[v._v("优点")]),v._v(" "),e("ul",[e("li",[v._v("用户可以在不同的地方使用不同的计算机随时上网处理邮件")]),v._v(" "),e("li",[v._v("允许收件人只接受邮件的一部分，比如邮件包含了文本和文件，可以先接收文本，有时间了再接收文件")])]),v._v(" "),e("p",[v._v("缺点")]),v._v(" "),e("ul",[e("li",[v._v("如果用户不把邮件复制到自己的PC机里，优点一直是存放在IMAP服务器上，所以用户需要经常与IMAP服务器建立连接")])]),v._v(" "),e("h3",{attrs:{id:"imap-vs-pop3"}},[v._v("IMAP vs POP3")]),v._v(" "),e("ul",[e("li",[v._v("POP3协议具有存储转发功能。邮件给用户之后POP3服务器不再保存这些邮件。IMAP邮箱只要用户不删除邮件就可以一直保存邮件")]),v._v(" "),e("li",[v._v("POP3协议是脱机状态运行，IMAP协议是联机状态运行")])]),v._v(" "),e("h3",{attrs:{id:"通用因特网邮件扩充mime"}},[v._v("通用因特网邮件扩充MIME")]),v._v(" "),e("p",[v._v("SMTP缺点")]),v._v(" "),e("ul",[e("li",[v._v("不能传送二进制文件")]),v._v(" "),e("li",[v._v("受限于7位ASCII码，语言受限")]),v._v(" "),e("li",[v._v("SMTP服务器会拒绝超过一定长度的邮件")])]),v._v(" "),e("p",[v._v("MIME主要包括三部分")]),v._v(" "),e("ul",[e("li",[v._v("5个新的邮件首部字段")]),v._v(" "),e("li",[v._v("定义了许多邮件内容的格式，对多媒体电子邮件的表示方法进行了标准化")]),v._v(" "),e("li",[v._v("定义了传送编码，可以对任何内容格式进行转换而不会被邮件系统改变")])]),v._v(" "),e("p",[v._v("MIME在底层还是通过SMTP实现的")]),v._v(" "),e("p",[e("img",{attrs:{src:t(616),alt:"7-4"}})])])}]};v.exports={attributes:{layout:"collection",title:"应用层",collection:"ComputerNetwork"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},613:function(v,_,t){v.exports=t.p+"img/7-1.deae54f.png"},614:function(v,_,t){v.exports=t.p+"img/7-2.c886ac7.png"},615:function(v,_,t){v.exports=t.p+"img/7-3.c1e2174.png"},616:function(v,_,t){v.exports=t.p+"img/7-4.737ab74.png"}}]);