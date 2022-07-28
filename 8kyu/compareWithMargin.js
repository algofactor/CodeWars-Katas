/***************************
  Challenge: to compare given parameters with a margin and return a value;
  
  two or three parameters can be given;
  return a value that denotes the status of a compared to b;
  ex => closeCompare(4, 5), -1;
        closeCompare(5, 5), 0;
        closeCompare(1.99, 5, 3), -1
        
  my approach: check if the margin is given and if it meets the close condition using the Math.abs method;
               if it does return zero, else check if a is greater, less or equal to b and return the correct value;
***************************/

function closeCompare(a, b, margin){
    return (margin && margin >= Math.abs(a - b)) ? 0 : (a > b) ? 1 : (a < b) ? -1 : 0;
    
    //   if(margin){
    //     return margin >= Math.abs(a-b) ? 0 : (a > b) ? 1 : -1;
    //   }else{
    //     return (a > b) ? 1 : (a < b) ? -1 : 0;
    //   }
}  