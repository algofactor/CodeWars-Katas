function tribonacci(sig,n){
  //your code here
  if(n === 0) return [];
  else if (n <= sig.length) return sig.slice(0, n);
  
  while (sig.length < n){
    const next = sig.slice(sig.length - 3).reduce( (acc,c) => acc + c, 0 );
    
    sig.push(next);
  }
  
  return  sig;
}