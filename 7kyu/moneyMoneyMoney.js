function calculateYears(p, i, t, d) {
  let y = 0;

  while (p < d) {
    p += p * i - p * i * t;
    y++;
  }

  return y;
}
