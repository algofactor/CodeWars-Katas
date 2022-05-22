/*********
 PREP
 Challenge: To determine an outcome based on how many petals the flower has
 P - number, the number of petals
 R - return, not console.log(), the outcome
 E - if number of Petals is  7, return 'I love you';
    if number of petals is 6, return 'not at all';
    if number of petals is 3, return 'a lot'
 P - using a conditional, check if the number is between 1 and 6 and if there's a remainder when divided by 6,
    return the corresponding outcome depending on the specified conditons,
    also an array can be used, with the outcomes as elements in the arrray, using a conditional to return the required output
*********/

// method 1: using 'if - else statements'
// function howMuchILoveYou(nbPetals) {
//   if(nbPetals%6 === 1){
//     return 'I love you'
//   }else if(nbPetals%6 === 2){
//     return 'a little'
//   }else if(nbPetals%6 === 3){
//     return 'a lot'
//   }else if(nbPetals%6 === 4){
//     return 'passionately'
//   }else if(nbPetals%6 === 5){
//     return 'madly'
//   }else {
//     return 'not at all'
//   }
// }

// method 2: using 'switch - case statements'
// function howMuchILoveYou(nbPetals) {
  
//   switch(nbPetals%6){
//     case 1:
//       return 'I love you';
//       break;
//     case 2:
//       return 'a little';
//       break;
//     case 3:
//       return 'a lot';
//       break;
//     case 4:
//       return 'passionately';
//       break;
//     case 5:
//       return 'madly';
//       break;
//     default:
//       return 'not at all';
//       break
//     }
// }

function howMuchILoveYou(nbPetals) {
    const phraseArr = [
      'I love you',
      'a little',
      'a lot',
      'passionately',
      'madly',
      'not at all'
    ];
    
    return phraseArr[ (nbPetals-1) % 6 ];
  }