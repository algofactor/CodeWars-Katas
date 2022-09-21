function persistence(num) {
    //code me
   let n = 0;
   let str = String(num);
   
   while(str.length !== 1){
     let times = 1;
     for(let i = 0; i < str.length; i++){
       times *= Number(str[i]);
     }   
     str = String(times)
     n++;
   }
   
   return n;
 }