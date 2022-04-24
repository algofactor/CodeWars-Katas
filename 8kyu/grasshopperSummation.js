// A program to obtain the summation of every number from 1 to the specified number.
// A loop will be implemented to solve this problem.

/*
  An example that depicts what should happen is given below:
  summation(2) -> 3
  1 + 2

  summation(8) -> 36
  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    // Code here
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}


// Alternative solution using Arrow Functions
// var summation = num => {
//   let sum = 0;
//   for(let i =1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }