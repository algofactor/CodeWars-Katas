/**********************************
  Challenge: To check if a number is a factor of the base number
  
  P - two parameters;
  R - return true or false;
  E - (10,2), true;
      (2450,5), true;
      (24612,3), true;
      (24617,3), false;
      (653,7), false;
      
  P - using the modulus operator, check if there's a remainder,
      return true if there isn't, else return false;
**********************************/

function checkForFactor (base, factor) {
    // code here
    return base % factor === 0;
}