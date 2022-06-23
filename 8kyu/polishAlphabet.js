function correctPolishLetters (string) {
    // your code
    const polish = {
      ą: 'a',
      ć: 'c',
      ę: 'e',
      ł: 'l',
      ń: 'n',
      ó: 'o',
      ś: 's',
      ź: 'z',
      ż: 'z'
    }
    
    return string.split('').map(e => e = polish[e] || e).join('');
}