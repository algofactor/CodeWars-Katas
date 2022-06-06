/**************************
  PREP
  Challenge: To return the area or perimeter of a polygon depending on whether it is a square or rectangle
  P - two numbers;
  R - return perimeter value or area value;
  E - (4 , 4) , 16;
      (6 , 10) , 32;
  P - check if polygon is square or rectangle;
      if square, return area;
      if rectangle, return perimeter;
**************************/

const areaOrPerimeter = function(l , w) {
    // Return your answer
    //   return l === w ? l*w : 2*(l+w) ; 
    
    if(l===w){
      return l*w;
    }else{
      return 2*(l+w);
    }
};