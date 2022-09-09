// Parameters: number which specifies a row on the triangle of prime numbers
// Return: a number which is the result of the sum of all numbers on that particular row of the triangle
// Example: 
// nth row 1 -> returns 1
// nth row 2 ->  3+5 -> returns 8
// Pseudo code: on each row, the sum of all the numbers on that row is the cube product of the row number, return the cube of the given number

const rowSumOddNumbers = n => Math.pow(n, 3)