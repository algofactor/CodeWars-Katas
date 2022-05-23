/*************
  PREP
  Challenge: to return the multiplication table for a number with each set on a new line;
  
  P - strictly a number
  R - return, not console.log(), the multiplication table oragnised per line
  E - for a given number 5, return: 
      1 * 5 = 5
      2 * 5 = 10
      3 * 5 = 15
      4 * 5 = 20
      5 * 5 = 25
      6 * 5 = 30
      7 * 5 = 35
      8 * 5 = 40
      9 * 5 = 45
      10 * 5 = 50
      
  P - within the function, use a loop that upon each iteration, it returns a set of results, so each new iteration results shows on another line;
      another alternative is to use an array of the integers, then call the map function and then join after.
*************/
// function multiTable(number) {
//   let result = ''
//   for(let i = 1; i <= 10; i++){
//     result +=  `${i} * ${number} = ${i*number}\n`
//   }
//   return result.slice(0, -1);
// }


function multiTable(number) {
  
    let integerArr = [1,2,3,4,5,6,7,8,9,10];
    const timesTableArr = integerArr.map( e => `${e} * ${number} = ${e*number}`);
    
    return timesTableArr.join('\n')
}