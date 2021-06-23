//Include packages needed for this application
const fs = require("fs");   //module included with node
const inquirer = require("inquirer");  //npm install
const generateMarkdown = require('./utils/generateMarkdown'); //custom module

//Create an array of questions for user input
const questions = [
    {             
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function(text) {
            return (text !== '') ? true : 'Please provide a project title. Provide a placeholder if unsure of title at this time.';
        }
    },
    {
        type: 'editor',
        message: 'Provide a description for your project.',
        name: 'description',
        default: `Description of project goes here.\n\nRemember to CTRL+S to save information before closing the editor.`,
    },
    {
        type: 'editor',
        message: 'Provide installation instructions.',
        name: 'installation',
        default: `Installation instructions go here.\n\nRemember to CTRL+S to save information before closing the editor.`,
    },
    {                   
        type: 'editor',
        message: 'Provide usage instructions.',
        name: 'usage',
        default: `Usage instructions go here.\n\nRemember to CTRL+S to save information before closing the editor.`,
    },
    {   
        type: 'editor',
        message: 'Provide guidelines for contributing to the project.',
        name: 'contributions',
        default: `Guidelines for contributing go here.\n\nRemember to CTRL+S to save information before closing the editor.`,
    },
    {
        type: 'editor',
        message: 'Provide instructions for testing the application.',
        name: 'tests',
        default: `Test instructions go here.\n\nRemember to CTRL+S to save information before closing the editor.`,
    },
    {
        type: 'list',
        message: 'Choose a license for your application.',
        name: 'license',
        choices: [
                    'Apache 2.0 License', 
                    'BSD 2-clause License',
                    'BSD 3-clause License',
                    'GNU Affero General Public License v3.0',
                    'GNU General Public License v2.0',
                    'GNU General Public License v3.0',
                    'GNU Lesser General Public License v3.0',
                    'MIT License',
                    'Mozilla Public License 2.0',
                    'The Unlicense',
                    'Do not wish to select license at this time.'
                ],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubuser',
        validate: function(text) {
            return (text !== '') ? true : 'Please provide your GitHub username so users are able to contact you with questions.' ;
        } 
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailaddress',
        validate: function(text) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return (emailPattern.test(text)) ? true : 'Please provide a valid email address so users are able to contact you with questions.';
        }
    }   
];

// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => {
                    err ? console.error(err) : console.log("Success! README.md created successfully.")
                }
            )
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then((response) => {
            console.log('The below information will be inlcuded in the generated README.');
            console.log(response);
            writeToFile('README_SAMPLE.md', response);
        })
}

// Function call to initialize app
init();
