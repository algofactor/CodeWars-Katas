/*********************************
  Challenge: to check the case status for each given parameter
  
  two parameters are given;
  return a value depending on the condition;
  ex. =>  doTest('C', 'B', 1);
          doTest('b', 'a', 1);
          doTest('d', 'd', 1);
          doTest('A', 's', 0);
          doTest('c', 'B', 0);
          doTest('b', 'Z', 0);
          doTest('\t', 'Z', -1);
          doTest('H', ':', -1);
  
  pseudo code: find out if each parameter is an alphabet and return -1 if not;
               check for the case status of each parameter and relate to each other;
               if they match, return 1, else return 0;
*********************************/

function sameCase(a, b){
    let letters = ['a','b','c','d','e','f','g','h','i','j',
                  'k','l','m','n','o','p','q','r','s','t',
                   'u','v','w','x','y','z']
    
    if(!letters.includes(a.toLowerCase()) || !letters.includes(b.toLowerCase())) return -1;
    
    const aLow = a === a.toLowerCase();
    const bLow = b === b.toLowerCase();
    
    return aLow === bLow ? 1 : 0;
}