/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const judgeRange = (target, nums) => {
    let hi = nums.length;
    let res = hi;
    let lo = 0;
    while(lo < hi){
      let mid = (lo + hi) >> 1;
      if(nums[mid] < target){
        lo = mid + 1;
        res = mid;
      }else if(nums[mid > target]){
        hi = mid - 1;
      }else{
        return mid;
      }
    }
    return res;
  }
  
  potions.sort((a, b) => (a - b));
  return spells.map(i => (potions.length - judgeRange(potions, (success - 1) / i)));
};