/*******************
  PREP
  Challenge: To return the total number of points a team gets in a championship;
  P - an array with a string of numbers;
  R - return, not console.log(), the total points won throughout the tournament
  E - ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30;
      ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10;
      ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15;
  P - create a variable to store the totalPoints;
      then, iterate through the array and take out the x and y values from the stringed elements;
      use a conditional to check if the x > y or not and add the required points to the total points;
      all the points could be added together and the result is then returned;
*******************/

function points(games) {
    let totalPoints = 0;
    games.forEach( (e, i) => {
      let x = Number(e[0]);
      let y = Number(e[2]);
      
      if(x<y){
        totalPoints += 0;
      }else if(x === y){
        totalPoints += 1;
      }else {
        totalPoints += 3;
      }
    })
    
    return totalPoints;
}