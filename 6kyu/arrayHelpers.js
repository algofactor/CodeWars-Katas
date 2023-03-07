// TODO
Array.prototype.square = function () {
  return this.map(n => n * n);
};
Array.prototype.cube = function () {
  return this.map(n => n * n * n);
};
Array.prototype.sum = function () {
  return this.reduce((acc, c) => acc + c, 0);
};
Array.prototype.average = function () {
  return this.reduce((acc, c) => acc + c, 0) / this.length || NaN;
};
Array.prototype.even = function () {
  return this.filter(n => !(n % 2));
};
Array.prototype.odd = function () {
  return this.filter(n => n % 2);
};
