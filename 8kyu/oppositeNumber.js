// Challenge: To use a function to obtain the opposite form of any number (integer or floating).
// For example: 
// 1: -1
// 14: -14
// -34: 34

// Method 1: Using a conditonal that checks if number is greater or less than 0 and then returns the opposite value
// function opposite(number) {
//   //your code here
//   if(number > 0) {
//     return number - (number * 2);
//   }else if(number < 0) {
//     return Math.abs(number);
//   }
// }

// Method 2: Using the Math.abs method alone
function opposite(number) {
  if (number > 0) {
    return -Math.abs(number);
  }else if (number < 0) {
    return Math.abs(number);
  }
}

// Alternative Method 1: Implementing a One-Liner arrow function solution
// const opposite = number => number > 0 ? -Math.abs(number) : Math.abs(number);

// Alternative Method 2: Implementing a One-Liner arrow function solution
// const opposite = number => number > 0 ? (number - (number * 2)) : Math.abs(number);

// I later discovered a clever solution, really simple... I don't know how I didn't think of it.
// const opposite = number => -number