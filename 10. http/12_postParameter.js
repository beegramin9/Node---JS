const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring')

// request가 두 번 들어가서
// 첫번째 request는 get으로 들어가고
// 두번째 response는 post로 들어온 것
// 즉 request가 여러 번 들어올 수 있다는 것
http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname; /* url parse 객체의 pathname 속성 뽑기 */
    if (pathName === '/') {
        fs.readFile('view/12_form.html', 'utf8', (e, html) => {
            res.end(html);
        })
    } else if (pathName === '/proc'/* 제출한 데이터를 받는 Post */) {
        let body = '';
        req.on('data', function (data) {
            body += data;
        })
        req.on('end', function () {/* 데이터를 이벤트로 처리함. "Data"란 이벤트가 발생하면...! 이벤트 핸들러(콜백함수)로 처리한다 */
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid, param.pwd);
            res.end(`<h1>${JSON.stringify(param)}</h1>`);
        })
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

