const http = require('http')
const port = 8085

const server = http.createServer('/', (request, response) => {
    console.log('headers: ', request.headers);
    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200);

    response.write('Just a string');
    response.write('<h1>Hello World</h1>');
    response.write('<p>This is just an example.</p>');

    response.end();
})

server.listen(port, (error) => {
    if (error) {
        console.log('Ooops: ', error)
    }
    console.log(`New server is listening at port ${port}`)
})
console.log(http.STATUS_CODES);
console.log(http.METHODS);