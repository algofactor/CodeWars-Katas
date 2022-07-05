/***********************
  Challenge: To generate the CsV representation of an array
  
  parameter is an array of arrays;
  aim is to return a string in csv format
  ex. => [                      [ 0, 1, 2, 3, 45 ],
                                [ 10,11,12,13,14 ],
                                [ 20,21,22,23,24 ],
                                [ 30,31,32,33,34 ]
                               ] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34';
                               
  my approach: first join all the child arrays;
               further join the array formed using the \n as the join argument;
               slice the unwanted part of the result out, if any;
               return the final solution.
************************/

function toCsvText(array) {
    // good luck
   const newArr = array.map(e => e.join());
   const evenNewerArr = newArr.join('\n');
   return evenNewerArr;
}