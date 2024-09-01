### 二叉树递归遍历

#### [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。



送，直接递归即可。

```js
var maxDepth = function(root) {
    if(!root)
        return 0;
    else{
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};
```



#### [100. 相同的树](https://leetcode.cn/problems/same-tree/)

给你两棵二叉树的根节点 `p` 和 `q` ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。



既然结构上相同，就意味着它的值是相同的；同时左右节点**也必须一起满足条件**。首先考虑节点本身为空的情况（均为空，true；否则 false），然后递归判断左子树和右子树是否满足条件，取与运算即可。

```JS
var isSameTree = function(p, q) {
    if(p === null && q === null){
        return true;
    }

    if((p === null && q !== null) || (q === null && p !== null))
    {
        return false;
    }
    
    if(p.val !== q.val){
        return false;
    }else{
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};
```



#### [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。



纯送，对每一级节点均翻转一次，在递归遍历的过程中操作就可以了。

```js
var invertTree = function(root) {
    if(root === null)
        return root;
    if(root.right !== null || root.left !== null)
    {
        const tempnode = root.right;
        root.right = root.left;
        root.left = tempnode;

        invertTree(root.left);
        invertTree(root.right);
    }

    return root;
};
```



#### [⭐105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

给定两个整数数组 `preorder` 和 `inorder` ，其中 `preorder` 是二叉树的**先序遍历**， `inorder` 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。



题解 1

```js
var buildTree = function(preorder, inorder) {
    const size = preorder.length;
    if(size === 0)
        return null;


    // 查找下标以便分割。
    let inDivider = inorder.indexOf(preorder[0]);
    
    // 非常直观的可以知道从哪里分割中序遍历子树。
    const inLeft = inorder.slice(0, inDivider);
    const inRight = inorder.slice(1 + inDivider, size);
    
    const preLeft = preorder.slice(1, 1 + inDivider);
    const preRight = preorder.slice(1 + inDivider, size);

    const left = buildTree(preLeft, inLeft);
    const right = buildTree(preRight, inRight);
    return new TreeNode(preorder[0], left, right);
};
```

首先排除节点为空的情况。

先序遍历的第一个元素一定是二叉树的根节点。

按照元素在中序遍历里面查找对应下标，分割出来的结果，左侧是左子树，右侧是右子树。

而同理，两种遍历方式，节点 + 左子树都会在数组当中占据相同的空间，只是排列方式不同。于是就可以切割出两种遍历方式不同的子树对应的数组。递归来得到新的左右子树。

于是可以直观的得到，这个树就应该是 `preorder[0], left, right`。



#### [⭐129. 求根节点到叶节点数字之和](https://leetcode.cn/problems/sum-root-to-leaf-numbers/)

```js
var sumNumbers = function(root) {
    let result = 0;
    const traverse = (node, curr) => {
        curr = curr * 10 + node.val;
        if(!node)       return 0;
        if(!node.left && !node.right){
            return curr;
        }
        return (node.left && traverse(node.left, curr)) + (node.right && traverse(node.right, curr));
    }
    return traverse(root, result);
```

使用 DFS 找路径。



### 二叉树的 BFS：

```js
var traverse = function(root) {
    if (root === null) {
        return null;
    }

    const queue = [root];
    
    while (queue.length > 0) {
        const n = queue.length;
        for(let i = 1; i <= n; i++){
            let f = queue.shift();
            if(f.left !== null){
                queue.push(f.left);
            }
            if(f.right !== null){
                queue.push(f.right);
            }
        }
    }
};
```

BFS，广度优先搜索，实现二叉树的层序遍历。

假设有一个满二叉树，高度为 3，也就是 1-2-4 结构。



这个代码每一轮都有两次循环，使用队列的 FIFO，先从根节点开始。

第一轮，队列弹出根节点，然后收录它的左右节点。

第二轮，此时 length == 2，由于队列 FIFO，会把这两个节点都弹出，然后分别收录它的左右节点。

第三轮，length == 4，FIFO，弹出并尝试收录 4 个节点，显然失败

随后检查 length == 0，OK。



#### [117. 填充每个节点的下一个右侧节点指针 II](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/)

给定一个二叉树：

```js
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}
```

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 `NULL` 。

初始状态下，所有 next 指针都被设置为 `NULL` 。

<img src="https://assets.leetcode.com/uploads/2019/02/15/117_sample.png" alt="img" style="zoom:67%;" />

题解 1：BFS 层序遍历。

上面的代码当中，每遍历一层就会重新生成一次 n。

如果要如图所示地连接，显然要满足一个条件：

```js
var connect = function(root) {
    if (root === null) {
        return null;
    }
    const queue = [root];
    while (queue.length > 0) {
        const n = queue.length;
        // 每一层重置一次。
        let last = null;
        
        for(let i = 0; i < n; i++){
            let f = queue.shift();
            if(f.left !== null){
                queue.push(f.left);
            }
            if(f.right !== null){
                queue.push(f.right);
            }
            // 从第二次开始连接，
           	if(i > 0){
                last.next = f;
            }
            // 二叉树节点本质上还是链表。将 f 的值赋给 last，last 改变也就代表 f 改变。
            last = f;
        }
    }
    
    return root;
};
```
