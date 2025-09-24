const path = require('path');

const filePath = 'c:/user/project/data/file.txt';

// 1.Get the base name of the file
console.log("basename ",path.basename(filePath));

// 2.Get the file extension
console.log("extension ",path.extname(filePath));

// 3.Get the directory name
console.log("directory ",path.dirname(filePath));

// 4.Resolve an absolute path
console.log("absolute ",path.resolve(filePath));

// 5.Parse a path into an object
console.log("parse ",path.parse(filePath));


// 6.Format a path object back into a string
const newPath = {
  dir: 'c:/user/project/data',
  name: 'image',
  ext: '.jpg'
};
console.log("Formatted Path:", path.format(newPath));

//7.Check if a path is absolute
console.log("isabsolute ",path.isAbsolute(filePath));

//8.Get relative path
console.log("relative path ",path.relative('c:/user/project', filePath));