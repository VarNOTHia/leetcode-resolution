const removeNthFromEnd = (head, n) => {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let fast = dummyHead, slow = dummyHead;
  let temp = null;

  //1. 寻找节点。先让 fast 走 n 步
  //然后二者同步。直到 fast 停下来 slow 就正好定位成功。
  for(let i = 0; i < n; i++){
    fast = fast.next;
  }

  while(fast && fast.next){
    fast = fast.next;
    slow = slow.next;
  }

  //2. 此时 fast 被拦住，删除 slow 对应的下一个节点。
  if(slow.next){
    if(slow.next.next){
        temp = slow.next.next;
    }
    slow.next = temp;
  }

  return dummyHead.next;
}