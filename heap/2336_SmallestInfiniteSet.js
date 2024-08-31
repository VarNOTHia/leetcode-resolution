
var SmallestInfiniteSet = function() {
  this.infSet = new Set();
  for(let i = 0; i < 1000; i++){
    this.infSet.add(i + 1);
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  for(let i = 1; 1 <= 1000; i++){
    if(this.infSet.has(i)){
      this.infSet.delete(i);
      return i;
    }
  }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if(!this.infSet.has(num)){
    this.infSet.add(num);
    return;
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */