/*************************
  Challenge: to return the largest number obtained from carrying out different operations on some numbers
  
  P - three numbers;
  R - return largest result from the different operations carried out;
  E - (2, 1, 2), 6;
      (2, 1, 1), 4;
      (1, 1, 1), 3;
      (1, 2, 3), 9;
      (1, 3, 1), 5;
      
  P - first create variables to perform the different operations on the numbers;
      move those variables into an array;
      sort the array;
      returnt the last element in the array;
*************************/

function expressionMatter(a, b, c) {
    let opArray = [(a*(b+c)), (a*b*c), (a+b*c), ((a+b)*c), (a+b+c)]
    
    let sorted = opArray.sort((a,z) => a- z );
    
    return sorted[sorted.length - 1]; // highest achievable result
}