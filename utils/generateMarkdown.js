// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }
//![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }
//(https://opensource.org/licenses/MIT)


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}

  (license badge goes here)
  
  # Description
  ${answers.description}
  
  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  To install this application Run this command.
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.license}
  
  ## Contributing
 
  ${answers.contributing}
  
  
  ## Tests
  Tests can be run using the following command.
  ${answers.tests}
  
  ## Questions
  Any questions may be directed to my email below, feel free to visit my GitHub profile as well.  

  Email: ${answers.email}   

  [GitHub](https://github.com/${answers.username})
  `;
}


module.exports = generateMarkdown;




