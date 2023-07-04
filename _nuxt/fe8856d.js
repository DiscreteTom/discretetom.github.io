(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1337:function(e,t){const n={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"ssh-连接"}},[e._v("SSH 连接")]),e._v(" "),n("h3",{attrs:{id:"启用-ssh"}},[e._v("启用 SSH")]),e._v(" "),n("p",[e._v("启动 steam deck，进入桌面模式")]),e._v(" "),n("p",[e._v("点击开始菜单，System, Konsole，启动一个 terminal")]),e._v(" "),n("p",[e._v("使用 steam+X 组合键，呼出临时的屏幕键盘，使用如下命令：")]),e._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果之前没有给当前用户`deck`设置过密码，先使用如下命令设置密码")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("passwd")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动SSH服务")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start sshd\n")])]),e._v(" "),n("h3",{attrs:{id:"使用域名连接"}},[e._v("使用域名连接")]),e._v(" "),n("p",[e._v("如果 wifi 下只有一个 steam deck，可以直接使用 steam deck 的 hostname: "),n("code",{pre:!0},[e._v("steamdeck")]),e._v("进行连接："),n("code",{pre:!0},[e._v("ssh deck@steamdeck")])]),e._v(" "),n("h3",{attrs:{id:"使用-ip-连接"}},[e._v("使用 IP 连接")]),e._v(" "),n("p",[e._v("也可以查询 IP 之后基于 IP 进行连接：")]),e._v(" "),n("ul",[n("li",[e._v("系统托盘 - WIFI - 【选中你的 WIFI】 - Details，里面有 IP 地址")]),e._v(" "),n("li",[e._v("也可以命令行查 IP："),n("code",{pre:!0},[e._v("ip addr | grep inet | grep wlan0")])])]),e._v(" "),n("p",[e._v("通过 SSH 命令进行连接："),n("code",{pre:!0},[e._v("ssh deck@<ip>")])]),e._v(" "),n("h3",{attrs:{id:"开机自启动-ssh"}},[e._v("开机自启动 SSH")]),e._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果要开机自启动SSH")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" sshd\n")])]),e._v(" "),n("h2",{attrs:{id:"禁用会话挂起"}},[e._v("禁用会话挂起")]),e._v(" "),n("p",[e._v("SSH 连接之后，我们基本就不用手动操作 steam deck 了，但是它每过一段时间就会挂起会话，导致 SSH 断开。我们可以禁用会话挂起")]),e._v(" "),n("p",[e._v("Steam Deck 桌面模式，进入设置 - Power Management - Energy Saving, 禁用 Suspend session，以避免动不动就断开 SSH 连接")]),e._v(" "),n("blockquote",[n("p",[e._v("默认情况下，充电时 steam deck 不会自动挂起，使用电池时才会自动挂起，所以我们只需要禁用使用电池时的会话挂起。注意电量消耗！")])]),e._v(" "),n("h2",{attrs:{id:"解锁-steam-deck"}},[e._v("解锁 steam deck")]),e._v(" "),n("p",[e._v("默认情况下 steam deck 是 readonly 模式，无法手动安装各种软件，所以需要解锁")]),e._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 切换为root用户")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" -i\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 解锁")]),e._v("\nsteamos-readonly disable\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 解锁之后，就可以使用包管理软件pacman来快乐玩耍了")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在此之前，最好先进行一些pacman的初始化和准备工作")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"keyserver hkps://keyserver.ubuntu.com"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /etc/pacman.d/gnupg/gpg.conf\npacman-key --init\npacman-key --populate\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 退出root用户")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v("\n")])]),e._v(" "),n("h2",{attrs:{id:"其他"}},[e._v("其他")]),e._v(" "),n("ul",[n("li",[e._v("截屏，可以使用 Spectacle")])]),e._v(" "),n("h2",{attrs:{id:"参考"}},[e._v("参考")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://gist.github.com/andygeorge/eee2825fa6446b629745ea92e862593a"}},[e._v("steamdeck_ssh_instructions")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.reddit.com/r/SteamDeck/comments/ws5pca/questions_about_my_ip_address/"}},[e._v("questions about my IP Address")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://deckcentral.net/posts/get_your_decks_ip/"}},[e._v("Get Your Deck’s IP Address")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://christitus.com/unlock-steam-deck/"}},[e._v("Unlock Steam Deck")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://steamcommunity.com/app/1675200/discussions/0/3395175706747166784/"}},[e._v("在 steam deck 的桌面模式截屏")])])])])}]};e.exports={attributes:{title:"开始魔改steam deck",description:"桌面模式自定义steam deck所需的准备工作"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);