// Challenge: To create a function that checks how many values within an araay are true and return the total number
// This can be done by calling the filter method on the array with the condition that the values are true adn then the lenght is the returned

function countSheeps(arrayOfSheep) {
    const sheepOnly = arrayOfSheep.filter(sheep => sheep === true);
    
    return sheepOnly.length
}
  
// The solutio using an arrow function and a function expression is given below
// const countSheeps = arrayOfSheep => arrayOfSheep.filter(sheep => sheep === true).length;