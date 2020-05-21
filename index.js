const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [data] = profileDataArgs
fs.writeFile('./README.md', generateMarkdown(data), err => {
    if (err) throw err;
    console.log('Readme complete! Check out README.md to see the output!');
  });

// array of questions for user
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();