/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  const buffer = '';
  for(let i = 0; i < s.length; i++){
    if(stack.length > 0 && s[i] == ']'){
      while(1){
        let top = stack.length - 1;
        if(stack[top] <= '9' && stack[top] >= '0'){
          
        }
        buffer += stack[top];
        stack.pop();
      }
    }
    stack.push(s[i]);
  } 
};