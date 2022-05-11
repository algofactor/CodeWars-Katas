// Challenge: To return the total of all numbers within an array, two methods can be used to solve this challenge
// The first method is implemented below; it involves declaring a variable to contain the inital value of the total sum of the numbers
// The array is then looped through to add each element within the array to the total sum that has been declared
function sum (numbers) {
    "use strict";
    let sumOfNums = 0;
    numbers.forEach(n => sumOfNums += n);
    return sumOfNums
    
    
    //  the reduce method could also be used to solve this challenge. This method is more efficient when compared to the previous one
    //   return numbers.reduce( (acc, c) => acc + c, 0 )
};
  
// Alternative: Writing the solution using a function expression and an arrow function
// const sum = numbers => numbers.reduce( (acc, c) => acc + c, 0 )