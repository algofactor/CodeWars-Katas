function roundIt(n){
    //coding here...
    const str = n.toString();
    const arr = str.split('.');
    const a = arr[0].length;
    const b = arr[1].length;
    
    return a < b ? Math.ceil(n) : a > b ? Math.floor(n) : Math.round(n);
}