/***********************
  Challenge: to convert a number in binary to it's decimal format
  
  parameter is a string of numbers in binary format;
  return a number in decimal format;
  ex. => "1",1;
         "0",0;
         "1001001", 73;
         
  my approach: use the parseInt function with the string and 2 as it's paramters
***********************/

function binToDec(bin){
    return parseInt(bin, 2);
}