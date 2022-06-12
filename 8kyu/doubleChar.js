/***********************
  Challenge: To return a string in which each character is repeated once;
  
  P - A string;
  R - return, not console.log();
  E - ("abcd"), "aabbccdd";
      ("Adidas"), "AAddiiddaass";
      ("illuminati"), "iilllluummiinnaattii";
      ("%^&*("), "%%^^&&**((";
      
  P - create a new variable to store the result;
      loop through each character in the string;
      for each character, concatenate the repeated form of that character into the new string variable;
      return the variable after the complete iteration
***********************/

function doubleChar(str) {
    // Your code here
    //   let strRepeated = '';
    //   for(let i = 0; i < str.length; i++){
    //     strRepeated += `${str[i]}${str[i]}`;
    //   }
    //   return strRepeated;
    
    return str.split('').map( e => e = `${e}${e}`).join('');
    
}