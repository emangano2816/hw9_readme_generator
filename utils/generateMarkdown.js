let badge;
let link;
let badgeImage;
let badgeLink;
let licenseText;

//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache 2.0 License':
            badge='https://img.shields.io/badge/License-Apache%202.0-blue.svg';
            break;
        case 'BSD 2-clause License':
            badge='https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';
            break;
        case 'BSD 3-clause License':
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
        case 'MIT License':
            badge='https://img.shields.io/badge/License-MIT-yellow.svg';
            break;
        case 'Mozilla Public License 2.0':
            badge='https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
            break;
        case 'The Unlicense':
            badge='https://img.shields.io/badge/license-Unlicense-blue.svg';
            break;
        default:
            badge='';
            break;
    }
    return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'Apache 2.0 License':
            link='https://opensource.org/licenses/Apache-2.0';
            break;
        case 'BSD 2-clause License':
            link='https://opensource.org/licenses/BSD-2-Clause';
            break;
        case 'BSD 3-clause License':
            link='https://opensource.org/licenses/BSD-3-Clause';
            break;
        case 'GNU Affero General Public License v3.0':
            link='https://www.gnu.org/licenses/agpl-3.0';
            break;
        case 'GNU General Public License v2.0':
            link='https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
            break;
        case 'GNU General Public License v3.0':
            link='https://www.gnu.org/licenses/agpl-3.0'
            break;
        case 'GNU Lesser General Public License v3.0':
            link='https://www.gnu.org/licenses/lgpl-3.0';
            break;
        case 'MIT License':
            link='https://opensource.org/licenses/MIT';
            break;
        case 'Mozilla Public License 2.0':
            link='https://opensource.org/licenses/MPL-2.0';
            break;
        case 'The Unlicense':
            link='http://unlicense.org/';
            break;
        default:
            link='';
            break;
    }
    return link;
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    badgeImage = renderLicenseBadge(data.license);
    badgeLink = renderLicenseLink(data.license);

    (badgeImage === '') ? licenseText = '' : licenseText = `This project is licensed under the terms of the [${data.license}](${badgeLink}).\n\n`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    renderLicenseSection(data);

    return `# ${data.title}\n\n![License Badge](${badgeImage})\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\n* [Installation](#installation)\n* [Usage Information](#usage-information)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## License\n\n${licenseText}## Contributing\n\n${data.contributions}\n\n## Tests\n\n${data.tests}\n\n## Questions?\n\nContact me through [GitHub](https://github.com/${data.githubuser}) or via email at: ${data.emailaddress}\n`
;
}

module.exports = {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown
}
