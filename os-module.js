const os = require('os');

const currentOS = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    platform: os.platform(),
    cpu: os.cpus(),
    uptime: os.uptime()
}

console.log(currentOS);
console.log(os.networkInterfaces());