/** 二叉树的遍历模板。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const DFS = function(root) {
  let current = root;
  const stack = [];
  
  /*
    两个条件：
      current !== null:
        这个条件确保我们继续遍历当前节点以及它的左子树。
        当 current 不为 null 时，表示我们还有节点需要处理。
        当 current 为 null 时，表示我们已经到达当前子树的最左端，
        需要处理栈中的节点或右子树。

      stack.length > 0:
        这个条件确保我们在处理完左子树后能够返回并处理上一个节点及其右子树。
        当栈中有节点时，表示还有未处理的节点。
        栈中的节点是我们沿着左子树下行时压入的，它们需要在返回时处理。
  */
  while(stack.length > 0 || current !== null){
    while(current){
      stack.push(current);
      /* 在这里插入代码进行先序遍历! 后序遍历只要把后面 left right 调转一下，输出数组再反转就可以了 */
      
      // 顺序很重要！反了就会把空元素压入堆栈！
      current = current.left;
    }

    // 每次走出循环就一定意味着 current 是空元素。但堆栈栈顶并不是！
    current = stack.pop();
    /* 在这里插入代码进行中序遍历！ */

    current = current.right;
  }
};