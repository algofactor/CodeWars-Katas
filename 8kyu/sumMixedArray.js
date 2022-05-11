// Challenge: To return a number that is the result of summing all numbers within an array be it a string or an integer

function sumMix(x){
    return x.reduce( (acc, c) => acc + Number(c), 0 );
}
  
// Alternative: Using a function expression and an arrow function and another method of summing stringed values by changing the operators on the acc and c 
// These operators convert both the acc and c to integers, same as using the Number() method
// const sumMix = x => x.reduce( (acc, c) => +acc+ +c, 0 );