/************************
  Challenge: to create sub classes of humans(Adam and Eve)
  
  my approach;
  the code should return an array containing two elements, one to create man, the other to create woman;
  since man and woman are sub classes of Human, the Human parent class should be created first;
  then the man and woman classes will be created as extensions of the Human class;
  
  so when any array element is requested for, it goes ahead to create a new class of either man or woman; then returns the output.
***********************/

class God{
    /**
     * @returns Human[]
     */
      static create(){
        // code
        const humans = [new Man(), new Woman()];
        return humans;
      }
    }
    // code
    class Human{
      constructor(name){
        this.name = name;
      }
    }
    
    class Man extends Human{
      constructor(name){
        super(name);
      }
    };
    
    class Woman extends Human{
     constructor(name){
        super(name);
      }
    };