function colorOf(r,g,b){
    r<16 ? r = '0'+r.toString(16) : r = r.toString(16);
    g<16 ? g = '0'+g.toString(16) : g = g.toString(16);
    b<16 ? b = '0'+b.toString(16) : b = b.toString(16);
    
    return '#'+r+g+b;
}  