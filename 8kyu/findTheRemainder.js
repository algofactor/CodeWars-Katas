/****************************
  Challenge: to find the remainder from dividing two numbers
  
  parameters are two numbers;
  return the remainder from their division;
  ex. =>  (17,5), 2;
          
  my approach: use a conditonal to check which number is greater and then divide by the smaller number;
               use the modulo operator to obtain the remainder from the division;

****************************/

function remainder(n, m){
    return n > m ? (n % m) : (m % n);
}