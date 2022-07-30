/************************
  Challenge: to use a for loop to get the even and odd numbers out of an array;
  
  one parameter is given;
  return an array of two array elements;
  ex. => pickIt([1,2]),[[1],[2]];
         pickIt([3,2,1]),[[3,1],[2]];
         pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]];
         
  pseudo code: using the filter method is easier;
               the for loop will in a way filter through and push the right values into the odd and even arrays;
************************/

function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for(let i = 0; i < arr.length; i++){
      (arr[i] % 2) ? odd.push(arr[i]) : even.push(arr[i]);
    }
    //   odd = arr.filter(e => e%2);
    //   even = arr.filter(e => !(e%2));
    
    return [odd,even];
}