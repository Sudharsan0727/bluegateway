const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');
const matches = content.match(/<([A-Z][a-zA-Z0-9]*)/g);
if (matches) {
    const tags = [...new Set(matches.map(m => m.substring(1)))];
    console.log(tags.sort().join(', '));
}
