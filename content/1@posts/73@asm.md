---
title: 汇编语言学习笔记
---

## x64

### 示例代码

以下是一段简单的 x64 汇编代码，用于输出 "Hello, World!"

```asm
.intel_syntax
.text
  .globl _main
  _main:
    /* function prologue */
    push rbp
    mov  rbp, rsp
    /* call puts("Hello, World!") */
    lea  rdi, [rip + _main.S_0]
    call puts
    /* return zero */
    mov  rax, 0
    mov  rsp, rbp
    pop  rbp
    ret
  _main.end:
  _main.S_0:
    .string "Hello, World!"
```

### 编译

可以使用以下操作来编译汇编代码：

1. 保存代码到文件： `main.s`
2. 编译：`gcc -m64 main.s`，其中 `-m64` 表示使用 64 位架构
3. 编译会生成 `a.out` 文件，执行它：`./a.out`

gcc 也可以把 C 语言代码编译为汇编代码，命令：`gcc -S -masm=intel -Wall -ansi -m64 main.c`，其中 `-S` 表示生成汇编代码，`-masm=intel` 表示使用 Intel 语法，`-Wall` 表示显示所有警告，`-ansi` 表示使用 ANSI 标准的 C 语言（除此之外还有比如 GNU 标准的 C 语言），`-m64` 表示使用 64 位架构

### 语法

- 每行一个语句
- 使用`/**/`注释
- 对空格（包括 tab、注释）不敏感
- 以`.`开头的行是伪指令（Directive），比如`.text`、`.globl`、`.string`
  - `.intel_syntax` 表示使用 Intel 语法，否则默认值是 `.att_syntax` 表示使用 AT&T 语法。二者的主要区别在于操作数的顺序不同，intel 语法会把目标操作数(dst)放在源操作数(src)的前面，而 AT&T 语法则相反
  - `.text` 表示代码段（Text Section），也就是存放可执行的代码的地方
  - `.string` 表示字符串，后面跟一个字符串字面量。字符串会以 `\0` 结尾。字符串字面量里面可以使用转义字符，比如 `\n` 表示换行
  - `.globl` 表示全局（Global），后面跟一个标签名。`_globl _main` 表示把 `_main` 标签暴露给 linker，以便其他文件可以引用。C 语言编译器会给所有函数加上下划线前缀，所以我们在汇编里面写`main`函数也要加上下划线前缀才能被编译期识别为 main 函数
- 不以`.`开头的行是指令（Instruction），比如`push`、`mov`、`lea`、`call`、`ret`
  - 指令包含一个操作码（Operator/Opcode）和若干个操作数（Operand）
- 以`:`结尾的行是标签（Label），比如`_main:`、`_main.end:`、`_main.S_0:`

### Register

x64 架构下寄存器长度为 64 位（8 字节），共有 16 个通用寄存器，分别是：

- RAX/RBX/RCX/RDX
- RSI/RDI
- RSP/RBP
- R8/R9/R10/R11/R12/R13/R14/R15

> 其中 R 表示 Register，SP 表示 Stack Pointer，BP 表示 Base Pointer

这些寄存器也可以仅访问某些部分。比如低 32 位可以单独使用，名为：

- EAX/EBX/ECX/EDX
- ESI/EDI
- ESP/EBP
- R8D/R9D/R10D/R11D/R12D/R13D/R14D/R15D

> 其中 E 表示 Extended，D 表示 Double-word（32 位）

低 16 位可以单独使用，名为：

- AX/BX/CX/DX
- SI/DI
- SP/BP
- R8W/R9W/R10W/R11W/R12W/R13W/R14W/R15W

> W 表示 Word（16 位）

低 8 位可以单独使用，名为：

- AL/BL/CL/DL
- SIL/DIL
- SPL/BPL
- R8B/R9B/R10B/R11B/R12B/R13B/R14B/R15B

> B 表示 Byte（8 位），L 表示 Low

> 显然命名规则有些混乱，是不同历史时期的遗留问题

汇编语言不区分大小写，所以 `RAX` 和 `rax` 是等价的

标志寄存器：

- CF（Carry Flag）：进位标志
- ZF（Zero Flag）：零标志
- SF（Sign Flag）：符号标志
- OF（Overflow Flag）：溢出标志

### Operand

在使用汇编指令的时候需要提供操作数（Operand）。以下是操作数的寻址方式（其实是取值，而不是取地址，只不过大家都是这么叫的：address）：

- 寄存器寻址（Register）(r)，使用 16 个通用寄存器进行寻址（也就是使用寄存器里面的数据）
  - 有些寄存器有特殊用途，比如 RSP/RBP，通常不用于进行寻址
  - 在 AT&T 语法里面会加一个前缀 `%`，比如 `%RAX`。而在 Intel 语法里面不需要加前缀
- 立即数（Immediate）(i)，是一个整数字面量或一个标签
  - 使用标签时有两种语义
    - 如果是跳转指令（比如`jmp`/`call`），那么标签表示一个绝对地址
    - 如果是使用`lea`(Load Effective Address)加载数据，那么标签表示【相对于当前地址(`rip`)的偏移量】，通常需要配合`rip`寄存器使用，比如`lea rdi, [rip + _main.S_0]`
  - 在 AT&T 语法中，立即数需要加一个前缀 `$`，比如 `mov $0x5, %RAX`。而在 Intel 语法中不需要加前缀
- 内存寻址（Memory）(m)，通常是对某个寄存器的值加上一个偏移量之后，作为内存地址，取出对应地址的值
  - 比如：`qword ptr [rax+8]` 表示取出 `RAX` 寄存器的值加上 8 之后的地址里面的 8 字节数据
  - 偏移量可以是负数或者省略（省略则表示 0）

并不是所有指令都支持所有的寻址方式。上面的`r`/`i`/`m`通常用来标记一个操作数支持的寻址方式，比如：`add -> add r, i | add r, r | add r, m | add m, i | add m, r`

### Instruction

- 大多数指令都仅支持一个内存寻址的操作数
- 在 intel 语法中，操作数的顺序是目标操作数（dst）在前，源操作数（src）在后
  - 也就是说结果会被写入到目标操作数中，源操作数不会被修改

以下为一些常见指令：

- `add -> add r, i | add r, r | add r, m | add m, i | add m, r`
  - 计算两个操作数的和，并把结果写入到目标操作数（左侧）中
- `call -> call label`
  - 调用一个函数，跳转到一个标签处执行
  - 具体来说，是把返回地址（通常是下一个指令的地址）保存到`[rsp]`（栈指针指向的内存）中，然后使`rsp`减去 8（因为 x64 下，一个指令的地址是 8 字节。栈内存的地址是从高位向低位增长），最后跳转到标签处执行
- `cmp -> cmp r, i | cmp r, r | cmp r, m | cmp m, i | cmp m, r`
  - 比较两个操作数的值，不会修改任何操作数的值，只会设置标志寄存器（比如`ZF`/`SF`/`OF`）
  - 比较的结果通常用来进行条件跳转，比如 `je`/`jne`/`jl`/`jg`/`jle`/`jge`
- `idiv -> idiv r | idiv m`
  - 除法，把`rdx:rax`作为 128 位有符号整数，除以操作数，商保存在`rax`中，余数保存在`rdx`中
  - 由于`rdx`用来表示符号，一个常见的设置`rdx`的方式是`mov rdx, rax; sar rdx, 63`，也就是先把`rax`的值复制到`rdx`，然后使`rdx`算术右移 63 位，这样`rdx`就会被原本`rax`的符号位填充，使一个 64 位有符号整数变成 128 位有符号整数
- `imul -> imul r, r | imul r, m`
  - 乘法，把两个有符号整数操作数相乘，结果保存在目标操作数（左侧）中
- `jmp -> jmp label`
  - 无条件跳转到一个标签处执行
- `je/jg/jge/jl/jle/jne -> jx label`
  - 根据上一条`cmp`指令的结果，进行条件跳转
  - `e` 表示 equal，`g` 表示 greater，`ge` 表示 greater or equal，`l` 表示 less，`le` 表示 less or equal，`ne` 表示 not equal
- `mov -> mov r, i | mov r, r | mov r, m | mov m, i | mov m, r`
  - 把源操作数（右侧）的值复制到目标操作数（左侧）中
- `neg -> neg r | neg m`
  - 算数取反并覆盖。对于有符号整数来说就是得到它的负数（或者说，等于 0 减去这个数）
- `pop -> pop r | pop m`
  - 弹栈，把栈顶的值（`[rsp]`）弹出并保存到操作数中，然后使`rsp`加上 8（因为 x64 下，一个指令的地址是 8 字节。栈内存的地址是从高位向低位增长）
- `push -> push i | push r | push m`
  - 压栈，把操作数的值保存到栈顶（`[rsp]`）中，然后使`rsp`减去 8（因为 x64 下，一个指令的地址是 8 字节。栈内存的地址是从高位向低位增长）
- `ret -> ret`
  - 返回，把栈顶的值（`[rsp]`）弹出（并保存到`rip`中），然后使`rsp`加上 8（因为 x64 下，一个指令的地址是 8 字节。栈内存的地址是从高位向低位增长），并跳转到`rip`中保存的地址处（也就是返回地址）执行
- `sar -> sar r, i | sar m, i`
  - 算术右移，把目标操作数（左侧）的值算术右移操作数（右侧）的位数，使用符号位（最左侧的字节）填充
- `shl -> shl r, i | shl m, i`
  - 逻辑左移，把目标操作数（左侧）的值逻辑左移操作数（右侧）的位数，补 0
- `shr -> shr r, i | shr m, i`
  - 逻辑右移，把目标操作数（左侧）的值逻辑右移操作数（右侧）的位数，补 0
- `sub -> sub r, i | sub r, r | sub r, m | sub m, i | sub m, r`
  - 计算两个操作数的差，并把结果写入到目标操作数（左侧）中
- `lea -> lea r, m`
  - 加载有效地址（Load Effective Address），把内存寻址的结果（右侧）的地址加载到目标操作数（左侧）中
  - 和`mov`的区别：`mov`是 load value，而`lea`是 load address。`mov eax, x`和`lea eax, [x]`是相同的。但是`lea`可以在操作数中进行运算，比如`lea eax, [ebx + 8*eax + 4]`这种操作是合法的，因为计算地址的语法是可以出现在这里的；而`mov eax, ebx + 8*eax + 4`是不合法的，因为`mov`只能加载值，不能进行运算
  - 那为什么不使用`add`等操作计算地址呢？首先会引入额外的操作，其次`lea`不会影响标志寄存器，而`add`等操作会影响标志寄存器。而且`lea`可以把结果保存到任意寄存器中，而`add`等操作只能保存到目标操作数中。在`lea`的源操作数中还能进行多元计算和乘法

### Calling Convention

调用约定通常是 ABI（Application Binary Interface）的一部分，它规定了函数调用的规则，包括参数传递、返回值、寄存器的使用等

通常使用 C 语言的调用约定，这样就可以直接使用 C 语言的函数了（比如 print）。

- 使用一个向下增长的栈来保存局部变量等信息
- 使用寄存器来在函数调用时传递参数
  - 前 6 个整数参数（下标 0-5）使用 RDI/RSI/RDX/RCX/R8/R9 寄存器传递
  - 其余的参数使用栈传递，越靠后的参数地址越高（先压入栈）
- 调用函数前，先按照上文把多余的参数压栈。此时`rsp`指向栈顶，也就是第 6 个参数的位置
- 调用函数时，先把返回地址压栈，然后把调用方的基址指针`rbp`压栈，然后把`rsp`赋值给`rbp`作为子函数的基址，最后把`rsp`减去 8（因为 x64 下，一个指令的地址是 8 字节。栈内存的地址是从高位向低位增长），并开始分配子函数的局部变量
  - 也就是：`push rbp; move rbp, rsp; sub rsp, 8`
- 函数返回时，返回值保存在`rax`寄存器中（除非返回 void），通过基址`rbp`重置`rsp`的值，然后弹栈到`rbp`从而恢复 caller 的基址，最后`ret`返回
  - 也就是：`mov rax, xxx; mov rsp, rbp; pop rbp; ret`
- 因为寄存器是跨函数共享的，所以 caller 函数或者 callee 函数可能要保存原本的值，以便在 callee 返回的时候 caller 可以拿到原本的值。这个保存和恢复的过程可能由 caller 完成，也可能由 callee 完成
  - 以 x64/Mac OS X 为例，`rbp`/`rbx`/`r12`/`r15`由 caller 持有(belong to the caller)，所以它们需要 callee 来保存(callee-save registers)。其他寄存器都是属于 callee 的，所以 caller 需要保存(caller-save registers)
  - 当然，如果一个寄存器里面没有保存重要的值，那么就不需要保存了

### 其他

- 如果要把一个寄存器置零，通常使用 `xor RAX, RAX`，而不是 `mov RAX, 0`。因为 `xor` 是一个很快的指令，而 【`mov` 一个立即数】在一些 CPU 上会存在额外开销（比如多保存了一个立即数）
  - 如果使用 `xor EAX, EAX`，那么整个 `RAX` 寄存器的值会被置零，而不仅仅是低 32 位，因为对低 32 位的操作会导致高 32 位也被清零

## 参考

- https://www.inf.usi.ch/faculty/soule/teaching/2015-fall/cc/x64-intro.pdf
- https://cs.brown.edu/courses/cs033/docs/guides/x64_cheatsheet.pdf
- https://stackoverflow.com/questions/1699748/what-is-the-difference-between-mov-and-lea
- https://stackoverflow.com/questions/1658294/whats-the-purpose-of-the-lea-instruction

## ARM

TODO
