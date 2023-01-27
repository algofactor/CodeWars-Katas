const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  if (begin > end) return 0;

  let sum = begin;
  while (begin < end) {
    if ((begin += step) > end) break;
    sum += begin;
  }

  return sum;
};
