/**************************
  PREP
  Challenge: To sum all numbers within an array except the largest and smallest numbers;
  P - an array of numbers;
  R - return the sum of all numbers except the largest and smallest;
  E - (null)                     , 0 ;
      ([ ])                      , 0 ;
      ([ 3 ])                    , 0 ;
      ([ 3, 5 ])                 , 0 ;
      ([ -6, -20, -1, -10, -12 ]), -28 ;
  P - check if array is falsy, or the length is less than 3, then return 0 as the result;
      call the sort method on the array;
      either use pop and shift to remove the largest and smallest elements, then call the reduce method to get the sum or
      slice and obtain all other numbers except the largest and smallest, then call the reduce method to get the sum.
**************************/

function sumArray(array) {
    if(!array || array.length < 3) return 0;
    
    const sorted = array.sort( (a,z) => a - z );
  
    //   This method involves using the slice approach
    const noBigAndSmall = sorted.slice(1, -1);
    const sum = noBigAndSmall.reduce( (acc,c) => acc + c, 0 );
  
    //   This method involves using the pop and shift approach
    //   sorted.pop();
    //   sorted.shift();
    //   const sum = sorted.reduce( (acc,c) => acc + c, 0 );
  
    return sum;
    
    //   Here's the One-Liner
    //   return array.sort( (a,z) => a - z ).slice(1, -1).reduce( (acc,c) => acc + c, 0 );
}