function areEqual(s1, s2) {
  // ...
  return s1.size === s2.size && [...s1].every(e => s2.has(e));
}

function notEqual(s1, s2) {
  // ...
  return s1.size !== s2.size || [...s1].some(e => !s2.has(e));
}
