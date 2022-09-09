// Parameter: an array of zeros and ones which when joined together make up a number in binary form. The array has varying lengths
// Return: an integer which is the equivalent result of the binary representation
// Example: Testing: [0, 0, 0, 1] ==> 1; Testing: [0, 0, 1, 0] ==> 2; Testing: [0, 1, 0, 1] ==> 5
// Pseudocode: Reverse the given array, then map through the array and for each number, multiply by 10 to the power of the current index, then call the reduce method on the array formed to obtain the final result as an integer and then return or use the parseInt method while passing the joined array and 2 as parameters

const binaryArrayToNumber = arr => {
    return arr.reverse().map((el, i) => el * Math.pow(2, i)).reduce((acc,c) => +acc + c);

    // parseInt(arr, 2)
}