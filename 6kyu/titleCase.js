function titleCase(title, minorWords) {
  if (!title) return '';

  if (!minorWords) {
    return title
      .toLowerCase()
      .split(' ')
      .map(word =>
        word.length > 1
          ? word[0].toUpperCase() + word.slice(1)
          : word.toUpperCase()
      )
      .join(' ');
  }

  const lowMinor = minorWords.toLowerCase().split(' ');
  return title
    .toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (lowMinor.includes(word) && i) return word;
      return word.length > 1
        ? word[0].toUpperCase() + word.slice(1)
        : word.toUpperCase();
    })
    .join(' ');
}
