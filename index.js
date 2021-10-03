// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ["What is the name of your Project?(Required)", "Please describe this project(Required)", "How do you install this application?(Required)","Please describe how to use this project(Required)", "How can others contribute?", "Please provide examples of Tests:", "What type of license would you like to add?(Select One)", "Please enter your GitHub username(Required)", "Please enter your email address(Required)"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const [ title, description, install, usage, contribute, tests, license, username, email] = questions;
    
    return inquirer.prompt ([{
        type: 'input',
        name: "title",
        message: title,
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!')
            };
        }
    },
    {
        type: 'input',
        name: "projectDesc",
        message: description,
        validate: projectDescInput => {
            if(projectDescInput) {
                return true;
            } else {
                console.log('Please describe this project!')
            };
        }
    },{
        type: 'input',
        name: "install",
        message: install,
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please describe how to install this project')
            };
        }
    },
    {
        type: 'input',
        name: "usage",
        message: usage,
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('This field cannot be blank!')
            };
        }
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
        message: username,
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!')
            };
        }
    },
    {
        type: 'input',
        name: "email",
        message: email,
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email!')
            };
        }
    }
    
])

}

// Function call to initialize app
init()
.then(answers => console.log(answers));
