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
            message: 'What is your PROJECT TITLE? (Required)',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a DESCRIPTION of your project (Required):',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                    console.log('Please enter your project description!');
                return false;
                    }
                }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to enter information for a TABLE OF CONTENTS?',
            default: false
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'List TABLE OF CONTENTS:',
            when: ({confirmTableOfContents}) => confirmTableOfContents
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to INSTALL your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project installation steps!');
                    return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the application USAGE? Provide instructions and examples. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project usage!');
                    return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any CREDITS like collaborators, 3rd party assets, and/or tutorials (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter credits!');
                    return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'license',
            message: 'List the LICENSE type (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the license type!');
                    return false;
                    }
                }
        },
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to enter BADGES?',
            default: false
        },
        {
            type: 'input',
            name: 'badges',
            message: 'List badges:',
            when: ({confirmBadges}) => confirmBadges
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to make your project available to CONTRIBUTORS?',
            default: false
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the guiedlines for CONTRIBUTING?',
            when: ({confirmContributing}) => confirmContributing
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to write TESTS for your application?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write TESTS for your application and provide examples on how to run them:',
            when: ({confirmTests}) => confirmTests
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