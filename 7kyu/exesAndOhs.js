// Parameters: a single string is given. The string may or may not contain the 'x' and 'o' characters but it is a combination of multiple letters of the alphabet. The characters in the string may have varying case orientations
// Return: a boolean value that is based on if the number of Xes and Os are equal or not, true if equal, false if not. If the string doesnt contain any Xes or Os, it should still return true
// Example: XO("ooxx") => true; XO ("xooxx") => false; XO("ooxXm") => true; XO("zpzpzpp") => true; XO("zzoo") => false
//PseudoCode: convert the string to lowercase, split into an array, filter twice for Xes first and then Os, the check if length of both filtered results are equal. Return.

const XO = str => {
    const lowCaseArr = str.toLowerCase().split('');

    const exes = lowCaseArr.filter(e => e == 'x');
    const ohs = lowCaseArr.filter(e => e == 'o');

    return exes.length === ohs.length;
}