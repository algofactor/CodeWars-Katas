function howManySmaller(arr,n){
    return arr.map(e => Number(e.toFixed(2))).filter(e => e < n).length;
  }  