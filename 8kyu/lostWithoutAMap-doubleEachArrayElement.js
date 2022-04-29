// Challenge: To return a new array that contains double the value of each integer in an existing array. 
// To solve this, the map method applied on each element in the array will solve this problem.
// For example: 
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map( num => num * 2 )
}
  
// Alternative solution using a One-liner but overall the same with the previous method
// const maps = x => x.map( num => num * 2 )