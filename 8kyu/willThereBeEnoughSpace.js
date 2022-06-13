/*********************
  Challenge: To help Bob know if there'll be enough space or not
  
  P - three parameters of numbers;
  R - return a number, 0 or another number specifying the number of passengers he cant take;
  E - (10, 5, 5), 0;
      (100, 60, 50), 10;
      (20, 5, 5), 0;
      
  P - first, get the total of people waiting and people on;
      check if the total is over the cap, if not return 0;
      else, subtract the space cap from that total number of people;
      
      return the result;
  
*********************/

function enough(cap, on, wait) {
    // your code here
    const totalReq = on + wait;
    if(totalReq <= cap) return 0;
    else {
      const cantTake = totalReq - cap;
      return cantTake;   
    }  
}