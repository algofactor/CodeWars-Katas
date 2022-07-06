/***********************
  Challenge: convert the given argument into a binary form after addition;
  
  an array is the given parameter
  return a string of binary numbers
  ex. ([1,2]), "11";
      ([1,2,3,4,5]), "1111";
      ([null]), "0";
      ([true,true,false,15]),"1111";
      
  my approach: filter through the array for only numbers,
               add up all the numbers using the reduce method,
               call the toString method using 2 as the argument for the radix parameter;
**********************/

function arr2bin(arr){
    // show me the code
    const nums = arr.filter(e => typeof e == 'number');
    return nums.length ? nums.reduce((acc,c)=> +acc + +c).toString(2) : '0';
}