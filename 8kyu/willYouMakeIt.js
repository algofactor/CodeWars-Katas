/*******************
  PREP
  Challenge: To check if remaining fuel in tank can get us to the next pump;
  P - numbers, three parameters
  R - return, not console.log(), truw or false
  E - (50, 25, 2), true;
      (100, 50, 1), false;
  P - using a conditional, if the mpg * fuelLeft >= distanceToPump, then it should return true, else false;
*******************/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return mpg * fuelLeft >= distanceToPump;
};