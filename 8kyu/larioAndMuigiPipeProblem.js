/****************************
  Challenge: return a fixed list of an array in the right form
  
  parameter is an array that needs to be fixed;
  return the fixed array in the right and completed format;
  ex. => ([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9];
         ([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12];
         ([-1,4]),[-1,0,1,2,3,4];
         ([1,2,3]),[1,2,3];
         
  my approach: loop through the given array,
               and push each required value into a new array;
****************************/

function pipeFix(numbers){
    let fixed = [];
    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
      fixed.push(i);
    }
    
    return fixed;
}