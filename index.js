// TODO: Include packages needed for this application
const fs = require("fs");   //module included with node
const inquirer = require("inquirer");
const inquire = require("inquirer");  //npm package that is installed first
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt ([
            {             
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
                default: 'Project Title',
            },
            {
                type: 'editor',
                message: 'Provide a descriptoin for your project.',
                name: 'description',
                default: 'Description of project goes here.',
            },
            {
                type: 'editor',
                message: 'Provide installation instructions.',
                name: 'installation',
                default: 'Installation instructions go here.',
            },
            {   
                type: 'editor',
                message: 'Provide guidelines for contributing to the project.',
                name: 'contributions',
                default: 'Guidelines for contributing go here.',
            },
            {
                type: 'editor',
                message: 'Provide instructions for testing the application.',
                name: 'tests',
                default: 'Test instructions go here.',
            },
            {
                type: 'list',
                message: 'Choose a license for your application.',
                name: 'license',
                choices: [
                            'Apache license 2.0', 
                            'GNU Affero General Public License v3.0',
                            'BSD 2-clause "Simplified" license',
                            'BSD 3-clause Clear license',
                            'GNU General Public License v2.0',
                            'GNU General Public License v3.0',
                            'GNU Lesser General Public License v3.0',
                            'MIT',
                            'The Unlicense'                     
                        ],
            },
            {
                type: 'input',
                message: 'What is your GitHub username (link to repo will be included for questions)?',
                name: 'questions',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'emailaddress',
            }
        ])
        .then((response) => {
            console.log(response);
        })
}

// Function call to initialize app
init();
