function validateHello(greetings) {
    const res =  ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    let status = res.filter(e => greetings.toLowerCase().includes(e));
    console.log(status);
    
    return status.length > 0;
}