// Parameter: Three numbers are given as parameters, and these numbers must be greater than 0;
// Return: true or false depending on whether a triangle can be constructed using these given values
// Example: isTriangle(1,2,2), true; isTriangle(7,2,2), false;
// PseudoCode: sort the values and if the first two values are not greater than or equal to the last value, then a triangle cannot be formed, so return false, else return true;

const isTriangle = (a,b,c) => {
    let arr = [a,b,c].sort((a,z) => a - z);
    
    return arr[0] + arr[1] > arr[2] ? true : false;
}