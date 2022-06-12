/*******************************
  Challenge: To check if to set alarm based on whether on vacation and employed, anything else should return false;
  P - two boolean params
  R - return, not console.log(), set alarm status
  E - (true, true),  false;
      (false,true),  false
      (true, false), true
  P - use the falsy and truthy method to check what the params status is,
      if employed is true and vacay is false, should get alarm status of true;
*******************************/

function setAlarm(employed, vacation){
    if(employed && !vacation) return true;
    else return false;
    //   return employed && !vacation ? true : false;
}