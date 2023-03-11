function sumDigits(number) {
  const numStr = String(Math.abs(number));
  return numStr.split('').reduce((acc, c) => +acc + +c, 0);
}
