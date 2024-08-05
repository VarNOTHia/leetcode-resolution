/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];
  for(let aster of asteroids){
    let skipPush = false;
    while(stack.length > 0 && stack[stack.length - 1] > 0 && aster < 0){
      let top = stack.pop();
      // 将两个内容拿出来比较，将绝对值更大的作为 aster。
      if(Math.abs(top) > Math.abs(aster)){
        aster = top;
      }else if(Math.abs(top) < Math.abs(aster)){
        continue;
      }else{
        skipPush = true;
        break;
      }
    }
    !skipPush && stack.push(aster);
  }
  return stack;
};