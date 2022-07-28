/*************************
  Challenge: to create a tip calculator
  
  two parameters, one for the bill, the other for the service quality;
  return a rounded up value of what the tip will be;
  ex. => calculateTip(20, "Excellent"), 4;
         calculateTip(26.95, "good"), 3;
         
  my approach: use an object with properties to tie a service quality to the tip;
               return the result that is obtained by accessing the object property;
*************************/

function calculateTip(amount, rating) {
    const tipCalc = {
      terrible: Math.ceil(amount * 0),
      poor: Math.ceil(amount * 0.05),
      good: Math.ceil(amount * 0.10),
      great: Math.ceil(amount * 0.15),
      excellent: Math.ceil(amount * (0.20))
    }
    
    return tipCalc.hasOwnProperty(rating.toLowerCase()) ? tipCalc[rating.toLowerCase()] : 'Rating not recognised';
}