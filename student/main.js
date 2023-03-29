// Importing the `readline` module to read input from the user
const readline = require('readline');

// An array to store the user input numbers
const numbers = [];

// Creating an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Listening for the 'line' event on the interface
rl.on('line', (line) => {
    // Parsing the user input as an integer
    const num = parseInt(line);

    // Adding the parsed number to the `numbers` array
    numbers.push(num);

    // Calculating the mean (average) of the numbers array
    const average = numbers.reduce((acc, val) => acc + val) / numbers.length;

    // Calculating the standard deviation of the numbers array
    const standardDeviation = Math.sqrt(numbers.reduce((acc, val) => acc + Math.pow(val - average, 2)) / numbers.length);

    // Calculating the lower and upper limits for the range
    const lowerLimit = Math.round(average - 1.28 * standardDeviation);
    const upperLimit = Math.round(average + 1.28 * standardDeviation);

    // Printing the calculated lower and upper limits
    console.log(`${lowerLimit} ${upperLimit}`);
});
