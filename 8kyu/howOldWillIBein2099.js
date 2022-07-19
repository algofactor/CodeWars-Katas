function  calculateAge(x,y) {
    if(x < y){
      let z = y-x;
      return `You are ${z > 1 ? (z +' years') : (z + ' year')} old.`
    }else if(x > y){
      let z = x-y;
      return `You will be born in ${z > 1 ? (z +' years') : (z + ' year')}.`
    }else{
      return 'You were born this very year!'
    }
  
  }  