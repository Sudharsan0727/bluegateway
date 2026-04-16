const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');
// Fix < section, < div, < h2, etc. (space after <)
content = content.replace(/< (\/?[a-zA-Z][a-zA-Z0-9]*)/g, '<$1');
// Fix </div >, </section >, etc. (space before > in closing tags)
content = content.replace(/<\/([a-zA-Z][a-zA-Z0-9]*) >/g, '</$1>');
fs.writeFileSync('src/App.jsx', content);
console.log('Fixed spaces in tags.');
