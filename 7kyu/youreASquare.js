var isSquare = function(n){
    const m = Math.round(Math.sqrt(n));
    return m * m == n;

    // or 
    // const m = Math.sqrt(n);
    //   return m >= 0 && Number.isInteger(m);
  }