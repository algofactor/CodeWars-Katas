// Parameter: an array of words(strings) of varying lengths.
// Return: a new array of word(s) of length 4 from the original array, this new array denotes the names of friends alone. The returned array should not have the order of the words changed
// Example: friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]; friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]; friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"];
// PseudoCode: call the filter method on the original array with the condition that the filtered elements should have only 4 letters. Return the result

const friend = friends => {
    const res = friends.filter(el => el.length === 4);

    console.log(res);
}