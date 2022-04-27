/*******************
  PREP
  Challenge: To multiply a number by 8 or 9 depending on whether it's even or odd;
  P - one number;
  R - return, not console.log(), a result depending on whether the argument is odd or even
  E - (5),45;
      (4),32;
      (8),64;
      (1),9;
  P - first check for whether the argument is odd or even,
      if even, return argument * 8;
      else return argument * 9;
*******************/

function simpleMultiplication(number) {
    // your code........
  return (number % 2 === 0) ? (number * 8) : (number * 9);
}