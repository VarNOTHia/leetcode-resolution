/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const stack = [];
  let n = height.length;
  let ans = 0;
  // 构建一个单调递减栈。
  for(let i = 0; i < n; i++){
    // 1. stack 不为空，避免空指针；2. 单调递减栈被破坏。
    while(stack.length > 0 && height[stack[stack.length - 1]] < height[i]){
      /* 
        设想这样一种情况，能接下来雨水的盆子必须有底 和 两个边。
        那么底在哪？（top）边在哪？（top 左侧的元素和 i）
        既然是单调递减，那么如果左侧一直有一个很高的元素，即使已经计算过已有的容量。但它会一直保留到有比它更高的元素出现。
      */
      const top = stack.pop();
      if(stack.length === 0)  break;
      // 因为是单调递减栈，所以短板效应一定发生在最近的节点。
      // 因为 top 已经被 pop 掉了，这个时候的 left 就是 top 左边的元素。　　　
      const left = stack[stack.length - 1];
      const width = i - left - 1;
      // height[top] 代表卡在中间低洼处的元素，相当于池子底部的高度。
      const currHeight = Math.min(height[i], height[left]) - height[top];

      ans += currHeight * width;
    }
    stack.push(i);
  }
  return ans;
};