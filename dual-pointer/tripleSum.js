/**
 * LEETCODE 15. 三数之和
 * 找到数组当中所有不重复的三元组，使得它们的和为 0.
 * @param {number[]} nums
 * @return {number[][]}
 */

let threeSum = (nums) => {
  nums.sort((a, b) => (a - b));
  let border = 0;
  let result = [];

  while(border < nums.length - 1){
    // 第一次去重。
    if(border > 0 && nums[border] == nums[border - 1]) {
      border++;
      continue;
    }

    let left = border + 1;
    let right = nums.length - 1;
    while(left < right){
      let target = nums[border] + nums[right] + nums[left];
      if(target > 0){
        right--;
      }else if(target < 0){
        left++;
      }else{
        // 找到答案时，双指针同时收缩!
        result.push([nums[border], nums[left], nums[right]]);

        // Q: 如何证明 right-- 可行，不需要让指针重复？
        // A: 数组是有序的，我们每次遍历从外往里收缩。如果外圈只有这么一个组合，更靠外的一定被遍历过了！

        // 还是需要去重的，否则再次收缩会重蹈覆辙。
        while(left < right && nums[left] == nums[left + 1]){
          left++;
        }

        while(left < right && nums[right] == nums[right - 1]){
          right--;
        }

        right--;
        left++;
      }
    }
    border++;
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, 1, 4]));