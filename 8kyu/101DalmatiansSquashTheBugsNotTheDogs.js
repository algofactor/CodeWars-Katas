/****************************
  Challenge: to fix a pooly written function
  
  parameter is a number of dogs,
  return the right response after fixing the function
  ex. =>  howManyDalmatians(26), "More than a handful!";
          howManyDalmatians(8), "Hardly any";
          howManyDalmatians(100), "Woah that's a lot of dogs!";
          
  
****************************/

function howManyDalmatians(number){
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2]
    
    return respond;
}  