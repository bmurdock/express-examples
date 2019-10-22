const express = require('express');
const apiPort = 3000;
const webPort = 8001;

const webServer = express();

const apiServer = express();

function middle(req, res, next) {
    console.log('Incoming request to: ', req.path);
    next();
}

webServer.use(middle);
webServer.use(express.static('public'));
apiServer.use(express.static('whatever'));


webServer.listen(webPort, () => {
    console.log(`Web Server listening on port ${webPort}`);
});

apiServer.listen(apiPort, function () {
    console.log(`API Server listening on port ${apiPort}`);
});

apiServer.get('/', (request, response) => {
    response.send('<h1>Welcome</h1>');
});

webServer.get('/', function (req, res) {
    res.send('Whatever.');
});

webServer.get('/help', function (req, res) {
    res.set('Content-Type', 'text/html');
    const body = `
    <header>
    <h1>Help Page</h1>
    </header>
    <section>
    <p>We are here to help you.</p>
    </section>
    `;
    res.send(body);
})

