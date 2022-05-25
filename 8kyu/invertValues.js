/************
  PREP
  CHALLENGE: To return an array in which each of the values is replaced by its additive inverse;
  P - array of numbers;
  R - return, not console.log(), the additive inverse of each element within the array;
  E - invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
      invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
      invert([]) == []
  P - the map method will be used to loop through the array,then
      for each element within the array, it will be replaced by its additive inverse,
      then the result will be returned as an array.
************/

function invert(array) {
    return array.map( e => e = -e );
}