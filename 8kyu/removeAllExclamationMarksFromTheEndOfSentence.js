/****************************
  Challenge: to remove all exclamation marks from a given string;
  
  parameter is a string containing exclamation marks;
  return a string without exclamation marks;
  ex. =>  doTest("Hi!", "Hi")
          doTest("Hi!!!", "Hi")
          doTest("!Hi", "!Hi")
          doTest("!Hi!", "!Hi")
          doTest("Hi! Hi!", "Hi! Hi")
          doTest("Hi", "Hi")
          
  my approach: using tn array approach, first split the string;
               then reverse the elements and obtain the index of first non-exclamation-mark element from the array;
               then call the slice method on the string and start from index 0 to index (string.length - index obtained)
****************************/

function remove (string) { 
    const i = string.split('').reverse().findIndex(e => e != '!');
    return string.slice(0, (string.length - i));
}