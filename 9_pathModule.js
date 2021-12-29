//BUILT IN MODULES


const path = require('path');

console.log(path.sep);

const filePath = path.join('/fold_1', 'fold_1_1', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutPath = path.resolve(__dirname, 'fold_1', 'fold_1_1', 'test.txt')
console.log(absolutPath);