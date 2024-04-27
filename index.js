const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname: req_url, query } = url.parse(req.url, true);
    const operation = req_url.substr(1);
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);
    let result;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b === 0) {
                result = "OO";
            } else {
                result = a / b;
            }
            break;
        default:
            result = "Invalid request";
    }
    res.end(result.toString());
});

server.listen(3000, () => {
    console.log(`Listening on port 3000`);
});
