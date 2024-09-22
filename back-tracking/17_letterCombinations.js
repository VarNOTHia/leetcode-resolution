/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits === '') return [];
  const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  let res = [];
  const backTrack = (state, digits, path) => {
    // 终止条件：走到尽头。这个时候确定了这一步获取到了有效的结果。push 到路径当中。然后递归调用栈实现了回溯，返回上一层进行寻找。
    if(state == digits.length){
      res.push(path);
      return;
    }

    // 尝试：只要没有走到尽头，探索这一位数字对应的所有字母，每个字母都递归的走下去。
    for(let i = 0; i < letterMap[digits[state]].length; i++){
      backTrack(state + 1, digits, path + letterMap[digits[state]][i]);
    }

    // 没有剪枝。 
  }

  backTrack(0, digits, '');
  return res;
};
