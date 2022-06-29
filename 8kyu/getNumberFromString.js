function getNumberFromString(s) {
    const split = s.split('');
    
    //   const number = [];
    //   const notNumber = [];
  
    //   for(let i = 0; i < split.length; i++){
    //     if(isNaN(Number(split[i])) || split[i] == ' '){
    //       notNumber.push(split[i]);
    //     }else{
    //       number.push(split[i]);
    //     }
    //   }
  
    //   let conCat = '';
    //   number.forEach(e => conCat += e);
    //   return Number(conCat);
    
    const filtered = split.filter((e,i) => !isNaN(Number(e)))
    const moreFilter = filtered.filter(e => e != ' ')
    const nums = moreFilter.reduce( (acc,c) => acc + c);
    return Number(nums);
}