function openOrSenior(data){
  // ...
  return data.map((el, i, a) => el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open');
}