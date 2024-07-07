/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  const altitude = [0];
  // 前缀和求解
  for(let i = 1; i <= gain.length; i++){
    altitude[i] = altitude[i - 1] + gain[i - 1];
  }
  // 拿取最大元素。
  altitude.sort((a, b) => (a - b));
  return altitude[altitude.length - 1];
};