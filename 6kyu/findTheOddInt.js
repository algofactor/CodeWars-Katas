function findOdd(A) {
    //happy coding!
    const el =  [...new Set(A)];
    const count = el.map(e => A.filter(n => n == e).length);
    const indx = count.findIndex(e => e % 2);
    return el[indx];
}