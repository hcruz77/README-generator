// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile(fileName, userInput) {
    fs.writeFile(fileName, userInput, (err) => {
        err ? console.error(err) : console.log('Your README is ready!');
    });
}


// TODO: Create an array of questions for user input
const init = () => {

    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            name: 'description',
            message: 'Please provide a description of your project'
        },
        {
            name: 'installation',
            message: 'How do you install your project?'
        },
        {
            name: 'usage',
            message: 'How do you use your project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project',
            choices: [
                'Mozilla 2.0',
                'Apache 2.0',
                'MIT'
            ],
        },
        {
            name: 'contributing',
            message: 'How does one contribute additions or changes to your project?'
        },
        {
            name: 'tests',
            message: 'How do you test your project?'
        },
        {
            name: 'email',
            message: 'Please provide your email address'
        },
        {
            name: 'username',
            message: 'Please provide your GitHub username',
        }
    ]).then((answers) => {
        console.log(answers);
        writeToFile('./output/README.md', generateMarkdown(answers));

    });
};
init();



 //TODO: Create a function to write README file

//function writeToFile(fileName, data) {
  //  fs.writeFile(fileName, generateMarkdown(data), err => {
    //    console.log(err);
    //    })


// TODO: Create a function to initialize app

//function init() { 
   // prompt(questions).then (answers => {
    //    writeToFile,('./output/README.md', answers);
   // })


// Function call to initialize app

