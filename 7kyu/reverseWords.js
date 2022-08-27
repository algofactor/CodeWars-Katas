function reverseWords(str) {
    // Go for it
    return str.split(' ').map(el => el.split('').reverse().join('')).join(' ');
}