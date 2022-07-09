/************************
  Challenge: to return the floor number in the european format
  
  one number as parameter,
  return the european format of the given floor number,
  ex. => getRealFloor(1), 0;
         getRealFloor(5), 4;
         getRealFloor(15), 13;
         
  my appraoch: use a conditional and return the right european floor number;
************************/

function getRealFloor(n) {
    if(!n || n == 1) return 0;
    if(n > 1 && n < 13) return n - 1;
    if(n > 13) return n - 2;
    return n;
}