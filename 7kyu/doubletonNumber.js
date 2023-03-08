function doubleton(num) {
  let n = num;
  while (new Set('' + n).size !== 2 || n === num) {
    n++;
  }

  return n;
}
