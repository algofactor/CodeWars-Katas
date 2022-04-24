// To create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
   if(number % 2 === 0){
     return "Even"
   }else {
     return "Odd"
    }
}
  
// Alternative one-liner Solution using arrow functions
// let even_or_odd = num => (num % 2) === 0 ? 'Even' : 'Odd';