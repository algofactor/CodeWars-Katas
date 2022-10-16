// Challenge: to determine the total number of digits in a given integer value;

// Parameter: a positive integer
// Return: a number that specifies the number of digits in the given integer parameter;
// Example: digits(5), 1; digits(12345), 5; digits(9876543210), 10;
// Pseudo Code: convert the given number to a string and return the length of the string

const digits = n => String(n).length;