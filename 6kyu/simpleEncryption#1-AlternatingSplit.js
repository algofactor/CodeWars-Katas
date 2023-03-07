function encrypt(text, n) {
  if (!text || n < 1) return text;

  let str = text;
  for (let i = 0; i < n; i++) {
    const split = str.split('');
    const odd = split.filter((e, i) => i % 2);
    const even = split.filter((e, i) => !(i % 2));

    str = [...odd, ...even].join('');
  }
  return str;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n < 1) return encryptedText;

  let str = encryptedText;
  for (let i = 0; i < n; i++) {
    const split = str.split('');
    const evenStart = Math.floor(str.length / 2);
    const odd = split.slice(0, evenStart);
    const even = split.slice(evenStart);

    str = split
      .map((e, idx) => (idx % 2 ? odd.shift() : even.shift()))
      .join('');
  }
  return str;
}
