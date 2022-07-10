/***********************
  Challenge:n return the charCode using the ASCII value given;
  
  parameter is a number;
  return the character in string format;
  ex. => getChar(55),'7';
         getChar(56),'8';
         getChar(60),'<';
         
 my approach: call the String.fromCharCode method passing the given charcode as an argument;
              return the result;
***********************/

function getChar(c){
    return String.fromCharCode(c);
}