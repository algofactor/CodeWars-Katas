function abbreviate(string) {
  // ...
  console.log(string);
  const output = string
    .split(' ')
    .map(e => {
      if (e.includes('-'))
        return e
          .split('-')
          .map(el => abbr(el))
          .join('-');
      if (e.includes(',')) return abbr(e.slice(0, -1)) + ',';
      return abbr(e);
    })
    .join(' ');

  return output;
}

function abbr(str) {
  if (str.length > 3) {
    return `${str[0]}${str.slice(1, -1).length}${str.at(-1)}`;
  }
  return str;
}
