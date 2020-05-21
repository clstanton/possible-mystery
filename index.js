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
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required):',
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
            message: 'Would you like to enter information for a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'List table of contents:',
            when: ({confirmTableOfContents}) => confirmTableOfContents
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
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
            message: 'How can your application be used? Provide instructions and examples for (Required):',
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
            message: 'List any credits (i.e. collaborators w/ GitHub profile link, 3rd party assets w/ creators & links to their primary web presence, and tutorials followed) (Required):',
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
            message: 'List the license type (Required):',
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
            message: 'Would you like to enter badges?',
            default: true
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
            message: 'Would you like to make your project available to contributors?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the guiedlines for contributing?',
            when: ({confirmContributing}) => confirmContributing
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to write tests for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application and provide examples on how to run them:',
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