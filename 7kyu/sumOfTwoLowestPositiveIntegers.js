// Parameters => an array on only positive integers. There is going to be a minimum of 4 different number elements
// Return => a number which is the sum of the two lowest numbers of all the given numbers within the array
// Example => [19, 5, 42, 2, 77] = 7, [10, 343445353, 3453445, 3453545353453] = 3453455, [10,9,8,7,11] = 15
// Pseudocode => sort the numbers in the given array in ascending order, add the numbers at indexes 0 and 1 together and return the result ---- or after sorting the array, slice out the first two numbers and call the reduce method on the array to obtain the result, return the result obtained...

const sumTwoSmallestNumbers = numbers => {
    const sorted = numbers.sort((a,z) => a - z);
    return sorted[0] + sorted[1];
}

sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);