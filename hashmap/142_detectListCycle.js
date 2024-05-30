/** LEETCODE 142. 环形链表 II，hashset 做法
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let storage = new Set();
  while(head){
    if(storage.has(head)){
      return head;
    }else{
      storage.add(head);
    }
    head = head.next;
  }
  return null;
};