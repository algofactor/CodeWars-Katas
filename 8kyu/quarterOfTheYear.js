/**************************
  PREP
  Challenge: To return what quarter a month of the year is in
  P - one number;
  R - return what quarter the month is as a number;
  E - (3), 1;
      (8), 3;
      (11), 4;
  P - check what month it is from all 12 months;
      check what quarter of the year it falls into;
      return what quarter it falls into.
**************************/

const quarterOf = (month) => {
    // Your code here
      if(month <= 3){
        return 1;
      }else if(month <= 6){
        return 2;
      }else if(month <= 9){
        return 3;
      }else {
        return 4;
      }
    
    //   return month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1;
}