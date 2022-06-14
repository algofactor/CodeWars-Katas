/*************************
  Challenge: To return an alternating case of a given string;
  
   P - string
   R - return, the alternate version of the given string
   E - "hello world".toAlternatingCase(), "HELLO WORLD";
       "HELLO WORLD".toAlternatingCase(), "hello world";
       ("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld";
       ("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E";
       
   P - split the string,
       make sure to use the 'this' keyword,
       then call the map function and alter the case of each character;
       join the array into a string after and
       return the result;
*************************/

String.prototype.toAlternatingCase = function (splitArr) {
    // Define your method here :)
    splitArr = this.split('');
    
    let alternateArray = splitArr.map( e =>{
      return (e === e.toLowerCase()) ? (e = e.toUpperCase()) : (e = e.toLowerCase());
    });
    
    return alternateArray.join('')
}