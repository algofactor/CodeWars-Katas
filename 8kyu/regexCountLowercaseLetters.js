function lowercaseCount(str){
    return str.split('').filter(e => e != e.toUpperCase()).length;
}