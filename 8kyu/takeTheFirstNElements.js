/************************
  Challenge: to take out the first n elements of an array;
  
  two parameters, one array and one number;
  return a sliced/filtered form of the original array;
  ex. => ([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2];
  
  my approach: one method is to filter through the array for those values with indexes below the given number;
               another method is using the slice method on the original array;
               splice could also be used.
************************/

function take(arr, n) {
    return arr.filter((e,i) => i < n);
    //   return arr.slice(0, n);
    //   return arr.splice(0, n);  
}