// const fs = require('fs');
// const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [data] = profileDataArgs
// fs.writeFile('./README.md', generateMarkdown(data), err => {
//    if (err) throw err;
//    console.log('Readme complete! Check out README.md to see the output!');
//  });

const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your project title? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
                }
            }
        },
 ]);
};

questions().then(answers => console.log(answers));

// function to write README file
 //function writeToFile(fileName, data) {
 //}

// function to initialize program
 //function init() {

 //}

// function call to initialize program
 //init();