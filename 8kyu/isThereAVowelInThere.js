// function isVow(a){  
//     return a.map(e => e == 97 ? e = 'a' : e == 101 ? e = 'e' : e == 105 ? e = 'i' : e == 111 ? e = 'o' : e == 117 ? e = 'u' : e = e);
// }

function isVow(a){
    let vowels = {
      97:  'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u'
    }
    
    const vowelInThere = a.map(e => e = vowels[e] || e);
    
    return vowelInThere
}