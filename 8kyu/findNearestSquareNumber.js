/***************************
  Challenge: to find the nearest square number to a given number;
  
  parameter is an number;
  return the square number that is closest to the given number;
  ex => nearestSq(1),1;
        nearestSq(2),1;
        nearestSq(111),121;
        nearestSq(9999),10000;
  
  pseudo-code: use the math sqrt method to get the sqrt of the given nunber;
               the round that value to the nearest integer using math round method;
               square the integer that is gotten and return the result;
***************************/

function nearestSq(n){
    const sqrt = Math.sqrt(n);
    const round = Math.round(sqrt);
    
    return Math.pow(round, 2);
}