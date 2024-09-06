/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // 思路：二分查找，如果元素单调递增就向右，单调递减就向左。
  nums.push(-Infinity);
  nums.unshift(-Infinity);

  let left = 1, right = nums.length - 2;
  if(nums.length == 3){
    return 0;
  }
  while(left <= right){
    let mid = (left + right) >> 1;
    if(nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]){
      // 因为现在的数组元素头尾各自被塞了一个，所以和原来的下标不一样。
      return mid - 1;
    }
    if(nums[mid] < nums[mid + 1]){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};