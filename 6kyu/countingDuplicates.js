function duplicateCount(text){
    //...
    const lowCaseArr = (text.toLowerCase()).split('');
    const chars = [...new Set(lowCaseArr)];
    const res = chars.map((el) => lowCaseArr.filter(item => item == el).length);
    const duplis = res.filter(e => e > 1);
    
    return duplis.length;
}