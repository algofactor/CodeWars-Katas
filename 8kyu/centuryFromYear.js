/********
PREP
Challenge: To return what century a given year is.

P - number, specifying the year
R - return, not console.log(), the century
E - if year = 89, century = 1,
    if year = 2000, century = 20,
    if year === 1601, century = 17.

P - using a conditional within the function to check for the mosulus/remainder status,
    if year % 100 === 0, then it's century = year/100, else it's (year/100) + 1;  
    
*********/

function century(year){
    let century = year/100;
    if((year % 100) === 0){
        return Math.floor(century);
    }else {
      return Math.ceil(century);
    }
  
    //   return (year % 100 === 0) ? Math.floor(year/100) : Math.ceil(year/100);
}