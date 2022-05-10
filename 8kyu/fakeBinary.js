// Challenge: To turn a string of numbers into binary form
// To do this, the string is intially split, then the map method is called on the array that has been created wiht the condition that numbers below 5 are 0s while all others are 1s

function fakeBin(x){
    let strArr = x.split('')
    let result = strArr.map(num => (num < 5) ? (num = 0) : (num = 1)  );
    return result.join('');
}
  
// Alternative: Writing everything in a single code line
// const fakeBin = x => x.split('').map(n => (n<5) ? 0 : 1).join('');