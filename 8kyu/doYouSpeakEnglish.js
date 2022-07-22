/*******************************
  Challenge: to find out if a sentence contains the word 'english';
  
  parameter is a string;
  return true or false if sentence contains the word english;
  ex. =>  spEng("english"), true;
          spEng("egnlish"), false;
          
  my approach: turn sentence to lowercase,
               use the includes method to check if sentence contains word
*******************************/

function spEng(sentence){
    const lowCase = sentence.toLowerCase();
    return lowCase.includes('english');
}