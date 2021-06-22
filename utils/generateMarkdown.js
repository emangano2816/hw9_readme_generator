// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge;
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache 2.0 License':
            badge='https://img.shields.io/badge/License-Apache%202.0-blue.svg';
            break;
        case 'BSD 2-clause "Simplified" License':
            badge='https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';
            break;
        case 'BSD 3-clause Clear License':
            badge='https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
            break;
        case 'GNU Affero General Public License v3.0':
            badge='https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
            break;
        case 'GNU General Public License v2.0':
            badge='https://img.shields.io/badge/License-GPL%20v2-blue.svg';
            break;
        case 'GNU General Public License v3.0':
            badge='https://img.shields.io/badge/License-GPLv3-blue.svg'
            break;
        case 'GNU Lesser General Public License v3.0':
            badge='https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
            break;
        case 'MIT':
            badge='https://img.shields.io/badge/License-MIT-yellow.svg'
            break;
        case 'The Unlicense':
            badge='https://img.shields.io/badge/license-Unlicense-blue.svg';
            break;
        default:
            badge='';
            break;
    }
    console.log(badge);
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
    badge,
    renderLicenseBadge
}
