// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ["What is the name of your Project?", "Please describe this project", "How do you install this application?","Please describe how to use this project", "How can others contribute?", "Please provide examples of Tests:", "What type of license would you like to add?(Select One)", "Please enter your GitHub username", "Please enter your email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const [ title, description, install, usage, contribute, tests, license, username, email] = questions;
    
    return inquirer.prompt ([{
        type: 'input',
        name: "title",
        message: title
    },
    {
        type: 'input',
        name: "projectDesc",
        message: description
    },{
        type: 'input',
        name: "install",
        message: install
    },
    {
        type: 'input',
        name: "usage",
        message: usage
    },
    {
        type: 'input',
        name: "contributer",
        message: contribute
    },
    {
        type: 'input',
        name: "test",
        message: tests
    },
    {
        type: 'checkbox',
        name: "license",
        message: license,
        choices: ["MIT", "GNU GPLv3", "MPL 2.0", "Apache 2.0", "Boost 1.0","Unlicense"]
    },
    {
        type: 'input',
        name: "github",
        message: username
    },
    {
        type: 'input',
        name: "email",
        message: email
    }
]);

}

// Function call to initialize app
init();
