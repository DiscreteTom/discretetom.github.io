(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1208:function(v,_){const l={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"frontmatter-markdown"},[l("h2",{attrs:{id:"理论"}},[v._v("理论")]),v._v(" "),l("h4",{attrs:{id:"acid"}},[v._v("ACID")]),v._v(" "),l("p",[v._v("关系型数据库中本地事务的ACID特性（本地事务同时具有ACID四个属性）：")]),v._v(" "),l("ul",[l("li",[v._v("Atomic - 原子性。事务中的所有操作要么全部执行，要么全部不执行")]),v._v(" "),l("li",[v._v("Consistency - 一致性。不会破坏关系型数据库中的数据一致性约束")]),v._v(" "),l("li",[v._v("Isolation - 隔离性。事务可以并发，不同事务互不干扰，无法看到其他事务的中间状态。避免脏读等问题")]),v._v(" "),l("li",[v._v("Durability - 持久性。一旦事务执行完毕就会持久化落盘")])]),v._v(" "),l("h4",{attrs:{id:"分布式事务的场景"}},[v._v("分布式事务的场景")]),v._v(" "),l("p",[v._v("分布式事务的产生场景：")]),v._v(" "),l("ul",[l("li",[v._v("一个事务涉及到多个数据库。即一个事务操作多个数据库")]),v._v(" "),l("li",[v._v("一个事务涉及到多个服务器进程。即多个服务器进程操作同一个事务")])]),v._v(" "),l("blockquote",[l("p",[v._v("所以并不是只有多个数据库的场景才会需要使用分布式事务")])]),v._v(" "),l("h3",{attrs:{id:"cap"}},[v._v("CAP")]),v._v(" "),l("p",[v._v("分布式事务的CAP理论（最多只能同时满足3个中的两个）：")]),v._v(" "),l("ul",[l("li",[v._v("Consistency - 一致性。写后读要么返回最新的数据，要么报错，绝对不会返回旧数据\n"),l("ul",[l("li",[v._v("例：主从数据库，从库要么返回最新数据要么报错")])])]),v._v(" "),l("li",[v._v("Availability - 可用性。任何事务要么返回新数据，要么返回旧数据，但是不会超时报错\n"),l("ul",[l("li",[v._v("例：主从数据库，从库允许返回旧数据")])])]),v._v(" "),l("li",[v._v("Partition tolerance - 分区容忍性。由于网络问题导致服务器之间通信失败时仍然可以对外提供服务。数据可能不一致。异步\n"),l("ul",[l("li",[v._v("例：主从数据库，主从数据不一致（比如从库返回旧数据），但是仍然可以向外提供服务")])])])]),v._v(" "),l("p",[v._v("组合方式：")]),v._v(" "),l("ul",[l("li",[v._v("AP - 允许返回旧数据。"),l("strong",[v._v("很常见")]),v._v("。如商品管理")]),v._v(" "),l("li",[v._v("CP - 允许报错但是数据必须准确。比如zookeeper。常见于银行系统")]),v._v(" "),l("li",[v._v("CA - 不分区，也就是不使用分布式系统")])]),v._v(" "),l("h3",{attrs:{id:"base"}},[v._v("BASE")]),v._v(" "),l("p",[v._v("BASE是对CAP中AP的扩展，牺牲强一致性提升可用性，数据可以短时间不一致。满足BASE的事务称为"),l("strong",[v._v("柔性事务")])]),v._v(" "),l("ul",[l("li",[v._v("Basically Available - 基本可用。部分系统故障不会导致整个系统无法使用\n"),l("ul",[l("li",[v._v("例：电商，付款系统坏了，但是仍然可以使用其他功能，比如加入购物车")])])]),v._v(" "),l("li",[v._v("Soft state - 软状态。允许出现中间状态\n"),l("ul",[l("li",[v._v("例：电商，允许出现“支付中”等状态，以等待付款系统的修复")])])]),v._v(" "),l("li",[v._v("Eventually consistent - 最终一致性\n"),l("ul",[l("li",[v._v("例：电商，付款系统修复后实现事务")])])])]),v._v(" "),l("h2",{attrs:{id:"解决方案"}},[v._v("解决方案")]),v._v(" "),l("h3",{attrs:{id:"2pc"}},[v._v("2PC")]),v._v(" "),l("h4",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),l("p",[v._v("两阶段提交(2-phase commit)，适用于一个事务涉及多个数据库的场景")]),v._v(" "),l("p",[v._v("引入新的主体：事务协调者(Transaction Coordinator, TC)")]),v._v(" "),l("ol",[l("li",[v._v("客户端向TC发起请求")]),v._v(" "),l("li",[v._v("准备阶段(Prepare phase)\n"),l("ol",[l("li",[v._v("TC向多个数据库发出prepare请求，包含要执行的事务")]),v._v(" "),l("li",[v._v("所有数据库执行事务，但是不提交")]),v._v(" "),l("li",[v._v("所有数据库向TC返回ok")])])]),v._v(" "),l("li",[v._v("提交阶段(Commit phase)\n"),l("ol",[l("li",[v._v("TC向所有数据库发出commit请求，向客户端返回ok响应（不需要等待数据库的响应）")]),v._v(" "),l("li",[v._v("所有数据库持久化事务")])])])]),v._v(" "),l("p",[v._v("如果准备阶段有任何数据库出现异常或超时，TC通知所有数据库取消事务。如果TC发出了commit请求，此时有数据库还没有收到commit就down了，数据库重启的时候可以向TC或其他数据库发起请求，询问全局事务是否被commit")]),v._v(" "),l("p",[v._v("很多常用数据库自身就支持2PC，比如Oracle、MySQL")]),v._v(" "),l("h4",{attrs:{id:"xa方案"}},[v._v("XA方案")]),v._v(" "),l("p",[v._v("2PC是在数据库层面实现的。为了统一标准，需要标准化处理模型和接口。国际开放组织(Open Group)定义了分布式事务处理模型(DTP, Distributed Transaction Processing Reference Model)")]),v._v(" "),l("p",[v._v("DTP中的主体：")]),v._v(" "),l("ul",[l("li",[v._v("应用程序AP(Application Program)")]),v._v(" "),l("li",[v._v("事务管理器TM(Transaction Manager)，AP使用接口调用TM，控制全局事务")]),v._v(" "),l("li",[v._v("资源管理器RM(Resource Manager)，位于数据库上，控制分支事务")])]),v._v(" "),l("p",[v._v("执行流程：")]),v._v(" "),l("ol",[l("li",[v._v("AP调用TM的接口发起全局事务")]),v._v(" "),l("li",[v._v("TM向所有RM发送prepare请求，发起分支事务")]),v._v(" "),l("li",[v._v("所有数据库执行操作，锁定资源，不提交事务，响应TM")]),v._v(" "),l("li",[v._v("TM收到执行回复，然后向所有RM发起commit请求提交事务，释放资源锁")])]),v._v(" "),l("p",[v._v("其中TM和RM之间通信的接口规范叫XA")]),v._v(" "),l("p",[v._v("优点：简单")]),v._v(" "),l("p",[v._v("缺点：")]),v._v(" "),l("ol",[l("li",[v._v("需要数据库的支持")]),v._v(" "),l("li",[v._v("性能较差，需要所有数据库都上锁，执行完毕之后才能释放锁，降低数据库效率")])]),v._v(" "),l("h4",{attrs:{id:"seata方案"}},[v._v("Seata方案")]),v._v(" "),l("p",[v._v("是阿里中间件团队的开源项目Fescar发展而来。优化了2PC，是在应用层的实现，不需要数据库支持2PC")]),v._v(" "),l("p",[v._v("两种模式：")]),v._v(" "),l("ul",[l("li",[v._v("AT模式（即2PC模式）")]),v._v(" "),l("li",[v._v("TCC模式")])]),v._v(" "),l("p",[v._v("主体：")]),v._v(" "),l("ul",[l("li",[v._v("事务管理器TM(Transaction Manager)\n"),l("ul",[l("li",[v._v("以jar包的方式嵌入应用程序")]),v._v(" "),l("li",[v._v("负责发起全局事务、全局提交、全局回滚")])])]),v._v(" "),l("li",[v._v("事务协调器TC(Transaction Coordinator)\n"),l("ul",[l("li",[v._v("独立的中间件，需要独立部署")]),v._v(" "),l("li",[v._v("其他TM没有实现的调度功能都由TC实现，以此减少对应用程序的侵入性")]),v._v(" "),l("li",[v._v("维护全局事务的运行状态、接收TM的指令、负责和RM通信进行分支事务的提交与回滚")])])]),v._v(" "),l("li",[v._v("资源管理器RM(Resource Manager)\n"),l("ul",[l("li",[v._v("接收TC的指令，管理分支事务")]),v._v(" "),l("li",[v._v("以jar包的方式嵌入应用程序")]),v._v(" "),l("li",[l("strong",[v._v("执行TC的指令的时候需要在本地分支事务里面写入undo_log")]),v._v("，undo_log是需要手动创建的一个表")]),v._v(" "),l("li",[v._v("使用一个数据库代理来连接数据库，数据库代理自动实现写undo_log，其中包含修改前的数据和修改后的数据")])])])]),v._v(" "),l("p",[v._v("流程：")]),v._v(" "),l("ol",[l("li",[v._v("应用通过TM向TC申请开启全局事务，TC创建全局唯一的事务ID：XID")]),v._v(" "),l("li",[v._v("应用控制所有RM向TC注册分支事务并执行、"),l("strong",[v._v("写入undo_log")]),v._v("、"),l("strong",[v._v("提交")]),v._v("，释放锁、向TC上报分支事务执行结果")]),v._v(" "),l("li",[v._v("应用通过TM向TC发起针对XID的全局提交或回滚决议\n"),l("ol",[l("li",[v._v("如果全局提交，则删除undo_log")]),v._v(" "),l("li",[v._v("如果全局回滚，则TC向RM请求根据undo_log回滚、向TC汇报回滚状态")])])]),v._v(" "),l("li",[v._v("TC完成XID的提交与回滚")])]),v._v(" "),l("p",[v._v("优点：")]),v._v(" "),l("ul",[l("li",[v._v("性能较好，不会长时间占用连接资源")]),v._v(" "),l("li",[v._v("不需要数据库支持2PC")]),v._v(" "),l("li",[v._v("易于使用，对业务代码0侵入")])]),v._v(" "),l("p",[v._v("相比传统2PC的差别：")]),v._v(" "),l("ul",[l("li",[v._v("架构方面\n"),l("ul",[l("li",[v._v("传统2PC的RM是数据库自身，使用XA协议来实现")]),v._v(" "),l("li",[v._v("Seata的RM也是以jar包的形式作为中间件部署在应用程序")])])]),v._v(" "),l("li",[v._v("2PC方面\n"),l("ul",[l("li",[v._v("传统2PC的资源锁需要等到所有数据库都准备好了才能释放")]),v._v(" "),l("li",[v._v("Seata在Phase 1执行完毕之后立即释放资源锁，提升效率")])])])]),v._v(" "),l("h3",{attrs:{id:"tcc"}},[v._v("TCC")]),v._v(" "),l("h4",{attrs:{id:"概述-1"}},[v._v("概述")]),v._v(" "),l("p",[v._v("TCC要求每个分支事务实现三个操作：Try-Confirm-Cancel")]),v._v(" "),l("ul",[l("li",[v._v("try - 业务检查与资源隔离")]),v._v(" "),l("li",[v._v("confirm - 只要所有数据库的try返回了ok，就confirm。且confirm被视为不会失败的。如果失败，需要手动重试或人工处理")]),v._v(" "),l("li",[v._v("cancel - 在try阶段只要有数据库没有返回ok，就cancel。释放资源。且cancel被视为不会失败的，如果失败，需要手动重试或人工处理")])]),v._v(" "),l("p",[v._v("即每个服务都要有以上三个方法。所以"),l("strong",[v._v("分布式事务是在每个独立服务的业务逻辑上实现的")]),v._v("，三个阶段中的事务都是独立的事务，执行完就可以在分支事务中confirm")]),v._v(" "),l("p",[v._v("事务管理器TM可以是独立的服务，也可以是全局事务发起方。confirm和cancel由于需要支持重试，所以需要幂等")]),v._v(" "),l("p",[v._v("需要注意的三种异常处理（TM没有处理好try/confirm/cancel的顺序或数量）：")]),v._v(" "),l("ul",[l("li",[v._v("空回滚 - 某个服务没有被try就被通知cancel。此服务的cancel方法需要能够识别这是空回滚并直接返回ok。通过在服务本地记录全局事务ID+分支事务ID来实现")]),v._v(" "),l("li",[v._v("幂等 - TCC的三个操作都要幂等，来保证不会重复锁/释放资源。通过在分支事务记录中记录执行状态，每次执行TCC之前都检查状态来实现")]),v._v(" "),l("li",[v._v("悬挂 - 服务先收到cancel再收到try，导致资源无法释放。解决方法是通过分支事务记录在try之前检查是否已经被cancel")])]),v._v(" "),l("blockquote",[l("p",[v._v("例：银行系统")]),v._v(" "),l("p",[v._v("账户A的TCC三个方法为")]),v._v(" "),l("ul",[l("li",[v._v("try\n"),l("ul",[l("li",[v._v("检查余额是否大于30")]),v._v(" "),l("li",[v._v("扣30元")])])]),v._v(" "),l("li",[v._v("confirm\n"),l("ul",[l("li",[v._v("无操作")])])]),v._v(" "),l("li",[v._v("cancel\n"),l("ul",[l("li",[v._v("加30元")])])])]),v._v(" "),l("p",[v._v("账户B的TCC三个方法为")]),v._v(" "),l("ul",[l("li",[v._v("try\n"),l("ul",[l("li",[v._v("加30元")])])]),v._v(" "),l("li",[v._v("confirm\n"),l("ul",[l("li",[v._v("无操作")])])]),v._v(" "),l("li",[v._v("cancel\n"),l("ul",[l("li",[v._v("扣30元")])])])]),v._v(" "),l("p",[v._v("为了实现异常处理，正确的操作是")]),v._v(" "),l("p",[v._v("账户A")]),v._v(" "),l("ul",[l("li",[v._v("try\n"),l("ul",[l("li",[v._v("幂等校验，检查try是否已经被执行")]),v._v(" "),l("li",[v._v("悬挂校验，检查是否已经被cancel")]),v._v(" "),l("li",[v._v("检查余额是否大于30")]),v._v(" "),l("li",[v._v("扣30元")])])]),v._v(" "),l("li",[v._v("confirm\n"),l("ul",[l("li",[v._v("无操作")])])]),v._v(" "),l("li",[v._v("cancel\n"),l("ul",[l("li",[v._v("幂等校验，检查cancel是否已经被执行")]),v._v(" "),l("li",[v._v("空回滚校验，检查try是否已经执行")]),v._v(" "),l("li",[v._v("加30元")])])])]),v._v(" "),l("p",[v._v("账户B")]),v._v(" "),l("ul",[l("li",[v._v("try\n"),l("ul",[l("li",[v._v("无操作。不应该在try阶段加30元，防止B花掉这30元")])])]),v._v(" "),l("li",[v._v("confirm\n"),l("ul",[l("li",[v._v("幂等校验，检查confirm是否已经被执行")]),v._v(" "),l("li",[v._v("加30元")])])]),v._v(" "),l("li",[v._v("cancel\n"),l("ul",[l("li",[v._v("无操作")])])])])]),v._v(" "),l("h4",{attrs:{id:"框架"}},[v._v("框架")]),v._v(" "),l("p",[v._v("TCC的协议是固定的，有很多实现框架")]),v._v(" "),l("ul",[l("li",[v._v("tcc-transaction")]),v._v(" "),l("li",[v._v("Hmily")]),v._v(" "),l("li",[v._v("ByteTCC")]),v._v(" "),l("li",[v._v("EasyTransaction")]),v._v(" "),l("li",[v._v("Seata（TCC模式对SpringCloud没有提供支持）")])]),v._v(" "),l("h4",{attrs:{id:"hmily"}},[v._v("Hmily")]),v._v(" "),l("ul",[l("li",[v._v("轻量，不需要独立的TM，但是需要一个数据库（或文件）进行日志存储")]),v._v(" "),l("li",[v._v("支持嵌套事务")]),v._v(" "),l("li",[v._v("基于AOP拦截方法，实现try-confirm-cancel和重试")])]),v._v(" "),l("h3",{attrs:{id:"可靠消息最终一致性"}},[v._v("可靠消息最终一致性")]),v._v(" "),l("h4",{attrs:{id:"概述-2"}},[v._v("概述")]),v._v(" "),l("p",[v._v("需要解决的问题：")]),v._v(" "),l("ul",[l("li",[v._v("消息发送方的本地事务和消息发送的原子性。确保消息的发送和本地事务能够同时commit或cancel")]),v._v(" "),l("li",[v._v("消息的接收是可靠的")]),v._v(" "),l("li",[v._v("重复消息问题。需要保证消费操作的幂等性，需要自行在业务逻辑实现")])]),v._v(" "),l("h4",{attrs:{id:"本地消息表"}},[v._v("本地消息表")]),v._v(" "),l("p",[v._v("最初由eBey提出")]),v._v(" "),l("p",[v._v("分布式事务的发起方需要保存一个消息日志表，MQ定时扫描事务发起方的日志，获得消息之后通知消费者。消费者执行完毕后通知MQ删除消息(ACK)")]),v._v(" "),l("ul",[l("li",[v._v("事务发起方的本地事务保证了原子性")]),v._v(" "),l("li",[v._v("ACK保证了消息一定被消费了")])]),v._v(" "),l("h4",{attrs:{id:"rocketmq"}},[v._v("RocketMQ")]),v._v(" "),l("p",[v._v("是阿里巴巴的分布式消息中间件。自带“事务消息”，是本地消息表在MQ的封装")]),v._v(" "),l("p",[v._v("流程：")]),v._v(" "),l("ol",[l("li",[v._v("MQ发送方向MQ Server发送Half消息（即事务消息）")]),v._v(" "),l("li",[v._v("MQ Server返回成功。此时此消息无法被消费")]),v._v(" "),l("li",[v._v("MQ发送方执行本地事务")]),v._v(" "),l("li",[v._v("MQ发送方把本地事务结果告知到MQ Server（commit or rollback)")]),v._v(" "),l("li",[v._v("如果MQ Server接收到commit，才会设置消息为“可消费”")]),v._v(" "),l("li",[v._v("如果MQ Server没有收到commit/rollback，则会主动询问MQ发起方，MQ发起方可以查询本地事务以判断事务是否已经执行")])]),v._v(" "),l("h3",{attrs:{id:"最大努力通知"}},[v._v("最大努力通知")]),v._v(" "),l("p",[v._v("事务发起方完成本地事务后告诉客户端“正在执行”，然后尽最大努力通知事务接收方。事务发起方一直重试（但是可以使用退避策略，比如第一次失败后等1分钟，第二次失败后等2分钟。。。）。除此之外，"),l("strong",[v._v("消息接收方")]),v._v("可以对"),l("strong",[v._v("消息发起方")]),v._v("的事务状态进行"),l("strong",[v._v("主动查询")]),v._v("（需要提供查询接口）")]),v._v(" "),l("p",[v._v("需求：")]),v._v(" "),l("ul",[l("li",[v._v("消息重试机制")]),v._v(" "),l("li",[v._v("消息幂等")])]),v._v(" "),l("p",[v._v("不可靠，通常不用于交易，而是用于交易之后的通知事务")]),v._v(" "),l("p",[v._v("可以使用RocketMQ的普通消息来实现")]),v._v(" "),l("h2",{attrs:{id:"总结"}},[v._v("总结")]),v._v(" "),l("ul",[l("li",[v._v("2PC\n"),l("ul",[l("li",[v._v("数据库原生支持")]),v._v(" "),l("li",[v._v("阻塞，锁资源的时间会比较长，不适用于高并发")]),v._v(" "),l("li",[v._v("简单好实现")])])]),v._v(" "),l("li",[v._v("TCC\n"),l("ul",[l("li",[v._v("在应用层处理而不是在数据库层。程序需要写三个阶段的对应方法")]),v._v(" "),l("li",[v._v("三个阶段都是独立的本地事务，应用程序可以自行定义锁的粒度，从而降低锁冲突，提升吞吐")]),v._v(" "),l("li",[v._v("对应用的侵入性较强，实现难度高")])])]),v._v(" "),l("li",[v._v("可靠消息最终一致性\n"),l("ul",[l("li",[v._v("适用于周期长且实时性要求不高的场景")]),v._v(" "),l("li",[v._v("异步操作避免阻塞")])])]),v._v(" "),l("li",[v._v("最大努力通知\n"),l("ul",[l("li",[v._v("实时性要求不高")]),v._v(" "),l("li",[v._v("适用于各种通知的场景（充值结果、支付结果。。。）")])])])]),v._v(" "),l("table",[l("thead",[l("tr",[l("th"),v._v(" "),l("th",[v._v("2PC")]),v._v(" "),l("th",[v._v("TCC")]),v._v(" "),l("th",[v._v("可靠消息")]),v._v(" "),l("th",[v._v("最大努力")])])]),v._v(" "),l("tbody",[l("tr",[l("td",[v._v("一致性")]),v._v(" "),l("td",[v._v("强一致性")]),v._v(" "),l("td",[v._v("最终一致性")]),v._v(" "),l("td",[v._v("最终一致性")]),v._v(" "),l("td",[v._v("最终一致性")])]),v._v(" "),l("tr",[l("td",[v._v("吞吐量")]),v._v(" "),l("td",[v._v("低")]),v._v(" "),l("td",[v._v("中")]),v._v(" "),l("td",[v._v("高")]),v._v(" "),l("td",[v._v("高")])]),v._v(" "),l("tr",[l("td",[v._v("实现复杂度")]),v._v(" "),l("td",[v._v("易")]),v._v(" "),l("td",[v._v("难")]),v._v(" "),l("td",[v._v("中")]),v._v(" "),l("td",[v._v("易")])])])]),v._v(" "),l("h2",{attrs:{id:"其他"}},[v._v("其他")]),v._v(" "),l("h3",{attrs:{id:"saga事务"}},[v._v("Saga事务")]),v._v(" "),l("p",[v._v("把一个长事务拆分为多个短事务，由一个协调器控制分别执行。如果执行失败就逆序执行短事务的恢复操作。所有短事务不需要任何try的阶段，直接执行即可")]),v._v(" "),l("p",[v._v("缺点：短事务之间没有锁资源，需要在业务层面实现锁")]),v._v(" "),l("h3",{attrs:{id:"3pc"}},[v._v("3PC")]),v._v(" "),l("p",[v._v("三个阶段：CanCommit, PreCommit, DoCommit。在CanCommit阶段判断数据库是否OK，在PreCommit阶段执行局部事务并锁资源、写log，最后在DoCommit阶段提交事务")]),v._v(" "),l("h2",{attrs:{id:"参考"}},[v._v("参考")]),v._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://bilibili.com/video/BV1Q4411y7ip"}},[v._v("微服务架构的分布式事务控制解决方案")])]),v._v(" "),l("li",[l("a",{attrs:{href:"https://blog.csdn.net/lengxiao1993/article/details/88290514"}},[v._v("正确理解二阶段提交（Two-Phase Commit）")])]),v._v(" "),l("li",[l("a",{attrs:{href:"https://juejin.im/post/5aa3c7736fb9a028bb189bca"}},[v._v("常用的分布式事务解决方案")])]),v._v(" "),l("li",[l("a",{attrs:{href:"https://juejin.im/post/5b5a0bf9f265da0f6523913b"}},[v._v("再有人问你分布式事务，把这篇扔给他")])])])])}]};v.exports={attributes:{title:"Distributed transaction",description:"分布式事务的解决方案",tags:["Database","Distributed System"]},vue:{render:l.render,staticRenderFns:l.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=l.render,this.$options.staticRenderFns=l.staticRenderFns}}}}}}]);