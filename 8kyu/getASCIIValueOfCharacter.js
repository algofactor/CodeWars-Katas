/*****************************
  Challenge: to return the ASCII value of a string character;
  
  one parameter;
  return the ASCII value as a number;
  ex. =>  getASCII('A'),65;
          getASCII(' '),32;
          getASCII('!'),33;
          
  pseudo code: charCodeAt method should work for this;
*****************************/

function getASCII(c){
    return c.charCodeAt(0);
}