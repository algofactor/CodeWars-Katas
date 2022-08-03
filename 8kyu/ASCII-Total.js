function uniTotal (s) {
    return s.split('').reduce((acc,c,i) => acc + s.charCodeAt(i), 0);
}