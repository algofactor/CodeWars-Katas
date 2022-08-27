function DNAStrand(dna){
  //your code here
  const obj = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }
  
  return dna.split('').map(el => obj[el] || el).join('');
}