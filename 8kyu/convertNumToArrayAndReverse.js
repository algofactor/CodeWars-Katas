// Challenge: To convert a number into a reversed array form.
// This will be achieved by first converting the number into a string,
// then, splitting the string into an array and then calling the reverse method on the splitted number string,
// after which, each element within the already reversed array, being a number string is then converted back into a number by using the map method


// Case Study:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
    const strArrOfNums = n.toString().split('').reverse();
    
    return strArrOfNums.map( num => Number(num) ) 
}
  
// const digitize = n => n.toString().split('').reverse().map( num => Number(num) ) 