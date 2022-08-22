const { readFileSync, writeFileSync } = require('fs')

console.log("start");
const first = readFileSync("./content/first.txt", 'utf-8')
console.log(first);

const second = readFileSync("./content/second.txt", 'utf-8')

writeFileSync(
    "./content/result-async.txt",
    `second file data - ${second}`,
    {flag: 'a'}
)

console.log("end");