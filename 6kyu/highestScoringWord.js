function high(x){
// all letters in the english alphabet
  const letters = 'abcdefghijklmnopqrstuvwxyz';
// Split the sentences into an array of words
  const words = x.split(' ');
// for each word, give each letter in each word its correct position in the alphabet;
  const letterScores = words.map((el, idx) => el.split('').map(e => letters.indexOf(e) + 1));
// now add up the letter scores for each word to get the word scores
  const wordScores = letterScores.map( (el) => el.reduce( (acc,c) => +acc + +c) );
// find the index of the word with the largest score
  const index = wordScores.indexOf( Math.max(...wordScores) );
// use this index in the words array to obtain the word with the highest score
  return words[index];
}