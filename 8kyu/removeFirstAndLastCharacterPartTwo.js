function array(arr){
    //Good luck
    //   return arr.length < 3 ? null : arr.split(',').slice(1, -1).join(' ') ? arr.split(',').slice(1, -1).join(' ') : null;
    
    if(arr.length < 3){
      return null
    }else{
      
      const result = arr.split(',').slice(1, -1).join(' ');
      if(!result){
        return null;
      }else{
        return result;
      }
      
    }
}