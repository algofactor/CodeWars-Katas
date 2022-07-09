/*****************************
  Challenge: to use the xor operator in javascript;
  
  two booleans as parameters;
  return true or false depending on what result the operation produces;
  ex. => (false, false), false;
         (true, true), true;
         (true, false), true;
         (false, true), true;
         
  my approach:  just check if both parameters aren't equivalent, return true if they are, and false if they aren't
*****************************/

function xor(a, b) {
    return a != b;
}