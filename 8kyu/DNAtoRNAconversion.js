// Challenge: To replace characters within a string into another character, 
// Details: Create a function which translates a given DNA string into RNA.
// For example: "GCAT"  =>  "GCAU"
function DNAtoRNA(dna) {
    let dnaArr = dna.split('')
    return dnaArr.map(t => t === 'T' ? t = 'U' : t).join('')
}

//Alternative: using an function expression and an arrow function
// const DNAtoRNA = dna => dna.split('').map( t => t === 'T' ? t = 'U' : t ).join('')