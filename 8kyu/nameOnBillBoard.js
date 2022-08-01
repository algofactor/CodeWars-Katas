/************************
  challenge:To return the cost of printing a name on the billboard if each character in the name costs 30 pounds;
  
  two parameters of name and price;
  return the total cost;
  ex. => billboard("Jeong-Ho Aristotelis"), 600;
         billboard("Abishai Charalampos"), 570;
         billboard("Werner Vígi",15), 165;
         billboard("Hjalmar Liupold",40), 600;
         
  pseudo code: use the Math.imul method to solve it; get the total number of characters first;
               or loop through and add the price multiple times to obtain the result;
************************/

function billboard(name, price = 30){
    //   return Math.imul(name.length, price);
    
    let count = 1;
    let cost  = 0;
    while(count <= name.length){
      cost += price;
      count++;
    }
    return cost;
} 