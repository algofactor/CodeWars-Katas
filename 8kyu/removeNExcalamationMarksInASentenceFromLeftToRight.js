/************************
  Challenge: to remove a number of exclamation marks in a sentence from left to right;
  
  two parameters are given, one string and one number;
  return a string with reduced number of exclamation marks;
  ex. => remove("Hi!",1) , "Hi";
         remove("Hi!",100) , "Hi";
         remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi";
         remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi";
         
  my approach: use a count to monitor each deletion of exclamation marks;
               split the string;
               iterate through using forEach() and delete an exclamation mark if the element is an exclamation mark and the count is less than the given number;
               after, increment the count by one;
               this should delete the right number of exclamation marks;
               join the result after.
************************/

function remove(s,n){
    //coding and coding....
    let count = 1;
    let spl = s.split('');
    
    spl.forEach((e,i) => {
      if(e == '!' && count <= n){
        delete spl[i];
        count++;
      }
    })
    
    const res = spl.join('');
    return res;
}