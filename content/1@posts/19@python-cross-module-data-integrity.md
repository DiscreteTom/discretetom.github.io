---
date: 2019-07-30
title: 'python中跨模块变量数据不一致问题'
description: '两种import方式导致变量作用域不同'
tags:
  - python
---

## 问题描述

目前有模块data，包含一个变量config，并且可以使用函数load为其赋值。代码如下：

```python
# data.py
config = {}
def load():
	global config
	config = {'key': 'value'}
```

模块A使用`from x import x`格式导入config:

```python
# A.py
from data import config
def funcA():
	print(config)
```

模块B使用`import x`格式导入data，然后使用data.config访问config:

```python
# B.py
import data
def funcB():
	print(data.config)
```

主模块main分别调用模块A和B的内容，并在某一时刻修改data：

```python
# main.py
from A import funcA
from B import funcB
from data import load

load()
funcA()
funcB()
```

会发现，输出的结果是

```python
{}
{'key': 'value'}
```

即，模块A和模块B都使用了data模块的config变量，输出为何不同？

## 分析

上面的例子中，因为模块A使用`from data import config`，所以获得的是直接对config的引用。模块B使用`import data`，获得的是对data模块的引用。

模块main调用`data.load()`函数对config变量进行直接赋值（绑定了另一块内存），抛弃对原对象的引用。然而原对象的内存被模块A的`config`绑定所以没有被回收，模块A使用的还是原来的对象。模块B通过`data.config`访问到的`config`才是新的对象

网上一些关于python跨文件/模块全局变量的问题很多也是由这个原因产生的

## 解决方案

### 方案一：每次操作变量都重新解析其对象

即，能用`import data`就不要`from data import config`

这会导致引用过多不需要的东西，以及代码会比较长：`bulabula.bulabula.bulabula.bulabula`

### 方案二：避免对对象本体重新赋值

即，通过修改对象的内部数据达到类似于重新赋值的效果

上述load函数就应该改为：

```python
config = {}
def load():
	config['key'] = 'value'
```

从模块划分的角度来说显然应该采用方案二