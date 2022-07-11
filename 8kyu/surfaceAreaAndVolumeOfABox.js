/**************************
  Challenge to return an array containing the surface area and volume of a box;
  
  three parameters of the box properties;
  return an array with two elements;
  ex. => (4, 2, 6), [88, 48];
         (10, 10, 10), [600, 1000];
         (4, 2, 6)[0], 88;
         (4, 2, 6)[1], 48;
         
  my approach: get the area, get the volume;
               oush or insert the values obtained into an array;
*************************/

function getSize(w, h, d){
    const area = (2*w*h) + (2*w*d) + (2*h*d);
    const vol = w*h*d;
    
    return [area, vol];
}  