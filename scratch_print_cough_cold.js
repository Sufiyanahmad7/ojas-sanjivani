const fs = require('fs');
const content = fs.readFileSync('src/data/diseases.ts', 'utf8');

// Find the cough-cold key start and read until the next root-level key or block end
const startIndex = content.indexOf('"cough-cold":');
if (startIndex !== -1) {
  // Let's print about 2500 characters
  console.log(content.substring(startIndex, startIndex + 2500));
} else {
  console.log('cough-cold not found');
}
