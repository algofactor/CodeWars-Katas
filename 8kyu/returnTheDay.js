/*************************
  CHallenge: to return the weekday depending on the day's number;
  
  parameter is a number;
  return a string specifying what day of the week it is;
  ex. => whatday(1),'Sunday';
         whatday(2), 'Monday';
         (whatday(20),  'Wrong, please enter a number between 1 and 7';
         
  my approach: use an array to store the days of the week;
               access the elements of the array using the given number less one as the index;
*************************/

function whatday(num) { 
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}