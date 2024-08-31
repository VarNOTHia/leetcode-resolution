/** 找第 k 个最大元素，大根堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = [114514];
  const left = (i) => 2 * i;
  const right = (i) => 2 * i + 1;
  const parent = (i) => Math.floor(i / 2);

  const maxHeapify = (pos) => {
    if(pos <= 1){
      return;
    }

    if(heap[pos] > heap[parent(pos)]){
      [heap[pos], heap[parent(pos)]] = [heap[parent(pos)], heap[pos]];
      maxHeapify(parent(pos));
    }
  }
  
  const go_down = (pos) => {
    if(left(pos) > heap.length){
      return;
    }
    
    let target = left(pos);
    if(right(pos) <= heap.length){
      if(heap[right(pos)] > heap[left(pos)]){
        target = right(pos);
      }
    }

    if(heap[pos] < heap[target]){
      [heap[pos], heap[target]] = [heap[target], heap[pos]];
      go_down(target);
    }
  }

  const pop = () => {
    if(heap.length <= 1){
      return;
    }
    
    [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]];
    let res = heap.pop();
    go_down(1);

    return res;
  }

  for(let i = 0; i < nums.length; i++){
    heap.push(nums[i]);
    maxHeapify(i + 1);
  }

  for(let i = 1; i < k; i++){
    pop();
  }

  return heap[1];
};