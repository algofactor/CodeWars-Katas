/******************************
  Challenge: to calculate the chance of pulling a blue marble;
  
  four parameters are given;
  return a float which expresses the probability;
  ex. => guessBlue(5, 5, 2, 3), 0.6;
         guessBlue(5, 7, 4, 3), 0.2;
         guessBlue(12, 18, 4, 6), 0.4;
         
  pseudo code: find the total number of marbles left;
                divide the blues left by the total;
******************************/

function guessBlue(bS, rS, bP, rP) {
    const blueLeft = bS - bP;
    const redLeft = rS - rP;
    const totalLeft = blueLeft + redLeft;
    
    const chance = blueLeft/totalLeft;
    return chance;
}