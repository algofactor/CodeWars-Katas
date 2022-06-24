function contamination(text, char){
    // Code here ;)
    if(!text || !char) return '';
    else{
      let mutant = '';
      for(let i = 0; i < text.length; i++){
        mutant += char;
      }
      return mutant;
    }
}