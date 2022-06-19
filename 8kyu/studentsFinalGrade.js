/********************
  Challenge: To return what a student's final grade should be
  
   P - two numbers;
   R - return , the right grade as a number as well;
   E - (100, 12), 100;
       (85, 5), 90;
       
   P - use a conditonal with the or logical operator to determine what the grade will be;
        return the result after determining.
********************/

function finalGrade (exam, projects) {
    //   if(exam > 90 || projects > 10){
    //     return 100;
    //   }else if(exam > 75 && projects >= 5){
    //     return 90;
    //   }else if(exam > 50 && projects >= 2){
    //     return 75;
    //   }else {
    //     return 0;
    //   }
    
      return (exam > 90 || projects > 10) ? 100 : (exam > 75 && projects >= 5) ? 90 : (exam > 50 && projects >= 2) ? 75 : 0; 
}