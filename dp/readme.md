五部：

1. 确定 DP 数组和下标的含义
2. 确定递推公式
3. 如何初始化 DP 数组（起始状态）
4. 确定遍历顺序
5. 举例推导



## 一维动态规划

#### [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？



条件：`1 <= n <= 45`

1. 得到通项公式：可以从 n-2 或 n-1 阶到达第 n 层。

   => `f(n) = f(n-1) + f(n-2)`

2. 寻找最初条件：f(2) = f(1) + f(0)，前两阶显然只有一种办法。

3. 递推。这一次生成的 f(n) 是下一次的 f(n-1)，而每次生成后 f(n-2) 就被替换掉了。所以可以这样求解：

   <img src="https://assets.leetcode-cn.com/solution-static/70/70_fig1.gif" alt="fig1" style="zoom:50%;" />

```JS
var climbStairs = function(n) {
    let p = 0, q = 0, r = 1;
    for(let i = 0; i < n; i++){
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
```



```js
var minCostClimbingStairs = function(cost) {
    // dp[n]: 到第 n 阶楼梯的时候的最小花费。
    const dp = [];
    
    dp[0] = 0;
    dp[1] = 0;
    for(let i = 2; i < cost.length; i++){
        dp[i] = min(dp[i - 1] + cost[i - 1], dp[i] + cost[i]);
    }
    return dp[cost.length];
};
```



### [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

**示例 1：**

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

**示例 2：**

```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

1. dp[n]？偷窃 n 家房屋的最大金额。
2. 递推公式：dp[n] = Math.max(dp[n-1], dp[n-2] + nums[n])。
3. 如何初始化？=> dp[1] = nums[1], dp[2] = nums[2]?
4. 如何遍历（线性）
5. 举例推导

```js
var rob = function(nums) {
    const num_arr = [0, ...nums];
    const result = [0, num_arr[1], Math.max(num_arr[1], num_arr[2])];
    for(let i = 3; i <= nums.length; i++){
        result[i] = Math.max(result[i - 1], result[i - 2] + num_arr[i]);
    }
    return result[nums.length];
};
```



## 二维动态规划

也一样的。
