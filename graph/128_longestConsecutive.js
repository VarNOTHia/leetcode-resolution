/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = new Map();
  for(let num of nums){
    if(!map.has(num)){
      map.set(num, 0);
    }
  }

  const dfs = (start, ans) => {
    if(!map.has(start) || map.get(start) !== 0){
      return;
    } else {
      console.log(start);
      ans.value++;
      map.set(start, map.get(start) + 1);
      dfs(start + 1, ans);
      dfs(start - 1, ans);
    }
  }

  let maxValue = 0;

  for(let num of nums){
    let ans = { value: 0 };
    dfs(num, ans);
    maxValue = Math.max(ans.value, maxValue);
  }

  return maxValue;
};

console.log(longestConsecutive([100,4,200,1,3,2]));