(window.webpackJsonp=window.webpackJsonp||[]).push([[12,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840],{1378:function(v,_,t){const r={render:function(){var v=this;v.$createElement;return v._self._c,v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"frontmatter-markdown"},[r("p",[v._v("词性标注")]),v._v(" "),r("h2",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),r("p",[v._v("词性(POS: Part of Speech)：")]),v._v(" "),r("ul",[r("li",[v._v("名词noun")]),v._v(" "),r("li",[v._v("动词verb")]),v._v(" "),r("li",[v._v("形容词adjective")]),v._v(" "),r("li",[v._v("副词adverb")]),v._v(" "),r("li",[v._v("…")])]),v._v(" "),r("p",[v._v("研究词性的目的 - 有助于其他NLP任务")]),v._v(" "),r("p",[v._v("词性标注中的"),r("strong",[v._v("词性歧义")]),v._v(" - 一个词可以有多个词性")]),v._v(" "),r("p",[v._v("影响词性标注的因素：")]),v._v(" "),r("ul",[r("li",[v._v("词本身\n"),r("ul",[r("li",[v._v("词性歧义")]),v._v(" "),r("li",[v._v("专有名词有特定词性，如：天安门")])])]),v._v(" "),r("li",[v._v("上下文\n"),r("ul",[r("li",[v._v("两个定冠词连续出现的情况很少")]),v._v(" "),r("li",[v._v("…")])])])]),v._v(" "),r("h2",{attrs:{id:"词性标注方法"}},[v._v("词性标注方法")]),v._v(" "),r("ul",[r("li",[v._v("基于规则(Rule-Based) - 人类专家总结的规则")]),v._v(" "),r("li",[v._v("基于学习(Learning-Based) - 从人类专家总结的语料库中学习\n"),r("ul",[r("li",[v._v("统计模型\n"),r("ul",[r("li",[v._v("隐马尔可夫模型HMM")]),v._v(" "),r("li",[v._v("条件随机域模型CRF")]),v._v(" "),r("li",[v._v("神经网络NN")])])]),v._v(" "),r("li",[v._v("规则学习\n"),r("ul",[r("li",[v._v("基于转换的学习TBL")])])])])])]),v._v(" "),r("p",[v._v("本章重点为 "),r("strong",[v._v("隐马尔可夫模型")])]),v._v(" "),r("h2",{attrs:{id:"词性标注的学习过程"}},[v._v("词性标注的学习过程")]),v._v(" "),r("p",[v._v("给定训练数据 - 很多"),r("strong",[v._v("句子O与词性序列Q的二元组")])]),v._v(" "),r("p",[v._v("目标：训练一个映射函数f(O)来完成句子到词性序列的映射")]),v._v(" "),r("p",[v._v("标注过程：")]),v._v(" "),r("ul",[r("li",[v._v("输入\n"),r("ul",[r("li",[v._v("句子或词序列（中文为分好词的句子")])])]),v._v(" "),r("li",[v._v("输出\n"),r("ul",[r("li",[v._v("每个词的词性")])])])]),v._v(" "),r("h2",{attrs:{id:"如何进行词性标注"}},[v._v("如何进行词性标注")]),v._v(" "),r("h3",{attrs:{id:"目标"}},[v._v("目标")]),v._v(" "),r("p",[v._v("为O寻找最优的Q使得"),r("code",{pre:!0},[v._v("P(Q|O)")]),v._v("最大")]),v._v(" "),r("p",[v._v("根据"),r("strong",[v._v("贝叶斯法则")]),v._v("，"),r("code",{pre:!0},[v._v("P(Q|O) = P(O|Q)P(Q)/P(O)")]),v._v("。其中P(O)可忽略，则原问题可转化为求"),r("code",{pre:!0},[v._v("P(O|Q)P(Q)")]),v._v("的问题")]),v._v(" "),r("h3",{attrs:{id:"模型的数学分解"}},[v._v("模型的数学分解")]),v._v(" "),r("p",[v._v("其中"),r("code",{pre:!0},[v._v("P(O|Q)")]),v._v("可以被拆解为:")]),v._v(" "),r("p",[r("img",{attrs:{src:t(962),alt:"5-1"}})]),v._v(" "),r("p",[v._v("而"),r("code",{pre:!0},[v._v("P(Q)")]),v._v("可以使用语言模型计算，如bigram下的"),r("code",{pre:!0},[v._v("P(Q)")]),v._v(":")]),v._v(" "),r("p",[r("img",{attrs:{src:t(963),alt:"5-2"}})]),v._v(" "),r("h3",{attrs:{id:"模型的图分解"}},[v._v("模型的图分解")]),v._v(" "),r("p",[v._v("在上述数学分解后，可以使用图模型来表示词性标注的任务。")]),v._v(" "),r("p",[r("img",{attrs:{src:t(964),alt:"5-3"}})]),v._v(" "),r("p",[r("img",{attrs:{src:t(965),alt:"5-4"}})]),v._v(" "),r("p",[v._v("显然"),r("code",{pre:!0},[v._v("P(Q)")]),v._v("可以使用语言模型的马尔科夫链解决，"),r("code",{pre:!0},[v._v("P(O|Q)")]),v._v("应该如何表示？")]),v._v(" "),r("h2",{attrs:{id:"隐马尔可夫模型"}},[v._v("隐马尔可夫模型")]),v._v(" "),r("p",[v._v("隐马尔可夫模型的图表示：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(966),alt:"5-5"}})]),v._v(" "),r("p",[v._v("上面的状态被称为 "),r("strong",[v._v("隐状态")])]),v._v(" "),r("h3",{attrs:{id:"两个重要假设"}},[v._v("两个重要假设")]),v._v(" "),r("ul",[r("li",[v._v("马尔科夫假设 - 当前状态仅由之前有限个状态决定（通常为1\n"),r("ul",[r("li",[r("img",{attrs:{src:t(967),alt:"5-6"}})])])]),v._v(" "),r("li",[v._v("输出独立性假设 - 当前输出o仅由当前状态决定\n"),r("ul",[r("li",[r("img",{attrs:{src:t(968),alt:"5-7"}})])])])]),v._v(" "),r("h3",{attrs:{id:"模型参数"}},[v._v("模型参数")]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("参数")]),v._v(" "),r("th",[v._v("解释")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[r("code",{pre:!0},[v._v("Q = [q1, q2, ..., qn]")])]),v._v(" "),r("td",[v._v("n个"),r("strong",[v._v("状态")])])]),v._v(" "),r("tr",[r("td",[r("code",{pre:!0},[v._v("A = [[a11, a12, ..., a1n]...[an1, an2, ..., ann]]")])]),v._v(" "),r("td",[v._v("n*n状态转移矩阵")])]),v._v(" "),r("tr",[r("td",[r("code",{pre:!0},[v._v("O = [o1, o2, ..., ot]")])]),v._v(" "),r("td",[v._v("t个"),r("strong",[v._v("观测")]),v._v("（输出）")])]),v._v(" "),r("tr",[r("td",[r("code",{pre:!0},[v._v("B = {bi(ot)}")])]),v._v(" "),r("td",[r("strong",[v._v("发射概率矩阵")]),v._v("，每个元素bi(ot)表示状态i发射（输出）ot的概率")])]),v._v(" "),r("tr",[r("td",[r("code",{pre:!0},[v._v("q0 & qf")])]),v._v(" "),r("td",[r("strong",[v._v("起始状态和终止状态的概率，不和任何观测关联")])])])])]),v._v(" "),r("h3",{attrs:{id:"使用隐马尔可夫模型需要解决的问题"}},[v._v("使用隐马尔可夫模型需要解决的问题")]),v._v(" "),r("ul",[r("li",[v._v("估算问题\n"),r("ul",[r("li",[v._v("给定观测序列与模型参数，如何计算此观测序列在各个情况下的出现概率")])])]),v._v(" "),r("li",[v._v("解码问题\n"),r("ul",[r("li",[v._v("给定观测序列和模型参数，如何计算最优状态序列（即什么状态序列能够最大概率产生此观测序列")])])]),v._v(" "),r("li",[v._v("参数学习\n"),r("ul",[r("li",[v._v("如何学习模型参数使输出准确")])])])]),v._v(" "),r("h2",{attrs:{id:"举例-ice-cream-problem"}},[v._v("举例 - Ice Cream Problem")]),v._v(" "),r("h3",{attrs:{id:"概述-1"}},[v._v("概述")]),v._v(" "),r("p",[v._v("假设你是一个气象学家。你找不到了某年夏天某城市的气象数据，但是找到了一个当年夏天当地人的日记本，上面记录了每天吃了多少冰淇淋。推算：这个夏天有多热")]),v._v(" "),r("p",[v._v("数据限定：")]),v._v(" "),r("ul",[r("li",[v._v("每天吃冰淇淋的数量为1、2、3三种情况")]),v._v(" "),r("li",[v._v("气候可能的取值只有Hot和Cold两种情况")])]),v._v(" "),r("p",[v._v("模型参数：使用图的方式给出。图如下：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(969),alt:"5-8"}})]),v._v(" "),r("p",[v._v("可以看出模型参数：")]),v._v(" "),r("ul",[r("li",[v._v("一共三个状态，分别是起始状态start(0)，热天状态HOT(1)和冷天状态COLD(2)")]),v._v(" "),r("li",[v._v("状态间的转移概率已在图上标注（省略了小数点前面的0）")]),v._v(" "),r("li",[v._v("三种观测（输出），即当天吃冰淇淋的数量，范围为1、2、3")]),v._v(" "),r("li",[v._v("发射概率矩阵B，即根据天气决定吃冰淇淋数量的矩阵（省略了小数点前面的0）")]),v._v(" "),r("li",[v._v("起止状态概率，此处起始状态概率为1，无终止状态")])]),v._v(" "),r("h3",{attrs:{id:"解决估算问题"}},[v._v("解决估算问题")]),v._v(" "),r("p",[v._v("计算观测Ice Cream序列为"),r("code",{pre:!0},[v._v("[3, 1, 3]")]),v._v("的概率有多大")]),v._v(" "),r("h4",{attrs:{id:"方案1-无脑枚举"}},[v._v("方案1 - 无脑枚举")]),v._v(" "),r("p",[v._v("天气序列仅有9种情况(H for Hot, C for Cold)：")]),v._v(" "),r("ul",[r("li",[v._v("HHH")]),v._v(" "),r("li",[v._v("HHC")]),v._v(" "),r("li",[v._v("HCH")]),v._v(" "),r("li",[v._v("HCC")]),v._v(" "),r("li",[v._v("…")])]),v._v(" "),r("p",[v._v("所以列举所有天气情况"),r("code",{pre:!0},[v._v("P(313) = P(313, HHH) + P(313, HHC) + ...")])]),v._v(" "),r("p",[v._v("根据 "),r("strong",[v._v("输出独立性假设")]),v._v("，"),r("code",{pre:!0},[v._v("P(313|HCC) = P(3|H)P(1|C)P(3|C)")])]),v._v(" "),r("p",[v._v("根据 "),r("strong",[v._v("马尔科夫假设")]),v._v("，"),r("code",{pre:!0},[v._v("P(HCC) = P(H|start)P(C|H)P(C|C)")])]),v._v(" "),r("p",[v._v("所以"),r("code",{pre:!0},[v._v("P(313, HCC) = P(H|start)P(C|H)P(C|C)P(3|H)P(1|C)P(3|C)")])]),v._v(" "),r("p",[v._v("最后算出所有情况，得到"),r("code",{pre:!0},[v._v("P(313)")])]),v._v(" "),r("p",[v._v("缺陷：计算复杂度大，而且显然存在被重复计算的"),r("strong",[v._v("公共子问题")])]),v._v(" "),r("h4",{attrs:{id:"方案2-前向算法the-forward-algorithm"}},[v._v("方案2 - 前向算法(the Forward algorithm)")]),v._v(" "),r("p",[v._v("前向算法是一种 "),r("strong",[v._v("动态规划")]),v._v("(Dynamic programming algorithm)算法，使用一个表格存储中间值")]),v._v(" "),r("p",[v._v("基本思路 - 通过叠加所有可能"),r("strong",[v._v("隐状态序列")]),v._v("，计算观测序列的似然。使用 "),r("strong",[v._v("格栅")]),v._v("(trellises/lattices)记录部分结果")]),v._v(" "),r("p",[v._v("前向算法的目标是计算某观测序列出现的概率，问题被分解为不同终态下某观测序列出现概率之和。不同终态时观测序列出现概率：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(970),alt:"5-12"}})]),v._v(" "),r("blockquote",[r("p",[v._v("上式中的λ为某些可能的条件。可忽略")])]),v._v(" "),r("p",[v._v("定义 "),r("strong",[v._v("前向变量")]),v._v("αt(j)表示前t个时刻的观测序列且在t时刻位于状态j的概率。由于"),r("strong",[v._v("观测序列已知")]),v._v("，所以观测序列仅使用长度t表示即可。前向变量可以保存在格栅的"),r("code",{pre:!0},[v._v("[j, t]")]),v._v("位置上。即：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(971),alt:"5-13"}})]),v._v(" "),r("p",[v._v("前向递归过程：")]),v._v(" "),r("ul",[r("li",[v._v("初始化 - 观测序列长度为1且当前状态为j的前向变量\n"),r("ul",[r("li",[r("img",{attrs:{src:t(972),alt:"5-9"}})]),v._v(" "),r("li",[v._v("即"),r("strong",[v._v("从初态转移到状态j的概率")]),v._v("乘"),r("strong",[v._v("状态j发射第一个观测的概率")])])])]),v._v(" "),r("li",[v._v("递归 - 利用观测序列长度为t-1的前向变量计算观测序列长度为t的前向变量\n"),r("ul",[r("li",[r("img",{attrs:{src:t(973),alt:"5-15"}})]),v._v(" "),r("li",[v._v("即【"),r("strong",[v._v("观测序列长度为t-1且状态为i的概率")]),v._v("乘"),r("strong",[v._v("状态转移概率")]),v._v("乘"),r("strong",[v._v("状态j发射观测t的概率")]),v._v("】之和")])])]),v._v(" "),r("li",[v._v("终止 - 观测序列为"),r("strong",[v._v("完整")]),v._v("序列且状态为终态（"),r("strong",[v._v("终态无观测")]),v._v(" "),r("ul",[r("li",[r("img",{attrs:{src:t(974),alt:"5-14"}})]),v._v(" "),r("li",[v._v("即【"),r("strong",[v._v("观测序列完整的前向变量")]),v._v("乘"),r("strong",[v._v("状态转移概率")]),v._v("】之和")])])])]),v._v(" "),r("h4",{attrs:{id:"方案3-后向算法backward-algorithm"}},[v._v("方案3 - 后向算法(backward algorithm)")]),v._v(" "),r("p",[v._v("动态规划。定义"),r("strong",[v._v("后向变量")]),v._v("βt(i)表示在t时刻位于状态i时得到t时刻后的观测的概率")]),v._v(" "),r("ul",[r("li",[v._v("初始化\n"),r("ul",[r("li",[r("img",{attrs:{src:t(975),alt:"5-10"}})])])]),v._v(" "),r("li",[v._v("递归\n"),r("ul",[r("li",[r("img",{attrs:{src:t(976),alt:"5-16"}})])])]),v._v(" "),r("li",[v._v("终止\n"),r("ul",[r("li",[r("img",{attrs:{src:t(977),alt:"5-17"}})])])])]),v._v(" "),r("h4",{attrs:{id:"方案4-前向算法与后向算法相结合"}},[v._v("方案4 - 前向算法与后向算法相结合")]),v._v(" "),r("p",[r("img",{attrs:{src:t(978),alt:"5-11"}})]),v._v(" "),r("p",[v._v("结论：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(979),alt:"5-18"}})]),v._v(" "),r("h3",{attrs:{id:"解决解码问题"}},[v._v("解决解码问题")]),v._v(" "),r("p",[v._v("已知Ice Cream观测序列313和模型参数，找到最有可能的天气状态序列")]),v._v(" "),r("h4",{attrs:{id:"方案1-基本思路"}},[v._v("方案1 - 基本思路")]),v._v(" "),r("p",[v._v("计算所有的"),r("code",{pre:!0},[v._v("P(XXX|313)")]),v._v("然后选出最大值。")]),v._v(" "),r("p",[v._v("同样，计算量大，有重复公共子问题")]),v._v(" "),r("h4",{attrs:{id:"方案2-the-viterbi-algorithm"}},[v._v("方案2 - the Viterbi algorithm")]),v._v(" "),r("p",[v._v("当然，也是动态规划，类似于前向算法。使用格栅。")]),v._v(" "),r("p",[v._v("定义vt(j)表示"),r("strong",[v._v("t时刻到达状态j的最可能的路径对应的概率")]),v._v("，即：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(980),alt:"5-19"}})]),v._v(" "),r("p",[v._v("定义"),r("strong",[v._v("最可能")]),v._v("："),r("strong",[v._v("一步贪心策略")]),v._v("，如下图：")]),v._v(" "),r("p",[r("img",{attrs:{src:t(981),alt:"5-20"}})]),v._v(" "),r("ul",[r("li",[v._v("从A到D概率为0.6*0.5=0.3")]),v._v(" "),r("li",[v._v("从C到D概率为0.4*0.8=0.32")])]),v._v(" "),r("p",[v._v("则视为C是最可能到D的状态")]),v._v(" "),r("p",[v._v("所以Viterbi算法的前向递归过程：")]),v._v(" "),r("ul",[r("li",[v._v("初始化 - 1时刻到达状态j且发射指定观测的概率\n"),r("ul",[r("li",[r("img",{attrs:{src:t(982),alt:"5-21"}})]),v._v(" "),r("li",[v._v("即"),r("strong",[v._v("状态转移概率")]),v._v("乘"),r("strong",[v._v("指定状态发射指定观测的概率")])])])]),v._v(" "),r("li",[v._v("递归 - t时刻到达状态j且发射指定观测的概率\n"),r("ul",[r("li",[r("img",{attrs:{src:t(983),alt:"5-22"}})]),v._v(" "),r("li",[v._v("即【"),r("strong",[v._v("t-1时刻到达某一状态i且发射指定观测的概率")]),v._v("乘"),r("strong",[v._v("状态转移概率")]),v._v("乘"),r("strong",[v._v("状态j发射指定观测的概率")]),v._v("】的最大值")])])]),v._v(" "),r("li",[v._v("终止 - 最优路径对应的概率\n"),r("ul",[r("li",[r("img",{attrs:{src:t(984),alt:"5-23"}})]),v._v(" "),r("li",[v._v("即【"),r("strong",[v._v("最后时刻到达某一状态i且发射指定观测的概率")]),v._v("乘"),r("strong",[v._v("状态转移概率")]),v._v("】的最大值")])])])]),v._v(" "),r("p",[v._v("计算的过程中"),r("strong",[v._v("记得保存路径")])]),v._v(" "),r("h3",{attrs:{id:"解决参数学习问题"}},[v._v("解决参数学习问题")]),v._v(" "),r("ul",[r("li",[v._v("有监督学习\n"),r("ul",[r("li",[v._v("基于已知的正确答案进行估计")])])]),v._v(" "),r("li",[v._v("无监督学习\n"),r("ul",[r("li",[v._v("基于无正确答案的数据进行估计")])])])]),v._v(" "),r("h4",{attrs:{id:"前向-后向算法baum-welch-algorithm-or-forward-backward-algorithm"}},[v._v("前向-后向算法(Baum-Welch algorithm or Forward-Backward algorithm)")]),v._v(" "),r("p",[v._v("基本思想 - 极大似然估计")]),v._v(" "),r("p",[v._v("是一种无监督学习算法")]),v._v(" "),r("ul",[r("li",[v._v("不知道模型参数，但是可以通过某个参数计算观测的似然概率")]),v._v(" "),r("li",[v._v("通过计算，可以看到哪些概率转移和观测发射最可能被使用")]),v._v(" "),r("li",[v._v("增大它们的概率")])]),v._v(" "),r("p",[v._v("过程：")]),v._v(" "),r("ul",[r("li",[v._v("初始化 - 给模型参数初值（可以随机")]),v._v(" "),r("li",[v._v("迭代\n"),r("ul",[r("li",[v._v("采用当前模型参数估计参数期望")]),v._v(" "),r("li",[v._v("使用极大似然估计法更新模型参数")])])]),v._v(" "),r("li",[v._v("收敛 - 重复迭代过程直至模型参数收敛到最优值")])]),v._v(" "),r("h2",{attrs:{id:"隐马尔可夫模型hmm应用于词性标注"}},[v._v("隐马尔可夫模型HMM应用于词性标注")]),v._v(" "),r("p",[v._v("给定句子W，求解最优词性序列T")]),v._v(" "),r("p",[v._v("从概率模型的角度：考察所有可能的tag序列，从中选取使"),r("code",{pre:!0},[v._v("P(T|W)")]),v._v("最大的T")]),v._v(" "),r("p",[r("strong",[v._v("和HMM的关联")]),v._v("：不同tag即为HMM中的不同状态。根据语料库可以习得tag之间的转移概率以及tag发射某个word的概率")]),v._v(" "),r("p",[v._v("以上两个概率都可以使用n-gram模型求得")]),v._v(" "),r("h2",{attrs:{id:"其他序列标注任务"}},[v._v("其他序列标注任务")]),v._v(" "),r("ul",[r("li",[v._v("中文分词")]),v._v(" "),r("li",[v._v("命名实体识别(NER: Named Entity Recognition)")])])])}]};v.exports={attributes:{layout:"collection",title:"Part of Speech",collection:"NaturalLanguageProcessing"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},962:function(v,_,t){v.exports=t.p+"img/5-1.567d435.png"},963:function(v,_,t){v.exports=t.p+"img/5-2.0019cad.png"},964:function(v,_,t){v.exports=t.p+"img/5-3.40dfc17.png"},965:function(v,_,t){v.exports=t.p+"img/5-4.3cd1212.png"},966:function(v,_,t){v.exports=t.p+"img/5-5.582b15a.png"},967:function(v,_,t){v.exports=t.p+"img/5-6.8b4b185.png"},968:function(v,_,t){v.exports=t.p+"img/5-7.e27aa2a.png"},969:function(v,_,t){v.exports=t.p+"img/5-8.21ac490.png"},970:function(v,_,t){v.exports=t.p+"img/5-12.e5ee7f1.png"},971:function(v,_,t){v.exports=t.p+"img/5-13.8fac2df.png"},972:function(v,_,t){v.exports=t.p+"img/5-9.f48764d.png"},973:function(v,_,t){v.exports=t.p+"img/5-15.679d1f7.png"},974:function(v,_,t){v.exports=t.p+"img/5-14.ea94a80.png"},975:function(v,_,t){v.exports=t.p+"img/5-10.15ffe10.png"},976:function(v,_,t){v.exports=t.p+"img/5-16.d5fd840.png"},977:function(v,_,t){v.exports=t.p+"img/5-17.c5440cc.png"},978:function(v,_,t){v.exports=t.p+"img/5-11.3136ce8.png"},979:function(v,_,t){v.exports=t.p+"img/5-18.3e0842e.png"},980:function(v,_,t){v.exports=t.p+"img/5-19.2740751.png"},981:function(v,_,t){v.exports=t.p+"img/5-20.5bf297f.png"},982:function(v,_,t){v.exports=t.p+"img/5-21.ac9347c.png"},983:function(v,_,t){v.exports=t.p+"img/5-22.95353e7.png"},984:function(v,_,t){v.exports=t.p+"img/5-23.a74c711.png"}}]);