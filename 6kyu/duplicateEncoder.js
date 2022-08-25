function duplicateEncode(word){
    // ...
  const spl = word.toLowerCase().split('');
  const bracsArr = spl.map((el,i,a) => a.filter(e => e === el).length > 1 ? ')' : '(' )
  return bracsArr.join('');
}