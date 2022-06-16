(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1157:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),n("p",[t._v("本文是观看"),n("a",{attrs:{href:"https://www.bilibili.com/video/BV1NJ411D7rf"}},[t._v("此视频")]),t._v("时整理的笔记")]),t._v(" "),n("h2",{attrs:{id:"客户端"}},[t._v("客户端")]),t._v(" "),n("ul",[n("li",[t._v("客户端会实现以太坊黄皮书定义的接口规范")]),t._v(" "),n("li",[t._v("去中心化的环境下，没有服务器。各个客户端互相进行 P2P 通信")]),t._v(" "),n("li",[t._v("客户端会运行 EVM，从而执行智能合约")]),t._v(" "),n("li",[t._v("官方客户端: Geth")]),t._v(" "),n("li",[t._v("另一个常用的客户端：Parity")]),t._v(" "),n("li",[t._v("可以在以太坊的客户端节点上面启动 RPC 服务器，以便被 Web3 这种 RPC 客户端访问")])]),t._v(" "),n("h2",{attrs:{id:"geth"}},[t._v("Geth")]),t._v(" "),n("ul",[n("li",[t._v("启动节点："),n("code",{pre:!0},[t._v("geth")]),t._v(" "),n("ul",[n("li",[t._v("默认连接到主网")]),t._v(" "),n("li",[t._v("使用"),n("code",{pre:!0},[t._v("--datadir xxx")]),t._v("指定数据目录。默认路径是"),n("code",{pre:!0},[t._v("~/.ethereum")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("--syncmode xxx")]),t._v("指定同步模式\n"),n("ul",[n("li",[t._v("默认"),n("code",{pre:!0},[t._v("full")]),t._v("，即全节点")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("fast")]),t._v("，快速同步，不验证交易")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("light")]),t._v("使用轻节点，仅同步最近的状态")])])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("--testnet")]),t._v("连接到测试网络（Ropsten）而不是主网")]),t._v(" "),n("li",[t._v("在最后加上"),n("code",{pre:!0},[t._v("console")]),t._v("，就可以在启动节点的同时启动一个 CLI 控制台（基于 JavaScript，也就是 Web3）\n"),n("ul",[n("li",[t._v("可以使用"),n("code",{pre:!0},[t._v("2>xxx.txt")]),t._v("的方式把 console 的挖矿信息重定向出去")])])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("--rpc")]),t._v("启动 RPC 服务器，默认端口 8545")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("--rpcport xxx")]),t._v("指定 RPC 端口")])])]),t._v(" "),n("li",[t._v("创建私链："),n("code",{pre:!0},[t._v("geth --datadir xxx init genesis.json")]),t._v(" "),n("ul",[n("li",[t._v("使用配置文件"),n("code",{pre:!0},[t._v("genesis.json")]),t._v("创建私链\n"),n("ul",[n("li",[t._v("主要属性\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("config.chainId")]),t._v("指定网络 ID")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("difficulty")]),t._v("挖矿难度")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("gasLimit")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("alloc")]),t._v("提前给一些地址设置币的初始值")])])])])]),t._v(" "),n("li",[t._v("创建完毕后，使用"),n("code",{pre:!0},[t._v("geth --datadir xxx --networkid xx")]),t._v("来连接到私链\n"),n("ul",[n("li",[n("code",{pre:!0},[t._v("networkid")]),t._v("是上面设置的"),n("code",{pre:!0},[t._v("config.chainId")])])])])])]),t._v(" "),n("li",[t._v("使用开发者模式："),n("code",{pre:!0},[t._v("geth --datadir xxx --dev console 2>xxx")]),t._v(" "),n("ul",[n("li",[t._v("自动创建一个私链并连接")]),t._v(" "),n("li",[t._v("自动创建一个本地账户，并设置大量初始以太币，并默认处于解锁状态")]),t._v(" "),n("li",[t._v("发起交易时，自动挖一个币，以便打包区块")])])])]),t._v(" "),n("h2",{attrs:{id:"web3"}},[t._v("Web3")]),t._v(" "),n("h3",{attrs:{id:"功能概述"}},[t._v("功能概述")]),t._v(" "),n("ul",[n("li",[t._v("查看区块链的信息")]),t._v(" "),n("li",[t._v("创建合约，调用合约函数")]),t._v(" "),n("li",[t._v("监听事件")])]),t._v(" "),n("h3",{attrs:{id:"核心-global-对象"}},[t._v("核心 Global 对象")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("web3")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("web3.fromWei(xxx, 'ether')")]),t._v("单位转换")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("web3.toWei(xxx, 'ether')")]),t._v("单位转换")])])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("admin")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("eth")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("eth.accounts")]),t._v("查看本地账户")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("eth.getBalance")]),t._v("查看账号余额")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("eth.blockNumber")]),t._v("查看区块高度")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("eth.sendTransaction({from: 'xxx', to: 'xxx', value: xxx})")]),t._v("发起交易")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("eth.getTransaction")]),t._v("查看交易")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("eth.getBlock")]),t._v("查看区块")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("eth.estimateGas")]),t._v("估计 gas 消耗")])])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("personal")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("personal.newAccount()")]),t._v("创建本地账户，密钥会保存在本地的"),n("code",{pre:!0},[t._v("keystore")]),t._v("目录")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("personal.unlockAccount")]),t._v("解锁本地账户。解锁之后才能发起交易")])])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("txpool")])]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("miner")]),t._v(" "),n("ul",[n("li",[n("code",{pre:!0},[t._v("miner.start(1)")]),t._v("开始挖矿，不停")]),t._v(" "),n("li",[n("code",{pre:!0},[t._v("miner.stop()")]),t._v("停止")])])])]),t._v(" "),n("h3",{attrs:{id:"使用-web3"}},[t._v("使用 web3")]),t._v(" "),n("p",[t._v("为了保证 MetaMask 之类的钱包插件所使用的 web3 不被覆盖，通常使用 web3 之前会做环境检查")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" web3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  web3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("web3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("currentProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  web3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("providers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HttpProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8545"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"回调"}},[t._v("回调")]),t._v(" "),n("ul",[n("li",[t._v("如果调用函数参数的时候给了回调函数，函数就是异步请求，否则就是同步请求")]),t._v(" "),n("li",[t._v("回调风格是“错误优先”，即第一个参数是 error")])]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[t._v("web3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("eth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("getBlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("p",[t._v("1.0.0 版本之后，函数会返回 PromiEvent，类似于 Promise，但是可以注册更多的钩子")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[t._v("web3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("eth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("sendTransaction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("once")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'receipt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("receipt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"批处理"}},[t._v("批处理")]),t._v(" "),n("p",[t._v("web3 支持批处理。批处理不是为了提升速度，仅为了保证顺序")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" batch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" web3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"大数处理"}},[t._v("大数处理")]),t._v(" "),n("p",[t._v("使用"),n("code",{pre:!0},[t._v("BigNumber")]),t._v("以避免数字精度问题（web3 会自动添加此依赖）")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" balance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"111111111111111111111111111111"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbalance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("plus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"示例自动转以太币"}},[t._v("示例：自动转以太币")]),t._v(" "),n("p",[t._v("使用脚本之前应该先 unlock 本地账号")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Web3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" web3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("providers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HttpProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8545"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" web3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("eth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("accounts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" to "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxxxxxxxxxxxxxxxxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nweb3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("eth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("sendTransaction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("h3",{attrs:{id:"示例调用合约函数"}},[t._v("示例：调用合约函数")]),t._v(" "),n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contract "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wen3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("eth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("contract")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用ABI JSON对象创建合约对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("at")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用地址，定位合约")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用合约的send方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前面的参数，是合约的方法的参数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后一个对象，是交易相关的信息，谁发起了交易，以及交易了多少以太币")]),t._v("\ninstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}]};t.exports={attributes:{title:"客户端与API",description:"Geth, Web3"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);