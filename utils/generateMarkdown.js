// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  };
  return `
 ![License](https://img.shields.io/badge/licenseName-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }

  return `[Learn More about ${license}](https://choosealicense.com/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  };
  return `
  ## License
  
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}`
}

function testSection(test){
  if(!test) {
    return '';
};
return `
## Tests

${test}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.projectDesc}
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  
          ${answers.install}

  ## Usage

  ${answers.usage}

  ## Credits

  ${answers.contributer}

  ${testSection(answers.test)}

  ${renderLicenseSection(answers.license)}


  ## Questions

  Find a link to the full repository at https://github.com/${answers.github}

  For further questions please contact me at [${answers.email}](mailto:${answers.email})

`

}

module.exports = generateMarkdown;
