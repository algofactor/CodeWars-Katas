function getDivisorsCnt(n){
    // todo
  let i = 1;
  let divisors = [];
  while(i <= n){
    if (n % i === 0) divisors.push(i);
    i++
  }
  
  return divisors.length;
}