function digPow(n, p){
  const nums = [...n.toString()];  
  const sum = nums.map( (e,i) => Number(e) ** (p + i) ).reduce( (acc,c) => +acc + +c );  
  return sum%n ? -1 : sum/n;
}