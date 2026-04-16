const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');
let openBraces = 0;
let closeBraces = 0;
for (let i = 0; i < content.length; i++) {
    if (content[i] === '{') openBraces++;
    if (content[i] === '}') closeBraces++;
}
console.log(`Open: ${openBraces}, Close: ${closeBraces}`);
if (openBraces !== closeBraces) {
    console.log('UNBALANCED!');
} else {
    console.log('Balanced.');
}
