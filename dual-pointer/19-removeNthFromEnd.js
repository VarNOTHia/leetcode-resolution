const removeNthFromEnd = (head, n) => {
  let fast, slow;

  //1. 寻找节点。先让 fast 走 n 步，然后二者同步。
  //直到 fast 停下来 slow 就正好定位成功。
  fast = head;
  for(let i = 0; i < n; i++){
    fast = fast.next;
  }

  while(fast.next){
    
  }
}