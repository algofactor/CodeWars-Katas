function towerBuilder(n) {
    // build here
    let str = '';
    let toPush;
    let arr = [];
    const m = n + (n-1);
    
    for(let i = 0; i < n; i++){
      if(i == 0){
        str += '*';
      }else{
        str += '**';
      }
      
      let o = (m - str.length)/2;
      let fill = new Array(o).fill(' ').join('');
      toPush = fill + str + fill;    
      arr.push(toPush);
    }
    
    console.log(arr)
    return arr;
}