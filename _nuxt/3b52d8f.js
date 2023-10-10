(window.webpackJsonp=window.webpackJsonp||[]).push([[110,440],{1365:function(t,_,v){const e={render:function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"frontmatter-markdown"},[v("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),v("p",[t._v("推理方法：")]),t._v(" "),t._m(0),t._v(" "),v("p",[t._v("非单调推理 - 后来推出的结论可能会推翻前面的结论")]),t._v(" "),v("p",[t._v("求解需要以下之一：")]),t._v(" "),t._m(1),t._v(" "),v("p",[t._v("是否加入启发性知识：")]),t._v(" "),t._m(2),t._v(" "),v("h2",{attrs:{id:"一般搜索"}},[t._v("一般搜索")]),t._v(" "),v("p",[t._v("通用，非启发")]),t._v(" "),v("p",[t._v("盲目搜索")]),t._v(" "),v("p",[t._v("寻找目标路径（不仅是目标节点")]),t._v(" "),v("p",[t._v("相关数据结构与概念：")]),t._v(" "),t._m(3),t._v(" "),v("p",[t._v("算法步骤：")]),t._v(" "),t._m(4),t._v(" "),v("p",[t._v("OPEN表的顺序决定了搜索的顺序")]),t._v(" "),t._m(5),t._v(" "),v("p",[t._v("搜索时也可以使用相同结点名，找到更优路径时直接改变父节点指针")]),t._v(" "),v("h2",{attrs:{id:"启发式搜索"}},[t._v("启发式搜索")]),t._v(" "),v("h3",{attrs:{id:"概述-1"}},[t._v("概述")]),t._v(" "),v("p",[t._v("有信息搜索")]),t._v(" "),v("p",[t._v("把最有希望的结点放在OPEN表第一个位置")]),t._v(" "),v("p",[t._v("如何评判最有希望？")]),t._v(" "),v("h3",{attrs:{id:"估价函数"}},[t._v("估价函数")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),v("p",[t._v("使用f的值对OPEN表的结点进行排序，每次选择f值最优的结点（可能是最大f也可能是最小f")]),t._v(" "),v("p",[t._v("如果估价函数过于复杂或正确性差则启发式搜索可能比深度/广度效率还低")]),t._v(" "),v("h3",{attrs:{id:"有序搜索"}},[t._v("有序搜索")]),t._v(" "),v("p",[t._v("最好优先搜索")]),t._v(" "),v("p",[t._v("例：八数码棋")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),v("h3",{attrs:{id:"a算法"}},[t._v("A*算法")]),t._v(" "),v("p",[t._v("f*(n)是经过节点n的最优路径")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),v("p",[t._v("A*算法特性（已经被证明）：")]),t._v(" "),t._m(12),t._v(" "),v("h2",{attrs:{id:"与或树搜索"}},[t._v("与或树搜索")]),t._v(" "),v("h3",{attrs:{id:"概述-2"}},[t._v("概述")]),t._v(" "),t._m(13),t._v(" "),v("p",[t._v("自下向上标记节点可解或不可解")]),t._v(" "),v("p",[t._v("启发式搜索，与节点的估算可以使用求和，也可以使用最大值（通常使用求和），不同的估算方案得到的解树可能不同")]),t._v(" "),v("p",[t._v("可以每次向下延伸多层。延伸后需要重新判断希望树")]),t._v(" "),v("h3",{attrs:{id:"博弈树"}},[t._v("博弈树")]),t._v(" "),v("p",[t._v("与或节点交替出现：自己下的时候应该是或节点（选择对自己最优的）。对方下的时候是与节点（对方选择最优的，即对我方最坏的")]),t._v(" "),v("h4",{attrs:{id:"极大极小分析法"}},[t._v("极大极小分析法")]),t._v(" "),v("p",[t._v("以一字棋(bingo)为例，估价函数=A成一线数目-B成一线数目，这样可以抵消空白一字")]),t._v(" "),v("p",[t._v("对方下棋的时候一定选择最优值，所以选择估价最小值的情况，自己下棋的时候一定选择最优值，所以选择估价最大的情况")]),t._v(" "),v("p",[t._v("等对方进行实际操作后再选择自己的下一步操作。")]),t._v(" "),v("p",[t._v("估价函数的设计很重要")]),t._v(" "),v("p",[t._v("缺点 - 穷举，计算量大")]),t._v(" "),v("h4",{attrs:{id:"α-β剪枝技术"}},[t._v("α-β剪枝技术")]),t._v(" "),v("p",[t._v("优化极大极小分析法")]),t._v(" "),v("p",[t._v("使用前提：")]),t._v(" "),t._m(14),t._v(" "),v("p",[t._v("基本思想 - 倒推，或中取大，与中取小。剪枝")]),t._v(" "),v("p",[t._v("定义：")]),t._v(" "),t._m(15),t._v(" "),v("p",[t._v("深度优先搜索，遍历子节点，对不必要计算的结点进行剪枝")]),t._v(" "),v("h2",{attrs:{id:"归结消解演绎推理"}},[t._v("归结/消解演绎推理")]),t._v(" "),v("h3",{attrs:{id:"逻辑推理"}},[t._v("逻辑推理")]),t._v(" "),v("p",[t._v("推理方式：")]),t._v(" "),t._m(16),t._v(" "),v("p",[t._v("控制策略：")]),t._v(" "),t._m(17),t._v(" "),v("p",[t._v("常用过程：模式匹配 - 两个知识模式（即知识的表达方法）完全一致或近似一致，称为可匹配")]),t._v(" "),v("h3",{attrs:{id:"置换与合一"}},[t._v("置换与合一")]),t._v(" "),v("p",[t._v("置换 - 项对变元的替换。即使用变元、常量或函数替换变元。目的是使两个公式一致")]),t._v(" "),v("p",[t._v("一阶谓词中不能再次出现谓词，所以f(y)表示函数f和参数y，小写字母表示变量，大写字母表示常量")]),t._v(" "),v("p",[t._v("S1={z/x, w/y}意为使用z置换x，使用w置换y")]),t._v(" "),v("p",[t._v("通常常量为已经确定的值，不应该被置换")]),t._v(" "),t._m(18),t._v(" "),v("p",[t._v("置换的目的是合一。合一的目的是模式匹配。两个模式置换之后是一致的则说明两个模式是匹配的")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),v("p",[t._v("析取 - 逻辑或")]),t._v(" "),v("p",[t._v("P与~P归结得到空子句")]),t._v(" "),v("p",[t._v("子句内部析取，子句之间合取。子句集存在P于~P两个子句时永假")]),t._v(" "),v("p",[t._v("使用谓词Answer表示L，如L为"),v("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr"},attrs:{jax:"SVG"}},[v("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12.438ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 5497.4 1000"}},[v("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[v("g",{attrs:{"data-mml-node":"math"}},[v("g",{attrs:{"data-mml-node":"mi"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D443",d:"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"}})]),v("g",{attrs:{"data-mml-node":"mo",transform:"translate(751,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),v("g",{attrs:{"data-mml-node":"mi",transform:"translate(1140,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),v("g",{attrs:{"data-mml-node":"mo",transform:"translate(1712,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),v("g",{attrs:{"data-mml-node":"mo",transform:"translate(2323.2,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2227",d:"M318 591Q325 598 333 598Q344 598 348 591Q349 590 414 445T545 151T611 -4Q609 -22 591 -22Q588 -22 586 -21T581 -20T577 -17T575 -13T572 -9T570 -4L333 528L96 -4Q87 -20 80 -21Q78 -22 75 -22Q57 -22 55 -4Q55 2 120 150T251 444T318 591Z"}})]),v("g",{attrs:{"data-mml-node":"mi",transform:"translate(3212.4,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D444",d:"M399 -80Q399 -47 400 -30T402 -11V-7L387 -11Q341 -22 303 -22Q208 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435Q740 255 592 107Q529 47 461 16L444 8V3Q444 2 449 -24T470 -66T516 -82Q551 -82 583 -60T625 -3Q631 11 638 11Q647 11 649 2Q649 -6 639 -34T611 -100T557 -165T481 -194Q399 -194 399 -87V-80ZM636 468Q636 523 621 564T580 625T530 655T477 665Q429 665 379 640Q277 591 215 464T153 216Q153 110 207 59Q231 38 236 38V46Q236 86 269 120T347 155Q372 155 390 144T417 114T429 82T435 55L448 64Q512 108 557 185T619 334T636 468ZM314 18Q362 18 404 39L403 49Q399 104 366 115Q354 117 347 117Q344 117 341 117T337 118Q317 118 296 98T274 52Q274 18 314 18Z"}})]),v("g",{attrs:{"data-mml-node":"mo",transform:"translate(4003.4,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),v("g",{attrs:{"data-mml-node":"mi",transform:"translate(4392.4,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D464",d:"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"}})]),v("g",{attrs:{"data-mml-node":"mo",transform:"translate(5108.4,0)"}},[v("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})])])])])]),t._v("时可以表示为Answer(x, w)")],1),t._v(" "),t._m(22),t._v(" "),v("p",[t._v("如果存在仅包含Answer的子句，则Answer的变量即为结果")]),t._v(" "),v("h3",{attrs:{id:"与或形演绎推理略"}},[t._v("与或形演绎推理（略")]),t._v(" "),v("p",[t._v("基于一阶谓词逻辑")]),t._v(" "),v("h2",{attrs:{id:"不确定性推理"}},[t._v("不确定性推理")]),t._v(" "),v("p",[t._v("P85，如果先结合E2和E3，结果会不一样")]),t._v(" "),v("p",[t._v("条件出现的顺序会影响结果可信度")]),t._v(" "),v("h2",{attrs:{id:"非单调推理"}},[t._v("非单调推理")]),t._v(" "),v("p",[t._v("后来推出的结论可能会推翻前面的结论")]),t._v(" "),v("p",[t._v("例：骑车问题。第一次发现没气->打气，第二次发现没气->补胎")]),t._v(" "),t._m(23)])},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("图搜索 - 基于图结构\n"),v("ul",[v("li",[t._v("深度优先")]),t._v(" "),v("li",[t._v("广度优先")]),t._v(" "),v("li",[t._v("…")])])]),t._v(" "),v("li",[t._v("逻辑论证 - 基于谓词逻辑")]),t._v(" "),v("li",[t._v("…")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("推理算法 - 给出能够求解的算法，一定可解")]),t._v(" "),v("li",[t._v("推理步骤 - 仅给出过程，不一定可解（无限图深度优先搜索")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("启发推理 - 已有方法的基础上加入针对特定问题的经验或知识，加快搜索效率与推理过程")]),t._v(" "),v("li",[t._v("非启发推理 - 仅使用一般的逻辑法则")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("OPEN表 - 记录被扩展出来的需要被访问的结点")]),t._v(" "),v("li",[t._v("CLOSED表 - 记录已经扩展的结点的访问过的结点")]),t._v(" "),v("li",[t._v("扩展 - 用已知结点生成子节点")]),t._v(" "),v("li",[t._v("指针 - 反向指向父节点，用来生成路径")]),t._v(" "),v("li",[t._v("搜索图 - 搜索得到的图")]),t._v(" "),v("li",[t._v("搜索树 - 搜索图中的所有节点和反向指针构成的集合")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[_("img",{attrs:{src:v(526),alt:""}})])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("广度优先搜索 - 扩展子节点放在OPEN表尾部")]),t._v(" "),v("li",[t._v("深度优先搜索 - 扩展子节点放在OPEN表头部")]),t._v(" "),v("li",[t._v("有界深度优先搜索（迭代加深")]),t._v(" "),v("li",[t._v("代价树搜索：\n"),v("ul",[v("li",[t._v("代价树广度优先搜索 - 选择OPEN表中代价最小的结点（全局最优")]),t._v(" "),v("li",[t._v("代价树深度优先搜索 - 选择刚扩展的结点中代价最小的结点")])])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("code",{pre:!0},[t._v("f(x) = g(x) + h(x)")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("f(x)为估价函数，表示结点x的估价")]),t._v(" "),v("li",[t._v("g(x)为初始节点到x已付出的代价")]),t._v(" "),v("li",[t._v("h(x)是节点x到目标节点的估计代价")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("code",{pre:!0},[t._v("f(n) = d(n) + w(n)")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("d(n)表示结点n的深度（初始节点深度为0")]),t._v(" "),v("li",[t._v("w(n)表示结点n对应于目标状态错放的棋子数（如图中错放数为4")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("g(n) >= g*(n)")]),t._v(" "),v("li",[t._v("h(n)与h*(n)的大小关系无法确定，因为估价不一定准确")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("如果"),v("code",{pre:!0},[t._v("h(n) <= h*(n)")]),t._v("则算法为A*算法（即h(x)为h*(x)的下界")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("收敛，在有限步内终止")]),t._v(" "),v("li",[t._v("能够找到最优解")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("因为与逻辑的存在，"),v("strong",[t._v("解是一棵解树")]),t._v("而不仅是路径")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("己方与对方使用相同的估价函数")]),t._v(" "),v("li",[t._v("双方选择最大估价作为最优")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("α值 - 有或后继的结点，取"),v("strong",[t._v("已计算子节点")]),t._v("最大倒推值为下界，称为α值")]),t._v(" "),v("li",[t._v("β值 - 有与后继的结点，取"),v("strong",[t._v("已计算子节点")]),t._v("最小倒推值为上界，称为β值")]),t._v(" "),v("li",[t._v("α剪枝 - 节点x的β值不能升高其父节点的α值（不能优化己方最坏结果）。停止搜索x以下的分支，且x的倒推值为β")]),t._v(" "),v("li",[t._v("β剪枝 - 节点x的α值不能降低其父节点的β值（不能优化敌方最坏结果）。停止搜索x以下的分支，且x的倒推值为α")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("strong",[t._v("演绎推理")]),t._v(" "),v("ul",[v("li",[t._v("从一般到个别")]),t._v(" "),v("li",[t._v("三段论")])])]),t._v(" "),v("li",[t._v("归纳推理\n"),v("ul",[v("li",[t._v("从个别到一般")])])]),t._v(" "),v("li",[t._v("缺省推理\n"),v("ul",[v("li",[t._v("默认/假设某一条件成立，然后进行推理")])])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("正向推理 - 已知条件推结果")]),t._v(" "),v("li",[t._v("反向推理 - 已知结果推条件")]),t._v(" "),v("li",[t._v("混合推理")]),t._v(" "),v("li",[t._v("双向推理 - 已知条件和结果推过程")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("复合置换 - "),v("strong",[t._v("置换操作满足结合律，不满足交换律")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("使两个谓词合一的置换"),v("strong",[t._v("不唯一")]),t._v("，例：为了合一P(x) & P(y)，可以使用置换"),v("code",{pre:!0},[t._v("{x/y}")]),t._v("，也可以使用"),v("code",{pre:!0},[t._v("{a/x, a/y}")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("合一不唯一但是存在最简合一，即"),v("strong",[t._v("最一般合一")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("求最一般合一需要计算"),v("strong",[t._v("差异集")]),t._v("。合一的过程就是把差异消除的过程")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("Answer中的变元需和L一致")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("需要保存命题表")])])}]};t.exports={attributes:{layout:"collection",title:"问题求解",collection:"AIPrinciple"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},526:function(t,_,v){t.exports=v.p+"img/3-1.f5edd64.png"}}]);