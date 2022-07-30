/******************************
  Challenge: to properly implement conditional statements
  
  one parameter
  return true or false depemding on the outcome;
  ex. => trueOrFalse(a>b),"false";
         trueOrFalse(a===b),"false";
         trueOrFalse(b!==c),"true";
         trueOrFalse(a!==c),"false";
         
  pseudo code: use a tenary, or if...else statement to check if the parameter is truthy or falsy;
******************************/

function trueOrFalse(val){
  return val ? 'true' : 'false';
}