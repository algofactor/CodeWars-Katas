// PSEUDO CODE
// split the string, then filter through for the right results,
// return the length of the filter results or return zero if it's falsy in any case
function strCount(str, letter){  
    //code here
    return str.split('').filter(e => e === letter).length || 0;
    //   return str.split(letter).length - 1;   
}