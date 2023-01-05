'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    
    //length of the passed string
    var lenString = s.length;
    
    //total number of times the string would be repeated fully
    var times = Math.floor(n / lenString);
    
    //number of extra characters that would fit
    var extra = n % lenString;
    
    //variable to store the 'a' count
    var countA = 0;
    
    //loop to count the number of times 'a' is repeated in given string
    for (var i = 0; i < lenString; i++){
        if(s[i].includes('a')){
            countA++;
        }
    }
    
    //number of times 'a' is repeated when the given string is repeated
    countA *= times;
    
    //loop to find the number of times 'a' repeated in extra characters
    for (var i = 0; i < extra; i++){
        if(s[i].includes('a')){
            countA++;
        }
    }
    
    return countA;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
