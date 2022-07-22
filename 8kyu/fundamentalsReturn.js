/*********************
  Challenge: to create multiple functions that carry out different operations on the given parameters
  
  two parameters are given, they are numbers;
  depending on the function, return the result from the operation;
  ex. => add(1,2),3;
         multiply(1,2),2;
         exponent(1,2),1;
         subt(1,2),-1;
         
  my approach is to use an arrow function to perform all operations;  
*********************/

const add = (a,b) => a + b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const mod = (a,b) => a % b;
const exponent = (a,b) => a**b;
const subt = (a,b) => a - b;