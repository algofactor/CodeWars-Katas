function isPythagoreanTriple(i) {
    i = i.sort((a,z) => a - z);
    let a = i[0], 
        b = i[1],
        c = i[2];
    
    return (c**2 == (a**2 + b**2)) ? true : false;
}