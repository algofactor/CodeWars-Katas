function well(x){
    //   let value = [];
        
    //   for(let i = 0; i < x.length; i++){
    //     if(x[i] === 'good'){
    //       value.push(x[i])
    //     }else{
    //       console.log( x[i])
    //     }
    //   }
    
    let value = x.filter(idea => idea === 'good');
    
    if(value.length === 0){
    return 'Fail!'
    }else if(value.length <= 2){
    return 'Publish!'
    }else {
    return 'I smell a series!';
    }
}