/*******************
  PREP
  Challenge: To verify the love status depending on the number of petals each flower has;
  P - numbers, two parameters
  R - return, not console.log(), their love status, if true or false
  E - (1,4), true
      (2,2), false;
      (0,1), true;
      (0,0), false
  P - if each flower, is opposite, meaning one is even and the other is odd, return true, else, return false;
      check if the sum of both parameters is compltely divisible by two, if it is, then their love status is false, else, it is true;
*******************/

function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 + flower2) % 2 === 0 ? false : true;
}