// Challenge: To sort an array in ascending order first before running the reduce method on the sorted array to multiply all elements together within the array

function grow(x){
    let sorted = x.sort( (a, z) => a - z );  
    return sorted.reduce( (acc, c) => acc * c, 1 );
}
  
// Alternative: Using a function expression and an arrow function
// const grow = x => x.sort( (a, z) => a - z ).reduce( (acc, c) => acc * c, 1 );