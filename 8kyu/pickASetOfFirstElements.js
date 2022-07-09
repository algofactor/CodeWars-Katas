/************************
  Challenge: To pick a set of first elements
  
  two parameters, one array and one number;
  return the set of elements in array format depending on the number specified by n;
  ex. => (arr), ['a'];
         (arr, 2), ['a', 'b'];
         
  my approach: first if n == 0, return [];
               if not, call the slice method and specify using n, where the slicing should end;
************************/

function first(arr, n) {
    return n === 0 ? [] : arr.slice(0,(n||1));
}