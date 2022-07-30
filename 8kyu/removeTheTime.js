/******************************
  Challenge: to remove the time from a given date/time declaration;
  
  single parameter;
  return a string without the time;
  ex. => shortenToDate("Friday May 2, 9am"), "Friday May 2";
         shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29";
         shortenToDate("Monday December 25, 10pm"), "Monday December 25";
         
  pseudo code: split the string and then slice or pop out the last element of the resulting array,
               then join after to obtain the result;
******************************/


function shortenToDate(longDate) {
    return longDate.split(',').slice(0, -1).join('');
  //   return longDate.split(' ').slice(0, -1).join(' ').slice(0, -1);
  
  //   while(longDate[longDate.length-1] != ','){
  //     longDate = longDate.slice(0,-1);
  //   }
  //   return longDate.slice(0,-1);
}