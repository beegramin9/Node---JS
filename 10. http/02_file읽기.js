const http = require('http');
const fs = require('fs');

/* 최초의 대문 index.html은 이렇게 html으로 보내도 되는데 */
/* 그 이후의 view들은 js로 바꿔서 보냄(01_server기본.js)처럼 */
let server = http.createServer((req, res) => {
    /* 파일을 비동기로 읽는다. */
    fs.readFile('view/02_any.html', 'utf8', (error, html/* 데이터 읽기. 원래같았으면 data */) => {
        res.writeHead(200, { 'Content-type': 'text/html' });


        /* 제일 마지막에 나와야 함. 순서 중요 */
        res.end(html) /* html이라는 변수를 읽자. */
    })
});

server.listen(3000);