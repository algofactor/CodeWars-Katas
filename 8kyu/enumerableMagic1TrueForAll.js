/*********************
  Challenge: To check if all elements within an array fulfill a function condition;
  
   P - one array and one function;
   R - return true or false dependign on whether the condtion is fulfilled for all elements;
   E - all([10,10,10,10,10], function(v){return v<9}), false;
       all([1,2,3,4,5], function(v){return v<9}), true;
       
   P - the most straighforward option is to call the every method on the array and pass the function as the argument forthe every method;
       another alternative is to loop through the array, 
       then call the function for each element in the array,
       set a condition for whether each element fulfills the conditon and push the result from that conditonal into an array variable;
       filter through the array for any boolean value, true or false, then 
       check if the length of the filtered array is the same as the length of the original array, return true if it is, else, false.
*********************/

function all( arr, fun ){
    // ...
    //   return arr.every(fun);
    let value = [];
    arr.forEach(e => !fun(e) ? value.push(false) : value.push(true));
    //   return value;
    
    const filtered = value.filter(e => e == true);
    return filtered.length == arr.length 
}