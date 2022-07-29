/*******************************
  Challenge: to remove all exclamation marks from a string excluding the one at the end;
  
  parameter is a string;
  return a string with only one exclamation mark at the end;
  ex. =>  doTest("Hi!", "Hi!");
          doTest("Hi!!!", "Hi!");
          doTest("!Hi", "Hi!");
          doTest("!Hi!", "Hi!");
          doTest("Hi! Hi!", "Hi Hi!");
          doTest("Hi", "Hi!");
          
  psuedo-code: remove all exclamation marks first, then add a new one to the end of the string;
*******************************/

function remove (string) {
    //coding and coding....
    //   while(string.includes('!')){
    //     string = string.replace('!', '')
    //   }
    //   return string + '!';  
    
      return string.split('!').join('') + '!';
    
    //   return string.split('').filter(e => e != '!').join('') + '!';
}