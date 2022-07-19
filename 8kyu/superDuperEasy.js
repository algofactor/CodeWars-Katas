/*************************
  Challenge: to perform an operation on a given number or return zero if parameter is a string;
  
  parameter could be a string or a number;
  return a result if param is a number else return 'Error';
  ex. => ("hello"), "Error";
         (1), 56;
         (1.2), 66;
         (""), "Error";
         
  my approach: if parameter is not a number, return error;
               if it is, return param * 50 + 6;
*************************/

function problem(x){
    return typeof x != 'number' ? 'Error' : (50*x)+6;
}