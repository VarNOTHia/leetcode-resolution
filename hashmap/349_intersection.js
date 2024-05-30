/** LEETCODE 349: 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  let storage = new Set();
  // for of 不遍历索引！直接会拿到值！
  for(let i of nums1){
    if(!storage.has(i)){
      storage.add(i);
    }
  }

  let result = [];
  for(let i of nums2){
    if(storage.has(i)){
      result.push(i);
      // 我们不希望让这个元素下次遍历的时候再次出现，于是在集合当中删除即可。
      storage.delete(i);
    }
  }

  return result;
}