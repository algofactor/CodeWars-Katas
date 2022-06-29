/**********************
  PREP
  Challenge:  check if a given parameter is included within an array

  P - two params, one array and one string/number parameter;
  R - return true or false, if the second parameter is inlcuded in the array,
  E - ([66, 101], 66), true;
      (['t', 'e', 's', 't'], 'e'), true;
  
  P - convert all string values to lowercase, then check if the value is included within the array
**********************/

function check(a,x){
  if(typeof x == 'string') x.toLowerCase();
  
  return a.includes(x);
};