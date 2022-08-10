function cutIt(arr){
    let s = arr.map(e => e.length).sort((a,z) => a - z);
    return arr.map(e => e.slice(0, s[0]));
}