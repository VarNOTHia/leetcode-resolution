/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  /**
   * 做题之前要搞懂 preSum 的意思，preSum 的下标要比数组大 1，就表示从数组 i 个元素之和！
   * 对于数组下标区间 [i, j]，有 sum[i, j] = preSum[j + 1] - preSum[i].|
   （包含 i 和 j，也就是 sum[j] 挖去 sum[i - 1] 的结果。）
   */
  let preSum = [0]
  for(let i = 1; i <= nums.length; i++){
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  for(let i = 0; i < nums.length; i++){
    let sum_left = preSum[i];
    // sum_right 的意思是这个元素右侧的元素之和。
    // i 右侧的元素之和，也就是求 sum[i + 1, j], 其中的 j = nums.length - 1 
    // 这个时候比前面 sum[i] 要额外减去一个 nums[i]。
    let sum_right = preSum[nums.length] - preSum[i] - nums[i];
    if(sum_left == sum_right){
      return i;
    }
  }
  return -1;
};