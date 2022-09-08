// Parameters: Two arrays, all elements in the second array (might contain more than one number) should be included in the first array and both arrays are arrays of numbers
// Return: An array , in this array, the first given array is filtered to exclude all the elements in the second array
// Example: arrayDiff([1,2],[1]) == [2]; arrayDiff([1,2,2,2,3],[2]) == [1,3]; arrayDiff([1,2,3,4,5],[2,3]) == [1,4,5]
// Pseudocode: Filter through array a, and get all elements/numbers that are not included in array b. Return the result obtained

const arrayDiff = (a,b) => {
    return a.filter( el => !(b.includes(el)) );
}