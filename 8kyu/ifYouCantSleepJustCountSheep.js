/**************************
  PREP
  Challenge: To return a string with a murmur depending on the magnitude of the number given;
  P - one number;
  R - return what a string with a murmur;
  E - (0), "";
      (1), "1 sheep...";
      (3), "1 sheep...2 sheep...3 sheep...";
  P - create a varible to store the result;
      use a loop to run iterate num times;
      for each iteration, concatenate a specific string;
      return the result after the iterations have been completed;
**************************/

var countSheep = function (num){
    //your code here
    let murmur = "";
    for(let i = 1; i <= num; i++){
      murmur += `${i} sheep...`;
    }
    return murmur
}