var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array  
    const test = [...iterable].filter((el,i,a) => a[i] !== a[i+1]);
    return test;
}