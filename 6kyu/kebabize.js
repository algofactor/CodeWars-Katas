function kebabize(str) {
  while (str.includes('-')) {
    str.replace('-', '');
  }

  const kebab = str
    .split('')
    .map((el, i) => {
      if (el === el.toLowerCase() && el === el.toUpperCase()) return '';
      if (el === el.toUpperCase() && i === 0) return el.toLowerCase();
      if (el === el.toUpperCase()) return `-${el.toLowerCase()}`;
      return el.toLowerCase();
    })
    .join('');

  console.log(str, kebab);
  return kebab;
}
