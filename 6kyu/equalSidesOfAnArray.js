function findEvenIndex(arr){
  //Code goes here!
  let i;
  let beforeSum, afterSum;
  for (let index = 0; index < arr.length; index++) {
    index == 0 ? beforeSum = 0 : beforeSum = arr.slice(0, index).reduce( (acc, c) => +acc + +c );
    index == arr.length - 1 ? afterSum = 0 : afterSum = arr.slice(index + 1).reduce( (acc, c) => +acc + +c )    
    
    if (beforeSum === afterSum){
      i = index;
      break;
    } else if (index == arr.length - 1 && beforeSum !== afterSum){
      i = -1;
    }
  }
  
  return i;
}