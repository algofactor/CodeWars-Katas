function nbDig(n, d) {
  // your code
  const arr = new Array(n + 1);
  const kk = arr.fill(1).map((el, i) => i * i);
  const count = kk
    .join("")
    .split("")
    .filter((el) => el == d).length;

  return count;
}
