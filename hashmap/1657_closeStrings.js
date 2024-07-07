/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  // 实际上就要满足两点：
  let map1 = new Map();
  let map2 = new Map();
  // 1. 数组内容一样（hashmap 判断）
  for(let ch of word1){
    if(!map1.has(ch)){
      map1.set(ch, 1);
    }else{
      map1.set(ch, map1.get(ch) + 1);
    }
  }

  for(let ch of word2){
    if(!map1.has(ch)){
      return false;
    }

    if(!map2.has(ch)){
      map2.set(ch, 1);
    }else{
      map2.set(ch, map2.get(ch) + 1);
    }
  }

  // 2. 数组元素出现次数构成的新数组排序后相同（hashmap 遍历）
  let collector1 = [], collector2 = [];
  for(let [ch, amount] of map1){
    collector1.push(amount);
  }

  for(let [ch, amount] of map2){
    collector2.push(amount);
  }

  collector1.sort((a, b) => a - b);
  collector2.sort((a, b) => a - b);

  for(let i = 0; i < collector1.length; i++){
    if(collector1[i] !== collector2[i]){
      return false;
    }
  }

  return true;
};
