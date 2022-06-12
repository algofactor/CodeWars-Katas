/********************
  Challenge: To convert and return the cockroach speed in cm/s;
  
  P - one number;
  R - return, not console.log;
  E - (1.08), 30;
      (1.09), 30;
      (0), 0;
  P - carry out the necessary conversion into cm/s;
      call the math-floor method on the result and 
      return the result as the answer;
********************/

function cockroachSpeed(s) {
    //Good Luck!
    const result = s * (100000/3600);
    return Math.floor(result);
    //   return Math.floor(s * (100000/3600))
}