String.prototype.digit = function() {
    const arr = ['0','1','2','3','4','5','6','7','8','9'];
    return arr.includes(this.toString());
};