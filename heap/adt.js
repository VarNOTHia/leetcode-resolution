const left = (i) => 2 * i;
const right = (i) => 2 * i + 1;
const parent = (i) => Math.floor(i / 2);

/** 大顶堆的一种实现。约定从数组下标 1 开始。如果要变成小顶堆，交换就可以了。
 * @param {number} left 一个元素的左子节点 left(i) = 2 * i
 * @param {number} right 一个元素的右子节点 right(i) = 2 * i + 1
 * @param {number} parent 元素的父节点 parent(i) = Math.floor(i / 2)
 */
class MaxHeap {
  constructor(){
    this.storage = [0];
  }

  getSize(){
    return this.storage.length - 1;
  }

  percolateUp(i){
    if(i <= 1){
      return;
    }

    if(this.storage[i] > this.storage[parent(i)]){
      [this.storage[i], this.storage[parent(i)]] = [this.storage[parent(i)], this.storage[i]];
      this.percolateUp(parent(i));
    }
  }
  
  percolateDown(i){
    if(left(i) > this.getSize()){
      return;
    }
    
    let target = left(i);

    if(right(i) <= this.getSize()){
      if(this.storage[right(i)] > this.storage[left(i)]){
        target = right(i);
      }
    }

    if(this.storage[i] < this.storage[target]){
      [this.storage[i], this.storage[target]] = [this.storage[target], this.storage[i]];
      this.percolateDown(target);
    } 
  }

  insert(elem){
    this.storage.push(elem);
    this.percolateUp(this.getSize());
  }

  show(){
    for(let i = 1; i < this.storage.length; i++){
      console.log(this.storage[i]);
    }
  }

  pop(){
    if(this.getSize() < 1){
      return;
    }
    // 把堆顶元素删除（这里先把尾部元素交换到堆顶再 pop）
    [this.storage[1], this.storage[this.getSize()]] = [this.storage[this.getSize()], this.storage[1]];
    let result = this.storage.pop();
    // 下滤，重排
    this.percolateDown(1);
    return result;
  }
};

let heap = new MaxHeap();
heap.insert(2);
heap.insert(14);
heap.insert(8);
heap.insert(9);
heap.pop();
heap.show();