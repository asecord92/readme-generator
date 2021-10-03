module.exports = templateData => {
    console.log(templateData);

    return `

    # ${templateData.title}

    ## Description
    ${templateData.projectDesc}
    ## Table of Contents

    * [Installation](#installation)
    * [Usage] (#usage)
    * [Credits](#credits)
    * [License](#license)
    
    ## Installation

    ${templateData.install}

    ## Usage

    ${templateData.usage}

    ## Credits

    ${templateData.contributer}

    ## Questions

    Find a link to the full repository at https://github.com/${templateData.github}

    For further questions please contat me at ${templateData.email}



    `

    //something to do with license logic
}