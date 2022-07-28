/*************************
  Challenge: to return the sum of multiples of a given number below another number;
  
  two numbers are given as parameters;
  return a sum which is less than the second parameter;
  ex. =>  (0,0),"INVALID";
          (2,9),20;
          (4,-7),"INVALID";          
  my approach: return invalid if both parameters are equal or if param1 is greater than param2;
               use a loop with the condition that the product of the iterator and param1 is less than param2;
               if it fulfills this condition, keep summing the result into a variable called sum;
  
*************************/

function sumMul(n,m){
    let sum = 0;
    if(n == m || n > m) return 'INVALID';
    for(let i = 1; (i*n) < m; i++){
      sum += (i*n);
    }
    return sum;
}