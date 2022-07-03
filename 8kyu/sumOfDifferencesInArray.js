/*************************
  Challenge: To sum up the differences in an array
  
  P - an array;
  R - return the sum of the differences;
  E - ([1, 2, 10]), 9;
      ([-3, -2, -1]), 2;
  
  P - first sort the given array,
      then create a new array using the map method, set it up to do the necessary subtractions,
      then slice the NaN that is the last element from the array,
      call the reduce method to obtain the sum of all the differences,
      check first to find out if the array given is empty or has only one element.
      
*************************/

function sumOfDifferences(arr) {
    if(arr.length < 2) return 0;
    const sorted = arr.sort((a,z) => z - a);
    const diffsOnly = sorted.map((e,i) => e - sorted[i+1]).slice(0,-1);
    
    const sum = diffsOnly.reduce((acc,c) => acc + c, 0);
    return sum;
}