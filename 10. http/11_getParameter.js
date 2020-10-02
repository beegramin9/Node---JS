const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    let query = url.parse(req.url, true).query;
    /* true: query 속성을 객체 형식으로
       false: query 속성을 문자열 형식으로
       거의 true를 사용하겠지? 
     */

    console.log(query.name, query.region/* 속성처럼 뽑을 수 있다. */); /* 내 터미널에도 출력 */
    // Get 파라미터 (화면에) 출력. ocalhost:3000?name=kim&region=Seoul
    // 사용자가 쿼리를 다 쓸까요? 아니죠. kim/Seoul만 씁니다.

    res.end(`<h1>${JSON.stringify(query)}</h1>`);
    /* 문자열로 만들어서 바깥으로 내보내는 것 */


    /* 다른 예: 이렇게 붙여서 간략하게 쓸 수 있다. */
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
