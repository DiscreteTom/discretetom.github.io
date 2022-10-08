(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1266:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"prerequisites"}},[t._v("Prerequisites")]),t._v(" "),n("ol",[n("li",[t._v("A domain name.")]),t._v(" "),n("li",[t._v("A remote linux server.")])]),t._v(" "),n("h2",{attrs:{id:"environment"}},[t._v("Environment")]),t._v(" "),n("ul",[n("li",[t._v("Server: AWS Amazon Linux 2")]),t._v(" "),n("li",[t._v("Client: Windows 10 + Chrome + SwitchyOmega")])]),t._v(" "),n("h2",{attrs:{id:"setup-server"}},[t._v("Setup Server")]),t._v(" "),n("h3",{attrs:{id:"setup-squid"}},[t._v("Setup Squid")]),t._v(" "),n("p",[t._v("Install dependencies, add an http basic auth user.")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" squid httpd\nhtpasswd -c /etc/httpd/htpasswd-users "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("proxy-username"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# will ask you to set your proxy password")]),t._v("\n")])]),t._v(" "),n("p",[t._v("Edit "),n("code",{pre:!0},[t._v("/etc/squid/squid.conf")]),t._v(":")]),t._v(" "),n("ul",[n("li",[t._v("At the top of the file, add the following line:\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("auth_param basic program /usr/lib64/squid/basic_ncsa_auth /etc/httpd/htpasswd-users")])])])]),t._v(" "),n("li",[t._v("After the part of "),n("code",{pre:!0},[t._v("acl")]),t._v(", add the following lines:\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("acl need_auth proxy_auth REQUIRED")])])])]),t._v(" "),n("li",[t._v("In the "),n("code",{pre:!0},[t._v("http_access")]),t._v(" part\n"),n("ul",[n("li",[t._v("Before "),n("code",{pre:!0},[t._v("allow localnet")]),t._v(", add the following line:\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("http_access deny !need_auth")])])])])])])]),t._v(" "),n("p",[t._v("Start squid: "),n("code",{pre:!0},[t._v("systemctl start squid")])]),t._v(" "),n("h3",{attrs:{id:"generate-tls-certificate"}},[t._v("Generate TLS Certificate")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("####################### Become a Certificate Authority")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate private key")]),t._v("\nopenssl genrsa -des3 -out root.key "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# will ask you to set your CA password")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate root certificate")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# After input your CA password, other options stay default")]),t._v("\nopenssl req -x509 -new -nodes -key root.key -sha256 -days "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("825")]),t._v(" -out root.pem\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("####################### Create CA-signed certs")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("example.com "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use your domain name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate private key")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -e "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".key "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" openssl genrsa -out "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".key "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create certificate-signing request")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set the Common Name to your domain name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Other options stay default")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -e "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".csr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" openssl req -new -key "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".key -out "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".csr\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a config file for the extensions")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".ext "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF\nauthorityKeyIdentifier=keyid,issuer\nbasicConstraints=CA:FALSE\nkeyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment\nsubjectAltName = @alt_names\n[alt_names]\nDNS.1 = "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v("\nDNS.2 = bar."),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v("\nEOF")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create the signed certificate using your CA password")]),t._v("\nopenssl x509 -req -in "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".csr -CA root.pem -CAkey root.key -CAcreateserial "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-out "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".crt -days "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1825")]),t._v(" -sha256 -extfile "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".ext\n")])]),t._v(" "),n("h3",{attrs:{id:"setup-stunnel"}},[t._v("Setup Stunnel")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" stunnel\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".key "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".crt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/stunnel/stunnel.pem\n")])]),t._v(" "),n("p",[t._v("Create a file "),n("code",{pre:!0},[t._v("/etc/stunnel/stunnel.conf")]),t._v(" with the following content:")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("client "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("squid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\naccept "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nconnect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:3128\ncert "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /etc/stunnel/stunnel.pem\n")])]),t._v(" "),n("p",[t._v("Create a file "),n("code",{pre:!0},[t._v("/etc/default/stunnel")]),t._v(" and write "),n("code",{pre:!0},[t._v("ENABLED=1")]),t._v(".")]),t._v(" "),n("p",[t._v("Create a file "),n("code",{pre:!0},[t._v("/etc/systemd/system/stunnel.service")]),t._v(" with the following content:")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("SSL tunnel "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" network daemons\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("syslog.target\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Alias")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stunnel.target\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("forking\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/stunnel /etc/stunnel/stunnel.conf\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStop")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/pkill stunnel\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Give up if ping don't get an answer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TimeoutSec")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PrivateTmp")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])]),t._v(" "),n("p",[t._v("Start stunnel: "),n("code",{pre:!0},[t._v("systemctl start stunnel")])]),t._v(" "),n("h3",{attrs:{id:"setup-firewall"}},[t._v("Setup Firewall")]),t._v(" "),n("p",[t._v("For AWS EC2, open your proxy port in the inbound rules in the security group.")]),t._v(" "),n("h2",{attrs:{id:"setup-client"}},[t._v("Setup Client")]),t._v(" "),n("p",[t._v("Download "),n("code",{pre:!0},[t._v("root.pem")]),t._v(" to your local computer, rename it to "),n("code",{pre:!0},[t._v("xxx.crt")]),t._v(".")]),t._v(" "),n("p",[t._v("In the Chrome settings "),n("code",{pre:!0},[t._v("Privacy and security > More > Manage certificates > Trusted Root Certification Authorities")]),t._v(", import the "),n("code",{pre:!0},[t._v("xxx.crt")]),t._v(" file.")]),t._v(" "),n("p",[t._v("In SwitchyOmega, setup your proxy:")]),t._v(" "),n("ul",[n("li",[t._v("Protocol: HTTPS")]),t._v(" "),n("li",[t._v("Server: your domain name")]),t._v(" "),n("li",[t._v("Port: your port")]),t._v(" "),n("li",[t._v("Authentication: your proxy username and password")])]),t._v(" "),n("h2",{attrs:{id:"refs"}},[t._v("Refs")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://stackoverflow.com/a/60516812/12407789"}},[t._v("Getting Chrome to accept self-signed localhost certificate")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://unix.stackexchange.com/a/501339"}},[t._v("How stop-start-restart-status stunnel as a service on centos 7.6")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/github_38885296/article/details/78588006"}},[t._v("使用Squid搭建HTTPS代理服务器")])])])])}]};t.exports={attributes:{date:"2020-04-06T00:00:00.000Z",title:"Setup HTTPS Proxy",description:"Based on Squid & Stunnel with free TLS certificate.",img:"squid.jpg",tags:["Network"]},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);