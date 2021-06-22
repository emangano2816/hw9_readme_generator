// TODO: Include packages needed for this application
const fs = require("fs");   //module included with node
const inquirer = require("inquirer");  //npm install
const generateMarkdown = require('./utils/generateMarkdown'); //custom module

// TODO: Create an array of questions for user input
const questions = [
    {             
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function(text) {
            if (text === '') {
                return 'Please provide a project title. Provide a placeholder if unsure of title at this time.'
            } 
            return true;
        }
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
        message: 'Provide usage instructions.',
        name: 'usage',
        default: 'Usage instructions go here.',
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
                    'Apache 2.0 License', 
                    'BSD 2-clause License',
                    'BSD 3-clause License',
                    'GNU Affero General Public License v3.0',
                    'GNU General Public License v2.0',
                    'GNU General Public License v3.0',
                    'GNU Lesser General Public License v3.0',
                    'MIT License',
                    'Mozilla Public License 2.0',
                    'The Unlicense'                     
                ],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubuser',
        validate: function(text) {
            if (text === '') {
                return 'Please provide your GitHub username so users are able to contact you for questions.'
            } 
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailaddress',
        validate: function(text) {
            if (text === '') {
                return 'Please provide an email address so users are able to contact you for questions.'
            } 
            return true;
        }
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {

    let badgeImage = generateMarkdown.renderLicenseBadge(data.license);
    let badgeLink = generateMarkdown.renderLicenseLink(data.license);

    fs.writeFile(fileName, 
                `# ${data.title}  \n <img src="${badgeImage}">  \n\n ## Description  \n ${data.description}  \n\n ## Table of Contents \n * [Installation](#installation) \n * [Usage Information](#usage-information) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [License](#license) \n * [Questions](#questions) \n\n ## Installation \n ${data.installation} \n\n ## Usage \n ${data.usage} \n\n ## License \n This project is licensed under the terms of the [${data.license}](${badgeLink}). \n\n ## Contributing \n ${data.contributions} \n\n ## Tests \n ${data.tests} \n\n ## Questions? \n Contact me through [GitHub](https://github.com/${data.githubuser}) or via email at: ${data.emailaddress}`, 
                (err) => {
                    err ? console.error(err) : console.log("Success! README.md created successfully.")
                }
            )
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then((response) => {
            console.log('The below information will be inlcuded in the generated README');
            console.log(response);
            writeToFile('README_SAMPLE.md', response);
        })
}

// Function call to initialize app
init();
