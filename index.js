const http = require('http');
const request = require('request');
const port = process.env.PORT || 3233;

const apiAddress = "https://pokeapi.co/api/v2/pokemon";
function fetchRandom(callback) {
    const index = Math.floor(Math.random() * 201) + 1;
    const options = {
        url: `${apiAddress}/${index}`
    };
    request(options, (err, res, body) => {
        if (err) {
            console.error(err);
            callback(err);
            return;
        }
        const parsed = JSON.parse(body);
        return callback(null, parsed);

    });
}



function properName(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200);
    fetchRandom((err, pokemon) => {
        const body = `
        <div>
            <img src="${pokemon.sprites.front_default}">
            <ul>Stats
                <li>Name: ${properName(pokemon.name)}</li>
                <li>Height: 3</li>
                <li>Weight: 3</li>
            </ul>
            <ul>
                Moves
                <li>Transform</li>
            </ul>
        </div>
        `;
        response.write(body);
        response.end();
    });

});


server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})
