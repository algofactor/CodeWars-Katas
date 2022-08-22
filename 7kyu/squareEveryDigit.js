function squareDigits(num){
    const str = String(num);
    const res = str.split('').map(e => e**2).join('');
    return Number(res);
}

// function squareDigits(num){
//     const str = String(num);
//     return + str.split('').map(e => e**2).join('');
// }