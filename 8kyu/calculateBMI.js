/****************
  PREP
  Challenge: To calculate the BMI and return the status;
  P - numbers, two parameters 
  R - return, not console.log(), BMI status,
  
  E - if bmi <= 18.5 return "Underweight"

      if bmi <= 25.0 return "Normal"

      if bmi <= 30.0 return "Overweight"

      if bmi > 30 return "Obese",
      
  P - first calculate the BMI,
      then, check using conditonals, comparing the bmi value with set standards to return the right status;
****************/

function bmi(weight, height) {
    const bmi = weight/Math.pow(height, 2);
    
    if(bmi <= 18.5){
      return 'Underweight';
    }else if(bmi <= 25.0){
      return 'Normal';
    }else if(bmi <= 30.0){
      return 'Overweight';
    }else {
      return 'Obese';
    }
    
    //   return bmi <= 18.5 ? "Underweight" : bmi <= 25.0 ? "Normal" : bmi <= 30.0 ? "Overweight" : "Obese";
}