// Challenge: To use a function to check if a string passed into the function as the first parameter ends with the argument passed in as a second parameter
// To solve this, we need to call an endsWith method on the str parameter, this runs the check and return a boolean value of true or false
// For example:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return str.endsWith(ending)
}
 
// Alternative Solution using a function expression with an arrow function, but with relatively the same instructions
// const solution = (str, ending) => str.endsWith(ending);