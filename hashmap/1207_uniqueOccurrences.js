/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = new Map();
  for(let i = 0; i < arr.length; i++){
      if(!map.has(arr[i])){
          map.set(arr[i], 1);
      }else{
          map.set(arr[i], map.get(arr[i]) + 1);
      }
  }

  let times = new Map();
  for(const [key, value] of map){
      if(!map.has(value)){
          times.set(value, 1);
      }else{
          times.set(value, times.get(value) + 1);
      }
  }

  return times.size == map.size;
};