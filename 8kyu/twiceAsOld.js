/**************************
  Challenge: Find how many years ago or in how many years time will a father be twice his son's age;
  
  P - two numbers; 
  R - return a number as result;
  E - (36,7) , 22;
      (55,30) , 5;
      (42,21) , 0;
      (29,0) , 29;
  P - get the difference between the son's age times two and the father's age;
      call the Math.abs method on the result and return it;
**************************/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    return Math.abs( (sonYearsOld*2) - dadYearsOld );
}