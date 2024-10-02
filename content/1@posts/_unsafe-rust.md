---
title: Rustomonicon 笔记
---

本文是阅读 [Rustomonicon](https://doc.rust-lang.org/nomicon/) 的笔记

## Safe and Unsafe

### Undefined Behavior

以下是常见的 UB：

- data races
- 解引用无效指针（悬垂指针、空指针、没有正确对齐的指针）
- 修改 immutable 的内容
- 生成不合法的值（非 0 或 1 的 bool，空函数指针等）

以下不算是 rust 中的 UB，只是逻辑错误：

- 死锁
- race condition
- 内存泄漏
- 数值溢出

Safe Rust 的原则：Safe Rust 不应造成 UB。

UB 比逻辑错误更可怕，因为它几乎可以做任何事，理论上爆炸半径更大，也很容易成为安全漏洞的来源。Rust 的设计目标之一就是避免 UB

### unsafe 关键字

unsafe 有两个用途：

- 当创建 unsafe function 或者 unsafe trait 的时候，unsafe 意为这个 function/trait 包含了一些编译器无法检查的可能导致 UB 的行为
  - 对于 unsafe function, unsafe 意为：用户必须查看函数的文档，以确保正确使用它。如果出了 UB，责任在函数的调用者，而不是函数的实现
  - 对于 unsafe trait, unsafe 意为：trait 的实现者必须查看 trait 的文档以确保 trait 的实现是满足要求的。如果出了 UB，责任在 trait 的实现，而不是 trait 的定义
- 当使用 unsafe block 调用 unsafe function/trait 的时候，意为这些调用已经被开发者验证过没问题。如果出了 UB，责任在开发者，而不是编译器

一个 safe trait 如果被胡乱实现，应该只能导致逻辑错误，而不应该能够导致 UB。而 unsafe trait 如果被胡乱实现，是可能导致 UB 的

### unsafe 可能无法相信 safe

因为 unsafe code 可能导致 UB，所以 unsafe code 通常需要确保代码在逻辑上是正确的，而不仅仅是能够通过编译的。

比如，解引用一个指针是 unsafe 的，但是生成一个无效指针是 safe 的（只要不解引用它）。还好解引用是 unsafe 的，所以责任在调用方

但是也有一些例外情况：BTreeMap 要求元素实现 Ord trait，并且 BTreeMap 内部使用了一些 unsafe code。但是 Ord trait 并不是 unsafe 的，调用方完全可以不看文档，胡乱实现一个 Ord trait，导致使用 BTreeMap 的时候出现 UB。而此时使用者完全没有接触到 unsafe function/trait，所以责任在 BTreeMap 咯？

确实，rust 完全可以再设计一个 UnsafeOrd trait，只不过 rust 不希望 unsafe code 泛滥，所以选择了这种设计。这只是一个设计上的取舍。（标准库里面只有 Send & Sync & GlobalAlloc 是 unsafe trait，以此避免 unsafe 泛滥）

但是我们的结论仍然是正确的：unsafe code 可能无法相信 safe code。safety is non-local，不仅是 unsafe block 内的代码需要被检查，unsafe block 之外的同样需要被检查

我们自己在设计 trait 的时候可以更严谨一些，如果用户胡乱实现一个 trait 会导致我们的库 UB，我们可以把这个 trait 标记为 unsafe 来甩锅

## Data Layout

### Rust Repr

- 默认情况下所有数据类型的表示方式都是 `repr(Rust)`
- rust 会自动为复杂数据类型做 padding 确保对齐，没有间接寻址，所有数据都保存在一个连续的内存区域
- data layout 可能会被编译器优化，比如调整字段的顺序，所以不要依赖 data layout
- 代码层面一样的数据类型，可能仍然有不同的字段顺序和 padding。比如`struct A { a: u8, b: u16 }`和`struct B { a: u8, b: u16 }`，它们的内存布局可能是不同的
- 对于泛型，可能会根据泛型参数来调整 data layout 从而使内存利用率更高
- 对于 rust enum（tagged unions），会保存一个 tag 字段，和一个数据字段，数据字段的大小是所有 variant 中最大的那个

### null pointer optimization

如果一个 enum 只有两个 variant，其中一个是 unit，另一个是非空指针（比如`&`），那么这个 enum 会没有 tag 字段，直接保存一个指针，并且把 null 指针当作 unit variant

所以以下代码是正确的：

```rust
size_of::<Option<&T>>() == size_of::<&T>()
```

### DSTs

- Dynamically Sized Types
- 它们的大小在编译期是不确定的，所以不能直接创建它们的实例，只能通过指针来访问
- DST 的指针是 wide pointer，它不仅包含地址，还有额外的信息，比如长度
- 两种主要的 DST
  - trait object (`dyn SomeTrait`)
    - 在运行时，trait object 具体的类型信息会被擦除，但是保留一个 vtable （的指针）以便动态调用 trait method
  - slice (e.g. `[T]`, `str`)

一个 struct 其实可以在最后一个字段保存 DST，但是这会导致整个 struct 变成 DST，无法被直接创建，也无法保存在栈上。目前几乎没有使用场景

```rust
struct Foo {
  a: u8,
  b: [u8],
}
```

### ZSTs

- Zero Sized Types
- 比如：空 struct，`()`，空数组，或者所有字段都是 ZST 的 struct
- ZST 是编译器优化代码的一个重要手段。比如所有生成 ZST 的操作都可以被优化为`nop`，读取 ZST 的操作也不需要真的读取内存（其实也是一个`nop`），所以`HashSet<T>`可以直接通过`HashMap<T, ()>`来实现（但是在其他语言里面可不一定）
- unsafe code 需要额外注意 ZST，因为很多内存分配器不允许分配 0 字节的内存，所以针对 ZST 要特殊处理
- 即使 ZST 是空的，大小是 0，但是仍然可以有引用，并且要遵循引用的规则，比如必须非空，对齐要正确，否则还是会有 UB

### Empty Types

- ZST 虽然是空的，但是它仍然可以有值，只不过这个值是空的，大小为 0
- Empty Type 只有类型，没有值，完全无法被创建。比如`enum Empty {}`
- 可以创建指针指向 Empty Type，但是这个指针永远不能被解引用
- 通常用来在类型检查中占位，实现 unreachability。编译器可以静态地分析出某些分支是不可能到达的，从而优化代码
- 一个常见的 Empty Type 是 `Infallible`，用来表示一个`Result`永远是`Ok`。以下代码在逻辑上是正确的，但是现在还不能通过编译，以后可能可以

```rust
fn test(r: Result<u32, Infallible>) -> u32 {
  // 理论上说，不需要分支或模式匹配，编译器可以静态分析出Result永远是Ok
  let Ok(x) = r;
  x
}
```

### 其他 Repr

- `repr(C)`
  - 尽量保持和 C 一样的数据布局，包括字段顺序、大小、对齐等
  - 常用于 FFI，毕竟 C 在 FFI 中是事实标准
- `repr(transparent)`
  - 确保一个 struct/enum 和它的唯一非空字段有相同的 data layout
  - 常用于确保 ABI 兼容性
- `repr(packed)`
  - 强制去除 padding，可以省空间，但是会影响性能，或者导致其他问题

## Ownership

### 两种引用

- shared reference：`&T`
- mutable reference: `&mut T`

遵循以下原则：

- 引用不能比它所引用的对象活得更久
- mutable ref 不能被 aliased

### Aliasing 与相关的优化

如果多个变量或指针指向了重叠的内存地址，则这些变量或指针是 aliased

> variables and pointers _alias_ if they refer to overlapping regions of memory.

所以一个变量不能同时存在 shared ref 和 mutable ref 或多个 mutable ref，因为这违背了【mutable ref 不能被 aliased】的原则

分析 alias 也可以在编译期实现代码优化，包括：

- 如果一个值是不可变的，我们就可以相信寄存器里面的值是最新的，不需要重新读取内存
- 如果一个值在一段时间内没有被写入，那么这段时间内的读取都可以简化为第一次读取的值
- 如果一个值在一段时间内没有被读取，那么这段时间内的写入都可以简化为最后一次写入的值
- 如果多个值不互相依赖，就可以调整他们被读取或被写入的时间，实现多个值并行读取/写入

### lifetime

每一个`let`语句都会创建一个新的 scope：

```rs
let x = 0;
let y = &x;
let z = &y;

// 相当于：

'a: {
  let x: i32 = 0;
  'b: {
    // lifetime used is 'b because that's good enough.
    let y: &'b i32 = &'b x;
    'c: {
      // ditto on 'c
      let z: &'c &'b i32 = &'c y; // "a reference to a reference to an i32" (with lifetimes annotated)
    }
  }
}
```

rust 编译期会自动根据变量的使用情况来判定一个合适的 lifetime

通常来说，一个变量会在它最后一次被使用后视为生命周期结束：

```rs
let mut data = vec![1, 2, 3];
let x = &data[0];
println!("{}", x);
// This is OK, x is no longer needed
data.push(4);
```

但是如果一个（包含引用的）类型实现了 `Drop` trait，那么析构函数会在 scope 的末尾被调用，所以生命周期会被延长，以下的代码并不能通过编译：

```rs
#[derive(Debug)]
struct X<'a>(&'a i32);

impl Drop for X<'_> {
    fn drop(&mut self) {}
}

let mut data = vec![1, 2, 3];
let x = X(&data[0]);
println!("{:?}", x);
data.push(4);
// Here, the destructor is run and therefore this'll fail to compile.
```

手动在`data.push(4)`之前调用`drop(x)`可以解决这个问题

### lifetime elision

一些条件下可以省略生命周期参数。在讨论这些之前，我们需要先定义 input lifetime 和 output lifetime：

- 对于函数`fn`、闭包`Fn/FnMut/FnOnce`来说，input lifetime 是参数的生命周期，output lifetime 是返回值的生命周期
  - 比如：`fn foo(s: &str) -> (&str, &str)`，省略了一个 input lifetime 和两个 output lifetime
- 对于`impl`块来说，所有生命周期位置都是 input lifetime
  - 比如：`impl<T> Trait<&T> for Struct<&T>`，省略了两个 input lifetime。而`impl<T> Struct<&T>`省略了一个 input lifetime

省略生命周期时，以下是 rust 编译期盲猜生命周期的规则：

1. 首先，每个被省略的 input lifetime 都会被赋予一个不同的生命周期参数
2. 如果只有一个 input lifetime（不管是不是省略的），那么它会被赋予所有【被省略】的 output lifetime
3. 如果有多个 input lifetime 的位置，但是其中一个是`&self`或`&mut self`，那么它会被赋予所有【被省略】的 output lifetime
4. 否则，编译期盲猜不出来，报错

以下是一些示例：

```rs
fn print(s: &str);                                      // elided
fn print<'a>(s: &'a str);                               // expanded

fn debug(lvl: usize, s: &str);                          // elided
fn debug<'a>(lvl: usize, s: &'a str);                   // expanded

fn substr(s: &str, until: usize) -> &str;               // elided
fn substr<'a>(s: &'a str, until: usize) -> &'a str;     // expanded

fn get_str() -> &str;                                   // ILLEGAL

fn frob(s: &str, t: &str) -> &str;                      // ILLEGAL

fn get_mut(&mut self) -> &mut T;                        // elided
fn get_mut<'a>(&'a mut self) -> &'a mut T;              // expanded

fn args<T: ToCStr>(&mut self, args: &[T]) -> &mut Command                  // elided
fn args<'a, 'b, T: ToCStr>(&'a mut self, args: &'b [T]) -> &'a mut Command // expanded

fn new(buf: &mut [u8]) -> BufWriter;                    // elided
fn new(buf: &mut [u8]) -> BufWriter<'_>;                // elided (with `rust_2018_idioms`)
fn new<'a>(buf: &'a mut [u8]) -> BufWriter<'a>          // expanded
```

### unbounded lifetimes

一些 unsafe 代码会凭空产生生命周期（比如：把指针转换成引用）：

```rs
fn get_str<'a>(s: *const String) -> &'a str {
  unsafe { &*s }
}
```

这种生命周期被称为 unbounded（因为一个 output lifetime 没有被 bind 到一个 input lifetime 上），它会根据实际的使用情况来确定生效范围。unbounded lifetime 有时比`'static`更灵活，但是大多数时候可以直接被视为`'static`

### HRTB

Higher-Rank Trait Bounds，是一种特殊的生命周期，用于泛型函数的 trait bound：

```rs
struct Closure<F> {
    data: (u8, u16),
    func: F,
}

impl<F> Closure<F>
    // 使用 `for<>`的语法。只支持生命周期参数，不支持类型参数
    where for<'a> F: Fn(&'a (u8, u16)) -> &'a u8,
{
    fn call(&self) -> &u8 {
        (self.func)(&self.data)
    }
}
```

其实也好理解：

```rs
for<'a> F: Fn(&'a (u8, u16)) -> &'a u8
// 相当于
struct Fn;
impl Fn {
  pub fn call<'a>(&self, arg: &'a (u8, u16)) -> &'a u8;
}
```

也就是闭包被调用的时候允许接受一个泛型的生命周期，而不是在闭包被创建的时候就提供一个生命周期

### subtyping and variance

虽然说 rust 不支持类型的协变和逆变（或者父子类型），但是生命周期是支持的。比如：

```rs
// Note: debug expects two parameters with the *same* lifetime
fn debug<'a>(a: &'a str, b: &'a str) {
    println!("a = {a:?} b = {b:?}");
}

fn main() {
    let hello: &'static str = "hello";
    {
        let world = String::from("world");
        let world = &world; // 'world has a shorter lifetime than 'static
        debug(hello, world);
    }
}
```

由于`&'static str`可以被视为`&'world str`的子类型(subtype)，所以子类型可以被赋值到父类型的参数上，所以以上代码是合法的。

但是`&mut &'static str`就不是`&mut &'world str`的子类型，前者不能被赋值到后者的参数上

到底如何判断父子类型或者是否合法呢？rust 定义了以下规则，假设`Sub`是`Super`的子类型，有一个泛型 struct `F<T>`：

- 如果`F<Sub>`是`F<Super>`的子类型，那么`F`是协变的(covariant)(the subtype property is passed through)
- 如果`F<Super>`是`F<Sub>`的子类型，那么`F`是逆变的(contravariant)(the subtype property is inverted)
- 其他情况，`F`是不变的(invariant)(no subtyping relationship exists)（也就是说只有完全匹配的类型才能互相赋值）

一些示例：

- `Box<T>`或类似的指针类型、容器类型，对于其内部的元素`T`是协变的
  - `Box<&'static str>`可以被赋值给`Box<&'a str>`
- `&'a T`对于`'a`和`T`是协变的
  - `&'static str`可以被赋值给`&'a str`
  - `&'a &'static T`可以被赋值给`&'a &'b T`
- `&'a mut T`对于`'a`是协变的，但是对于`T`是不变的
  - `&'static mut str`可以被赋值给`&'a mut str`
  - `&'a mut &'static str`不能被赋值给`&'a mut &'b str`
- `Cell`或类似的内部可变类型，都是不变(invariant)的
- `fn(T) -> U`对于`T`是逆变的，对于`U`是协变的
  - `fn(&'a str) -> i32`可以被赋值给`fn(&'static str) -> i32`

通常在编程语言中，唯一产生逆变的地方是函数参数（把函数作为参数）或闭包

对于 struct，如果它的所有字段对于泛型参数`T`都是协变的，那么这个 struct 对于`T`也是协变的。如果所有字段对于`T`都是逆变的，那么这个 struct 对于`T`也是逆变的。其他情况下，这个 struct 对于`T`是不变的

```rs
use std::cell::Cell;

struct MyType<'a, 'b, A: 'a, B: 'b, C, D, E, F, G, H, In, Out, Mixed> {
    a: &'a A,     // covariant over 'a and A
    b: &'b mut B, // covariant over 'b and invariant over B

    c: *const C,  // covariant over C
    d: *mut D,    // invariant over D

    e: E,         // covariant over E
    f: Vec<F>,    // covariant over F
    g: Cell<G>,   // invariant over G

    h1: H,        // would also be covariant over H except...
    h2: Cell<H>,  // invariant over H, because invariance wins all conflicts

    i: fn(In) -> Out,       // contravariant over In, covariant over Out

    k1: fn(Mixed) -> usize, // would be contravariant over Mixed except..
    k2: Mixed,              // invariant over Mixed, because invariance wins all conflicts
}
```

### Drop Check
