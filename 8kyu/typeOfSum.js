/********************
  Challenge: to return the type of the result of a sum;
  
  two random parameters are given;
  return the type of the sum as a string;
  ex. => typeOfSum(12, 1), 'number');
         typeOfSum('d', 1), 'string';
         typeOfSum(null, undefined), 'number';
         typeOfSum(null, false), 'number';
         
  pseudo code: obtain the sum and then use the typeof operator to get the type;
               return whatever result is obtained;
********************/

function typeOfSum(a, b) {
    return typeof (a+b);
}