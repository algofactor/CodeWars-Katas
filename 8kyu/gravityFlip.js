/*******************
  Challenge: to return an array that shows the gravity-flipped format
  
  parameter is an array;
  return the flipped array format
  ex. => flip('R', [3, 2, 1, 2]), [1, 2, 2, 3];
         flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1];
         
  my approach: if d == R, sort the array and then return the sorted format;
               if d == L, reverse the sorted form of the arraya and return it
*******************/

const flip=(d, a)=>{
    return d =='R' ? a.sort((a,z) => a - z) : a.sort((a,z) => a - z).reverse();
}