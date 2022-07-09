/*************************
  Challenge: to return true or false for the plural status;
  
  parameter is a number;
  return true or false;
  ex. => (0), true, "Plural for 0";
         (0), true, "Plural for 0";
         (100), true, "Plural for 100";
         (Infinity), true, "Plural for Infinity";
         
  my approach: for all cases that n isnt 1, return true, return false for only n == 1;
*************************/

function plural(n) {
    return n === 1 ? false : true;
}