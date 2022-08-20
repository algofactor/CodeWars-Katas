function nextItem(xs, item) {
    const iterable = xs[Symbol.iterator]();
    
    for(let el of iterable){
      if(el == item) return iterable.next().value;
    }
}