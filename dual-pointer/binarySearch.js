const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  
  while(left <= right){
    // 1. 为什么这么做？
    // => 防止见到大数溢出。
    mid = left + ((right - left) >> 1);
    if(target < nums[mid]){
      right = mid - 1;
    }else if(target > nums[mid]){
      left = mid + 1;
    }else{
      return mid;
    }
  }
  return -1;
}