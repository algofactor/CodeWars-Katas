function isValid(formula){
    //coding and coding..
    return formula.includes(1) && formula.includes(2) || formula.includes(3) && formula.includes(4) ? false :
           formula.includes(5) && !formula.includes(6) || !formula.includes(5) && formula.includes(6) ? false :
           !formula.includes(7) && !formula.includes(8) ? false :
           true;
}