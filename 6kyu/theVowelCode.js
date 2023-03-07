const vowels = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encode(string) {
  return string
    .split('')
    .map(char => vowels[char] || char)
    .join('');
}

function decode(string) {
  const keys = Object.keys(vowels);
  const values = Object.values(vowels);

  return string
    .split('')
    .map(char => (values.includes(char) ? keys[values.indexOf(char)] : char))
    .join('');
}
