function findUniq(arr) {
  // do magic
  return arr.filter( (num, i, a) => a.indexOf(num) === i && a.lastIndexOf(num) === i )[0]
}