const { default: nodeCluster } = require('node:cluster');
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totolMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);