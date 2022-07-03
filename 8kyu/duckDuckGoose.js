/*******************************
  Challenge: To play duck, duck, goose on the elements  in an array;
  
  one array,
  return what element the game ends on,
  Ex. (players, 1),  "a";
      (players, 3),  "c";
      (players, 20), "z";
      (players, 28), "g";
      
  My approach: the index to return will be [goose - 1] % arr.length;
*******************************/

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name;
}