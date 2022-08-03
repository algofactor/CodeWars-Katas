function slope(p){
    const dy = (p[3]-p[1]);
    const dx = (p[2]-p[0]);
    
    const slope = dy/dx;
    return !dx ? 'undefined' : String(slope);
  }