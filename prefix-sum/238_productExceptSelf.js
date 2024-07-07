/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  /**
   * 掌握了前缀和的解法就拨云见日了，
   * 如果这道题可以用除法的话，显然对于下标 i，都有：
   * 不含 i 自己的 preMul_right[i] = preMul[j + 1] / preMul[i] / nums[i]
   * preMul_left[i] = preMul[i]。
   * 但是不能，数组元素含有 0.
   * 所以 preMul_right[i] 可以从右往左统计一遍。
   */
  const preMul_left = [1];
  for(let i = 1; i <= nums.length; i++){
    preMul_left[i] = preMul_left[i - 1] * nums[i - 1];
  }
  // 从右往左再次统计。+2 的原因是为了让下标对齐，这样前缀乘积的 i 一定代表「数组」第几个元素。
  const preMul_right = new Array(nums.length + 2);
  preMul_right[0] = 1;
  preMul_right[nums.length + 1] = 1; 
  for(let i = nums.length; i >= 0; i--){
    preMul_right[i] = preMul_right[i + 1] * nums[i - 1];
  }

  const result = [];
  // 最后的结果就是不含这个元素的前缀和.
  for(let i = 0; i < nums.length; i++){
    let j = i + 1;
    result.push(preMul_left[j - 1] * preMul_right[j + 1]);
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));