const http = require('http');
const view = require('./view/01_first')

let server = http.createServer(function (request, response) {
    // console.log(request);
    let html = view.first();/*  */
    response.writeHead(200/* Status Code, OK */, { 'Content-Type': 'image/png'/* 얘네들을 MIme 타입이라고 함 */ }/* 디폴트값, 생략 가능 */)
    // 데이터 타입이 이미지나 파일이면 어떻게 해야할까? media 폴더
    response.end(html);
});

server.listen(3000);
/* 웹에 localhost:3000 */
/* 3000번 포트에 요청했더니 결과가 나왔다! */
