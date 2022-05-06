// Challenge: To turn a person's full two-word name into just initials.
// The split method is initally called on the name string and the map function is then called after to take out the initial characters from each word
// The initial obtained are then joined using the join method with the parameter of '.'

function abbrevName(name){
    // code away
  const nameArr = name.split(' ');
  const initials = nameArr.map(nameVal => nameVal[0].toUpperCase());
  
  return initials.join('.');
}

// Alternative using a function expression and an arrow function
// const abbrevName = name => name.split(' ').map(nameVal => nameVal[0].toUpperCase()).join('.');