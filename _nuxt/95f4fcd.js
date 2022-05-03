(window.webpackJsonp=window.webpackJsonp||[]).push([[40,407,408,409,410,411,412,413],{1295:function(t,v,_){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[t._v("不是物理传播介质 传播介质可以视为第零层")]),t._v(" "),n("h2",{attrs:{id:"功能"}},[t._v("功能")]),t._v(" "),n("p",[t._v("物理层决定了通信的：")]),t._v(" "),n("ul",[n("li",[t._v("机械特性 - 在什么样的介质上")]),t._v(" "),n("li",[t._v("电气特性 - 以什么样的方式")]),t._v(" "),n("li",[t._v("时序特性 - 如何有序的")])]),t._v(" "),n("h2",{attrs:{id:"基本术语"}},[t._v("基本术语")]),t._v(" "),n("ul",[n("li",[t._v("信源 - 信息的发送方")]),t._v(" "),n("li",[t._v("信宿 - 信息的接收方")]),t._v(" "),n("li",[t._v("信道 - 传递信息的介质")]),t._v(" "),n("li",[t._v("基带信号 - 直接用01表示两种电压并送到信道上传输")]),t._v(" "),n("li",[t._v("宽带信号 - 把基带信号调制后形成频分复用模拟信号 提高利用率")]),t._v(" "),n("li",[t._v("基带传输 - 数字信号在数字信道上传输")]),t._v(" "),n("li",[t._v("频带传输 - 数字数据借助模拟信道传输")])]),t._v(" "),n("h2",{attrs:{id:"性能指标"}},[t._v("性能指标")]),t._v(" "),n("h3",{attrs:{id:"时延delay"}},[t._v("时延DELAY")]),t._v(" "),n("p",[t._v("指一个数据块从链路或网络的一断传送到另一端所需要的时间")]),t._v(" "),n("ul",[n("li",[t._v("发送时延 = 数据块长度 / 数据发送速率")]),t._v(" "),n("li",[t._v("传播时延 = 信道长度 / 电磁波在信道上的传播速率")]),t._v(" "),n("li",[t._v("转发时延 - 中间节点转发数据引起的时延")])]),t._v(" "),n("p",[t._v("总时延为上述三者之和")]),t._v(" "),n("h3",{attrs:{id:"时延带宽积"}},[t._v("时延带宽积")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("时延带宽积 = 传播时延 * 带宽")])]),t._v(" "),n("p",[t._v("例如：某一链路的传播时延为"),n("code",{pre:!0},[t._v("500μs")]),t._v("，带宽"),n("code",{pre:!0},[t._v("100M/s")]),t._v("，则时延带宽积为50000比特")]),t._v(" "),n("p",[t._v("物理意义：发送第一个比特到达终点时，发送端已经发出了50000个比特，充满整个链路。此时链路得到充分的利用")]),t._v(" "),n("h3",{attrs:{id:"rtt往返时间"}},[t._v("RTT往返时间")]),t._v(" "),n("p",[t._v("Round-Trip-Time")]),t._v(" "),n("p",[t._v("从发送端发送数据开始，到发送端收到来自接收端的确认所花费的总时间")]),t._v(" "),n("h3",{attrs:{id:"带宽bandwidth"}},[t._v("带宽(Bandwidth)")]),t._v(" "),n("p",[t._v("信息传输速率就是计算机网络的带宽，指计算机网络可通过的最高数据率，即每秒多少比特，单位"),n("code",{pre:!0},[t._v("b/s")]),t._v("，又称比特率")]),t._v(" "),n("p",[t._v("带宽的另一个定义是信道能够使用的频率范围，单位为"),n("code",{pre:!0},[t._v("Hz")]),t._v("，"),n("strong",[t._v("在物理层描述带宽一般都是用频率范围")])]),t._v(" "),n("h3",{attrs:{id:"波特率"}},[t._v("波特率")]),t._v(" "),n("p",[t._v("码元(Signal units)：一个离散信号状态或信号事件")]),t._v(" "),n("p",[t._v("波特率B：码元传输速率，每秒传输的码元数")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("波特率 = 比特率 / log2(电平级数V)")])]),t._v(" "),n("p",[t._v("单位 波特每秒 "),n("code",{pre:!0},[t._v("Baud/s")])]),t._v(" "),n("p",[t._v("举例：使用"),n("code",{pre:!0},[t._v("00/01/10/11")]),t._v("表示四种码元 1波特等于2比特（电平级数为4，波特率为比特率的一半）")]),t._v(" "),n("h2",{attrs:{id:"两个重要公式"}},[t._v("两个重要公式")]),t._v(" "),n("h3",{attrs:{id:"奈氏nyquist准则奈奎斯特公式"}},[t._v("奈氏(Nyquist)准则（奈奎斯特公式）")]),t._v(" "),n("p",[n("strong",[t._v("理想信道")]),t._v("的最大比特率"),n("code",{pre:!0},[t._v("C = B * log2(V)")])]),t._v(" "),n("p",[t._v("其中"),n("code",{pre:!0},[t._v("B")]),t._v("为带宽，以"),n("code",{pre:!0},[t._v("Hz")]),t._v("为单位，"),n("code",{pre:!0},[t._v("V")]),t._v("为码元能够取得的离散电平值个数，C的单位为bps")]),t._v(" "),n("h3",{attrs:{id:"香农shannon公式"}},[t._v("香农(Shannon)公式")]),t._v(" "),n("p",[t._v("信道的极限信息传输速率"),n("code",{pre:!0},[t._v("C")]),t._v("可表达为")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("C = B log2(1 + S / N)")])]),t._v(" "),n("p",[t._v("其中"),n("code",{pre:!0},[t._v("B")]),t._v("为信道带宽，以"),n("code",{pre:!0},[t._v("Hz")]),t._v("为单位。"),n("code",{pre:!0},[t._v("S/N")]),t._v("为信道的信噪比（信号功率与高斯噪声功率之比）")]),t._v(" "),n("p",[t._v("信噪比也常用分贝表示单位，有以下转换式")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("(S/N)dB = 10log10(S/N)")])]),t._v(" "),n("h3",{attrs:{id:"应用"}},[t._v("应用")]),t._v(" "),n("p",[t._v("某信道带宽为"),n("code",{pre:!0},[t._v("B = 1MHz")]),t._v("，信噪比"),n("code",{pre:!0},[t._v("SNR(dB) = 24dB")])]),t._v(" "),n("ul",[n("li",[t._v("求最大数据率")]),t._v(" "),n("li",[t._v("如果能达到最大数据率，应使用几级电平信号")])]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("解：\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".\nSNR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 24dB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 10log10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S/R"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" S/R "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("251")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" C "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" B log2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" + S/R"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 8Mbps\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".\nC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2B log2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("V"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nV "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("级电平\n")])]),t._v(" "),n("h2",{attrs:{id:"数据的传输方式"}},[t._v("数据的传输方式")]),t._v(" "),n("h3",{attrs:{id:"单工-全双工和半双工"}},[t._v("单工、全双工和半双工")]),t._v(" "),n("ul",[n("li",[t._v("单工 - 在一个信道上允许单向传输")]),t._v(" "),n("li",[t._v("半双工 - 在一个信道上允许双向传输，但不能双方同时发送")]),t._v(" "),n("li",[t._v("全双工 - 在一个信道上允许双向传输，可以同时发送与接收")])]),t._v(" "),n("h3",{attrs:{id:"串行通信-并行通信"}},[t._v("串行通信 & 并行通信")]),t._v(" "),n("ul",[n("li",[t._v("串行通信 - 一个比特一个比特法")]),t._v(" "),n("li",[t._v("并行通信 - 多个比特同时发送")])]),t._v(" "),n("p",[t._v("计算机网络使用"),n("strong",[t._v("串行通信")])]),t._v(" "),n("h3",{attrs:{id:"同步串行传输-异步串行传输"}},[t._v("同步串行传输 & 异步串行传输")]),t._v(" "),n("ul",[n("li",[t._v("同步串行传输\n"),n("ul",[n("li",[t._v("使用时钟信号对传输的数据线上的信号进行同步")]),t._v(" "),n("li",[t._v("以数据块（帧或分组）为单位传输")])])]),t._v(" "),n("li",[t._v("异步串行传输\n"),n("ul",[n("li",[t._v("独立时钟，不需要同步")]),t._v(" "),n("li",[t._v("以字符为单位传输")]),t._v(" "),n("li",[t._v("发送的两个字符之间的间隔是任意的")]),t._v(" "),n("li",[t._v("接收方依靠字符中的起始位和停止位来同步")])])])]),t._v(" "),n("h2",{attrs:{id:"调制解调技术"}},[t._v("调制解调技术")]),t._v(" "),n("h3",{attrs:{id:"基本调制方法"}},[t._v("基本调制方法")]),t._v(" "),n("ul",[n("li",[t._v("调幅AM")]),t._v(" "),n("li",[t._v("调频FM")]),t._v(" "),n("li",[t._v("调相PM")])]),t._v(" "),n("p",[n("img",{attrs:{src:_(569),alt:"2-1"}})]),t._v(" "),n("h3",{attrs:{id:"正交调制qam"}},[t._v("正交调制QAM")]),t._v(" "),n("p",[t._v("Quadrature Amplitude Modulation")]),t._v(" "),n("p",[t._v("正交调制星图：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(570),alt:"2-2"}})]),t._v(" "),n("h2",{attrs:{id:"编码技术"}},[t._v("编码技术")]),t._v(" "),n("h3",{attrs:{id:"不归零编码nrz"}},[t._v("不归零编码NRZ")]),t._v(" "),n("p",[t._v("Non-Return to Zero")]),t._v(" "),n("p",[t._v("低电平为0 高电平为1")]),t._v(" "),n("p",[t._v("容易产生传播错误")]),t._v(" "),n("h3",{attrs:{id:"曼彻斯特编码与差分曼彻斯特编码"}},[t._v("曼彻斯特编码与差分曼彻斯特编码")]),t._v(" "),n("ul",[n("li",[t._v("曼彻斯特(Manchester)编码")])]),t._v(" "),n("p",[t._v("也称“相位编码”")]),t._v(" "),n("p",[t._v("每一位中间都有一个跳变。这个跳变可以作为时钟，即这个编码方式自带时钟，能够自同步")]),t._v(" "),n("p",[t._v("主要应用于以太网")]),t._v(" "),n("ul",[n("li",[t._v("差分曼彻斯特码(Differential Manchester)")])]),t._v(" "),n("p",[t._v("即“如果当前位与之前的一位相同则视为0，不同则视为1”，然后按照曼彻斯特编码的方式编码")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("曼彻斯特编码特点")]),t._v(" "),n("ul",[n("li",[t._v("内含数据信息和"),n("strong",[t._v("时钟")]),t._v("信息，易实现两种信息的合并与分离")]),t._v(" "),n("li",[t._v("无直流分量")]),t._v(" "),n("li",[n("strong",[t._v("效率低")]),t._v("，时钟信号频率是发送信号频率的两倍，所以"),n("strong",[t._v("快速以太网不使用曼彻斯特编码")])])])]),t._v(" "),n("li",[n("p",[t._v("违例码")])])]),t._v(" "),n("p",[t._v("如果曼彻斯特码的中间没有发生跳变则违例。有“0违例”和“1违例”。有些网络利用违例作为帧的开始或结束标志")]),t._v(" "),n("h2",{attrs:{id:"信道复用技术"}},[t._v("信道复用技术")]),t._v(" "),n("ul",[n("li",[t._v("频分复用")]),t._v(" "),n("li",[t._v("时分复用")]),t._v(" "),n("li",[t._v("波分复用（即光波的频分复用）")]),t._v(" "),n("li",[t._v("码分复用")])]),t._v(" "),n("h3",{attrs:{id:"码分复用cdma"}},[t._v("码分复用CDMA")]),t._v(" "),n("p",[t._v("不同站拥有不同的“码片序列”，这些码片序列必须是正交的，即相乘结果为0")]),t._v(" "),n("p",[t._v("如果一个站需要发送1，就发送"),n("code",{pre:!0},[t._v("码片序列*1")]),t._v("，如果需要发送0，就发送"),n("code",{pre:!0},[t._v("码片序列*(-1)")]),t._v("，如果不发送，就视为发送了"),n("code",{pre:!0},[t._v("码片序列*0")])]),t._v(" "),n("p",[t._v("信道上的数据为所有站发送的码片信号的叠加。接收方需要把信道上的数据乘自己的码片序列来恢复信号")]),t._v(" "),n("p",[t._v("举例：已知分配给四个站的码片序列：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("A "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, -1, -1, +1, +1, -1, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, -1, +1, -1, +1, +1, +1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -1, +1, +1, +1, -1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nD "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -1, -1, -1, -1, +1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("p",[t._v("如果A站发送1，B站发送0，C站不发送数据，D站发送1，得到的码片应该是"),n("code",{pre:!0},[t._v("(-1, +1, -3, +1, -1, -3, +1, +1)")]),t._v("，计算过程如下：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, -1, -1, +1, +1, -1, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n + "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, -1, +1, -1, +1, +1, +1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n + "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -1, +1, +1, +1, -1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n + "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -1, -1, -1, -1, +1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -3, +1, -1, -3, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("p",[t._v("接收方恢复信号：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("A:\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -3, +1, -1, -3, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, -1, -1, +1, +1, -1, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n / "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nB:\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -3, +1, -1, -3, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, -1, +1, -1, +1, +1, +1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n / "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" -1\n\nC:\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -3, +1, -1, -3, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -1, +1, +1, +1, -1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n / "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nD:\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -3, +1, -1, -3, +1, +1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1, +1, -1, -1, -1, -1, +1, -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n / "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),n("h2",{attrs:{id:"传输介质"}},[t._v("传输介质")]),t._v(" "),n("p",[t._v("定向传输")]),t._v(" "),n("ul",[n("li",[t._v("双绞线")]),t._v(" "),n("li",[t._v("同轴电缆")]),t._v(" "),n("li",[t._v("光纤")]),t._v(" "),n("li",[t._v("电力线")])]),t._v(" "),n("p",[t._v("不定向传输(无线广播)")]),t._v(" "),n("ul",[n("li",[t._v("无线电")]),t._v(" "),n("li",[t._v("微波与卫星通信")]),t._v(" "),n("li",[t._v("红外波与毫米波")]),t._v(" "),n("li",[t._v("光波")])]),t._v(" "),n("h3",{attrs:{id:"双绞线twisted-pair"}},[t._v("双绞线(Twisted Pair)")]),t._v(" "),n("ul",[n("li",[t._v("最普遍的传输介质")]),t._v(" "),n("li",[t._v("模拟/数字信号都可传播")]),t._v(" "),n("li",[t._v("两条电线绞合以减小电流串扰")]),t._v(" "),n("li",[t._v("带宽取决于电线厚度和传输距离")]),t._v(" "),n("li",[t._v("速度可达Mb/s")])]),t._v(" "),n("p",[t._v("三类线与五类线")]),t._v(" "),n("ul",[n("li",[t._v("五类线绞合更密集 使用效果好")]),t._v(" "),n("li",[t._v("目前常用五类线")])]),t._v(" "),n("h3",{attrs:{id:"同轴电缆coaxial-cable"}},[t._v("同轴电缆(Coaxial Cable)")]),t._v(" "),n("ul",[n("li",[t._v("距离更远 速度更快")]),t._v(" "),n("li",[t._v("高带宽(1GHz) 抗噪能力极强")])]),t._v(" "),n("p",[t._v("有两种不同的线被广泛使用")]),t._v(" "),n("ul",[n("li",[t._v("50ohm 数字信号传输")]),t._v(" "),n("li",[t._v("75ohm 模拟信号传输")])]),t._v(" "),n("h3",{attrs:{id:"光纤fiber-optics"}},[t._v("光纤(Fiber Optics)")]),t._v(" "),n("ul",[n("li",[t._v("高带宽")]),t._v(" "),n("li",[t._v("重量轻")]),t._v(" "),n("li",[t._v("安全 保密性好")])]),t._v(" "),n("h3",{attrs:{id:"定向传输介质带宽比较"}},[t._v("定向传输介质带宽比较")]),t._v(" "),n("p",[t._v("按照带宽"),n("strong",[t._v("从低到高")]),t._v("：")]),t._v(" "),n("p",[t._v("双绞线 -> 同轴电缆 -> 光纤")]),t._v(" "),n("h3",{attrs:{id:"无线电传输"}},[t._v("无线电传输")]),t._v(" "),n("ul",[n("li",[t._v("0-2MHz 直接沿地球表面传播")]),t._v(" "),n("li",[t._v("2-30MHz 通过大气电离层反射传播")]),t._v(" "),n("li",[t._v("30-MHz 直线视距传播 不受电离层影响")])]),t._v(" "),n("h3",{attrs:{id:"卫星通信"}},[t._v("卫星通信")]),t._v(" "),n("p",[t._v("非常长的传播时延")]),t._v(" "),n("h2",{attrs:{id:"链路层设备-交换机switch"}},[t._v("链路层设备 - 交换机(switch)")]),t._v(" "),n("p",[t._v("使用"),n("strong",[t._v("存储转发")]),t._v("方式。内部结构可以理解为一个多端口网桥：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(571),alt:"2-7"}})]),t._v(" "),n("p",[t._v("把完全图化简为星型图。不使用交换机：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(572),alt:"2-5"}})]),t._v(" "),n("p",[t._v("使用交换机：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(573),alt:"2-6"}})]),t._v(" "),n("p",[t._v("如果不使用存储转发方式，也可以使用**直通(cut-through)**方式，能够提高转发速度（因为在交换机内不对数据进行校验），但是网络吞吐量不变")]),t._v(" "),n("h2",{attrs:{id:"电路交换与分组交换"}},[t._v("电路交换与分组交换")]),t._v(" "),n("p",[n("strong",[t._v("电路交换必定是面向连接的")])]),t._v(" "),n("p",[t._v("电路交换三个阶段")]),t._v(" "),n("ul",[n("li",[t._v("建立连接")]),t._v(" "),n("li",[t._v("通信")]),t._v(" "),n("li",[t._v("释放连接")])]),t._v(" "),n("p",[t._v("由于计算机数据具有突发性，不适用电路交换")]),t._v(" "),n("p",[t._v("分组交换把较长的报文划分为较短的数据段，依次把各分组发送到接收端")]),t._v(" "),n("p",[t._v("画图时注意分组首部的位置：分组首部总是先到达接收端")]),t._v(" "),n("p",[n("img",{attrs:{src:_(574),alt:"2-3"}})]),t._v(" "),n("p",[t._v("分组交换的问题：排队时延与首部开销")]),t._v(" "),n("p",[t._v("三种交换的比较：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(575),alt:"2-4"}})]),t._v(" "),n("h2",{attrs:{id:"pstn电话网"}},[t._v("PSTN电话网")]),t._v(" "),n("h3",{attrs:{id:"adslasymmetric-digital-subscriber-lines非对称数字用户线"}},[t._v("ADSL(Asymmetric Digital Subscriber Lines)非对称数字用户线")]),t._v(" "),n("p",[t._v("把1.1MHz的信道均分为256个4312.5Hz的信道（频分复用）")]),t._v(" "),n("ul",[n("li",[t._v("信道0用来打电话")]),t._v(" "),n("li",[t._v("信道6-255用来实现网络传输，共250个信道\n"),n("ul",[n("li",[t._v("Upstream control(1)")]),t._v(" "),n("li",[t._v("Downnstream control(1)")]),t._v(" "),n("li",[t._v("User Data(248)")])])]),t._v(" "),n("li",[t._v("信道1-5不使用，防止电话数据与网络数据互相干扰")])]),t._v(" "),n("p",[t._v("非对称的意思：下行信道多于上行信道，因为通常用户的下载多于上传")]),t._v(" "),n("p",[t._v("使用双绞线。即在原始电话网的基础上添加非对称数字上网的功能。"),n("strong",[t._v("需要调制解调器，把数字信号转换成在电话网上传输的模拟信号")])])])}]};t.exports={attributes:{layout:"collection",title:"物理层",collection:"ComputerNetwork"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},569:function(t,v,_){t.exports=_.p+"img/2-1.80e1194.png"},570:function(t,v,_){t.exports=_.p+"img/2-2.674eac3.png"},571:function(t,v,_){t.exports=_.p+"img/2-7.3f2b734.png"},572:function(t,v,_){t.exports=_.p+"img/2-5.40c1609.png"},573:function(t,v,_){t.exports=_.p+"img/2-6.fff88d6.png"},574:function(t,v,_){t.exports=_.p+"img/2-3.2e1d721.png"},575:function(t,v,_){t.exports=_.p+"img/2-4.0c55885.png"}}]);