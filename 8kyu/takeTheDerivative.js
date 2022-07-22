/************************
  Challenge: to take the derivative from the given parameters;
  
  two numbers parameters are given;
  return the derivative;
  ex. => derive(7,8), "56x^7";
         (5,9), "45x^8";
         
  my approach: using a template string, 
               return the product of both parameters joined together with an exponent
************************/

function derive(c,e) {
    return `${c*e}x^${e-1}`;
}