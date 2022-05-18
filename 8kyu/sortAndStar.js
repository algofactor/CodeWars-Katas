// PREP
// array of strings, sort array alphabetically, return first value/string of the array with each character separated by '***'

// P - strictly an array of unarranged strings
// R - return
// E - twoSort( ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] ) = 'b***i***t***c***o***i***n'
// P - first, the array is to be sorted,
//      then, the first string within the array is grabbed,
//      then, the string is split,
//      it is then joined by using '***'

function twoSort(s) {
    let sorted = s.sort();
    return sorted[0].split('').join('***');  
}