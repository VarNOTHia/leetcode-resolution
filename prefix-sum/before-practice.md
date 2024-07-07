## 前缀和

怎么做？

假设前缀和数组为 `presum[i]`，意思就是从第 0 位置到**第 i - 1 个**的总和。则有

1. preSum[i] = sum(0, i - 1);
2. preSum[i] = preSum[i - 1] + nums[i - 1]（替换成其他运算模式也一样）
3. 对于 **数组下标** 区间 [i, j]，有 sum[i, j] = preSum[j + 1] - preSum[i].
（这里的情况包含 i 和 j，也就是 sum[j] 挖去 sum[i - 1] 的结果。）
4. 对于边界条件 preSum[0]，视情况进行设定。