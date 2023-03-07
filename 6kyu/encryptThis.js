const encryptThis = function (text) {
  // Implement me! :)
  const arr = text.split(' ');
  const res = arr.map(word => {
    return word
      .split('')
      .map((e, i, a) => {
        if (i === 0) return e.charCodeAt(i);
        if (i === 1) return a.at(-1);
        if (i === a.length - 1) return a.at(1);
        return e;
      })
      .join('');
  });

  return res.join(' ');
};
