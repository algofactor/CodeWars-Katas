/****************
  PREP
  Challenge: To check how many blank pages will be needed to complete a task, if the parameters are greater than zero;
  P - numbers
  R - return, not console.log(), the total number of pages required
  E - n = 5, m = 5: 25
      n = -5, m = 5:  0
  P - first, check if params are less than zero, return zero if that's the case;
      else, return the product of both parameters;
****************/

function paperwork(n, m) {
    if(n < 0 || m < 0) return 0;
    return n*m;
    
  //   return (n < 0 || m < 0) ? 0 : n*m
}