function comp(arr1, arr2){
    if(!arr1 || !arr2) return false;
    
    arr1 = arr1.sort((a,z) => a - z);
    arr2 = arr2.sort((a,z) => a - z);  
    return arr2.every((e, i) => e === arr1[i]**2);
  }