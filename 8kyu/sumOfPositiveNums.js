// Challenge: To sum all positive numbers within a given array while skipping all negative ones, and if there are no positive numbers, sum is 0
// Example case:
// [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
    const positiveNums = [];
    const negativeNums = [];
    const sum = 0;
    
    arr.forEach(num => {
      if(num > 0){
        positiveNums.push(num)
      }else if(num < 0){
        negativeNums.push(num)
      }else {
        return sum
      }
    })
    
    return positiveNums.reduce((acc, c) => acc + c, 0)
}
  
// Alternative and better solution using the filter method on the array parameter; the previous solution is refactored.
// function positiveSum(arr) {
//   return arr.filter(num => num > 0).reduce((acc, c) => acc + c, 0);
// }

// Further refactoring into a One-liner.
// const positiveSum = arr => arr.filter(num => num > 0).reduce((acc, c) => acc + c, 0);