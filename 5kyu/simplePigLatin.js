// Parameters => a single string which is a sentence  with mulitple words and in some cases might have punctuation marks.
// Return => a single string, sentence-like, where each word is modified in the sense that, the first letter is taken to the end of the word and 'ay' is added to the end of the word after that. But this trend is exclusive to only words and not any other characters that might be present in the string
// Example => pigIt('Pig latin is cool'); = igPay atinlay siay oolcay, pigIt('Hello world !'); = elloHay orldway !, pigIt('Daniel Ezekiel !'); = anielDay zekielEay !
// Pseudocode => split the string into an array with each word/punctuation mark being an element, map through the array formed and for each element that isn't a punctuation mark, convert to pig latin while leaving all punctuation marks intact, join and then return the result.

const pigIt = str => {
    const res = str.split(' ').map(el => el === el.toUpperCase() && el === el.toLowerCase() ? el : el.slice(1) + el[0] + 'ay').join(' ');

    return res;
}

pigIt('Daniel Ezekiel !');