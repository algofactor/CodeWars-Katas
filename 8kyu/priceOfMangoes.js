/*****************************
  Challenge: to calculate the price for the mangoes;
  
  two parameters are given;
  return the full price of mangoes;
  ex. => mango(3, 3), 6;
         mango(9, 5), 30;
         
  pseudo code: obtain the real number of mangoes without the offer, 
               then multiply by the price;
               
****************************/

function mango(q, p){
    const rNum = q -  Math.floor(q/3);
    return rNum * p;
}