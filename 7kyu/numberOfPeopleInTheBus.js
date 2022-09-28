var number = function(busStops){
    // Good Luck!
    let into = 0;
    let outta = 0;
    
    busStops.forEach(el => {
      into += el[0];
      outta += el[1];
      return
    })
    
    return into - outta;
  }