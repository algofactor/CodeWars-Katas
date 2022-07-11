/*****************************
  Challenge: to remove duplicates from an array
  
  parameter is an array;
  return a new array without duplicates;
  ex. => ([1,1,2]), [1,2];
         ([1,2]), [1,2];
         ([1]), [1];
         
  my approach: iterate through the given array and only take out elements whose values aren't the same with their next siblings
               filter method can also be used to achieve this as well
               there is also the set class, which i dont really know much about, it can also help in this situation
*****************************/

function distinct(a) {
    let d = [];  
    a.forEach((e,i) => {
      if(!d.includes(e)){
        d.push(e);
      }
    })
    return d;
  
  
  //   return a.filter((e,i,a) => a.indexOf(e) === i);
  
  //   let n = new Set(a);
  //   return Array.from(n)
  
}