/*******************
  Challenge: to write a function to check if a string is a palindrome or not?
  
  parameter is a string;
  return true or false;
  ex. => ("a"), true;
         ("Abba"), true;
         ("Madam"), true;
         
  my approach: first convert the given string to lowercase;
               then, call the split method as well;
               reverse the array that is formed;
               join the array after;
               use a condtional to check if the result is the same as the original string;
*******************/

function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}