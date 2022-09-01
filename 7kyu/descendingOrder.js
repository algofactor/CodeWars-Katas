function descendingOrder(n){
    //...
    return Number([...String(n)].sort((a,z) => z - a).join(''))
}