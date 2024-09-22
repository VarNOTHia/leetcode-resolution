
var StockSpanner = function() {
  // 维护一个单调递减的栈。 
  this.stack = [];
  this.index = -1;
  this.stack.push([-1, Infinity]);
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.index++;
  while(price >= this.stack[this.stack.length - 1][1]){
    this.stack.pop();
  }
  this.stack.push([this.index, price]);
  let result = this.index - this.stack[this.stack.length - 2][0];
  return result;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
let stockSpanner = new StockSpanner();
stockSpanner.next(31); // 返回 1
stockSpanner.next(41);  // 返回 1
stockSpanner.next(51);  // 返回 1
stockSpanner.next(60);  // 返回 1