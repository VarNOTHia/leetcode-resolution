/** 739. 每日温度
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  // 使用递减单调栈存储下标。
  // 为什么存下标？
  // 通过下标作为索引，搜索到对应的温度就可以进行比较。而如果只存值，就做不到这一点。

  const stack = []; // 初始化一个空栈，用于存储温度的索引。
  const record = new Array(temperatures.length).fill(0); // 初始化一个结果数组，填充为0。
  
  // 遍历输入的温度数组
  for (let i = 0; i < temperatures.length; i++) {
    // 当栈不为空且当前温度大于栈顶索引对应的温度时
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const top = stack[stack.length - 1]; // 获取栈顶元素的索引
      record[top] = i - top; // 计算当前索引和栈顶索引的差值
      stack.pop(); // 从栈中移除该索引，因为已经找到了结果
    }
    // 将当前索引压入栈中
    stack.push(i);
  }
  
  return record; // 返回最终的结果数组
};