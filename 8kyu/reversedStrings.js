// This kata requires a function to take a string as an argument and reverse the string
// This will be done by splitting the string and converting into an array first by calling the split method on the string,
//    then the array will then be reversed using the reverse method, and finally,
//        the reversed array is then joined to form a string by calling the join method.

// The effect should be like what is shown below
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str.split('').reverse().join('');
}

// Alternative solution using an arrow function
// let solution = str => str.split('').reverse().join('');