const { readFile, writeFile } = require('fs');

console.log('step 1');

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = data;

    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = data;

        writeFile('./content/result-async.txt', `this is the result of aaaaaasync: ${first + second}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('step 2');
        })
    })
});

console.log('step 3');