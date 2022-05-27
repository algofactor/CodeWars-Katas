/*******************
  PREP
  Challenge: TO calculate the average of all numbers within an array, return the result but return zero if array is empty;
  P - an array of numbers
  R - return, not console.log(), the average of all numbers within the array
  E - ([1,1,1]), 1);
      ([1,2,3]), 2);
      ([1,2,3,4]), 2.5);
  P - call the reduce method on the array and obtain the sum total,
      then, divide by the lenght of the array,
      return the result which is the average;
*******************/

function find_average(array) {
    if (!array.length) return 0;
    
    const sumTotal = array.reduce( (acc, c) => acc + c, 0 );
    
    const average = sumTotal/array.length;
    
    return average;
    
    //   return array.length ? ( array.reduce( (acc, c) => acc + c, 0 ) / array.length ) : 0;
}