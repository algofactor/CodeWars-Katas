/**********************
  Challenge: to convert numbers to binary;
  
  parameter is a number;
  return the equivalent in binary;
  ex. => (1), 1;
         (2), 10;
         (5), 101;
         
  my approach: call the toString method on the number parameter, using 2 as the argument to change the value to binary;
  
**********************/

function toBinary(n){
    return Number(n.toString(2));
}