/*******************
  PREP
  Challenge: To check if I.m better than the average person in my class;
  P - two parameters, one array, one number;
  R - return, not console.log(), true or false, if I.m better than the average student in my class
  E - ([2, 3], 5), true;
      ([100, 40, 34, 57, 29, 72, 57, 88], 75), true;
      ([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false
  P - first get the class average, join your score to the class array/add your points to the class total;
      find the average by dividing through with the total number of students,
      compare the average to my points and return true or false depending on the outcome
*******************/

function betterThanAverage(classPoints, yourPoints) {
    const fullClassPoints = classPoints.concat(yourPoints);
    const classTotal = fullClassPoints.reduce( (acc,c) => acc + c, 0 );
    
    const classAverage = classTotal/fullClassPoints.length;
    return yourPoints > classAverage;
}