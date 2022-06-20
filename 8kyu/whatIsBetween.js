/************************
  PREP
  Challenge: To return all numbers between two integers with those two integers included
  
  P - two numbers
  R - return, an array
  E - (1, 4), [1, 2, 3, 4];
      (-2, 2), [-2, -1, 0, 1, 2];
      
  P - create a new variable with which to store the array,
      then,use a loop to push each value that is needed into the new array;
      return the complete array as the result;
************************/

function between(a, b) {
    // your code here
    let arr = [];
    for(let i = a; i <= b; i++){
      arr.push(i);
    };
    
    return arr;
}