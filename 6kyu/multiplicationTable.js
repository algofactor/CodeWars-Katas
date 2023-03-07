multiplicationTable = function (size) {
  // insert code here
  const innerArr = Array.from({ length: size });
  const parentArr = new Array(size).fill(innerArr);

  const res = parentArr.map((line, i) => {
    return line.map((num, pos) => (i + 1) * (pos + 1));
  });

  return res;
};
