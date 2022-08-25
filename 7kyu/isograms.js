function isIsogram(str){
    //...
    const lowCase = (str.toLowerCase()).split('');
    const lengths = lowCase.map(e => lowCase.filter((el) => el == e).length);
    return lengths.every(num => num < 2);
}