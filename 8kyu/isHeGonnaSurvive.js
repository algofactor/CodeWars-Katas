/****************
  PREP
  Challenge: To check if an adventurer/hero will survive his battle series against the dragons;
  P - numbers, two parameters 
  R - return, not console.log(), true or false depending on his survival status,
  E - hero(10, 5), true
      hero(7, 4), false
      hero(100, 40), true
      1500, 751), false
      
  P - if the hero is to survive, then his bullets must either be more than or equal to  2 times the number of dragons;
      a conditonal will be used to check if number of bullets is greater than or equal to 2 times the number of dragons;
****************/

function hero(bullets, dragons){
    if(bullets >= 2 * dragons) {
      return true
    }else {
    return false;
    }
  
  //   return (bullets >= dragons*2) ? true : false;
}