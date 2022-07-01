/***********************
  Challenge: To find the mean of numbers within a given array;
  
  one array as parameter;
  return the mean of the numbers within the array;
  Ex. ([1]), 1;
      ([1, 3, 5, 7]), 4;
      
  My approach: first, call the reduce method on the array to obtain the sum of all numbers within the arrauy;
               then, divide the sum by the length of the array;
***********************/

var findAverage = function (nums) {
    // Code here
    return nums.reduce((acc,c) => +acc + +c)/nums.length;
}