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
var oddEvenList = function(head) {
  if(!head) return null;

  let odd = new ListNode();
  let even = new ListNode();
  let isOdd = true;
  let curr = head;

  let odd_curr = odd;
  let even_curr = even;

  while(curr){
    if(isOdd){
      let temp = curr;
      curr = curr.next;
      temp.next = null;
      odd_curr.next = temp;
      odd_curr = odd_curr.next;
      isOdd = false;
    }else{
      let temp = curr;
      curr = curr.next;
      temp.next = null;
      even_curr.next = temp;
      even_curr = even_curr.next;
      isOdd = true;
    }
  }
  if(even.next){
    odd_curr.next = even.next;
  }

  return odd.next;
};      