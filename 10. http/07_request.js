const http = require('http');
const url = require('url');
let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname
    // req 입력에서 url 속성으로 url 뽑고
    // 뽑은 url 속성을 url모듈의 parse 메소드로 parse하고
    // parse된 url에서 pathname 속성을 뽑는다.
    let html;
    if (pathName === '/') {
        html = '/';
    } else if (pathName === '/file') {
        html = '/file';
    } else {
        html = pathName;
    }
    // 제일 처음엔 아무 말도 없으니까 /로 나오고
    // 내가 계속 3000/ 뒤에 뭘 써주면 따라서 나온다

    /* 즉, url.parse 객체의 pathname 속성을 사용해서 구분지을 수 있다.*/

    res.end(`<h1>${html}</h1>`);


});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});