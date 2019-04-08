# Natural Language Processing 自然语言处理 目录

- [Chapter1 Introduction](Chapter1.md)
- [Chapter2 N-gram语言模型](Chapter2.md)
- [Chapter3 Neural Network based Language Model](Chapter3.md)
- [Chapter4 Evaluation of language model](Chapter4.md)
- [Chapter5 Part of Speech](Chapter5.md)
- [Chapter6 Parsing](Chapter6.md)
- [Chapter7 Text Classification](Chapter7.md)
- [Chapter8 Text Clustering](Chapter8.md)

# Chapter4 语言模型评估

## 概述

基本原则：**一个好的语言模型应该给实际使用的句子打较高的概率**

构建语言模型的两个阶段：
- 模型训练 - 使用training data获得模型参数
- 模型测试 - 使用test data进行评价

- 外部评价extrinsic measure - 比较两个模型优劣
  - 两个模型用于同一个任务
  - 比较准确率
- 内部评价intrinsic measure - 对模型自身进行评价
  - 困惑度PP(Perplexity) - P(W)的几何平均值的倒数

## 困惑度

困惑度PP(Perplexity) - P(W)的几何平均值的倒数，即：

![4-1](img/4-1.png)

给定的语料，PP越小，所用的LM越好，因为：
- P(W)概率越高，PP越小
- 在预测下一个词时，PP值表示了候选词的平均个数。PP越大，该语言的不可预测性越高

某语料库不同阶n-gram模型的困惑度对比：

![4-4](img/4-4.png)

不同平滑算法困惑度对比：

![4-5](img/4-5.png)

## 信息熵

使用概率估算信息熵。假设词串为W，则信息熵H(W):

![4-2](img/4-2.png)

因此得到信息熵和困惑度的关系：

![4-3](img/4-3.png)

**H和PP正相关**

觉得有用？欢迎[打赏](../../../donate.md)

:)

[返回主页](../../../index.md)