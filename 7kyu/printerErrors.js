function printerError(s) {
    // your code
  const letters = 'abcdefghijklm';
  const valid = s.split('').filter(el => !letters.includes(el));
  
  return `${valid.length}/${s.length}`
}