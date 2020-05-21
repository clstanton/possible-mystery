// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Description
  ##Table of Contents (Optional)
  ##Installation
  ##Usage
  ##Credits
  ##License
  ##Badges
  ##Contributing
  ##Tests
`;
}

module.exports = generateMarkdown;