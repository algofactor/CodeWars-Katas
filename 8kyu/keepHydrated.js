/*+++++++++
PREP
Challenge: To return the number of litres drunk after a given time in hours

P - strictly number type; drinks 0.5l per h
R - return, not console.log
E - if time = 3, litres = 1;
    if time = 6.7, litres = 3;
    if time = 11.8, litres = 5.
    
P - the number result must be an integer and not approximated, so the mathFloor method will be used
    first, take in total cycle hours,
    then, multiply by the fixed num of litres of water, 0.5
    then, call the Math.floor() method so as to get the lowest amount of water he drinks per cycling session
+++++++++*/

function litres(time) {
    const litresTotal = time * 0.5;
    return Math.floor(litresTotal)  ;
    
  //   return Math.floor( time * 0.5 );
}