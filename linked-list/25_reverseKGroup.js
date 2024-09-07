/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || k === 1) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  let headNode = head;
  let tail = head;
  while(pre){
    for(let i = 0; i < k; i++){
      if(!tail.next && i < k - 1){
        return dummy.next;
      }
      tail = tail.next;
    }
    let [tempHead, tempTail] = reversePart(headNode, tail, k);
    pre.next = tempHead;
    tail = tempTail;

    for(let i = 0; i < k; i++){
      headNode = headNode.next;
      pre = pre.next;
    }
  };

  return dummy.next;
}

const reversePart = (head, tail, k) => {
  // 直接在预设的时候连接起来。 
  let prev = tail.next;
  let curr = head;
  let next = null;

  for(let i = 0; i < k; i++){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return [prev, tail];
}