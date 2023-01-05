function rot13(message){
  //your code here
  const letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  
  const rot =  message.split('').map( (alph, i) => {
    if(!letters.includes(alph.toLowerCase())){
      return alph;
    }else if (alph === alph.toLowerCase()) {
     return letters[letters.indexOf(alph) + 13];
    }else{
     return letters[letters.indexOf(alph.toLowerCase()) + 13].toUpperCase(); 
    }
  } ).join('');
  return rot;
}