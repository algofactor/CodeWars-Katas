/******************************
  Challenge: to complete the duty free challenge;
  
  three numbers as parameters;
  return the number of whiskey bottles that can be bought duty free;
  ex. => (12, 50, 1000), 166;
         (17, 10, 500), 294;
         (24, 35, 3000), 357;
 
  my approach, first calculate the amount that can be saved on each bottle,
               then divide the total holday amount by that value;
               return the result;
******************************/

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * (discount/100)))
}