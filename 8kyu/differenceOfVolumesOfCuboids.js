/********************
  Challenge: To return difference between the volumes of two different cuboids;
  
   P - two arrays of numbers;
   R - return , a number regardless of whether postive or negative;
   E - ([3, 2, 5], [1, 4, 4]), 14;
       ([9, 7, 2], [5, 2, 2]), 106;
       ([11, 2, 5], [1, 10, 8]), 30;
       
   P - call the reduce method on both arrays, then based on the result;
       find the difference between them both, and then,
       use the math abosolute method to obtain the right result.
********************/

function findDifference(a, b) {
    //loading...
    const vol1 = a.reduce( (acc,c) => acc * c, 1);
    const vol2 = b.reduce( (acc,c) => acc * c, 1);
    
    return Math.abs(vol1-vol2);
}