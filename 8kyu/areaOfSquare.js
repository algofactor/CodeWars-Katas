// Challenge: to obtain the area of a red square from the given length of an arc

// Parameter: a number which is the length of the arc;
// Return: a number which is the area of the square;
// Example: squareArea(2), 1.62;  squareArea(0), 0; squareArea(14.05), 80
// PseudoCode: to get the length of one side of the square, multiply the value given by 2 and divide by PI; then sqaure the vale and return

const squareArea = A => {
    const r = (A * 2)/Math.PI;
    const res = (r*r).toFixed(2);
    
    return Number(res);
}