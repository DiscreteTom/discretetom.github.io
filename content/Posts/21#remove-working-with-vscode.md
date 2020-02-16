---
date: 2019-09-28
title: '使用VSCode远程工作'
description: '告别文件传输的痛苦'
tags:
  - windows
  - VSCode
---

## 效果

以前如果想编辑服务器文件，通常都是本地编辑（因为可以使用IDE），然后：
- 本地git push，远端git pull
- 使用ftp传输
- 使用scp传输
- 本地copy，使用终端paste(仅限文本)

但是现在可以直接使用VSCode连接远端服务器啦木哈哈哈哈哈哈

![](./_img/190928-1.png)

此处使用密钥对连接了名为`Ali`的测试服务器，可以直接在VSCode里面使用bash并编辑服务端文件

## 需要的VSCode插件

理论上只需要[Remote - SSH]()插件应该就行了吧。我当时直接安装了[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)插件，包括了Remote - SSH。

装好了之后VSCode左下角就会出现远程连接图标

## 配置

点击左下角的连接图标，选择`Remote-SSH: Open Configuration File...`，选择合适的配置文件进行编辑

![](./_img/190928-2.png)

配置文件中也给出了配置文件的格式的[文档连接](https://linux.die.net/man/5/ssh_config)

对于简单的配置，可以给服务器起个名字，指定IP，指定用户即可

```
Host CustomServerName
		HostName 123.123.123.123
		User your-username
```

如果使用密钥对登录，需要指定密钥文件路径。windows系统也可以像linux一样使用`/`作为路径分隔符：

```
Host Ali
		HostName 123.123.123.123
		User root
		IdentityFile D:/some/path/key.file
```

## 密钥文件的权限问题

如果密钥文件权限过于开放，连接时会报错

Linux系统下使用`chmod`命令即可修改文件权限，如`chmod 400 filename`

windows下没有`chmod`命令（没有测试WSL能不能这么改权限），可以使用资源管理器修改权限

1. 在密钥文件的右键菜单中选择`属性-安全-高级`
2. 修改`所有者`，在弹出窗口中点击`高级-立即查找`，选中目标用户后确定（目标用户可能在最下面）
3. 点击`禁用继承`，删除所有通过继承得到的权限。这时权限条目可能一条权限也没有了
4. 点击`添加-选择主体`，使用步骤2同样的操作选择目标用户，允许`读取`与`读取和执行`

## 参考

- [Windows SSH: Permissions for 'private-key' are too open](https://superuser.com/questions/1296024/windows-ssh-permissions-for-private-key-are-too-open)