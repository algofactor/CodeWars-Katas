function pointsPer48(ppg, mpg) {
    const res = ((48*ppg)/mpg).toFixed(1);
    return parseFloat(res) || 0;
}