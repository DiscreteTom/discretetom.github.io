---
layout: post
author: DiscreteTom
catalog: true
title: Qt-关闭QMessageBox之后程序自动关闭了。。。
subtitle: 自闭了自闭了。。。
tags:
  - qt
---

## 先说结论

以MainWindow为parent的QMessageBox在运行结束时如果MainWindow处于hide的状态**会调用MainWindow的析构函数**把MainWindow杀了

## 细节

看下面这人畜无害的代码

```cpp
MainWindow::~MainWindow()
{
	qDebug() << "MainWindow destroyed.";
	delete ui;
}

void MainWindow::on_pushButton_clicked()
{
	QMessageBox * box = new QMessageBox(this);
	hide();
	box->exec();
//	box->show();
}
```

以MainWindow为parent新建一个QMessageBox

隐藏MainWindow并显示/执行QMessageBox

在点击MessageBox上面的OK按钮 MessageBox消失之后

**MainWindow的析构函数会被调用**

这样做的原因**应该**是防止MainWindow在hide状态下无法简单关闭的问题

所以在最后一个可见的窗体消失时杀掉父窗体MainWindow

嗯 这么一说还是可以理解的

但是我如果把程序缩小到托盘 弹一个MessageBox程序就没了。。。

