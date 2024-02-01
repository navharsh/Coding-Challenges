// Problem 1:   File Reader
//  Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. The function should print the content to the console.

const fs = require('fs');

async function readFileContent(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(`Error reading file:${err}`);
    } else {
      console.log(`File Content:\n${data}`);
    }
  });
}

// Test Cases
readFileContent('test-files/file.txt');
readFileContent('test-files/empty.txt');
readFileContent('test-files/nonexistent.txt');


