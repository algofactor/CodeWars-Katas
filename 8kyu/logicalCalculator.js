/**********************
  Challenge: To make a logical calculator operate properly
  
  two parameters, one array and one operation;
  return a boolean value;
  ex. => ([true, true, true, false], "AND"), false;
         ([true, true, true, false], "OR"), true; 
         ([true, true, true, false], "XOR"), true;
         
  approach: call the reduce method on the array with the right operation performed;
**********************/

function logicalCalc(array, op){
    //your code here
    if(op == 'AND') return array.reduce((acc,c) => acc && c);
    if(op == 'OR') return array.reduce((acc,c) => acc || c);
    if(op == 'XOR') return array.reduce((acc,c) => acc != c);
}