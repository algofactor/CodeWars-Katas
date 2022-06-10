/****************************
  PREP
  Challenge: To return the grade letter associated with the score average
  P - three numbers
  R - return a string, specifying the required grade;
  E - (100,85,96), 'A';
      (82,85,87), 'B';
      (70,70,70), 'C';
      (58,62,70), 'D';
      (58,59,60), 'F';
      
  P - first, we get the average of all three scores;
      then, we compare it with the corresponding grade options and 
      then, we return the right grade.
****************************/

function getGrade (s1, s2, s3) {
    // Code here
    const ave = (s1+s2+s3)/3;
    
    if(ave>=90){
      return 'A';
    }else if(ave>=80){
      return 'B';
    }else if(ave>=70){
      return 'C';
    }else if(ave>=60){
      return 'D';
    }else {
      return 'F';
    }
}