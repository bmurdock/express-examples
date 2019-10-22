const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200);
    console.log('Stuff');
    response.write('Stuff.');
    response.end('<p>The End</p>');
});


server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})
console.log('Supported Methods: ', http.METHODS);
console.log('Standard Status Codes: ', http.STATUS_CODES);