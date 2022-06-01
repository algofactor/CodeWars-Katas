/*******************
  PREP
  Challenge: To return the total rent costs which varies depending on the number of days of renting;
  P - one number as param;
  R - return, not console.log(), the total rent costs for the days specified
  E - (3), 100;
      (4), 140;
      (5), 180;
  P - obtain the total cost without a discount;
      use conditonals to check thenumber of days rented, and implement the discount based on that,
      return the new total obtained;
*******************/

function rentalCarCost(d) {
    // Your solution here
    const total = d * 40;
    if(d >= 7){
      return total - 50;
    }else if(d >= 3){
      return total - 20;
    }else {
      return total;
    }
    //   return (d >= 7) ? (total - 50) : (d >= 3) ? (total - 20) : total;
}