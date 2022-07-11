/*********************************
  Challenge: to convert hex values as strings to decimal numbers;
  
  parameter is a string of hex values;
  return a decimal number value of the given parameter;
  ex. => ("1"), 1;
         ("10"), 16;
         ("FF"), 255;
         ("-C"), -12;
         
 my approach: call the parseInt function using two parameeters, the first is the given hex string while the second is;
              the radix that specifies what base use as a reference;
*********************************/

function hexToDec(hexString){
    return parseInt(hexString, 16);
}