## JS 矩阵
在 JavaScript 中，可以使用二维数组来表示矩阵，并通过嵌套的循环分别按行和列进行遍历。下面是一个具体的例子来展示如何实现这一点。
二维矩阵当中，第一个元素表示行、第二个表示列（y, x）。

### 表示矩阵

我们先创建一个 3x3 的矩阵：

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### 按行遍历

要按行遍历这个矩阵，我们可以使用嵌套的 `for` 循环：

```js
console.log("按行遍历:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

### 按列遍历

要按列遍历这个矩阵，我们可以调整循环的顺序：

```js
console.log("按列遍历:");
for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][j]);
    }
}
```

### 完整代码示例

下面是包含所有上述部分的完整代码示例：

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("按行遍历:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

console.log("按列遍历:");
for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][j]);
    }
}
```

运行这段代码将会输出：

```
按行遍历:
1
2
3
4
5
6
7
8
9
按列遍历:
1
4
7
2
5
8
3
6
9
```

这样，你就可以分别按行和按列遍历二维数组表示的矩阵了。