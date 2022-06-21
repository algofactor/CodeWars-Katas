var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears;
    let dogYears;
    
    if(humanYears > 2){
      catYears = 15 + 9 + (4 * (humanYears - 2));
      dogYears = 15 + 9 + (5 * (humanYears - 2));
    }else if(humanYears === 2){
      catYears = 15 + 9;
      dogYears = catYears;
    }else {
      dogYears = catYears = 15;
    }
    
    return [humanYears,catYears,dogYears];
}