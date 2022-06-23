function countWords(str) {
    // ...
    
    let valid;
    if(!str.length){
      return 0;
    }else if(str.includes('﻿')){
      valid = str.split('﻿').filter( e => e );
    }else {
      valid = str.split(' ').filter( e => e );
    } 
    
    return valid.length;
}