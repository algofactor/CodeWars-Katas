function solve(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const vowels = 'aeiou';

  const consonantValues = s
    .replace(/[aeiou]/g, ' ')
    .split(' ')
    .filter(e => e)
    .map(e =>
      e.split('').reduce((acc, c) => acc + (alphabet.indexOf(c) + 1), 0)
    );
  const maxValue = Math.max(...consonantValues);
  return maxValue;
}
