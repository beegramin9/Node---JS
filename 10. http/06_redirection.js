const http = require('http');
const view = require('./view/01_first')

let server = http.createServer(function (request, response) {
    response.writeHead(302/* Page redirection */, { 'Location': 'http://www.hanbit.co.kr' })
    response.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});