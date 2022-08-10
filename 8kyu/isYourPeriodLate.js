function periodIsLate(l,t,cL){
    return (t-l)/(86400000) > cL;
}