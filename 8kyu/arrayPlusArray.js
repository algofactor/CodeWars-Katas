// Challenge: to return the sum of all elements within two different arrays, which could be solved by calling the reduce method on each array and returning the sum of both results
function arrayPlusArray(arr1, arr2) {
    const arr1Sum = arr1.reduce( (acc,c) => acc + c, 0 );
    const arr2Sum = arr2.reduce( (acc,c) => acc + c, 0 );
    
    return arr1Sum + arr2Sum;
}
  
// Alternative: Using a function expression and an arrow function but with everything on one line, code is still same thing with the previous method;
// const arrayPlusArray = (arr1, arr2) => arr1.reduce( (acc,c) => acc + c, 0 ) + arr2.reduce( (acc,c) => acc + c, 0 );