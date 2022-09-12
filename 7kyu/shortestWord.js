// Parameter: String of words. The given string always contains a given value, it isn't empty. Contains multiple words. The words within the string have varying lengths.
// Return: the word-length within the string that is the shortest among all i.e the length of the shortest word among all the words within the string
// Example: findShort("bitcoin take over the world maybe who knows perhaps"), 3; findShort("turns out random test cases are easier than writing out basic ones"), 3; findShort("Let's travel abroad shall we"), 2;
// PseudoCode: split the string by spaces, map and for each element return the length of the word, sort the array obtained in ascending order and return the first element which should be the answer.

const findShort = s => {
    const sortedLengths = s.split(' ').map(el => el.length).sort((a,z) => a - z);

    return sortedLengths[0];
}