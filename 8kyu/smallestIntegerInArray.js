
// Challenge: To find the smallest integer within an array.
// There is a more effective method to do this but I can't remember it right now, I'll solve this challenge using another method and come back to refactor using the proper method.
// Example cases:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       let smallest = args[0];
//       for (let i = 0; i < args.length; i++) {
//           if(smallest > args[i]) {
//               smallest = args[i];
//             } else {
//                 smallest = smallest;
//             }
//         }
//       return smallest
//     }
// }
  
// The more effcient method involves calling the sort method on the array and after sorting the array, the first element which is the lowest element is then returned
class SmallestIntegerFinder {
    findSmallestInt(args) {
  //the array is first sorted from the smallest integer to the highest;
      args.sort( (a, z) => a - z );
      
  //the sorted value is then stored inside the array called args, the smallest value can then be retrieved from the zero-th index of the array
      return args[0];
    }
}