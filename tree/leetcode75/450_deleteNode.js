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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if(!root) return null;
  if(root.val < key){
    root.right = deleteNode(root.right, key);
  } else if(root.val > key){
    root.left = deleteNode(root.left, key);
  } else {
    // 进入待删节点。如果它左右子树一个为空，那就可以直接把另一边覆盖上。
    if(!root.left)  return root.right;
    if(!root.right) return root.left;

    // 如果两边都不为空，需要找右子树最小的节点。怎么删？
    // 右子树一路向左走，这一步意味着找 它最小的节点。
    let node = root.right;
    while(node.left){
      node = node.left;
    }
    // 然后要 和目标节点的左子树 连接起来。这就相当于移走了目标节点的左子树，插到了右子树取最小值的某处。 
    node.left = root.left;
    // 这个时候移走了左子树，就可以直接删除 root。
    root = root.right;
    return root;
  }
  return root;
};