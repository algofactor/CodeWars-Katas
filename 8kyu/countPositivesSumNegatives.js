// This is the challenge solution as I understand it: First to check if input has a non-falsy value or has length,
// If it fulfils the conditions of it being falsy, it returns an empty array,
// If it isn't falsy, meaning that it is truthy, then it goes ahead to filter the array for positives, return the length of the positives,
// for the same array, it filters for negatives and then returns the sum of all negatives
// Then it returns the results as a new array

// Example case: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
function countPositivesSumNegatives(input){
    if(!input || !input.length){
      return [];
    }else {
      let positives = input.filter(num => num > 0);
      let positivesLength = positives.length;
      
      let negatives = input.filter(num => num < 0)
      let sumOfNegatives = negatives.reduce( (acc,c) => acc + c, 0 )
      
      return [positivesLength, sumOfNegatives];
    }
}
  
  
// The shorter solution checks if input and input.length are truthy, if they are, it filters throught the array input for the postives and negatives
// If any of the conditions are falsy, then it returns an empty array,
// ?for the filtered positives and negatives, it returns the length of the positives and sum of all negatives as an array

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(positives => positives > 0).length, input.filter(negatives => negatives < 0).reduce( (acc, c) => acc + c, 0 )] : []
// }