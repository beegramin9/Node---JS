const { request } = require("express");
const url = require('url');
const http = require('http');
const fs = require('fs');



let server = http.createServer((req, res) => {
    let method = req.method; /* url parse 객체의 pathname 속성 뽑기 */
    if (method === 'GET'/* html화면을 불러오는게 Get */) {
        fs.readFile('view/10_form.html', 'utf8', (e, html) => {
            res.end(html);
        })
    } else if (method === 'POST'/* 제출한 데이터를 받는 Post */) {
        res.end(`<h1>Received Form Data</h1>`);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

