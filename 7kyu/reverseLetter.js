function reverseLetter(str) {
  return str
    .split('')
    .filter(el => el.toUpperCase() !== el.toLowerCase())
    .reverse()
    .join('');
}
