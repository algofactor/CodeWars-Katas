/*********************************
    CHallenge: to return the number of lightsabers owned by individuals
    
    parameter should be a string;
    return 18 for only Zach, 0 for anyone else;
    ex. => (), 0;
           ("Adam"), 0;
           ("Zach"), 18;
           
   my approach: use a condtional, if name is Zach, return 18, else 0;
*********************************/

function howManyLightsabersDoYouOwn(name) {
    return name == 'Zach' ? 18 : 0;
}