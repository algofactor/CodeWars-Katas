/*
PREP
Challenge: To return the first non-consecutive number of an array, if arr is [] or arr.length < 2 pr arr is consecutive, return null

P - Array of numbers
R - return not console.log
E - [1,2,3,4,6,7,8] = should return 6;
    [] = should return null;
    [ x ] = should return null;
    [1,2,3,4,5,6,7,8] = should return null
P - conditonal to check if array is empty, or arr.length < 2, to return null,
    loop and conditional to check for first non-consecutive, return non-consecutive,
    else return null,
*/

function firstNonConsecutive (arr) {
    if( !arr || !arr.length) return null;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] != (i + arr[0])) return arr[i];
    }
    return null;
    
  //   const result = arr.filter( (e,i,a) => e !== (i + a[0]) )[0];
  //   return Number.isInteger(result) ? result : null;
    
}