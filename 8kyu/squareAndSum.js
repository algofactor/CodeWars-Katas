// Challenge: To square each number within an array and then sum all the squares together

// Method 1: I'll use the forEach method on the array to solve this challenge by adding the square of each element to a variable called sum
// function squareSum(numbers){
//   let sum = 0;
//   numbers.forEach(num => sum += (num**2))
//   return sum
// }

// Alternative solution using a One-liner and an arrow function
// I'll call the reduce function on the array of numbers to solve this issue
const squareSum = numbers => numbers.reduce( (acc, c) => acc + (c**2), 0 )