/**********************
  Challenge: to use a class to return the ball type when a the ball type property is requested
  
  parameter is a class with ballType as it's parameter/property
  return either regular or super depending on the balltpype specified
  ex. => new Ball().ballType, "regular";
         new Ball("super").ballType, "super";
         
  my approach: use the this syntax to return the  ballType and if there's none passed in as an argument, then return 'regular';
**********************/

var Ball = function(ballType) {
  // your code goes here
  this.ballType = ballType || 'regular';
};