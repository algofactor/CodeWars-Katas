// Challenge: Using a repeatStr function to repeat a given string a certain number of times
// For example:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let str = '';  
    for(let i = 1; i <= n; i++){
      str += s;
    }
    return str;
}
  
// Alternative: A better solution option using the repeat method on a string
// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// const repeatStr = (n, s) => s.repeat(n);