const express = require('express');
const web = express();
const api = express();
const webPort = 8082;
const apiPort = 8089;

api.use(express.json());

web.get('/', (request, response) => {
    response.send('Welcome <span>Person</span>');
});

web.listen(webPort, () => {
    console.log(`Express app is now listening on port ${webPort}!`);
});
api.all('/', (req, res, next) => {
    console.log('Do this first');
    next();
})
api.get('/', (req, res) => {
    res.send({ a: "Hello" });
})
api.get('/test', (req, res) => {
    res.send('Test route.');
})

api.listen(apiPort, () => {
    console.log(`API listening on port ${apiPort}`);
});
