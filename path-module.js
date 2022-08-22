const path = require('path');

console.log(path.sep);

const filepath = path.join("module", "display.js")
const absolute = path.join(__dirname, "module", "display.js")

console.log(filepath);
console.log(absolute);
console.log(path.basename(absolute));