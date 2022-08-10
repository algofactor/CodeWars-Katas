function whatNumberIsIt(n){
    return  n == Number.MAX_VALUE ? "Input number is Number.MAX_VALUE" :
            n == Number.MIN_VALUE ? "Input number is Number.MIN_VALUE" :
            n == Number.NEGATIVE_INFINITY ? "Input number is Number.NEGATIVE_INFINITY" :
            n == Number.POSITIVE_INFINITY ? "Input number is Number.POSITIVE_INFINITY" :
            Number.isNaN(n) ? "Input number is Number.NaN" :
            'Input number is ' + n;
    
    
}