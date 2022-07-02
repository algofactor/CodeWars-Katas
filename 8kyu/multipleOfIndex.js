/***********************
  Challenge: To check and return an array that the number/element is a multiple of it's index;
  
  an array is the parameter;
  return a new array where the element is a multiple of it's index;
  use the filter method to solve it, call the filter method on the given array;
***********************/

function multipleOfIndex(array) {
    // good luck
    return array.filter((e,i) => (e % i) == 0)
}