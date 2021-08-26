const { readFileSync, writeFileSync } = require('fs');

console.log('step 1');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);
writeFileSync('./content/result-sync.txt', `This is the result: ${first + ' AAAAAABBBBBBBnd ' + second}`);//overwrites previous content


//append to file
writeFileSync('./content/result-sync.txt', '\nSome more text.....', { flag: 'a' });

console.log('step 2');
console.log('step 3');