const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('About our company...');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>the page does not exist</p>
        <a href="/">Bach to home page</a>
        `);
    }
})

server.listen(5000);