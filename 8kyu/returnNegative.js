// Challenge: To return the negative form of any given positive number passed into a function, and for  nuegative numbers and zero, return that same number without changing anything
//A condtional can be used to solve this challenge;

function makeNegative(num) {
    if(num > 0) {
        return -num;
    }else {
        return num;
    }
}
  
// Alternative: the code has been refactored into a One-liner using a function expression, a tenary and an arrow function but overall, the same use of conditonals
// const makeNegative = num => num > 0 ? -num : num;