function accum(s) {
	// your code
  const spl = (s.toUpperCase()).split('');
  const res = spl.map((el, i) => {
    let j=0;
    while(j < i){
      el += el.toLowerCase();
      j++;
    }
    return el.slice(0, i+1);
  });
  
  return res.join('-');
}