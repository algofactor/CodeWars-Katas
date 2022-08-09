function twoHighest(arr) {
    let res = new Set(arr);
    let newArr = [];
    for(const key of res){
      newArr.push(key);
    }
    
    return newArr.sort((a,z) => z-a).slice(0,2);
}