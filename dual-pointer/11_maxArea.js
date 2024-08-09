/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 脑筋急转弯，记住两板左右，短板先行（长板怎么也是亏本的）
  let lo = 0;
  let hi = height.length - 1;
  let max_val = -1;
  while(lo < hi){
    let shortLine = (height[lo] < height[hi]) ? height[lo] : height[hi];
    max_val = (max_val < shortLine * (hi - lo)) ? shortLine * (hi - lo) : max_val;

    if(height[lo] <= height[hi]){
      lo++;
    }else{
      hi--;
    }
  }

  return max_val;
};