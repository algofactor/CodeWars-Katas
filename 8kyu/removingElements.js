/**********
PREP
Challenge: To remove every second element from an array, in other words remove every even-numbered element or every odd-indexed element

P -  strictly an array,
R - return, not console.log, an array after filtering or removing said elements
E - ['Hello', 'Goodbye', 'Hello Again']), returns ['Hello', 'Hello Again'];
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), returns [1, 3, 5, 7, 9];
    [[1, 2]]), returns [[1, 2]]
P - filter through the array for every element except the odd numbered elements
**********/

function removeEveryOther(arr){
  //   through filtering
  return arr.filter( (e, i) => i%2 === 0);
}