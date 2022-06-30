/***************************
  Challenge: To add the length of each string element in the array
  
  an array as parameter;
  return each element tied to its length;
  Ex. ('apple ban'),["apple 5", "ban 3"];
      ('you will win'),["you 3", "will 4", "win 3"];
      
  My approach: split the string into an array,
               map through the array,
               use template literals to join the elements and it's length;
               return the  final results;
***************************/

function addLength(str) {
    //start-here
    return str.split(' ').map((e,i) => `${e} ${e.length}`);
}