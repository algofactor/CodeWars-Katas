// Parameters: two numbers, in no particular order. These numbers can be equal to each other or totally different and they be less than 0 as well.
// Return: if they are equal to each other, return that value, else, add all numbers between the two given numbers including both numbers as well and then return the sum
// Example: (1, 1) --> 1 (1 since both are same); (-1, 0) --> -1 (-1 + 0 = -1); (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// PseudoCode: obtain the min and max between the given numbers, then loop through from the min to the max and then using a created sum variable, keep adding each incremental value to the sum to obtain a final value at the end of all iterations, return the result

const getSum = (a,b) => {
    const min = Math.min(a,b);
    const max = Math.max(a,b);

    let sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
}