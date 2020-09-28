const http = require('http');
const url = require('url');
const fs = require('fs');
const view = require('./view/01_first')



let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname

    if (pathName === '/') {
        let html = view.first();
        res.end(html) /* 기본일 경우에는 200같은 redirection메시지 필요없음 */
    } else if (pathName === '/image') {
        fs.readFile('media/Elvis.png', (error, image) => {
            res.writeHead(200, { 'Content-type': 'image/png' });


            /* 제일 마지막에 나와야 함. 순서 중요 */
            res.end(image) /* html이라는 변수를 읽자. */
        })
    } else if (pathName === '/audio') {
        fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
            res.writeHead(200, { 'Content-type': 'audio/mp3' });
            res.end(audio)
        })
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end()
    }




});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});