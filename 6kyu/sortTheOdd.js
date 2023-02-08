function sortArray(arr) {
  const sortedOdd = arr.filter((e) => e % 2).sort((a, b) => a - b);

  const res = arr.map((n) => (n % 2 ? sortedOdd.shift() : n));

  return res;
}
