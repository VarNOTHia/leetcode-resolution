/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = [];
  // 由于要求「去重」，数字的顺序同时也是状态。
  const backTrack = (start, sum, path) => {
    // 终止条件：走到尽头。这个时候确定了这一步获取到了有效的结果。push 到路径当中。然后递归调用栈实现了回溯，返回上一层进行寻找。
    if(path.length === k){
      if(sum === n){
        res.push([...path]);
      }
      return;
    }

    // 剪枝：大于 n 就意味着不可能满足条件了。return。 (可有可无的优化)
    if(sum > n){
      return;
    }

    // 尝试：只要没有走到尽头，探索所有的数字。
    for(let i = start; i < 10; i++){
      path.push(i);
      backTrack(i + 1, sum + i, path);
      path.pop();
    }
  }

  backTrack(1, 0, []);
  return res;
};

combinationSum3(3, 7);