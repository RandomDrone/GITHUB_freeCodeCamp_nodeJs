//BUILT IN MODULES


const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);

console.log(`system uptime ${(os.uptime())}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log("current OS data", currentOs);