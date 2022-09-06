function isPangram(string){
    //...
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    
    // Converting the string into an array;
    string = string.toLowerCase().split('');
    
    // Filtering through for only letters
    const filt = string.filter(el => alph.includes(el))
    
    // Use the Set class to create an array of each letter occuring only once
    const once = [...new Set(filt)]
    
    // CHeck if it is a pangram by comparing with alph or 26(the total number of letters in the english alphabet)
    return once.length === 26;
}