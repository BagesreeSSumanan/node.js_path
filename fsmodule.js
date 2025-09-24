const fs = require('fs');
const path = require('path');

// 1. using fs module list the files in a current directory 

fs.readdir('./', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

// 2.Remove a directory
fs.rm('test.txt', (err) => {
  if (err) return console.error(err);
  console.log('Directory removed!');
});
// 3.Rename a file
fs.rename('test2.txt', 'newFile.txt', (err) => {
  if (err) {
    return console.error("Error renaming file:", err);
  }
  console.log("File renamed successfully!");
});

// 4.Read and print data from a file
fs.readFile('newFile.txt','utf8',(err,data) => {
    console.log(data);
})

// 5.Write some content to an existing file
fs.appendFile('newFile.txt', '\nThis line is appended.', 'utf8', (err) => {
  console.log("Content appended successfully!");
});