/****************************
  PREP
  Challenge: To properly make changes on the traffic lights
  P - one string
  R - return a string, specifying the next light to display in the sequence;
  E - ("green"), "yellow";
      ("yellow"), "red";
      ("red"), "green";
      
  P - we could use switch-case statements,
      check for the current value, then display the next value as output;
****************************/

function updateLight(current) {
  
    //your code here!
    switch (current){
        case 'green':
          return 'yellow';
          break;
        
        case 'yellow':
          return 'red';
          break;
        
        default:
          return 'green';
    }
  
}