/**********
  PREP
  //Challenge:  To return a result after performing a required operation on some parameters
  
  P  -  three params, string as operator, while the other two are numbers
  R  - return, not console.log(), the result,
  E  -  ('+', 4, 7) --> 11
        ('-', 15, 18) --> -3
        ('*', 5, 5) --> 25
        ('/', 49, 7) --> 7
  
  P  - a switch case statement can be used to check for the type of operator is specified in the operator parameter
**********/

function basicOp(operation, value1, value2){
    switch (operation){
        case '+':
          return value1 + value2;
          break;
        
        case '-':
          return value1 - value2;
          break;
        
        case '*':
          return value1 * value2;
          break;
        
        case '/':
          return value1 / value2;
          break;
        default: 
          return 'not a recognised operator';
    }
}