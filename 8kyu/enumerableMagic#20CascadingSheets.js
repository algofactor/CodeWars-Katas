/***************************
  Challenge: to create cascading subsets of an array;
  
  one array as a parameter,
  return another array which is a cascading subset of the original array;
  ex. => (lst, 1), [[3], [5], [8], [13]];
         (lst, 2), [[3,5], [5,8], [8,13]];
         (lst, 3), [[3,5,8], [5,8,13]];
         ([], 3), [];
         
  my approach: call the map method on the array,
               iterate through and for each element, slice through the original array,
               ...and then create a new subset from the index of that element to the required stop
***************************/

function eachCons(array, n) {
    let newArr = array.map((e,i) => array.slice(i, i+n));
    let newArrFilter = newArr.filter(e => e.length == n);
    return newArrFilter;
}