/*
  Two parameters: an array of numbers, a target number
  Return an array of the indexes of two numbers that add up to the 
  Example:([1,2,3],          4) => [0,2]
          ([1234,5678,9012], 14690 => [1,2]
          ([2,2,3],          4) => [0,1])
  Psuedo code: map through the numbers array,
               return the index of the current num and the second number that results in the sum
               only return undefined if the current num does not meet the requirement or if the current num is also result of the difference
               filter for any falsy values and return one of the truthy values
*/

function twoSum(nums, tget) {
  const res = nums
    .map((n, i, a) => {
      const diff = tget - n;
      if ((n === diff && i == a.lastIndexOf(n)) || a.lastIndexOf(diff) == -1)
        return undefined;
      return [i, a.lastIndexOf(diff)];
    })
    .filter((n) => n);

  return res[0];
}
