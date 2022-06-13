/*********************
  Challenge: To help switch a given number to its spelt out form
  
  P - one number;
  R - return a string, that spells out the number;
  E - (1),"One";
      (3),"Three";
      (5),"Five";
      
  P - use a switch-case to solve this;
  
*********************/

function switchItUp(number){
    //Write your own Code!
    switch (number){
        case 0:
          return 'Zero';
          break;
        
        case 1:
          return 'One';
          break;
        
        case 2:
          return 'Two';
          break;
        
        case 3:
          return 'Three';
          break;
        
        case 4:
          return 'Four';
          break;
        
        case 5:
          return 'Five';
          break;
        
        case 6:
          return 'Six';
          break;
        
        case 7:
          return 'Seven';
          break;
        
        case 8:
          return 'Eight';
          break;
        
        case 9:
          return 'Nine';
          break;
        
        default:
          return 'Not valid';
          break;
    }
}