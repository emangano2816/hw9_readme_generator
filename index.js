// TODO: Include packages needed for this application
const fs = require("fs");   //module included with node
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(fileName, 
                `# ${data.title} \n ## Description \n ${data.description} \n ## Table of Contents \n * [Installation](https://github.com/${data.githubuser}/hw9_readme_generator/##Installation) \n * [Usage Information](https://github.com/${data.githubuser}/hw9_readme_generator/##Usage-Information) \n * [Contribution](https://github.com/${data.githubuser}/hw9_readme_generator/##Contributing) \n * [Tests](https://github.com/${data.githubuser}/hw9_readme_generator/##Tests) \n [License](https://github.com/${data.githubuser}/hw9_readme_generator/##License) \n * [Questions](https://github.com/${data.githubuser}/hw9_readme_generator/##Questions) \n ## Installation \n ${data.installation} \n ## Usage Information \n ${data.usage} \n ## Contributing \n ${data.contributions} \n ## Tests \n ${data.tests} \n ## License \n ${data.license} \n ## Questions? \n Contact me through [GitHub](https://github.com/${data.githubuser}) or via email at: ${data.emailaddress}`, 
                 (err) => {
        err ? console.error(err) : console.log("Success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt ([
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
                name: 'githubuser',
                validate: function(text) {
                    if (text === '') {
                        return 'Please provide your GitHub username.'
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
                        return 'Please provide an email address so users are able to contact your for questions.'
                    } 
                    return true;
                }
            }
        ])
        .then((response) => {
            console.log(response);
            writeToFile('README.md', response);
        })
}

// Function call to initialize app
init();
