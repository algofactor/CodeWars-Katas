/*******************
  PREP
  Challenge: To return a personalised greeting to the individual;
  P - two strings;
  R - return, not console.log(), the personalised greeting
  E - ('Daniel', 'Daniel'), 'Hello boss';
      ('Greg', 'Daniel'), 'Hello guest';
  P - use a condtitional to check if name === owner;
      depending on the result, return the appropriate greeting;
*******************/

function greet (name, owner) {
    // Add code here
    return name === owner ? `Hello boss` : `Hello guest`;
}