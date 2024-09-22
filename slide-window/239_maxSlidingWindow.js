/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // Timeout. 如何优化？
  const max_elem = [];
  
  // for(let i = 0; i < nums.length - k + 1; i++){
  //   let max = -Infinity;
  //   for(let j = 0; j < k; j++){
  //     if(nums[i + j] > max){
  //       max = nums[i + j];
  //     }
  //   }
  //   max_elem.push(max);
  // }

  // 走第一圈，完整的遍历一次。
  let temp_max = -Infinity;
  let max_position = -1;
  for(let i = 0; i < k; i++){
    if(nums[i] > max){
      temp_max = nums[i];
      max_position = i;
    }
  }
  max_elem.push(temp_max);
  
  for(let i = 1; i < nums.length - k + 1; i++){

  }
  return max_elem;
};