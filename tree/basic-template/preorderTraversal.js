/** 二叉树的先序遍历。
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
const preorderTraversal = function(root) {
  let current = root;
  const stack = [];
  const result = [];
  
  while(stack.length > 0 || current !== null){
    while(current){
      stack.push(current);
      result.push(current.val);
      // 顺序很重要！反了就会把空元素压入堆栈！
      current = current.left;
    }

    // 每次走出循环就一定意味着 current 是空元素。但堆栈栈顶并不是！
    current = stack.pop();
    current = current.right;
  }

  return result;
};