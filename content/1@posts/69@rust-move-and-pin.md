---
title: 理解Rust中的闭包、move和pin
---

## 闭包 & move

### 基础 & Fn

如果不捕获环境，可以把闭包视为普通的函数。但是如果闭包捕获了环境，它就拥有了【内部状态】。

我们可以把捕获了环境的闭包视为一个 struct 的 method

```rust
fn capture_by_ref() {
  let s = String::from("hello");
  // 以不可变引用的方式捕获 s
  let f = || println!("{}", s.len());
  f();
}

// 相当于
struct Closure<'a>{
  s: &'a String,
}

impl<'a> Closure<'a> {
  fn call(&self) {
    println!("{}", self.s.len());
  }
}

fn _capture_by_ref() {
  let s = String::from("hello");
  let c = Closure { s: &s };
  c.call();
}

// 因为 Closure 引用了本地的变量，所以生命周期 'a 无法作为泛型参数，
// 对外界不可知，也就无法传递到外部，无法出现在返回类型中
fn not_working() -> impl Fn() + 'a {
  let s = String::from("hello");
  || println!("{}", s.len())
}
fn _not_working() -> Closure<'a> {
  let s = String::from("hello");
  Closure { s: &s }
}
```

可以使用 move 关键字，使闭包拿走环境的所有权

```rust
fn factory() -> impl Fn() {
  let s = String::from("hello");
  move || {
    println!("{}", s.len());
  }
}

// 相当于
struct Closure {
  s: String,
}

impl Closure {
  fn call(&self) {
    println!("{}", self.s.len());
  }
}

fn _factory() -> Closure {
  let s = String::from("hello");
  Closure { s }
}
```

以上的闭包在捕获环境之后，都没有对环境进行修改，所以闭包签名都是`impl Fn()`

### FnMut & FnOnce

如果闭包捕获环境之后修改了环境，甚至消耗了环境，那么闭包的签名就会变成`FnMut`或`FnOnce`

```rust
fn factory() -> impl FnMut() {
  let s = String::from("hello");
  move || s.push('a') // 此处修改了环境
}

// 相当于
struct Closure {
  s: String,
}

impl Closure {
  fn call(&mut self) { // 此处是 &mut self 而不是 &self
    self.s.push('a')
  }
}

fn _factory() -> Closure {
  let s = String::from("hello");
  Closure { s }
}
```

```rust
fn factory() -> impl FnOnce() {
  let s = String::from("hello");
  move || { Box::new(s); } // 此处消耗了环境
}

// 相当于
struct Closure {
  s: String,
}

impl Closure {
  fn call(self) { // 此处是 self 而不是 &self
    Box::new(self.s);
  }
}

fn _factory() -> Closure {
  let s = String::from("hello");
  Closure { s }
}
```

### 线程边界

由于多线程环境下编译器无法确定一个线程会存活多久，所以闭包在捕获环境的时候，无法通过引用捕获，必须获得所有权

比如以下代码是无法通过编译的：

```rust
use std::thread;

fn main() {
  let v = vec![1, 2, 3];

  // 这个闭包尝试使用引用来捕获环境中的变量 `v`
  let handle = thread::spawn(|| {
    println!("Here's a vector: {:?}", v);
  });

  // 但是万一我们在这里把变量drop了，闭包就会尝试使用一个无效的引用
  drop(v);

  handle.join().unwrap();
}
```

所以我们通常需要使用`move`关键字把所有权转移到闭包中，避免访问跨越线程的引用

> 除此之外，由于每个线程都有自己的独享的栈空间，所以跨线程`move`变量还需要变量的类型满足`Send`。具体可以查看[`Send` and `Sync`](https://doc.rust-lang.org/nomicon/send-and-sync.html)和[基于 Send 和 Sync 的线程安全](https://course.rs/advance/concurrency-with-threads/send-sync.html)

## Pin

### move 语义

在 rust 中当我们 move 一个值的时候：

1. 从编译器的角度来说，编译器会把这个值所对应的内存数据，从一个地址，逐字节复制到另一个地址，就像 `Copy` trait 一样
2. 从语义上说，move 意味着所有权的转移（这也是 move 和 `Copy` 的区别）

需要注意：move 一个值的时候并不一定意味着编译器一定会给它一个新的内存地址，编译器在优化代码的时候可能并不会把一堆内存里面的数据复制来复制去的。但是从语义上说，我们就视为它每次 move 都有一个新的内存地址就好。大多数 rust 文章中的 move 也指的是语义上的 move 而不是编译器层面的 move

默认情况下所有 rust 中的值都是可以被 move 的，也就是说它对内存地址没有特殊的要求

### 测试是否发生了 move

我们可以使用一个简单的 struct 来测试是否发生了 move

```rust
// 这个 struct 会记录自己的内存地址。
// 如果地址是 None 说明还没初始化
#[derive(Default)]
struct AddrTracker(Option<usize>);

impl AddrTracker {
  // 检查是否发生了 move，如果发生了 move，就 panic
  fn check_for_move(&mut self) {
    // 获取当前地址
    let current_addr = self as *mut Self as usize;
    match self.0 {
      // 还没初始化，把当前地址存起来
      None => self.0 = Some(current_addr),
      // 已经初始化，检查当前地址是否和之前保存的地址一样
      Some(prev_addr) => assert_eq!(prev_addr, current_addr),
    }
  }
}

// 创建并初始化这个 struct
let mut tracker = AddrTracker::default();
tracker.check_for_move();

// 进行一次语义上的 move，
// *可能*也发生了编译器层面的 move
let mut tracker = tracker;
// 或者手动交换两个变量的内存
std::mem::replace(&mut tracker, AddrTracker::default());

// *可能*会 panic
tracker.check_for_move();
```

### Pin 应该被使用在指针上

当一个值 **_的指针_** 被 `Pin` 包裹了之后，这个值的内存地址不会被修改（也就是这个指针的值不会被修改）

使用代码来描述：

```rs
// 使用 Pin 包裹一个指针（Box），这个指针指向堆上面的一个类型为 T 的值
// 那么 指针/Box 的值不会被修改，也就是 T 的内存地址不会被修改
let p: Pin<Box<T>>;
```

如果我们直接把 `Pin` 用到一个值上，比如 `Pin<T>`，那么【这个值不会被修改】，而不是【这个值的地址不会被修改】，所以是一个错误的用法。 `Pin` 应该被用在指针上。

> 实际上`Pin<T>`要求`T`实现了`Deref`，比如使用`std::pin::Pin::new(123)`会报错：the trait bound `{integer}: Deref` is not satisfied, required by a bound in `Pin::<Ptr>::new`

以上 `Box` 的示例相当于 `T` 在堆上，`Box` 在栈上，`Pin` 在栈上。我们可以在函数调用之间传递这个 `Pin<Box<T>>`（它始终在栈上）。

`Pin` 其实也可以用于栈上面的值，比如 `Pin<&mut T>`。或者用于其他指针/引用类型

使用`Pin<Ptr<T>>::as_mut()`可以把它转换为`Pin<&mut T>`。这个类型经常出现在异步编程中，比如`Future`中的`poll`方法

使用 `Box::pin` 可以快速创建一个地址无法改变的堆上的值，也就是 `Pin<Box<T>>`

如果我们希望一个 struct 的实例的地址永远不会被修改，可以在创建这个 struct 实例的时候（比如在`new`中）就使用 `Pin` 来包裹它。以上文的 `AddrTracker` 为例

```rs
impl AddrTracker {
  pub fn new() -> Pin<Box<Self>> {
    Box::pin(AddrTracker::default())
  }
}
```

当然这种方式会把值放在堆上。如果希望值在栈上，我们也没法把一个局部变量给 `Pin` 起来，就只能交给调用方来做了

```rs
impl AddrTracker {
  // 这个函数是错误的，因为返回值引用了局部变量，没有有效的生命周期
  pub fn not_working() -> Pin<&mut Self> {
    let t = Self::default();
    unsafe { Pin::new_unchecked(&mut t) };
  }
}

// 正确的做法
fn main() {
  // 现在这个值在栈上
  let mut t: AddrTracker = AddrTracker::default();
  // 把它pin起来。这是一个**错误示范**，因为新变量没有遮蔽(shadow)旧变量，导致旧变量仍然可以被访问，存在风险
  let mut p = unsafe { Pin::new_unchecked(&mut t) };
  // 正确做法是使用同名变量遮蔽旧变量，避免旧变量的地址被修改
  let mut t = unsafe { Pin::new_unchecked(&mut t) };
}
```

由于生命周期的存在，`Pin`在栈上的变量`Pin<&mut T>`也只能在这个函数内使用，没法作为返回值传出去

### 封印可变引用

使用`Pin`之后，我们 **_可能_** 无法拿到`&mut T`

为什么要禁止开发者拿到`&mut T`呢？因为这可能会破坏一个【依赖地址的类型】的一致性。我们仍然以上述`AddrTracker`为例，一旦我们拿到了`&mut T`，我们就可以修改它保存的地址，导致错误

```rs
// 创建并初始化这个 struct
let mut tracker = AddrTracker::default();
tracker.check_for_move();

// 修改它内部的数据
std::mem::replace(&mut tracker, AddrTracker::default());

// 现在它内部的一致性被打破了，再次调用 check_for_move 会 panic
```

通过使用`Pin`，开发者 **_可能_** 就无法拿到`&mut T`了，也就无法调用`std::mem::replace`之类的方法修改它的内部数据

### Unpin

上文说使用`Pin`之后开发者 **_可能_** 就无法拿到`&mut T`。为啥是【可能】呢？因为还有两种情况可以拿到`&mut T`：

1. 使用`unsafe get_unchecked_mut`。这个方法是不安全的，需要开发者自己保证安全
2. 绝大多数类型是不依赖自己的内存地址的，对于这种类型，我们其实可以安全地修改它的内存数据而不会导致 panic。rust 使用 `Unpin` trait 来表示这种类型。默认情况下几乎所有类型都是 `Unpin` 的，也就是不依赖自己的地址。所以如果一个值是 `Unpin` 的，我们就可以安全地从一个 `Pin<Ptr<T>>` 中获取到 `&mut T`

由于`Pin`也可以被视为一个指针，所以如果`T`实现了`Unpin`，是可以直接`DerefMut`到`T`的。以下是`Pin`的部分源码

```rs
// 注意：Target需要是Unpin的
impl<Ptr: DerefMut<Target: Unpin>> DerefMut for Pin<Ptr> {
    fn deref_mut(&mut self) -> &mut Ptr::Target {
        Pin::get_mut(Pin::as_mut(self))
    }
}
```

### 为 AddrTracker 禁用 Unpin

如果要把一个值标记为 **非** `Unpin`（也就是不能被`Unpin`，也就是应该被`pin`），目前无法直接`impl !Unpin`，需要使用一个 marker struct `PhantomPinned`来实现

```rs
#[derive(Default)]
struct AddrTracker {
    prev_addr: Option<usize>,
    // 任何包含了 PhantomPinned 的 struct 都是 !Unpin 的
    _pin: PhantomPinned,
}

// 现在如果一个AddrTracker被Pin了，他就无法被Unpin了

impl AddrTracker {
     // 实现method的时候也要使用`Pin<&mut Self>`作为`self`，而不是`&mut Self`
    fn check_for_move(self: Pin<&mut Self>) {
        let current_addr = &*self as *const Self as usize;
        match self.prev_addr {
            None => {
                // 此处使用unsafe的方式修改它的内部数据
                // 当然，我们知道它其实是安全的
                let self_data_mut = unsafe { self.get_unchecked_mut() };
                self_data_mut.prev_addr = Some(current_addr);
            },
            Some(prev_addr) => assert_eq!(prev_addr, current_addr),
        }
    }
}

// 以下为主程序，首先创建AddrTracker
let tracker = AddrTracker::default();
// 然后把它pin起来
let mut ptr_to_pinned_tracker: Pin<&mut AddrTracker> = pin!(tracker);
// 初始化
ptr_to_pinned_tracker.as_mut().check_for_move();

// 现在所有需要 `&mut AddrTracker`的函数都无法被调用了，比如std::mem::replace
// std::mem::replace(&mut tracker, AddrTracker::default());

// 再次调用 check_for_move 永远不会 panic
ptr_to_pinned_tracker.as_mut().check_for_move();
```

### 自引用类型

基于以上特性，我们可以使用`Pin`实现自引用类型

```rs
struct Unmovable {
    data: [u8; 64],
    // 一个指向self.data的指针。
    // 只有当Unmovable被pin住的时候，这个指针才是有效的，否则可能会指向无效的内存
    slice: NonNull<[u8]>,
    _pin: PhantomPinned,
}
```

当然使用`Pin`实现自引用类型会带来额外的复杂度。最好可以 **_从设计上避免自引用类型_** 。这也是从垃圾回收语言转到 rust 的开发者需要注意的地方，很多地方使用自引用或者`Rc<RefCell<T>>`的地方都可以被避免，通常需要重构代码

## 参考

- https://doc.rust-lang.org/std/keyword.move.html
- https://doc.rust-lang.org/book/ch13-01-closures.html
- https://doc.rust-lang.org/book/ch16-01-threads.html#using-move-closures-with-threads
- https://ohadravid.github.io/posts/2023-07-put-a-pin-on-that/
- https://doc.rust-lang.org/std/pin/index.html
- https://rustcc.cn/article?id=a616ebe3-e0e1-4f4d-a66c-4937869a5a28
- https://course.rs/advance/async/pin-unpin.html
- https://course.rs/advance/circle-self-ref/self-referential.html
