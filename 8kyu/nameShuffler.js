/**********************
  PREP
  
  P - one string;
  R - return, the names within the string reversed;
  E - ('john McClane'),'McClane john';
  
  P - split the given string using the join method,
      reverse the split string that's now an array,
      then join the array.
      return the result of the joined array.
**********************/

function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ');
}