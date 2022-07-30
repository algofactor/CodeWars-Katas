/******************************
  Challenge: to develop a grader function;
  
  single parameter;
  return a string denoting the grade;
  ex. => grader(0.7), "C";
         grader(0.9), "A";
         grader(0.6), "D";
         
  pusedo code: use tenary or if...else statements
********************************/

function grader(s) {
    if(s>1 || s<0.6) return 'F';
    if(s>=0.9) return 'A';
    if(s>=0.8) return 'B';
    if(s>=0.7) return 'C';
    if(s>=0.6) return 'D';
}