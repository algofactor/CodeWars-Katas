/*******************
  Challenge: to make a declaration about Leo's Oscar status
  
  one number as param;
  return, a string declaration;
  ex. => leo(89),"Leo got one already!";
         leo(88),"Leo finally won the oscar! Leo is happy";
         leo(87),"When will you give Leo an Oscar?";
         leo(86),"Not even for Wolf of wallstreet?!";
         
  my approach: using conditionals, tenary or switch statements, set the condition and return the necessary result;
******************/

function leo(oscar){
    if(oscar == 88) return 'Leo finally won the oscar! Leo is happy'
    else if(oscar == 86) return 'Not even for Wolf of wallstreet?!'
    else if(oscar < 88) return 'When will you give Leo an Oscar?'
    else return 'Leo got one already!';
}