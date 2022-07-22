/*****************************
  Challenge: to freeze an already created object
  
  my approach:
  clear out the redeclared object within the code, then
  use the object prototype freeze method and pass the already declared object as parameter.
*****************************/

// mark the MrFreeze object instance as frozen
// const MrFreeze = {};
Object.freeze(MrFreeze);