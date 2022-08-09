var hotpo = function(n){
    if(n == 1) return 0; //Optional Handler to n = 0
    let num = [];
    while(n != 1){
      if(n%2){
        n = (3*n)+1;
        num.push(n);
      }else{
        n = n/2;
        num.push(n);
      }
    }
    
    return num.length;
}