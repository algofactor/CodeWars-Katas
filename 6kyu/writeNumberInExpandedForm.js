function expandedForm(num) {
  // Your code here
  const str = String(num);
  const eachNum = str.split("");

  const val = eachNum.map((n, i, a) => Number(n) * 10 ** (a.length - (i + 1)));
  let res = val.filter((e) => e != "0").join(" + ");

  return res;
}
