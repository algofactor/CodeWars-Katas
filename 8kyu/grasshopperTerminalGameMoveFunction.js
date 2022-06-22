/************************
  PREP
  Challenge: To return the new position of a player after he moves;
  
  P - two numbers;
  R - return, the new position;
  E - (0, 4), 8;
      (3, 6), 15;
      (2, 5), 12;
      
  P - add the first parameter to double the second parameter.
************************/

function move (position, roll) {
    // return the new position
    return position + (roll*2);
}