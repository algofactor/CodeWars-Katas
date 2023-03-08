function inter(s1, s2) {
  // ...
  const common = [];
  s1.forEach(e => {
    if (s2.has(e)) common.push(e);
  });

  return new Set(common);
}
