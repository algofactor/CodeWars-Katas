/****************************
  Challenge: to find out if a number of pixels can fit perfectly in a wall painiting;
  
  two parameters are given, numbers
  return true or false if the pixels fit perfectly;
  ex. => isDivisible(4050, 27), true;
         isDivisible(4066, 27), false;
         isDivisible(10005, 20), false;
         
  my approach: use the modulus operator to find out if it fits perfectly
               return true if it does, else return false;
**************************/

function isDivisible(w, p){
    return w % p === 0;
}