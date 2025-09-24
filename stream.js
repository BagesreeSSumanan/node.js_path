const fs = require('fs');
const inputFile = 'newFile.txt';
const outputFile = 'test.txt';
const read = fs.createReadStream(inputFile);
const write = fs.createWriteStream(outputFile);
read.pipe(write);