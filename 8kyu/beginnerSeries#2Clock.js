/**************
  PREP
  Challenge: To return the value of a time given in milliseconds
  
  P - three number parameters
  R - return, not console.log(), the converted value in milliseconds
  E - h = 0
      m = 1
      s = 1

      result = 61000
  P - for each parameter, make the equivalent conversion into milliseconds;
      then add each converted value together;
      return the result.
**************/

function past(h, m, s){
    //#Happy Coding! ^_^
    const milliHours =  h * 3600 * 1000;
    const milliMinutes = m * 60 * 1000;
    const milliSeconds = s * 1000;
    
    const total = milliHours + milliMinutes + milliSeconds;
    return total;
}