function highAndLow(num){
    const s = num.split(' ').map(e => Number(e)).sort((a,z) => z - a);
    return s[0] + ' ' + s[s.length - 1];
}