// Parameter: a single array containing multiple string elements(more than 2) in which only one of them is unique. Any of the given string elements could contain spaces.
// Return: the particular unique string element
// Example: findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb' ; findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo' ;
// Pseudocode: call the map method on the given array and for each of the elements in the array, create a new Set for each string in the array, turn the set into an array , sort and then join.. To obtain the result, get the element whose index is the same as it's last index. After, from the result obtained, get the index of this element from the original array and use it to get the unique element then return the result.

const findUniq = arr => {
    // This is to fix up the given array to make it easier to isolate the unique element
    const fixedArr = arr.map(el => [...new Set(el.toLowerCase())].sort().join(''));

    // This is to get the value of the unique element whose index coincides with the same in the original array
    const unique = fixedArr.filter((el,i,a) => a.indexOf(el) === a.lastIndexOf(el))[0];

    // This gets the index of the unique element in order to isolate it from the elements in the given array
    const uniqueIndex = fixedArr.indexOf(unique);

    console.log(arr[uniqueIndex]);
}

findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])