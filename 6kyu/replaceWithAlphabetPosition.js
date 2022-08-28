function alphabetPosition(text) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const lettersOnly = text.toLowerCase().split('').filter(el => alphabets.includes(el));
    
    return lettersOnly.map(item => 1 + alphabets.indexOf(item)).join(' ');
}