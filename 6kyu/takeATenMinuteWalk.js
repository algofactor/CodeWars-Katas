function isValidWalk(walk) {
  //insert brilliant code here
  const n = walk.filter(el => el == 'n').length;
  const s = walk.filter(el => el == 's').length;
  const e = walk.filter(el => el == 'e').length;
  const w = walk.filter(el => el == 'w').length;
  
  return walk.length === 10 && n == s && e == w;
}