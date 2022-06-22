/*******************
  if array[n] is falsy, then return -1;
  else continue to solve by returning array[n] ** 2 or using Math.pow
********************/

function index(array, n){
    //your code here
    return !array[n] ? -1 : Math.pow( array[n], n );
}