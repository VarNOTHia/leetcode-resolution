/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let write = 0;  // 写指针，表示当前写入的位置
  let read = 0;   // 读指针，用于遍历字符数组

  while (read < chars.length) {
    let start = read;  // 当前字符序列的起始位置
    
    // 找到连续相同字符的区间
    while (read < chars.length && chars[read] === chars[start]) {
      read++;
    }
    
    chars[write] = chars[start];  // 写入当前字符
    write++;
    
    let count = read - start;  // 计算当前字符的个数
    if (count > 1) {  // 只有当字符出现多次时才需要写入数量
      const countStr = count.toString();
      for (let c of countStr) {
        chars[write] = c;  // 逐个写入数量字符
        write++;
      }
    }
  }

  return write;  // 返回压缩后的字符数组的长度
};