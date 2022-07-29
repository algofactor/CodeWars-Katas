/***************************
  Challenge: to use switch statements to return the number of days in a month;
  
  parameter is a number for the specific month under consideration;
  return, the number of days the month has;
  ex. => howManydays(1),31;
         howManydays(2),28;
         howManydays(3),31;
         howManydays(4),30;
         
  pseudo-code: either a switch, conditional(if...else) or tenary can be used to solve this;
***************************/

function howManydays(month){
    const thOne = [1,3,5,7,8,10,12];
    const thty = [4,6,9,11];
    const twEit = [2];
    
    return thOne.includes(month) ? 31 : thty.includes(month) ? 30 : 28;
    //   var days;
    //   switch (month){
    //     case 2:
    //       days = 28;
    //       break;
    //     case 4:
    //       days = 30;
    //       break;
    //     case 6:
    //       days = 30;
    //       break;
    //     case 9:
    //       days = 30;
    //       break;
    //     case 11:
    //       days = 30;
    //       break;
    //     default:
    //       days = 31;
    //       break;
    //   }
    //   return days;
}