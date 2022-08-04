function padIt(str,n){
    let spl = str.split('');
    let i=1;
    while( i <= n ){
      if(i%2) spl.unshift('*');
      if(!(i%2)) spl.push('*');
      i++;
    }
    
    return spl.join('');
}