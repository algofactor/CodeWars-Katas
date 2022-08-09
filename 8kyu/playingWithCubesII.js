// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
    constructor(n){
      this.side = Math.abs(n) || 0;
    }
    getSide() {
      return this.side; 
    }
    setSide(n) {
      this.side = Math.abs(n);
    }
}