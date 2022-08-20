function validateUsr(u) {
    let lc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let n = ['1','2','3','4','5','6','7','8','9'];
    
    let spl = u.split('').filter(e => lc.includes(e) || n.includes(e) || e == '_');
    return spl.join('') === u && u.length > 3 && u.length < 17;
}