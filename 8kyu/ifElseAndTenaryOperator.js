/**********************
  Challenge: to set a conditonal using the tenary and return the right price depending on the number of customers that want to purchase hotdogs;
  
  parameter is a number specifying the number of customers to buy hotdogs;
  return the total price which is dependent on the number of customers;
  ex. => saleHotdogs(1),100;
         saleHotdogs(5),475;
         saleHotdogs(100),9000;
         
  my approach: using a conditonal, depending on the condition, return n times the price of the hotdogs at that condition;
              
**********************/

function saleHotdogs(n){
    return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}