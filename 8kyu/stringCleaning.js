function stringClean(s){
    let strNums = '1234567890';
    return s.split('').filter(e => !strNums.includes(e)).join('');
}