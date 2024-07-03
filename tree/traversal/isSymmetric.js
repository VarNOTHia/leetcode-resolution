const judgeTree = (leftTree, rightTree) => {
  if(!(leftTree && rightTree) && (leftTree || rightTree))  return false;
}

const isSymmetric = (root) => {
  return judgeTree(root.left, root.right);
}