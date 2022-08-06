function multiply(n){
    let digits = String(Math.abs(n)).length;
    return n * Math.pow(5, digits);
}