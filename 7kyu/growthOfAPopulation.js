// Parameters: Four numbers which specify the population of the town, rate at which it increases, number of new people into the town and a final population amount higher than the current one
// Return: the number of years in which the initial population takes to get to the final population
// Example: nbYear(1500, 5, 100, 5000) -> 15; nbYear(1500000, 2.5, 10000, 2000000) -> 10; nbYear(1000, 2, 50, 1200)
// PseudoCode: create a variable to monitor the number of years to reach the final population count and assign a default value of 0 to it. Create a function that then increases the population for one year. Then use a while loop to iterate till the initial population count is greater than or equal to the final count, and increase the number of years count by 1. Then return the final count for the number of years. A for loop can also be implemented as an alternative;

const nbYear = (p0, percent, aug, p) => {
    let n = 0;

    const rise = _ => {
        p0 = Math.floor(p0 + ( p0 * percent / 100 ) + aug);
    }

    while(p0 < p){
        rise();
        n += 1;
    }

    console.log(n);
}