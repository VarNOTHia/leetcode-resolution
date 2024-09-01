function countBits(n: number): number[] {
  const getAmount = (n: number) => {
    let res: number = 0;
    while(n > 0){
      res += n % 2;
      n = Math.floor(n / 2);
    }
    return res;
  }

  const arr: number[] = [];
  for(let i: number = 0; i <= n; i++){
    arr.push(getAmount(i));
  }
  return arr;
};