/*********************
  Challenge: To return a message for Alex;
  
  P - one number;
  R - return a message string on whether he's improving or not;
  E - (3),"Keep at it until you get it";
      (11),"Great, now move on to tricks";
      
  P - use a conditional to check if it's above or below 10 and return a message;
  
*********************/

function hoopCount (n) {
    //your code goes here    
   return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}