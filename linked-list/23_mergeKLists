/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** 合并 K 个有序链表，很难想象是 hard（
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const storage = [];
  // 1. 把链表每个元素都切下来
  for(let i = 0; i < lists.length; i++){
    let temp = lists[i];
    while(temp){
      // 暂存 temp 下一个元素。 
      let next = temp.next;
      // 先切下来 temp 然后装进去。
      temp.next = null;
      storage.push(temp);
      temp = next;
    }
  }

  // 2. 对他们按大小排序
  storage.sort((a, b) => {
    return a.val - b.val;
  })
  
  // 3. 重新连接
  let dummy = new ListNode(0);
  let current = dummy;
  for(let i = 0; i < storage.length; i++){
    current.next = storage[i];
    current = current.next;
  }
  
  return dummy.next;
};