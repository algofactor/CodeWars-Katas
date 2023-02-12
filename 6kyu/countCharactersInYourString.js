function count(string) {
  // The function code should be here
  const res = {};
  for (const val of [...string].values()) {
    res[val] ? res[val]++ : (res[val] = 1);
  }
  console.log(string, res);
  return res;
}

// function count(string) {
//   const unique = new Set([...string]);

//   const res = {};
//   [...unique].forEach(
//     (e) => (res[e] = string.split("").filter((el) => el == e).length)
//   );
//   console.log(res);
//   return res;
// }
