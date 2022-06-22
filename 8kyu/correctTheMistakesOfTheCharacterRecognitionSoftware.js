/************************
  PREP
  Challenge: TO correct the mistakes in a character recognition software that mistakes numbers as letters
  
  P - one string
  R - return, the corrected form of the string
  E - ("L0ND0N"),"LONDON";
      ("DUBL1N"),"DUBLIN";
      ("51NGAP0RE"),"SINGAPORE";
      ("PAR15"),"PARIS";
      
  P - split the string first,
      then, map through the array that is formed,
      set a conditional within the map to replace the element as required,
      join the map result and return the value.
************************/

function correct(string)
{
	// your code here
  const split = string.split('');
  const fixed = split.map( e => e === '0' ? e = 'O' : e === '1' ? e = 'I' : e === '5' ? e = 'S' : e = e);
  
  return fixed.join('');
}