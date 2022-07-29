/**************************
  Challenge: to run a pirate ship and loot when necessary
  
  using a class to do that as well
*************************/

class Ship{
    constructor(draft, crew){
      this.draft = draft;
      this.crew = crew;
    }
    
    isWorthIt(){
      const moreThan20 = this.draft - (1.5 * this.crew)  ;
      return moreThan20 > 20;
    }
}