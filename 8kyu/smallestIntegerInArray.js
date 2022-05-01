
// Challenge: To find the smallest integer within an array.
// There is a more effective method to do this but I can't remember it right now, I'll solve this challenge using another method and come back to refactor using the proper method.
// Example cases:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0];
      for (let i = 0; i < args.length; i++) {
          if(smallest > args[i]) {
              smallest = args[i];
            } else {
                smallest = smallest;
            }
        }
      return smallest
    }
}
  
// function findSmallestInt(args) {
//   let smallest = args[0];
//   for (let i = 0; i < args.length; i++) {
//    if(smallest > args[i]) {
//      smallest = args[i];
//    } else {
//      return
//    }
//   }
//   return smallest
// }