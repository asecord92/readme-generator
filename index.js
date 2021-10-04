// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["What is the name of your Project?(Required)", "Please describe this project(Required)", "How do you install this application?(Required)","Please describe how to use this project(Required)", "How can others contribute?(Required)", "Please provide examples of Tests:", "What type of license would you like to add?(Select One)", "Please enter your GitHub username(Required)", "Please enter your email address(Required)"];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
    
        console.log('ReadMe successfully created!')
    })
};   

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
        message: contribute,
        validate: contributerInput => {
            if(contributerInput) {
                return true;
            } else {
                console.log('This field cannot be blank!')
            };
        }
    },
    {
        type: 'input',
        name: "test",
        message: tests
    },
    {
        type: 'list',
        name: "license",
        message: license,
        choices: ["mit","unlicense"]
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
.then(answers => generateMarkdown(answers))
.then(pageLayout => writeToFile('./dist/readme.md', pageLayout))


