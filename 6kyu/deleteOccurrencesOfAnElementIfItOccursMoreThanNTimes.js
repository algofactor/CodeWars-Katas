/*
  Two parameters: one array of numbers, a number denoting the number of times
  Return a new array with each element accuring not more than the specified number of times without changing the order
  Example: ([20,37,20,21], 1) => [20,37,21];
           ([1,1,3,3,7,2,2,2,2], 3) => [1, 1, 3, 3, 7, 2, 2, 2];
  Psuedocode: use a loop to push each value of the original array to the new array,
              in each iteration, check if the number has exceeded the number of times
      
*/

function deleteNth(arr, n) {
  let res = [];
  for (const num of arr) {
    if (res.filter((e) => e == num).length < n) res.push(num);
  }

  return res;
}
