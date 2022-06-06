/**************************
  PREP
  Challenge: To find out if a number is divisible by two integers;
  P - three numbers;
  R - return a boolean value, true or false;
  E - (-12, 2, -6), true;
      (-12, 2, -5), false;
      (45, 1, 6), false;
      (15, -5, 3), true;
  P - check if the number is divisible by the product of the other two parameters;
      return true or false;
**************************/

function isDivideBy(number, a, b) {
    // good luck
    return (number%a === 0 && number%b === 0) ? true : false;
}