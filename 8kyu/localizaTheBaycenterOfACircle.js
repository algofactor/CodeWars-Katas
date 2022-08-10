function barTriang(p1, p2, p3){
    let x0 = (p1[0]+p2[0]+p3[0])/3;
    let y0 = (p1[1]+p2[1]+p3[1])/3;
    
    x0 = x0.toFixed(4);
    y0 = y0.toFixed(4);
    
    return [Number(x0), Number(y0)];
}