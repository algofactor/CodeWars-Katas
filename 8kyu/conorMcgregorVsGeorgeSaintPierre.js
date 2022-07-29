/*******************************
  Challenge: to return a statement depending on the winner;
  
  parameter is a string;
  return a string as the result;
  ex. =>  quote('george saint pierre'), "I am not impressed by your performance.";
          quote('George Saint Pierre'), "I am not impressed by your performance.";
          ('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!";
          ('George Saint Pierre'), "I am not impressed by your performance.";
          
  pseudo-code: use the toLowerCase method to guide against the case;
               use a conditonal, tenary or switch statement to give result;
               could even use an object as well;
********************************/

var quote = function(f) {
    const res = {
      'george saint pierre': "I am not impressed by your performance.",
      'conor mcgregor': "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    }
    
    return res[f.toLowerCase()];
};