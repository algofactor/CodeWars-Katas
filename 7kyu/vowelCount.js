function getCount(str) {
    const vows = 'aeiou';
    return str.split('').filter(e => vows.includes(e)).length;
}