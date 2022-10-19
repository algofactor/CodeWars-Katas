// Challenge: to break up camel cased words using a space between the words

// Parameter: string which could be in camelCase or not
// Return: a string that is not in camelCase
// Example: solution('camelCasing'), 'camel Casing'; solution('camelCasingTest'), 'camel Casing Test'; solution('identifier'), 'identifier'

// Pseudocode: get the index of all elements that are in caps into an array; map through the array and slice the string from the index to the index of the next element in the array; get the first word by slicing the string from index zero to the index of the first caps, combine/concat the first word and the array of the words with first letter caps; join the resulting array; return

const solution = str => {
    const splitStr = str.split('');
    let capsIdx = [];

    splitStr.forEach( (el, i) => {
        if(el === el.toUpperCase()) capsIdx.push(i);
        return;
    })

    const firstWord = str.slice(0, capsIdx[0]);
    const words = capsIdx.map( (el, i) => str.slice(el, capsIdx[i+1]) );

    return [firstWord, ...words].join('');
}

solution('camelCasingChar');