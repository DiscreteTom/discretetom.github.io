---
layout: post
author: DiscreteTom
catalog: true
tags:
  - windows
---

(这文章竟然还能有Part 2)

优化这种事情应该是永不止步的:)

## 优化方案:添加加速键

根据菜鸡作者的Qt平台编辑经验，添加加速键只要在**Action**的**Name**里面添加

```
&[Key]
```

那么此Action的加速键就是Key

为了避免加速键冲突，我选择了键盘左上角的~/`键作为加速键。同时为了美观，在加速键左右加上括号

所以把cmdPrompt的“默认”属性更改为

```
CMD Here(&`)
```

或者

```
CMD Here(&~)
```

![4-1](/img/4-1.png)

效果

![4-2](/img/4-2.png)

以后只要使用右手在文件夹空白处右击，然后左手点击~键即可

用时更短:)

[Part 1传送门](/2018/03/04/如何快速在指定目录启动Windows控制台/)

