(window.webpackJsonp=window.webpackJsonp||[]).push([[57,605,606,607,608,609],{1361:function(t,v,_){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"并发控制协议"}},[t._v("并发控制协议")]),t._v(" "),n("p",[t._v("用来保证调度可串行。")]),t._v(" "),n("ul",[n("li",[t._v("基于锁的协议lock-based protocol")]),t._v(" "),n("li",[t._v("基于时间戳的协议timestamp-based protocol（略")])]),t._v(" "),n("h2",{attrs:{id:"基于锁的协议"}},[t._v("基于锁的协议")]),t._v(" "),n("h3",{attrs:{id:"两种锁"}},[t._v("两种锁")]),t._v(" "),n("p",[t._v("数据可能处于两种状态")]),t._v(" "),n("ul",[n("li",[t._v("互斥状态exclusive mode(即被上了互斥锁X) - 可以被读写")]),t._v(" "),n("li",[t._v("共享状态shared mode(即被上了共享锁S) - 仅能读")])]),t._v(" "),n("p",[t._v("上锁时的相容性矩阵：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(731),alt:""}})]),t._v(" "),n("p",[t._v("每个事务操作数据时都要根据条件给数据上锁。如果不能上锁则等待")]),t._v(" "),n("h3",{attrs:{id:"简单上锁协议"}},[t._v("简单上锁协议")]),t._v(" "),n("p",[t._v("如果读数据，就近上锁：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("lock-S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nunlock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("p",[t._v("如果写数据，就近上锁：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("lock-X"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwrite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nunlock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("p",[t._v("缺陷：")]),t._v(" "),n("ul",[n("li",[t._v("死锁 & 饥饿")]),t._v(" "),n("li",[t._v("执行错误（假设读A然后读B然后输出A+B，那么读B的时候因为没有锁A所以A可能被修改")])]),t._v(" "),n("h3",{attrs:{id:"两阶段封锁协议"}},[t._v("两阶段封锁协议")]),t._v(" "),n("p",[n("strong",[t._v("two-phase locking protocol")])]),t._v(" "),n("p",[t._v("思想：批量上锁解锁。一旦释放了锁就不能再申请锁，直到已申请的锁全部释放")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("增长阶段growing phase")]),t._v(" - 批量加锁，不能释放锁")]),t._v(" "),n("li",[n("strong",[t._v("缩减阶段shrinking phase")]),t._v(" - 批量解锁，不能上锁")]),t._v(" "),n("li",[n("strong",[t._v("封锁点lock point")]),t._v(" - 最后上锁的位置")])]),t._v(" "),n("p",[t._v("此协议保证了冲突可串行化。只要排序封锁点即可得到正确执行顺序。但是不能保证不死锁，也不能保证没有级联回滚")]),t._v(" "),n("p",[t._v("优化：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("严格两阶段封锁协议strict two-phase locking protocol")]),t._v(" "),n("ul",[n("li",[t._v("事务在commit/abort之前必须一直持有它的互斥锁")]),t._v(" "),n("li",[t._v("防止死锁")])])]),t._v(" "),n("li",[n("strong",[t._v("强两阶段封锁协议rigorous …")]),t._v(" "),n("ul",[n("li",[t._v("更严格")]),t._v(" "),n("li",[t._v("事务在commit/abort之前必须一直持有它的所有锁")]),t._v(" "),n("li",[t._v("事务串行化的顺序就是commit的顺序")])])])]),t._v(" "),n("h3",{attrs:{id:"锁转换"}},[t._v("锁转换")]),t._v(" "),n("p",[t._v("lock conversions")]),t._v(" "),n("p",[t._v("因为两阶段封锁协议比较严格，可能会限制功能，所以允许锁在两个阶段存在转换")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("升级upgrade")]),t._v(" - 共享锁变互斥锁（添加使用权限")]),t._v(" "),n("li",[n("strong",[t._v("降级downgrade")]),t._v(" - 互斥锁变共享锁（减少使用权限")])]),t._v(" "),n("p",[t._v("第一阶段允许：")]),t._v(" "),n("ul",[n("li",[t._v("获得S/X锁")]),t._v(" "),n("li",[t._v("升级S -> X")])]),t._v(" "),n("p",[t._v("第二阶段允许：")]),t._v(" "),n("ul",[n("li",[t._v("释放S/X锁")]),t._v(" "),n("li",[t._v("降级X -> S")])]),t._v(" "),n("p",[t._v("修改后的协议仍然可以保证可串行化")]),t._v(" "),n("h3",{attrs:{id:"多粒度"}},[t._v("多粒度")]),t._v(" "),n("p",[t._v("multiple granularity")]),t._v(" "),n("p",[t._v("使用不同粒度访问数据，形成一个树形结构。叶节点为最小粒度的数据，上面的结点是大粒度数据。方便访问以组为单位的数据。每个节点都可以单独加锁")]),t._v(" "),n("p",[n("img",{attrs:{src:_(732),alt:""}})]),t._v(" "),n("p",[t._v("父节点加锁会隐式给子节点加锁。那子节点加锁，父节点如何表示？")]),t._v(" "),n("p",[t._v("引入 "),n("strong",[t._v("意向锁intention lock")]),t._v("机制，事务不必搜索到根节点就可以判断是否能够加锁")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("意向共享锁intention-shared(IS)")]),t._v(" - 表示子节点加了共享锁")]),t._v(" "),n("li",[n("strong",[t._v("意向互斥锁intention-exclusive(IX)")]),t._v(" - 表示子节点加了互斥锁")]),t._v(" "),n("li",[n("strong",[t._v("共享意向互斥锁shared and intention-exclusive(SIX)")]),t._v(" - 表示某个子节点加了共享锁，这个子节点的子节点加了互斥锁")])]),t._v(" "),n("p",[t._v("相容性矩阵：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(733),alt:""}})]),t._v(" "),n("p",[t._v("自顶向下上锁，自底向上解锁。如果想读，自顶向下加IS，最后加S。如果想写，自顶向下加IX，最后加X")]),t._v(" "),n("h2",{attrs:{id:"死锁处理"}},[t._v("死锁处理")]),t._v(" "),n("p",[t._v("死锁举例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(734),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"死锁预防策略"}},[t._v("死锁预防策略")]),t._v(" "),n("p",[t._v("保证死锁不可能发生")]),t._v(" "),n("ul",[n("li",[t._v("在事务开始时获得所有需要的锁，如果无法获得就全部释放而不等待（操作系统-银行家算法\n"),n("ul",[n("li",[t._v("缺陷 - 事务开始时难以知道需要哪些锁。数据项利用率低，可能锁了半天的数据不使用")])])]),t._v(" "),n("li",[t._v("类似于树形结构，给所有数据项加一个次序，按顺序访问")]),t._v(" "),n("li",[t._v("超时机制，超时后回滚，释放所有锁")])]),t._v(" "),n("p",[t._v("利用时间戳的死锁预防：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("死亡等待协议wait-die")]),t._v(" "),n("ul",[n("li",[t._v("非抢占")]),t._v(" "),n("li",[t._v("假设事务i需要的数据被事务j占有，如果事务i比事务j早开始（i比j老）则等待，否则i回滚死亡")])])]),t._v(" "),n("li",[n("strong",[t._v("伤害等待协议wound-wait")]),t._v(" "),n("ul",[n("li",[t._v("抢占")]),t._v(" "),n("li",[t._v("假设事务i需要的数据被事务j占有，如果事务i比事务j晚开始（i比j年轻）则等待，否则j回滚（j被i伤害，即被抢占")])])])]),t._v(" "),n("p",[t._v("上述两种方案都可能引起不必要的回滚")]),t._v(" "),n("h3",{attrs:{id:"死锁检测"}},[t._v("死锁检测")]),t._v(" "),n("p",[t._v("使用 "),n("strong",[t._v("等待图wait-for graph")])]),t._v(" "),n("p",[t._v("如果无环即无死锁（可拓扑排序")]),t._v(" "),n("p",[n("img",{attrs:{src:_(735),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"死锁恢复"}},[t._v("死锁恢复")]),t._v(" "),n("p",[t._v("检测到死锁后，需要回滚一些事务。步骤：")]),t._v(" "),n("ol",[n("li",[t._v("选择牺牲者，尽量减少回滚代价")]),t._v(" "),n("li",[t._v("回滚，可以彻底回滚或部分回滚")]),t._v(" "),n("li",[t._v("避免饿死。如果每次回滚选择的牺牲者是同一个事务，就会导致永久死锁恢复。所以要记录事务回滚的次数，防止饿死")])])])}]};t.exports={attributes:{layout:"collection",title:"Concurrency Control",collection:"DatabaseConcept"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},731:function(t,v,_){t.exports=_.p+"img/15-1.3765e86.png"},732:function(t,v,_){t.exports=_.p+"img/15-2.2983a5f.png"},733:function(t,v,_){t.exports=_.p+"img/15-3.e056482.png"},734:function(t,v,_){t.exports=_.p+"img/15-4.31b4873.png"},735:function(t,v,_){t.exports=_.p+"img/15-5.343eb06.png"}}]);