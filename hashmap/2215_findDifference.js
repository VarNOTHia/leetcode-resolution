/** 2215. 找出两数组的不同
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];

  let map1 = new Map();
  for(let i = 0; i < nums1.length; i++){
      map1.set(nums1[i], i);
  }

  let map2 = new Map();
  for(let i = 0; i < nums2.length; i++){
      map2.set(nums2[i], i);
  }

  let result1 = [], result2 = [];
  for(let i = 0; i < nums1.length; i++){
      if(!map2.has(nums1[i])){
          result1.push(nums1[i]);
      }
  }

  for(let i = 0; i < nums2.length; i++){
      if(!map1.has(nums2[i])){
          result2.push(nums2[i]);
      }
  }

  return [result1, result2];
};