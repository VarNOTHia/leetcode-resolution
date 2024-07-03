const BFS = (root) => {
  let queue = [];
  let result = [];

  if(root !== null){
    queue.push(root);
  }

  while(queue.length > 0){
    let n = queue.length;
    let layer_res = [];
    for(let i = 0; i < n; i++){
      let curr = queue.shift();
      layer_res.push(curr.val);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
    result.push(layer_res);
  }

  return result;
}