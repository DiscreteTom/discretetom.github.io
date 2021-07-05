---
title: Design Patterns
description: 23种常见的设计模式
---

## 前言

本文是阅读[此系列文章](https://www.runoob.com/design-pattern/design-pattern-tutorial.html)时整理的笔记。

## 原则与法则

五大原则和一大法则（有时也成为六大原则）：

- 开闭原则(Open Close Principle) - 对扩展开放，对修改关闭。实现热插拔，提高扩展性
- 里氏代换原则(Liskov Substitution Principle/LSP) - 任何父类出现的地方都可以使用子类代替，即子类仅仅是父类的扩展而不是修改
- 依赖倒转原则(Dependence Inversion Principle) - 针对接口编程。程序并不依赖某个类，而是依赖某个接口。任何满足接口的类都可以被注入到程序（依赖注入）
- 接口隔离原则(Interface Segregation Principle) - 使用多个隔离的接口比使用单个接口要好。降低耦合度，接口单独设计，互相隔离，由调用者自行组合
- 合成复用原则(Composite Reuse Principle) - 尽量使用聚合，组合，而不是继承
- 迪米特法则/最少知识法则(Demeter Principle/Least Knowledge Principle) - 一个实体的实现应该尽量少地依赖其他实体，减少交互，功能模块尽量独立

## 模式分类与概述

通常说的模式有 23 种，但是实际使用中有很多变体和延伸，讨论数量是没有意义的。本文将尽可能多地介绍模式

- 创建型模式。研究如何解耦对象的实例化
  - 简单工厂模式（Simple Factory Pattern）
  - 工厂模式（Factory Pattern）
  - 抽象工厂模式（Abstract Factory Pattern）
  - 单例模式（Singleton Pattern）
  - 建造者模式（Builder Pattern）
  - 原型模式（Prototype Pattern）
- 结构型模式。研究如何组合类与对象
  - 适配器模式（Adapter Pattern）
  - 桥接模式（Bridge Pattern）
  - 过滤器模式（Filter、Criteria Pattern）
  - 组合模式（Composite Pattern）
  - 装饰器模式（Decorator Pattern）
  - 外观模式（Facade Pattern）
  - 享元模式（Flyweight Pattern）
  - 代理模式（Proxy Pattern）
- 行为型模式。研究类与对象的责任划分与交互
  - 责任链模式（Chain of Responsibility Pattern）
  - 命令模式（Command Pattern）
  - 解释器模式（Interpreter Pattern）
  - 迭代器模式（Iterator Pattern）
  - 中介者模式（Mediator Pattern）
  - 备忘录模式（Memento Pattern）
  - 观察者模式（Observer Pattern）
  - 状态模式（State Pattern）
  - 空对象模式（Null Object Pattern）
  - 策略模式（Strategy Pattern）
  - 模板模式（Template Pattern）
  - 访问者模式（Visitor Pattern）
- J2EE 模式。研究如何使用对象实现业务逻辑（表现层）。这些模式是由 Sun Java Center 鉴定的。
  - MVC 模式（MVC Pattern）
  - 业务代表模式（Business Delegate Pattern）
  - 组合实体模式（Composite Entity Pattern）
  - 数据访问对象模式（Data Access Object Pattern）
  - 前端控制器模式（Front Controller Pattern）
  - 拦截过滤器模式（Intercepting Filter Pattern）
  - 服务定位器模式（Service Locator Pattern）
  - 传输对象模式（Transfer Object Pattern）

## 创建型模式

### 简单工厂模式

假设开发一款游戏，每个角色都有技能栏，不同职业有不同的技能栏类，如`MeatSkill`和`HealerSkill`，它们实现了相同的接口`Skill`。

创建不同职业的角色时，代码：

```java
interface Skill{}
class MeatSkill implements Skill{}
class HealerSkill implements Skill{}

class Role{
  Skill skill;
}
class Meat extends Role{
  Meat(){ this.skill = MeatSkill(); }
}
class Healer extends Role{
  Healer(){ this.skill = HealerSkill(); }
}
```

显然代码有很多重复冗余的地方。如果使用简单工厂模式来实现：

```java
interface Skill{}
class MeatSkill implements Skill{}
class HealerSkill implements Skill{}

class SkillFactory {
  static Skill create(String name){
    if (name == "meat") return MeatSkill();
    if (name == "healer") return HealerSkill();
  }
}

class Role{
  Skill skill;
  Role(String name){
    this.skill = SkillFactory.create(name);
  }
}
```

简单工厂模式也可以用来解耦对象的使用与对象的实现，比如如果我们需要更新`MeatSkill`，可以使用如下代码：

```java
interface Skill{}
class MeatSkill implements Skill{}
class MeatSkillV2 implements Skill{}
class HealerSkill implements Skill{}

class SkillFactory {
  static Skill create(String name){
    if (name == "meat")
      // return MeatSkill();
      return MeatSkillV2();
    if (name == "healer") return HealerSkill();
  }
}

class Role{
  Skill skill;
  Role(String name){
    this.skill = SkillFactory.create(name);
  }
}
```

可以看到，虽然类的实现被修改，但是使用类的代码不需要修改。实际使用中，字符串常量可以在配置文件里面配置，或者可以使用枚举，防止字符串写错

常见的误区：很多人在工厂方法里面使用反射，通过传入类的名字，使用反射创建对象。如果这样设计，类的实现与名字被修改后，类的使用者仍然需要修改字符串常量或配置文件才能完成适配，仍然存在耦合。根据上例可以看出，目标类的所谓 id 或标识符并不需要和类名相同，它只是一个标识符。

### 工厂模式

上述简单工厂模式的例子把`SkillFactory`固定在了`Role`的构造函数中。如果`SkillFactory`也需要更新为`SkillFactoryV2`则上述代码仍然需要修改。为了进一步削减`Role`对`SkillFactory`的依赖，可以把`SkillFactory`定义为接口，以参数的形式传递给`Role`，实现控制反转。

> 此处的控制反转：简单工厂模式下的依赖关系为`main -> Role -> SkillFactory`，工厂模式下，`Role`和`SkillFactory`不再存在依赖关系，而是都由`main`管理，`main`可以把`SkillFactory`注入到`Role`中，而不是由`Role`直接调用。

```java
interface Skill{}
class MeatSkill implements Skill{}
class HealerSkill implements Skill{}

interface SkillFactory {
  Skill create();
}
class MeatSkillFactory implements SkillFactory{
  static Skill create(){ return MeatSkill(); }
}
class HealerSkillFactory implements SkillFactory{
  static Skill create(){ return HealerSkill(); }
}

class Role{
  Skill skill;
  Role(SkillFactory factory){
    this.skill = factory.create();
  }
}
```

### 抽象工厂模式

工厂模式只有一个产品。如果需要多个产品，就可以使用抽象工厂模式。一个工厂不再仅生产一个产品，而是不同产品的排列组合

假设游戏中的角色除了技能栏，不同职业的攻击方式也不同，代码：

```java
interface Skill{}
class MeatSkill implements Skill{}
class HealerSkill implements Skill{}

interface Attack{}
class MeatAttack implements Attack{}
class HealerAttack implements Attack{}

interface RoleFactory{
  Skill createSkill();
  Attack createAttack();
}
class MeatFactory implements RoleFactory{
  static Skill createSkill(){ return MeatSkill(); }
  static Attack createAttack(){ return MeatAttack(); }
}
class HealerFactory implements RoleFactory{
  static Skill createSkill(){ return HealerSkill(); }
  static Attack createAttack(){ return HealerAttack(); }
}

class Role{
  Skill skill;
  Attack attack;
  Role(RoleFactory factory){
    this.skill = factory.createSkill();
    this.attack = factory.createAttack();
  }
}
```

这样的设计可以方便地添加职业（添加工厂）或添加属性（添加产品）

### 单例模式

确保此类只有全局唯一的一个对象，避免类的频繁创建与销毁，但是没有接口，无法继承，与开闭原则冲突

重点：所有构造函数是 private 的，外界只能通过`getInstance`静态方法获得对象

单例模式有很多种实现方式：

- 懒汉式
- 线程安全懒汉式
- 饿汉式和懒饿汉式
- 双重校验锁
- 登记式
- 枚举

不建议使用懒汉方式实现。通常建议使用饿汉式，如果明确需要 lazy 初始化的话可以使用登记式。如果需要防止反序列化，可以用枚举。如果有其他需求，使用双检锁

#### 懒汉式

lazy 初始化，但是多线程下不安全

```java
public class Singleton {
  private static Singleton instance;
  private Singleton (){}

  public static Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}
```

#### 线程安全懒汉式

lazy 初始化，线程安全，需要加锁导致效率略低

```java
public class Singleton {
  private static Singleton instance;
  private Singleton (){}
  public static synchronized Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
  return instance;
  }
}
```

#### 饿汉式和懒饿汉式

饿汉式放弃了 lazy 初始化，存在内存浪费，但是不需要加锁就可以实现线程安全

```java
public class Singleton {
  private static Singleton instance = new Singleton();
  private Singleton (){}
  public static Singleton getInstance() {
    return instance;
  }
}
```

懒饿汉式基于`final`实现 lazy 初始化

```java
public class Singleton {
  private final static Singleton instance = new Singleton();
  private Singleton (){}
  public static Singleton getInstance() {
    return instance;
  }
}
```

#### 双重校验锁

DCL: double-checked locking，也叫双检锁

能够 lazy 初始化。因为只有未初始化的时候才会使用系统锁，所以**多线程也能保证高性能**。由于需要进行逻辑判断，所以需要`volatile`保证取值正确

```java
public class Singleton {
  private volatile static Singleton singleton;
  private Singleton (){}
  public static Singleton getSingleton() {
    if (singleton == null) {
      synchronized (Singleton.class) {
        if (singleton == null) {
          singleton = new Singleton();
        }
      }
    }
    return singleton;
  }
}
```

#### 登记式

也叫静态内部类

是单例的容器。使用一个`map`来保存各个单例，自身也可以是一个单例

```java
public class RegisterSingleton {
  private static Map<String, Object> map;

  // register self
  static {
    map = new ConcurrentHashMap<>();
    map.put(RegisterSingleton.class.getName(), new RegisterSingleton());
  }

  private RegisterSingleton() {}

  public static Object getInstance(String name) {
    if (name == null) {
      // default instance is self
      name = RegisterSingleton.class.getName();
    }
    if (map.get(name) == null) {
      try {
        // try to create a new instance and register it
        map.put(name, Class.forName(name).newInstance());
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
    return map.get(name);
  }
}
```

#### 枚举

线程安全，非 lazy 初始化。未被广泛使用，但是是实现单例的最佳方法

其他单例实现方式可以被反序列化或者反射破解，枚举能够防御这些破解

```java
public enum Singleton {
  INSTANCE;
  public void whateverMethod() {
  }
}
```

### 建造者模式

一个复杂对象的构建方式可能多种多样，所以把对象的构建给分离出来。如java中的`StringBuilder`，可以有很多复杂的方法来构造出一个`String`对象。我们也可以定义自己的`MyStringBuilder`根据我们自己的规则来生成指定的`String`对象。

例（使用**不同的构建过程**构建**相同的目标**）：构建IP协议数据包头

```java
public class IPPacketHeader {
  private byte[] header;
}

public class IPv4PacketHeaderBuilder {
  public static IPPacketHeader build(Map<String, String> params){
    IPPacketHeader result = new IPPacketHeader();
    // ...
    return result;
  }
}

public class IPv6PacketHeaderBuilder {
  public static IPPacketHeader build(Map<String, String> params){
    IPPacketHeader result = new IPPacketHeader();
    // ...
    return result;
  }
}
```

对象的*构建流程*被分离出来之后，除了可以使用**不同的构建过程**构建**相同的目标**，也可以使用**同样的构建过程**构建出**不同的目标**。

比如下例中，`Builder`负责定义构建所需的方法，`Director`负责定义构建的过程。使用不同的builder就可以使用同样的过程来获得不同的结果，或者构造不同的实例

```java
public abstract class Builder {
  public abstract void buildPart1();
  public abstract void buildPart2();
  public abstract void buildPart3();
  public abstract int getResult();
}

public class Director {
  private Builder builder;
  public Director(Builder builder) {
    this.builder = builder;
  }

  public int build(int method) {
    if (method == 1) {
      builder.buildPart1();
      builder.buildPart2();
      builder.buildPart3();
    } else {
      builder.buildPart2();
      builder.buildPart1();
    }
    return builder.getResult();
  }
}
```



