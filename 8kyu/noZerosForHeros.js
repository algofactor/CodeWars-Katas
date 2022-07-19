/***********************
  Challenge: to take out all the zero endings from a given number except if the number is just a 0;
  
  parameter is a number;
  return the given number without zero endings;
  ex. => (1450), 145;
         (960000), 96;
         (-1050), -105;
         (0), 0;
         
  my approach: if num is 0, return num as the result;
               otherwise, first convert the num into a string,
               then split the string that is formed into an array;
               reverse the split string and then;
               then get the index of the first element that is non-zero;
               subtact that (index+1) from the length of the split array;
               use that resulting value obtained to slice through the array formed, and
               convert the joined form of the sliced array into a number;
               return the result;
***********************/

function noBoringZeros(n) {
    if(n === 0){
      return 0;
    }else{
      let m = n.toString().split('');
      let o = n.toString().split('').reverse();  
      let i = o.findIndex(e => e != 0);
      let ci = m.length - (i + 1);
      let noZero = m.slice(0, ci + 1);
      let ans = parseInt(noZero.join(''));
      
      return ans;    
    };  
}