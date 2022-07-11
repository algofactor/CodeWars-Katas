/*************************
  Challenge: to run either of two functions depending on the truthy status of a boolean parameter;
  
  three parameters, one boolean, two functions;
  return a function depending on what the boolean value gives;
  
  
  use a conditonal, if truthy, run function 1, else function 2;
*************************/

function _if(bool, func1, func2) {
    return bool ? func1() : func2();
}