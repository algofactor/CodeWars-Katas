/*********************************
  Challenge: to make an object using a class and make it work;
*********************************/

class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
    get name(){
      return this._name;
    }
    get age(){
      return this._age;
    }
    get info(){
      return `${this.name}s age is ${this.age}`
    }
}