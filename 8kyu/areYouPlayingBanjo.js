// Challenge: To find out a name begins with 'r' or not and return a message
// This will be done using a conditional that checks if the first character within the nae string is 'r'

function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() === 'r'){
      return `${name} plays banjo`;
    }else {
      return `${name} does not play banjo`;
    }
}


// Alternative: running a function expression and using an arrow function and a tenary as the conditonal tester
// const areYouPlayingBanjo = name => name[0].toLowerCase() === 'r' ? (`${name} plays banjo`) : `${name} does not play banjo`;