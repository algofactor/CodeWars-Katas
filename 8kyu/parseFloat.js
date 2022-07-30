function parseF(s) {
    const res = parseFloat(s);
    
    if(res || res == 0) return res;
    return null;
}