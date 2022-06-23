function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    const youTime = pontoonDistance/youSpeed;
    let sharkTime;
    dolphin ? sharkTime = sharkDistance/(sharkSpeed*0.5) : sharkTime = sharkDistance/sharkSpeed;
    
    return youTime < sharkTime ? 'Alive!' : 'Shark Bait!'
}