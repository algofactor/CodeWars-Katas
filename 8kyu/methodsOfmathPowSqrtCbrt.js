function cutCube(volume,n){
    //coding here...
    return Number.isInteger(Math.cbrt(n)) ? Number.isInteger(Math.cbrt(volume/n)) : false;
}