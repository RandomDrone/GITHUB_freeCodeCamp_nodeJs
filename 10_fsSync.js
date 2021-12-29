//BUILT IN MODULES

// sposob 1
const{readFileSync, writeFileSync, write} = require('fs'); 
// sposob 2
// const fs = require('fs');
// fs.readFileSync
// fs.writeFileSync

const first = readFileSync('fold_1/first.txt', 'utf-8');
const second = readFileSync('./fold_1/second.txt', 'utf-8');

writeFileSync('./fold_1/resultSync.txt', `\n \r Here is the result: ${first}, ${second}`, {flag: 'a'});
