/*************************
 PREP
 Challenge: To return the max and min numbers among the elements within an array
 P - an array of numbers
 R - return not, console.log. the max or min depending on the requirements
 E - min([-52, 56, 30, 29, -54, 0, -110]), -110;
     min([42, 54, 65, 87, 0]), 0;
     max([4,6,2,1,9,63,-134,566]), 566;
 P - first sort the array of numbers, then the max is the last element, while the min is the first element
*************************/

var min = function(list){
    const sorted = list.sort( (a,z) => a - z );
    return sorted[0];
    //return list[0];
}

var max = function(list){
    const sorted = list.sort( (a,z) => a - z );
    return sorted[sorted.length-1];
    //return list[0];
}