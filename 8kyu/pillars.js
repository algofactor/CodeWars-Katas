function pillars(numPill, dist, width) {
    // your code here
    return numPill < 2 ? 0 : (((numPill - 1) * (dist * 100)) + (numPill -2)*width);
}