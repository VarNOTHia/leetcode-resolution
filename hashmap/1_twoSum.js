/** LEETCODE 1. 两数之和，经典 hashmap
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let sub_list = new Map();
  for(let i = 0; i < nums.length; i++){
    sub_list.set(target - nums[i], i);
  }

  for(let i = 0; i < nums.length; i++){
    if(sub_list.has(nums[i]) && sub_list.get(nums[i]) !== i){
      return [i, sub_list.get(nums[i])];
    }
  }
};