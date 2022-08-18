function bigToSmall(arr){
    //coding here...
    let arr1 = [];
    arr.forEach(e => arr1 = arr1.concat(e));
    return arr1.sort((a,z) => z - a).join('>');
}