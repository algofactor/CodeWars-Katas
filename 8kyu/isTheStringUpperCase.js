/***********************
  Challenge: To determine if the string is all uppercase
  
  P - single string; 
  R - return, true or false depending on whether string is all caps;
  E - 'hello I AM DONALD'.isUpperCase(), false;
      'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false;
      'C'.isUpperCase(), true;
      'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true;
      
  P - first split the string into an array;
      then, filter through and get all caps characters,
      if all caps characters after filter is same as original string, then return true, else false;
      or if the length of all caps characters and main string character is same, return true, else false
***********************/

String.prototype.isUpperCase = function() {
    // your code here
    const strArray = this.split('');
    
    const allCapsOrNot = strArray.filter( e => e === e.toUpperCase() ).join('');
    
    return allCapsOrNot == this ? true : false;
    //   return allCapsOrNot.length === this.length ? true : false;
}