function order(words){
    // ...
    let arr = words.split(' ')
    let ans = [];
    
    for(let i = 1; i <= arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[j].includes(i)) ans.push(arr[j]);
      }
    }
    
    return ans.join(' ');
}