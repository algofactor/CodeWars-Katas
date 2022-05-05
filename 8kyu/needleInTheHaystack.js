// Challenge: To find the index where the word 'needle 'exists within an array.
// The location should be declared within a phrase.

function findNeedle(haystack) {
    const position = haystack.indexOf('needle')
    return `found the needle at position ${position}`
}
  
// Alternative solution: using a One-liner function expression and an arrow function
// const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`