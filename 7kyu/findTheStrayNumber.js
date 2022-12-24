function stray(n) {
  const ans = n.filter((e,i) => i === n.indexOf(e) && i === n.lastIndexOf(e));
  return ans[0];
}