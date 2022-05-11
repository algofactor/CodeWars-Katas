// Challenge: To count from 1 to a number specified and return each number in an array
// To do this, an empty array is declared within the function, and a loop is set up to push each number into the declared array

function monkeyCount(n) {
    let arr = [];
    for(let i = 1; i <= n; i++ ){
      arr.push(i);
    }
    
    return arr
}