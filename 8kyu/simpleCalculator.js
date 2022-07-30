/****************************
  Challenge: to create a simple calculator
  
  three parameters are given;
  return the right result;
  ex. => calculator(1,2,"+"), 3, "calculate";
         calculator(3,5,"*"), 15, "calculate";
         calculator(6,2,"/"), 3, "calculate";
         calculator(6,2,"$"), "unknown value", "calculate";
         
  pseudo code: use a switch case or tenary or even an object to solve,
               first check if the result is a number before returning a result;
*****************************/

function calculator(a,b,sign){
    const op = {
        '+': a+b,
        '-': a-b,
        '*': a*b,
        '/': a/b
      }
    
    const resStatus = !(isNaN(op[sign]))
    
    if(!(op.hasOwnProperty(sign))) return 'unknown value'  ;
    return resStatus ? op[sign] : 'unknown value';
}