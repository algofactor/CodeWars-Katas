// Challenge: To complete the function that takes in a boolean value and returns either a 'Yes' if true or a 'No' if false.

// function boolToWord( bool ){
//   //...
// }

function boolToWord( bool ){
    //...A conditional will be implemented to solve this problem.
    
    if(bool){
      return 'Yes';
    }else {
      return 'No';
    }
}
  
// Alternative One-Liner solution using a tenary and an arrow function
// let boolToWord = bool => bool ? 'Yes' : 'No';