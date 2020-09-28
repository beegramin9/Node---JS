const http = require('http');

let server = http.createServer(function (request, response) {
    // console.log(request);
    console.log(request.headers.cookie);
    let cookie = request.headers.cookie; /* 이렇게도 쿠키를 받을 수 있다. */
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
    })
    response.end(`<h1>${cookie}</h1>`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

/* 쿠키 확인하려면 network- header -general을 보던가
application - cookies를 보던가. 쿠키 x표 누르면 삭제 가능*/

/* 다른 이상한게 겹쳐서 나오면 쿠키 x표 눌러서 계속 삭제해주면 됨 */