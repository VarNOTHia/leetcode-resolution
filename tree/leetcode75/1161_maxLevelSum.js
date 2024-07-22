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
var maxLevelSum = function(root) {
  const queue = [];
  let curr = root;
  root && queue.push(root);
  const layer_res = [];

  while(queue.length > 0){
    const n = queue.length;
    let temp_res = 0;
    
    for(let i = 0; i < n; i++){
      curr = queue.shift();
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
      temp_res += curr.val;
    }

    layer_res.push(temp_res);
  }

  let max_res = layer_res[0];
  let maxLevel = 1;

  for(let i = 1; i < layer_res.length; i++){
    if(layer_res[i] > max_res){
      maxLevel = i + 1;
      max_res = layer_res[i];
    }
  }
  return maxLevel;
};