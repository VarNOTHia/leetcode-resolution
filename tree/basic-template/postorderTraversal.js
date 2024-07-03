/** 二叉树的后序遍历。
 * 为什么对先序左右逆转再反转就可以得到后序的结果？
 * 在先序遍历中，遍历顺序是根节点、左子树、右子树。
 * 而后序遍历的顺序是左子树、右子树、根节点。
 * 所以，如果我们按照先序遍历的方式遍历树，但是把访问顺序反过来（先右后左），那么得到的就是根节点、右子树、左子树的顺序，这与后序遍历的顺序是一致的，只是相对于后序遍历的顺序是倒序的。
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
  let current = root;
  const stack = [];
  const result = [];
  
  while(stack.length > 0 || current !== null){
    while(current){
      stack.push(current);
      // 顺序很重要！反了就会把空元素压入堆栈！
      result.push(current.val);
      current = current.right; // 注意这里是右子树
    }

    // 每次走出循环就一定意味着 current 是空元素。但堆栈栈顶并不是！
    current = stack.pop();
    current = current.left; // 注意这里是左子树
  }

  return result.reverse(); // 将结果数组翻转
};
