## 关于这个 Github repo

开这个 repo 的时候已经是 2024 年 5 月末，考虑到秋招也快来了，leetcode 非会员不能存代码，所以单独开一个 repo 来存储各种 leetcode 题解。

基本上把 LEETCODE 75 的题目都过一遍，做出一点自己的解析。希望可以在 2024.10 之前完成这部分。

常见踩坑实例：
1. 在 JavaScript 中，使用 / 运算符进行除法时，结果并不默认是整数。相反，JavaScript 的 / 运算符会返回一个浮点数（即使商是一个整数，结果也会以浮点数的形式返回）。
解决方案：需要得到整数结果，可以使用其他方法，例如 `Math.floor()`、`Math.ceil()`、`Math.trunc()`(截断小数) 或 `Math.round()`（四舍五入），根据需要的舍入方向。


## 基本知识

**在JavaScript中，函数参数是按值传递的，对于数组这样的对象，函数内对参数的修改不会影响到原数组。**



### 数组

Array 方法：

##### sort

```js
function compareFn(a, b) {
  if () {
    return -1;
  }
  if () {
    return 1;
  }
  // a 一定等于 b
  return 0;
}

arr.sort(compareFn)
```

| `compareFn(a, b)` 返回值 | 排序顺序                   |
| :----------------------- | :------------------------- |
| > 0                      | `a` 在 `b` 后，如 `[b, a]` |
| < 0                      | `a` 在 `b` 前，如 `[a, b]` |
| === 0                    | 保持 `a` 和 `b` 原来的顺序 |



**indexOf**：按照给定元素查找数组下标。



**slice**：按照下标切割数组。

```js
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 切割成两个子数组
var firstPart = myArray.slice(0, 5);   // 0-4
var secondPart = myArray.slice(6, 11);  // 6-10

// 合并两个子数组
var newArray = firstPart.concat(secondPart);

console.log(newArray);
```

在上面的代码中，`slice`方法用于切割数组。`slice(startIndex, endIndex)`接受两个参数，其中`startIndex`是切割的起始下标（包含），`endIndex`是切割的结束下标（不包含）。然后，使用`concat`方法将两个切割得到的子数组合并成一个新数组。



**push、pop、shift**

push + pop == LIFO

push + shift == FIFO



**reverse**：反转



**扩展运算符**：`...`，例如 `[...originalArray, ...originalArray]` 相当于新建一个数组，把 originalArray 的值复制两遍; `[...string]` 可以直接将字符串数组化。

### 字符串

**split**

你可以使用JavaScript中的`split`方法将字符串按空格分割成一个字符串数组。`split`方法接受一个分隔符作为参数，然后将字符串分割成数组元素。

以下是一个示例，演示如何按空格分割字符串：

```js
const originalString = "Hello World How are you";
const splittedArray = originalString.split(' ');

console.log(splittedArray);
```

在这个例子中，`split`方法将字符串 `originalString` 按空格分割成一个数组 `splittedArray`。输出结果将是一个包含每个单词的数组。

##### 正则表达式匹配

JS 当中，`/.../` 当中可以插入正则表达式。

**test(str):** 这个方法用于测试字符串是否匹配正则表达式。如果匹配成功，则返回 `true`，否则返回 `false`。

```js
javascriptCopy codeconst regex = /[0-9]/;
console.log(regex.test("abc123")); // true，字符串包含数字
console.log(regex.test("abc"));    // false，字符串不包含数字
```

**isNaN**：判断是不是数字。

