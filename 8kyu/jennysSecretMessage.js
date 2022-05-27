/****************
  PREP
  Challenge: To fix Jenny's code to return a special message for Johnny alone, the masses get a different message;
  
  P - string, a name
  R - return, not console.log()
  E - after fixing the code,
      the wrong code: 
      function greet(name){
        return "Hello, " + name + "!";
        if(name === "Johnny")
          return "Hello, my love!";
      }
  
      if name === Johnny, return "Hello, my love!"
      for any other name, return "Hello, name"
    
  P - the conditonal should come first, in this case if the condition is not met, then the name isnt Johnny and the greeting is different,
      another alternative is to change the condition to check if the name isn't Johnny first, the perform an action, else return the special Johnny greeting
****************/

function greet(name){
  if(name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
  
//      if(name !== "Johnny") return "Hello, " + name + "!";
//      return "Hello, my love!";
  
//   return name !== 'Johnny' ? `Hello, ${name}!` : `Hello, my love!`
}