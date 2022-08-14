function firstToLast(str,c){
    //coding here..
    return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}