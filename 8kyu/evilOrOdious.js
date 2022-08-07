function evil(n) {
    const bin = n.toString(2);
    const status = bin.split('').filter(e => e == '1').length;
    
    return (status % 2) ? 'It\'s Odious!' : 'It\'s Evil!';
}