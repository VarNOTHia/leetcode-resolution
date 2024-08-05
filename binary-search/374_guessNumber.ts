/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
function guessNumber(n: number): number {
  let [min, max]: Array<number> = [1, n];
  let myNumber: number;

  while(1){
    let mid: number = (min + max) / 2;
    if(guess(mid) == -1){
      max = mid;
    }else if(guess(mid) == 1){
      min = mid;
    }else{
      return mid;
    }
  }
};
