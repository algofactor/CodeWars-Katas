/*
// PREP
Parameter is a single array of numbers (0s and 1s);
Return a reversed form of 8bit segments of the original array
Example: [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0] => [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
         [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1] => [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
Psuedocode: use a loop to add 8bit segments to a new array ,
            reverse the resulting array,
            join the result and split it into individual numbers,
            use the map method to convert each element to a number;
*/

function dataReverse(data) {
  // Your code here
  let arr = [];
  for (let i = 0; i < data.length / 8; i++) {
    const segment = data.slice(i * 8, (i + 1) * 8).join("");
    arr.push(segment);
  }

  const reversed = arr
    .reverse()
    .join("")
    .split("")
    .map((num) => Number(num));
  return reversed;
}
