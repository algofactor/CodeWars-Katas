// PSEUDO CODE
// using a loop, and the Math.pow method,

function powersOfTwo(n){
    const result = [];
    
    for(let i = 0; i <= n; i++){
      result.push( Math.pow(2, i) );
    }
    
    return result;
}