---
title: Zig语言如何解决C语言中的一些问题
description: Problems of C, and how Zig addresses them
tags:
  - 编程语言
---

> 原文：[Problems of C, and how Zig addresses them](https://avestura.dev/blog/problems-of-c-and-how-zig-addresses-them)。本文结合自己的理解，做了很多魔改

## 使用 comptime 取代宏

C 语言的宏的经典问题：

```c
#define SQUARE(x) x * x

int result = SQUARE(2 + 3)
```

Zig 的解决方案：使用关键字`comptime`，可以在编译期执行代码（比如跑一个斐波那契数列什么的）

```zig
fn square(x: anytype) @TypeOf(x) {
    return x * x;
}

const result = comptime square(2 + 3); // result = 25, at compile-time
```

## 使用 Allocator 实现内存管理

Zig 语言不像 Rust 语言一样基于生命周期管理内存，而是类似于 C。但是 Zig 语言提供了一个`Allocator`的概念。一切在堆上申请内存的操作都需要提供 allocator，避免隐式分配内存

此外，`std.testing.allocator`还可以检测内存泄漏，可以在测试里面使用

```zig
const std = @import("std");

test "detect leak" {
    var list = std.ArrayList(u21).init(std.testing.allocator);
    // defer list.deinit(); <- this line is missing
    try list.append('☔');

    try std.testing.expect(list.items.len == 1);
}
```

## Option

类似 Rust 中的 Option，只不过使用`?`代替

```zig
const Person = struct {
    age: u8
};

const maybe_p: Person = null; // compile error: expected type 'Person', found '@Type(.Null)'
const maybe_p: ?Person = null; // OK
```

## Slice 替代指针运算

在 C 中使用指针运算，容易访问到非法内存，而且不容易发现。Zig 中使用 Slice，可以避免这个问题

```zig
var arr = [_]u32{ 1, 2, 3, 4, 5, 6 }; // 1, 2, 3, 4, 5, 6
const slice1 = arr[1..5];             //    2, 3, 4, 5
const slice2 = slice1[1..3];          //       3, 4
```

## 检测内存布局中的错误

参考如下 C 代码，因为 char 类型的指针不是 4 字节对齐的，而 int 是 4 字节对齐的，所以会导致访问非法内存

```c
int main() {
    unsigned int* ptr;
    char* misaligned_ptr;

    char buffer[10];

    // Intentionally misalign the pointer so it won't be evenly divisible by 4
    misaligned_ptr = buffer + 3;

    ptr = (unsigned int*)misaligned_ptr;
    unsigned int value = *ptr;

    printf("Value: %u\n", value);

    return 0;
}
```

如果是 zig

```zig
pub fn main() void {
    var buffer = [_]u8{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

    // Intentionally misalign the pointer so it won't be evenly divisible by 4
    var misaligned_ptr = &buffer[3];

    var ptr: *u32 = @ptrCast(*u32, misaligned_ptr);
    const value: u32 = ptr.*;

    std.debug.print("Value: {}\n", .{value});
}
```

会报错：试图把 u8 指针转为 u32 指针，可能存在内存对齐的问题

```
.\main.zig:61:21: error: cast increases pointer alignment
    var ptr: *u32 = @ptrCast(*u32, misaligned_ptr);
                    ^
.\main.zig:61:36: note: '*u8' has alignment 1
    var ptr: *u32 = @ptrCast(*u32, misaligned_ptr);
                                   ^
.\main.zig:61:30: note: '*u32' has alignment 4
    var ptr: *u32 = @ptrCast(*u32, misaligned_ptr);
                             ^
```

可以通过`@alignCast`解决，在 safe build 模式下，会检查内存对齐的问题，并抛出异常和堆栈信息，以便排查问题

```zig
pub fn main() void {
    var buffer = [_]u8{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

    // Intentionally misalign the pointer so it won't be evenly divisible by 4
    var misaligned_ptr = &buffer[3];

    var ptr: *u32 = @ptrCast(*u32, @alignCast(4, misaligned_ptr));
    const value: u32 = ptr.*;

    std.debug.print("Value: {}\n", .{value});
}
// Compiles OK
```

## 按值传递数组

C 里面数组是指针，所以作为参数传递时，相当于传引用。而 Zig 里面数组是值，所以作为参数传递时，相当于传值

## 错误处理

可以通过`!`把错误类型和正常值的类型连接在一起

```zig
const FileOpenError = error{
    AccessDenied,
    OutOfMemory,
    FileNotFound,
};

const maybe_error: FileOpenError!u16 = 10;
const no_error = maybe_error catch 0;
```

所以如果一个函数可能返回 error，实际上是在返回一个`error!T`类型的值(union)，然后通过`try/catch`进行解析。
需要注意：这里的 try/catch 和其他编程语言的不一样，是对一个值进行的操作，而不是语句块

## 块可以作为表达式

类似 Rust:

```rs
let x = {
    let y = 1;
    y + 1
};
```

Zig:

```zig
const firstName: ?*const [3:0]u8 = "Tom";
const lastName: ?*const [3:0]u8 = null;
var buf: [16]u8 = undefined;
const displayName = blk: {
    if (firstName != null and lastName != null) {
        const string = std.fmt.bufPrint(&buf, "{s} {s}", .{ firstName, lastName }) catch unreachable;
        break :blk string;
    }
    if (firstName != null) break :blk firstName;
    if (lastName != null) break :blk lastName;
    break :blk "(no name)";
};
```

块都可以通过标签来获取值

## 愚蠢的前置类型声明

C 的老问题了，略
