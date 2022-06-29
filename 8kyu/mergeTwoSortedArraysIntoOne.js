/******************
  PREP
  Challenge: Merge two sorted arrays into one;
  
  P - two arrays;
  R - return, one array that contains the combined arrays, without any values being repeated;
  E - ([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8];
      ([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10];
      ([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12];
      
  P - use the concat method to join both arrays together;
      to avoid repititions, filter through the second array for only the values that are exclusive of the first array,
      then join as required;
******************/

function mergeArrays(arr1, arr2) {
    const filtered = arr2.filter(e => !arr1.includes(e));
    
    return arr1.concat(filtered).sort((a,z) => a - z)
}