function sumSquares(array) {
    return array.reduce((acc,c) => acc + c**2, 0);
}