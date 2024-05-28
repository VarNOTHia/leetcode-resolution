/** LEETCODE 27. Remove Element，使用左右双指针的解法。 */
const removeElement = (nums, val) => {
  let front = 0;
  let end = nums.length - 1;

  // 如果数组只有一个元素且等于目标值，则直接返回 0
  if (nums.length === 1 && nums[0] === val) {
    nums.pop();
    return 0;
  }

  while(front <= end){
    // 1. 假定数组结尾的元素就是要互换的目标元素。找到满足条件的元素，交换两个指针。
   
    // 2. 每次循环先进行判断。
    if(nums[front] == val && nums[end] !== val){
      [nums[front], nums[end]] = [nums[end], nums[front]];
      end--;
    }

    // 3. 常规情况就让 front++，这个时候假定它不是目标元素。front 这个值代表数组当中存在多少个不等于 val 的东西。如果等于的话下一次在流程 2 当中交换。
    if(nums[front] !== val)
      front++;
    
    // 4. 如果这个数组后面还有目标元素，让 end 回退一格。
    if(nums[end] == val){
      end--;
    }
  }

  return front;
}

console.log(removeElement([3, 3], 3));