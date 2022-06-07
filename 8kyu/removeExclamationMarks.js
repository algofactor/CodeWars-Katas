/**************************
  PREP
  Challenge: To remove exclamation marks from a string;
  P - one string;
  R - return, not console.log(), the string without exclamation marks;
  E - ("Hello World!"), "Hello World";
      ("Hello! World!"), "Hello World";
  P - split the string using those exclamation marks,
      then join the strings as a single result;
**************************/

function removeExclamationMarks(s) {
    return s.split('!').join('');
}