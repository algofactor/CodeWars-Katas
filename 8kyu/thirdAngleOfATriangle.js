/****************
  PREP
    Challenge: to find the third angle of a triangle;
  P - two numbers
  R - return the value of the third angle
  E - (30, 60), 90;
      (60, 60), 60;
      (43, 78), 59;
  P - subtract the sum of the two given angles from 180degs, that gives the third angle;
****************/

function otherAngle(a, b) {
    return 180 - (a + b);
}