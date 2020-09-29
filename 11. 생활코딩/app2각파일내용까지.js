const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const view = require("./view/index");
const template = require('./view/template')

http
  .createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    /* /?id=CSS 부분, 즉 guery를 가져오기 위해서 */
    let pathName = url.parse(req.url).pathname;
    console.log(pathName, query); /* 디버깅할때 트랙 */

    switch (pathName) {
      case "/":
        if (!query.id) {
          /* 처음에 루트만 나와 있을 때, 즉 id를 가진 버튼을 아무것도 누르지 않았을 때 */
          fs.readdir("data", (e, filelist) => {
            /* 이벤트가 아니라 경로(폴더) 이름 */
            let list = template.listGen(filelist);
            /* 해당 디렉토리에 있는 파일 이름대로 <ul></ul>리스트에 넣는 함수 */
            let content = template.HOME_CONTENTS;
            let html = view.index('Web 기술', list, content);
            res.end(html);
          });
        } else {
          fs.readdir("data", (e, filelist) => {
            let list = template.listGen(filelist);
            let title = query.id
            /* 얘가 index.js에서의 타이틀이 되는 것 */

            let filename = 'data/' + title + '.txt'
            /* id로 들어온 title에 맞는 파일을 data폴더 안에서 찾고 */
            fs.readFile(filename, 'utf8', (e, buffer/* 파일에서 읽은 내용이 */) => {
              let html = view.index(title, list, buffer); /* index의 content 자리에 들어간다. */
              /* index.js의 콘텐트에 넣은 뒤에, index 파라미터를 다 찾았으니 html에 넣고 */
              res.end(html); /* 여기서 화면에 띄워주면 끝! */

            })
          });
        }
        break;

      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
