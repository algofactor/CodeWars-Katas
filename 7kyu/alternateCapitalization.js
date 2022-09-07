// Parameter => always a single string, all lowercase with no spaces in it.
// Return => an array should be returned, the array should have two elements within it. both elements are strings. for the first element, all characters with an even index will be capitalised while the rest are left in their original case. as for the second element, the character at the odd indexes are capitalised while the others are left in their original cases.
// Example => capitalize("abcdef") = ['AbCdEf', 'aBcDeF'], capitalize("daniel") = ['DaNiEl', 'dAnIeL'], capitalize("shark") = ['ShArK', 'sHaRk']
// Pseudocode => first split the string into an array, then create two variables, the first variable calls the map method on the split string and capitalises each even-indexed element and leaves the other in their original cases while the second variable calls the map method on the same split string and then capitalises the odd-indexed elements in this case while leaving the even ones in their original cases, after which each mapped result is joined and concatenated into a single array, then return the result

capitalize = (s) => {
    const split = s.split('');

    const evens = split.map((e,i) => !(i%2) ? e.toUpperCase() : e).join('');

    const odds = split.map((e,i) => (i%2) ? e.toUpperCase() : e).join('');

    console.log([evens, odds]);
}

capitalize("abcdef")