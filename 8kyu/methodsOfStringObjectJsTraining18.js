function splitAndMerge(s, sep) {
    return s.split(' ').map(e => e.split('').join(sep)).join(' ');
}