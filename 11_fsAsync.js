//BUILT IN MODULES


const{readFile, writeFile} = require('fs'); 

console.log(1)
console.log(2)
//read first file
readFile('./fold_1/first.txt', 'utf-8', (err, result) => {
    if (err){
        console.log('CALLBACK - erroe code', err);
        return;
    }
    else{
        const first = result;
        //read second file
        readFile('./fold_1/second.txt', 'utf-8', (err, result) => {
            if (err){
                console.log('CALLBACK - erroe code', err);
                return;
            }
            else{
                const second = result;
                writeFile('./fold_1/resultAsync.txt', `\n \r Here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
                    if (err){ console.log(err);}
                    else{console.log(result);}
                })
            }
        })
    }
})
console.log(3);
console.log(4);