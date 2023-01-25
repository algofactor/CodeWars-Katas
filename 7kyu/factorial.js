function factorial(n) {
  if (n < 0 || n > 12) throw new Error("RangeError");

  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
}
