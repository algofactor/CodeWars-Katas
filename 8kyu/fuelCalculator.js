function fuelPrice(l, pPL) {
    let bill;
    let disc;
    
    if(l<2){
      bill = pPL
    }else if(l<4){
      disc = l*0.05
      bill = (pPL*l) - disc;
    }else if(l<6){
      disc = l*0.10
      bill = (pPL*l) - disc;
    }else if(l<8){
      disc = l*0.15
      bill = (pPL*l) - disc;
    }else if(l<10){
      disc = l*0.20
      bill = (pPL*l) - disc;
    }else{
      disc = l*0.25
      bill = (pPL*l) - disc;  }
    
    return Number.parseFloat(bill.toFixed(2));
}