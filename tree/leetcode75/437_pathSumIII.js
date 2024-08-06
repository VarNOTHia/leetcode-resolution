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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let sum = 0;
  const traversal = (root) => {
    if(root){
      checkSum(root, root.val);
      root.left && traversal(root.left);
      root.right && traversal(root.right);
    }
  }

  const checkSum = (root, val) => {
    if(val == targetSum){
      sum++;
    }
    if(root){
      root.left && checkSum(root.left, val + root.left.val);
      root.right && checkSum(root.right, val + root.right.val);
    }
  }

  traversal(root);
  return sum;
};