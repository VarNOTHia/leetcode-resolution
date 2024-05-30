const isAnagram = (s, t) => {
  const record = new Map();
  // 这一步必须判断，否则接下来 t 的判断会出错
  if(s.length !== t.length) return false;
  for(let i of s){
    if(!record.has(i)){
      record.set(i, 1);
    }else{
      record.set(i, record.get(i) + 1);
    }
  }

  for(let i of t){
    // 遍历字符串 s 的时候，对这个哈希表的初始化就决定每个字母的值不可能小于 0，所以不需要判断它小于 0 的情况。
    if(!record.get(i)){
      return false;
    }else{
      record.set(i, record.get(i) - 1);
    }
  }

  return true;
}

// 解法二
var isAnagram_ = function(s, t) {
  return s.length == t.length && [...s].sort().join('') === [...t].sort().join('');
};