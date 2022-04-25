// Challenge: To build a function that returns an array of numbers in a reversed sequence from a given number
// The arrangement should be for a given number 'n', the array should be [n, n-1, n-2,... 1]. This array of numbers cannot have any value below 1.

// const reverseSeq = n => {
//   return [];
// };

const reverseSeq = n => {
    let newArr = [];
    for(let i = n; i >= 1; i--){
      newArr.push(i);
    }
    return newArr;
};