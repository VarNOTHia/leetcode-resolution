/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  let arr_a = convertToBinary(a);
  let arr_b = convertToBinary(b);
  let arr_c = convertToBinary(c);

  let res = 0;

  let n = Math.max(arr_a.length, arr_b.length, arr_c.length);
  // 补全长度。
  fillArr(arr_a, n);
  fillArr(arr_b, n);
  fillArr(arr_c, n);
  for(let i = 0; i < n; i++){
    // 这一位不能满足条件？
    if((arr_a[i] | arr_b[i]) !== arr_c[i]){
      // 如果 c = 1，说明有两个 0。
      if(arr_c[i] === 1){
        res++;
      }else{
        // 情况可能是：010、100、110。最后一种需要反转两次。
        if(arr_a[i] !== arr_b[i]){
          res++;
        }else{
          res += 2;
        }
      }
    }
  }
  
  return res;
};

const fillArr = (arr, target) => {
  for(let i = arr.length; i < target; i++){
    arr.push(0);
  }
  console.log(arr);
}

const convertToBinary = (i) => {
  // eg. 2 => [0, 1]
  let arr = [];
  while(i !== 0){
    arr.push(i % 2);
    i = i >> 1;
  }
  // console.log(arr);
  return arr;
}

minFlips(4, 2, 7);