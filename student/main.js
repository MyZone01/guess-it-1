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
    let lowerLimit = 0
    let upperLimit = 0

    // Adding the parsed number to the `numbers` array
    numbers.push(num);

    if (numbers.length <= 10) {
        // Take big range for 1rst value
        lowerLimit = num - 100;
        upperLimit = num + 100;
    } else {
        // If there are more than 5 elements in the data array, get the last 5 elements and calculate the mean and standard deviation of those elements
        const data = numbers.slice(-10);

        // Calculating the mean (average) of the numbers array
        const average = data.reduce((acc, val) => acc + val) / data.length;

        // Calculating the standard deviation of the numbers array
        const standardDeviation = Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - average, 2)) / data.length);

        // Calculating the lower and upper limits for the range
        lowerLimit = Math.round(average - 1.28 * standardDeviation);
        upperLimit = Math.round(average + 1.28 * standardDeviation);
    }

    // Printing the calculated lower and upper limits
    console.log(`${lowerLimit} ${upperLimit}`);

});
