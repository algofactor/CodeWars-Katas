var capitals = function (word) {
	// Write your code here
  return word.split('').filter((el,i) => el === el.toUpperCase()).map((e) => word.indexOf(e));
};