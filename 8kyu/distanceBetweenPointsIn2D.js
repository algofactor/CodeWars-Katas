function distanceBetweenPoints(a, b) {
    const sqrX = Math.pow((b.x - a.x), 2);
    const sqrY = Math.pow((b.y - a.y), 2);
    
    const distance = Math.sqrt(sqrX + sqrY);
    return distance;
}