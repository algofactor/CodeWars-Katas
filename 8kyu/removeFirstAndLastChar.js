// Challenge: To remove the first and last characters in a given string
// This can be done in two ways which will be shown as follows;


// Method 1: This method is a long and less effective one as there is a lot going on within the code.
// The string is initially splitted into an array and then,
// the pop and shift methods are appled on the array, 
// finally, the array is then joined after the first and last characters have been removed.
// function removeChar(str){
//   let strArr = str.split('');
//   strArr.pop();
//   strArr.shift();
//   return strArr.join('');
// };


// Method 2: This method is the more efficient one as it involves calling a function on the string that perfectly satisfied the purpose;
// This method involves using the substring method with 2 parameters specifying the start index and stop index within the string.
// This bit of code will be written using a One-liner and an arrow function;

const removeChar = str => str.substring(1, str.length - 1);