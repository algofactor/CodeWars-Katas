/************************
  Challenge: to return the postion of any letter within the alphabet;
  
  parameter: is a letter in the alphabet as a string;
  return the position of that letter in the alphabet as a string also;
  ex. => position("a"),"Position of alphabet: 1";
         ("z"),"Position of alphabet: 26";
         ("e"),"Position of alphabet: 5";
         
  my approach: 
  first, input all letters of the alphabet into an array or object to be able to easily obtain their positions;
  the call for the position of that letter depending on whichever method is used, be it an object or an array;
      
*************************/

function position(letter){
    //   Using a string approach
    const alphabets = ' abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${alphabets.indexOf(letter)}`
    
    //Using the object method
    //   const alphabets = {
    //     a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,
    //     k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,
    //     u:21,v:22,w:23,x:24,y:25,z:26
    //   }
  
    //   return `Position of alphabet: ${alphabets[letter]}`;
    
    //Using the array method;
    //   const alphabets = [
    //     'a','b','c','d','e','f','g','h','i','j',
    //     'k','l','m','n','o','p','q','r','s','t',
    //     'u','v','w','x','y','z'
    //   ]
  
    //   return `Position of alphabet: ${alphabets.indexOf(letter) + 1}`
}