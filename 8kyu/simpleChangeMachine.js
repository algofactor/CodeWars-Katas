function changeMe(moneyIn){
    // Write your function here
    if(moneyIn.includes('£')){
      moneyIn = moneyIn.slice(1);
      let moneyInNum = Number(moneyIn);
      return !(moneyInNum % 0.2) ? `${' 20p'.repeat(moneyInNum / 0.2).slice(1)} 10p` : `${' 20p'.repeat(moneyInNum / 0.2).slice(1)}`;
    }else if(moneyIn.slice(0,-1) == 20){
      moneyIn = moneyIn.slice(0,-1);
      let moneyInNum = Number(moneyIn);
      return `${' 10p'.repeat(moneyInNum / 10).slice(1)}`;
    }else if(moneyIn.includes('p') && moneyIn.length === 3){
      moneyIn = moneyIn.slice(0,-1);
      let moneyInNum = Number(moneyIn);
      return (moneyIn % 20) ? `${' 20p'.repeat(moneyInNum / 20).slice(1)} 10p` : `${' 20p'.repeat(moneyInNum / 20).slice(1)}`;
    }else{
      return moneyIn;
    }  
}