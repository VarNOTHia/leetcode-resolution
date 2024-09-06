/** 62. 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 1. dp[m][n]：在位置为 m，n 的不同路径总数。
  // 2. 递推公式：dp[m][n] = dp[m - 1][n] + dp[m][n - 1]
  // 3. 初始化？注意到机器人只能往下 / 右移动：
  // 例：按数组元素个数排序，dp[0][n] = 1; dp[m][0] = 1;
  // 4. 如何迭代？线性。
  let dp = new Array(m).fill(new Array(n).fill(0));
  for(let i = 0; i < m; i++){
    dp[i][0] = 1;
  }
  for(let i = 0; i < n; i++){
    dp[0][i] = 1;
  }
  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 下标从 0 开始。
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3,7));