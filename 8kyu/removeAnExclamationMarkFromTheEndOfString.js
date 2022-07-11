/*****************************
  Challenge: to remove an exclamation mark, if any from the end of the string;
  
  parameter is a string;
  return the right string as the result;
  ex. => ("Hi!", "Hi");
         ("Hi!!!", "Hi!!");
         ("Hi! Hi!", "Hi! Hi");
         
  my approach: use a conditional to check if the last elementof the string is an exclamation mark;
               if it is, one method is to split the string, call the pop method and then join the array back together;
                         another method is to call the slice method and take all elements from start to the penultimate element.
               if it isn't just return the string as is;                        
 *****************************/

function remove (string) {
  return string[string.length-1] === '!' ? string.slice(0,-1) : string;
    //   if(string[string.length - 1] === '!'){
    //     let fixed = string.split('')
    //     fixed.pop();
    //     return fixed.join('');
    //   }else {
    //     return string;
    //   }
}