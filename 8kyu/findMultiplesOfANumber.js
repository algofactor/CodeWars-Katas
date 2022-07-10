/***************************
  Challenge: to create an array that contains all multiples of a particular number to a given limit;
  
  two numbers as parameters
  return an array of number multiples
  ex/ => (5, 25), [5, 10, 15, 20, 25];
         (5, 7), [5];
         (11, 54), [11, 22, 33, 44];
         
  my approach: using a loop, with the limter set as the condition,
               push each multiple obtained into a new array;
****************************/

function findMultiples(integer, limit) {
    let arr = [];
    for(let i = 1; i <= Math.floor(limit/integer); i++){
      arr.push(integer*i);
    }
    
    return arr;
}  