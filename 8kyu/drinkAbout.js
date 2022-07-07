/*****************************
 Challlenge: to return what drink they should take depending on their ages
 
 parameter is a single number;
 return the right drink;
 ex. => (22), 'drink whisky';
 
 my approach: use a conditonal or a switch statement
              return the right drink for each condition or each case;
****************************/


function peopleWithAgeDrink(old) {
    return old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky';
};