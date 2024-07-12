/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  let length = 0;
  let temp = head;
  while(temp){
    length++;
    temp = temp.next;
  }

  midLength = Math.floor(length / 2);
  if(length == 1){
    return null;
  }
  
  let prev = head;
  for (let i = 1; i < midLength; i++) {
    prev = prev.next;
  }

  // 删除中间节点
  prev.next = prev.next.next;

  return head;
}