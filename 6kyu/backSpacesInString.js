function cleanString(s) {
  let arr = s.split('');

  while (arr.includes('#')) {
    const i = arr.indexOf('#');
    if (i === 0) arr.splice(i, 1);
    else arr.splice(i - 1, 2);
  }

  return arr.join('');
}
