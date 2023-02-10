String.prototype.camelCase = function () {
  //your code here
  const arr = this.split(" ");
  const res = arr
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join("");
  return res;
};
