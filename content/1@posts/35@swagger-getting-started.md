---
title: Swagger入门笔记
description: 以SpringBoot为例
tags:
  - Web
---

## 学习资料

本文是观看[此视频](https://www.bilibili.com/video/BV1Y441197Lw)的笔记。

## Swagger

### 概述

- 接口文档管理工具
- 可以根据代码生成接口文档
  - 基于代码中的装饰器
- 有一个WebUI用来展示接口文档
  - 可以在UI里面直接测试接口
- 支持各种语言各种框架

### 以SpringBoot为例

- 修改pom.xml，添加依赖

```xml
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>
```

- 配置swagger

```java
// 配置Swagger
@Configuration
@EnableSwagger2
public class SwaggerConfig {
  @Bean
  public Docket docket() {
    return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(...) // 配置基本信息
      .select() // 
      .groupName("xxx") // API分组
      .enable(true) // 启动swagger
      .apis(RequestHandlerSelectors.basePackage("xxx")) // 扫描某个包里面的接口
      .paths(...) // 过滤选择
      .build();
  }
}

// 被扫描的类，基于SpringBoot
@Api(tags = "xxx") // 描述
@RestController
public class MyController {

  @ApiOperation("xxx") // 操作的描述
  @GetMapping(value = "/user")
  public User user( // 只要返回值包含某个类，就会出现在Swagger的数据模型中
    @ApiParam("xxx") // 参数描述
    String username
  ) {
    return new User();
  }
}

// 实体类
@ApiModel("用户") // 描述
public class User {
  @ApiModelProperty("用户名") // 描述
  public String username;

  @ApiModelProperty("密码")
  public String password;
}
```

- 启动项目，可以在`:8080/swagger-ui.html`查看页面