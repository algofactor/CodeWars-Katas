function isPalindrome(line) {
    const str = line.toString();
    return str === str.split('').reverse().join('');
}