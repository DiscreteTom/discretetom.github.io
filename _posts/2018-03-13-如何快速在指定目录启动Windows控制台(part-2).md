---
layout: post
author: DiscreteTom
subtitle: '竟然有Part 2我也很意外'
catalog: true
tags:
  - windows
---

## 优化方案:添加加速键

根据之前Qt平台的编程经验，添加加速键只要在**Action**的**Name**里面添加

```
&Key
```

那么此Action的加速键就是Key

为了避免加速键冲突，我选择了键盘左上角的`` ~/` ``键作为加速键。同时为了美观，在加速键左右加上括号

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

以后只要使用右手在文件夹空白处右击，然后左手按下`~`键即可

用键盘当然比用鼠标快啊:)

[Part 1传送门](/2018/03/04/如何快速在指定目录启动Windows控制台/)

