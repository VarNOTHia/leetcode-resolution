
var StockSpanner = function() {
  this.stack = [];
  this.priceMap = [];
  this.record = [];
  this.index = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.index++;
  this.priceMap[this.index] = price;
  this.record[this.index] = 0;

  while(this.stack.length > 0 && this.priceMap[this.stack[this.stack.length - 1]] > price){
    let top = this.stack.length - 1;
    this.record[top] = this.index - top;
    this.stack.pop();
  }
  this.stack.push(this.index);
  
  return this.record[this.index];
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */