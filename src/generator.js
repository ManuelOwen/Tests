const { isExpressionWithTypeArguments } = require('typescript');
const getRandomNumber = require('./randomnumber.js');

class Generator {
    /**
     * Generate array of random numbers.
     * 
     * @param {number} argument - The number of random numbers to generate.
     * @returns {Array} - Array of random numbers.
     */
    getRandomNumbers(argument) {
        if (!Number.isInteger(argument) || argument <= 0) {
            return 'invalid argument';
        } else {
            const randomNumbers = [];
            for (let i = 0; i < argument; i++) {
                randomNumbers.push(getRandomNumber());
            }
            return randomNumbers;
        }
    }
}
