/********************************
  Challenge: to tie a method of bark to two dogs;
  
  use a class to create and add methods 
********************************/

function Dog (breed) {
    this.breed = breed;
    this.bark = function(){
      return 'Woof';
    }
  }
  
  // class Dog{
  //   constructor(breed){
  //     this.breed = breed
  //   };
  //   bark(){
  //     return "Woof";
  //   };
  // }
  
  var snoopy = new Dog("Beagle");
  var scoobydoo = new Dog("Great Dane");  