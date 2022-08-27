// write the function isAnagram
var isAnagram = function(test, original) {
    const testLow = test.toLowerCase().split('').sort().join('');
    const orgLow = original.toLowerCase().split('').sort().join('');
    
    return testLow == orgLow;
};  