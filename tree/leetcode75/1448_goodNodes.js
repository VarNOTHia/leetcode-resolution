/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  let res = 0;

  const dfs = (root, maxVal) => {
    if(!root) return;

    if(root.val >= maxVal){
      maxVal = root.val;
      res++;
    }
    dfs(root.left, maxVal);
    dfs(root.right, maxVal);
  }

  dfs(root, root.val);
  return res;
};

