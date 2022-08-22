function disemvowel(str) {
    const vows = 'aeiouAEIOU';
    return str.split('').filter(e => !vows.includes(e)).join('');
}